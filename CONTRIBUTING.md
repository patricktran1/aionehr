# Contributing to AION EHR

This public repository contains the AION EHR launch site and waitlist endpoint. Contributions should remain small, reviewable, and explicit about privacy and clinical-product boundaries.

## Local validation

Requires Node.js 22 or later.

```bash
npm install
npm run validate
npm run test:coverage
```

## Contribution expectations

- Add or update tests for every waitlist validation change.
- Keep database access behind parameterized Neon queries.
- Preserve method restrictions, length limits, normalized email handling, and honeypot behavior.
- Never commit database credentials, waitlist exports, patient information, or production analytics.
- Do not present the launch site or waitlist as a functioning electronic health record or clinical decision system.

## Pull request checklist

- [ ] The change is focused and documented.
- [ ] `npm run validate` passes.
- [ ] Validation changes include success and failure cases.
- [ ] No credentials, personal information, or production records are included.
- [ ] Product and clinical-scope implications are described.
