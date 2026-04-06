import Link from "next/link";

export const metadata = {
  title: "Live Transfer Leads Services USA | Real-Time Qualified Calls | Top Dog Leads",
  description:
    "Buy live transfer leads for insurance, Medicare, solar, auto, and final expense. Pre-qualified prospects transferred directly to your sales agents in real time. 90%+ contact rate, TCPA compliant, no contracts. Start receiving calls in 24 hours.",
  keywords: [
    // ── Core / Short-tail
    "live transfer leads",
    "live transfers",
    "real-time leads",
    "live call transfers",
    "warm transfer leads",
    "phone transfer leads",
    "inbound live transfer leads",
    "outbound live transfer leads",

    // ── Buying intent (high commercial value)
    "buy live transfer leads",
    "purchase live transfer leads",
    "live transfer leads for sale",
    "live transfer leads USA",
    "live transfer lead provider",
    "best live transfer leads",
    "affordable live transfer leads",
    "exclusive live transfer leads",
    "live transfer lead generation",
    "live transfer lead service",
    "live transfer lead company",

    // ── Industry-specific (vertical keywords)
    "insurance live transfer leads",
    "health insurance live transfer leads",
    "ACA live transfer leads",
    "Medicare live transfer leads",
    "Medicare Advantage live transfer leads",
    "final expense live transfer leads",
    "life insurance live transfer leads",
    "auto insurance live transfer leads",
    "solar live transfer leads",
    "solar energy live transfer leads",
    "home services live transfer leads",
    "mortgage live transfer leads",
    "refinance live transfer leads",
    "debt relief live transfer leads",
    "home security live transfer leads",
    "home warranty live transfer leads",

    // ── Long-tail / question-based (voice & intent)
    "how to get live transfer leads",
    "what are live transfer leads",
    "live transfer leads vs internet leads",
    "live transfer leads for insurance agents",
    "live transfer leads for Medicare agents",
    "live transfer leads for solar companies",
    "TCPA compliant live transfer leads",
    "live transfer leads with replacement guarantee",
    "real time phone leads for insurance",
    "pre-qualified live transfer calls",
    "warm leads transferred live to agents",
    "live transfer leads no contracts",
    "live transfer leads 24 hour setup",

    // ── LSI / semantic / related terms
    "qualified phone leads",
    "warm inbound calls",
    "real-time lead delivery",
    "live prospect calls",
    "call center lead generation",
    "phone lead generation service",
    "high intent leads",
    "exclusive qualified leads",
    "pre-screened phone leads",
    "contact rate leads",
    "lead transfer service",
  ].join(", "),
  alternates: {
    canonical: "https://topdoglead.com/service/live-transfer-leads",
  },
  openGraph: {
    title: "Live Transfer Leads Services USA | Real-Time Qualified Calls | Top Dog Leads",
    description:
      "Connect instantly with pre-screened buyers through real-time call transfers. No cold calling. No wasted time. Just live, ready-to-buy prospects for insurance, Medicare, solar & more.",
    url: "https://topdoglead.com/service/live-transfer-leads",
    type: "website",
    siteName: "Top Dog Leads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Transfer Leads USA | Top Dog Leads",
    description:
      "Pre-qualified prospects transferred live to your sales team. 90%+ contact rate. TCPA compliant. Setup in 24 hours. No contracts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const stats = [
  { value: "90%+", label: "Contact Rate" },
  { value: "3x", label: "Higher Close Rate vs. Cold Leads" },
  { value: "< 30s", label: "Average Transfer Time" },
  { value: "100%", label: "TCPA Compliant" },
];

const industries = [
  {
    icon: "🏥",
    title: "Health Insurance",
    desc: "ACA, short-term health, and group plan buyers actively requesting quotes right now.",
  },
  {
    icon: "💊",
    title: "Medicare",
    desc: "Seniors turning 65 or during open enrollment, pre-screened for eligibility and intent.",
  },
  {
    icon: "🌞",
    title: "Solar Energy",
    desc: "Homeowners who own their home, have high utility bills, and want a solar consultation.",
  },
  {
    icon: "🚗",
    title: "Auto Insurance",
    desc: "Drivers actively comparing rates, verified by zip code and vehicle details.",
  },
  {
    icon: "🏠",
    title: "Home Services",
    desc: "Mortgage refinance, home warranty, and home improvement buyers in real time.",
  },
  {
    icon: "💼",
    title: "Final Expense",
    desc: "Seniors aged 50–85 interested in life insurance or final expense coverage.",
  },
  {
    icon: "📊",
    title: "Debt Relief",
    desc: "Consumers with $10K+ in debt, pre-qualified for debt settlement programs.",
  },
  {
    icon: "🔒",
    title: "Home Security",
    desc: "New movers and homeowners requesting home security system installations.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Prospect Expresses Intent",
    desc: "A consumer fills out a form or responds to an ad expressing interest in your product or service.",
  },
  {
    step: "02",
    title: "We Screen & Qualify",
    desc: "Our team calls them within seconds, confirms their interest, and verifies key qualifying criteria.",
  },
  {
    step: "03",
    title: "Live Call Transfer",
    desc: "Within 30 seconds, the pre-qualified prospect is connected directly to your sales rep—live.",
  },
  {
    step: "04",
    title: "You Close the Deal",
    desc: "You speak with a warm, ready-to-buy prospect. No cold calling. No voicemails. Just live conversations.",
  },
];

const faqs = [
  {
    q: "What is a live transfer lead?",
    a: "A live transfer lead is a real-time phone call where a pre-qualified prospect is transferred directly to your sales agent. Unlike form fills or aged leads, the consumer is on the line, engaged, and ready to speak—dramatically increasing your close rate.",
  },
  {
    q: "How are live transfer leads different from regular leads?",
    a: "Traditional leads require you to call back a prospect who may have lost interest or forgotten they submitted a form. Live transfers eliminate that gap—the prospect is already on the phone, expecting to speak with someone.",
  },
  {
    q: "What industries do you serve with live transfer leads?",
    a: "Top Dog Leads provides live transfers for health insurance, Medicare, final expense, auto insurance, solar, home services, debt relief, home security, and more. If your business relies on phone-based sales, we likely have a program for you.",
  },
  {
    q: "Are your live transfer leads TCPA compliant?",
    a: "Yes. All of our leads go through a rigorous TCPA compliance process. Prospects have opted in to be contacted, and our transfers include the required consent documentation. We take compliance seriously to protect your business.",
  },
  {
    q: "What is your minimum order for live transfer leads?",
    a: "We work with businesses of all sizes. Whether you need 10 transfers a day or 500, we can structure a program around your capacity and budget. Contact us for a custom quote.",
  },
  {
    q: "Can I set filters for the types of prospects I receive?",
    a: "Absolutely. You can filter by geography (state, zip code), age, income, insurance status, homeownership, and dozens of other criteria depending on your vertical. You only receive leads that match your ideal buyer profile.",
  },
  {
    q: "What hours are live transfers available?",
    a: "We can deliver live transfers during standard business hours (8 AM–8 PM in your time zone) or custom hours that match your agents' availability. Weekend transfers are also available for select programs.",
  },
  {
    q: "How quickly can I start receiving live transfer leads?",
    a: "Most clients are set up and receiving transfers within 24–48 hours of signing up. Our onboarding team will walk you through the setup process and ensure your team is ready to receive calls.",
  },
];

const competitors = [
  { feature: "Real-Time Transfer",        topdog: true, typical: false, generic: false },
  { feature: "TCPA Compliance Docs",      topdog: true, typical: true,  generic: false },
  { feature: "Custom Lead Filters",       topdog: true, typical: false, generic: false },
  { feature: "No Long-Term Contracts",    topdog: true, typical: false, generic: false },
  { feature: "Dedicated Account Manager", topdog: true, typical: true,  generic: false },
  { feature: "Replacement Guarantee",     topdog: true, typical: false, generic: false },
  { feature: "Same-Day Setup",            topdog: true, typical: false, generic: false },
  { feature: "Multi-Vertical Coverage",   topdog: true, typical: true,  generic: false },
];

const testimonials = [
  {
    name: "Jason R.",
    company: "SunPath Solar, Texas",
    quote:
      "We went from struggling to hit 15 closes a week to 40+ after switching to Top Dog live transfers. The quality is night and day compared to aged leads.",
    stars: 5,
  },
  {
    name: "Maria L.",
    company: "United Health Advisors, Florida",
    quote:
      "During ACA open enrollment, we needed volume AND quality. Top Dog delivered 200+ transfers a week, all TCPA compliant. Our compliance team was impressed.",
    stars: 5,
  },
  {
    name: "David K.",
    company: "Shield Final Expense Agency, Ohio",
    quote:
      "I've tried every lead source out there. Live transfers from Top Dog are the only ones where I feel like I'm talking to someone who actually wants to buy.",
    stars: 5,
  },
];

export default function LiveTransferPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* ── STRUCTURED DATA: BreadcrumbList ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://topdoglead.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://topdoglead.com/service" },
              { "@type": "ListItem", position: 3, name: "Live Transfer Leads", item: "https://topdoglead.com/service/live-transfer-leads" },
            ],
          }),
        }}
      />

      {/* ── STRUCTURED DATA: WebPage with keywords ───────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Live Transfer Leads Services USA | Top Dog Leads",
            url: "https://topdoglead.com/service/live-transfer-leads",
            description:
              "Buy real-time live transfer leads for insurance, Medicare, solar, auto insurance, final expense, debt relief, and home services in the USA. Pre-qualified, TCPA-compliant warm transfer calls delivered to your sales team.",
            keywords:
              "live transfer leads, buy live transfer leads, real-time leads, warm transfer leads, insurance live transfer leads, Medicare live transfer leads, solar live transfer leads, TCPA compliant live transfers, exclusive live transfer leads, pre-qualified phone leads",
            inLanguage: "en-US",
            isPartOf: { "@type": "WebSite", url: "https://topdoglead.com", name: "Top Dog Leads" },
            about: {
              "@type": "Thing",
              name: "Live Transfer Lead Generation",
              description:
                "A lead generation method where pre-screened, high-intent prospects are transferred in real time via phone directly to a sales representative.",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".speakable"],
            },
          }),
        }}
      />
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2044] to-[#061020] text-white overflow-hidden">
        {/* Background pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Real Prospects. Right Now.
            </span>

            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              Live Transfer<br />
              <span className="text-orange-400">Leads</span> That<br />
              Actually Close
            </h1>

            {/* Screen-reader keyword block — boosts LSI coverage without visual clutter */}
            <p className="sr-only">
              Buy exclusive live transfer leads for insurance agents, Medicare brokers, solar
              companies, auto insurance, final expense, debt relief, and home services across
              the USA. Real-time, TCPA-compliant, pre-qualified warm transfer phone leads
              delivered directly to your sales agents. No contracts. 24-hour setup.
            </p>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
              Stop leaving voicemails for cold leads. With Top Dog{" "}
              <strong className="text-white">live transfer leads</strong>, a
              pre-qualified buyer is on the line before your phone even rings —
              ready to talk, ready to buy. The highest-intent{" "}
              <strong className="text-white">real-time phone leads</strong> available
              for insurance, Medicare, solar, auto, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white hover:bg-orange-400 text-gray-900
                 font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg shadow-white/30 
                 hover:shadow-orange-400/40 hover:-translate-y-0.5"
              >
                Get Live Transfers Today →
              </Link>
              <a
                href="tel:+16784628013"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:bg-white/5"
              >
                📞 Call Us Now
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              No long-term contracts · TCPA compliant · Setup in 24 hours
            </p>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-black text-orange-400">{s.value}</div>
                <div className="mt-2 text-sm text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT ARE LIVE TRANSFER LEADS ─────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold uppercase text-sm tracking-widest">
              What Are Live Transfer Leads?
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight">
              What Are Live Transfer Leads? The Highest-Intent Phone Leads in Sales
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              A <strong>live transfer lead</strong> is a <strong>real-time phone connection</strong>{" "}
              between your sales agent and a prospect who has <em>just</em> expressed
              interest in your product or service. Our trained agents call the consumer,
              verify their intent and qualifications, then transfer the{" "}
              <strong>warm, pre-qualified call</strong> directly to your team — all within seconds.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Unlike traditional <strong>internet leads</strong> — where you receive a form fill and
              hope the person answers when you call back — <strong>live transfers</strong> put a warm,
              engaged buyer on your line instantly. There's no lag, no ghosting, and no
              wasted dials. Just live conversations with high-intent people who want what you sell.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              According to industry research, <strong>78% of consumers buy from the
              first company to respond</strong> to their inquiry. With{" "}
              <strong>exclusive live transfer leads</strong> from Top Dog, that company is always you.
            </p>
          </div>

          {/* Visual callout */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Live Transfer vs. Traditional Lead
            </h3>
            <div className="space-y-4">
              {[
                ["Lead Type", "Live Transfer", "Form Fill"],
                ["Response Time", "Instant (live)", "Minutes–Days"],
                ["Contact Rate", "90%+", "20–40%"],
                ["Prospect Intent", "Active & Engaged", "May Have Forgotten"],
                ["Close Rate", "3–5x Higher", "Baseline"],
                ["Time Wasted", "Near Zero", "Hours of Dialing"],
              ].map(([feat, live, form], i) => (
                <div
                  key={feat}
                  className={`grid grid-cols-3 gap-2 text-sm ${i === 0 ? "font-bold text-gray-500 uppercase text-xs" : "text-gray-700"}`}
                >
                  <span className={i === 0 ? "" : "font-medium"}>{feat}</span>
                  <span className={i === 0 ? "text-orange-600" : "text-green-700 font-semibold"}>
                    {live}
                  </span>
                  <span className={i === 0 ? "" : "text-gray-400"}>{form}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-400 font-bold uppercase text-sm tracking-widest">
              The Process
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black">
              How Our Live Transfer Leads Work
            </h2>
            <p className="mt-4 text-gray-400">
              From intent to conversation in under 30 seconds. Here's exactly what
              happens before a call lands on your agent's desk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px  to-transparent z-10" />
                )}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="text-5xl font-black text-orange-500/30 leading-none mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-orange-500 font-bold uppercase text-sm tracking-widest">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black">
            Live Transfer Leads for Every High-Ticket Sales Vertical
          </h2>
          <p className="mt-4 text-gray-600">
            Top Dog Leads serves agents, agencies, and businesses across the most
            lucrative phone-sales industries in the United States.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all cursor-pointer"
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                {ind.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Don't see your industry?{" "}
          <Link href="/contact" className="text-orange-500 font-semibold hover:underline">
            Contact us
          </Link>{" "}
          — we likely have a program for you.
        </p>
      </section>

      {/* ── WHY TOP DOG (Competitor Comparison) ─────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange-500 font-bold uppercase text-sm tracking-widest">
              Why Top Dog Leads
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black">
              How We Compare to Other Lead Providers
            </h2>
            <p className="mt-4 text-gray-600">
              Not all live transfer programs are equal. See why sales teams across
              the country choose Top Dog over the competition.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 font-bold text-gray-700 w-1/2">Feature</th>
                  <th className="py-4 px-4 font-bold text-orange-600 bg-orange-50 rounded-t-xl">
                    🐾 Top Dog Leads
                  </th>
                  <th className="py-4 px-4 font-bold text-gray-500">Typical Lead Agencies</th>
                  <th className="py-4 px-4 font-bold text-gray-400">Generic Lead Vendors</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="py-3.5 pr-4 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center bg-orange-50/50">
                      {row.topdog ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {row.typical ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {row.generic ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BENEFITS / WHY LIVE TRANSFERS ────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-orange-500 font-bold uppercase text-sm tracking-widest">
              The Benefits
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight">
              Why Top-Performing Sales Teams Buy Live Transfer Leads
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              The math is simple: the faster you reach an interested prospect, the more
              likely you are to close. Live transfers make that equation automatic.
              Here's what agents and agencies consistently report after switching from
              traditional lead generation:
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: "📈",
                  title: "3–5x Higher Close Rates",
                  desc: "Prospects transferred live are in an active buying mindset. They've just expressed interest and haven't had time to cool off or be contacted by a competitor.",
                },
                {
                  icon: "⏱️",
                  title: "Zero Time Wasted on Bad Numbers",
                  desc: "Our agents do all the dialing, screening, and qualifying. By the time a call reaches you, the hard part is done. Your agents only speak with real people.",
                },
                {
                  icon: "🎯",
                  title: "Hyper-Targeted Prospect Profiles",
                  desc: "Set filters for age, geography, income, coverage type, homeownership, and more. You receive only the prospects who match your ideal customer profile.",
                },
                {
                  icon: "📋",
                  title: "Full TCPA Compliance Documentation",
                  desc: "Every lead comes with documentation of the consumer's consent to be contacted. Protect your business and sell with confidence.",
                },
                {
                  icon: "💰",
                  title: "Predictable, Scalable ROI",
                  desc: "Because you only pay per transfer — and each transfer is a live, qualified conversation — your cost-per-acquisition becomes measurable and scalable.",
                },
                {
                  icon: "🔄",
                  title: "Replacement Guarantee",
                  desc: "If a transfer doesn't meet our quality standards (wrong info, wrong intent), we replace it. You only pay for leads that count.",
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{b.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{b.title}</h3>
                    <p className="mt-1 text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="sticky top-8">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#0d2044] text-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-black">Ready to Receive Live Calls?</h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Join hundreds of agents and agencies getting live transfer leads from
                Top Dog. Setup takes less than 24 hours.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "No long-term contracts required",
                  "Custom lead filters included",
                  "Dedicated account manager",
                  "Live calls during your hours",
                  "TCPA compliance docs on every lead",
                  "Replacement guarantee on bad calls",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300">
                    <span className="text-orange-400 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 block text-center bg-white hover:bg-orange-400 text-gray-900 font-bold px-6 py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/30"
              >
                Start Getting Live Transfers →
              </Link>

              <p className="mt-4 text-center text-xs text-gray-500">
                Or call us:{" "}
                <a href="tel:+16784628013" className="text-orange-400 font-semibold hover:underline">
                  1-678-462-8013
                </a>
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: "🛡️", label: "TCPA Compliant" },
                { icon: "🏆", label: "Top Rated" },
                { icon: "🔒", label: "Secure & Private" },
              ].map((b) => (
                <div key={b.label} className="bg-gray-50 border border-gray-200 rounded-xl py-4 px-2">
                  <div className="text-2xl">{b.icon}</div>
                  <div className="mt-1 text-xs font-semibold text-gray-600">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-400 font-bold uppercase text-sm tracking-widest">
              Success Stories
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-orange-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT BLOCK ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose prose-gray max-w-none">
          <span className="not-prose text-orange-500 font-bold uppercase text-sm tracking-widest">
            Deep Dive
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black not-prose">
            The Complete Guide to Live Transfer Lead Generation
          </h2>

          <h3 className="mt-10 text-xl font-bold not-prose">
            What Makes a Lead a "Live Transfer"?
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The term "live transfer lead" refers to a specific lead delivery mechanism
            where a human agent confirms a prospect's intent and transfers them — in
            real time, while they're still on the phone — to your sales team. This is
            fundamentally different from a <strong>web lead</strong> (where someone
            fills out a form and you call them later) or an <strong>aged lead</strong>
            (where you buy a list of contacts who expressed interest days or weeks ago).
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The key distinction is <em>immediacy and warm handoff</em>. The prospect
            hasn't had time to shop around, get distracted, or forget why they were
            interested. You're catching them at the peak of their intent — the most
            valuable moment in any sales cycle.
          </p>

          <h3 className="mt-10 text-xl font-bold not-prose">
            Who Should Buy Live Transfer Leads?
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Live transfer leads are ideal for any business where the primary sales
            channel is an outbound or inbound phone conversation. They're especially
            powerful for:
          </p>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li><strong>Insurance agents and agencies</strong> in health, life, Medicare, and auto verticals</li>
            <li><strong>Solar installation companies</strong> targeting homeowners</li>
            <li><strong>Mortgage brokers and loan officers</strong> seeking refinance or purchase leads</li>
            <li><strong>Debt relief companies</strong> working with high-balance consumers</li>
            <li><strong>Home services businesses</strong> including security, HVAC, and roofing</li>
          </ul>
          <p className="mt-4 text-gray-600 leading-relaxed">
            If your business closes deals over the phone and your conversion rate depends
            on speaking with prospects quickly, live transfer leads will almost certainly
            improve your economics.
          </p>

          <h3 className="mt-10 text-xl font-bold not-prose">
            How to Maximize Your ROI from Live Transfer Leads
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            To get the most from live transfer leads, your team should be trained to
            treat every incoming transfer as a warm handoff — not a cold call. Here
            are best practices Top Dog's highest-performing clients follow:
          </p>
          <ul className="mt-4 text-gray-600 space-y-3">
            <li>
              <strong>Answer every call within 3 rings.</strong> The prospect has been
              primed by our agent. Any delay introduces doubt.
            </li>
            <li>
              <strong>Open with the transfer context.</strong> "Hi [Name], I understand
              you were just speaking with someone about [product] — I'm here to help."
              This reassures the prospect and keeps momentum.
            </li>
            <li>
              <strong>Don't re-qualify what we've already confirmed.</strong> Trust the
              screening we've done and move toward discovery and close.
            </li>
            <li>
              <strong>Track your contact-to-close rate per vertical.</strong> This lets
              you optimize your filter settings and agent scripts over time.
            </li>
            <li>
              <strong>Request replacements on bad transfers promptly.</strong> Our
              guarantee is there to protect you — use it.
            </li>
          </ul>

          <h3 className="mt-10 text-xl font-bold not-prose">
            Live Transfer Leads vs. Internet Leads: A Cost-Per-Acquisition Analysis
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            On the surface, live transfer leads appear more expensive than web leads.
            But when you account for contact rate, close rate, and agent time, live
            transfers almost universally deliver a <strong>lower cost per acquired
            customer</strong>.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Example: If a web lead costs $10 and has a 25% contact rate and a 10%
            close rate, your cost per close is $400. If a live transfer costs $45 and
            has a 90% contact rate and a 25% close rate, your cost per close is $200.
            The live transfer is <em>half the cost</em> to acquire a customer — despite
            costing 4.5x more per lead.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This is why top-performing agencies allocate a growing percentage of their
            lead budget to live transfers each year. The ROI math is undeniable.
          </p>
        </article>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-bold uppercase text-sm tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black">
              Frequently Asked Questions About Live Transfer Leads
            </h2>
          </div>

          {/* JSON-LD structured data for FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-orange-600 transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-orange-500 group-open:rotate-45 transition-transform text-xl font-light flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES (Internal Links + keyword anchors) ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-black text-gray-900 mb-8">
          Explore More Lead Generation Services from Top Dog
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: "/service/insurance-leads", label: "Insurance Leads", desc: "Health, auto & life insurance leads" },
            { href: "/service/medicare-leads", label: "Medicare Leads", desc: "Exclusive Medicare Advantage & supplement leads" },
            { href: "/service/solar-leads", label: "Solar Leads", desc: "Homeowner solar installation leads" },
            { href: "/service/final-expense-leads", label: "Final Expense Leads", desc: "Aged 50–85 final expense live transfers" },
            { href: "/service/aged-leads", label: "Aged Leads", desc: "High-volume aged insurance & solar leads" },
            { href: "/service/internet-leads", label: "Internet Leads", desc: "Fresh web-form leads for all verticals" },
            { href: "/service/auto-insurance-leads", label: "Auto Insurance Leads", desc: "Real-time auto insurance quote leads" },
            { href: "/service/debt-relief-leads", label: "Debt Relief Leads", desc: "Pre-qualified $10K+ debt settlement leads" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <span className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors text-sm">
                {link.label}
              </span>
              <p className="mt-1 text-xs text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="bg-slate-50 text-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-black leading-tight">
            Stop Chasing Cold Leads.<br />Start Closing Live Transfer Leads.
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Join hundreds of insurance agents, Medicare brokers, solar companies, and
            financial services agencies who've replaced cold outreach with warm,
            live, pre-qualified phone connections. Setup takes 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-900 text-white font-black px-10 py-5 rounded-xl text-lg hover:bg-blue-900/50  transition-colors shadow-xl"
            >
              Get Live Transfer Leads Now →
            </Link>
            <a
              href="tel:+16784628013"
              className="border-2 border-white/50 bg-gray-900 hover:border-white
               text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors"
            >
              📞 Speak to Our Team
            </a>
          </div>
          <p className="mt-6 text-gray-900 text-sm">
            No contracts · Custom lead filters · TCPA compliant · 24-hour setup · Replacement guarantee
          </p>
        </div>
      </section>

      {/* ── SCHEMA MARKUP: Service (expanded with keywords & catalog) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Live Transfer Leads",
            alternateName: [
              "Live Transfer Lead Generation",
              "Real-Time Phone Leads",
              "Warm Transfer Leads",
              "Pre-Qualified Live Call Transfers",
              "Exclusive Live Transfer Leads USA",
            ],
            serviceType: "Lead Generation",
            provider: {
              "@type": "Organization",
              name: "Top Dog Leads",
              url: "https://topdoglead.com",
              logo: "https://topdoglead.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "+1 678 462 8013",
                areaServed: "US",
                availableLanguage: "English",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            description:
              "Real-time TCPA-compliant live transfer leads for insurance agents, Medicare brokers, solar companies, auto insurance, final expense, debt relief, and home services. Pre-qualified prospects are screened and transferred live to your sales agents across the USA. No contracts. Custom lead filters. Replacement guarantee.",
            keywords:
              "live transfer leads, buy live transfer leads USA, insurance live transfer leads, Medicare live transfer leads, solar live transfer leads, TCPA compliant warm transfer leads, exclusive pre-qualified phone leads, real-time lead generation service",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Live Transfer Lead Verticals",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Health Insurance Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medicare Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Energy Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Insurance Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Final Expense Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Debt Relief Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Security Live Transfer Leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Services Live Transfer Leads" } },
              ],
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: "US",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                description: "Per live transfer call. Volume pricing available.",
              },
            },
          }),
        }}
      />
    </main>
  );
}