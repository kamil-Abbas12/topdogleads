"use client";

import React from "react";
import { Phone, ChevronDown } from "lucide-react";

const industryLeft = [
  "Appliance Repair",
  "Auto Glass Repair",
  "Auto Insurance",
  "Criminal Attorney",
  "Dentist",
  "Door Installation",
  "Electrician",
  "Final Expense",
  "Flooring",
  "Garage Door Repair",
  "Home Insurance",
  "HVAC",
];

const industryRight = [
  "Locksmith",
  "Medicare Insurance",
  "Motor Vehicle Accident",
  "Pest Control",
  "Plumbing",
  "Remodeling",
  "Roofing",
  "Solar",
  "Tree Service",
  "Water Damage Restoration",
  "Window Installation",
];

export default function Navbar() {
  return (
    <nav className="w-full px-10 xl:px-20 py-5 xl:py-13 flex items-center justify-center gap-15">
      {/* LEFT */}
      <img
        src="https://resultcalls.com/images/logo-blue162x32.svg"
        alt="ResultCalls"
        className="h-8"
      />

      {/* CENTER */}
      <div className="hidden lg:flex items-center gap-8 text-">
        <a
          className="text-gray-600 hover:text-blue-600 text-md font-medium"
          href="#"
        >
          About
        </a>

        {/* SOLUTIONS */}
        <div className="relative group">
       <a
  href="#"
  className="
    relative text-blue-500 text-md font-medium flex items-center gap-1
   
  "
>
  Solutions <ChevronDown size={14} className="mt-[1px]" />
</a>


          {/* hover buffer (prevents flicker) */}
          <div className="absolute left-40 top-full  h-6 w-40 -translate-x-1/2 " />
          {/* DROPDOWN */}
         <div
  className="
    absolute left-60 top-full mt-6 -translate-x-1/2
    w-[1080px]
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-150
    z-50 shadow-md
  "
>
<div className="w-[8%] mx-80 border border-2 border-blue-600"></div>

  <div className="
  overflow-hidden
  rounded-md
  bg-white
  border border-gray-100
  shadow-[0_18px_40px_rgba(16,24,40,0.12)]
">



              {/* Two main columns: white content + tinted CTA */}
              <div className="grid grid-cols-12">
                {/* LEFT WHITE AREA */}
<div className="col-span-9 bg-white ">
                  <div className="px-12 py-6">
                    <div className="grid grid-cols-12 gap-4">
                      {/* SOLUTIONS column */}
                      <div className="col-span-4">
                      <p className="relative text-[11px] tracking-wider font-semibold text-gray-600 uppercase mb-6 pb-3">
  Solutions
</p>


                        <div className="flex gap-2">
                          {/* small icon box like screenshot */}
                          <div className="h-10 w-10 rounded border border-gray-200 flex items-center justify-center text-gray-600 text-[11px] font-semibold">
                            AD
                          </div>

                          <div>
                            <p className="text-gray-900 font-semibold text-[15px] leading-snug">
                              Pay Per Call Leads
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              Generate more calls with Ad campaign.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* vertical divider */}
                      <div className="col-span-1 flex justify-center">
                        <div className="w-px bg-gray-200" />
                      </div>

                      {/* INDUSTRY (2 columns like screenshot) */}
                      <div className="col-span-7">
                        <p className="text-[11px] tracking-wider font-semibold text-gray-600 uppercase mb-4">
                          Industry
                        </p>

                        <div className="grid grid-cols-2 gap-x-16">
                          <ul className="space-y-2 text-[13px] text-gray-600">
                            {industryLeft.map((item) => (
                              <li
                                key={item}
                                className="hover:text-blue-600 cursor-pointer"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-2 text-[13px] text-gray-600">
                            {industryRight.map((item) => (
                              <li
                                key={item}
                                className="hover:text-blue-600 cursor-pointer"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT TINTED CTA AREA */}
                <div className="col-span-3 bg-[#EAF3F2] border-l border-gray-100">
                  <div className="px-8 py-4">
                    <p className="text-gray-900 font-semibold text-[18px] leading-snug">
                      Join 2,000+ businesses using TopDogLeads to get better
                      exposure and pay by call.
                    </p>

                    <p className="text-[13px] text-gray-700 mt-6 leading-relaxed">
                      No Setup Fee. No Monthly Service Fee. No Cancellation Fee.
                    </p>

                    <button
                      className="
                        mt-8
                        inline-flex items-center justify-center
                        bg-blue-500 hover:bg-blue-700
                        text-white text-md
                        px-2 py-2.5
                        rounded
                        transition
                      "
                    >
                      Try TopDogLeads
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="text-gray-600 hover:text-blue-600 text-md font-medium"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-gray-600 hover:text-blue-600 text-md font-medium"
          href="#"
        >
          Case Studies
        </a>
        <a
          className="text-gray-600 hover:text-blue-600 text-md font-medium"
          href="#"
        >
          Publishers
        </a>
        <a
          className="text-gray-600 hover:text-blue-600 text-md font-medium"
          href="#"
        >
          Login
        </a>

      {/* RIGHT */}
      <div className="flex items-center gap-2 font-semibold text-gray-900 text-md">
        <Phone size={16} />
        <span>1 (310) 295 4421</span>
      </div>

      <button className="border-2 border-blue-500 text-gray-600 px-4 py-2 rounded-md 
    text-md hover:bg-blue-600 hover:text-white transition">
        Try TopDogLeads
      </button>
            </div>

    </nav>
  );
}
