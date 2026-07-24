export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseBody(rawBody) {
  if (typeof rawBody !== "string") return rawBody && typeof rawBody === "object" ? rawBody : {};
  try {
    const parsed = JSON.parse(rawBody || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return null;
  }
}

/**
 * Normalize and validate a public waitlist submission before any database work.
 *
 * The honeypot outcome is intentionally indistinguishable from success to the
 * caller, while still preventing captured bot content from reaching storage.
 */
export function validateWaitlistSubmission(rawBody) {
  const body = parseBody(rawBody);
  if (body === null) {
    return { accepted: false, status: 400, error: "Invalid submission." };
  }

  const name = String(body.name || "").trim().slice(0, 100);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  const source = String(body.source || "aionehr.com").trim().slice(0, 100) || "aionehr.com";
  const honeypot = String(body.company || "").trim();

  if (honeypot) return { accepted: true, bot: true };
  if (name.length < 2) {
    return { accepted: false, status: 400, error: "Please enter your name." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { accepted: false, status: 400, error: "Please enter a valid email address." };
  }

  return {
    accepted: true,
    bot: false,
    submission: { name, email, source },
  };
}
