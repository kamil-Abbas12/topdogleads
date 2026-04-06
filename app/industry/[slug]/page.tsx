import { industries } from "@/data/industries";
import IndustryClient from "./IndustryClient";

// ✅ generateMetadata works here because this file has NO "use client"
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `Buy ${industry.name} Leads | Live Calls | Top Dog Leads`,
    description: `Get high-intent ${industry.name} leads delivered live to your phone. Real-time calls, verified prospects. Start today with Top Dog Leads.`,
    keywords: `${industry.name} leads, live ${industry.name} calls, buy ${industry.name} leads, ${industry.name} lead generation`,
    openGraph: {
      title: `${industry.name} Leads – Live Calls | Top Dog Leads`,
      description: `High-intent ${industry.name} leads. Real buyers, real calls.`,
      url: `https://topdoglead.com/industry/${industry.slug}`,
      siteName: "Top Dog Leads",
      images: [{ url: `https://topdoglead.com${industry.image}` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Leads | Top Dog Leads`,
      description: `Live ${industry.name} leads delivered to your phone.`,
    },
    alternates: {
      canonical: `https://topdoglead.com/industry/${industry.slug}`,
    },
  };
}

// ✅ Server component — just renders the client component
export default function IndustryPage() {
  return <IndustryClient />;
}