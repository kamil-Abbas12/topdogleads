"use client";

import * as React from "react";
import Link from "next/link";

type FooterLink = { label: string; href: string };

const resources: FooterLink[] = [
  { label: "Login", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Publishers", href: "#" },
  { label: "Try ResultCalls", href: "#" },
  { label: "Listings Optimization", href: "#" },
  { label: "Ad Campaign", href: "#" },
  { label: "Contact", href: "#" },
];

const info: FooterLink[] = [
  { label: "How We Work", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Condition", href: "#" },
];

function SocialIcon({
  label,
  children,
  href = "#",
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-200/90 hover:text-white hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

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
      {/* top bar row with logo + socials */}
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="flex items-center justify-between">
          <div className="text-white/90 text-sm font-semibold tracking-wide">
            R=esult
          </div>

          <div className="flex items-center gap-3">
            {/* facebook */}
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.3-3H13.5V9.3c0-.9.2-1.5 1.5-1.5H16.6V5.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.6 1.7-4.6 4.8V11H6.6v3h2.6v8h4.3z" />
              </svg>
            </SocialIcon>

            {/* x/twitter */}
            <SocialIcon label="X">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.1L6.7 22H2l7.3-8.4L1 2h6.3l4.4 5.6L18.9 2zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20z" />
              </svg>
            </SocialIcon>

            {/* linkedin */}
            <SocialIcon label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M6.94 6.5A2.44 2.44 0 114.5 4.06 2.44 2.44 0 016.94 6.5zM4.9 20.5h4.1v-12H4.9v12zM20.5 20.5h-4.1v-6.6c0-1.6-.03-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6v6.7H7.3v-12h3.9v1.6h.06c.55-1.05 1.9-2.15 3.9-2.15 4.2 0 5 2.7 5 6.3v6.2z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* main grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <FooterColTitle>Better Exposure. Pay for Results.</FooterColTitle>
            <p className="mt-4 max-w-sm text-[12px] leading-6 text-slate-200/70">
              ResultCalls uses programmatic tools and unique processes to help businesses
              improve their exposure, gain new customers, and pay based on results.
            </p>

            <div className="mt-5 space-y-1 text-[12px]">
              <Link href="mailto:ask@resultcalls.com" className="block text-sky-300 hover:text-sky-200">
                ask@resultcalls.com
              </Link>
              <Link href="tel:+13102954421" className="block text-white/90 hover:text-white">
                (310) 295-4421
              </Link>
            </div>

            {/* badges (simple placeholders to match layout) */}
            <div className="mt-6 flex items-center gap-5">
              <div className="flex items-center gap-2 text-[11px] text-slate-200/70">
                <span className="h-5 w-5 rounded-full bg-orange-500/90" />
                <span>Capterra</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-200/70">
                <span className="h-5 w-5 rounded-full bg-green-500/90" />
                <span>Trustpilot</span>
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

          {/* Column 4 (CTA) */}
          <div>
            <FooterColTitle>Need more calls?</FooterColTitle>
            <p className="mt-4 text-[12px] leading-6 text-slate-200/70">
              Use ResultCalls to get new customers and only pay-per-call.
            </p>

            <Link
              href="#"
              className="mt-6 inline-flex w-[160px] items-center justify-center rounded-sm bg-[#0A84FF] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#0A84FF]/90"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* back to top button (center) */}
        <div className="relative mt-10 pb-10">
          <button
            type="button"
            onClick={onBackToTop}
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-[#0A84FF] p-3 text-white shadow-md hover:bg-[#0A84FF]/90"
            aria-label="Back to top"
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

      {/* bottom copyright strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-[11px] text-slate-200/70">
          Copyright Result LLC, 2026. All right reserved.
        </div>
      </div>

      {/* floating chat button (bottom-right like screenshot) */}
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
    </footer>
  );
}
