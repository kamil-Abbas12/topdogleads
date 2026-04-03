import React from "react";
import Link from "next/link";

const Hello = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center items-center text-center space-y-4">
        <h2 className="text-sm sm:text-base tracking-widest text-[#5ed1c8] uppercase">
          Ready to Grow?
        </h2>

        <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-blue-900 leading-tight">
          Start Generating More Qualified Calls
        </h3>

        <p className="text-gray-500 max-w-2xl text-sm sm:text-base mt-4 leading-7">
          If your business depends on phone conversations to close sales, Top Dog Leads
          can help you connect with high-intent customers through performance-driven
          pay per call campaigns.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 text-sm font-semibold text-white bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition rounded-md"
          >
            Request a Quote
          </Link>

          <a
            href="tel:+16784628013"
            className="px-8 py-3 text-sm font-semibold text-[#1c2d56] border border-[#1c2d56] hover:bg-[#1c2d56] hover:text-white transition rounded-md"
          >
            Call +1 678 462 8013
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
