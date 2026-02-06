"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    title: "Get new customers and only pay per calls.",
    desc: "Pay when a customer calls. No monthly or signup fee required.",
    img: "/banner.jpg",
    button:"Try ResultCals"
  },
  {
    title: "Join 2,000+ businesses using TopDogLeads.",
    desc: "Get started today and improve your business calls.",
    img: "/banner.jpg",
        button:"Try ResultCals"

  },
  {
    title: "Only pay for customer calls.",
    desc: "Get more customer calls with our pay-per-call Ad campaign.",
    img: "/banner.jpg",
        button:"Get Started"

  },
];

const Hero = () => {
  return (
<section className='relative w-full px-10 xl:px-25 py-5 xl:py-13 flex items-center justify-center overflow-hidden'>
{/* BACKGROUND CIRCLES */}
<div className="absolute -z-10 top-15 -left-10 w-50 h-50 bg-yellow-200 rounded-full opacity-40" />

<div className="absolute -z-10 top-30 left-55% w-20 h-20 bg-blue-200 rounded-full opacity-50" />

<div className="absolute -z-10 bottom-20 left-1/3 w-15 h-15 bg-red-200 rounded-full opacity-50" />
      
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
            <div className='flex flex-col xl:flex-row justify-between items-center w-full py-10 xl:py-30 gap-20'>

              {/* LEFT */}
              <div className="left flex flex-col justify-center items-start space-y-8 xl:w-1/2 w-full px-25">
                <h1 className='text-gray-900 text-4xl font-semibold leading-snug'>
                  {slide.title}
                </h1>

                <h6 className='text-gray-600 '>
                  {slide.desc}
                </h6>

                <button className='px-8 py-4 bg-blue-500 font-semibold text-white rounded-lg'>
                  {slide.button}
                </button>
              </div>

              {/* RIGHT */}
              <div className="right xl:w-1/2 w-full h-full">
                <Image
                  src={slide.img}
                  width={700}
                  height={100}
                  alt="banner"
                  className="object-contain"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;
