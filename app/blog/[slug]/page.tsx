// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { industries as productIndustries } from "@/data/products";
import { extractToc } from "@/lib/toc";

import styles from "./PostContent.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: blog.metaTitle ?? `${blog.title} | Top Dog Leads`,
    description: blog.metaDescription ?? blog.caption?.[0],
    openGraph: {
      title: blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.caption?.[0],
      url: `https://topdoglead.com/blog/${blog.slug}`,
      siteName: "Top Dog Leads",
      images: [{ url: blog.image, alt: blog.imageAlt ?? blog.title }],
      type: "article",
      publishedTime: blog.dateISO,
      modifiedTime: blog.dateModifiedISO ?? blog.dateISO,
      authors: [blog.author],
      section: blog.category,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.caption?.[0],
      images: [blog.image],
    },
    alternates: {
      canonical: `https://topdoglead.com/blog/${blog.slug}`,
    },
  };
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const prevPost = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextPost = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  const related = [...blogs]
    .filter((b) => b.slug !== blog.slug)
    .sort((a, b) => {
      const aShared = a.tags?.filter((t) => blog.tags?.includes(t)).length ?? 0;
      const bShared = b.tags?.filter((t) => blog.tags?.includes(t)).length ?? 0;
      if (aShared !== bShared) return bShared - aShared;
      return new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime();
    })
    .slice(0, 4);

  const { contentWithIds, headings } = extractToc(blog.content);

  // --- JSON-LD: BlogPosting (replaces the old microdata-only approach) ---
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription ?? blog.caption?.[0],
    image: blog.image.startsWith("http")
      ? blog.image
      : `https://topdoglead.com${blog.image}`,
    datePublished: blog.dateISO,
    dateModified: blog.dateModifiedISO ?? blog.dateISO,
    author: {
      "@type": "Organization",
      name: blog.author,
      url: "https://topdoglead.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Top Dog Leads",
      logo: {
        "@type": "ImageObject",
        url: "https://topdoglead.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://topdoglead.com/blog/${blog.slug}`,
    },
    articleSection: blog.category,
    keywords: blog.tags?.join(", "),
  };

  // --- JSON-LD: FAQ, only when this post actually has faqs defined ---
  const faqSchema =
    blog.faqs && blog.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  // --- JSON-LD: BreadcrumbList ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topdoglead.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://topdoglead.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://topdoglead.com/blog/${blog.slug}`,
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_280px] gap-10 items-start">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue-600">Home</Link>
              </li>
              <span aria-hidden="true">/</span>
              <li>
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              </li>
              <span aria-hidden="true">/</span>
              <li>
                <span className="text-gray-700 line-clamp-1">{blog.title}</span>
              </li>
            </ol>
          </nav>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
              <time dateTime={blog.dateISO}>{blog.date}</time>
              <span aria-hidden="true">•</span>
              <span>{blog.author}</span>
              {blog.category && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{blog.category}</span>
                </>
              )}
              <span aria-hidden="true">•</span>
              <span>{readingTime(blog.content)} min read</span>
            </div>

            <div className="rounded-2xl overflow-hidden mb-8">
              <Image
                src={blog.image}
                alt={blog.imageAlt ?? blog.title}
                width={1200}
                height={650}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-[280px] sm:h-[380px] object-cover"
                priority
              />
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Article tags">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Mobile-only TOC, shown above content on small screens */}
            {headings.length > 2 && (
              <nav
                aria-label="Table of contents"
                className="lg:hidden mb-8 rounded-2xl bg-gray-50 border border-gray-100 p-5"
              >
                <p className="text-sm font-extrabold text-slate-900 mb-3">In this article</p>
                <ul className="space-y-2">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-sm text-blue-700 hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div
              className={`${styles.blogContent} max-w-none`}
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </article>

          {/* Prev / Next navigation */}
          {(prevPost || nextPost) && (
            <nav
              aria-label="More posts"
              className="mt-12 grid sm:grid-cols-2 gap-4 border-t border-gray-100 pt-8"
            >
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group rounded-xl border border-gray-200 p-4 hover:border-blue-600 transition"
                >
                  <p className="text-xs text-gray-400 mb-1">← Previous</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group rounded-xl border border-gray-200 p-4 text-right hover:border-blue-600 transition"
                >
                  <p className="text-xs text-gray-400 mb-1">Next →</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </nav>
          )}

          {/* Related posts */}
          {related.length > 0 && (
            <section className="mt-16" aria-label="Related articles">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
                    aria-label={`Read: ${r.title}`}
                  >
                    <Image
                      src={r.image}
                      alt={r.imageAlt ?? r.title}
                      width={600}
                      height={300}
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="w-full h-[160px] object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="p-4">
                      <time dateTime={r.dateISO} className="text-xs text-gray-400">{r.date}</time>
                      <p className="text-sm font-bold text-slate-900 mt-1 leading-snug line-clamp-2 group-hover:text-blue-700 transition">
                        {r.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12" aria-label="Explore lead types">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Explore Lead Types</h2>
            <div className="flex flex-wrap gap-3">
              {productIndustries.slice(0, 6).map((i) => (
                <Link
                  key={i.slug}
                  href={`/industry/${i.slug}/sales`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-violet-300 hover:text-violet-700 transition"
                >
                  {i.name} Leads
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            className="mt-16 rounded-2xl bg-[#1c2d56] p-8 text-center"
            aria-label="Get pay-per-call leads from Top Dog Leads"
          >
            <h2 className="text-2xl font-extrabold text-white">
              Ready to Get High-Quality Leads?
            </h2>
            <p className="text-blue-200 mt-2 text-sm">
              Top Dog Leads delivers verified pay-per-call leads. You only pay when the phone rings.
            </p>
            <Link
              href="/contact"
              aria-label="Try Top Dog Leads — start receiving pay-per-call leads"
              className="mt-6 inline-block bg-white text-[#1c2d56] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Try Top Dog Leads
            </Link>
          </section>
        </div>

        {/* Desktop sidebar TOC — sticky */}
        {headings.length > 2 && (
          <aside className="hidden lg:block sticky top-24">
            <nav aria-label="Table of contents" className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
              <p className="text-sm font-extrabold text-slate-900 mb-3">In this article</p>
              <ul className="space-y-2">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm text-gray-600 hover:text-blue-700 block leading-snug"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </main>
  );
}

function readingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}