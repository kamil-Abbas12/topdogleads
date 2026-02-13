"use client";
import React from "react";
import { CircleCheck, Star } from "lucide-react";

const Join = () => {
  return (
    <section className="w-full h-full bg-white">
              <div className='border border-gray-300 w-full'></div>

      <div className="flex flex-col px-10 py-20 justify-center items-center text-center space-y-5 md:space-y-10">

        <h1 className="text-4xl font-bold text-center text-blue-900">
Join 5,000+ businesses with TopDogLeads
        </h1>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5 mt-10">
 <div className='flex gap-2 font-semibold items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
Live Transfer
              </h3>
            </div>
            <div className='flex gap-2 font-semibold items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
No Contract
              </h3>
            </div>
             <div className='flex gap-2 font-semibold items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
Pay Per Call              </h3>
            </div>
             <div className='flex gap-2 font-semibold items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
No Sign Up Fee              </h3>
            </div>
             <div className='flex gap-2 font-semibold items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
Real Customers
              </h3>
            </div>
             <div className='flex gap-2 font-semibold items-center'>
             <div className="text-blue-800 text-[25px] sm:text-[30px]">
  <CircleCheck className="w-4 h-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
</div>
              <h3 className='text-gray-700 text-sm sm:text-base'>
Exclusive Lead              </h3>
            </div>
     </div>
      </div>

   

     
    </section>
  );
};

export default Join;
