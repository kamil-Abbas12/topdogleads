import React from 'react'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react';

const Visible = () => {
  return (
    <section className='w-full h-full flex bg-white'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-6 sm:gap-8 xl:gap-10 w-full px-4 sm:px-6 md:px-10 xl:px-30 py-10 sm:py-16 xl:py-20'>
        
        {/* LEFT IMAGE */}
        <div className="relative left w-full xl:w-1/2 flex justify-center">
          <Image
            src="/cheer.jpg"
            alt='cheer'
            width={420}
            height={276}
            className='object-contain'
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right flex flex-col space-y-6 sm:space-y-8 xl:space-y-10 w-full xl:w-1/2">
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-snug'>
            Visibility is crucial <br/> to your business's growth
          </h1>
          <h2 className='text-base sm:text-lg font-medium text-gray-950 leading-relaxed'>
            Visibility brings exposure to local customers looking for your business. Better exposure means more customers.
          </h2>

          <div className='flex flex-col gap-4 sm:gap-5'>
            <div className='flex gap-2 items-center'>
             <div className="text-sky-500 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
                We take care of the legwork and ensure maximum exposure
              </h3>
            </div>

            <div className='flex gap-2 items-center'>
           <div className="text-sky-500 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
                We take care of the legwork and ensure maximum exposure
              </h3>
            </div>
          </div>

          <button className='px-5 py-3 sm:py-4 bg-blue-500 font-semibold text-white rounded-lg w-full sm:w-2/3 xl:w-1/3 text-sm sm:text-base'>
            Top Dog Leads
          </button>
        </div>
      </div>
    </section>
  )
}

export default Visible
