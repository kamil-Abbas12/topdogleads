import { industries } from "@/data/industries";
import IndustryClient from "./IndustryClient";
import IndustryRelatedContent from "./IndustryRelatedContent";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `${industry.name} Leads | Live Calls`,
    description: `Get high-intent ${industry.name} leads delivered live to your phone. Real-time calls, verified prospects. Start today with Top Dog Leads.`,
    keywords: `${industry.name} leads, live ${industry.name} calls, buy ${industry.name} leads, ${industry.name} lead generation`,
    openGraph: {
      title: `${industry.name} Leads – Live Calls `,
      description: `High-intent ${industry.name} leads. Real buyers, real calls.`,
      url: `https://topdoglead.com/industry/${industry.slug}`,
      siteName: "Top Dog Leads",
      images: [{ url: `https://topdoglead.com${industry.image}` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Leads `,
      description: `Live ${industry.name} leads delivered to your phone.`,
    },
    alternates: {
      canonical: `https://topdoglead.com/industry/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <IndustryClient />;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${industry.name} Leads`,
        serviceType: `${industry.name} Lead Generation`,
        description: industry.description,
        image: `https://topdoglead.com${industry.image}`,
        url: `https://topdoglead.com/industry/${industry.slug}`,
        provider: {
          "@type": "Organization",
          name: "Top Dog Leads",
          url: "https://topdoglead.com",
          telephone: industry.phone,
        },
        areaServed: "US",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${industry.name} Lead Benefits`,
          itemListElement: industry.benefits.map((b, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@type": "Service", name: b },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://topdoglead.com" },
          { "@type": "ListItem", position: 2, name: "Industries", item: "https://topdoglead.com/industry" },
          {
            "@type": "ListItem",
            position: 3,
            name: `${industry.name} Leads`,
            item: `https://topdoglead.com/industry/${industry.slug}`,
          },
        ],
      },
      // ✅ Only emit FAQPage schema if faqs actually exist for this industry
      ...(industry.faqs && industry.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: industry.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IndustryClient />
      <IndustryRelatedContent industry={industry} />
    </>
  );
}