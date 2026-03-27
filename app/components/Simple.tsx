'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import { manrope } from '@/lib/fonts';
import { useState } from 'react';

const Simple = () => {
  const [open, setopen] = useState(false)

  return (
    <section
      aria-label="How Top Dog Leads works — pay only when the phone rings"
      className='w-full h-full bg-blue-50 mt-0'
    >

      <div className='flex flex-col lg:flex-row w-full h-full justify-between items-start px-4 sm:px-6 md:px-10 xl:px-25 py-10 sm:py-20 xl:py-30 gap-8 sm:gap-10 xl:gap-10'>
        {/* LEFT SIDE */}
        <div className="left flex flex-col space-y-5 w-full xl:w-1/2">
          <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold leading-snug text-blue-900'>
            Calls That Convert, Customers That Stay.
          </h2>
          <p className={`${manrope.className} text-gray-900 text-sm sm:text-base`}>
            Local competition is cutthroat. So why waste budget on clicks that never convert? With Top Dog Leads, you skip the guesswork. We do the heavy lifting, delivering real customers straight to your business. And the best part? You only pay when the phone rings.
          </p>
          <div className='flex flex-row gap-2 sm:gap-3 items-center'>
            <span className='text-[#1c2d56] font-semibold text-sm sm:text-base'>
              Watch Our Video
            </span>
            <span aria-hidden="true">
              <ArrowRight className='text-white bg-[#1c2d56] rounded-full p-1 sm:p-2' size={26} />
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right w-full xl:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[540px] h-[200px] sm:h-[240px] xl:h-[269px] overflow-hidden rounded-md">

            {open ? (
              <>
                <video
                  src="/video.mp4"
                  controls
                  autoPlay
                  aria-label="Top Dog Leads explainer video — how pay-per-call lead generation works"
                  className="w-full h-full object-cover"
                />
                <div
                  onClick={() => setopen(false)}
                  role="button"
                  aria-label="Close video"
                  className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded cursor-pointer z-20"
                >
                  ✕
                </div>
              </>
            ) : (
              <>
                <Image
                  src="/tab.png"
                  alt="Preview of Top Dog Leads explainer video — click to watch how pay-per-call works"
                  fill
                  className="object-cover"
                />
                <Image
                  src="/play.png"
                  alt="Play Top Dog Leads video"
                  width={60}
                  height={60}
                  onClick={() => setopen(true)}
                  className="absolute top-1/2 left-1/2 z-10
                             -translate-x-1/2 -translate-y-1/2
                             cursor-pointer hover:scale-110 transition"
                />
              </>
            )}

          </div>
        </div>
      </div>

      <div className='border border-gray-300 w-full' role="separator" aria-hidden="true"></div>

    </section>
  )
}

export default Simple