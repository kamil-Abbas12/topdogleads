import Link from "next/link";
import { manrope } from "@/lib/fonts";

export const metadata = {
  title: "Privacy Policy | Top Dog Leads",
  description:
    "Read the Top Dog Leads privacy policy to learn how we collect, use, and protect your information across our pay per call lead generation services.",
  alternates: {
    canonical: "https://topdoglead.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Top Dog Leads",
    description:
      "How Top Dog Leads collects, uses, and protects your personal information.",
    url: "https://topdoglead.com/privacy-policy",
    siteName: "Top Dog Leads",
    type: "website",
    images: [
      {
        url: "https://topdoglead.com/og-image.jpg", // use your real OG image path
        width: 1200,
        height: 630,
        alt: "Top Dog Leads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Top Dog Leads",
    description:
      "How Top Dog Leads collects, uses, and protects your personal information.",
    images: ["https://topdoglead.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "August 25, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="w-full bg-[#1c2d56]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-xs sm:text-sm tracking-widest font-semibold uppercase text-white/90">
            Legal
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight text-white">
            Privacy Policy
          </h1>
          <p className={`${manrope.className} mt-5 max-w-2xl text-white/90 text-base sm:text-lg`}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="w-full">
        <div className={`${manrope.className} mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-gray-700 leading-relaxed`}>

          <div>
            <p>
              Top Dog Leads LLC (&quot;Top Dog Leads,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
              topdoglead.com and related industry subdomains (collectively, the &quot;Site&quot;). This
              Privacy Policy explains what information we collect, how we use it, and the choices you
              have. By using the Site, you agree to the practices described here. If you do not agree,
              please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">1. Information We Collect</h2>
            <h3 className="mt-4 font-semibold text-gray-900">a) Information You Provide</h3>
            <p className="mt-2">
              When you submit a form, request a quote, or call a number listed on the Site, we may
              collect information such as your name, phone number, email address, mailing address,
              ZIP code, and details relevant to the service you are inquiring about (for example, auto,
              home, final expense, Medicare, solar, roofing, pest control, or motor vehicle accident
              related information).
            </p>
            <h3 className="mt-4 font-semibold text-gray-900">b) Information Collected Automatically</h3>
            <p className="mt-2">
              We and our service providers automatically collect certain data when you visit the Site,
              including IP address, browser type, device information, pages viewed, referring URLs,
              and approximate location, using cookies and similar technologies.
            </p>
            <h3 className="mt-4 font-semibold text-gray-900">c) Call Data</h3>
            <p className="mt-2">
              If you call a phone number displayed on the Site, we (or our call-routing partners) may
              record and monitor the call for quality assurance, compliance, and lead-verification
              purposes, where permitted by law. Calls may be recorded; by calling, you consent to this
              recording to the extent permitted under applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">2. Consent to Contact (TCPA)</h2>
            <p className="mt-2">
              By submitting a form or providing your phone number on the Site, you expressly consent
              to be contacted by Top Dog Leads and/or its advertising and service partners at the
              phone number and email you provide, including by telephone call, SMS/text message, and
              autodialed or prerecorded means, even if your number is on a state or federal Do Not
              Call registry. Consent is not a condition of purchasing any goods or services. Message
              and data rates may apply, and you may opt out at any time as described in this policy.
            </p>
            <p className="mt-2">
              To help verify and document consent, the Site may use third-party consent-capture tools
              such as Jornaya and TrustedForm. These tools generate a token that records the fact that
              a form was submitted and certain technical details about that submission (such as IP
              address, timestamp, and page URL). This token is shared with the advertisers or service
              providers who ultimately receive your lead.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>To match you with, and route your inquiry or call to, relevant insurance agents, contractors, or service providers.</li>
              <li>To operate, maintain, and improve the Site and our marketing campaigns.</li>
              <li>To communicate with you about your inquiry, including by phone, text, or email.</li>
              <li>To detect, prevent, and investigate fraud, abuse, or invalid leads.</li>
              <li>To comply with legal obligations and enforce our agreements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">4. How We Share Information</h2>
            <p className="mt-2">We may share your information with:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold">Advertisers and buyers</span> — the insurance carriers,
                agents, contractors, or other businesses who purchase or receive your lead or call
                (for example, through call-routing platforms such as Ringba) in the industry you
                inquired about.
              </li>
              <li>
                <span className="font-semibold">Service providers</span> — vendors who help us run the
                Site and our campaigns, including analytics providers, hosting providers, and
                consent-verification tools (e.g., Google Analytics, Ahrefs, Jornaya/TrustedForm).
              </li>
              <li>
                <span className="font-semibold">Legal and safety reasons</span> — where required to
                comply with law, respond to legal process, or protect the rights, property, or safety
                of Top Dog Leads, our users, or others.
              </li>
              <li>
                <span className="font-semibold">Business transfers</span> — in connection with a
                merger, acquisition, or sale of assets.
              </li>
            </ul>
            <p className="mt-2">
              We do not sell your personal information to third parties for their own unrelated
              marketing purposes outside of the pay-per-call/lead matching relationship described
              above.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">5. Cookies &amp; Tracking Technologies</h2>
            <p className="mt-2">
              The Site uses cookies and similar technologies, including:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><span className="font-semibold">Google Analytics (GA4)</span> — to understand how visitors use the Site.</li>
              <li><span className="font-semibold">Google AdSense</span> — to serve advertisements, which may use cookies to show ads based on your visits to this and other websites.</li>
              <li><span className="font-semibold">Ahrefs Analytics</span> — for website traffic and performance analysis.</li>
            </ul>
            <p className="mt-2">
              You can control cookies through your browser settings. Disabling cookies may affect how
              the Site functions. You can learn more about, or opt out of, interest-based advertising
              at{" "}
              <a
                
  href="https://optout.aboutads.info/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-700 underline"
>
  aboutads.info/choices
</a>
               {" "}
              and{" "}
              <a
                
  href="https://myadcenter.google.com/personalizationoff"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-700 underline"
>
  Google Ad Settings
</a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">6. Your Choices &amp; Rights</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>You may opt out of future calls, texts, or emails by replying &quot;STOP&quot; to a text, telling a caller to stop contacting you, or emailing us at the address below.</li>
              <li>Depending on your state of residence, you may have the right to request access to, correction of, or deletion of your personal information, and to opt out of certain sharing, subject to applicable law (such as the California Consumer Privacy Act).</li>
              <li>To exercise these rights, contact us using the details in Section 10.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">7. Data Retention &amp; Security</h2>
            <p className="mt-2">
              We retain personal information for as long as necessary to fulfill the purposes
              described in this policy, including to maintain consent records, or as required by law.
              We use reasonable administrative, technical, and physical safeguards designed to protect
              your information; however, no method of transmission or storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">8. Children&apos;s Privacy</h2>
            <p className="mt-2">
              The Site is not directed to individuals under the age of 18, and we do not knowingly
              collect personal information from children. If you believe a child has provided us with
              personal information, please contact us so we can delete it.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">9. Third-Party Links</h2>
            <p className="mt-2">
              The Site may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review the privacy
              policy of any site you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">10. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy or wish to exercise your rights, contact
              us at:
            </p>
            <p className="mt-2">
              Top Dog Leads LLC<br />
              Casper, Wyoming, USA<br />
              Email:{" "}
              <a href="mailto:support@topdoglead.com" className="text-blue-700 underline">
                support@topdoglead.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+16784628013" className="text-blue-700 underline">
                +1 678 462 8013
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">11. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &quot;Last updated&quot; date. Your continued use of the Site after changes are
              posted constitutes acceptance of the revised policy.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/terms-of-service"
              className="inline-flex justify-center rounded-full bg-[#1c2d56] px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              View Terms of Service
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