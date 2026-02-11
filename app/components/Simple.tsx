import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';

const Simple = () => {
  return (
    <section className='w-full h-full bg-[#f8fcff] mt-0'>

      <div className='flex flex-col xl:flex-row w-full h-full justify-between items-start px-4 sm:px-6 md:px-10 xl:px-45 py-10 sm:py-20 xl:py-30 gap-8 sm:gap-10 xl:gap-10'>
        {/* LEFT SIDE */}
        <div className="left flex flex-col space-y-5 w-full xl:w-1/2">
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold leading-snug text-gray-900'>
            We generate more calls. You gain new customers and pay per call. Simple!
          </h1>
          <p className='text-gray-500 text-sm sm:text-base'>
            There are many businesses competing to get the same customers you are targeting. Why spend so much on clicks? Let’s Result do the hard part, you convert new customers and only pay per potential customer call.
          </p>
          <div className='flex flex-row gap-2 sm:gap-3 items-center'>
            <span className='text-orange-500 font-semibold text-sm sm:text-base'>
              Watch Our Video
            </span>
            <span>
              <ArrowRight className='text-white bg-orange-500 rounded-full p-1 sm:p-2' size={26} />
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right w-full xl:w-1/2 flex justify-center cursor-pointer">
          <div className="relative w-full max-w-[540px] h-[200px] sm:h-[240px] xl:h-[269px] group overflow-hidden rounded-md">
            
            {/* Laptop image */}
            <Image
              src="/laptop.jpg"
              alt="laptop"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Soft blue tint */}
            <div
              className="absolute inset-0 bg-orange-500/30 opacity-0
                         group-hover:opacity-100
                         transition-opacity duration-300"
            />

            {/* Play button */}
            <Image
              src="/play.png"
              alt="play"
              width={45}
              height={45}
              className="absolute top-1/2 left-1/2 z-10
                         -translate-x-1/2 -translate-y-1/2
                         text-white bg-orange-500 hover:bg-orange-600 sm:w-[55px] sm:h-[55px]"
            />
          </div>
        </div>
      </div>

      <div className='border border-gray-300 w-full'></div>

    </section>
  )
}

export default Simple
