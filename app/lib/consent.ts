export type ConsentChoice = "granted" | "denied";

const CONSENT_COOKIE = "tdl_consent";
const REGION_COOKIE = "tdl_region_checked";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`${CONSENT_COOKIE}=(granted|denied)`));
  return (match?.[1] as ConsentChoice) ?? null;
}

function hasCheckedRegion(): boolean {
  return document.cookie.includes(`${REGION_COOKIE}=1`);
}

function markRegionChecked() {
  const oneDay = 60 * 60 * 24;
  document.cookie = `${REGION_COOKIE}=1; path=/; max-age=${oneDay}; SameSite=Lax`;
}

export function storeConsent(choice: ConsentChoice) {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${CONSENT_COOKIE}=${choice}; path=/; max-age=${oneYear}; SameSite=Lax`;

  // @ts-expect-error gtag is attached by the GA script
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });

  // @ts-expect-error adsbygoogle is attached by the AdSense script
  window.adsbygoogle = window.adsbygoogle || [];
  // @ts-expect-error same as above
  window.adsbygoogle.requestNonPersonalizedAds = choice === "granted" ? 0 : 1;
}

/**
 * Called once on first load, before the banner would render.
 * Non-EEA/UK/CH visitors are auto-granted immediately (no banner shown),
 * so ad personalization and GA4 tracking start right away.
 * EEA/UK/CH visitors fall through to the banner and stay "denied" until
 * they choose.
 */
export async function resolveRegionConsent(): Promise<"skip-banner" | "show-banner"> {
  if (getStoredConsent()) return "skip-banner"; // returning visitor already chose
  if (hasCheckedRegion()) return "show-banner"; // checked before, still undecided → must be restricted

  try {
    const res = await fetch("/api/geo", { cache: "no-store" });
    const data = (await res.json()) as { restricted: boolean };
    markRegionChecked();

    if (!data.restricted) {
      storeConsent("granted");
      return "skip-banner";
    }
    return "show-banner";
  } catch {
    // If the geo check fails for any reason, default to showing the banner —
    // safer to over-ask for consent than to under-ask.
    return "show-banner";
  }
}