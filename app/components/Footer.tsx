"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
type FooterLink = { label: string; href: string };

const resources: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pay Per Call Leads", href: "/solution/pay-per-call" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const services: FooterLink[] = [
  { label: "Inbound Call Marketing", href: "/services/inbound-call-marketing" },
  { label: "Insurance Leads", href: "/services/insurances-leads" },
  { label: "Live Transfer Leads", href: "/services/live-transfer-leads" },
];

const industries: FooterLink[] = [
  { label: "Auto Insurance Leads", href: "/industry/auto-insurance" },
  { label: "Final Expense Leads", href: "/industry/final-expense" },
  { label: "Home Insurance Leads", href: "/industry/home-insurance" },
  { label: "Solar Leads", href: "/industry/solar" },
  { label: "Medicare Insurance Leads", href: "/industry/medicare-insurance" },
  { label: "Motor Vehicle Accident Leads", href: "/industry/motor-vehicle-accident" },
  { label: "Pest Control Leads", href: "/industry/pest-control" },
  { label: "Roofing Leads", href: "/industry/roofing" },
];

function FooterColTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-white">{children}</h3>;
}

function FooterA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-[12px] leading-7 text-slate-200/80 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

// Isolated so a browser extension mangling mailto:/tel: links can't
// cause a structural hydration mismatch anywhere else in the footer.
// We render a static placeholder on the server, then swap in the real
// contact block only after mount — no hydration diff happens on the
// part extensions like to rewrite.
function ContactAddress() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <address className="mt-5 space-y-1 text-[12px] not-italic">
      <p className="mb-2 leading-5 text-slate-200/70">
        Top Dog Leads LLC
        <br />
        5830 E 2nd St
        <br />
        Pompano Beach, FL 33060, USA
      </p>

      {mounted ? (
        <>
          <Link
            href="mailto:support@topdoglead.com"
            className="block py-2 text-sky-300 hover:text-sky-200 transition-colors"
          >
            support@topdoglead.com
          </Link>

          <Link
            href="tel:+16784628013"
            className="block py-2 text-white/90 hover:text-white transition-colors"
            aria-label="Call Top Dog Leads at +1 678 462 8013"
          >
            +1 (678) 462-8013
          </Link>
        </>
      ) : (
        // Same tag shape, no recognizable email/phone text for extensions to grab onto pre-mount
        <span className="block py-2 h-[52px]" aria-hidden="true" />
      )}
    </address>
  );
}

export default function Footer() {
  const onBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [year, setYear] = React.useState<number | null>(null);
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#0B2350]" aria-label="Top Dog Leads footer">
      <div className="mx-auto max-w-7xl px-10 xl:px-20 pt-10">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Top Dog Leads home">
            <Image
              src="/logo.jpg"
              alt="Top Dog Leads — Pay-Per-Call Lead Generation"
              width={32}
              height={32}
              className="w-8 h-auto cursor-pointer"
            />
          </Link>

          <div className="flex items-center gap-4 xl:pr-40">
            <Link
              href="https://www.facebook.com/TopDogLeadsLLC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Facebook"
              className="text-blue-500/80 hover:text-white transition"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="https://www.instagram.com/top.dogleadsllc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Instagram"
              className="text-pink-500/80 hover:text-white transition"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/top-dog-leads-llc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on LinkedIn"
              className="text-blue-500/80 hover:text-white transition"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-10 grid gap-10 lg:grid-cols-5">

          {/* Column 1 — Brand info */}
          <div className="lg:col-span-1">
            <FooterColTitle>Top Dog Leads</FooterColTitle>
            <p className="mt-4 max-w-sm text-[12px] leading-6 text-slate-200/70">
              Top Dog Leads is a pay-per-call lead generation platform that connects
              local businesses with high-intent customers. We deliver exclusive,
              real-time leads that convert.
            </p>

            <ContactAddress />

            <div className="mt-6 flex items-center gap-5 text-[11px] text-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-green-500/90" aria-hidden="true" />
                Customer Verified
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-orange-500/90" aria-hidden="true" />
                Fast Payouts
              </div>
            </div>
          </div>

          {/* Column 2 — Resources */}
          <div>
            <FooterColTitle>Resources</FooterColTitle>
            <nav aria-label="Footer resources navigation" className="mt-4">
              {resources.map((l) => (
                <FooterA key={l.label} href={l.href}>
                  {l.label}
                </FooterA>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div>
            <FooterColTitle>Services</FooterColTitle>
            <nav aria-label="Footer services navigation" className="mt-4">
              {services.map((l) => (
                <FooterA key={l.label} href={l.href}>
                  {l.label}
                </FooterA>
              ))}

              <div className="mt-6 pt-4 border-t border-white/10">
                <FooterColTitle>Help</FooterColTitle>
                <div className="mt-2">
                  <FooterA href="/faq">Frequently Asked Questions</FooterA>
                  <FooterA href="/blog">Blog & Guides</FooterA>
                  <FooterA href="/contact">Contact Support</FooterA>
                </div>
              </div>
            </nav>
          </div>

          {/* Column 4 — Industries */}
          <div>
            <FooterColTitle>Industries We Serve</FooterColTitle>
            <nav aria-label="Footer industries navigation" className="mt-4">
              {industries.map((l) => (
                <FooterA key={l.label} href={l.href}>
                  {l.label}
                </FooterA>
              ))}
            </nav>
          </div>

          {/* Column 5 — CTA */}
          <div>
            <FooterColTitle>Need More Calls?</FooterColTitle>
            <p className="mt-4 text-[12px] leading-6 text-slate-200/70">
              Top Dog Leads connects you with high-intent customers through a
              pure pay-per-call model. No setup fee. No monthly fee.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-[#1c2d56] hover:bg-[#1c2d56]/90 text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition"
              aria-label="Get a free quote from Top Dog Leads"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="relative mt-10 pb-10">
          <button
            onClick={onBackToTop}
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-[#0A84FF] p-3 text-white hover:bg-[#0A84FF]/90 transition"
            aria-label="Back to top of page"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-slate-200/70 sm:flex-row">
          <span suppressHydrationWarning>
            © {year ?? new Date().getFullYear()} Top Dog Leads. All rights reserved.
          </span>

          <nav className="flex items-center gap-5" aria-label="Legal navigation">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}