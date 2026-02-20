"use client"

import React from "react"
import Image from "next/image"
import WhyChooseUs from "@/app/components/WhyChooseUs"
import StatsSection from "@/app/components/StatsSection"
import TestimonialSection from "@/app/components/TestimonialSection"
import Hello from "@/app/components/Hello"

const PayPerCall = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10 sm:py-16 xl:py-20">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-3 w-full lg:w-1/2 text-center lg:text-left">
            
            <h3 className="text-md sm:text-lg md:text-xl uppercase text-blue-900 leading-snug">
              Welcome to Top Dog Leads
            </h3>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#58d2cb] font-extrabold uppercase">
              Leads
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#243678] font-bold uppercase">
              Sales
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#243678] font-bold uppercase">
              Support
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#243678] font-bold uppercase">
              Lead
            </h1>

            {/* Input + Buttons */}
            <div className="w-full max-w-md mt-4 mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center bg-gray-100 border border-gray-200 text-gray-900  rounded-full overflow-hidden shadow-sm">
                <input
                  type="url"
                  placeholder="http://yoursite.com"
                  className="flex-1 px-5 py-3 text-sm sm:text-base outline-none rounded-t-full sm:rounded-l-full sm:rounded-r-none"
                />
                {/* Desktop Button */}
                <button className="hidden sm:block px-8 py-3 text-sm font-semibold text-white bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition rounded-md">
                  Sign Up
                </button>
              </div>

              {/* Mobile Button */}
              <button className="sm:hidden w-full mt-4 px-8 py-3 text-sm font-semibold text-white bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition rounded-md">
                Sign Up
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 xl:mt-0">
            <Image
              src="/new.jpg"
              alt="Grow Business"
              width={1200}
              height={456}
              className="object-cover w-full max-w-[420px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>

        </div>
      </section>

      {/* Additional Sections */}
      <section>
        <WhyChooseUs />
        <StatsSection />
        <TestimonialSection />
        <Hello />
      </section>
    </>
  )
}

export default PayPerCall