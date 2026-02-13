"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* ---------- TESTIMONIAL DATA ---------- */
const testimonials = [
  {
    text: "Design is a way of life, a point of view. It involves the whole complex of visual communications: talent, creative ability, manual skill, and knowledge.",
    name: "Denis Robinson",
    role: "Customer",
  },
  {
    text: "Top Dog Leads helped us grow faster than ever. The quality of leads is outstanding and conversion rates improved immediately.",
    name: "Sarah Mitchell",
    role: "Marketing Director",
  },
  {
    text: "Working with this team has been incredible. Their lead generation strategy delivered consistent and measurable results.",
    name: "James Carter",
    role: "Business Owner",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section className="bg-[#F7F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT IMAGE */}
          <div className="relative w-full flex justify-center">
            <Image
              src="/test.jpg"
              alt="testimonial"
              width={550}
              height={550}
              className="object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl">
            
            <p className="text-sm font-semibold tracking-widest text-[#19A7E0] uppercase">
              Testimonials
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#2D3E8B]">
              Our Client’s Say
            </h2>

            {/* QUOTE */}
            <div className="mt-8 flex gap-4 min-h-[140px]">
              <span className="text-5xl text-[#5DA9E9] leading-none">”</span>

              <p className="text-lg leading-relaxed text-gray-500 transition-all duration-500">
                {current.text}
              </p>
            </div>

            {/* CUSTOMER */}
            <div className="mt-8">
              <h4 className="font-semibold text-[#2D3E8B]">
                {current.name}
              </h4>
              <p className="text-gray-500 text-sm">{current.role}</p>
            </div>

            {/* NAV BUTTONS */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={prev}
                className="h-12 w-12 rounded-full border border-[#19A7E0] flex items-center justify-center text-[#19A7E0] hover:bg-[#19A7E0] hover:text-white transition"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={next}
                className="h-12 w-12 rounded-full border border-[#19A7E0] flex items-center justify-center text-[#19A7E0] hover:bg-[#19A7E0] hover:text-white transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}