"use client";
import Image from "next/image";

export default function AboutCallCenter() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20 xl:px-30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-500 font-semibold tracking-wide mb-4">
            ABOUT CALL CENTER
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            World-Class <br /> Contact Center
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our agents are fully bilingual, bi-cultural, well educated
            and have expertise in a wide array of business functions
            such as Debt Collection, Customer Service.
          </p>

          {/* PROGRESS BARS */}
          <div className="space-y-6 mb-10">
            
            {/* Bar 1 */}
            <div>
              <div className="flex justify-between text-sm mb-2 text-gray-700">
                <span>CUSTOMER SERVICE</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="bg-red-500 h-2 rounded w-[55%]" />
              </div>
            </div>

            {/* Bar 2 */}
            <div>
              <div className="flex justify-between text-sm mb-2 text-gray-700">
                <span> LEAD GENERATION</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="bg-indigo-500 h-2 rounded w-[92%]" />
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Learn More →
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">
          
          {/* Main Image */}
          <div className="relative w-[380px] h-[520px] rounded overflow-hidden shadow-xl">
            <Image
              src="/callc1.jpg"
              alt="agent"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Small Image */}
          <div className="absolute top-0 right-0 w-44 h-32 rounded overflow-hidden shadow-lg">
            <Image
              src="/callc2.jpg"
              alt="agent"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Small Image */}
          <div className="absolute bottom-10 right-0 w-44 h-32 rounded overflow-hidden shadow-lg">
            <Image
              src="/callc3.jpg"
              alt="agent"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
