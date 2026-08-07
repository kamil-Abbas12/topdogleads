import type { Metadata } from "next";
import { BlogListContent } from "../components/BlogList";

export const metadata: Metadata = {
  title: "Insurance & Pay-Per-Call Leads Blog | Top Dog Leads",
  description:
    "Read expert articles on insurance leads generation, pay-per-call marketing, and business growth strategies from Top Dog Leads.",
  alternates: { canonical: "https://topdoglead.com/blog" },
  openGraph: {
    title: "Leads Generation Blog | Top Dog Leads",
    description:
      "Expert tips on pay-per-call leads, insurance marketing, and scalable business growth.",
    url: "https://topdoglead.com/blog",
    siteName: "Top Dog Leads",
    type: "website",
    images: [{ url: "https://topdoglead.com/logo.png", width: 512, height: 512, alt: "Top Dog Leads" }],
  },
};

export const revalidate = 3600;

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Lead Generation Blog
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Expert insights on pay-per-call marketing, insurance leads, and business growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.55fr_0.85fr] gap-10 items-start">
        <BlogListContent page={1} />
      </div>
    </main>
  );
}