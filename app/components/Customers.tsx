import React from 'react'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react';

const Customers = () => {
  return (
<section className='w-full h-full flex  '>
    <div className='flex flex-col xl:flex-row justify-between items-center gap-5 w-full px-30 py-20'>
      
        <div className="right flex flex-col space-y-10 w-1/2 pl-20">
            <h1 className='text-4xl font-bold text-gray-800'>We've generated over 250,000 calls for our customers</h1>
<p className='text-md text-gray-950'>250,000+ calls have been generated through our pay per call marketing program. Avoid lost cost through Ads that doesn’t convert and buy pay per call leads of customers near you in need of your service.</p>

        <button className='px-5 py-4 bg-blue-500 font-semibold text-white rounded-lg w-full xl:w-1/3'>
                  Top dog leads
                </button>
</div>
  <div className=" relative left w-1/2 px-20 ">
            <Image
            src="/touch.png"
            alt='cheer'
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