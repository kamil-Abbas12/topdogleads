import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Inbound Call Marketing Services USA | High-Intent Call Campaigns | Top Dog Leads",
  description:
    "Drive high-intent inbound phone calls through targeted campaigns, landing page optimization, call tracking, and conversion-focused strategy from Top Dog Leads.",
  alternates: {
    canonical: "https://topdoglead.com/services/inbound-call-marketing",
  },
  openGraph: {
    title: "Inbound Call Marketing Services USA | High-Intent Call Campaigns | Top Dog Leads",
    description:
      "Generate qualified inbound phone calls with better targeting, landing pages, call routing, and campaign optimization.",
    url: "https://topdoglead.com/services/inbound-call-marketing",
    siteName: "Top Dog Leads",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is inbound call marketing?",
    answer:
      "Inbound call marketing is a lead generation strategy focused on driving phone calls from people who are actively searching for a product or service. It combines traffic acquisition, landing page optimization, phone-first conversion design, and call tracking to turn search intent into real conversations.",
  },
  {
    question: "Why do inbound calls often convert better than form leads?",
    answer:
      "Inbound calls often convert better because the prospect is ready to engage immediately. Instead of waiting for a follow-up email or callback, the business can answer questions, address objections, and guide the next step in real time while intent is still high.",
  },
  {
    question: "Who benefits from inbound call marketing?",
    answer:
      "Inbound call marketing can work well for businesses in insurance, legal, home services, healthcare, finance, and other industries where live conversations help move prospects toward a decision.",
  },
  {
    question: "How does call tracking improve campaign performance?",
    answer:
      "Call tracking helps businesses measure which campaigns, keywords, landing pages, and traffic sources generate the best calls. That data supports better optimization, stronger attribution, and more efficient budget allocation.",
  },
  {
    question: "Can inbound call marketing support multiple service lines?",
    answer:
      "Yes. Campaigns can be segmented by service category, geography, call qualification rules, buyer intent, and routing logic so different teams or industries can receive the right calls.",
  },
  {
    question: "How do internal links help this page rank better?",
    answer:
      "Internal links help search engines understand how this page relates to your broader service and industry pages. They also improve crawl paths, distribute authority, and encourage users to visit related content across the site.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inbound Call Marketing Services",
  provider: {
    "@type": "Organization",
    name: "Top Dog Leads",
    url: "https://topdoglead.com",
  },
  areaServed: "US",
  url: "https://topdoglead.com/services/inbound-call-marketing",
  description:
    "Inbound call marketing services that help businesses generate qualified phone calls through targeted digital campaigns, landing page optimization, call routing, and tracking.",
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
      name: "Inbound Call Marketing",
      item: "https://topdoglead.com/services/inbound-call-marketing",
    },
  ],
};

const tocLinks = [
  { id: "what-is-inbound-call-marketing", label: "What Is Inbound Call Marketing" },
  { id: "how-it-works", label: "How It Works" },
  { id: "why-inbound-calls-convert", label: "Why Inbound Calls Convert Better" },
  { id: "campaign-components", label: "Core Campaign Components" },
  { id: "best-fit-industries", label: "Best Fit Industries" },
  { id: "seo-value", label: "How This Page Supports Organic Traffic" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

export default function InboundCallPage() {
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
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
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
          <li className="text-gray-900 font-medium">Inbound Call Marketing</li>
        </ol>
      </nav>

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
            Top Dog Leads helps businesses generate qualified inbound phone calls through
            targeted digital campaigns, conversion-focused landing pages, smarter call
            routing, and performance tracking. Instead of relying only on passive form
            submissions, inbound call marketing creates direct conversations with prospects
            who are actively searching for help and ready to speak with a real person.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-8">
            This matters because speed and intent are closely tied to conversion.
            When someone is ready to call, your business has an opportunity to answer
            questions, handle objections, explain value, and move the buyer toward the
            next step immediately. That can lead to better sales efficiency, stronger
            lead quality, and a more measurable path from traffic to revenue.
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
            Inbound call campaigns perform best when audience targeting, landing page
            experience, call routing, and measurement are aligned.
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

      {/* BENEFITS */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "High-Intent Leads",
            text: "Reach people who are already searching for your service and are more prepared to speak now.",
          },
          {
            title: "Better Attribution",
            text: "Track which channels, keywords, and campaigns generate the most valuable phone calls.",
          },
          {
            title: "Faster Sales Response",
            text: "Connect prospects to your team while interest is still active and buying intent is strongest.",
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

      {/* WHAT IS INBOUND CALL MARKETING */}
      <section id="what-is-inbound-call-marketing" className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          What Is Inbound Call Marketing?
        </h2>

        <div className="mt-6 space-y-5 text-gray-700 leading-8">
          <p>
            Inbound call marketing is a customer acquisition strategy designed to
            generate phone calls from people who are actively looking for a product
            or service. Instead of focusing only on clicks, impressions, or web form
            fills, this model prioritizes conversations. The goal is to connect your
            business with prospects at the exact moment they are most engaged and
            most likely to ask questions, compare options, and move toward a decision.
          </p>

          <p>
            In many industries, that direct conversation has real business value.
            Some services are complex. Some require explanation. Some buyers simply
            want to talk to a real person before they commit. Inbound call marketing
            is especially effective in those environments because it reduces friction
            between intent and action. Rather than making the user wait for a reply,
            the business can respond in real time.
          </p>

          <p>
            This strategy often includes several connected parts: traffic generation,
            phone-focused landing pages, clear calls to action, call tracking, routing,
            and ongoing optimization. Businesses that already invest in{" "}
            <Link
              href="/services/live-transfer-leads"
              className="text-blue-600 font-semibold hover:underline"
            >
              live transfer leads
            </Link>{" "}
            or want stronger performance from pages like{" "}
            <Link
              href="/services/insurances-leads"
              className="text-blue-600 font-semibold hover:underline"
            >
              insurance call leads
            </Link>{" "}
            can use inbound call marketing as a foundation for better lead quality
            and better conversion efficiency.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS VISUAL */}
      <section id="how-it-works" className="mt-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            How Inbound Call Marketing Works
          </h2>

          <p className="mt-5 text-gray-700 leading-8">
            A successful inbound call campaign usually starts by identifying the
            right audience and the right intent signals. The objective is not just
            to drive traffic. It is to attract visitors who are more likely to call,
            ask for help, and move deeper into the buying process. From there, the
            user journey must stay aligned from click to conversation.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            That means ad messaging, page content, offer positioning, and phone
            calls to action must all reinforce the same promise. When that alignment
            is strong, more visitors become callers. When call routing and handling
            are also strong, more callers become qualified opportunities.
          </p>

          <ul className="mt-6 space-y-3 list-disc pl-5 text-gray-700 leading-7">
            <li>Target high-intent keywords and service-driven audiences</li>
            <li>Align ad messaging with landing page copy and call intent</li>
            <li>Use clear phone-first calls to action throughout the page</li>
            <li>Reduce friction between search, click, and live conversation</li>
            <li>Track call performance and optimize campaigns over time</li>
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
            Search intent becomes revenue when traffic quality, landing page design,
            and call handling work together.
          </figcaption>
        </figure>
      </section>

      {/* WHY CALLS CONVERT */}
      <section id="why-inbound-calls-convert" className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Why Inbound Calls Often Convert Better Than Traditional Form Leads
          </h2>

          <div className="mt-8 space-y-8">
            {[
              {
                title: "Real-time engagement",
                text: "Calls create immediate contact between the prospect and your business, reducing the delay that often hurts form-based lead quality.",
              },
              {
                title: "Higher urgency",
                text: "Someone willing to call usually shows stronger intent than someone passively browsing or submitting a form without answering follow-up.",
              },
              {
                title: "Better objection handling",
                text: "Your team can explain services, answer questions, and respond to concerns during the same interaction instead of relying on email back-and-forth.",
              },
              {
                title: "Stronger qualification",
                text: "Phone conversations make it easier to assess timing, budget, need, location, and service fit before the lead goes further into the funnel.",
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
            Best Fit for Businesses That Need
          </h2>
          <ul className="mt-6 space-y-4 text-gray-700 leading-7 list-disc pl-5">
            <li>More qualified phone calls instead of passive web inquiries</li>
            <li>Faster lead response while customer intent is still active</li>
            <li>Better visibility into which campaigns drive actual calls</li>
            <li>Stronger alignment between marketing and sales performance</li>
            <li>Lead generation systems built around real conversations</li>
            <li>Better internal linking across services, industries, and blog content</li>
          </ul>
        </div>
      </section>

      {/* CAMPAIGN COMPONENTS */}
      <section id="campaign-components" className="mt-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Core Components of a Strong Inbound Call Marketing Campaign
          </h2>
          <p className="mt-5 text-gray-700 leading-8">
            Inbound call marketing is most effective when each part of the campaign
            supports the same goal: generating better conversations with better-fit
            prospects. That requires more than just traffic. It requires consistent
            messaging, strong user experience, and reliable attribution.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Audience Targeting",
              text: "Campaigns work better when they are built around user intent, service area, and the real needs of the buyer.",
            },
            {
              title: "Landing Page Alignment",
              text: "A conversion-focused page should match the promise of the ad and make the next action obvious.",
            },
            {
              title: "Phone-First CTA Design",
              text: "Calls should feel like the natural next step, not a buried option that requires extra effort to find.",
            },
            {
              title: "Call Tracking",
              text: "Tracking helps identify which traffic sources, campaigns, and keywords are producing the best opportunities.",
            },
            {
              title: "Routing Logic",
              text: "Qualified calls should reach the right team, location, or service line without unnecessary delays.",
            },
            {
              title: "Ongoing Optimization",
              text: "Testing headlines, calls to action, traffic quality, and landing page structure improves campaign performance over time.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-700 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Inbound Calls vs Traditional Form Leads
        </h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
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
                <td className="px-6 py-4 text-gray-700 font-medium">Inbound Calls</td>
                <td className="px-6 py-4 text-gray-700">Immediate</td>
                <td className="px-6 py-4 text-gray-700">High</td>
                <td className="px-6 py-4 text-gray-700">Stronger for live conversations</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700 font-medium">Form Leads</td>
                <td className="px-6 py-4 text-gray-700">Delayed follow-up</td>
                <td className="px-6 py-4 text-gray-700">Mixed</td>
                <td className="px-6 py-4 text-gray-700">Lower if response is slow</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-700 font-medium">Cold Outreach</td>
                <td className="px-6 py-4 text-gray-700">Manual</td>
                <td className="px-6 py-4 text-gray-700">Lower</td>
                <td className="px-6 py-4 text-gray-700">Often less efficient</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="best-fit-industries" className="mt-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Industries That Benefit From Inbound Call Marketing
          </h2>
          <p className="mt-5 text-gray-700 leading-8">
            Inbound call marketing is especially useful in industries where the
            buyer needs information, reassurance, or live help before making a
            decision. If a phone conversation helps move the sale forward, the
            inbound call model can create a better conversion path than simple
            form capture alone.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/services/insurances-leads"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Insurance
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Insurance buyers often want quotes, plan guidance, and real-time
              answers before moving forward.
            </p>
          </Link>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Legal Services
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Legal prospects usually need immediate consultation and want to
              explain their situation directly to a professional.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Home Services
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Buyers looking for urgent repairs or service estimates often prefer
              a call over a delayed digital response.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Healthcare
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Healthcare inquiries often involve scheduling, benefits, treatment
              information, and fast human assistance.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Financial Services
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Financial buyers frequently need trust, explanation, and direct
              support before they take the next step.
            </p>
          </div>

          <Link
            href="/blog"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Lead Generation Education
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Support your service pages with blog content that answers questions
              and expands topical authority.
            </p>
          </Link>
        </div>
      </section>

      {/* SEO VALUE */}
      <section id="seo-value" className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          How This Page Helps Support Organic Traffic Growth
        </h2>

        <div className="mt-6 space-y-5 text-gray-700 leading-8">
          <p>
            A stronger inbound call marketing page can support search visibility
            beyond one exact-match phrase. When the content is built with enough
            topical depth, it can also rank for related intent around inbound call
            generation, call-based lead generation, phone lead marketing, call
            tracking strategy, high-intent lead acquisition, and landing page
            optimization for calls.
          </p>

          <p>
            That broader relevance matters because search performance is not only
            about one keyword. It is also about demonstrating authority around a
            topic. A page like this can act as a hub inside your service cluster,
            helping search engines understand how your business connects inbound
            calls, live transfers, insurance lead generation, and supporting blog
            education across the rest of the site.
          </p>

          <p>
            Internal linking is a major part of that strategy. This page should
            send users and crawlers to related pages such as{" "}
            <Link
              href="/services/live-transfer-leads"
              className="text-blue-600 font-semibold hover:underline"
            >
              Live Transfer Leads
            </Link>
            ,{" "}
            <Link
              href="/services/insurances-leads"
              className="text-blue-600 font-semibold hover:underline"
            >
              Insurance Call Leads
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
            , and your{" "}
            <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
              blog
            </Link>
            .
          </p>

          <p>
            From an SEO standpoint, that improves crawl paths, reinforces topical
            relationships, distributes internal authority, and gives users more
            logical next steps. That combination can help strengthen the visibility
            of the entire call-marketing cluster over time, not just this single page.
          </p>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Related Services & Resources
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link
            href="/services/live-transfer-leads"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Live Transfer Leads
            </h3>
            <p className="mt-2 text-gray-700">
              Connect with qualified prospects in real time while interest is still high.
            </p>
          </Link>

          <Link
            href="/services/insurances-leads"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Insurance Call Leads
            </h3>
            <p className="mt-2 text-gray-700">
              Generate inbound insurance calls from prospects actively looking for coverage.
            </p>
          </Link>

          <Link
            href="/blog"
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Read Our Blog
            </h3>
            <p className="mt-2 text-gray-700">
              Explore lead generation, call marketing, conversion strategy, and campaign insights.
            </p>
          </Link>
        </div>
      </section>

      {/* NEXT PAGE SECTION */}
      <section className="mt-20 rounded-3xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Continue Exploring Call-Driven Lead Generation
        </h2>

        <p className="mt-4 max-w-3xl text-gray-700 leading-8">
          A strong next-page section improves internal navigation for users and
          creates clearer crawl paths for search engines. If someone lands on this
          page first, these related destinations help move them deeper into your
          lead generation ecosystem.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/services/live-transfer-leads"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              Next Page
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Live Transfer Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              See how live transfer campaigns connect your team with qualified
              prospects in real time.
            </p>
          </Link>

          <Link
            href="/services/insurances-leads"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              Related Next Step
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Insurance Call Leads
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
              Explore how inbound insurance call campaigns help connect agents
              with active shoppers ready to talk.
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
          Ready to Generate More Inbound Calls?
        </h2>

        <p className="mt-4 max-w-3xl text-blue-100 leading-8">
          Top Dog Leads helps businesses build inbound call campaigns that turn
          search intent into measurable conversations. If your team wants better
          lead quality, faster engagement, and stronger call-based conversion
          opportunities, we can help you create a strategy built around phone-ready buyers.
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
