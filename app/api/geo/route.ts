import { NextResponse } from "next/server";
import geoip from "geoip-lite";

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

  const geo = ip ? geoip.lookup(ip) : null;
  const country = geo?.country ?? "";
  const restricted = RESTRICTED.has(country);

  return NextResponse.json({ restricted, country });
}