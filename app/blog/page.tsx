import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Lead Generation Blog | Pay-Per-Call Insights",
  description:
    "Expert insights on pay-per-call marketing, insurance leads, and business growth from Top Dog Leads. Learn proven strategies to scale your call volume.",
  alternates: {
    canonical: "https://topdoglead.com/blog",
  },
  openGraph: {
    title: "Lead Generation Blog | Top Dog Leads",
    description:
      "Expert insights on pay-per-call marketing, insurance leads, and business growth. Learn proven strategies to scale your call volume.",
    url: "https://topdoglead.com/blog",
    siteName: "Top Dog Leads",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://topdoglead.com/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Top Dog Leads Lead Generation Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Blog | Top Dog Leads",
    description:
      "Expert insights on pay-per-call marketing, insurance leads, and business growth.",
    images: ["https://topdoglead.com/og-image.jpg"],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}