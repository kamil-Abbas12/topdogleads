import Link from "next/link";
import { industries } from "@/data/industries";
import { blogs } from "@/data/blogs";

type Industry = (typeof industries)[number];

export default function IndustryRelatedContent({ industry }: { industry: Industry }) {
  // Cross-link to blog posts tagged with this industry's category
  const relatedPosts = blogs
    .filter((b) => b.category === industry.name)
    .slice(0, 3);

  // Cross-link to a few other industry pages
  const otherIndustries = industries
    .filter((i) => i.slug !== industry.slug)
    .slice(0, 3);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
      {/* FAQ block — mirrors the schema emitted in page.tsx so users see the same content Google does */}
      {industry.faqs && industry.faqs.length > 0 && (
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            {industry.name} Leads — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {industry.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedPosts.length > 0 && (
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            Related Reading on {industry.name} Leads
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 p-4 hover:border-slate-400 transition-colors"
              >
                <p className="font-semibold text-slate-900 leading-snug">{post.title}</p>
                <p className="text-sm text-slate-500 mt-2">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
          Explore Other Industries We Serve
        </h2>
        <div className="flex flex-wrap gap-3">
          {otherIndustries.map((i) => (
            <Link
              key={i.slug}
              href={`/industry/${i.slug}`}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-500 hover:text-slate-900 transition-colors"
            >
              {i.name} Leads →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}