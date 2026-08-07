import { cache } from "react";
import { blogs } from "@/data/blogs";

export const PAGE_SIZE = 4;

// cache() dedupes/memoizes this per-request AND lets it be reused
// across generateMetadata + the page component without recomputing.
export const getSortedBlogs = cache(() => {
  return [...blogs].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
});

export function getPagedBlogs(page: number) {
  const sortedBlogs = getSortedBlogs();
  const totalPages = Math.max(1, Math.ceil(sortedBlogs.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const items = sortedBlogs.slice(start, start + PAGE_SIZE);
  return { sortedBlogs, items, totalPages, page: safePage };
}