// Copyright 2024 New Vector Ltd.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

//! A module containing repositories for the job queue

mod worker;

pub use self::worker::{QueueWorkerRepository, Worker};