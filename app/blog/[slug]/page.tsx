import { blogs } from "@/data/blogs";
import Image from "next/image";
import { Facebook, X, Linkedin, Video } from "lucide-react";

import Link from "next/link";
import { notFound } from "next/navigation";
import CommentForm from "./CommentForm";
function Sidebar() {
  const recent = blogs.slice(0, 3);

  const categories = [
    { name: "Insurance", count: blogs.length },
    { name: "Marketing", count: 0 },
    { name: "Digital", count: 0 },
    { name: "Sales", count: 0 },
  ];

  const tags = ["Insurance", "Inbound Calls", "Leads", "Coverage", "Protection"];

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

      {/* Recent Post */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Recent Post</h3>

        <div className="mt-4 space-y-4">
          {recent.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="grid grid-cols-[54px_1fr] gap-3 items-center"
            >
              <Image
                src={b.image}
                alt=""
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
            <div key={c.name} className="flex items-center justify-between text-sm">
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
          <a href="https://facebook.com" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">
            <Facebook size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">
            <X size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">
            <Linkedin size={18} />
          </a>
          <a href="https://vimeo.com" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">
            <Video size={18} />
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">Newsletter</h3>
        <p className="text-xs text-gray-500 mt-2">
          Register Now To Get Latest Updates On Promotions &amp; Coupons.
        </p>

        <input
          placeholder="Type your email..."
          className="mt-4 w-full rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm outline-none"
        />

        <button
          className="mt-3 w-full rounded-xl bg-[#1c2d56] py-3 text-sm font-bold text-white hover:bg-[#1c2d56]/90"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </aside>
  );
}


export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <section className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.55fr_0.85fr] gap-10 items-start">

        {/* LEFT: Article */}
        <article className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {blog.title}
          </h1>
{/* Caption */}
          <div className="text-md text-gray-700 font-medium space-y-2">
            {blog.caption.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          

          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={650}
            className="w-full rounded-2xl object-cover"
            priority
          />

          
<div className="text-sm text-gray-500">
            {blog.date} • {blog.author}
          </div>
          {/* Full Content */}
          <div className="prose max-w-none whitespace-pre-line text-gray-700 prose-headings:text-slate-900">
            {blog.content}
          </div>

          {/* Comments */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-xl font-extrabold text-slate-900">Leave a Comment</h3>
            <p className="text-sm text-gray-600 mt-2">
              Your email address will not be published. Required fields are marked *
            </p>
            <div className="mt-4">
              <CommentForm slug={slug} />
            </div>
          </div>
        </article>

        {/* RIGHT: Sidebar */}
        <Sidebar />
      </div>
    </section>
  );
}
