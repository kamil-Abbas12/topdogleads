"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'

const Grow = () => {
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
    <section
      aria-label="Performance-based lead generation — fuel your business with ready-to-buy customers"
      className="w-full flex bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full px-4 sm:px-6 md:px-10 xl:px-25 py-10 sm:py-16 xl:py-20">

        {/* Left Content */}
        <div className="flex flex-col space-y-5 w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Fuel Your Business with Ready‑to‑Buy Customers
          </h2>

          <p className="text-sm sm:text-md md:text-md text-gray-700 leading-relaxed">
            Sign Up Today for Performance‑Based Leads.
            Expand your reach with campaigns that work smarter, not harder. Launch multiple online campaigns while optimizing your business profile with the right keywords, service details, coverage areas, images, and more.
          </p>

          <ul
            className="space-y-3 sm:space-y-4 mt-4"
            aria-label="Benefits of Top Dog Leads performance-based marketing"
          >
            <li className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0" aria-hidden="true">
                <CircleCheck className="text-blue-800" size={checkSize} strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Boost visibility across key marketing channels
              </p>
            </li>

            <li className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0" aria-hidden="true">
                <CircleCheck className="text-blue-800" size={checkSize} strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Rank higher in local search results and Google Maps
              </p>
            </li>

            <li className="flex gap-2 items-start sm:items-center">
              <div className="p-1 sm:p-2 flex-shrink-0" aria-hidden="true">
                <CircleCheck className="text-blue-800" size={checkSize} strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Track success with our live, easy‑to‑use dashboard
              </p>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
            <a
              href="/solution/pay-per-call"
              className="flex items-center gap-2 text-sm sm:text-base"
              aria-label="Try Top Dog Leads pay-per-call lead generation"
            >
              <span className="text-[#1c2d56] hover:text-[#1c2d56]/90 font-semibold text-sm sm:text-base">
                Try Top Dog Leads
              </span>
            </a>
            <div className="bg-[#1c2d56] rounded-full p-1 sm:p-1.5 flex items-center justify-center" aria-hidden="true">
              <ArrowRight className="text-white" size={arrowSize} />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 xl:mt-0">
          <Image
            src="/fuel.jpeg"
            alt="Business owner growing revenue with Top Dog Leads pay-per-call marketing campaigns"
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