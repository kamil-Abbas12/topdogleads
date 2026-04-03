import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import WhyChooseUs from "@/app/components/WhyChooseUs";
import StatsSection from "@/app/components/StatsSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import Hello from "@/app/components/Hello";

const faqs = [
  {
    question: "What is pay per call lead generation?",
    answer:
      "Pay per call lead generation is a performance marketing model where businesses pay for qualified inbound phone calls from real prospects who are actively searching for their services.",
  },
  {
    question: "How is pay per call different from PPC?",
    answer:
      "With PPC, you pay for clicks whether they convert or not. With pay per call, you pay for high-intent customer calls, which often means better lead quality and stronger ROI for service businesses.",
  },
  {
    question: "Which businesses benefit most from pay per call marketing?",
    answer:
      "Pay per call works especially well for insurance, roofing, solar, pest control, legal, home services, and other local businesses where phone calls often lead directly to appointments or sales.",
  },
  {
    question: "Do exclusive inbound calls convert better?",
    answer:
      "Exclusive inbound calls often perform better because your team speaks with the prospect directly instead of competing with multiple businesses for the same lead.",
  },
  {
    question: "Can I track my pay per call campaign performance?",
    answer:
      "Yes. Call tracking, routing, lead qualification, and campaign reporting help businesses understand which service areas and campaigns produce the best results.",
  },
];

export const metadata: Metadata = {
  title: "Pay Per Call Lead Generation Services USA | Top Dog Leads",
  description:
    "Top Dog Leads delivers pay per call lead generation services for local businesses across the USA. Get exclusive inbound calls, high-intent leads, and better ROI from qualified customer conversations.",
  keywords: [
    "pay per call lead generation",
    "pay per call marketing",
    "pay per call services",
    "exclusive pay per call leads",
    "inbound call leads",
    "qualified phone leads",
    "call tracking services",
    "real-time call leads",
    "pay per call agency",
    "pay per call lead generation services USA",
    "pay per call for roofing",
    "pay per call for pest control",
    "pay per call for insurance",
    "pay per call vs PPC",
    "exclusive inbound calls",
  ],
  alternates: {
    canonical: "https://topdoglead.com/solution/pay-per-call",
  },
  openGraph: {
    title: "Pay Per Call Lead Generation Services USA | Top Dog Leads",
    description:
      "Generate more revenue with exclusive inbound calls from real customers. Only pay for qualified conversations.",
    url: "https://topdoglead.com/solution/pay-per-call",
    siteName: "Top Dog Leads",
    images: [
      {
        url: "https://topdoglead.com/about1.jpg",
        width: 1200,
        height: 800,
        alt: "Top Dog Leads pay per call lead generation services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Per Call Lead Generation Services USA | Top Dog Leads",
    description:
      "Get exclusive inbound calls from high-intent customers with Top Dog Leads.",
    images: ["https://topdoglead.com/about1.jpg"],
  },
};

const industries = [
  { label: "Auto Insurance Leads", href: "/industry/auto-insurance" },
  { label: "Final Expense Leads", href: "/industry/final-expense" },
  { label: "Home Insurance Leads", href: "/industry/home-insurance" },
  { label: "Solar Leads", href: "/industry/solar" },
  { label: "Medicare Insurance Leads", href: "/industry/medicare-insurance" },
  { label: "Motor Vehicle Accident Leads", href: "/industry/motor-vehicle-accident" },
  { label: "Pest Control Leads", href: "/industry/pest-control" },
  { label: "Roofing Leads", href: "/industry/roofing" },
];

const blogLinks = [
  {
    title: "Auto Insurance Leads: Finding Peace of Mind in Coverage",
    href: "/blog/auto-insurance-leads-peace-of-mind",
  },
  {
    title: "Lead Generation Myths Busted",
    href: "/blog/lead-generation-myths-busted",
  },
  {
    title: "Why High-Intent Leads Are the Secret to Scalable Growth",
    href: "/blog/high-intent-leads-scalable-growth",
  },
];

export default function PayPerCallPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://topdoglead.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pay Per Call Lead Generation",
        item: "https://topdoglead.com/solution/pay-per-call",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pay Per Call Lead Generation Services",
    provider: {
      "@type": "Organization",
      name: "Top Dog Leads",
      url: "https://topdoglead.com/",
      telephone: "+1-678-462-8013",
    },
    areaServed: "United States",
    serviceType: "Pay Per Call Lead Generation",
    description:
      "Top Dog Leads provides pay per call lead generation, exclusive inbound calls, and performance-focused customer acquisition for local businesses.",
    url: "https://topdoglead.com/solution/pay-per-call",
  };

  return (
    <main className="w-full bg-white text-gray-900">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-12 sm:py-16 xl:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="w-full text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-blue-900">
              Top Dog Leads
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-[#243678] uppercase">
              Pay Per Call
              <span className="block text-[#58d2cb]">Lead Generation</span>
              <span className="block">Services</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Top Dog Leads helps local businesses generate exclusive inbound calls
              from high-intent customers who are ready to talk, book, and buy.
              Instead of wasting budget on low-quality clicks, you pay for qualified
              phone conversations that move your business forward.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-medium text-[#1c2d56]">
                Exclusive Inbound Calls
              </span>
              <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-medium text-[#1c2d56]">
                High-Intent Leads
              </span>
              <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-medium text-[#1c2d56]">
                Real-Time Delivery
              </span>
              <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-medium text-[#1c2d56]">
                USA Service Coverage
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-[#1c2d56] hover:bg-[#1c2d56]/90 rounded-md transition"
              >
                Get Started
              </Link>

              <a
                href="tel:+16784628013"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-[#1c2d56] border border-[#1c2d56] rounded-md hover:bg-[#1c2d56] hover:text-white transition"
              >
                Call +1 678 462 8013
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/payper.jpg"
              alt="Pay per call lead generation services for local businesses in the USA"
              width={1600}
              height={1200}
              priority
              className="object-cover w-full max-w-[700px] rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS PAY PER CALL */}
      <section className="bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto xl:w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-16 grid lg:grid-cols-2 gap-12 justify-between items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243678]">
              What Is Pay Per Call Marketing?
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600">
              Pay per call marketing is a performance-based lead generation model
              where businesses pay for qualified inbound phone calls instead of
              paying for impressions or clicks. It works especially well for
              local service businesses where prospects prefer to call before
              scheduling, buying, or requesting a quote.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600">
              If your customers usually call before making a decision, pay per call
              can outperform traditional PPC by driving warmer, more sales-ready leads.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/custom.webp"
              alt="Business owner receiving qualified inbound phone calls from real prospects"
              width={1200}
              height={900}
              className="object-cover w-full max-w-[650px] rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243678]">
              Why Businesses Choose Top Dog Leads
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600">
              We help service businesses connect with high-intent customers through
              performance-based campaigns built around real conversations, not vanity metrics.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Only Pay for Qualified Calls",
                text: "Stop wasting budget on empty traffic and focus on customer conversations that matter.",
              },
              {
                title: "Higher Buying Intent",
                text: "Phone leads often show stronger intent than generic website visitors or low-quality form fills.",
              },
              {
                title: "Real-Time Call Delivery",
                text: "Connect with prospects quickly while they are actively looking for your services.",
              },
              {
                title: "Built for Local Services",
                text: "Ideal for industries where calls drive appointments, estimates, policy sales, and booked jobs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#243678]">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#1c2d56] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center order-2 lg:order-1">
            <Image
              src="/fuel.jpeg"
              alt="Pay per call campaign optimization and qualified lead generation strategy"
              width={1200}
              height={900}
              className="object-cover w-full max-w-[650px] rounded-2xl shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              How Our Pay Per Call Process Works
            </h2>

            <div className="mt-8 space-y-6">
              {[
                "We build and optimize campaigns around high-intent search behavior and service-driven keywords.",
                "Prospects call after finding your offer, landing page, or business information online.",
                "Calls are routed in real time so your team can speak with customers while intent is high.",
                "You focus on converting quality calls into booked jobs, appointments, or closed deals.",
              ].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-white text-[#1c2d56] flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-white/90 leading-7">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PPC COMPARISON */}
      <section className="bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243678] text-center">
            Pay Per Call vs PPC
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-[#243678]">Traditional PPC</h3>
              <ul className="mt-5 space-y-3 text-gray-600 leading-7">
                <li>• You pay for clicks even if they never convert</li>
                <li>• Some visitors are only researching, not ready to buy</li>
                <li>• More wasted spend when landing pages or intent are weak</li>
                <li>• Lead quality can vary heavily by keyword and traffic source</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#1c2d56] p-8 text-white">
              <h3 className="text-2xl font-semibold">Pay Per Call Marketing</h3>
              <ul className="mt-5 space-y-3 text-white/90 leading-7">
                <li>• You pay for qualified phone conversations</li>
                <li>• Prospects are often ready to ask questions or book now</li>
                <li>• Great fit for local service and appointment-driven businesses</li>
                <li>• Stronger path to measurable ROI for high-value calls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243678]">
              Industries We Serve
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600">
              Top Dog Leads supports industries where phone calls drive direct revenue,
              appointments, consultations, and quote requests.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-500 hover:text-blue-600 transition"
              >
                <span className="font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING CONTENT */}
      <section className="bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243678]">
              Learn More About High-Intent Lead Generation
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600">
              Internal links help strengthen topical authority and support organic rankings
              across your service and industry pages.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {blogLinks.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#243678]">{post.title}</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Read more insights from Top Dog Leads →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <StatsSection />
      <TestimonialSection />
      <Hello />

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#243678] text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-[#243678]">{item.question}</h3>
                <p className="mt-3 text-gray-600 leading-7">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
