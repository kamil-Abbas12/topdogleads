import { roboto } from "@/lib/fonts";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import HospitalLeadForm from "../components/HospitalLeadForm";

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Standard health insurance doesn't cover everything. We cover the gaps.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
          Unexpected hospital visits come with unexpected expenses. Hospital indemnity insurance provides direct cash payouts to help handle deductibles, copays, or daily living expenses while you recover giving you total financial peace of mind when you need it most.
        </p>

        {/* Defined */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          How Hospital Indemnity Insurance Protects Your Wallet ?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
        Unlike standard health coverage, hospital indemnity insurance cuts a check directly to you, not the medical provider. There are no restrictions and no fine print on how you use it. Once you receive the cash, you can spend it on medical bills, rent, or everyday expenses.
        </p>

        {/* Who needs it */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
Who is Vulnerable to Out-of-Pocket Hospital Costs?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Don't Let a Surprise Hospital Visit Drain Your Savings
Did you know the average cost of just a three-day hospital stay is around $30,000? Even with major medical insurance, you can easily be caught off guard by a wave of uncovered expenses including steep deductibles, copays, and lost wages.
 
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-12">
         Hospital indemnity insurance bridges this gap by paying cash benefits directly to you. It gives you an instant financial cushion so you can focus on healing, not medical bills.
        </p>

        {/* What it can be used for */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          What can hospital indemnity insurance be used for?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Hospital indemnity cash benefits are designed to absorb the financial shock of a medical crisis. Because the money goes straight to you, you have the flexibility to cover both medical and everyday costs, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-12">
          {usesList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          The Financial Perks of a Hospital Indemnity Plan
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-10">
          An unexpected medical emergency shouldn’t derail your family's financial future. Hospital indemnity insurance delivers an instant cash safety net right when you need it most, keeping your household budget completely on track. Plus, with small, predictable monthly premiums, securing this peace of mind fits seamlessly into your existing budget.
        </p>

        <div className="space-y-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              1. You can use the benefit payment as you see fit
            </h3>
            <p className="text-gray-700 leading-relaxed">
             When you file a qualifying claim, your cash benefit is paid directly to you not the hospital. Whether you need to cover high medical deductibles, order food deliveries, pay for childcare, or take care of everyday household bills, the choice is entirely yours. Once the money hits your account, it’s 100% yours to use exactly where you need it most.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
2. Guaranteed Acceptance, Hassle-Free Payouts            </h3>
            <p className="text-gray-700 leading-relaxed">
             Unlike traditional health insurance that requires endless medical screenings and long health questionnaires, hospital indemnity insurance is typically guaranteed-issue. That means you are automatically approved without a medical exam.
Managing your coverage is just as effortless. Payments can be set up as simple, automated monthly deductions, ensuring your policy never lapses. You get an immediate financial safety net for unexpected hospital stays, with zero added stress.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. Protecting Your Family, No Matter Where You Work
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your financial protection isn't tied to your desk. Even if you change careers or leave your current employer, you can easily take your hospital indemnity plan with you. As long as you maintain your simple monthly premium payments, your cash safety net stays active giving you seamless, uninterrupted peace of mind wherever life takes you next.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. A Simple Upgrade to Your Financial Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
      
 
Even the Best Budgets Can’t Predict a Medical Crisis
Standard health insurance pays the doctors but it leaves behind a massive trail of out-of-pocket costs. From high deductibles to everyday expenses like childcare, food delivery, and transportation while you recover, the bills mount fast. Hospital indemnity insurance bridges this gap by delivering direct cash to your bank account, giving you the immediate financial support needed to handle all the costs of your recovery.
 
            </p>
          </div>
        </div>
        <HospitalLeadForm />

        {/* FAQ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Hospital indemnity insurance FAQs
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
        Explore our frequently asked questions below to learn exactly how hospital indemnity insurance protects your wallet and pairs with your current health coverage.
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