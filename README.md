# AION EHR

[![CI](https://github.com/patricktran1/aionehr/actions/workflows/ci.yml/badge.svg)](https://github.com/patricktran1/aionehr/actions/workflows/ci.yml)
[![CodeQL](https://github.com/patricktran1/aionehr/actions/workflows/codeql.yml/badge.svg)](https://github.com/patricktran1/aionehr/actions/workflows/codeql.yml)

Public launch site and waitlist for **AION EHR**, an AI-native clinical workspace for dermatology.

This repository contains the product site and a bounded waitlist endpoint. It is not the electronic health record application and does not process clinical records or make patient-care decisions.

## Deployment

The site deploys automatically to Vercel from the `main` branch.

## Waitlist database

The waitlist uses a Vercel Function at `api/waitlist.js` and Neon Postgres.

1. In Vercel, open the AION EHR project.
2. Go to **Storage** or **Marketplace** and add **Neon Postgres**.
3. Connect the database to this project and confirm that `DATABASE_URL` is available in the Production environment.
4. Redeploy the latest commit.

The API creates the `waitlist` table automatically on the first valid submission. Entries contain name, email, source, and timestamps. Duplicate emails update the existing entry rather than creating duplicates.

### Validation boundary

`lib/waitlist-validation.js` performs deterministic normalization before database access:

- accepts object or JSON-string request bodies
- trims and length-limits name, email, and source fields
- lowercases email addresses
- rejects malformed submissions
- silently discards honeypot-captured bot payloads

Database writes remain parameterized through Neon tagged-template queries.

## Local preview

```bash
npm install
vercel dev
```

A local `.env.local` containing `DATABASE_URL` is required to test live submissions locally.

## Local validation

```bash
npm run validate
npm run test:coverage
```

The local gate checks JavaScript syntax and runs native Node regression tests for waitlist normalization, invalid JSON, input limits, email validation, honeypot behavior, and header-injection attempts.

### Automated quality gates

Every pull request and push to `main` runs:

1. high-severity dependency auditing
2. JavaScript syntax checks
3. waitlist regression tests
4. native Node coverage reporting with a retained artifact
5. CodeQL security analysis

These checks validate the launch-site software boundary. They do not establish HIPAA compliance, clinical validity, EHR readiness, or authorization to store patient information.

## Structure

- `index.html` — product site and waitlist form
- `styles.css` — responsive light clinical visual system
- `script.js` — form handling and reveal animations
- `api/waitlist.js` — persistent waitlist endpoint
- `lib/waitlist-validation.js` — deterministic request normalization and validation
- `test/` — native Node regression tests
- `package.json` — Neon dependency and validation scripts
- `favicon.svg` — browser icon
- `og-image.svg` — social sharing image
- `vercel.json` — Vercel routing configuration

## Contributing

Focused contributions are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request.
