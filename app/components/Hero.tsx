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
    img: "/results that. ring.webp",
    button: "Try Top Dog Leads",
  },
  {
    title: "Trusted by 5,000+ Local Businesses",
    desc: "Join 100+ Businesses Dominating their Market with Top Dog Leads. Scale your growth and start capturing high-intent calls while your competitors are still chasing clicks.",

    img: "/trusted by 5000.webp",
    button: "Try Top Dog Leads",
  },
  {
    title: "Stop Chasing Leads. Start Closing Deals.",
    desc: "Our performance-driven campaigns bridge the gap between 'Interest' and 'Sold'.",
    img: "/stop chasing deals.webp",
    button: "Get Started",
  },
];
const Hero = () => {
  return (
    <section className="relative w-full px-4 sm:px-6
     lg:px-12 xl:px-45 py-10 lg:py-20 flex items-center justify-center overflow-hidden bg-white">

      {/* BACKGROUND CIRCLES */}
      <div className="absolute -z-10 top-10 left-0 w-40 h-40 bg-yellow-200 rounded-full opacity-40" />
      <div className="absolute -z-10 top-32 left-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-50" />
      <div className="absolute -z-10 bottom-20 left-1/3 w-20 h-20 bg-red-200 rounded-full opacity-50" />

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        loop
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

              {/* LEFT */}
              <div className="flex flex-col items-start space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-gray-900 text-3xl sm:text-4xl xl:text-5xl font-semibold leading-snug">
                  {slide.title}
                </h1>

                <p className={'${manrope.className} text-gray-600 text-base sm:text-lg max-w-xl'}>
                  {slide.desc}
                </p>
<Link href="/contact">
                <button className="px-6 py-4 cursor-pointer bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition 
                font-semibold text-white rounded-lg">
                  {slide.button}
                </button>
                </Link>

              </div>

              {/* RIGHT */}
              {/* RIGHT */}
<div className="w-full lg:w-1/2 flex justify-center">
  {/* fixed frame so every slide image is same size */}
  <div className="relative w-full max-w-md lg:max-w-xl h-[260px] sm:h-[320px] lg:h-[380px]">
    <Image
      src={slide.img}
      alt="banner"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
      className="object-contain"
      priority={i === 0}
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
