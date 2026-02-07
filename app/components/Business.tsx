import React from 'react'
import Image from 'next/image'
const Business = () => {
  return (
<section className='relative w-full h-full xl:pt-30  xl:pb-0 bg-white'>
<div className='border border-gray-100 w-full'></div>
<div className='flex flex-col justify-center items-center pt-10'>
<h2 className='text-gray-800 text-3xl '>Join 2,000+ businesses using TopDogLeads</h2>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-14'>

<Image
src="/client.png"
alt='client'
width={145}
height={55}
className='object-contain '
/>
<Image
src="/jetski.png"
alt='client'
width={145}
height={55}
className='object-contain '
/>
<Image
src="/moe.png"
alt='client'
width={145}
height={55}
className='object-contain '
/>
<Image
src="/plumb.png"
alt='client'
width={145}
height={55}
className='object-contain '
/>
<Image
src="/exploria.png"
alt='client'
width={145}
height={55}
className='object-contain '
/>
<Image
src="/jaspey.png"
alt='client'
width={145}
height={55}
className='object-contain '
/>

</div>
<div className='border border-gray-300 w-full mt-10'></div>

</div>

</section>

)
}

export default Business