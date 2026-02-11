"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight, CircleCheck } from "lucide-react"
import { PiBatteryPlusVerticalLight } from "react-icons/pi"
import WhyChooseUs from "@/app/components/WhyChooseUs"

const PayPerCall = () => {
  // Optional: dynamically handle responsive icon size
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const arrowSize = isMobile ? 14 : 16
  const checkSize = isMobile ? 18 : 22

  return (
    <>
    <section className="w-full flex bg-white">

      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 w-full px-4 sm:px-6 md:px-10 xl:px-40 py-10 sm:py-16 xl:py-20">
        {/* Left Content */}
        <div className="flex flex-col space-y-3 w-full xl:w-1/2">
          <h3 className="text-md sm:text-lg md:text-xl uppercase text-blue-900 leading-snug">
            Welcome to TOp DOG LEADS
          </h3>

          <h1 className="text-2xl uppercase sm:text-3xl md:text-6xl lg:text-8xl xl:text-10xl text-[#58d2cb]">
            Leads
          </h1>

          {/* Added image directly below "Leads" */}
         

          <h1 className="text-2xl uppercase sm:text-3xl font-bold md:text-6xl lg:text-8xl xl:text-10xl text-[#243678]">
            Sales
          </h1>

          <h1 className="text-2xl uppercase font-bold sm:text-3xl md:text-6xl lg:text-8xl xl:text-10xl text-[#243678]">
            support
          </h1>

          <h1 className="text-2xl uppercase sm:text-3xl font-bold md:text-6xl lg:text-8xl xl:text-10xl text-[#243678]">
            lead
          </h1>
          {/* Input + Button (like the screenshot) */}
<div className="w-full max-w-[640px] mt-2">
  <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden shadow-sm">
    <input
      type="url"
      placeholder="http://yoursite.com"
      className="flex-1 px-5 py-3 text-sm sm:text-base outline-none"
    />
    <button
      className="px-6 sm:px-10 py-3 text-xs sm:text-sm font-semibold text-white rounded-full
                 bg-gradient-to-r from-sky-400 to-blue-600"
    >
      GET A QUOTE
    </button>
  </div>
</div>

        </div>

        {/* Right Image */}
        <div className="w-full xl:w-1/2 flex justify-center mt-6 xl:mt-0">
          <Image
            src="/new.jpg"
            alt="Grow Business"
            width={1200}
            height={456}
            className="object-cover w-full max-w-[420px]"
          />
        </div>
      </div>

    </section>
    <section>
        <WhyChooseUs />
        </section>
        </>

  )
}

export default PayPerCall
