import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Insurance Call Leads USA | Exclusive Inbound Insurance Leads",
  description:
    "Buy high-intent insurance call leads for auto, health, life, Medicare, final expense, and home insurance campaigns. Top Dog Leads helps businesses connect with ready-to-talk prospects through inbound call lead generation.",
  alternates: {
    canonical: "https://topdoglead.com/services/insurances-leads",
  },
  openGraph: {
    title:
      "Insurance Call Leads USA | Exclusive Inbound Insurance Leads",
    description:
      "Get exclusive inbound insurance call leads from consumers actively searching for coverage, quotes, and policy guidance.",
    url: "https://topdoglead.com/services/insurances-leads",
    siteName: "Top Dog Leads",
    type: "website",
  },
};

const faqs = [
  {
    question: "What are insurance call leads?",
    answer:
      "Insurance call leads are inbound phone calls from consumers who are actively searching for insurance information, quotes, enrollment help, or coverage options. Because the prospect is already willing to speak by phone, these leads often create faster sales conversations than lower-intent channels.",
  },
  {
    question: "Why do insurance call leads convert better than many web form leads?",
    answer:
      "Insurance call leads often convert better because the prospect is already engaged in real time. Instead of waiting for a callback or email response, the buyer can ask questions immediately, compare policy options, and move further into the quote or enrollment process while intent is still strong.",
  },
  {
    question: "What types of insurance can these leads support?",
    answer:
      "Insurance call lead campaigns can support auto insurance, health insurance, life insurance, Medicare insurance, final expense insurance, home insurance, and other verticals depending on your targeting strategy, compliance requirements, and business goals.",
  },
  {
    question: "Can insurance call leads be targeted by geography or product type?",
    answer:
      "Yes. Insurance lead campaigns can be segmented by service area, product type, age range, call timing, buyer intent, qualification rules, and other filters so your business receives calls aligned with your objectives.",
  },
  {
    question: "Are insurance call leads useful for agencies and call centers?",
    answer:
      "Yes. Insurance call leads can work well for independent agencies, internal sales teams, licensed agents, and call centers that need live conversations with prospects who are actively researching coverage.",
  },
  {
    question: "How do internal links help this page rank better?",
    answer:
      "Internal links help search engines understand topical relevance across your website. When this page links to related service pages, insurance industry pages, and blog articles, it strengthens crawl paths, distributes authority, and improves the user journey.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Insurance Call Leads",
  provider: {
    "@type": "Organization",
    name: "Top Dog Leads",
    url: "https://topdoglead.com",
  },
  areaServed: "US",
  description:
    "Inbound insurance call lead generation for agencies, marketers, and businesses seeking high-intent insurance buyers.",
  url: "https://topdoglead.com/services/insurances-leads",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://topdoglead.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://topdoglead.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Insurance Call Leads",
      item: "https://topdoglead.com/services/insurances-leads",
    },
  ],
};

const tocLinks = [
  { id: "what-are-insurances-leads", label: "What Are Insurance Call Leads" },
  { id: "why-they-convert", label: "Why Insurance Call Leads Convert" },
  { id: "insurance-verticals", label: "Insurance Verticals We Support" },
  { id: "how-it-works", label: "How Insurance Call Lead Generation Works" },
  { id: "seo-value", label: "How This Page Supports Organic Traffic" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

export default function InsuranceCallLeadsPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* BREADCRUMBS */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 text-sm text-gray-600"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Insurance Call Leads</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Insurance Lead Generation
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Insurance Call Leads That Help You Reach High-Intent Buyers Faster
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Top Dog Leads helps businesses generate high-quality insurance call
            leads through inbound campaigns built to attract consumers who are
            actively researching coverage, comparing policy options, and ready
            to speak with a live representative. For agencies, brokers, call
            centers, and performance-driven marketers, the value of a live
            conversation is simple: speed matters, intent matters, and real-time
            engagement often creates stronger opportunities than delayed form
            follow-up.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-8">
            Instead of spending time chasing cold prospects or responding to
            low-intent leads that may never answer the phone, your team can
            focus on conversations with consumers who are already motivated to
            learn more. That means more efficient outreach, faster
            qualification, better sales conversations, and a clearer path from
            inquiry to quote.
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
            Insurance call leads help your sales team connect with active
            shoppers while buying intent is still strong.
          </figcaption>
        </figure>
      </section>

      {/* TOC */}
      <section className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">On This Page</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {tocLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-xl bg-white border border-gray-200 px-4 py-3 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "High Buyer Intent",
            text: "Connect with consumers who are actively searching for insurance solutions and are ready to speak by phone.",
          },
          {
            title: "Faster Contact",
            text: "Real-time engagement helps reduce lead decay and improves the odds of a productive conversation.",
          },
          {
            title: "Better Qualification",
            text: "Campaigns can be aligned to product type, geography, and business rules so the calls fit your goals more closely.",
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

      {/* WHAT ARE INSURANCE CALL LEADS */}
      <section id="what-are-insurances-leads" className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          What Are Insurance Call Leads?
        </h2>
        <div className="mt-6 space-y-5 text-gray-700 leading-8">
          <p>
            Insurance call leads are inbound phone calls from consumers who are
            actively looking for insurance help, quote information, policy
            comparisons, plan details, or enrollment guidance. In practical
            terms, this means the prospect is not just browsing casually. They
            have already taken action and are willing to speak directly with a
            business that can help them evaluate their options.
          </p>
          <p>
            That difference matters. In many lead generation channels, a user
            fills out a form and may or may not respond later. With phone leads,
            the conversation begins immediately or nearly immediately. For many
            insurance businesses, that creates a major advantage because the
            buyer’s interest has not cooled off. Questions can be answered in
            real time, objections can be handled more efficiently, and the sales
            process can move forward without unnecessary delays.
          </p>
          <p>
            Insurance is also a category where trust, clarity, and timing play a
            major role in conversion. Buyers want to understand coverage limits,
            premiums, deductibles, eligibility, and next steps. A live call can
            address these concerns much faster than an email sequence or delayed
            callback. That is one reason many businesses invest in{" "}
            <Link
              href="/services/inbound-call-marketing"
              className="text-blue-600 font-semibold hover:underline"
            >
              inbound call marketing
            </Link>{" "}
            and{" "}
            <Link
              href="/services/live-transfer-leads"
              className="text-blue-600 font-semibold hover:underline"
            >
              live transfer leads
            </Link>{" "}
            as part of a broader customer acquisition strategy.
          </p>
        </div>
      </section>

      {/* TYPES OF LEADS */}
      <section id="insurance-verticals" className="mt-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Insurance Call Leads by Product Category
          </h2>
          <p className="mt-5 text-gray-700 leading-8">
            Insurance lead generation works best when campaigns are aligned with
            the specific policy type being promoted. Different insurance
            categories involve different audiences, sales cycles, compliance
            considerations, and consumer questions. A targeted strategy makes it
            easier to attract the right calls and route them to the right team.
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
              Reach drivers looking for quotes, lower premiums, carrier changes,
              or better coverage options.
            </p>
          </Link>

          <Link
            href="/industry/health-insurance"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Health Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Connect with consumers comparing plan options, networks, monthly
              costs, and enrollment support.
            </p>
          </Link>

          <Link
            href="/industry/life-insurance"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Life Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Engage buyers researching long-term protection, term life, whole
              life, and affordability.
            </p>
          </Link>

          <Link
            href="/industry/medicare-insurance"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Medicare Insurance Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Help Medicare prospects understand eligibility, benefits, and
              available plan options through live conversations.
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
              Reach consumers looking for affordable policies designed around
              burial costs and end-of-life planning.
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
              Connect with homeowners comparing coverage, premiums, property
              protection, and bundled policy options.
            </p>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mt-20 grid gap-10 lg:grid-cols-2 items-center">
        <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <Image
            src="/insurance-call-leads-process.webp"
            alt="Diagram showing insurance call lead flow from targeted campaign to inbound call to quote discussion"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-gray-600">
            Effective insurance call lead generation starts with targeting,
            messaging, intent alignment, and fast call handling.
          </figcaption>
        </figure>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            How Insurance Call Lead Generation Works
          </h2>
          <div className="mt-6 space-y-5 text-gray-700 leading-8">
            <p>
              Insurance call lead generation begins with the right audience. The
              goal is to attract consumers who are already in-market and open to
              speaking with a knowledgeable representative. When targeting,
              messaging, landing page experience, and call routing are aligned,
              the result is stronger lead quality and more efficient sales
              handling.
            </p>
            <p>
              A high-performing campaign typically focuses on intent. Instead of
              generating clicks that never turn into conversations, it aims to
              drive actions from people who want answers now. That is why call
              campaigns often perform well in insurance verticals where urgency,
              trust, and product complexity influence the buying decision.
            </p>
            <p>
              This approach can be especially valuable for businesses that rely
              on phone-based selling. If your team performs best when they can
              explain coverage, clarify plan details, and handle objections
              live, inbound calls create a much more direct path to
              qualification. Businesses that use related solutions such as{" "}
              <Link
                href="/services/live-transfer-leads"
                className="text-blue-600 font-semibold hover:underline"
              >
                live transfer leads
              </Link>{" "}
              and{" "}
              <Link
                href="/services/inbound-call-marketing"
                className="text-blue-600 font-semibold hover:underline"
              >
                inbound call marketing services
              </Link>{" "}
              often use this model to improve speed-to-contact and sales
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THEY CONVERT */}
      <section id="why-they-convert" className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Why Insurance Call Leads Often Convert Better
          </h2>
          <div className="mt-8 space-y-8">
            {[
              {
                title: "Immediate engagement",
                text: "A live conversation happens while buyer intent is still active, which reduces the risk of lead decay and missed follow-up.",
              },
              {
                title: "More productive sales conversations",
                text: "Agents can explain policy options, address objections, discuss pricing, and guide the consumer toward the next step in real time.",
              },
              {
                title: "Higher urgency signals",
                text: "Consumers willing to call or stay on the line often demonstrate stronger interest than users who simply submit a form and disappear.",
              },
              {
                title: "Better fit for complex products",
                text: "Insurance is not always a simple purchase. Calls make it easier to clarify benefits, terms, coverage differences, and eligibility details.",
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
            <li>Campaigns segmented by product type or geography</li>
            <li>Phone-driven lead acquisition in competitive insurance markets</li>
            <li>Stronger internal linking between service and industry pages</li>
            <li>More opportunities to support organic SEO growth over time</li>
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
                <td className="px-6 py-4 text-gray-700">
                  Strong for phone-based sales
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  Web Form Leads
                </td>
                <td className="px-6 py-4 text-gray-700">Mixed</td>
                <td className="px-6 py-4 text-gray-700">Delayed follow-up</td>
                <td className="px-6 py-4 text-gray-700">
                  Depends on response speed
                </td>
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

      {/* SEO VALUE */}
      <section id="seo-value" className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          How This Insurance Call Leads Page Supports Organic Traffic Growth
        </h2>
        <div className="mt-6 space-y-5 text-gray-700 leading-8">
          <p>
            A stronger insurance call leads page can rank for more than a single
            broad keyword. When the content is expanded properly, this page can
            support search intent around inbound insurance leads, exclusive
            insurance calls, live transfer insurance leads, phone-ready
            insurance prospects, and insurance lead generation for specific
            verticals such as auto, Medicare, life, health, and final expense.
          </p>
          <p>
            Search engines reward pages that are comprehensive, clearly
            structured, and connected to relevant supporting content. That is
            why internal linking matters so much here. This page should not sit
            alone. It should point users toward supporting service pages,
            vertical pages, and educational blog content that deepens topical
            authority across the site.
          </p>
          <p>
            For example, this page can strengthen your topical cluster by
            linking to{" "}
            <Link
              href="/services/inbound-call-marketing"
              className="text-blue-600 font-semibold hover:underline"
            >
              Inbound Call Marketing
            </Link>
            ,{" "}
            <Link
              href="/services/live-transfer-leads"
              className="text-blue-600 font-semibold hover:underline"
            >
              Live Transfer Leads
            </Link>
            ,{" "}
            <Link
              href="/industry/auto-insurance"
              className="text-blue-600 font-semibold hover:underline"
            >
              Auto Insurance Leads
            </Link>
            ,{" "}
            <Link
              href="/industry/medicare-insurance"
              className="text-blue-600 font-semibold hover:underline"
            >
              Medicare Insurance Leads
            </Link>
            ,{" "}
            <Link
              href="/industry/final-expense"
              className="text-blue-600 font-semibold hover:underline"
            >
              Final Expense Leads
            </Link>
            , and your{" "}
            <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
              lead generation blog
            </Link>
            .
          </p>
          <p>
            From an SEO perspective, that helps in several ways. It improves
            crawl depth, distributes internal authority, reinforces topical
            relevance, and gives users multiple logical next steps. It also
            increases the chance that one strong page can help lift the
            visibility of related pages across the broader insurance lead
            generation cluster.
          </p>
        </div>
      </section>

      {/* SUPPORTING CONTENT IDEAS */}
      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Related Service Pages to Link From Here
          </h2>
          <ul className="mt-5 space-y-3 text-gray-700 leading-7 list-disc pl-5">
            <li>
              <Link
                href="/services/inbound-call-marketing"
                className="text-blue-600 font-semibold hover:underline"
              >
                Inbound Call Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/services/live-transfer-leads"
                className="text-blue-600 font-semibold hover:underline"
              >
                Live Transfer Leads
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-blue-600 font-semibold hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 font-semibold hover:underline"
              >
                About Top Dog Leads
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Related Industry Pages to Strengthen Topical Authority
          </h2>
          <ul className="mt-5 space-y-3 text-gray-700 leading-7 list-disc pl-5">
            <li>
              <Link
                href="/industry/auto-insurance"
                className="text-blue-600 font-semibold hover:underline"
              >
                Auto Insurance Leads
              </Link>
            </li>
            <li>
              <Link
                href="/industry/medicare-insurance"
                className="text-blue-600 font-semibold hover:underline"
              >
                Medicare Insurance Leads
              </Link>
            </li>
            <li>
              <Link
                href="/industry/final-expense"
                className="text-blue-600 font-semibold hover:underline"
              >
                Final Expense Leads
              </Link>
            </li>
            <li>
              <Link
                href="/industry/home-insurance"
                className="text-blue-600 font-semibold hover:underline"
              >
                Home Insurance Leads
              </Link>
            </li>
          </ul>
        </div>
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
              Learn how targeted campaigns generate inbound phone-ready prospects.
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
              Explore lead quality, conversion strategy, call handling, and sales insights.
            </p>
          </Link>
        </div>
      </section>

      {/* NEXT PAGE NAVIGATION */}
      <section className="mt-20 rounded-3xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Continue Exploring Insurance Lead Solutions
        </h2>
        <p className="mt-4 text-gray-700 leading-8 max-w-3xl">
          Adding clear next-step navigation helps users discover more relevant
          content and gives search engines better crawl paths across your site.
          If someone lands on this page first, these related pages create a
          natural journey deeper into your insurance lead generation content.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/services/inbound-call-marketing"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              Next Page
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Inbound Call Marketing
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Learn how inbound call campaigns are structured to drive
              high-intent conversations across competitive service categories.
            </p>
          </Link>

          <Link
            href="/services/live-transfer-leads"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              Related Next Step
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Live Transfer Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              See how live transfer lead generation helps your team connect with
              consumers while they are still ready to talk.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="mt-20">
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
          actively researching coverage, comparing policies, and ready to speak
          with a real person. If your team wants stronger phone conversations
          and a faster path to qualification, our inbound insurance lead
          campaigns are built to support that goal.
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
