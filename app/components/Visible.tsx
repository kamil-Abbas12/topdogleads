import React from 'react'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react';

const Visible = () => {
  return (
<section className='w-full h-full flex  '>
    <div className='flex flex-col xl:flex-row justify-between items-center gap-5 w-full px-30 py-20'>
        <div className=" relative left w-1/2 ">
            <Image
            src="/cheer.jpg"
            alt='cheer'
            width={420}
            height={276}
            className='object-contain'
            />
        </div>
        <div className="right flex flex-col space-y-10 w-1/2">
            <h1 className='text-4xl font-bold text-gray-800'>Visibility is crucial <br/>
to your business's growth</h1>
<h2 className='text-lg font-medium text-gray-950'>Visibility brings exposure to local customers looking for your business. Better exposure means more customers.</h2>
<div>

<div className='flex gap-2 items-center '>

 <div className="p-4">
      {/* Blue Circular Tick */}
      <CircleCheck className="text-sky-500" size={30} strokeWidth={1.5} />
    </div>
          <h3 className='text-gray-700'>We take care of the legwork and ensure maximum exposure</h3>

</div>
<div className='flex gap-2 items-center '>

 <div className="p-4">
      {/* Blue Circular Tick */}
      <CircleCheck className="text-sky-500" size={30} strokeWidth={1.5} />
    </div>
          <h3 className='text-gray-700'>We take care of the legwork and ensure maximum exposure</h3>

</div>
        </div>
        <button className='px-5 py-4 bg-blue-500 font-semibold text-white rounded-lg w-full xl:w-1/3'>
                  Top dog leads
                </button>
</div>

    </div>

</section>

)
}

export default Visible