"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'

const Grow = () => {
  // Optional: dynamically handle responsive icon size
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const arrowSize = isMobile ? 14 : 16
const checkSize = isMobile ? 18 : 22


  return (
    <section className="w-full flex bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full px-4 sm:px-6 md:px-10 xl:px-25 py-10 sm:py-16 xl:py-20">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-5 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
      Fuel Your Business with Ready‑to‑Buy Customers

          </h1>
          <h2 className="text-sm sm:text-md md:text-md text-gray-700 leading-relaxed">
Sign Up Today for Performance‑Based Leads. 
Expand your reach with campaigns that work smarter, not harder. Launch multiple online campaigns while optimizing your business profile with the right keywords, service details, coverage areas, images, and more.       
 </h2>

          <div className="space-y-3 sm:space-y-4 mt-4">
            <div className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0">
                <CircleCheck className="text-blue-800" size={checkSize} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 text-sm sm:text-base">
Boost visibility across key marketing channels
              </h3>
            </div>

            <div className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0">
                <CircleCheck className="text-blue-800" size={checkSize} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 text-sm sm:text-base">
Rank higher in local search results and Google Maps
              </h3>
            </div>

            <div className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0">
                <CircleCheck className="text-blue-800" size={checkSize} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 text-sm sm:text-base">
Track success with our live, easy‑to‑use dashboard
              </h3>
            </div>
          </div>

          {/* Watch Video */}
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
              <a href="/solution/pay-per-call" className="flex items-center gap-2 text-sm sm:text-base">

            <span className="text-[#1c2d56] hover:text-[#1c2d56]/90 font-semibold text-sm sm:text-base">Try Top Dog Leads</span>
            </a>
            <div className="bg-[#1c2d56] rounded-full p-1 sm:p-1.5 flex items-center justify-center">
              <ArrowRight className="text-white" size={arrowSize} />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 xl:mt-0">
          <Image
            src="/fuel.jpeg"
            alt="Fuel Your Business"
            width={420}
            height={200}
            className="object-contain w-full lg:h-[400px] transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  )
}

export default Grow
