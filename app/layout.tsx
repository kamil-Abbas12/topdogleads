import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // choose weights you need
  variable: "--font-roboto",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Dog Leads | Digital Marketing Agency",
  description:
    "Top Dog Leads helps businesses grow with high-quality digital leads, marketing, and web solutions.",
  keywords: ["Top Dog Leads", "Digital Marketing", "Lead Generation"],
  authors: [{ name: "Top Dog Leads" }],
  metadataBase: new URL("https://topdoglead.com"),
  openGraph: {
    title: "Top Dog Leads",
    description: "Grow your business with premium leads.",
    url: "https://topdoglead.com",
    siteName: "Top Dog Leads",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
       <body className={roboto.variable}>

          <Navbar/>

        {children}
        <Footer/>

      </body>
    </html>
  );
}
