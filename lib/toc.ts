export type TocHeading = {
  id: string;
  text: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "") // strip any nested tags (e.g. <mark>)
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Finds every <h2>...</h2> in the raw HTML, gives each one a unique id
 * (so we can link to it), and returns the modified HTML plus a flat
 * list of { id, text } for rendering a table of contents.
 */
export function extractToc(html: string): {
  contentWithIds: string;
  headings: TocHeading[];
} {
  const headings: TocHeading[] = [];
  const seen = new Map<string, number>();

  const contentWithIds = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/g,
    (_match, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      let id = slugify(text) || "section";

      // de-dupe ids if two headings produce the same slug
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count > 0) id = `${id}-${count}`;

      headings.push({ id, text });

      // keep any existing attrs (e.g. className on <mark> wrappers), just add id
      const hasId = /\sid=/.test(attrs);
      const newAttrs = hasId ? attrs : `${attrs} id="${id}"`;

      return `<h2${newAttrs}>${inner}</h2>`;
    }
  );

  return { contentWithIds, headings };
}