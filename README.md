# AION EHR

Public launch site for **AION EHR**, the AI-native operating system for dermatology.

## Deploy

This is a dependency-free static website. Import the repository into Vercel and deploy with the default settings. No build command or environment variables are required.

## Local preview

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Structure

- `index.html` — site content and semantic structure
- `styles.css` — responsive visual system
- `script.js` — reveal animations and current year
- `favicon.svg` — browser icon
- `og-image.svg` — social sharing image
- `vercel.json` — clean static routing
