import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Inbound Call Marketing Services USA | Top Dog Leads",
  description:
    "Drive high-intent inbound phone calls with targeted campaigns, landing page optimization, and call tracking from Top Dog Leads.",
};

const faqs = [
  {
    question: "What is inbound call marketing?",
    answer:
      "Inbound call marketing focuses on generating qualified phone calls from people actively searching for your services.",
  },
  {
    question: "Why do inbound calls convert well?",
    answer:
      "Phone calls often convert better because prospects can ask questions and speak to a business immediately.",
  },
];

export default function InboundCallPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Services
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Inbound Call Marketing Services That Turn Search Intent Into Real Conversations
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-8">
            We help businesses generate consistent inbound calls through targeted
            digital campaigns, optimized landing pages, and smarter call routing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#1c2d56] px-6 py-3 text-white font-semibold hover:bg-[#1c2d56]/90"
            >
              Get Started
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
            src="/inbound-call-marketing-hero.webp"
            alt="Inbound call marketing dashboard showing call volume, lead quality, and campaign performance"
            width={1200}
            height={900}
            priority
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-gray-600">
            Inbound call campaigns work best when ad targeting, landing pages, and call routing are aligned.
          </figcaption>
        </figure>
      </section>

      {/* BENEFITS */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "High-Intent Leads",
            text: "Reach people already searching for your service and ready to talk.",
          },
          {
            title: "Better Attribution",
            text: "Track which channels and campaigns drive the most valuable calls.",
          },
          {
            title: "Faster Sales Response",
            text: "Connect prospects to your team while interest is still high.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-gray-700 leading-7">{item.text}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS VISUAL */}
      <section className="mt-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">How Inbound Call Marketing Works</h2>
          <p className="mt-5 text-gray-700 leading-8">
            We build targeted campaigns that attract prospects, guide them to a
            conversion-focused landing page, and turn interest into real phone calls.
          </p>
          <ul className="mt-6 space-y-3 list-disc pl-5 text-gray-700">
            <li>Target high-intent keywords and audiences</li>
            <li>Align ad messaging with landing page content</li>
            <li>Use clear phone-first calls to action</li>
            <li>Track performance and optimize continuously</li>
          </ul>
        </div>

        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <Image
            src="/inbound-call-marketing-process.webp"
            alt="Diagram showing inbound call marketing process from search click to landing page to phone call and lead qualification"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-gray-600">
            Search intent becomes revenue when traffic, page experience, and call handling work together.
          </figcaption>
        </figure>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Inbound Calls vs Traditional Form Leads
        </h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-900">Lead Type</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Speed</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Intent</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Sales Efficiency</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700">Inbound Calls</td>
                <td className="px-6 py-4 text-gray-700">Immediate</td>
                <td className="px-6 py-4 text-gray-700">High</td>
                <td className="px-6 py-4 text-gray-700">Stronger</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700">Form Leads</td>
                <td className="px-6 py-4 text-gray-700">Delayed follow-up</td>
                <td className="px-6 py-4 text-gray-700">Mixed</td>
                <td className="px-6 py-4 text-gray-700">Lower if response is slow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">Related Services & Resources</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link href="/services/live-transfer-leads" className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Live Transfer Leads</h3>
            <p className="mt-2 text-gray-700">Connect with qualified prospects in real time.</p>
          </Link>
          <Link href="/services/insurances-leads" className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Insurance Leads</h3>
            <p className="mt-2 text-gray-700">Generate leads for competitive insurance categories.</p>
          </Link>
          <Link href="/blog" className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900">Read Our Blog</h3>
            <p className="mt-2 text-gray-700">Explore lead generation tips, call marketing, and conversion strategy.</p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-3 text-gray-700 leading-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
