import { manrope } from "@/lib/fonts";
import React from "react";

const Happy = () => {
  return (
    <section className="w-full h-full bg-white">
      <div className="flex flex-col px-6 sm:px-10 md:px-20 xl:px-50 py-12 sm:py-16 xl:py-20 justify-center items-center text-center space-y-4 sm:space-y-6 xl:space-y-8">
        
        {/* Big number */}
        <h2 className="text-4xl sm:text-5xl xl:text-6xl text-blue-900 font-bold uppercase">
          5000+
        </h2>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl xl:text-2xl text-center text-blue-800 font-semibold">
 Satisfied Local Businesses
        </h1>

        {/* Paragraph */}
        <p className={`${manrope.className} text-gray-800 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed mt-4`}>
     Top Dog Leads: Pay‑Per‑Call Marketing That Delivers  <br/>
Tired of pouring money into Google Ads, social campaigns, or SEO strategies that don’t bring results? You’re not alone. With Top Dog Leads, you skip the guesswork and wasted spend—you only pay when a real customer picks up the phone and calls your business.
        </p>
      </div>
    </section>
  );
};

export default Happy;
