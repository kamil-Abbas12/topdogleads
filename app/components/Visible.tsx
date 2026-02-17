import React from 'react'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
const Visible = () => {
  return (
    <section className='w-full h-full flex bg-white'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-6 sm:gap-8 xl:gap-10 w-full px-4 sm:px-6 md:px-10 xl:px-30 py-10 sm:py-16 xl:py-20'>
        
        {/* LEFT IMAGE */}
        <div className="relative left w-full xl:w-1/2 flex justify-center">
          <Image
            src="/business1.jpg"
            alt='cheer'
            width={420}
            height={276}
            className='object-contain'
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right flex flex-col space-y-6 sm:space-y-4 xl:space-y-6 w-full xl:w-1/2">
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-snug'>
Get Seen by the Right Customers  
          </h1>
          <h2 className='text-base sm:text-lg font-medium text-gray-950 leading-relaxed'>
Visibility online isn’t just important. It’s essential for growth. When local customers can easily find you, your business thrives.
At Top Dog Leads, we make sure you’re not just visible—you’re unforgettable.  </h2>

          <div className='flex flex-col gap-4 sm:gap-5'>
            <div className='flex gap-2 items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
  Maximum exposure where it matters most
    
      </h3>
            </div>

            <div className='flex gap-2 items-center'>
           <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
Targeted promotion to the right local audience   </h3>
            </div>
               <div className='flex gap-2 items-center'>
           <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
Real connections that turn searches into sales</h3>
            </div>
          </div>

         
  <Link href="/contact">
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
