export type IndustryFaq = {
  question: string;
  answer: string;
};

export const industries = [
  {
    slug: "auto-insurance",
    name: "Auto Insurance",
    image: "/auto-insurance-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Auto insurance shoppers rarely wait — most call within minutes of comparing quotes. We connect agents with drivers who are actively looking for new coverage, whether they're switching carriers, adding a vehicle, or shopping after a rate hike. Every call is a live, verified prospect ready to talk about a policy, not a form filled out days ago.",
    benefits: [
      "Live transfer calls from drivers actively comparing quotes",
      "Filtered by state, coverage type, and policy renewal timing",
      "No shared leads — every call is exclusive to your agency",
    ],
    faqs: [
      {
        question: "How are auto insurance leads verified before they reach my agency?",
        answer:
          "Every caller is screened for state, current coverage status, and renewal timing before the call is routed, so your team only speaks with drivers who are actively shopping — not cold names off a list.",
      },
      {
        question: "Are the auto insurance leads exclusive to my agency?",
        answer:
          "Yes. Every call is delivered exclusively to one agency — we never sell or shop the same driver to multiple buyers.",
      },
      {
        question: "Can I filter auto insurance leads by coverage type or state?",
        answer:
          "Yes. Campaigns can be filtered by state, coverage type (liability, full coverage, SR-22, etc.), and where the driver is in their renewal cycle, so you only pay for calls that match your book of business.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "solar",
    name: "Solar",
    image: "/solar-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Solar sales cycles live and die on speed to contact — a homeowner who requested a quote today is often talking to three installers by tomorrow. We deliver live calls from homeowners who've already shown real intent, based on roof ownership, utility bill size, and location, so your sales team spends time closing instead of chasing.",
    benefits: [
      "Live calls from homeowners pre-qualified on roof and utility usage",
      "Coverage across your installer service areas",
      "Real-time delivery so you're first to the conversation",
    ],
    faqs: [
      {
        question: "What qualifies a homeowner as a solar lead?",
        answer:
          "Homeowners are pre-qualified on roof ownership, monthly utility spend, and location before a call is routed to you, so you're talking to people who actually fit a typical solar install profile.",
      },
      {
        question: "How fast are solar leads delivered after a homeowner requests a quote?",
        answer:
          "Calls are routed in real time. Since solar shoppers are usually comparing multiple installers within a day, speed to contact is built into how the campaign runs, not an afterthought.",
      },
      {
        question: "Do you cover my specific solar installer service area?",
        answer:
          "Campaigns are matched to your installer service areas, so you only receive calls from homeowners located where your crews actually operate.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "home-insurance",
    name: "Home Insurance",
    image: "/home-insurance-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Homeowners shop for insurance for very different reasons — a new mortgage, a non-renewal notice, or simply a premium that's crept too high. We route live calls from people actively comparing home insurance options, verified for property type and coverage need, so agents spend their time quoting real policies instead of cold-calling old lists.",
    benefits: [
      "Live transfer calls from verified homeowners shopping now",
      "Filtered by property type, coverage need, and state",
      "Exclusive delivery — your call, not a shared lead",
    ],
    faqs: [
      {
        question: "What situations typically drive home insurance leads?",
        answer:
          "Most callers are shopping because of a new mortgage, a non-renewal notice from their current carrier, or a premium increase — all situations where they need a new quote quickly.",
      },
      {
        question: "Are home insurance leads filtered by property type?",
        answer:
          "Yes. Calls are filtered by property type, coverage need, and state, so you're not spending time quoting policies outside your appetite.",
      },
      {
        question: "Do I share home insurance leads with other agents?",
        answer:
          "No. Every call is delivered exclusively to your agency — it's your conversation, not a shared or resold lead.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "medicare-insurance",
    name: "Medicare Insurance",
    image: "/medicare-insurance-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Medicare enrollment windows create sharp, predictable spikes in demand — and agents who aren't first on the phone lose the sale to someone who was. We deliver live calls from beneficiaries actively researching plans during AEP, OEP, and special enrollment periods, pre-qualified by eligibility so your team talks to people ready to enroll.",
    benefits: [
      "Live calls timed to AEP, OEP, and SEP enrollment windows",
      "Pre-qualified by Medicare eligibility",
      "Real-time delivery when speed to contact matters most",
    ],
    faqs: [
      {
        question: "How are Medicare leads timed to enrollment periods?",
        answer:
          "Campaigns are timed to AEP, OEP, and special enrollment periods, since those windows create sharp, predictable spikes in beneficiaries actively researching plans and ready to enroll.",
      },
      {
        question: "Are Medicare callers pre-qualified for eligibility?",
        answer:
          "Yes. Callers are pre-qualified by Medicare eligibility before the call is routed, so your team spends time on beneficiaries who can actually enroll, not general inquiries.",
      },
      {
        question: "Why does speed to contact matter so much for Medicare leads?",
        answer:
          "Beneficiaries researching plans during enrollment windows typically call more than one agent the same day. Real-time delivery means you're talking to them while they're still actively deciding, not after they've already enrolled elsewhere.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "roofing",
    name: "Roofing",
    image: "/roofing-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Roofing calls tend to follow storms, inspections, and visible damage — homeowners searching for a contractor usually need one fast. We deliver live calls from homeowners actively looking for roof repair, replacement, or storm-damage estimates in your service area, so your crews are quoting real jobs instead of chasing cold internet forms.",
    benefits: [
      "Live calls from homeowners with an active roofing need",
      "Matched to your service area and job type",
      "No shared leads — every call is exclusive to your crew",
    ],
    faqs: [
      {
        question: "What kinds of roofing jobs do these leads cover?",
        answer:
          "Calls come from homeowners actively looking for repair, full replacement, or storm-damage estimates — real jobs, not general research inquiries.",
      },
      {
        question: "Are roofing leads matched to my service area and job type?",
        answer:
          "Yes. Every call is matched to the service area and job type you specify, so your crews are quoting work they're actually equipped and licensed to do.",
      },
      {
        question: "Do you deliver more roofing leads after a storm?",
        answer:
          "Storm and inspection activity are two of the biggest drivers of roofing calls, and campaigns can be scaled to capture that spike in demand as it happens.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "motor-vehicle-accident",
    name: "Motor Vehicle Accident",
    image: "/motor-vehicle-accident-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "The window to sign an accident case is short — claimants who don't hear back quickly move on to the next firm. We deliver live calls from people actively seeking representation after a motor vehicle accident, screened for case basics, so your intake team spends its time on real consultations instead of unqualified inquiries.",
    benefits: [
      "Live calls from claimants actively seeking representation",
      "Screened for case type before the call connects",
      "Real-time delivery while the case is still fresh",
    ],
    faqs: [
      {
        question: "How are motor vehicle accident leads screened before the call connects?",
        answer:
          "Callers are screened for case basics — accident type, fault, and whether they're actively seeking representation — before the call reaches your intake team.",
      },
      {
        question: "Why does speed matter for accident case leads?",
        answer:
          "Claimants who don't hear back quickly move on to the next firm. Calls are delivered in real time, while the case and the claimant's intent to sign are still fresh.",
      },
      {
        question: "Are motor vehicle accident leads exclusive to one firm?",
        answer:
          "Yes. Each call is delivered to a single firm, not shopped across multiple intake teams at once.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "final-expense",
    name: "Final Expense",
    image: "/final-expense-insurance-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Final expense buyers are often comparing coverage for the first time and want a straightforward conversation, not another mailer. We connect agents with people actively researching final expense and burial insurance, verified for basic eligibility, so you spend your time explaining coverage instead of qualifying cold names off a list.",
    benefits: [
      "Live calls from people actively comparing final expense coverage",
      "Pre-qualified for basic age and eligibility fit",
      "Exclusive delivery — never shared with other agents",
    ],
    faqs: [
      {
        question: "Are final expense leads pre-qualified before the call?",
        answer:
          "Yes. Callers are pre-qualified for basic age and eligibility fit before the call connects, so agents spend their time explaining coverage, not disqualifying prospects.",
      },
      {
        question: "What are final expense leads typically looking for?",
        answer:
          "Most callers are comparing final expense or burial insurance coverage for the first time and want a straightforward conversation about options, not a mailer or a cold call.",
      },
      {
        question: "Do you share final expense leads between agents?",
        answer:
          "No. Every call is exclusive — it's never shared or resold to other agents.",
      },
    ] as IndustryFaq[],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    image: "/pest-control-lead-generation.webp",
    phone: "+1 678 462 8013",
    description:
      "Pest problems don't wait, and neither do the homeowners dealing with them — most are calling around the same day they spot a problem. We deliver live calls from homeowners actively looking for pest control service in your area, so your technicians are booking real jobs instead of following up on days-old web forms.",
    benefits: [
      "Live calls from homeowners with an active pest issue",
      "Matched to your service area and pest type",
      "Real-time delivery so you're the first call they get",
    ],
    faqs: [
      {
        question: "How quickly are pest control leads delivered?",
        answer:
          "In real time. Most homeowners call the same day they spot a problem, so campaigns are built to connect them while you're still the first call they make, not the third.",
      },
      {
        question: "Can pest control leads be matched to a specific pest type?",
        answer:
          "Yes. Calls are matched to your service area and the pest types you actually treat, so technicians aren't booking jobs outside their scope.",
      },
      {
        question: "Are pest control leads real service calls or just inquiries?",
        answer:
          "They're calls from homeowners with an active pest issue looking to book service — not general research calls or days-old web form follow-ups.",
      },
    ] as IndustryFaq[],
  },
];