# USIU Hostel Maintenance Reporting System (UHMRS)

UHMRS is a full-stack reporting system for United States International University-Africa hostel residents and the Facilities and Hostel Management Department. Students create and track reports for Hostels A-E; facilities staff work assigned requests; administrators have operational analytics.

## Run locally

1. Copy `.env.example` to `apps/api/.env` and set a PostgreSQL `DATABASE_URL` and `JWT_SECRET`.
2. Run `npm install`, `npm run db:generate`, then `npm run prisma:migrate -w @uhmrs/api`.
3. Run `npm run db:seed` for 50 students, 10 technicians, and 100 reports.
4. Run `npm run dev`. The web app is available at the Vite URL (normally `http://localhost:5173`).

Seed passwords are `UHMRS2026!`; use `student1@usiu.ac.ke`, `tech1@usiu.ac.ke`, or `admin@usiu.ac.ke`.

## Architecture

- `apps/web`: React, TypeScript, Vite dashboard
- `apps/api`: Express, JWT authorization, Prisma API
- `apps/api/prisma`: PostgreSQL schema and realistic development seed
- `docs`: SCM, release, audit, deployment, and change-control evidence

## Lifecycle

`Submitted -> Verified -> Assigned -> In Progress -> Resolved -> Closed`. Every status transition creates a `StatusHistory` entry and student notification.

## SCM

This repository uses Git Flow (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`), Conventional Commits, semantic versioning, and the release history in [CHANGELOG.md](CHANGELOG.md). See [docs](docs).
