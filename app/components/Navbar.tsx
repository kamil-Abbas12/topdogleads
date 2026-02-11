"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React, { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

const industryLeft = [
  { label: "Auto Insurance", href: "/industry/auto-insurance" },
  { label: "Final Expense", href: "/industry/final-expense" },
  { label: "Home Insurance", href: "/industry/home-insurance" },
  { label: "Solar", href: "/industry/solar" },
];

const industryRight = [
  { label: "Medicare Insurance", href: "/industry/medicare-insurance" },
  { label: "Motor Vehicle Accident", href: "/industry/mva" },
  { label: "Pest Control", href: "/industry/pest-control" },
  { label: "Roofing", href: "/industry/roofing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // desktop dropdown
  const [mobile, setMobile] = useState(false); // mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(false); // mobile Solutions
const router = useRouter();

  return (
    <nav className="relative w-full px-4 sm:px-6 lg:px-45 py-5 flex items-center justify-between bg-white z-50">
      {/* LOGO */}
   <div className="flex items-center">
  <Link href="/">
    <img
      src="/logo.jpg"
      alt="TopDogLead"
      className="w-32 h-auto cursor-pointer"
    />
  </Link>
</div>


      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/about" className="text-gray-600 hover:text-orange-600 text-md font-medium">
          About
        </Link>

        {/* SOLUTIONS DROPDOWN (Desktop) */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="text-orange-500 cursor-pointer text-md font-medium flex items-center gap-1">
            Solutions <ChevronDown size={14} />
          </button>

          {/* Dropdown */}
          <div
            className={`absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[1080px] transition-all duration-150 z-50 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
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
                      <div className="h-10 w-10 rounded border border-gray-200 flex items-center justify-center text-gray-600 text-[11px] font-semibold">
                        AD
                      </div>
                      <div>
                        <Link href="/solution/pay-per-call">
                          <p className="text-gray-900 text-md font-semibold hover:text-orange-500 text-[15px] leading-snug">
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
                  <div className="col-span-1 flex justify-center">
                    <div className="w-px bg-gray-200" />
                  </div>

                  <div className="col-span-7">
                    <p className="text-[11px] tracking-wider font-semibold text-gray-600 uppercase mb-4">
                      Industry
                    </p>
                    <div className="grid grid-cols-2 gap-x-8">
                      <ul className="space-y-2 text-[13px] text-gray-600">
                        {industryLeft.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = item.href;
                              }}
                              className="hover:text-orange-600 block"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2 text-[13px] text-gray-600">
                        {industryRight.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = item.href;
                              }}
                              className="hover:text-orange-600 block"
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
                <div className="col-span-3 bg-orange-50 border-l border-gray-100 px-6 py-4 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-900 font-semibold text-[18px] leading-snug">
                      Join 2,000+ businesses using TopDogLeads
                    </p>
                    <p className="text-[13px] text-gray-700 mt-6 leading-relaxed">
                      No Setup Fee. No Monthly Service Fee. No Cancellation Fee.
                    </p>
                  </div>
                  <button className="mt-4 inline-flex  items-center justify-center bg-orange-500 hover:bg-orange-700 text-white text-md px-2 py-2.5 rounded transition">
                    Try TopDogLeads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/case-studies" className="text-gray-600 hover:text-orange-600 text-md font-medium">
          Case Studies
        </Link>

        {/* Phone & CTA */}
        <div className="flex items-center gap-2 font-semibold text-gray-900 text-md">
          <Phone size={16} />
          <span>1 (310) 295 4421</span>
          <button className="border-2 border-orange-500 text-gray-600 px-4 py-2 rounded-md text-md hover:bg-orange-600 hover:text-white transition">
            Try TopDogLeads
          </button>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="block lg:hidden" onClick={() => setMobile(!mobile)}>
        {mobile ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE MENU */}
      {mobile && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md lg:hidden z-40">
          <div className="flex flex-col gap-4 p-6">
            <Link href="/about" className="text-gray-600 hover:text-orange-600">
              About
            </Link>

            {/* Mobile Solutions */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between text-orange-500 font-medium text-md"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                Solutions <ChevronDown size={14} />
              </button>
              {mobileDropdown && (
                <div className="mt-2 pl-4 flex flex-col gap-2">
                  {industryLeft.map((item) => (
                    <Link key={item.label} href={item.href} className="text-gray-600 hover:text-orange-600">
                      {item.label}
                    </Link>
                  ))}
                  {industryRight.map((item) => (
                    <Link key={item.label} href={item.href} className="text-gray-600 hover:text-orange-600">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-gray-600 hover:text-orange-600">
              Case Studies
            </Link>

            <div className="flex flex-col gap-2 mt-2">
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                <Phone size={16} /> 1 (310) 295 4421
              </span>
              <button className="border-2 w-1/2 hover:bg-orange-500 hover:text-white border-orange-500 text-gray-600 px-4 py-2 rounded-md text-md hover:bg-orange-600 hover:text-white transition">
                Try TopDogLeads
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
