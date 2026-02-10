import React from 'react'
import Image from 'next/image'

const Customers = () => {
  return (
    <section className='w-full h-full flex bg-white'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-8 w-full px-6 sm:px-10 md:px-20 xl:px-30 py-12 sm:py-16 xl:py-20'>

        {/* Text Content */}
        <div className="right flex flex-col space-y-6 sm:space-y-8 xl:space-y-10 w-full xl:w-1/2 xl:pl-20">
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-snug'>
            We've generated over 250,000 calls for our customers
          </h1>
          <p className='text-sm sm:text-base xl:text-md text-gray-950 leading-relaxed'>
            250,000+ calls have been generated through our pay per call marketing program. Avoid lost cost through Ads that don’t convert and buy pay per call leads of customers near you in need of your service.
          </p>

          <button className='px-5 py-3 sm:py-4 bg-blue-500 font-semibold text-white rounded-lg w-full xl:w-1/3 transition hover:bg-blue-600'>
            Top Dog Leads
          </button>
        </div>

        {/* Image */}
        <div className="relative left w-full xl:w-1/2 flex justify-center mt-8 xl:mt-0">
          <Image
            src="/touch.png"
            alt='customer calls'
            width={420}
            height={276}
            className='object-contain'
          />
        </div>

      </div>
    </section>
  )
}

export default Customers
