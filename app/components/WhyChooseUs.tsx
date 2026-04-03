"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import {
  PiMegaphoneLight,
  PiChartLineUpLight,
  PiHeadsetLight,
  PiGlobeSimpleLight,
} from "react-icons/pi";

type Card = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Exclusive Pay Per Call Leads",
    desc: "Connect with real prospects through qualified inbound calls instead of low-intent clicks.",
    icon: <PiMegaphoneLight className="h-7 w-7" />,
  },
  {
    title: "Campaign Optimization",
    desc: "Improve lead quality with keyword targeting, service-area focus, and performance-driven strategy.",
    icon: <PiChartLineUpLight className="h-7 w-7" />,
  },
  {
    title: "Real-Time Call Delivery",
    desc: "Respond faster to high-intent prospects while they are actively searching for your services.",
    icon: <PiHeadsetLight className="h-7 w-7" />,
  },
  {
    title: "Local Market Reach",
    desc: "Generate more visibility in the places where your ideal customers need your business most.",
    icon: <PiGlobeSimpleLight className="h-7 w-7" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E78] to-[#1C3EA0]" />
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-40 rounded-b-[60%] bg-white/5 blur-2xl" />

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:gap-15 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl">
            <div className="grid grid-cols-2 gap-6">
              {cards.map((c, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:bg-blue-800 transition"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7FF] text-[#14B8FF] group-hover:bg-white/20 group-hover:text-white transition">
                    {c.icon}
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-semibold leading-snug text-[#0A2E78] group-hover:text-white transition">
                    {c.title}
                  </h3>

                  <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-[#35538F] group-hover:text-white/90 transition">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-white">
            <p className="text-xs font-semibold tracking-[0.20em] text-[#9BE6FF] uppercase">
              Why Choose Top Dog Leads
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              High-Intent Calls,
              <br />
              Better Lead Quality,
              <br />
              Stronger ROI
            </h2>

            <div className="mt-6 space-y-4 text-[13px] sm:text-[14px] leading-relaxed text-white/90">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#9BE6FF]" />
                <p>
                  We focus on pay per call lead generation for businesses that want
                  qualified customer conversations instead of empty traffic.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#9BE6FF]" />
                <p>
                  Our approach is built for local service brands where calls lead
                  directly to appointments, estimates, and sales.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#9BE6FF]" />
                <p>
                  From targeting to delivery, every campaign is designed to help
                  your team connect with stronger, higher-intent prospects.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-6 py-3 text-xs font-semibold tracking-wide text-[#0A2E78] hover:text-white hover:bg-blue-800 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition"
            >
              Get Qualified Calls
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
