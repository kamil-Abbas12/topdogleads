import Image from "next/image";
import Link from "next/link";
import { manrope } from "@/lib/fonts";

export const metadata = {
  title: "About Top Dog Leads | Pay Per Call Lead Generation Experts USA",
  description:
    "Top Dog Leads is a performance marketing agency specializing in pay per call lead generation, inbound call traffic, and high-converting leads for insurance and service businesses.",
  keywords: [
    "pay per call lead generation",
    "inbound call marketing",
    "buy phone leads",
    "insurance call leads",
    "performance marketing agency USA",
    "call generation services",
  ],
  openGraph: {
    title: "Top Dog Leads - Pay Per Call Experts",
    description:
      "Scale your business with high-intent inbound calls using Top Dog Leads.",
    url: "https://topdoglead.com/about",
    siteName: "Top Dog Leads",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      
      {/* ✅ STRUCTURED DATA FOR GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Top Dog Leads",
            url: "https://topdoglead.com",
            logo: "https://topdoglead.com/logo.png",
            description:
              "Top Dog Leads provides pay per call lead generation and inbound marketing services.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Casper",
              addressRegion: "Wyoming",
              addressCountry: "US",
            },
          }),
        }}
      />

      {/* 🔵 HERO SECTION */}
      <section className="w-full bg-[#1c2d56]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="text-white">
              <p className="text-xs sm:text-sm tracking-widest font-semibold uppercase opacity-90">
                How We Generate High-Intent Calls
              </p>

              <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
                About <span className="opacity-95">Top Dog Leads</span>
              </h1>

              <p
                className={`${manrope.className} mt-5 max-w-xl text-white/90 text-base sm:text-lg leading-relaxed`}
              >
                Top Dog Leads is a leading pay per call lead generation company in the United States,
                helping businesses generate high-quality inbound calls that convert into real customers.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative w-full">
              <div className="relative ml-auto w-full max-w-xl aspect-[16/9]">
                <Image
                  src="/about1.jpg"
                  width={600}
                  height={400}
                  alt="Pay per call lead generation services"
                  className="w-full h-auto object-contain lg:mt-5 lg:ml-5"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚪ BODY */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-xs tracking-widest font-semibold text-gray-900 uppercase">
                Who We Are
              </p>

              <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-gray-900">
                Pay Per Call Lead Generation Company in the USA
              </h2>

              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed lg:text-lg">
                <p className={manrope.className}>
                  <b>Top Dog Leads</b> is a MarTech company focused on delivering
                  high-intent inbound calls through performance marketing and
                  advanced audience targeting.
                </p>

                <p className={manrope.className}>
                  We help insurance companies, local service providers, and
                  businesses scale with qualified phone leads that convert into
                  real revenue.
                </p>

                <p className={manrope.className}>
                  Our campaigns are optimized across Google, Facebook, and
                  programmatic channels to ensure maximum ROI and consistent call volume.
                </p>
              </div>

              {/* INTERNAL LINKS */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/solution/pay-per-call"
                  className="inline-flex justify-center rounded-full bg-[#1c2d56] px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Pay Per Call Services
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-blue-600 px-6 py-3 text-blue-700 font-semibold hover:bg-[#1c2d56] hover:text-white transition"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* BLOG SEO BOOST */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  Learn More About Lead Generation
                </h3>

                <p className="mt-2 text-gray-700">
                  Explore our blog to discover strategies for scaling your business with pay per call marketing.
                </p>

                <Link
                  href="/blog"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Visit Blog →
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  What We Help You Do
                </h3>

                <ul className="mt-5 space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Scale Qualified Inbound Call Volume</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Real-Time Call Routing & Tracking</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Maximize Conversion Rates</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/blog"
                    className="inline-flex justify-center rounded-full bg-[#1c2d56] px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    View Blog
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex justify-center rounded-full border border-blue-600 px-6 py-3 text-blue-700 font-semibold hover:bg-[#1c2d56] hover:text-white transition"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}