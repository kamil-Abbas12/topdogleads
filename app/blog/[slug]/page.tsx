import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CommentForm from "./CommentForm";

function Sidebar() {
  const recent = blogs.slice(0, 3);

  return (
    <aside className="space-y-6">
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

      {/* Minimal versions of the remaining widgets (to match pic 2 stack visually) */}
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
          className="mt-3 w-full rounded-xl bg-[#1c2d56] hover:bg-[#1c2d56]/90 
          py-3 text-sm font-bold text-white "
          type="button"
        >
          Subscribe
        </button>
      </div>
    </aside>
  );
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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

          <div className="text-sm text-gray-500">
            {blog.date} • {blog.author}
          </div>

          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={650}
            className="w-full rounded-2xl object-cover"
            priority
          />

          {/* Seomy-like quote block (since your data doesn't include quote fields yet) */}
          <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6">
            <p className="text-slate-900 font-medium leading-relaxed">
              “Protection should go beyond the policy. It should feel like strength in stillness.”
            </p>
            <p className="text-sm text-gray-600 mt-3">By: {blog.author}</p>
          </div>

          <div className="prose max-w-none whitespace-pre-line text-gray-700 prose-headings:text-slate-900">
            {blog.content}
          </div>

          {/* Recommended reading block (static for now; add to your data later if you want dynamic) */}
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Recommended Reading
            </h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>
                <Link className="text-[#1c2d56] hover:underline" href="/blog">
                  More articles from Top Dog Leads
                </Link>
              </li>
            </ul>
          </div>

          {/* Comments */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-xl font-extrabold text-slate-900">
              Leave a Comment
            </h3>
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
