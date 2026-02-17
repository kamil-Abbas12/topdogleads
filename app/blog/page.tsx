import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Facebook, Twitter, Linkedin, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Top Dog Leads blog",
};

const PAGE_SIZE = 4;

function Sidebar() {
  const recent = blogs.slice(0, 3);
  const categories = [
    { name: "Auto Insurance", count: blogs.length },
    { name: "Marketing", count: 0 },
    { name: "Digital", count: 0 },
    { name: "Sales", count: 0 },
  ];
  const tags = ["Insurance", "Inbound Calls", "Leads", "Protection", "Coverage"];

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <div className="flex items-center gap-3">
          <input
            placeholder="Type Something..."
            className="w-full rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm outline-none"
          />
          <button
            className="h-11 w-11 rounded-xl bg-[#1c2d56] text-white font-bold hover:bg-[#1c2d56]/90"
            type="button"
            aria-label="Search"
          >
            ⌕
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Recent Post</h3>
        <div className="mt-4 space-y-4">
          {recent.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${encodeURIComponent(b.slug)}`}
              className="grid grid-cols-[54px_1fr] gap-3 items-center"
            >
              <Image
                src={b.image}
                alt={b.title}
                width={108}
                height={108}
                className="h-[54px] w-[54px] rounded-xl object-cover"
              />
              <div>
                <div className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                  {b.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">{b.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Categories</h3>
        <div className="mt-4 space-y-3">
          {categories.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-700">{c.name}</span>
              <span className="min-w-8 text-center rounded-full bg-white border border-gray-200 px-2 py-1 text-xs text-gray-600">
                {String(c.count).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Tags</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-white border border-gray-200 px-3 py-1 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Social</h3>
        <div className="mt-4 flex gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            <Video size={18} />
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Newsletter</h3>
        <p className="text-xs text-gray-500 mt-2">
          Register Now To Get Latest Updates On Promotions & Coupons.
        </p>
        <input
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
    </aside>
  );
}

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  return (
    <div className="flex items-center gap-3 justify-center pt-8">
      <Link
        href={`/blog?page=${Math.max(1, page - 1)}`}
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
        className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
          page >= totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const resolvedSearchParams = await searchParams; // unwrap the promise
  const page = Math.max(1, Number(resolvedSearchParams?.page ?? "1") || 1);


  const totalPages = Math.max(1, Math.ceil(blogs.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const items = blogs.slice(start, start + PAGE_SIZE);

  return (
    <section className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.55fr_0.85fr] gap-10 items-start">
        {/* LEFT */}
        <div className="space-y-12">
          {items.map((blog) => {
            const href = `/blog/${encodeURIComponent(blog.slug)}`;

            return (
              <article key={blog.slug} className="space-y-4">
                <Link href={href} className="block">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={1200}
                      height={650}
                      className="w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover"
                    />
                  </div>
                </Link>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>00 Comments</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  <Link href={href}>{blog.title}</Link>
                </h2>

                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {blog.caption?.[0]}
                </p>

                <Link
                  href={href}
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
    </section>
  );
}
