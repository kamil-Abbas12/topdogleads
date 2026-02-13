"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ---------- COUNT UP HOOK ---------- */
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}


/* ---------- COMPONENT ---------- */
export default function StatsSection() {
  const conv = useCountUp(150);
  const customers = useCountUp(87);
  const invest = useCountUp(20);

  return (
    <section className="bg-[#F7F9FC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT IMAGE */}
          <div className="w-full flex justify-center">
            <Image
              src="/globe.png"
              alt="Globe"
              width={500}
              height={500}
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* RIGHT STATS */}
          <div className="w-full space-y-10 text-center lg:text-left">
            
            {/* STAT 1 */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5ed1c8]">
                +{conv}%
              </h2>
              <p className="mt-2 text-gray-500 text-base sm:text-lg">
                Conversion Rate Increased
              </p>
            </div>

            {/* STAT 2 */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D3E8B]">
                +{customers}K
              </h2>
              <p className="mt-2 text-gray-500 text-base sm:text-lg">
                Happy Customers
              </p>
            </div>

            {/* STAT 3 */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D3E8B]">
                +{invest}M
              </h2>
              <p className="mt-2 text-gray-500 text-base sm:text-lg">
                Amount of Investments
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}