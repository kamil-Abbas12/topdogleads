import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Facebook, Twitter, Linkedin, Video } from "lucide-react";

// ✅ Rich, keyword-targeted metadata for the blog index page
export const metadata: Metadata = {
  title: "Leads Generation Blog — Insurance & Pay-Per-Call Marketing Insights",
  description:
    "Read expert articles on insurance leads generation, pay-per-call marketing, and business growth strategies from Top Dog Leads.",
  openGraph: {
    title: "Leads Generation Blog | Top Dog Leads",
    description:
      "Expert tips on pay-per-call leads, insurance marketing, and scalable business growth.",
    url: "https://topdoglead.com/blog",
    siteName: "Top Dog Leads",
    type: "website",
  },
  alternates: {
    canonical: "https://topdoglead.com/blog",
  },
};

const PAGE_SIZE = 4;

function Sidebar() {
  const recent = blogs.slice(0, 3);
  const categories = [
    { name: "Auto Insurance", count: blogs.filter((b) => b.category === "Auto Insurance").length },
    { name: "Marketing", count: blogs.filter((b) => b.category === "Marketing").length },
    { name: "Digital", count: blogs.filter((b) => b.category === "Digital").length },
    { name: "Sales", count: blogs.filter((b) => b.category === "Sales").length },
  ];
  const tags = ["Insurance", "Inbound Calls", "Leads", "Protection", "Coverage"];

  return (
    <aside aria-label="Blog sidebar — recent posts, categories, and tags">
      <div className="space-y-6">
        {/* Search */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
            <input
              id="blog-search"
              placeholder="Type Something..."
              className="w-full rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm outline-none"
            />
            <button
              className="h-11 w-11 rounded-xl bg-[#1c2d56] text-white font-bold hover:bg-[#1c2d56]/90"
              type="button"
              aria-label="Search blog posts"
            >
              ⌕
            </button>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
          <h2 className="text-base font-extrabold text-slate-900">Recent Posts</h2>
          <nav aria-label="Recent blog posts" className="mt-4 space-y-4">
            {recent.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${encodeURIComponent(b.slug)}`}
                className="grid grid-cols-[54px_1fr] gap-3 items-center"
                aria-label={`Read: ${b.title}`}
              >
                <Image
                  src={b.image}
                  alt={b.imageAlt ?? b.title}
                  width={108}
                  height={108}
                  className="h-[54px] w-[54px] rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                    {b.title}
                  </p>
                  <time dateTime={b.dateISO} className="text-xs text-gray-500 mt-1 block">
                    {b.date}
                  </time>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Categories */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
          <h2 className="text-base font-extrabold text-slate-900">Categories</h2>
          <nav aria-label="Blog categories" className="mt-4 space-y-3">
            {categories.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{c.name}</span>
                <span className="min-w-8 text-center rounded-full bg-white border border-gray-200 px-2 py-1 text-xs text-gray-600">
                  {String(c.count).padStart(2, "0")}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Tags */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
          <h2 className="text-base font-extrabold text-slate-900">Tags</h2>
          {/* ✅ Tags as links — each one is a keyword crawlable by Google */}
          <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Blog topic tags">
            {tags.map((t) => (
              <span
                key={t}
                role="listitem"
                className="rounded-lg bg-white border border-gray-200 px-3 py-1 text-xs text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
          <h2 className="text-base font-extrabold text-slate-900">Follow Us</h2>
          <div className="mt-4 flex gap-2">
            <a
              href="https://www.facebook.com/TopDogLeadsLLC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Facebook"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Twitter"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              <Twitter size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/top-dog-leads-llc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on LinkedIn"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top Dog Leads on Vimeo"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              <Video size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
          <h2 className="text-base font-extrabold text-slate-900">Newsletter</h2>
          <p className="text-xs text-gray-500 mt-2">
            Get the latest lead generation tips and marketing insights from Top Dog Leads.
          </p>
          <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Type your email..."
            className="mt-4 w-full rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm outline-none"
          />
          <button
            className="mt-3 w-full rounded-xl bg-[#1c2d56] hover:bg-[#1c2d56]/90 py-3 text-sm font-bold text-white"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  );
}

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  return (
    <nav aria-label="Blog pagination" className="flex items-center gap-3 justify-center pt-8">
      <Link
        href={`/blog?page=${Math.max(1, page - 1)}`}
        aria-label="Go to previous page"
        className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
          page <= 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
        }`}
      >
        Prev
      </Link>

      <div className="text-sm text-gray-600">
        Page <span className="font-bold text-slate-900">{page}</span> of{" "}
        <span className="font-bold text-slate-900">{totalPages}</span>
      </div>

      <Link
        href={`/blog?page=${Math.min(totalPages, page + 1)}`}
        aria-label="Go to next page"
        className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
          page >= totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
        }`}
      >
        Next
      </Link>
    </nav>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const resolvedSearchParams = await searchParams;
  const page = Math.max(1, Number(resolvedSearchParams?.page ?? "1") || 1);
  const totalPages = Math.max(1, Math.ceil(blogs.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const items = blogs.slice(start, start + PAGE_SIZE);

  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* ✅ Page-level H1 — previously missing entirely */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Lead Generation Blog
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Expert insights on pay-per-call marketing, insurance leads, and business growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.55fr_0.85fr] gap-10 items-start">
        {/* LEFT — Article list */}
        <div className="space-y-12">
          {items.map((blog) => {
            const href = `/blog/${encodeURIComponent(blog.slug)}`;

            return (
              <article
                key={blog.slug}
                className="space-y-4"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* ✅ Schema: image */}
                <Link href={href} className="block" aria-label={`Read: ${blog.title}`}>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt ?? blog.title}
                      width={1200}
                      height={650}
                      className="w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover"
                      itemProp="image"
                    />
                  </div>
                </Link>

                {/* ✅ Schema: datePublished + author */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <time dateTime={blog.dateISO} itemProp="datePublished">{blog.date}</time>
                  <span aria-hidden="true">•</span>
                  <span itemProp="author">{blog.author}</span>
                  <span aria-hidden="true">•</span>
                  <span>00 Comments</span>
                </div>

                {/* ✅ Schema: headline */}
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight"
                  itemProp="headline"
                >
                  <Link href={href}>{blog.title}</Link>
                </h2>

                {/* ✅ Schema: description */}
                <p
                  className="text-gray-600 leading-relaxed line-clamp-2"
                  itemProp="description"
                >
                  {blog.caption?.[0]}
                </p>

                <Link
                  href={href}
                  aria-label={`Read full article: ${blog.title}`}
                  className="inline-flex items-center justify-center rounded-md bg-[#1c2d56] px-6 py-3 text-sm font-bold text-white hover:bg-[#1c2d56]/90"
                >
                  Read More
                </Link>
              </article>
            );
          })}

          <Pagination page={page} totalPages={totalPages} />
        </div>

        {/* RIGHT */}
        <Sidebar />
      </div>
    </main>
  );
}