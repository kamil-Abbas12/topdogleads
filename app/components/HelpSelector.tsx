"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

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
  { id: "auto-insurance", title: "Auto Insurance", description: "Connect with customers searching for auto insurance.", cta: "GET AUTO LEADS", icon: <IconPlaceholder label="AUTO" /> },
  { id: "final-expense", title: "Final Expense", description: "Receive qualified calls for final expense insurance.", cta: "GET FINAL LEADS", icon: <IconPlaceholder label="FINAL" /> },
  { id: "home-insurance", title: "Home Insurance", description: "Get exclusive calls from homeowners seeking coverage.", cta: "GET HOME LEADS", icon: <IconPlaceholder label="HOME" /> },
  { id: "solar", title: "Solar", description: "Connect with homeowners interested in solar solutions.", cta: "GET SOLAR LEADS", icon: <IconPlaceholder label="SOLAR" /> },
  { id: "medicare", title: "Medicare Insurance", description: "Get inbound calls from Medicare prospects.", cta: "GET MEDICARE LEADS", icon: <IconPlaceholder label="MED" /> },
  { id: "motor-vehicle-accident", title: "Motor Vehicle Accident", description: "Receive calls from accident claim seekers.", cta: "GET MVA LEADS", icon: <IconPlaceholder label="MVA" /> },
  { id: "pest-control", title: "Pest Control", description: "Get more calls from customers needing pest removal.", cta: "GET PEST LEADS", icon: <IconPlaceholder label="PEST" /> },
  { id: "roofing", title: "Roofing", description: "Connect with homeowners needing roofing services.", cta: "GET ROOFING LEADS", icon: <IconPlaceholder label="ROOF" /> },
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
  const [open, setOpen] = React.useState(false);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selected = SERVICES.find((s) => s.id === selectedId)!;

  /* CLOSE DROPDOWN WHEN CLICK OUTSIDE */
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-[#1c2d56]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">
            How can we help?
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-white">
            <span>I want calls from customers who need my services.</span>

            {/* CUSTOM DROPDOWN */}
            <div ref={dropdownRef} className="relative w-64">

              {/* BUTTON */}
              <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between border-b border-white/40  cursor-pointer bg-transparent px-2 py-2 text-white"
              >
                {selected.title}

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>

              {/* MENU */}
              {open && (
                <div className="absolute left-0 top-full mt-2 w-full rounded-lg bg-white shadow-2xl z-50 overflow-hidden">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedId(s.id);
                        setOpen(false);
                        router.push(SERVICE_ROUTES[s.id]);
                      }}
                      className="block w-full px-4 py-3 text-left text-gray-700 cursor-pointer hover:bg-gray-100 transition"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((s) => {
            const active = s.id === selectedId;

            return (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedId(s.id);
                  router.push(SERVICE_ROUTES[s.id]);
                }}
                className={`group relative w-full  cursor-pointer rounded-xl bg-white p-8 lg:p-10 text-center
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${active ? "ring-4 ring-blue-200 shadow-2xl scale-105" : ""}`}
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