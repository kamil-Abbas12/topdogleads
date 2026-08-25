import Link from "next/link";
import { manrope } from "@/lib/fonts";

export const metadata = {
  title: "Terms of Service | Top Dog Leads",
  description:
    "Read the Terms of Service governing your access to and use of topdoglead.com and Top Dog Leads LLC's lead generation and performance marketing services.",
  alternates: {
    canonical: "https://topdoglead.com/terms-of-service",
  },

  openGraph: {
  title: "Terms of Service | Top Dog Leads",
  description:
    "The terms and conditions governing the use of the Top Dog Leads website and services.",
  url: "https://topdoglead.com/terms-of-service",
  siteName: "Top Dog Leads",
  type: "website",
  images: [
    {
      url: "https://topdoglead.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Top Dog Leads",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "Terms of Service | Top Dog Leads",
  description:
    "The terms and conditions governing the use of the Top Dog Leads website and services.",
  images: ["https://topdoglead.com/og-image.jpg"],
},

  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "August 25, 2026";

export default function TermsOfServicePage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="w-full bg-[#1c2d56]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-xs sm:text-sm tracking-widest font-semibold uppercase text-white/90">
            Legal
          </p>

          <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight text-white">
            Terms of Service
          </h1>

          <p
            className={`${manrope.className} mt-5 max-w-2xl text-white/90 text-base sm:text-lg`}
          >
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="w-full">
        <div
          className={`${manrope.className} mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-gray-700 leading-relaxed`}
        >
          <div>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of topdoglead.com and its related industry subdomains
              (collectively, the &quot;Site&quot;), operated by Top Dog Leads LLC
              (&quot;Top Dog Leads,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By accessing or using the Site, submitting a
              form, or calling a number listed on the Site, you agree to be
              bound by these Terms. If you do not agree, do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              1. Description of Service
            </h2>

            <p className="mt-2">
              Top Dog Leads is a performance marketing and lead generation
              company. We connect consumers who submit inquiries or place calls
              through the Site with third-party advertisers, agents,
              contractors, or service providers (&quot;Advertisers&quot;) across
              various industries.
            </p>

            <p className="mt-2">
              Top Dog Leads does not itself provide insurance, financial,
              legal, medical, roofing, solar, contracting, or other professional
              services and is not a party to any transaction between you and an
              Advertiser.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              2. Eligibility
            </h2>

            <p className="mt-2">
              You must be at least 18 years old and legally able to enter into a
              binding agreement to use the Site or submit an inquiry. By using
              the Site, you represent that you meet these requirements and that
              all information you submit is accurate and belongs to you.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              3. Consent to Be Contacted
            </h2>

            <p className="mt-2">
              By submitting your information through a form on the Site or by
              calling a number displayed on the Site, you consent to be contacted
              by Top Dog Leads and/or the Advertiser(s) matched to your inquiry,
              subject to applicable law and any consent disclosures presented to
              you at the time of submission.
            </p>

            <p className="mt-2">
              Standard message and data rates may apply. Calls may be recorded or
              monitored for quality and compliance purposes. Additional
              information about how we handle personal information is available
              in our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-700 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              4. Acceptable Use
            </h2>

            <p className="mt-2">You agree not to:</p>

            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Submit false, fraudulent, or misleading information through any
                form on the Site.
              </li>
              <li>
                Use automated means, including bots or scrapers, to improperly
                access or submit data to the Site.
              </li>
              <li>
                Interfere with or disrupt the Site&apos;s functionality,
                security, or servers.
              </li>
              <li>
                Use the Site for any unlawful purpose or in violation of
                applicable laws or regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Site
                or related systems.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              5. No Guarantee of Results
            </h2>

            <p className="mt-2">
              Top Dog Leads facilitates connections between consumers and
              Advertisers but does not guarantee that you will receive a quote,
              offer, service, coverage, or any particular outcome. Any
              transaction or service you obtain is solely between you and the
              applicable Advertiser.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              6. Intellectual Property
            </h2>

            <p className="mt-2">
              All content on the Site, including text, graphics, logos, designs,
              and software, is owned by or licensed to Top Dog Leads and is
              protected by applicable intellectual property laws. You may not
              copy, reproduce, distribute, or create derivative works from any
              part of the Site without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              7. Third-Party Links and Services
            </h2>

            <p className="mt-2">
              The Site may contain links to or integrate with third-party
              websites, advertisers, analytics providers, and other services.
              We do not control and are not responsible for the content,
              policies, practices, or services of third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              8. Disclaimers
            </h2>

            <p className="mt-2">
              THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND
              &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, TO THE FULLEST EXTENT PERMITTED BY LAW.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              9. Limitation of Liability
            </h2>

            <p className="mt-2">
              TO THE FULLEST EXTENT PERMITTED BY LAW, TOP DOG LEADS SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE OR YOUR
              INTERACTION WITH ANY ADVERTISER OR THIRD PARTY.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              10. Indemnification
            </h2>

            <p className="mt-2">
              You agree to indemnify and hold harmless Top Dog Leads, its
              officers, employees, and affiliates from claims, damages,
              liabilities, and reasonable expenses arising from your use of the
              Site, your violation of these Terms, or your violation of the
              rights of another party.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              11. Governing Law
            </h2>

            <p className="mt-2">
              These Terms shall be governed by and interpreted in accordance with
              applicable laws, without regard to conflict-of-law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              12. Changes to These Terms
            </h2>

            <p className="mt-2">
              We may revise these Terms of Service at any time by updating this
              page. Changes become effective when posted. Your continued use of
              the Site after changes are posted constitutes your acceptance of
              the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              13. Contact Us
            </h2>

            <p className="mt-2">
              Top Dog Leads LLC
              <br />
              5830 E 2nd St
              <br />
              Pompano, Florida 82609, USA
              <br />
              Email:{" "}
              <a
                href="mailto:support@topdoglead.com"
                className="text-blue-700 underline"
              >
                support@topdoglead.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+16784628013"
                className="text-blue-700 underline"
              >
                +1 (678) 462-8013
              </a>
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/privacy-policy"
              className="inline-flex justify-center rounded-full bg-[#1c2d56] px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              View Privacy Policy
            </Link>

            <Link
              href="/"
              className="inline-flex justify-center rounded-full border border-blue-600 px-6 py-3 text-blue-700 font-semibold hover:bg-[#1c2d56] hover:text-white transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}