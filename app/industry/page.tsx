import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Pay-Per-Call Leads by Industry | Top Dog Leads",
  description:
    "Top Dog Leads generates high-intent pay-per-call leads across auto insurance, home insurance, Medicare, final expense, solar, roofing, pest control, and motor vehicle accident verticals.",
  alternates: { canonical: "https://topdoglead.com/industry" },
  openGraph: {
    title: "Industries We Serve | Top Dog Leads",
    description: "High-intent pay-per-call leads across insurance, home services, solar, and legal verticals.",
    url: "https://topdoglead.com/industry",
    siteName: "Top Dog Leads",
    type: "website",
  },
};

const industries = [
  { slug: "auto-insurance", name: "Auto Insurance", desc: "Drivers actively comparing quotes, coverage, and carriers." },
  { slug: "home-insurance", name: "Home Insurance", desc: "Homeowners researching coverage, premiums, and bundled policies." },
  { slug: "medicare-insurance", name: "Medicare Insurance", desc: "Seniors and caregivers exploring Medicare plan options and enrollment." },
  { slug: "final-expense", name: "Final Expense", desc: "Consumers seeking affordable burial and end-of-life coverage." },
  { slug: "solar", name: "Solar", desc: "Homeowners evaluating solar installation and energy savings." },
  { slug: "roofing", name: "Roofing", desc: "Homeowners needing roof repair, replacement, or storm damage estimates." },
  { slug: "pest-control", name: "Pest Control", desc: "Property owners looking for pest inspection and treatment services." },
  { slug: "motor-vehicle-accident", name: "Motor Vehicle Accident", desc: "Accident victims seeking legal consultation and case evaluation." },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top Dog Leads Industries",
  url: "https://topdoglead.com/industry",
  itemListElement: industries.map((ind, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${ind.name} Leads`,
    url: `https://topdoglead.com/industry/${ind.slug}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://topdoglead.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://topdoglead.com/industry" },
  ],
};

export default function IndustryIndexPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Industries</li>
        </ol>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Industries</p>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Pay-Per-Call Leads by Industry
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-700 leading-8">
        Top Dog Leads generates high-intent inbound calls across insurance, home services, solar,
        and legal verticals. Explore the industries we serve below.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industry/${ind.slug}`}
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{ind.name} Leads</h2>
            <p className="mt-3 text-gray-700 leading-7">{ind.desc}</p>
          </Link>
        ))}
      </div>

      <section className="mt-20 rounded-3xl bg-[#1c2d56] px-8 py-10 text-white">
        <h2 className="text-3xl font-bold">Don&apos;t See Your Industry?</h2>
        <p className="mt-4 max-w-3xl text-blue-100 leading-8">
          We onboard new verticals regularly. Reach out and we&apos;ll tell you honestly whether
          pay-per-call leads are the right fit for your business.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center rounded-md bg-white px-6 py-3 text-[#1c2d56] font-semibold hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}