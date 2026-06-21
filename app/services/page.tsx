// app/services/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Lead Generation Services | Pay-Per-Call, Live Transfers & Inbound Calls",
  description:
    "Explore Top Dog Leads' lead generation services — insurance call leads, live transfer leads, and inbound call marketing campaigns built around real, high-intent conversations.",
  alternates: { canonical: "https://topdoglead.com/services" },
  openGraph: {
    title: "Lead Generation Services | Top Dog Leads",
    description:
      "Insurance call leads, live transfer leads, and inbound call marketing — built around real conversations, not clicks.",
    url: "https://topdoglead.com/services",
    siteName: "Top Dog Leads",
    type: "website",
  },
};

const services = [
  {
    href: "/services/insurances-leads",
    title: "Insurance Call Leads",
    desc: "High-intent inbound calls from consumers actively researching auto, health, life, Medicare, final expense, and home insurance.",
  },
  {
    href: "/services/live-transfer-leads",
    title: "Live Transfer Leads",
    desc: "Pre-qualified prospects transferred directly to your sales agents in real time, with a 90%+ contact rate.",
  },
  {
    href: "/services/inbound-call-marketing",
    title: "Inbound Call Marketing",
    desc: "Targeted campaigns, landing page optimization, and call tracking built to turn search intent into real conversations.",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top Dog Leads Services",
  url: "https://topdoglead.com/services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://topdoglead.com${s.href}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://topdoglead.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://topdoglead.com/services" },
  ],
};

export default function ServicesIndexPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Services</li>
        </ol>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">What We Offer</p>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Lead Generation Services Built Around Real Conversations
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-700 leading-8">
        Top Dog Leads helps businesses generate qualified phone calls instead of cold form fills.
        Explore our core services below, or get in touch to talk through which fits your business.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-2xl border border-gray-200 p-6 hover:border-blue-600 transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
            <p className="mt-3 text-gray-700 leading-7">{s.desc}</p>
          </Link>
        ))}
      </div>

      <section className="mt-20 rounded-3xl bg-[#1c2d56] px-8 py-10 text-white">
        <h2 className="text-3xl font-bold">Not Sure Which Service Fits Your Business?</h2>
        <p className="mt-4 max-w-3xl text-blue-100 leading-8">
          Tell us about your industry and goals, and we&apos;ll help you figure out the right mix of
          inbound calls, live transfers, or targeted lead campaigns.
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