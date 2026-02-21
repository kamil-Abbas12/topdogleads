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
    <div className="grid h-12 w-12 place-items-center rounded-lg border border-slate-300 bg-white text-slate-800 shadow-sm">
      <span className="text-[11px] font-semibold">{label}</span>
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
    cta: "GET FINAL LEADS",
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
  solar: "/industry/solar",
  medicare: "/industry/medicare-insurance",
  "motor-vehicle-accident": "/industry/motor-vehicle-accident",
  "pest-control": "/industry/pest-control",
  roofing: "/industry/roofing",
};

export default function HelpSelector() {
  const router = useRouter();
  const [selectedId, setSelectedId] = React.useState("auto-insurance");

  const selected = SERVICES.find((s) => s.id === selectedId)!;

  return (
    <section className="w-full bg-[#1c2d56]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white">
            How can we help?
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-white">
            <span>I want calls from customers who need my services.</span>

            <div className="relative">
              <select
                value={selectedId}
                onChange={(e) => {
                  const id = e.target.value;
                  setSelectedId(id);
                  router.push(SERVICE_ROUTES[id]);
                }}
                className="appearance-none border-b border-white/40 bg-transparent pr-8 pl-2 py-1 text-white focus:outline-none [&>option]:text-black"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>

              <svg
                className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21 10 12l4.77-4.79" />
              </svg>
            </div>
          </div>
        </div>

        {/* GRID CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SERVICES.map((s) => {
            const active = s.id === selectedId;

            return (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedId(s.id);
                  router.push(SERVICE_ROUTES[s.id]);
                }}
                className={`
                group relative w-full rounded-xl bg-white p-10 text-center
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${active ? "ring-4 ring-blue-200 shadow-2xl scale-105" : ""}
                `}
              >
                <div className="flex justify-center mb-6">{s.icon}</div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  {s.description}
                </p>

                <span className="mt-6 block text-xs font-semibold text-[#1c2d56]">
                  {s.cta}
                </span>
              </button>
            );
          })}
        </div>

        {/* SELECTED LABEL */}
        <div className="mt-10 text-center text-white/70">
          Selected:{" "}
          <span className="font-semibold text-white">{selected.title}</span>
        </div>
      </div>
    </section>
  );
}