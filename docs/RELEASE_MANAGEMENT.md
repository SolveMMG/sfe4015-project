# Release Management

Version history: `v1.0.0` Core Reporting System; `v1.1.0` Technician Assignment; `v1.2.0` Notifications; `v2.0.0` Analytics and Reporting.

Create `release/x.y.z` from `develop`, freeze features, run type checks and API smoke tests, review migration safety and `.env.example`, update `VERSION` and `CHANGELOG.md`, then merge to `main` and tag `vX.Y.Z`. Deploy the API after migrations, deploy the web bundle, smoke test login and report status progression, and merge the release back to `develop`.
