import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsentBanner from "./components/ConsentBanner";
import Script from "next/script";
import "./globals.css";
import ChunkErrorHandler from "./chunk-error-handler";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Consent Mode v2 defaults — MUST run before GA4/AdSense scripts */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });

            (function() {
              var stored = document.cookie.match(/tdl_consent=(granted|denied)/);
              if (stored && stored[1] === 'granted') {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  analytics_storage: 'granted'
                });
              }
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.requestNonPersonalizedAds = (stored && stored[1] === 'granted') ? 0 : 1;
            })();
          `}
        </Script>

        <ChunkErrorHandler />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />

        {/* Google AdSense */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YCKFKX373P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-YCKFKX373P');
          `}
        </Script>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="JkhARxLMNh+CptEmB0KYzw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}