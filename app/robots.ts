import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // Only block API routes
        // Remove /industry/*/sales?* — you want these pages crawled
      },
    ],
    sitemap: "https://topdoglead.com/sitemap.xml",
    host: "https://topdoglead.com",
  };
}