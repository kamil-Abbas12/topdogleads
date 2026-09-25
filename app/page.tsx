import Hero from "./components/Hero";
import Simple from "./components/Simple";
import Work from "./components/Work";
import Visible from "./components/Visible";
import HelpSelector from "./components/HelpSelector";
import Grow from "./components/Grow";
import Happy from "./components/Happy";
import Customers from "./components/Customers";
import Blog from "./components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://topdoglead.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://topdoglead.com/#organization",
  name: "Top Dog Leads",
  alternateName: ["Top Dog Leads LLC", "TopDogLead", "Top Dog Lead"],
  url: "https://topdoglead.com",
  logo: "https://topdoglead.com/logo.png",
  telephone: "+1-678-462-8013",
  sameAs: [
    "https://www.facebook.com/TopDogLeadsLLC",
    "https://www.linkedin.com/company/top-dog-leads-llc/",
  ],
  description:
    "Top Dog Leads is a digital marketing and lead generation agency helping businesses get high-quality leads through SEO, paid ads, and growth strategies.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5830 E 2nd St",
    addressLocality: "Pompano Beach",
    addressRegion: "FL",
    postalCode: "33060",
    addressCountry: "US",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://topdoglead.com/#website",
  name: "Top Dog Leads",
  alternateName: ["Top Dog Leads LLC", "TopDogLead"],
  url: "https://topdoglead.com",
  publisher: { "@id": "https://topdoglead.com/#organization" },
};

export default function Home() {
  return (
  <>
  {/* STRUCTURED DATA FOR GOOGLE */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
  />
  <Hero/>
  <Simple/>
  <Work/>
  <Visible/>
  <HelpSelector/>
  <Grow/>
  <Happy/>
  <Blog/>
        <Customers/>

  </>
  );
}