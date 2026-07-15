# AION EHR

Public launch site and waitlist for **AION EHR**, an AI-native clinical workspace for dermatology.

## Deployment

The site deploys automatically to Vercel from the `main` branch.

## Waitlist database

The waitlist uses a Vercel Function at `api/waitlist.js` and Neon Postgres.

1. In Vercel, open the AION EHR project.
2. Go to **Storage** or **Marketplace** and add **Neon Postgres**.
3. Connect the database to this project and confirm that `DATABASE_URL` is available in the Production environment.
4. Redeploy the latest commit.

The API creates the `waitlist` table automatically on the first valid submission. Entries contain name, email, source, and timestamps. Duplicate emails update the existing entry rather than creating duplicates.

## Local preview

```bash
npm install
vercel dev
```

A local `.env.local` containing `DATABASE_URL` is required to test live submissions locally.

## Structure

- `index.html` — product site and waitlist form
- `styles.css` — responsive light clinical visual system
- `script.js` — form handling and reveal animations
- `api/waitlist.js` — persistent waitlist endpoint
- `package.json` — Neon serverless database dependency
- `favicon.svg` — browser icon
- `og-image.svg` — social sharing image
- `vercel.json` — Vercel routing configuration
