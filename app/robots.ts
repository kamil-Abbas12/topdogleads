import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/industry/*/sales?*"],
      },
    ],
    sitemap: "https://topdoglead.com/sitemap.xml",
    host: "https://topdoglead.com",
  };
}