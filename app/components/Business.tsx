import React from "react";
import Image from "next/image";

const Business = () => {
  return (
    <section className="relative w-full bg-white pt-10 sm:pt-14 lg:pt-20">

      {/* TOP BORDER */}
      <div className="border border-gray-100 w-full"></div>

      <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <h2 className="text-gray-800 text-xl sm:text-2xl lg:text-3xl font-semibold text-center mt-10">
          Join 2,000+ businesses using TopDogLeads
        </h2>

        {/* LOGOS GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8 sm:gap-10 mt-12 items-center">
          <Image src="/client.png" alt="client" width={145} height={55} className="object-contain mx-auto" />
          <Image src="/jetski.png" alt="jetski" width={145} height={55} className="object-contain mx-auto" />
          <Image src="/moe.png" alt="moe" width={145} height={55} className="object-contain mx-auto" />
          <Image src="/plumb.png" alt="plumb" width={145} height={55} className="object-contain mx-auto" />
          <Image src="/exploria.png" alt="exploria" width={145} height={55} className="object-contain mx-auto" />
          <Image src="/jaspey.png" alt="jaspey" width={145} height={55} className="object-contain mx-auto" />
        </div>

        {/* BOTTOM BORDER */}
        <div className="border border-gray-300 w-full mt-12"></div>

      </div>
    </section>
  );
};

export default Business;
