import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // ── Block old WordPress admin & config ──────────────────
          "/api/",
          "/wp-admin/",
          "/wp-json/",
          "/wp-content/",
          "/wp-includes/",
          
          // ── Block old WordPress product structure ───────────────
          "/product/",
          "/product-category/",
          "/shop/",
          
          // ── Block old WordPress page templates ──────────────────
          "/home-*/",
          "/home-agency/",
          "/home-leads/",
          "/home-03/",
          "/home-05/",
          "/home-07/",
          "/home-10/",
          
          // ── Block old content & navigation ────────────────────
          "/our-products/",
          "/portfolio/",
          "/portfolio-category/",
          "/portfolio-tag/",
          "/photo-gallery/",
          "/tabs/",
          "/wishlist/",
          "/mva-leads-page/",
          "/team/",
          "/smm-services/",
          "/ppc-services/",
          
          // ── Block old form & checkout pages ─────────────────
          "/shop/add-to-cart*",
          "/contact-us/",
          "/about-us/",
          
          // ── Block WordPress feed URLs ──────────────────────
          "/feed/",
          "/feed",
        ],
      },
    ],
    sitemap: "https://topdoglead.com/sitemap.xml",
    host: "https://topdoglead.com",
  };
}