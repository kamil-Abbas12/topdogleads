import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // ── Keep blocked: no redirect exists, genuinely dead / non-public ──
          "/api/",
          "/wp-admin/",
          "/wp-json/",
          "/wp-content/",
          "/wp-includes/",
          "/mva-leads-page/",   // no redirect defined — add one, or leave blocked
          "/team/",             // no redirect defined — add one, or leave blocked
          "/shop/add-to-cart*", // cart action URL, never worth crawling

          // ── REMOVED — these all now have 301s in next.config.js and     ──
          // ── must stay crawlable so Googlebot can discover the redirect: ──
          // "/product/"            → redirects to /industry/* or /solution/pay-per-call
          // "/product-category/"   → (no redirect defined yet — see note below)
          // "/shop/"               → (no redirect defined yet — see note below)
          // "/home-*/" variants    → only /home-10 has a redirect; others don't (see note)
          // "/our-products/"       → redirects to /solution/pay-per-call
          // "/portfolio/"          → redirects to /about
          // "/portfolio-category/" → redirects to /
          // "/portfolio-tag/"      → redirects to /
          // "/photo-gallery/"      → redirects to /
          // "/tabs/"               → redirects to /
          // "/wishlist/"           → redirects to /
          // "/smm-services/"       → redirects to /services/inbound-call-marketing
          // "/ppc-services/"       → redirects to /services/inbound-call-marketing
          // "/contact-us/"         → redirects to /contact
          // "/about-us/"           → redirects to /about
          // "/feed/", "/feed"      → redirects to /
        ],
      },
    ],
    sitemap: "https://topdoglead.com/sitemap.xml",
  };
}