import React from 'react'
import Image from 'next/image'
import { manrope } from '@/lib/fonts'
import Link from 'next/link'
const Customers = () => {
  return (
    <section className='w-full h-full flex bg-white'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-8 w-full px-6 sm:px-10 md:px-20 xl:px-30 py-12 sm:py-16 xl:py-20'>

        {/* Text Content */}
        <div className="right flex flex-col space-y-6 sm:space-y-8 xl:space-y-10 w-full xl:w-1/2 xl:pl-20">
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-snug'>
Over 300,000 Customer Calls Delivered
          </h1>
        <p className={`${manrope.className} text-gray-800 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed mt-4`}>
Top Dog Leads Has delivered Over 250,000 Real Customer Calls.<br/>  
Stop wasting money on ads that don’t convert. With our pay‑per‑call marketing service, you get high‑quality leads from nearby customers who are actively searching for your services.          </p>

  
  <Link href="/contact">
    <button className="cursor-pointer border-2 bg-[#1c2d56] text-white px-4 py-2 rounded-md hover:bg-[#1c2d56]/90">
      Try Top Dog Leads
    </button>
  </Link>
        </div>

        {/* Image */}
        <div className="relative left w-full xl:w-1/2 flex justify-center mt-8 xl:mt-0">
          <Image
            src="/server.jpg"
            alt='customer calls'
            width={420}
            height={276}
            className='object-contain transition-transform duration-300 hover:scale-105'
          />
        </div>

      </div>
    </section>
  )
}

export default Customers
