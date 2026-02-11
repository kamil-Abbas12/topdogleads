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
      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 w-full px-4 sm:px-6 md:px-10 xl:px-40 py-10 sm:py-16 xl:py-20">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-5 w-full xl:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Grow your business <br />
            with more customer calls
          </h1>
          <h2 className="text-sm sm:text-md md:text-md text-gray-700 leading-relaxed">
            Sign up today for our pay per call lead service to grow your business. Setup multiple online campaigns and optimize your Google My Business information with targeted keywords, products details, service areas, images and more.
          </h2>

          <div className="space-y-3 sm:space-y-4 mt-4">
            <div className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0">
                <CircleCheck className="text-sky-500" size={checkSize} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 text-sm sm:text-base">
                We maximize your exposure on multiple marketing platforms
              </h3>
            </div>

            <div className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0">
                <CircleCheck className="text-sky-500" size={checkSize} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 text-sm sm:text-base">
                Rank high on Google Maps and searches with our automated tools
              </h3>
            </div>

            <div className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0">
                <CircleCheck className="text-sky-500" size={checkSize} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 text-sm sm:text-base">
                Access to a real-time dashboard to track and monitor your calls
              </h3>
            </div>
          </div>

          {/* Watch Video */}
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
            <span className="text-orange-500 font-semibold text-sm sm:text-base">Try Top Dog Leads</span>
            <div className="bg-orange-500 rounded-full p-1 sm:p-1.5 flex items-center justify-center">
              <ArrowRight className="text-white" size={arrowSize} />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full xl:w-1/2 flex justify-center mt-6 xl:mt-0">
          <Image
            src="/grow.jpg"
            alt="Grow Business"
            width={420}
            height={276}
            className="object-contain w-full max-w-[420px]"
          />
        </div>

      </div>
    </section>
  )
}

export default Grow
