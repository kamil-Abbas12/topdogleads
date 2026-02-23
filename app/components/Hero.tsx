"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { manrope } from "@/lib/fonts";

const slides = [
  {
    title: "Results That Ring. Pay Only For People.",
    desc: "Stop wasting budget on empty clicks. Connect with verified prospects who are ready to talk — and pay only when a qualified lead calls you.",
    Image: "/ring.png",
    button: "Try Top Dog Leads",
  },
  {
    title: "Trusted by 5,000+ Local Businesses",
    desc: "Join 100+ Businesses Dominating their Market with Top Dog Leads. Scale your growth and start capturing high-intent calls while your competitors are still chasing clicks.",
    Image: "/trusted by 5000.webp",
    button: "Try Top Dog Leads",
  },
  {
    title: "Stop Chasing Leads. Start Closing Deals.",
    desc: "Our performance-driven campaigns bridge the gap between 'Interest' and 'Sold'.",
    Image: "/stop chasing deals.webp",
    button: "Get Started",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-x-hidden bg-white px-4 sm:px-6 lg:px-12 xl:px-25 py-12 lg:py-20">

      <Swiper
        modules={[Autoplay]}
        loop
        speed={900}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        style={{ transform: "translate3d(0,0,0)" }} // 🔥 fixes left line bug
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

              {/* LEFT CONTENT */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

                <h1 className="text-gray-900 text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight">
                  {slide.title}
                </h1>

                <p className={`${manrope.className} text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0`}>
                  {slide.desc}
                </p>

                <Link href="/contact">
                  <button className="px-7 py-4 bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition cursor-pointer font-semibold text-white rounded-lg">
                    {slide.button}
                  </button>
                </Link>

              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-xl h-[260px] sm:h-[320px] lg:h-[400px]">
                  <Image
                    src={slide.Image}
                    alt="hero banner"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-contain"
loading={i === 0 ? "eager" : "lazy"}
                    quality={90}
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;