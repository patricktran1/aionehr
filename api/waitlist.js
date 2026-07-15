import { neon } from "@neondatabase/serverless";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const connectionString =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.NEON_DATABASE_URL;

  if (!connectionString) {
    return response.status(503).json({ error: "The waitlist is temporarily unavailable. Please try again shortly." });
  }

  let body = {};
  try {
    body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  } catch {
    return response.status(400).json({ error: "Invalid submission." });
  }

  const name = String(body.name || "").trim().slice(0, 100);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  const source = String(body.source || "aionehr.com").trim().slice(0, 100);
  const honeypot = String(body.company || "").trim();

  // Silently accept bot submissions captured by the hidden field.
  if (honeypot) return response.status(200).json({ ok: true });

  if (name.length < 2) return response.status(400).json({ error: "Please enter your name." });
  if (!EMAIL_PATTERN.test(email)) return response.status(400).json({ error: "Please enter a valid email address." });

  try {
    const sql = neon(connectionString);

    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(254) NOT NULL UNIQUE,
        source VARCHAR(100) NOT NULL DEFAULT 'aionehr.com',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO waitlist (name, email, source)
      VALUES (${name}, ${email}, ${source})
      ON CONFLICT (email)
      DO UPDATE SET
        name = EXCLUDED.name,
        source = EXCLUDED.source,
        updated_at = NOW()
    `;

    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return response.status(500).json({ error: "We could not add you right now. Please try again." });
  }
}
