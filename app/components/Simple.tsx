import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';

const Simple = () => {
  return (
<section className='w-full h-full bg-[#f8fcff] mt-0'>

<div className='flex flex-col xl:flex-row w-full h-full justify-between items-start px-45 py-30 gap-10'>
<div className="left flex flex-col space-y-5 w-full">
<h1 className='text-4xl font-bold leading-snug text-gray-900'>
We generate more calls. You gain new customers and pay per call. Simple!
</h1>
<p className='text-gray-500'>There are many businesses competing to get the same customers you are targeting. Why spend so much on clicks? Let’s Result do the hard part, you convert new customers and only pay per potential customer call.
</p>
<div className='flex flex-row gap-1 items-center'>

<span className='text-blue-500 font-semibold'>
Watch Our Video
</span>
<span>

      <ArrowRight className='text-white bg-blue-500 rounded-full' size={18} />
</span>

</div>

</div>
<div className="right w-full flex justify-center cursor-pointer">
  <div className="relative w-[540px] h-[269px] group overflow-hidden rounded-md">

    {/* Laptop image */}
    <Image
      src="/laptop.jpg"
      alt="laptop"
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-105"
    />

    {/* Soft blue tint */}
    <div
      className="absolute inset-0 bg-blue-500/30 opacity-0
                 group-hover:opacity-100
                 transition-opacity duration-300"
    />

    {/* Play button */}
    <Image
      src="/play.png"
      alt="play"
      width={55}
      height={55}
      className="absolute top-1/2 left-1/2 z-10
                 -translate-x-1/2 -translate-y-1/2
                 text-white bg-blue-500 hover:bg-blue-200"
    />
  </div>
</div>



</div>
<div className='border border-gray-300 w-full'></div>

</section>

)
}

export default Simple