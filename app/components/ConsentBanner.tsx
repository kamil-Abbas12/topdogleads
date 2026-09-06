"use client";

import * as React from "react";
import { ConsentChoice, resolveRegionConsent, storeConsent } from "../lib/consent";

export default function ConsentBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    resolveRegionConsent().then((result) => {
      if (result === "show-banner") setVisible(true);
    });
  }, []);

  function choose(choice: ConsentChoice) {
    storeConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white px-6 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-[13px] leading-relaxed text-black/70">
          We use cookies for analytics and to show relevant ads. You can accept
          all cookies or continue with only the essential ones. Read our{" "}
          <a href="/privacy-policy" className="text-blue-900 underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={() => choose("denied")}
            className="h-10 rounded-md border border-black/20 px-4 text-xs font-semibold text-black hover:bg-black/5 transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={() => choose("granted")}
            className="h-10 rounded-md bg-[#1c2d56] px-4 text-xs font-semibold text-white hover:bg-[#1c2d56]/90 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}