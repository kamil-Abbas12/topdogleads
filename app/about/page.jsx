import Image from "next/image";
// import AboutCallCenter from "../components/AboutCallCenter";
import { manrope } from "@/lib/fonts";

export const metadata = {
  title: "About | Top Dog Leads",
  description: "Learn more about Top Dog Leads and what we do.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO (blue header like your screenshot) */}
      <section className="w-full bg-[#1c2d56]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-xs sm:text-sm tracking-widest font-semibold uppercase opacity-90">
How We Make It Happen             
              </p>

              <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
                About <span className="opacity-95">Top Dog Leads</span>
              </h1>

              <p className={' ${manrope.className} mt-5 max-w-xl text-white/90 text-base sm:text-lg leading-relaxed'}>
              We drive growth through intent-based acquisition and performance marketing, delivering a consistent stream of qualified inbound calls.

              </p>
            </div>

            {/* right illustration */}
            <div className="relative w-full">
              <div className="relative ml-auto w-full max-w-xl aspect-[16/9]">
               <Image
    src="/about1.jpg"
    width={600}
    height={400}
    alt="banner"
    className="w-full h-auto object-contain lg:mt-5 lg:ml-5"
    priority
  />
              </div>
            </div>
          </div>
        </div>
     </section>

      {/* BODY */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left text */}
            <div>
              <p className="text-xs tracking-widest font-semibold text-gray-900 uppercase">
                We Are
              </p>

              <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-gray-900">
                A Casper, Wyoming-based Company
              </h2>

              <div className="mt-6 space-y-5 text-blue-900 leading-relaxed lg:text-lg">
                <p className={`${manrope.className} text-gray-700`}>
                  <b className="mr-2 ">
 Top Dog Leads
                  </b>
                 is a MarTech firm leveraging programmatic precision and proven frameworks to drive high-intent inbound calls.
 </p>
<p className={`${manrope.className} text-gray-700`}>
  
We optimize across multiple digital channels to ensure one outcome: conversations that convert.
</p>
               
              </div>

              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Try Top Dog Leads for free <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right "card" area (you can replace with your own image/illustration) */}
            <div className="w-full">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  What We Help You Do
   </h3>

                <ul className="mt-5 space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Scale Qualified Inbound Volume
</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Instant Real-Time Routing
</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Maximize Conversion Potential</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/blog"
                    className="inline-flex justify-center rounded-full bg-[#1c2d56] hover:bg-[#1c2d56]/90 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    View Our Blog
                  </a>
                  <a
                    href="/"
                    className="inline-flex justify-center rounded-full border border-blue-600 px-6 py-3 
                     hover:bg-[#1c2d56] text-blue-700 font-semibold  hover:text-white transition"
                  >
                    Back to Home
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
              {/* <AboutCallCenter /> */}

    </main>
  );
}
