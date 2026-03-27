import { manrope } from "@/lib/fonts";
import React from "react";

const Happy = () => {
  return (
    <section
      aria-label="Top Dog Leads — trusted by 5,000+ satisfied local businesses"
      className="w-full h-full bg-white"
    >
      <div className="flex flex-col px-6 sm:px-10 md:px-20 xl:px-50 py-12 sm:py-16 xl:py-20 justify-center items-center text-center space-y-4 sm:space-y-6 xl:space-y-8">

        {/* Stat — marked up as a data point, not a heading */}
        <p className="text-4xl sm:text-5xl xl:text-6xl text-blue-900 font-bold uppercase" aria-label="Over 5,000 satisfied local businesses">
          5000+
        </p>

        {/* Primary heading for this section */}
        <h2 className="text-xl sm:text-2xl xl:text-2xl text-center text-blue-800 font-semibold">
          Satisfied Local Businesses Trust Top Dog Leads
        </h2>

        {/* Descriptive paragraph — keyword-rich for crawlers */}
        <p className={`${manrope.className} text-gray-800 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed mt-4`}>
          Top Dog Leads: Pay‑Per‑Call Marketing That Delivers.<br />
          Tired of pouring money into Google Ads, social campaigns, or SEO strategies that don't bring results? You're not alone. With Top Dog Leads, you skip the guesswork and wasted spend — you only pay when a real customer picks up the phone and calls your business.
        </p>

      </div>
    </section>
  );
};

export default Happy;