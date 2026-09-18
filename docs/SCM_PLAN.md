# Software Configuration Management Plan

## Scope and roles
The configuration manager protects baselines and releases. Developers implement approved changes; reviewers approve pull requests; the project lead authorizes releases. All changes are traceable to an issue or change request.

## Configuration items
Source code, Prisma database schema, environment-variable template, documentation, tests, UI components, build scripts, and release notes are controlled configuration items. `main` is the production baseline and `develop` is the integration baseline.

## Control
Git Flow is used: `feature/*` branches merge into `develop`, `release/*` branches stabilize a release, and `hotfix/*` branches originate from `main`. Pull requests require review, a successful build, and updated affected documentation. Tags use semantic versioning.
