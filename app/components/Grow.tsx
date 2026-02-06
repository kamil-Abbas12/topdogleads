import React from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react';

const Grow = () => {
  return (
    <section className='w-full flex'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-10 w-full px-40 py-20'>
        
        {/* Left Content */}
        <div className="flex flex-col space-y-5 w-full xl:w-1/2">
          <h1 className='text-4xl font-bold text-gray-800'>
            Grow your business <br/>
            with more customer calls
          </h1>
          <h2 className='text-md text-gray-700 leading-relaxed'>
            Sign up today for our pay per call lead service to grow your business. Setup multiple online campaigns and optimize your Google My Business information with targeted keywords, products details, service areas, images and more.
          </h2>

          <div className='space-y-4'>
            <div className='flex gap-2 items-center'>
              <div className="p-2">
                <CircleCheck className="text-sky-500" size={30} strokeWidth={1.5} />
              </div>
              <h3 className='text-gray-700'>We maximize your exposure on multiple marketing platforms</h3>
            </div>

            <div className='flex gap-2 items-center'>
              <div className="p-2">
                <CircleCheck className="text-sky-500" size={30} strokeWidth={1.5} />
              </div>
              <h3 className='text-gray-700'>Rank high on Google Maps and searches with our automated tools</h3>
            </div>

            <div className='flex gap-2 items-center'>
              <div className="p-2">
                <CircleCheck className="text-sky-500" size={30} strokeWidth={1.5} />
              </div>
              <h3 className='text-gray-700'>Access to a real-time dashboard to track and monitor your calls</h3>
            </div>
          </div>

          {/* Watch Video */}
          <div className='flex items-center gap-2 mt-4 cursor-pointer'>
            <span className='text-blue-500 font-semibold'>Try Topdogleads Call</span>
            <div className='bg-blue-500 rounded-full p-1 flex items-center justify-center'>
              <ArrowRight className='text-white' size={18} />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <Image
            src="/grow.jpg"
            alt='cheer'
            width={420}
            height={276}
            className='object-contain'
          />
        </div>

      </div>
    </section>
  );
}

export default Grow;
