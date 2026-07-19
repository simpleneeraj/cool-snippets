/**
 * Canonical site origin, with no environment file required.
 *
 * Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically on every deployment
 * (bare host, no scheme). BASE_URL stays supported as an explicit override for
 * self-hosting. Falls back to localhost so `robots.txt` and `sitemap.xml` can
 * never render the string "undefined".
 */
export function getSiteUrl(): string {
  const explicit = process.env.BASE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}
