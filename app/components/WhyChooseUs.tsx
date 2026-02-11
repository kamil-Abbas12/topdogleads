"use client"


import React from "react"
import { CheckCircle2 } from "lucide-react"
import {
  PiMegaphoneLight,
  PiChartLineUpLight,
  PiHeadsetLight,
  PiGlobeSimpleLight,
} from "react-icons/pi"

type Card = {
  title: string
  desc: string
  icon: React.ReactNode
}

const cards: Card[] = [
  {
    title: "Marketing Leads",
    desc: "Expand your customer base with our comprehensive marketing leads generation services.",
    icon: <PiMegaphoneLight className="h-7 w-7" />,
  },
  {
    title: "Lead Generation\nProcess",
    desc: "We empower your business to reach a wider audience and achieve significant growth.",
    icon: <PiChartLineUpLight className="h-7 w-7" />,
  },
  {
    title: "Customer\nSupport Leads",
    desc: "Provide exceptional customer support with our tailored customer support leads services.",
    icon: <PiHeadsetLight className="h-7 w-7" />,
  },
  {
    title: "Web Leads",
    desc: "Our comprehensive market analysis and strategic leads adds value.",
    icon: <PiGlobeSimpleLight className="h-7 w-7" />,
  },
]

const WhyChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background gradient (deep blue like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E78] to-[#1C3EA0]" />

      {/* Optional subtle top wave feel */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-40 rounded-b-[60%] bg-white/5 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: 2x2 cards */}
          <div className="mx-auto w-full max-w-xl">
            <div className="grid grid-cols-2 gap-6">
              {cards.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
                >
                  {/* Icon circle */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7FF] text-[#14B8FF]">
                    {c.icon}
                  </div>

                  <h3 className="whitespace-pre-line text-[15px] sm:text-[16px] font-semibold leading-snug text-[#0A2E78]">
                    {c.title}
                  </h3>

                  <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-[#35538F]">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: text + bullets + button */}
          <div className="text-white">
            <p className="text-xs font-semibold tracking-[0.20em] text-[#9BE6FF]">
              WHY CHOOSE US
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font800 font-extrabold leading-tight">
              The Best Leads,
              <br />
              Hand-picked
              <br />
              and Delivered
            </h2>

            <div className="mt-6 space-y-4 text-[13px] sm:text-[14px] leading-relaxed text-white/90">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#9BE6FF]" />
                <p>
                  At Top Dog Leads, we specialize in generating high-quality
                  inbound leads that demonstrate genuine interest in your
                  products or services.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#9BE6FF]" />
                <p>
                  We ensure that your business establishes authentic connections
                  with potential customers.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#9BE6FF]" />
                <p>
                  We employ advanced methodologies to identify and cultivate
                  leads that align with your target market.
                </p>
              </div>
            </div>

            <button
              className="mt-7 inline-flex items-center justify-center rounded-full
                         border border-white/30 bg-white px-6 py-3
                         text-xs font-semibold tracking-wide text-[#0A2E78]
                         shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                         transition hover:bg-white/90"
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyChooseUs
