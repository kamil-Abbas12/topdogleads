import type { Metadata } from "next";
import BlogClient from "./BlogClient";
export const metadata: Metadata = {
  title: "Lead Generation Blog | Pay-Per-Call Insights",
  description:
    "Expert insights on pay-per-call marketing, insurance leads, and business growth from Top Dog Leads.",
  alternates: {
    canonical: "https://topdoglead.com/blog",
  },
  openGraph: {
    title: "Lead Generation Blog | Top Dog Leads",
    description:
      "Expert insights on pay-per-call marketing, insurance leads, and business growth.",
    url: "https://topdoglead.com/blog",
    siteName: "Top Dog Leads",
    type: "website",
  },
};
export default function BlogPage() {
  return <BlogClient />;
}