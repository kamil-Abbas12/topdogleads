import { roboto } from "@/lib/fonts";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "What Is Hospital Indemnity Insurance? Coverage & Benefits | Top Dog Leads",
  description:
    "Learn what hospital indemnity insurance covers, who needs it, and how it can help pay for costs your health plan doesn't.",
};

const usesList = [
  "Deductibles and co-payments",
  "Out-of-network care and treatment",
  "Medical testing",
  "Therapy and rehabilitation",
  "Lodging or transportation costs (if you need to travel for care)",
  "Housekeeping",
  "Childcare",
  "Groceries",
  "Other household bills",
];

const faqs = [
  {
    q: "Is hospital indemnity insurance for inpatient and outpatient care?",
    a: "Yes, hospital indemnity insurance typically covers a variety of situations, including general hospital stays, surgery, emergency room visits, and intensive care unit stays.",
  },
  {
    q: "How much does hospital indemnity insurance cost?",
    a: "Prices can vary depending on a variety of factors, such as your age, whether you're adding family members, and the amount of coverage you're getting. That said, plans tend to be more affordable than you may think. Talk to your employer for more information about costs.",
  },
  {
    q: "Can I use hospital indemnity insurance for a family member?",
    a: "Generally, a spouse or children you include on the policy are covered as well.",
  },
  {
    q: "What if I have a medical condition?",
    a: "Acceptance is often guaranteed, as long as you sign up during the enrollment period and remain active at work. Some states might also require you to have medical coverage, so be sure to talk to your employer about any other exclusions that may apply to you or your family.",
  },
];

export default function HospitalIndemnityInsurancePage() {
  return (
    <main className={`${roboto.className} bg-white`}>
      {/* HERO */}
      <section className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px]">
        <Image
          src="/medical-lead-generation-doctor-patient-consultation.webp"
          alt="Hospital indemnity insurance - patient and nurse"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 lg:px-12 xl:px-20 pb-8">
          <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            Accident &amp; Health Insurance
          </p>
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
            What Is Hospital Indemnity Insurance? Coverage &amp; Benefits
          </h1>

          <div className="flex items-center justify-between mt-6 max-w-3xl">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>3 min read</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>July 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-white">
              <Facebook size={18} className="cursor-pointer hover:text-blue-400" />
              <Twitter size={18} className="cursor-pointer hover:text-blue-400" />
              <Linkedin size={18} className="cursor-pointer hover:text-blue-400" />
              <Mail size={18} className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Even a quick trip to the hospital can result in unexpected expenses that your
          existing health coverage may or may not cover.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
          This is where hospital indemnity insurance may help, by giving you a payment to
          help cover expenses that result from a hospital visit and unexpected emergencies.
        </p>

        {/* Defined */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Hospital indemnity insurance defined
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
          Hospital indemnity insurance is a supplemental insurance offering that pays
          directly to the insured person, not to medical providers, for covered
          occurrences. Once the money is in your hands, you can spend it however you see
          fit.
        </p>

        {/* Who needs it */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Who may need hospital indemnity insurance?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          It&apos;s easy to be caught off guard by the variety of hospitalization-related
          expenses that aren&apos;t covered by medical insurance — from co-pays and
          deductibles to groceries and childcare. We may also underestimate how expensive
          it is. The average cost of a three-day hospital stay is around{" "}
          <span className="text-blue-600 font-medium">$30,000</span>.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
          These costs can add up quickly and may negatively impact a tight household
          budget. Hospital indemnity insurance can help cover these unforeseen costs and
          provide some financial relief.
        </p>

        {/* What it can be used for */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          What can hospital indemnity insurance be used for?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Payments from a hospital indemnity plan can cover costs from an extended
          hospital stay, transportation to and from follow-up appointments, and more.
          Here are a few expenses you might want to use it for:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-12">
          {usesList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          What are the benefits of hospital indemnity insurance?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-10">
          Hospital indemnity insurance can offer financial support to you or your family
          for an unforeseen large expense or during an emergency and help keep your
          family&apos;s finances on track. Plus, paying a monthly premium that&apos;s
          deducted from your paycheck can make financial planning easier than you think.
        </p>

        <div className="space-y-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              1. You can use the benefit payment as you see fit
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When you make a qualifying claim on your hospital indemnity insurance
              policy, you receive a payment from your plan that&apos;s paid directly to
              you. You can use these funds in any way that might help you and your family
              with both unexpected and planned expenses — food deliveries, childcare,
              hospital co-pays, or other essential bills.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              2. Coverage is typically guaranteed, and payments are easy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Unlike other insurance policies that may involve a medical screening,
              hospital indemnity insurance is typically a voluntary benefit that&apos;s
              guaranteed without the need for a medical exam or health questionnaire.
              Premiums are also often handled directly through payroll deductions if the
              policy is provided by your employer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. You may be able to take your benefits with you if you change jobs
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Although most hospital indemnity coverage plans are provided through an
              employer, you can often take your plan with you if your employment status
              changes. As long as you continue making your premium payments — and your
              employer doesn&apos;t terminate the group policy — you&apos;ll be covered
              whenever you might need to use it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. It&apos;s a smart step in financial planning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Even the savviest of budgeters can run into unforeseen expenses. Although
              health insurance may cover a portion of hospital bills, it may not cover an
              entire stay. Plus, there are other costs to consider that can affect you
              financially, like childcare when you&apos;re in the hospital and recovering
              at home, transportation costs, additional healthcare needs like physical
              rehabilitation, and even grocery and food delivery costs.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Hospital indemnity insurance FAQs
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          To learn more about hospital indemnity insurance, review the following
          frequently asked questions.
        </p>

        <div className="space-y-8">
          {faqs.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}