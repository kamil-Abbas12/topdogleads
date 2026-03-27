import type { Metadata } from "next";
import "./globals.css"; // adjust path if needed
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://topdoglead.com"),

  title: {
    default: "Top Dog Lead | Lead Generation & Digital Marketing Agency",
    template: "%s | Top Dog Lead",
  },

  description:
    "Top Dog Lead is a digital marketing and lead generation agency helping businesses get high-quality leads through SEO, paid ads, and growth strategies.",

  keywords: [
    "Top Dog Lead",
    "lead generation agency",
    "digital marketing agency",
    "SEO services",
    "online lead generation",
    "marketing agency Pakistan",
  ],

  authors: [{ name: "Top Dog Lead" }],
  creator: "Top Dog Lead",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Top Dog Lead | Digital Marketing & Lead Generation",
    description:
      "We help businesses generate high-quality leads using SEO, ads, and marketing strategies.",
    url: "https://topdoglead.com",
    siteName: "Top Dog Lead",
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
    title: "Top Dog Lead",
    description: "High-quality lead generation for businesses.",
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