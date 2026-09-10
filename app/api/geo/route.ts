import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const RESTRICTED = new Set([
  // EEA (EU members)
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE",
  // EEA (non-EU)
  "IS", "LI", "NO",
  // UK + Switzerland
  "GB", "CH",
]);

export async function GET(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "";

  let country = "";

  if (ip) {
    try {
      const geoip = (await import("geoip-lite")).default;
      const geo = geoip.lookup(ip);
      country = geo?.country ?? "";
    } catch (err) {
      console.error("geoip-lite lookup failed:", err);
    }
  }

  const restricted = RESTRICTED.has(country);

  return NextResponse.json({ restricted, country });
}