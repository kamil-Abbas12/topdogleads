import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Insurance Call Leads USA | Exclusive Inbound Insurance Leads | Top Dog Leads",
  description:
    "Get high-intent insurance call leads for auto, health, life, Medicare, and final expense campaigns. Top Dog Leads helps agencies and buyers connect with ready-to-talk prospects.",
};

const faqs = [
  {
    question: "What are insurance call leads?",
    answer:
      "Insurance call leads are inbound phone calls from consumers actively looking for insurance information, quotes, or plan options. These leads are valuable because they create immediate contact between the prospect and the sales team.",
  },
  {
    question: "Why do insurance call leads convert better than many web form leads?",
    answer:
      "Phone leads often convert better because the buyer is ready to talk now, ask questions in real time, and move further into the quote or enrollment process without waiting for follow-up.",
  },
  {
    question: "What types of insurance can these leads support?",
    answer:
      "Insurance call lead campaigns can be tailored for auto insurance, health insurance, life insurance, Medicare insurance, final expense, home insurance, and other policy categories depending on campaign goals.",
  },
  {
    question: "Can insurance call leads be targeted by geography or product type?",
    answer:
      "Yes. Campaigns can be segmented by location, policy type, buyer profile, call timing, and other qualification criteria to better match your business needs.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Insurance Call Leads",
  provider: {
    "@type": "Organization",
    name: "Top Dog Leads",
    url: "https://topdogleads.com",
  },
  areaServed: "US",
  description:
    "Inbound insurance call lead generation services for agencies and businesses seeking high-intent callers.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function InsurancesLeadsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Insurance Lead Generation
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Insurance Call Leads That Connect You With High-Intent Buyers
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Top Dog Leads helps businesses generate high-quality insurance call
            leads through inbound campaigns designed to attract people who are
            actively searching for coverage, comparing options, and ready to
            speak with an agent.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-8">
            Instead of chasing cold prospects or waiting on low-intent form
            fills, your team can connect with real consumers at the moment they
            are most engaged. That creates a faster path to qualification,
            stronger conversations, and better sales opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#1c2d56] px-6 py-3 text-white font-semibold hover:bg-[#1c2d56]/90"
            >
              Buy Insurance Leads
            </Link>

            <Link
              href="/services/live-transfer-leads"
              className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-gray-900 font-semibold hover:border-blue-600 hover:text-blue-600"
            >
              View Live Transfer Leads
            </Link>
          </div>
        </div>

        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <Image
            src="/insurance-call-leads-hero.webp"
            alt="Insurance call leads service illustration showing a licensed agent speaking with a high-intent customer"
            width={1200}
            height={900}
            priority
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-gray-600">
            High-intent insurance calls help agencies connect with prospects
            while interest is still active.
          </figcaption>
        </figure>
      </section>

      {/* QUICK BENEFITS */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "High Buyer Intent",
            text: "Reach consumers who are actively looking for insurance solutions and ready to talk by phone.",
          },
          {
            title: "Faster Contact",
            text: "Immediate phone engagement reduces lead decay and helps your team respond while intent is still strong.",
          },
          {
            title: "Better Qualification",
            text: "Campaigns can be aligned with product type, location, and business rules to improve lead relevance.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-gray-700 leading-7">{item.text}</p>
          </div>
        ))}
      </section>

      {/* TYPES OF LEADS */}
      <section className="mt-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Types of Insurance Call Leads We Support
          </h2>
          <p className="mt-5 text-gray-700 leading-8">
            Insurance lead generation is not one-size-fits-all. Different policy
            categories require different messaging, audience targeting, and
            conversion paths. Our campaigns can support multiple insurance
            verticals depending on your goals and market focus.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/industry/auto-insurance"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Auto Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Connect with drivers searching for quotes, coverage changes, and
              policy comparisons.
            </p>
          </Link>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Health Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Reach consumers evaluating health plan options and looking for
              direct support by phone.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Life Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Generate conversations with buyers researching protection,
              affordability, and long-term coverage options.
            </p>
          </div>

          <Link
            href="/industry/medicare-insurance"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Medicare Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Connect with Medicare prospects seeking plan guidance and coverage
              information.
            </p>
          </Link>

          <Link
            href="/industry/final-expense"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Final Expense Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Reach prospects looking for affordable coverage designed around
              final expense needs.
            </p>
          </Link>

          <Link
            href="/industry/home-insurance"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Home Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Help homeowners compare policy options, premiums, and coverage
              details with a live agent.
            </p>
          </Link>
        </div>
      </section>

      {/* IMAGE + EXPLANATION */}
      <section className="mt-20 grid gap-10 lg:grid-cols-2 items-center">
        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <Image
            src="/insurance-call-leads-process.webp"
            alt="Diagram showing insurance call lead flow from targeted campaign to inbound call to quote discussion"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-gray-600">
            Insurance lead campaigns work best when audience targeting, call
            intent, and fast response are aligned.
          </figcaption>
        </figure>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            How Insurance Call Leads Work
          </h2>
          <div className="mt-6 space-y-5 text-gray-700 leading-8">
            <p>
              Insurance call lead generation focuses on attracting prospects who
              are already searching for policy options or advice. When campaign
              targeting, messaging, and landing page experience are aligned, the
              result is a stronger volume of phone-ready prospects.
            </p>
            <p>
              Instead of relying entirely on delayed follow-up, inbound call
              campaigns create immediate opportunities for real conversations.
              That is especially important in insurance, where speed, trust, and
              clear answers can influence conversion decisions.
            </p>
            <p>
              This model is especially useful for agencies and buyers who want
              leads that are easier to engage, quicker to qualify, and better
              suited for phone-based sales processes.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THEY MATTER */}
      <section className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Why Insurance Call Leads Matter
          </h2>
          <div className="mt-8 space-y-8">
            {[
              {
                title: "Immediate engagement",
                text: "Prospects can speak with your team while their interest is still high, which helps reduce lead decay.",
              },
              {
                title: "Better sales conversations",
                text: "Phone calls allow agents to answer objections, explain options, and move the buyer toward the next step faster.",
              },
              {
                title: "Stronger conversion opportunities",
                text: "Insurance leads who are willing to talk by phone often show more urgency than passive form traffic.",
              },
              {
                title: "Smarter campaign targeting",
                text: "Lead generation efforts can be adjusted around insurance type, market, and call-handling preferences.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-blue-50 p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900">
            Best Fit for Insurance Businesses That Need
          </h2>
          <ul className="mt-6 space-y-4 text-gray-700 leading-7 list-disc pl-5">
            <li>High-intent inbound conversations instead of cold prospecting</li>
            <li>Faster contact with quote-ready consumers</li>
            <li>Campaigns tailored by product type or service area</li>
            <li>Phone-driven lead acquisition for competitive insurance markets</li>
            <li>Internal linking support across service and industry pages</li>
          </ul>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Insurance Call Leads vs Traditional Lead Sources
        </h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                  Lead Source
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                  Buyer Intent
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                  Speed to Contact
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">
                  Sales Efficiency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  Insurance Call Leads
                </td>
                <td className="px-6 py-4 text-gray-700">High</td>
                <td className="px-6 py-4 text-gray-700">Immediate</td>
                <td className="px-6 py-4 text-gray-700">Strong for phone-based sales</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  Web Form Leads
                </td>
                <td className="px-6 py-4 text-gray-700">Mixed</td>
                <td className="px-6 py-4 text-gray-700">Delayed follow-up</td>
                <td className="px-6 py-4 text-gray-700">Depends on response speed</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  Cold Lists or Broad Outreach
                </td>
                <td className="px-6 py-4 text-gray-700">Lower</td>
                <td className="px-6 py-4 text-gray-700">Manual</td>
                <td className="px-6 py-4 text-gray-700">Often less efficient</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ORGANIC SEO / SUPPORTING CONTENT */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Built to Support Organic Traffic Growth
        </h2>
        <p className="mt-5 text-gray-700 leading-8">
          A stronger insurance call leads page can help your website compete for
          more than one keyword. Instead of targeting only a broad phrase, this
          page can also support search intent around lead quality, policy
          categories, live call delivery, and insurance-specific buyer behavior.
        </p>
        <p className="mt-4 text-gray-700 leading-8">
          It also creates useful internal links to related pages like{" "}
          <Link href="/services/inbound-call-marketing" className="text-blue-600 font-semibold">
            Inbound Call Marketing
          </Link>
          ,{" "}
          <Link href="/services/live-transfer-leads" className="text-blue-600 font-semibold">
            Live Transfer Leads
          </Link>
          ,{" "}
          <Link href="/industry/auto-insurance" className="text-blue-600 font-semibold">
            Auto Insurance Leads
          </Link>
          , and{" "}
          <Link href="/industry/medicare-insurance" className="text-blue-600 font-semibold">
            Medicare Insurance Leads
          </Link>
          .
        </p>
      </section>

      {/* RELATED LINKS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Related Services and Industry Pages
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link
            href="/services/inbound-call-marketing"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Inbound Call Marketing
            </h3>
            <p className="mt-2 text-gray-700">
              Learn how we generate phone-ready prospects through targeted campaigns.
            </p>
          </Link>

          <Link
            href="/services/live-transfer-leads"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Live Transfer Leads
            </h3>
            <p className="mt-2 text-gray-700">
              Connect with qualified prospects in real time through direct transfers.
            </p>
          </Link>

          <Link
            href="/blog"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Lead Generation Blog
            </h3>
            <p className="mt-2 text-gray-700">
              Explore insights on conversion, inbound calls, and insurance lead strategy.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-700 leading-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-3xl bg-[#1c2d56] px-8 py-10 text-white">
        <h2 className="text-3xl font-bold">
          Ready to Buy Insurance Call Leads?
        </h2>
        <p className="mt-4 max-w-3xl text-blue-100 leading-8">
          Top Dog Leads helps businesses connect with insurance shoppers who are
          actively looking for coverage and ready to speak with a real person.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-[#1c2d56] font-semibold hover:bg-gray-100"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10"
          >
            Learn More About Top Dog Leads
          </Link>
        </div>
      </section>
    </main>
  );
}
