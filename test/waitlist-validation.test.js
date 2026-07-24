import assert from "node:assert/strict";
import test from "node:test";
import { validateWaitlistSubmission } from "../lib/waitlist-validation.js";

test("normalizes valid submissions before persistence", () => {
  const result = validateWaitlistSubmission({
    name: "  Patrick Tran  ",
    email: "  Patrick@Example.COM ",
    source: "  launch-page  ",
  });

  assert.deepEqual(result, {
    accepted: true,
    bot: false,
    submission: {
      name: "Patrick Tran",
      email: "patrick@example.com",
      source: "launch-page",
    },
  });
});

test("uses a stable default source and applies storage length limits", () => {
  const result = validateWaitlistSubmission({
    name: `A${"b".repeat(150)}`,
    email: `${"a".repeat(240)}@x.com`,
    source: " ",
  });

  assert.equal(result.accepted, true);
  assert.equal(result.bot, false);
  assert.equal(result.submission.name.length, 100);
  assert.equal(result.submission.email.length, 246);
  assert.equal(result.submission.source, "aionehr.com");
});

test("rejects malformed JSON and non-object JSON bodies", () => {
  assert.deepEqual(validateWaitlistSubmission("{"), {
    accepted: false,
    status: 400,
    error: "Invalid submission.",
  });

  assert.deepEqual(validateWaitlistSubmission('"not an object"'), {
    accepted: false,
    status: 400,
    error: "Please enter your name.",
  });
});

test("rejects missing names and invalid email addresses", () => {
  assert.deepEqual(validateWaitlistSubmission({ name: "P", email: "p@example.com" }), {
    accepted: false,
    status: 400,
    error: "Please enter your name.",
  });

  assert.deepEqual(validateWaitlistSubmission({ name: "Patrick", email: "not-an-email" }), {
    accepted: false,
    status: 400,
    error: "Please enter a valid email address.",
  });
});

test("silently accepts honeypot submissions without returning payload data", () => {
  assert.deepEqual(validateWaitlistSubmission({
    name: "Bot Name",
    email: "bot@example.com",
    company: "spam payload",
  }), {
    accepted: true,
    bot: true,
  });
});

test("does not accept header injection or whitespace inside email addresses", () => {
  for (const email of [
    "person @example.com",
    "person@example .com",
    "person@example.com\nBcc: victim@example.com",
  ]) {
    const result = validateWaitlistSubmission({ name: "Patrick Tran", email });
    assert.equal(result.accepted, false, email);
    assert.equal(result.error, "Please enter a valid email address.");
  }
});
