import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── ALL FAQ DATA ─────────────────────────────────────────────────────────────
const sections = [
  {
    id: "general",
    heading: "General Questions",
    color: "blue",
    faqs: [
      {
        q: "What is pay-per-call lead generation?",
        a: "Pay-per-call lead generation is a performance marketing model where businesses only pay when a real prospect calls them live. Instead of buying a list of contacts to cold-call yourself, we run targeted search ad campaigns so buyers call you directly. You receive exclusive inbound calls from people actively searching for your service — auto insurance, solar installation, roofing, Medicare, or final expense — and you only pay per qualified call received.",
      },
      {
        q: "How is pay-per-call different from buying regular leads?",
        a: "Traditional lead vendors sell recycled form fills — a name and number collected days or weeks ago, often sold to multiple agents at once. By the time you call, the prospect has moved on. Pay-per-call delivers a live person already on the phone, calling because they searched for exactly what you offer. Close rates for inbound pay-per-call leads are typically 2–4× higher than form fill leads because the intent is immediate and the call is exclusive to you.",
      },
      {
        q: "What industries do you generate pay-per-call leads for?",
        a: "We generate exclusive inbound calls for: Auto Insurance, Final Expense Insurance, Home Insurance, Solar Installation, Medicare Insurance (Medicare Advantage and Medicare Supplement), Motor Vehicle Accident legal leads, Pest Control, and Roofing. If your business closes deals over the phone, pay-per-call lead generation works for you.",
      },
      {
        q: "Are Top Dog Leads a good fit for independent insurance agents?",
        a: "Yes. Independent insurance agents are one of our largest client groups. Whether you write auto insurance, final expense, Medicare supplement, or home insurance, we can send live inbound calls from prospects actively shopping for coverage in your state. There is no minimum volume, no long-term contract, and no monthly fee — you buy calls when you want them.",
      },
      {
        q: "What states do you cover for lead generation?",
        a: "We generate pay-per-call leads across all 50 US states. You can target a single state, multiple states, specific cities, or zip code radius — whatever matches your license area or service territory. State-specific targeting keeps every call compliant with your licensing requirements.",
      },
      {
        q: "How does Top Dog Leads generate inbound calls?",
        a: "We run paid search advertising campaigns on Google and Bing, targeting high-intent keywords like 'auto insurance quotes', 'buy solar panels', 'Medicare plans near me', and 'roofing contractors'. Prospects see the ad, click, and call a tracking number that routes directly to your phone. Every caller is a real person who chose to call — no robocalls, no cold outreach, no recycled data.",
      },
      {
        q: "Can I buy leads for multiple industries at the same time?",
        a: "Yes. Many of our clients run campaigns across multiple verticals simultaneously — for example, an insurance agency buying both auto insurance leads and final expense leads, or a home services company buying roofing leads and pest control leads. Each campaign is managed separately with its own targeting, budget cap, and call tracking number.",
      },
      {
        q: "Do you work with both large call centers and solo agents?",
        a: "Yes. We serve solo independent agents who want 5–10 calls per day and large call centers that need hundreds of calls daily. The platform scales to your capacity. We recommend starting at a volume your team can handle well and increasing gradually as you dial in your close rate and agent coverage.",
      },
    ],
  },
  {
    id: "pricing",
    heading: "Pricing & Fees",
    color: "green",
    faqs: [
      {
        q: "How much do pay-per-call leads cost?",
        a: "Our pay-per-call leads are priced per qualified inbound call. Pricing varies by industry, geography, and targeting criteria. Auto insurance leads, Medicare leads, and final expense leads are among our most competitive verticals. There is no setup fee, no monthly subscription, and no cancellation fee — you only pay when a qualified call lands on your phone. Contact us for a custom quote based on your industry and target area.",
      },
      {
        q: "Is there a setup fee to start buying leads?",
        a: "No. There is zero setup fee. We build your campaign, configure your call tracking number, and launch ads at no upfront cost. Your first charge is your first qualified call.",
      },
      {
        q: "Is there a monthly fee or retainer?",
        a: "No monthly fee, no retainer, no subscription. You are billed only for qualified calls delivered to your phone. If calls stop, your billing stops. This is a true performance-based lead generation model.",
      },
      {
        q: "Are there any contracts or cancellation fees?",
        a: "No contracts and no cancellation fees. Pause or stop your campaign any time with no penalty. We earn your continued business by delivering high-quality exclusive leads — not by locking you into agreements.",
      },
      {
        q: "What counts as a billable qualified call?",
        a: "A qualified call must meet criteria you define before your campaign launches: minimum call duration (typically 90 seconds), correct service type, correct state or geography, and a live human on the line. Any call that does not meet your agreed criteria — wrong state, wrong coverage type, too short, or a spam call — is not billed. We review all disputes quickly.",
      },
      {
        q: "Can I set a daily or monthly budget cap?",
        a: "Yes. You control your spend entirely. Set a daily call cap, a weekly cap, or a total monthly budget and we stop routing calls once you hit your limit. There are no overages or surprise charges.",
      },
      {
        q: "Do you offer volume discounts for high call volumes?",
        a: "Yes. Clients who commit to higher monthly call volumes qualify for reduced per-call pricing. Volume pricing tiers are available for agencies, call centers, and multi-location businesses. Contact our team to discuss a custom volume agreement based on your projected monthly call needs.",
      },
      {
        q: "How do I get invoiced and what payment methods do you accept?",
        a: "We invoice per billing cycle based on qualified calls delivered. We accept all major credit cards, ACH bank transfer, and wire transfer. High-volume clients can arrange net-30 invoicing terms. All billing is transparent — every line item on your invoice corresponds to a recorded, timestamped call in your dashboard.",
      },
    ],
  },
  {
    id: "quality",
    heading: "Call Quality & Compliance",
    color: "purple",
    faqs: [
      {
        q: "Are the leads exclusive or shared with other agents?",
        a: "Every call is 100% exclusive to you. We do not resell the same call to multiple buyers. The prospect called in response to a campaign built specifically for your account — you are the only agent or business receiving that call. This is the core difference between Top Dog Leads and traditional shared lead vendors.",
      },
      {
        q: "Can I listen to call recordings?",
        a: "Yes. Every inbound call is recorded and available in your account dashboard. You can review recordings to verify quality, coach your sales team, and dispute any calls you believe should not be billed. Full call recording access is included at no extra charge.",
      },
      {
        q: "What is the average call duration for insurance leads?",
        a: "Qualified insurance calls typically run 3–8 minutes. Our minimum billable duration of 90 seconds filters out wrong numbers and accidental hang-ups before you are ever charged. Medicare leads and final expense calls tend to run longer as agents complete screening questions during the call.",
      },
      {
        q: "What if I receive a bad or fraudulent call?",
        a: "Flag it in your dashboard or email your account manager. We audit every dispute. If the call was a wrong number, robocall, duplicate, out-of-territory, or did not meet your agreed qualifying criteria, it is fully credited. Our compliance team monitors traffic quality daily to catch problems before they reach you.",
      },
      {
        q: "Are your lead generation campaigns TCPA compliant?",
        a: "Yes. All calls we deliver are inbound — prospects called us voluntarily after seeing a paid search ad. We do not use autodialing, ringless voicemail, or any outbound calling to generate leads. This inbound-only model keeps your campaigns fully TCPA compliant. Medicare campaigns additionally follow all CMS advertising guidelines.",
      },
      {
        q: "What call tracking technology do you use?",
        a: "We use enterprise-grade call tracking with dynamic number insertion, call recording, real-time routing, and detailed analytics per call. You receive a dedicated tracking number for your campaign. All calls are logged with timestamp, duration, caller ID, and recording — giving you full transparency into every lead delivered.",
      },
      {
        q: "Can I set hours when I want to receive calls?",
        a: "Yes. You define your call schedule — days of the week and hours of the day when your team is available to take calls. Outside those hours, calls are not routed and you are not charged. Most clients set hours that match their office schedule so every call reaches a live agent.",
      },
      {
        q: "What is your call connection rate?",
        a: "Our average call connection rate — the percentage of routed calls where a live agent answers — depends on your setup and call hours. Clients who answer calls promptly during scheduled hours see connection rates above 85%. We provide real-time alerts and missed call notifications so your team never misses a billable opportunity.",
      },
    ],
  },
  {
    id: "getting-started",
    heading: "Getting Started",
    color: "orange",
    faqs: [
      {
        q: "How quickly can I start receiving inbound calls?",
        a: "Most clients receive their first pay-per-call leads within 24–48 hours of signing up. Our team configures your tracking number, builds your campaign targeting, and launches search ads the same business day in most cases. There is no waiting period, no lengthy onboarding, and no technical setup required on your end.",
      },
      {
        q: "What do I need to provide to get started?",
        a: "Very little. Tell us your industry (auto insurance, solar, roofing, Medicare, etc.), the states or zip codes you serve, and any qualifying criteria for a good call. We handle all ad creative, campaign management, and call routing. You just need a phone number ready to receive calls.",
      },
      {
        q: "Do I need my own Google Ads or Meta Ads account?",
        a: "No. You do not need your own advertising accounts. We manage all paid search campaigns, ad budgets, creatives, and bidding on our end. You pay only per qualified call received — the underlying ad spend is our responsibility, not yours.",
      },
      {
        q: "Can I filter calls by coverage type, age, or homeownership?",
        a: "Yes. Depending on your industry, we support targeting filters including: US state or zip code radius, coverage type (e.g. liability-only vs. full coverage auto), caller age range (important for Medicare and final expense campaigns), homeownership status (important for home insurance and solar leads), and minimum household income. The more specific your filters, the higher the quality of each call.",
      },
      {
        q: "How many calls can I receive per day?",
        a: "You set your own daily call volume cap. Whether you want 5 calls a day or 500, we scale your campaign accordingly. We recommend starting at a volume your team can handle well — a high close rate on 20 calls a day beats a low close rate on 100 calls a day.",
      },
      {
        q: "How do I pause or stop my campaign?",
        a: "Contact your account manager or pause directly in your dashboard. Campaigns pause same day with no fee and no minimum notice period. Your account remains open and you can resume any time. Many clients pause during team vacations, peak seasons, or hiring gaps and resume with no interruption to campaign performance.",
      },
      {
        q: "Is there an account manager I can contact directly?",
        a: "Yes. Every client is assigned a dedicated account manager who handles campaign setup, optimization, billing questions, and call quality reviews. You can reach your account manager by phone, email, or direct message. We are not a set-it-and-forget-it platform — we actively manage your campaign to improve results.",
      },
      {
        q: "Can I run a test before committing to a full campaign?",
        a: "Yes. We offer a trial period where you can evaluate call quality, close rates, and ROI before scaling. Contact us to discuss a trial arrangement for your industry. We are confident in the quality of our calls and encourage new clients to test before committing to higher volumes.",
      },
    ],
  },
  {
    id: "industries",
    heading: "Industry-Specific Questions",
    color: "teal",
    faqs: [
      {
        q: "How do auto insurance leads work as inbound calls?",
        a: "We target people searching for car insurance quotes in your licensed states using paid search ads on Google and Bing. A prospect searching 'cheap auto insurance' or 'car insurance quotes online' sees your ad, clicks, and calls your tracking number. You receive a live inbound call from someone who needs auto insurance right now — not a lead form submitted last week. Auto insurance is one of our highest-volume verticals with calls available in all 50 states.",
        link: { label: "Learn more about Auto Insurance Leads", href: "/industry/auto-insurance" },
      },
      {
        q: "What are Medicare supplement and Medicare Advantage leads?",
        a: "Medicare leads are inbound calls from Medicare-eligible prospects (typically age 64–72) searching for Medicare Advantage plans, Medicare Supplement (Medigap) coverage, or Part D prescription drug plans. All our Medicare campaigns follow CMS guidelines for marketing to Medicare beneficiaries. These calls are among the highest-value leads in insurance — prospects are in an active enrollment window and ready to make a decision.",
        link: { label: "Learn more about Medicare Insurance Leads", href: "/industry/medicare-insurance" },
      },
      {
        q: "How do solar leads work for installers and contractors?",
        a: "We target homeowners in your service area searching for solar panel installation, solar quotes, and home solar systems. Filters include homeownership status, roof type, average electricity bill, and state. Solar leads as inbound calls convert significantly better than solar form fills because the homeowner is actively engaged and calling to talk — not filling out a quote request and forgetting about it.",
        link: { label: "Learn more about Solar Leads", href: "/industry/solar" },
      },
      {
        q: "What types of roofing leads do you generate?",
        a: "We generate inbound calls from homeowners searching for roof repair, roof replacement, storm damage roofing, and roofing quotes in your service area. Roofing leads are geo-targeted to your coverage zone by state, city, or zip code radius. After major storms, demand spikes significantly — our campaigns scale in real time to capture increased search volume in affected areas.",
        link: { label: "Learn more about Roofing Leads", href: "/industry/roofing" },
      },
      {
        q: "What are final expense insurance leads and how do I buy them?",
        a: "Final expense leads are inbound calls from seniors aged 50–80 searching for burial insurance, funeral expense coverage, or whole life insurance policies with low face values. Final expense is one of the highest-converting pay-per-call verticals because the product is simple, the purchase decision is emotional, and callers are usually ready to enroll in the same call. We target by age, state, and benefit amount range.",
        link: { label: "Learn more about Final Expense Leads", href: "/industry/final-expense" },
      },
      {
        q: "What are motor vehicle accident (MVA) leads for law firms?",
        a: "MVA leads are inbound calls from people recently involved in car accidents who are looking for legal representation, personal injury attorneys, or accident claim assistance. These are highly time-sensitive — callers are typically in the 24–72 hours immediately following an accident and actively looking for a lawyer. We geo-target by state bar license area and filter by accident recency.",
        link: { label: "Learn more about MVA Leads", href: "/industry/motor-vehicle-accident" },
      },
      {
        q: "Do you offer home insurance leads as live calls?",
        a: "Yes. We generate exclusive inbound calls from homeowners shopping for home insurance, homeowner's insurance quotes, and bundled auto and home insurance packages. Home insurance leads can be filtered by homeownership status, property state, and coverage type. These pair well with auto insurance campaigns for agents looking to write bundled policies.",
        link: { label: "Learn more about Home Insurance Leads", href: "/industry/home-insurance" },
      },
      {
        q: "Can pest control companies buy pay-per-call leads?",
        a: "Yes. We generate inbound calls from homeowners and property managers searching for pest control services, exterminator quotes, and rodent removal in your service area. Pest control calls are geo-targeted to your coverage zone and filtered by service type — general pest control, termite inspection, bed bug treatment, and more.",
        link: { label: "Learn more about Pest Control Leads", href: "/industry/pest-control" },
      },
    ],
  },
  {
    id: "results",
    heading: "Results & ROI",
    color: "indigo",
    faqs: [
      {
        q: "What close rate can I expect from pay-per-call leads?",
        a: "Close rates vary by industry, agent skill, and how quickly calls are answered. Our insurance clients typically see close rates of 15–35% on qualified inbound calls — significantly higher than the 3–8% close rates common with purchased form fill leads. The key driver is intent: prospects who called you are far more ready to buy than prospects you cold-called from a list.",
      },
      {
        q: "How do I measure ROI from pay-per-call campaigns?",
        a: "Calculate your ROI by dividing your average policy or deal value by your cost per acquisition. For example: if you pay $25 per qualified auto insurance call, close 1 in 5 calls, and earn $200 per policy, your cost per acquisition is $125 against $200 revenue — a positive ROI from day one. Your dashboard shows call volume, duration, and billing so you can track performance daily.",
      },
      {
        q: "How long before I see results from pay-per-call lead generation?",
        a: "Unlike SEO which takes months, pay-per-call delivers results immediately. Most clients receive their first calls within 24–48 hours and can evaluate campaign quality within the first week. We recommend running for at least 30 days to gather enough data to optimize call targeting, time of day, and qualifying criteria for maximum ROI.",
      },
      {
        q: "What industries have the highest ROI with pay-per-call?",
        a: "Final expense insurance, Medicare supplement, and auto insurance consistently deliver the highest ROI for our clients because the products are high-commission, the purchase decision happens quickly over the phone, and the prospect pool is large. Roofing and solar also deliver strong ROI in storm-season markets. MVA legal leads have very high deal values but lower volume.",
      },
      {
        q: "Can I track which calls actually converted to sales?",
        a: "Yes. You can log conversion outcomes against each call in your dashboard — marking calls as sold, not interested, callback scheduled, or other outcomes. This data feeds directly into campaign optimization, helping us improve targeting to send you more calls that match your best-converting profiles.",
      },
      {
        q: "How does pay-per-call compare to hiring a marketing agency?",
        a: "A traditional digital marketing agency charges a monthly retainer of $1,500–$5,000+ to manage your ads — regardless of results. Pay-per-call is purely performance-based: you pay only for calls delivered, not for ad management time. There is no risk of paying thousands for a campaign that produces nothing. You see results on day one or you do not pay.",
      },
      {
        q: "What is a realistic monthly call volume for a solo insurance agent?",
        a: "A solo agent handling calls between appointments can comfortably manage 10–30 qualified inbound calls per day, or 200–600 per month. At those volumes and a 20% close rate, a solo agent writing auto insurance could add 40–120 new policies per month from pay-per-call alone. Start conservatively, measure your close rate, and scale volume as your capacity grows.",
      },
      {
        q: "Do you provide any performance reporting?",
        a: "Yes. Your dashboard includes real-time reporting on calls received, call duration, answered vs missed calls, billing, and call recordings. Weekly performance summaries are available by email. High-volume clients can access API-level reporting to integrate call data into their own CRM or analytics systems.",
      },
    ],
  },
];

// ─── PAGINATION CONFIG ────────────────────────────────────────────────────────
const SECTIONS_PER_PAGE = 2;
const totalPages = Math.ceil(sections.length / SECTIONS_PER_PAGE);

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200",   dot: "bg-blue-500" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200",  dot: "bg-green-500" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", dot: "bg-purple-500" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", dot: "bg-orange-500" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-700",   border: "border-teal-200",   dot: "bg-teal-500" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", dot: "bg-indigo-500" },
};

// ─── METADATA ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Math.min(Number(page) || 1, totalPages));
  const pageSections = sections.slice(
    (currentPage - 1) * SECTIONS_PER_PAGE,
    currentPage * SECTIONS_PER_PAGE
  );
  const sectionNames = pageSections.map((s) => s.heading).join(" & ");

  return {
    title:
      currentPage === 1
        ? "FAQ — Pay-Per-Call Leads, Pricing & How It Works "
        : `FAQ Page ${currentPage}: ${sectionNames} `,
    description:
      "Get answers about buying pay-per-call leads for insurance, solar, roofing, and Medicare. Pricing, call quality, exclusivity, and how to get started explained.",
    alternates: {
      canonical:
        currentPage === 1
          ? "https://topdoglead.com/faq"
          : `https://topdoglead.com/faq?page=${currentPage}`,
    },
  };
}

// ─── JSON-LD (page 1 only — all FAQs for Google rich results) ────────────────
const allFaqs = sections.flatMap((s) => s.faqs);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function FAQPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Math.min(Number(page) || 1, totalPages));
  if (Number(page) > totalPages) notFound();

  const pageSections = sections.slice(
    (currentPage - 1) * SECTIONS_PER_PAGE,
    currentPage * SECTIONS_PER_PAGE
  );
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <>
      {/* JSON-LD only on page 1 */}
      {currentPage === 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="bg-[#0B2350] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Help Center
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Everything you need to know about buying pay-per-call leads for
              auto insurance, Medicare, solar, roofing, final expense, and more.
            </p>

            {/* All section jump links */}
            <div className="flex flex-wrap justify-center gap-2">
              {sections.map((s, i) => {
                const sPage = Math.floor(i / SECTIONS_PER_PAGE) + 1;
                const href =
                  sPage === 1 ? `#${s.id}` : `/faq?page=${sPage}#${s.id}`;
                return (
                  <a
                    key={s.id}
                    href={href}
                    className={`text-xs px-3 py-1.5 rounded-full transition ${
                      sPage === currentPage
                        ? "bg-white text-[#0B2350] font-semibold"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {s.heading}
                  </a>
                );
              })}
            </div>

            {/* Page indicator */}
            <p className="text-slate-400 text-xs mt-4">
              Page {currentPage} of {totalPages} · {allFaqs.length} total questions
            </p>
          </div>
        </section>

        {/* ── FAQ SECTIONS ──────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
          {pageSections.map((section) => {
            const c = colorMap[section.color];
            return (
              <section key={section.id} id={section.id}>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${c.bg} ${c.border} border mb-6`}
                >
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${c.text}`}>
                    {section.heading}
                  </span>
                </div>

                <div className="space-y-4">
                  {section.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none bg-white hover:bg-gray-50 transition">
                        <h2 className="text-gray-900 font-semibold text-[15px] leading-snug">
                          {faq.q}
                        </h2>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>

                      <div className="px-6 pb-5 pt-2 bg-white border-t border-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                        {"link" in faq && (faq as any).link && (
                          <Link
                            href={(faq as any).link.href}
                            className={`inline-flex items-center gap-1 mt-3 text-sm font-medium ${c.text} hover:underline`}
                          >
                            {(faq as any).link.label} →
                          </Link>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}

          {/* ── PAGINATION ────────────────────────────────────── */}
          <nav
            className="flex items-center justify-between pt-4 border-t border-gray-200"
            aria-label="FAQ pagination"
          >
            {/* Prev */}
            {prevPage ? (
              <Link
                href={prevPage === 1 ? "/faq" : `/faq?page=${prevPage}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </Link>
            ) : (
              <div />
            )}

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? "/faq" : `/faq?page=${p}`}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition ${
                    p === currentPage
                      ? "bg-[#1c2d56] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  aria-current={p === currentPage ? "page" : undefined}
                >
                  {p}
                </Link>
              ))}
            </div>

            {/* Next */}
            {nextPage ? (
              <Link
                href={`/faq?page=${nextPage}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1c2d56] text-white text-sm font-medium hover:bg-[#162245] transition"
              >
                Next
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* ── CTA ───────────────────────────────────────────── */}
          <section className="bg-[#0B2350] rounded-2xl px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to start receiving inbound calls?
            </h2>
            <p className="text-slate-300 text-sm mb-8 max-w-md mx-auto">
              No setup fee. No monthly fee. No contract. Talk to our team and
              get your first pay-per-call leads within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition text-sm"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+16784628013"
                className="flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                +1 678 462 8013
              </a>
            </div>
          </section>

          {/* ── INTERNAL LINKS ────────────────────────────────── */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Explore Our Lead Generation Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Auto Insurance Leads", href: "/industry/auto-insurance" },
                { label: "Solar Leads", href: "/industry/solar" },
                { label: "Medicare Leads", href: "/industry/medicare-insurance" },
                { label: "Roofing Leads", href: "/industry/roofing" },
                { label: "Final Expense Leads", href: "/industry/final-expense" },
                { label: "Home Insurance Leads", href: "/industry/home-insurance" },
                { label: "MVA Leads", href: "/industry/motor-vehicle-accident" },
                { label: "Pest Control Leads", href: "/industry/pest-control" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-center text-sm font-medium text-[#0B2350] border border-gray-200 rounded-lg px-3 py-3 hover:bg-[#0B2350] hover:text-white transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}