/**
 * Derives a plain-text excerpt from a blog post's rich HTML `content`.
 * Used on listing pages (blog index, homepage teaser) instead of the
 * short one-line `caption`, so listing pages carry more real text
 * relative to markup (improves text-to-HTML ratio for SEO).
 */
export function getExcerpt(html: string, maxLength = 220): string {
  const text = html
    .replace(/<[^>]+>/g, " ") // strip tags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;

  // Cut at the last word boundary before maxLength, then trim trailing punctuation.
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const clean = (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated).replace(
    /[.,;:\-–—]+$/,
    ""
  );

  return `${clean}…`;
}