"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

type FooterLink = { label: string; href: string };

const resources: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Try TopDogLeads", href: "#" },
];

const info: FooterLink[] = [
  { label: "Auto Insurance", href: "/industry/auto-insurance" },
  { label: "Final Expense", href: "/industry/final-expense" },
  { label: "Home Insurance", href: "/industry/home-insurance" },
  { label: "Medicare Insurance", href: "/industry/medicare-insurance" },
  { label: "Motor Vehicle Accident", href: "/industry/motor-vehicle-accident" },
  { label: "Pest Control", href: "/industry/pest-control" },
  { label: "Roofing", href: "/industry/roofing" },
];

function FooterColTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-white">{children}</h3>;
}

function FooterA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-[12px] leading-7 text-slate-200/80 hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const onBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0B2350]">
      <div className="mx-auto max-w-6xl px-10 pt-10">
        {/* TOP ROW: Logo (left) + Social (right) */}
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => window.location.reload()} className="inline-flex">
            <img
              src="/logo.jpg"
              alt="TopDogLead"
              className="w-8 h-auto cursor-pointer"
            />
          </Link>

          <div className="flex items-star gap-4 xl:pr-40">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white/80 hover:text-white transition"
            >
              <Facebook className="h-5 w-5" />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/80 hover:text-white transition"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transition"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-10 grid gap-10 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <FooterColTitle>Top Dog Leads</FooterColTitle>

            <p className="mt-4 max-w-sm text-[12px] leading-6 text-slate-200/70">
              Top Dog Leads is a pay-per-call lead generation platform that connects local businesses with high-intent customers. We deliver exclusive, real-time leads that convert. 
            </p>

            <div className="mt-5 space-y-1 text-[12px]">
              <Link
                href="mailto:Support@topdoglead.com"
                className="block text-sky-300 hover:text-sky-200"
              >
                support@topdoglead.com
              </Link>

              <Link
                href="tel:+13102954421"
                className="block text-white/90 hover:text-white"
              >
                (310) 295-4421
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-5 text-[11px] text-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-green-500/90" />
                Customer Verified
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-orange-500/90" />
                Fast Payouts
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <FooterColTitle>Resources</FooterColTitle>
            <nav className="mt-4">
              {resources.map((l) => (
                <FooterA key={l.label} href={l.href}>
                  {l.label}
                </FooterA>
              ))}
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <FooterColTitle>Information</FooterColTitle>
            <nav className="mt-4">
              {info.map((l) => (
                <FooterA key={l.label} href={l.href}>
                  {l.label}
                </FooterA>
              ))}
            </nav>
          </div>

          {/* Column 4 */}
        <div>
          
  <FooterColTitle>Need more calls?</FooterColTitle>


  <p className="mt-4 text-[12px] leading-6 text-slate-200/70">
    Use Top Dog Leads to get new customers and only pay-per-call.
  </p>
</div>

        </div>

        {/* BACK TO TOP */}
        <div className="relative mt-10 pb-10">
          <button
            onClick={onBackToTop}
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-[#0A84FF] p-3 text-white hover:bg-[#0A84FF]/90"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M7 14l5-5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-[11px] text-slate-200/70">
All rights reserved.Top Dog Leads © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
