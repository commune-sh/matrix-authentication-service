// Copyright 2022 The Matrix.org Foundation C.I.C.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#![forbid(unsafe_code)]
#![deny(clippy::all, clippy::str_to_string, rustdoc::broken_intra_doc_links)]
#![warn(clippy::pedantic)]

use std::{collections::HashMap, fmt::Display, sync::Arc};

use camino::{Utf8Path, Utf8PathBuf};
use reqwest::Client;
use tokio::io::AsyncWriteExt;
use tracing::Level;

pub mod jose;
pub mod oauth;
pub mod traits;

#[derive(Debug)]
struct File {
    client: Arc<Client>,
    registry_name: &'static str,
    registry_url: &'static str,
    sections: Vec<Section>,
    items: HashMap<&'static str, Vec<EnumMember>>,
}

fn resolve_path(relative: impl AsRef<Utf8Path>) -> Utf8PathBuf {
    let crate_root = Utf8Path::new(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = crate_root.parent().unwrap().parent().unwrap();
    workspace_root.join(relative)
}

impl File {
    #[tracing::instrument(skip(client))]
    fn new(registry_name: &'static str, registry_url: &'static str, client: Arc<Client>) -> Self {
        tracing::info!("Generating file from IANA registry");
        Self {
            client,
            registry_name,
            registry_url,
            sections: Vec::new(),
            items: HashMap::new(),
        }
    }

    #[tracing::instrument(skip_all, fields(url))]
    async fn load<T: EnumEntry>(mut self) -> anyhow::Result<Self> {
        tracing::Span::current().record("url", T::URL);
        self.sections.extend(T::sections());
        for (key, value) in T::fetch(&self.client).await? {
            self.items.entry(key).or_default().push(value);
        }
        Ok(self)
    }

    #[tracing::instrument(skip_all)]
    async fn write(&self, path: impl AsRef<Utf8Path>) -> anyhow::Result<()> {
        let mut file = tokio::fs::OpenOptions::new()
            .create(true)
            .truncate(true)
            .write(true)
            .open(path.as_ref())
            .await?;

        tracing::info!("Writing file");
        file.write_all(format!("{self}").as_bytes()).await?;

        Ok(())
    }
}

impl Display for File {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        writeln!(
            f,
            r#"// Copyright 2022 The Matrix.org Foundation C.I.C.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Enums from the {:?} IANA registry
//! See <{}>

// Do not edit this file manually

use parse_display::{{Display, FromStr}};
use schemars::JsonSchema;
use serde_with::{{DeserializeFromStr, SerializeDisplay}};"#,
            self.registry_name, self.registry_url,
        )?;

        for section in &self.sections {
            let Some(list) = self.items.get(section.key) else {
                continue;
            };

            let is_exhaustive = section.key == "OAuthAuthorizationEndpointResponseType";

            let non_exhaustive_attr = if is_exhaustive {
                ""
            } else {
                "\n#[non_exhaustive]"
            };

            write!(
                f,
                r#"
/// {}
///
/// Source: <{}>
#[derive(
    Debug,
    Clone,
    PartialEq,
    Eq,
    PartialOrd,
    Ord,
    Hash,
    Display,
    FromStr,
    SerializeDisplay,
    DeserializeFromStr,
    JsonSchema,
)]{}
pub enum {} {{"#,
                section.doc,
                section.url.unwrap(),
                non_exhaustive_attr,
                section.key,
            )?;
            for member in list {
                writeln!(f)?;
                if let Some(description) = &member.description {
                    writeln!(f, "    /// {description}")?;
                } else {
                    writeln!(f, "    /// `{}`", member.value)?;
                }
                writeln!(f, "    #[schemars(rename = \"{}\")]", member.value)?;
                writeln!(f, "    #[display(\"{}\")]", member.value)?;
                writeln!(f, "    {},", member.enum_name)?;
            }

            if !is_exhaustive {
                // Add a variant for custom enums
                writeln!(f)?;
                writeln!(f, "    /// An unknown value.")?;
                writeln!(f, "    #[display(\"{{0}}\")]")?;
                writeln!(f, "    #[schemars(skip)]")?;
                writeln!(f, "    Unknown(String),")?;
            }

            writeln!(f, "}}")?;
        }

        Ok(())
    }
}

use self::traits::{EnumEntry, EnumMember, Section};

#[tracing::instrument(skip_all, fields(%path))]
async fn generate_jose(
    client: &Arc<Client>,
    path: impl AsRef<Utf8Path> + std::fmt::Display,
) -> anyhow::Result<()> {
    let path = resolve_path(path);
    let client = client.clone();

    let file = File::new(
        "JSON Object Signing and Encryption",
        "https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml",
        client.clone(),
    )
    .load::<jose::WebEncryptionSignatureAlgorithm>()
    .await?
    .load::<jose::WebEncryptionCompressionAlgorithm>()
    .await?
    .load::<jose::WebKeyType>()
    .await?
    .load::<jose::WebKeyEllipticCurve>()
    .await?
    .load::<jose::WebKeyUse>()
    .await?
    .load::<jose::WebKeyOperation>()
    .await?;

    file.write(path).await?;

    Ok(())
}

#[tracing::instrument(skip_all, fields(%path))]
async fn generate_oauth(
    client: &Arc<Client>,
    path: impl AsRef<Utf8Path> + std::fmt::Display,
) -> anyhow::Result<()> {
    let path = resolve_path(path);
    let client = client.clone();

    let file = File::new(
        "OAuth Parameters",
        "https://www.iana.org/assignments/jose/jose.xhtml",
        client.clone(),
    )
    .load::<oauth::AccessTokenType>()
    .await?
    .load::<oauth::AuthorizationEndpointResponseType>()
    .await?
    .load::<oauth::TokenTypeHint>()
    .await?
    .load::<oauth::TokenEndpointAuthenticationMethod>()
    .await?
    .load::<oauth::PkceCodeChallengeMethod>()
    .await?;

    file.write(path).await?;

    Ok(())
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt()
        .with_max_level(Level::INFO)
        .pretty()
        .init();

    let client = Client::builder().user_agent("iana-parser/0.0.1").build()?;
    let client = Arc::new(client);

    let iana_crate_root = Utf8Path::new("crates/iana/");

    generate_jose(&client, iana_crate_root.join("src/jose.rs")).await?;
    generate_oauth(&client, iana_crate_root.join("src/oauth.rs")).await?;

    Ok(())
}
