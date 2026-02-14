import React from 'react'
import Image from 'next/image'

const Customers = () => {
  return (
    <section className='w-full h-full flex bg-white'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-8 w-full px-6 sm:px-10 md:px-20 xl:px-30 py-12 sm:py-16 xl:py-20'>

        {/* Text Content */}
        <div className="right flex flex-col space-y-6 sm:space-y-8 xl:space-y-10 w-full xl:w-1/2 xl:pl-20">
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-snug'>
Over 300,000 Customer Calls Delivered
          </h1>
          <p className='text-sm sm:text-base xl:text-md text-gray-950 leading-relaxed'>
Top Dog Leads has connected businesses with more than 250,000 real customer calls through our pay-per-call marketing service. Stop wasting money on ads that don’t convert and get high-quality leads from customers near you who are actively looking for your services.          </p>

          <button className='px-5 py-3 sm:py-4 cursor-pointer bg-[#1c2d56] hover:bg-[#1c2d56]/90 font-semibold text-white rounded-lg w-full xl:w-1/3 transition hover:bg-blue-600'>
            Top Dog Leads
          </button>
        </div>

        {/* Image */}
        <div className="relative left w-full xl:w-1/2 flex justify-center mt-8 xl:mt-0">
          <Image
            src="/server.jpg"
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
