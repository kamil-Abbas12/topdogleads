import React from 'react'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

const Visible = () => {
  return (
    <section
      aria-label="Get seen by the right customers with Top Dog Leads"
      className='w-full h-full flex bg-white lg:mt-0 lg:pt-0'
    >
      <div className='flex flex-col lg:flex-row justify-between
       items-center gap-6 sm:gap-8 xl:gap-15 w-full px-4 sm:px-6 md:px-10 xl:px-20 py-10 sm:py-16 lg:pb-20'>

        {/* LEFT IMAGE */}
        <div className="relative left w-full lg:w-1/2 flex justify-center">
          <Image
            src="/customer.jpg"
            alt="Local business owner receiving qualified customer calls through Top Dog Leads"
            width={420}
            height={290}
            className='object-contain h-[300px] lg:h-[400px] transition-transform duration-300 hover:scale-105'
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right flex flex-col space-y-6 sm:space-y-4 xl:space-y-6 w-full lg:w-1/2">
          <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-snug'>
            Get Seen by the Right Customers
          </h2>
          <p className='text-base sm:text-lg font-medium text-gray-950 leading-relaxed'>
            Visibility online isn't just important. It's essential for growth. When local customers can easily find you, your business thrives.
            At Top Dog Leads, we make sure you're not just visible — you're unforgettable.
          </p>

          <ul className='flex flex-col gap-4 sm:gap-5' aria-label="Benefits of Top Dog Leads visibility">
            <li className='flex gap-2 items-center'>
              <div className="text-blue-800" aria-hidden="true">
                <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
              </div>
              <p className='text-gray-700 text-sm sm:text-base'>
                Maximum exposure where it matters most
              </p>
            </li>

            <li className='flex gap-2 items-center'>
              <div className="text-blue-800" aria-hidden="true">
                <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
              </div>
              <p className='text-gray-700 text-sm sm:text-base'>
                Targeted promotion to the right local audience
              </p>
            </li>

            <li className='flex gap-2 items-center'>
              <div className="text-blue-800" aria-hidden="true">
                <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
              </div>
              <p className='text-gray-700 text-sm sm:text-base'>
                Real connections that turn searches into sales
              </p>
            </li>
          </ul>

          <Link href="/contact" aria-label="Get started with Top Dog Leads — pay-per-call lead generation">
            <button className="cursor-pointer border-2 bg-[#1c2d56] text-white px-4 py-2 lg:px-12 lg:py-3 rounded-md hover:bg-[#1c2d56]/90">
              Top Dog Leads
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Visible