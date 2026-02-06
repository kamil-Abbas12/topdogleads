"use client";

import * as React from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
};

function IconPlaceholder({ label }: { label: string }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-500">
      <span className="text-[10px] font-semibold leading-none">{label}</span>
    </div>
  );
}
const SERVICES: Service[] = [
  {
    id: "window-installation",
    title: "Window Installation",
    description: "Turn window inquiries to potential customers.",
    cta: "GET WINDOW LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="window.png"
          alt="Window Installation"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "criminal",
    title: "Criminal Attorney",
    description: "Criminal defense and offense-related cases.",
    cta: "CRIMINAL CASE LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="att.png"
          alt="Criminal Attorney"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Fix more plumbing and drainage issues with direct calls.",
    cta: "GET PLUMBING LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="plumber.png"
          alt="Plumbing"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "appliance-repair",
    title: "Appliance Repair",
    description: "Get more appliance repair calls from customers near you.",
    cta: "APPLIANCE REPAIR LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="repair.png"
          alt="Appliance Repair"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "auto-glass",
    title: "Auto Glass Repair",
    description: "Get more calls for auto glass repair and replacements.",
    cta: "GET AUTO GLASS LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="car.png"
          alt="Auto Glass Repair"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "dentist",
    title: "Dentist",
    description: "Let’s send you more new patient calls.",
    cta: "GET DENTIST LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="dentist.png"
          alt="Dentist"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "door-installation",
    title: "Door Installation",
    description: "Start getting door replacement and repair calls.",
    cta: "GET DOOR INSTALL LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="door.png"
          alt="Door Installation"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "electrician",
    title: "Electrician",
    description: "Get residential and commercial electrician calls.",
    cta: "GET ELECTRICIAN LEADS",
    icon: (
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          src="electrical.png"
          alt="Electrician"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ),
  },
];

export default function HelpSelector() {
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

    const amount = direction === "left" ? -360 : 360;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  React.useEffect(() => {
    const el = cardRefs.current[selectedId];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selectedId]);

  return (
    <section className="w-full bg-[#e5efee]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            How can we help?
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xl text-slate-600">
            <span>I want customer calls in need of</span>

            <div className="relative">
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="appearance-none border-b border-slate-300 bg-transparent py-1 pl-2 pr-8 text-sm text-slate-800 outline-none focus:border-slate-600"
                aria-label="Select a service"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>

              {/* dropdown caret */}
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
        <div className="mt-10">
          <div className="relative">
            {/* arrows (overlay) */}
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-slate-700">
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
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-slate-700">
                <path
                  fillRule="evenodd"
                  d="M7.22 4.47a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L11.69 10 7.22 5.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* fade edges */}
           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#e5efee] to-transparent" />
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#e5efee] to-transparent" />


            {/* the ONE scroller */}
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto px-1 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
             {SERVICES.map((s) => {
  const isActive = s.id === selectedId;

  return (
    <button
      key={s.id}
      ref={(node) => {
        cardRefs.current[s.id] = node;
      }}
      type="button"
      onClick={() => setSelectedId(s.id)}
      className={[
        "relative flex w-[220px] shrink-0 flex-col items-center text-center",
        "rounded-lg border border-slate-200 bg-white px-5 py-10", // increased vertical padding
        "transition duration-200",
        "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300",
        isActive ? "z-10 -translate-y-1 bg-slate-100 shadow-xl" : "opacity-90",
      ].join(" ")}
      aria-pressed={isActive}
    >
      <div className="mb-4 h-30 w-16 flex items-center justify-center"> {/* taller icon */}
        {s.icon}
      </div>

      <div className="text-sm font-semibold text-slate-900">{s.title}</div>

      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        {s.description}
      </p>

      <span className="mt-5 text-[11px] font-semibold text-sky-600">
        {s.cta}
      </span>
    </button>
  );
})}

            </div>
          </div>

          {/* optional selected label */}
          <div className="mt-4 text-center text-xs text-slate-600">
            Selected:{" "}
            <span className="font-semibold text-slate-800">{selected.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
