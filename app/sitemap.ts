import { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://topdoglead.com";

  // Update this manually whenever you actually ship structural/content
  // changes to the static marketing pages below.
  const STATIC_LAST_MODIFIED = new Date("2026-09-01");

  const industryPages = industries.map((i) => ({
    url: `${baseUrl}/industry/${i.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));
  const salesPages = industries.map((i) => ({
    url: `${baseUrl}/industry/${i.slug}/sales`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const blogPosts = blogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.dateISO), // correct — real per-post date
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/pay-per-call`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/insurances-leads`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/live-transfer-leads`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/inbound-call-marketing`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industry`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq/2`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/faq/3`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date("2026-03-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/hospital-indemnity-insurance`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    ...industryPages,
    ...salesPages,
    ...blogPosts,
  ];
}