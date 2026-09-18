# Build and Deployment Guide

Use Node 18+ and PostgreSQL 14+. Set `DATABASE_URL`, `JWT_SECRET`, `PORT`, and `VITE_API_URL` from `.env.example`. Install workspace packages, generate Prisma, apply migrations, seed optionally, then run `npm run build`. In production deploy the API with its database connection first, run migrations once, set the public API URL for the web build, then serve the generated `apps/web/dist` assets. Do not commit `.env` files or JWT secrets.
