// Copyright 2024, 2025 New Vector Ltd.
//
// SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
// Please see LICENSE files in the repository root for full details.

mod mas_writer;
mod synapse_reader;

mod migration;
mod progress;
mod telemetry;

type RandomState = rustc_hash::FxBuildHasher;
type HashMap<K, V> = rustc_hash::FxHashMap<K, V>;

pub use self::{
    mas_writer::{MasWriter, checks::mas_pre_migration_checks, locking::LockedMasDatabase},
    migration::migrate,
    progress::{Progress, ProgressCounter, ProgressStage},
    synapse_reader::{
        SynapseReader,
        checks::{
            synapse_config_check, synapse_config_check_against_mas_config, synapse_database_check,
        },
        config as synapse_config,
    },
};
