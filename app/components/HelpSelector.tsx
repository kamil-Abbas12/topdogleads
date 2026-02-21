"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
type Service = {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
};

function IconPlaceholder({ label }: { label: string }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-md border border-slate-800 bg-white text-slate-800">
      <span className="text-[10px] font-semibold leading-none">{label}</span>
    </div>
  );
}
const SERVICES: Service[] = [
  {
    id: "auto-insurance",
    title: "Auto Insurance",
    description: "Connect with customers searching for auto insurance.",
    cta: "GET AUTO LEADS",
    icon: <IconPlaceholder label="AUTO" />,
  },
  {
    id: "final-expense",
    title: "Final Expense",
    description: "Receive qualified calls for final expense insurance.",
    cta: "GET FINAL EXPENSE LEADS",
    icon: <IconPlaceholder label="FINAL" />,
  },
  {
    id: "home-insurance",
    title: "Home Insurance",
    description: "Get exclusive calls from homeowners seeking coverage.",
    cta: "GET HOME LEADS",
    icon: <IconPlaceholder label="HOME" />,
  },
  {
    id: "solar",
    title: "Solar",
    description: "Connect with homeowners interested in solar solutions.",
    cta: "GET SOLAR LEADS",
    icon: <IconPlaceholder label="SOLAR" />,
  },
  {
    id: "medicare",
    title: "Medicare Insurance",
    description: "Get inbound calls from Medicare prospects.",
    cta: "GET MEDICARE LEADS",
    icon: <IconPlaceholder label="MED" />,
  },
  {
    id: "motor-vehicle-accident",
    title: "Motor Vehicle Accident",
    description: "Receive calls from accident claim seekers.",
    cta: "GET MVA LEADS",
    icon: <IconPlaceholder label="MVA" />,
  },
  {
    id: "pest-control",
    title: "Pest Control",
    description: "Get more calls from customers needing pest removal.",
    cta: "GET PEST LEADS",
    icon: <IconPlaceholder label="PEST" />,
  },
  {
    id: "roofing",
    title: "Roofing",
    description: "Connect with homeowners needing roofing services.",
    cta: "GET ROOFING LEADS",
    icon: <IconPlaceholder label="ROOF" />,
  },
];
const SERVICE_ROUTES: Record<string, string> = {
  "auto-insurance": "/industry/auto-insurance",
  "final-expense": "/industry/final-expense",
  "home-insurance": "/industry/home-insurance",
  "solar": "/industry/solar",
  "medicare": "/industry/medicare-insurance",
  "motor-vehicle-accident": "/industry/motor-vehicle-accident",
  "pest-control": "/industry/pest-control",
  "roofing": "/industry/roofing",
};
export default function HelpSelector() {
  const router = useRouter();
  const [selectedId, setSelectedId] = React.useState<string>("appliance-repair");

  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const cardRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  const selected = React.useMemo(
    () => SERVICES.find((s) => s.id === selectedId) ?? SERVICES[0],
    [selectedId]
  );

  function scrollByCards(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = direction === "left" ? -260 : 260; // smaller scroll for mobile
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  React.useEffect(() => {
    const el = cardRefs.current[selectedId];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selectedId]);

  return (
    <section className="w-full bg-[#e9efff]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            How can we help?
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base text-slate-600">
            <span>
I want calls from customers who need my services.
            </span>
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedId}
onChange={(e) => {
  const id = e.target.value;
  setSelectedId(id);
  router.push(SERVICE_ROUTES[id]);
}}                className="appearance-none border-b border-slate-300 bg-transparent py-1 pl-2 pr-8 text-sm sm:text-base text-slate-800 outline-none focus:border-slate-600 w-full sm:w-auto"
                aria-label="Select a service"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>

              <svg
                className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards strip */}
        <div className="mt-6 sm:mt-8 relative">
          {/* arrows */}
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-1 sm:p-2 shadow hover:bg-white"
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700">
              <path
                fillRule="evenodd"
                d="M12.78 15.53a.75.75 0 01-1.06 0L6.72 10.53a.75.75 0 010-1.06l5-5a.75.75 0 111.06 1.06L8.31 10l4.47 4.47a.75.75 0 010 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="absolute right-2 sm:right-4 lg:-right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-1 sm:p-2 shadow hover:bg-white"

          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700">
              <path
                fillRule="evenodd"
                d="M7.22 4.47a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L11.69 10 7.22 5.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* fade edges */}
        
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-10 bg-gradient-to-r from-[#e9efff] to-transparent" />
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10 bg-gradient-to-l from-[#e9efff] to-transparent" />

          {/* cards */}
          <div
            ref={scrollerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto px-10 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICES.map((s) => {
              const isActive = s.id === selectedId;
              return (
                <button
                  key={s.id}
                  ref={(node) => { cardRefs.current[s.id] = node; }}
                  type="button"
onClick={() => {
  setSelectedId(s.id);
  router.push(SERVICE_ROUTES[s.id]);
}}                  className={[
                    "relative flex w-[180px] sm:w-[220px] md:w-[240px] shrink-0 flex-col items-center text-center bg-white rounded-lg border border-slate-200 px-4 sm:px-5 py-6 sm:py-10 transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300",
                    isActive ? "z-10 -translate-y-1 bg-slate-100 shadow-xl" : "opacity-90",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  <div className="mb-3 sm:mb-4 h-20 sm:h-30 w-16 flex items-center justify-center">{s.icon}</div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">{s.title}</div>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-gray-500">{s.description}</p>
                  <span className="mt-3 sm:mt-5 text-[11px] sm:text-[11px] font-semibold text-[#1c2d56]">{s.cta}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* selected label */}
        <div className="mt-4 text-center text-xs sm:text-sm text-gray-600">
          Selected: <span className="font-semibold text-gray-800">{selected.title}</span>
        </div>
      </div>
    </section>
  );
}
