// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";

// ✅ Dynamic per-post metadata — each blog gets its own title, description, and OG image
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: blog.metaTitle ?? `${blog.title} | Top Dog Leads`,
    description: blog.metaDescription ?? blog.caption?.[0],
    openGraph: {
      title: blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.caption?.[0],
      url: `https://topdoglead.com/blog/${blog.slug}`,
      siteName: "Top Dog Leads",
      images: [
        {
          url: blog.image,
          alt: blog.imageAlt ?? blog.title,
        },
      ],
      type: "article",
      publishedTime: blog.dateISO,
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

// ✅ Static generation — tells Next.js all valid slugs at build time
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  // Related posts (exclude current)
  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* ✅ Breadcrumb — helps Google understand site structure */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500">
          <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <Link href="/" itemProp="item" className="hover:text-blue-600">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span aria-hidden="true">/</span>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <Link href="/blog" itemProp="item" className="hover:text-blue-600">
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <span aria-hidden="true">/</span>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <span itemProp="name" className="text-gray-700 line-clamp-1">{blog.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ✅ Article schema — wraps the full post */}
        <article itemScope itemType="https://schema.org/BlogPosting">

          {/* ✅ H1 — one per page, keyword-rich */}
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4"
            itemProp="headline"
          >
            {blog.title}
          </h1>

          {/* ✅ Meta row with schema datePublished + author */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
            <time dateTime={blog.dateISO} itemProp="datePublished">{blog.date}</time>
            <span aria-hidden="true">•</span>
            <span itemProp="author" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">{blog.author}</span>
            </span>
            {blog.category && (
              <>
                <span aria-hidden="true">•</span>
                <span itemProp="articleSection">{blog.category}</span>
              </>
            )}
          </div>

          {/* ✅ Hero image with keyword alt */}
          <div className="rounded-2xl overflow-hidden mb-8">
            <Image
              src={blog.image}
              alt={blog.imageAlt ?? blog.title}
              width={1200}
              height={650}
              className="w-full h-[280px] sm:h-[380px] object-cover"
              priority
              itemProp="image"
            />
          </div>

          {/* ✅ Tags — keyword signals for the post topic */}
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

          {/* ✅ Article body */}
          <div
            className="prose prose-slate max-w-none"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

        </article>

        {/* ✅ Related posts — internal links boost crawl depth */}
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

        {/* ✅ CTA — internal link to conversion page */}
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
    </main>
  );
}