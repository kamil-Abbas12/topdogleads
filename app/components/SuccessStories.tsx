"use client";

import * as React from "react";

type CaseStudy = {
  id: string;
  brand: string;
  subtitle: string;
  logoImg: string;
  logoBg: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "am-new-york",
    brand: "AM New York",
    subtitle: "City Guide",
    logoImg: "/newyork.png",
    logoBg: "bg-[#E7E7E7]",
  },
  {
    id: "exploria",
    brand: "Exploria",
    subtitle: "Resorts",
    logoImg: "/exploria.png",
    logoBg: "bg-[#F3C969]",
  },
  {
    id: "360-plumbing",
    brand: "360 Plumbing Inc.",
    subtitle: "Plumbing",
    logoImg: "/inc.png",
    logoBg: "bg-[#5AAED8]",
  },
  {
    id: "jaspey",
    brand: "Jaspey",
    subtitle: "Car Service",
    logoImg: "/jas.png",
    logoBg: "bg-[#D9D9D9]",
  },
];

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20.5s-7-4.4-9.2-8.4C1.2 8.8 3 6 6 6c1.7 0 3.1.9 4 2 0 0 1.4-2 4-2 3 0 4.8 2.8 3.2 6.1C19 16.1 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SuccessStories() {
  return (
    <section className="relative w-full bg-[#0A84FF]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="text-center text-white">
          <div className="text-xs font-semibold tracking-[0.22em] opacity-90">
            CASE STUDIES
          </div>
          <h2 className="mt-3 text-4xl font-semibold">
            Our Success Stories
          </h2>
        </div>

        {/* Cards */}
        <div className="relative mt-16">
          {/* Left Arrow */}
          <button className="absolute -left-16 top-1/2 -translate-y-1/2 text-white">
            <ArrowLeft className="h-8 w-8" />
          </button>

          {/* Right Arrow */}
          <button className="absolute -right-16 top-1/2 -translate-y-1/2 text-white">
            <ArrowRight className="h-8 w-8" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-slate-200"
              >
                {/* Logo block */}
                <div
                  className={`${cs.logoBg} h-[200px] flex items-center justify-center`}
                >
                  <img
                    src={cs.logoImg}
                    alt={cs.brand}
                    className="max-h-[70px] max-w-[170px] object-contain"
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-5 py-4 border-t border-slate-200">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {cs.brand}
                    </div>
                    <div className="text-sm text-slate-500">
                      {cs.subtitle}
                    </div>
                  </div>

                  <HeartIcon className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
