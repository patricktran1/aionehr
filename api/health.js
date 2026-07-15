import { neon } from "@neondatabase/serverless";

export default async function handler(request, response) {
  const candidates = [
    ["DATABASE_URL", process.env.DATABASE_URL],
    ["POSTGRES_URL", process.env.POSTGRES_URL],
    ["NEON_DATABASE_URL", process.env.NEON_DATABASE_URL],
  ];

  const configured = candidates.find(([, value]) => Boolean(value));

  if (!configured) {
    return response.status(503).json({
      ok: false,
      databaseConfigured: false,
      databaseReachable: false,
      environment: process.env.VERCEL_ENV || "unknown",
      message: "No supported database environment variable is visible to this deployment.",
    });
  }

  const [environmentVariable, connectionString] = configured;

  try {
    const sql = neon(connectionString);
    await sql`SELECT 1 AS healthy`;

    return response.status(200).json({
      ok: true,
      databaseConfigured: true,
      databaseReachable: true,
      environmentVariable,
      environment: process.env.VERCEL_ENV || "unknown",
      message: "Database connection is healthy.",
    });
  } catch (error) {
    console.error("Database health check failed", error);

    return response.status(503).json({
      ok: false,
      databaseConfigured: true,
      databaseReachable: false,
      environmentVariable,
      environment: process.env.VERCEL_ENV || "unknown",
      errorType: error?.name || "DatabaseError",
      message: "A database variable is present, but the connection failed.",
    });
  }
}
