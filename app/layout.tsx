
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://topdoglead.com"),

  title: {
    default: "Top Dog Leads | Leads Generation & Digital Marketing Agency",
    template: "%s | Top Dog Leads",
  },

  description:
    "Top Dog Leads is a digital marketing and lead generation agency helping businesses get high-quality leads through SEO, paid ads, and growth strategies.",

  keywords: [
    "Top Dog Leads ",
    "llc",
    "leads generation agency",
    "digital marketing agency",
    "SEO services",
    "online leads generation",
    "marketing agency USA",
  ],

  authors: [{ name: "Top Dog Leads" }],
  creator: "Top Dog Leads",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Top Dog Leads | Digital Marketing & Leads Generation",
    description:
      "We help businesses generate high-quality leads using SEO, ads, and marketing strategies.",
    url: "https://topdoglead.com",
    siteName: "Top Dog Leads",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Top Dog Lead Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Dog Leads",
    description: "High-quality leads generation for businesses.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ THIS WAS MISSING — Next.js App Router requires a default export
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}