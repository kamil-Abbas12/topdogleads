import Image from "next/image";
import AboutCallCenter from "../components/AboutCallCenter";

export const metadata = {
  title: "About | TopDogLeads",
  description: "Learn more about TopDogLeads and what we do.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO (blue header like your screenshot) */}
      <section className="w-full bg-sky-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-xs sm:text-sm tracking-widest font-semibold uppercase opacity-90">
                what we do
              </p>

              <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
                About <span className="opacity-95">TopDogLeads</span>
              </h1>

              <p className="mt-5 max-w-xl text-white/90 text-base sm:text-lg leading-relaxed">
                We help businesses generate more qualified inbound calls using
                performance marketing and intent-driven lead delivery.
              </p>
            </div>

            {/* right illustration */}
            <div className="relative w-full">
              <div className="relative ml-auto w-full max-w-xl aspect-[16/9]">
               <Image
    src="/about.jpg"
    width={600}
    height={400}
    alt="banner"
    className="w-full h-auto object-contain"
    priority
  />
              </div>
            </div>
          </div>
        </div>
//      </section>

      {/* BODY */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left text */}
            <div>
              <p className="text-xs tracking-widest font-semibold text-gray-400 uppercase">
                We Are
              </p>

              <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-gray-900">
                A Casper, Wyoming-based Company
              </h2>

              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  TopDogLeads is a marketing technology company that uses
                  programmatic tools and proven processes to help businesses
                  generate inbound calls from high-intent customers.
                </p>

                <p>
                  We utilize multiple marketing platforms to drive potential
                  customer calls. Our goal is simple: deliver conversations that
                  convert.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Try TopDogLeads for free <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right "card" area (you can replace with your own image/illustration) */}
            <div className="w-full">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  What we help you do
                </h3>

                <ul className="mt-5 space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Increase qualified inbound calls</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Route leads to your phone in real time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Improve conversion with better intent</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/blog"
                    className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    View Our Blog
                  </a>
                  <a
                    href="/"
                    className="inline-flex justify-center rounded-full border border-blue-600 px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition"
                  >
                    Back to Home
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
              <AboutCallCenter />

    </main>
  );
}
