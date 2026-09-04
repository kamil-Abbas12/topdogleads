import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // ── Genuinely non-public / no redirect needed ──
          "/api/",
          "/wp-admin/",
          "/wp-json/",
          "/wp-content/",
          "/wp-includes/",
          "/shop/add-to-cart*", // cart action URL, never worth crawling

          // ── REMOVED — these now have 301s in next.config.ts and must
          // ── stay crawlable so Googlebot can discover the redirect:
          // "/mva-leads-page/" → /industry/motor-vehicle-accident
          // "/team/"           → /about
          // "/product/"        → /industry/* or /solution/pay-per-call
          // "/product-category/" → /services
          // "/shop/"           → /services
          // "/home-*/" variants → all now redirect to /
          // "/our-products/", "/portfolio/", "/portfolio-category/",
          // "/portfolio-tag/", "/photo-gallery/", "/tabs/", "/wishlist/",
          // "/smm-services/", "/ppc-services/", "/contact-us/",
          // "/about-us/", "/feed/"
        ],
      },
    ],
    sitemap: "https://topdoglead.com/sitemap.xml",
  };
}