"use client";

import * as React from "react";

type Props = {
  imageUrl?: string; // background image url
  name?: string;
  roleLine?: string;
  highlight?: string;
  watchLabel?: string;
  onWatch?: () => void;
};

export default function CaseStudyHero({
  imageUrl = "happy.jpg",
  name = "Nelson Wolfmeiser",
  roleLine = "Owner / Manager, 911 Rooter and Plumbing, Denver",
  highlight = "Grew call volume by 600% in 2 months",
  watchLabel = "Watch Nelson's video",
  onWatch,
}: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A84FF]">
      {/* Media */}
      <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[520px] ">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top w-full h-full"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        {/* Blue overlay (matches screenshot tint) */}
        <div className="absolute inset-0 bg-[#0A84FF]/60" aria-hidden="true" />

        {/* Subtle dark vignette on left to help portrait pop (optional) */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/20 to-transparent"
          aria-hidden="true"
        />

        {/* Content layer */}
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
          {/* Spacer keeps the card on right; on small screens card centers */}
          <div className="ml-auto w-full max-w-xl">
            <div className="rounded-sm bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] mt-60 ml-10">
              <div className="px-6 py-5 sm:px-8 sm:py-7">
                <div className="text-lg font-medium text-slate-900">{name}</div>
                <div className="mt-1 text-xs text-slate-500">{roleLine}</div>

                <div className="mt-5 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
                  {highlight}
                </div>

                <button
                  type="button"
                  onClick={onWatch}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  {watchLabel}
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-600">
                    {/* play icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5 translate-x-[1px]"
                      aria-hidden="true"
                    >
                      <path d="M9 7.5v9l8-4.5-8-4.5z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chat button (bottom-right) */}
      <button
        type="button"
        className="fixed bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800"
        aria-label="Chat"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M7 18.5l-3 2V6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8A2.5 2.5 0 0117.5 17H9l-2 1.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
