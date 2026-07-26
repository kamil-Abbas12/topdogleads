import type { Metadata } from "next";
import ContactSplit from "./ContactSplit";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Top Dog Leads to discuss final expense, Medicare, auto, home, roofing, pest control, and solar lead generation for your business.",
  openGraph: {
    title: "Contact Top Dog Leads",
    description:
      "Reach out to discuss your lead generation needs across final expense, Medicare, auto, home, roofing, pest control, and solar.",
    url: "https://topdoglead.com/contact",
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
    title: "Contact Top Dog Leads",
    description: "Get in touch to discuss your lead generation needs.",
    images: ["/logo.png"],
  },
};

export default function ContactPage() {
  return <ContactSplit />;
}