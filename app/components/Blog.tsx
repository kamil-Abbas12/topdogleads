"use client";

import { blogs } from "@/data/blogs";
import { manrope } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="w-full bg-white px-5 py-16 md:py-20 xl:px-20">
      
      {/* HEADER */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-blue-900 font-semibold text-lg tracking-wide uppercase">
          Our Blog
        </h2>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
          Insights to Help You <br /> Grow Your Business
        </h1>

        <p className={`${manrope.className} text-gray-500 max-w-3xl text-center text-sm sm:text-base md:text-lg leading-relaxed mt-4`}>
          Explore expert tips, marketing strategies, and industry insights
          designed to help your business generate more leads.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[230px] overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">

              {/* META */}
              <div className="flex gap-3 mb-3 text-sm">
                <span className="bg-blue-900 text-white px-3 py-1 rounded-full">
                  {blog.author}
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  {blog.date}
                </span>
              </div>

              {/* TITLE (fixed height for alignment) */}
              <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-900 transition min-h-[56px]">
                {blog.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 mt-3 text-sm leading-relaxed line-clamp-3">
                {blog.caption[0]}
              </p>

              {/* READ MORE */}
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-auto pt-6 text-blue-900 font-semibold hover:underline w-fit"
              >
                Read More →
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;