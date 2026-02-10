import React from "react";

const Happy = () => {
  return (
    <section className="w-full h-full bg-white">
      <div className="flex flex-col px-6 sm:px-10 md:px-20 xl:px-50 py-12 sm:py-16 xl:py-20 justify-center items-center text-center space-y-4 sm:space-y-6 xl:space-y-8">
        
        {/* Big number */}
        <h2 className="text-4xl sm:text-5xl xl:text-6xl text-gray-900 font-bold uppercase">
          2000+
        </h2>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl xl:text-2xl text-center font-semibold">
          Happy local businesses
        </h1>

        {/* Paragraph */}
        <p className="text-center text-sm sm:text-base xl:text-lg text-gray-600 mt-6 sm:mt-8 xl:mt-10 max-w-3xl xl:max-w-4xl">
          We are a pay per call lead generation company.
          Spending too much on Google Ads, Social Media Ads and SEO? You are not alone.
          Join our growing customers and <b>pay when a customer calls.</b>
        </p>
      </div>
    </section>
  );
};

export default Happy;
