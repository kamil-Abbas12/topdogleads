import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/service/:slug*', destination: '/services/:slug*', permanent: true },
      { source: '/pricing', destination: '/contact', permanent: true },

      // Old service slugs → new service pages
      { source: '/services/auto-insurance-leads', destination: '/industry/auto-insurance', permanent: true },
      { source: '/services/solar-leads', destination: '/industry/solar', permanent: true },
      { source: '/services/final-expense-leads', destination: '/industry/final-expense', permanent: true },
      { source: '/services/medicare-leads', destination: '/industry/medicare-insurance', permanent: true },
      { source: '/services/aged-leads', destination: '/services/live-transfer-leads', permanent: true },
      { source: '/services/debt-relief-leads', destination: '/services/insurances-leads', permanent: true },
      { source: '/services/internet-leads', destination: '/services/inbound-call-marketing', permanent: true },
      { source: '/services/insurance-leads', destination: '/services/insurances-leads', permanent: true },
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
    ],
  },
   experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
