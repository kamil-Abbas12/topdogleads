"use client";
import { useRouter } from "next/navigation";
import { roboto } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

const industryLeft = [
  { label: "Auto Insurance Leads", href: "/industry/auto-insurance" },
  { label: "Final Expense Leads", href: "/industry/final-expense" },
  { label: "Home Insurance Leads", href: "/industry/home-insurance" },
  { label: "Solar Leads", href: "/industry/solar" },
];

const industryRight = [
  { label: "Medicare Insurance Leads", href: "/industry/medicare-insurance" },
  { label: "Motor Vehicle Accident Leads", href: "/industry/motor-vehicle-accident" },
  { label: "Pest Control Leads", href: "/industry/pest-control" },
  { label: "Roofing Leads", href: "/industry/roofing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const router = useRouter();

  return (
    <nav
      className={`${roboto.className} relative font-medium w-full px-4 sm:px-6
      lg:px-12 xl:px-20  flex items-center justify-between bg-white z-50`}
      aria-label="Top Dog Leads main navigation"
    >
      {/* LOGO */}
      <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <Link href="/" aria-label="Top Dog Leads — Pay-Per-Call Lead Generation Home">
          <Image
            src="/logo.png"
            alt="Top Dog Leads - Pay-Per-Call Lead Generation Agency"
            width={160}
            height={40}
            priority
            className="w-40 h-30"
          />
        </Link>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/about" className="text-gray-800 hover:text-blue-600 text-md font-medium">
          About
        </Link>

        {/* SOLUTIONS DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            className="text-gray-800 hover:text-blue-600 cursor-pointer text-md font-medium flex items-center gap-1"
            aria-haspopup="true"
            aria-expanded={open}
            aria-label="Solutions — pay-per-call leads by industry"
          >
            Solutions <ChevronDown size={14} aria-hidden="true" />
          </button>

          {/* Dropdown */}
          <div
            className={`absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[1080px] transition-all duration-150 z-50 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            role="region"
            aria-label="Solutions and industry lead generation options"
          >
            <div className="bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-8 px-8 py-6">
                {/* Left: Solutions + Industry */}
                <div className="col-span-9 grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <p className="text-[11px] tracking-wider font-semibold text-gray-600 uppercase mb-6 pb-3">
                      Solutions
                    </p>
                    <div className="flex gap-2">
                      <div className="h-10 w-10 rounded border border-gray-200 flex items-center justify-center text-gray-600 text-[11px] font-semibold" aria-hidden="true">
                        AD
                      </div>
                      <div>
                        <Link href="/solution/pay-per-call">
                          <p className="text-gray-900 text-md font-semibold hover:text-blue-500 text-[15px] leading-snug">
                            Pay Per Call Leads
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            Generate more calls with Ad campaign.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="col-span-1 flex justify-center" aria-hidden="true">
                    <div className="w-px bg-gray-200" />
                  </div>

                  <div className="col-span-7">
                    <p className="text-[11px] tracking-wider font-semibold text-gray-600 uppercase mb-4">
                      Industry
                    </p>
                    <div className="grid grid-cols-2 gap-x-8">
                      <ul className="space-y-2 text-[13px] text-gray-600" aria-label="Industries — left column">
                        {industryLeft.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="hover:text-blue-600 block"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2 text-[13px] text-gray-600" aria-label="Industries — right column">
                        {industryRight.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="hover:text-blue-600 block"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="col-span-3 bg-blue-50 border-l border-gray-100 px-6 py-4 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-900 font-semibold text-[18px] leading-snug">
                      Join 2,000+ businesses using Top Dog Leads
                    </p>
                    <p className="text-[13px] text-gray-700 mt-6 leading-relaxed">
                      No Setup Fee. No Monthly Service Fee. No Cancellation Fee.
                    </p>
                  </div>
                  <Link href="/contact" aria-label="Try Top Dog Leads — start generating pay-per-call leads">
                    <button className="mt-4 inline-flex items-center justify-center cursor-pointer font-semibold text-md
                     bg-[#1c2d56] hover:bg-[#1c2d56]/90 text-white px-2 py-2.5 rounded transition">
                      Try Top Dog Leads
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/blog" className="text-gray-800 hover:text-blue-600 text-md font-medium">
          Blogs
        </Link>

        {/* Phone & CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+16784628013"
            className="flex items-center gap-2 font-semibold text-gray-800 hover:text-blue-600"
            aria-label="Call Top Dog Leads at +1 678 462 8013"
          >
            <Phone size={16} aria-hidden="true" />
            <span>+1 678 462 8013</span>
          </a>

          <Link href="/contact" aria-label="Try Top Dog Leads — get pay-per-call leads for your business">
            <button className="cursor-pointer border-2 bg-[#1c2d56] text-white px-4 py-2 rounded-md hover:bg-[#1c2d56]/90">
              Try Top Dog Leads
            </button>
          </Link>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="block lg:hidden text-gray-900"
        onClick={() => setMobile(!mobile)}
        aria-label={mobile ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobile}
      >
        {mobile ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* MOBILE MENU */}
      {mobile && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            className="absolute top-5 right-5 text-gray-900"
            onClick={() => setMobile(false)}
            aria-label="Close navigation menu"
          >
            <X size={28} aria-hidden="true" />
          </button>

          <div className="flex flex-col gap-6 p-6 pt-24">
            <a
              href="/about"
              className="text-lg font-medium text-gray-900"
              onClick={() => setMobile(false)}
            >
              About
            </a>

            {/* Mobile Solutions */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between text-lg font-medium text-blue-600"
                onClick={() => setMobileDropdown(!mobileDropdown)}
                aria-expanded={mobileDropdown}
                aria-label="Toggle Solutions dropdown"
              >
                Solutions <ChevronDown size={18} aria-hidden="true" />
              </button>

              {mobileDropdown && (
                <div className="mt-4 pl-4 flex flex-col gap-4">
                  <Link
                    href="/solution/pay-per-call"
                    className="flex flex-col gap-1 text-gray-800"
                    onClick={() => setMobile(false)}
                  >
                    <span className="text-md font-semibold hover:text-blue-600">Pay Per Call Leads</span>
                    <span className="text-sm text-gray-600">Generate more calls with Ad campaign.</span>
                  </Link>

                  <div className="border-t border-gray-200 my-2" aria-hidden="true" />

                  {[...industryLeft, ...industryRight].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-gray-800 hover:text-blue-600"
                      onClick={() => setMobile(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="/blog" className="text-lg font-medium text-gray-900" onClick={() => setMobile(false)}>
              Blogs
            </a>

            <div className="flex flex-col gap-4 mt-4">
              <a
                href="tel:+16784628013"
                className="flex items-center gap-2 font-semibold text-gray-900"
                onClick={() => setMobile(false)}
                aria-label="Call Top Dog Leads at +1 678 462 8013"
              >
                <Phone size={18} aria-hidden="true" /> +1 678 462 8013
              </a>

              <a href="/contact" onClick={() => setMobile(false)}>
                <button className="w-full bg-[#1c2d56] text-white py-3 rounded-md font-medium">
                  Try Top Dog Leads
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}