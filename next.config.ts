import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
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
