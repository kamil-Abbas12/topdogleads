"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedId =
    Object.entries(SERVICE_ROUTES).find(([, route]) => route === pathname)?.[0] ??
    "auto-insurance";

  const selected =
    SERVICES.find((s) => s.id === selectedId) ?? SERVICES[0];

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section
      aria-label="Choose your industry — Top Dog Leads pay-per-call services"
      className="w-full bg-[#1c2d56]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            How can we help?
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-white">
            <span>I want calls from customers who need my services.</span>

            <div ref={dropdownRef} className="relative w-64">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={`Select industry: currently ${selected.title}`}
                className="flex w-full items-center justify-between border-b border-white/40 bg-transparent px-2 py-2 text-white"
              >
                {selected.title}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <ul
                  role="listbox"
                  aria-label="Select your industry"
                  className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-lg bg-white shadow-2xl"
                >
                  {SERVICES.map((s) => {
                    const active = s.id === selectedId;
                    return (
                      <li key={s.id} role="option" aria-selected={active}>
                        <Link
                          href={SERVICE_ROUTES[s.id]}
                          onClick={() => setOpen(false)}
                          className={`block w-full px-4 py-3 text-left transition hover:bg-gray-100 ${
                            active ? "bg-gray-50 font-medium text-[#1c2d56]" : "text-gray-700"
                          }`}
                        >
                          {s.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>

        <ul
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8"
          aria-label="Top Dog Leads — industries we serve"
        >
          {SERVICES.map((s) => {
            const active = s.id === selectedId;

            return (
              <li key={s.id}>
                <Link
                  href={SERVICE_ROUTES[s.id]}
                  aria-label={`${s.cta} — ${s.description}`}
                  aria-current={active ? "page" : undefined}
                  className={`group relative block w-full rounded-xl bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:p-10 ${
                    active ? "scale-105 ring-4 ring-blue-200 shadow-2xl" : ""
                  }`}
                >
                  <div className="mb-6 flex justify-center" aria-hidden="true">
                    {s.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">
                    {s.description}
                  </p>

                  <span className="mt-6 block text-xs font-semibold text-[#1c2d56]">
                    {s.cta}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center text-white/70" aria-live="polite">
          Selected:{" "}
          <span className="font-semibold text-white">{selected.title}</span>
        </div>
      </div>
    </section>
  );
}
