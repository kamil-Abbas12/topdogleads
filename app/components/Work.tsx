"use client"
import React from "react";
import { Star } from "lucide-react";
import { manrope } from "@/lib/fonts";

const Work = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-12 md:py-16 lg:py-20 justify-center items-center text-center space-y-4">
        
        <h2 className="text-sm sm:text-base md:text-lg text-gray-900 font-bold uppercase tracking-wider">
          How It Works
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
Stop Paying for Empty Traffic—Start Paying for Real Results. 
        </h1>

        <p className={`${manrope.className} text-gray-900 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed mt-4`}>
          Top Dog Leads connects your business directly with genuine customers who are ready to call. Forget wasting money on clicks or impressions that go nowhere. You only invest when verified customer calls come through.
        </p>

      </div>
    </section>
  );
};

export default Work;
