import type { NextConfig } from "next";

const nextConfig: NextConfig = {
async redirects() {
    return [
      // ── Old WordPress pages ──────────────────────────────────────
      { source: '/portfolio/feed', destination: '/', permanent: true },
      { source: '/portfolio', destination: '/about', permanent: true },
      { source: '/our-products', destination: '/solution/pay-per-call', permanent: true },
      { source: '/photo-gallery', destination: '/', permanent: true },
      { source: '/tabs', destination: '/', permanent: true },
      { source: '/home-10', destination: '/', permanent: true },
      { source: '/wishlist', destination: '/', permanent: true },
      { source: '/ppc-services', destination: '/services/inbound-call-marketing', permanent: true },
      { source: '/smm-services', destination: '/services/inbound-call-marketing', permanent: true },

      // ── WordPress portfolio taxonomies ───────────────────────────
      { source: '/portfolio-category/:slug*', destination: '/', permanent: true },
      { source: '/portfolio-tag/:slug*', destination: '/', permanent: true },

      // ── WordPress date archives ──────────────────────────────────
      { source: '/:year(\\d{4})/:month(\\d{2})', destination: '/blog', permanent: true },
      { source: '/:year(\\d{4})/:month', destination: '/blog', permanent: true },

      // ── WordPress product pages ──────────────────────────────────
      { source: '/product/mva-premium-bundle/feed/', destination: '/industry/motor-vehicle-accident', permanent: true },
      { source: '/product/mva-premium-bundle', destination: '/industry/motor-vehicle-accident', permanent: true },
      { source: '/product/:slug*', destination: '/solution/pay-per-call', permanent: true },
// Add these specific ones:
{ source: '/product/50-medicare-leads', destination: '/industry/medicare-insurance', permanent: true },
{ source: '/product/medicare-leads', destination: '/industry/medicare-insurance', permanent: true },
{ source: '/product/final-expense-leads', destination: '/industry/final-expense', permanent: true },
{ source: '/product/auto-insurance-leads', destination: '/industry/auto-insurance', permanent: true },
{ source: '/product/solar-leads', destination: '/industry/solar', permanent: true },
{ source: '/product/:slug*', destination: '/solution/pay-per-call', permanent: true },

      // ── WordPress feed URLs (fixes 308 validation failures) ──────
      { source: '/portfolio-category/:slug*/feed/', destination: '/', permanent: true },
      { source: '/portfolio-category/:slug*/feed', destination: '/', permanent: true },
      { source: '/portfolio-tag/:slug*/feed/', destination: '/', permanent: true },
      { source: '/portfolio-tag/:slug*/feed', destination: '/', permanent: true },
      { source: '/feed/', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },

      // ── WordPress misc pages from GSC ────────────────────────────
      { source: '/smm-services', destination: '/services/inbound-call-marketing', permanent: true },

      // ── Old /service/ path (missing the "s") ────────────────────
      { source: '/service/:slug*', destination: '/services/:slug*', permanent: true },

      // ── Old service slugs that don't exist in new site ───────────
      { source: '/services/auto-insurance-leads', destination: '/industry/auto-insurance', permanent: true },
      { source: '/services/solar-leads', destination: '/industry/solar', permanent: true },
      { source: '/services/medicare-leads', destination: '/industry/medicare-insurance', permanent: true },
      { source: '/services/final-expense-leads', destination: '/industry/final-expense', permanent: true },
      { source: '/services/internet-leads', destination: '/services/inbound-call-marketing', permanent: true },
      { source: '/services/debt-relief-leads', destination: '/services/insurances-leads', permanent: true },
      { source: '/services/aged-leads', destination: '/services/live-transfer-leads', permanent: true },
      { source: '/services/insurance-leads', destination: '/services/insurances-leads', permanent: true },

      // ── Missing pages ────────────────────────────────────────────
      { source: '/pricing', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/blog/:slug*/feed/', destination: '/blog/:slug*', permanent: true },

      // ── Duplicate/unwanted industry pages (not part of site, CEO doesn't want them) ──
      { source: '/industry/health-insurance', destination: '/industry/home-insurance', permanent: true },
      { source: '/industry/life-insurance', destination: '/industry/final-expense', permanent: true },
    ];
  },
  images: {
        qualities: [75, 90],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "topdoglead.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
   experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;