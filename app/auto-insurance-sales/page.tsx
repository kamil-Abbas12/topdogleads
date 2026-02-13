import Image from "next/image";
import Link from "next/link";

const solars = [
  {
    variant: "basic",
    title: "Auto Insurance Leads",
    price: "$624",
    period: "/bundle",
    cta: "Buy Auto Insurance Leads Bundle",
    leads: "25 Leads",
    desc:
      "Bundle of 25 high-quality Auto Insurance leads curated to help you grow your business. Verified and tailored to connect with individuals actively seeking Auto Insurance solutions.",
    bullets: [
      "Verified prospects actively seeking Auto Insurance",
      "High-intent lead filtering",
      "Fast delivery",
      "Support included",
    ],
  },
  {
    variant: "pro",
    title: "Auto Insurance Leads",
    price: "$1250",
    period: "/bundle",
    cta: "Buy Auto Insurance Leads Bundle",
    leads: "50 Leads",
    desc:
      "Bundle of 50 premium Auto Insurance leads designed to accelerate your sales pipeline. Each lead is verified and ready to connect you with interested clients.",
    bullets: [
      "Higher volume package",
      "Verified and filtered leads",
      "Priority delivery",
      "Dedicated support",
    ],
  },
  {
    variant: "enterprise",
    title: "Auto Insurance Leads",
    price: "$2500",
    period: "/bundle",
    cta: "Buy Auto Insurance Leads Bundle",
    leads: "100 Leads",
    desc:
      "Bundle of 100 top-quality Auto Insurance leads, optimized to maximize your outreach and conversions. Perfect for agencies looking for large-scale lead acquisition.",
    bullets: [
      "Highest volume package",
      "Premium targeting and segmentation",
      "Dedicated account support",
      "Best value per lead",
    ],
  },
];

function CheckBullet({ children, variant = "basic" }: { children: React.ReactNode; variant?: string }) {
  const dot =
    variant === "pro"
      ? "bg-white/40"
      : variant === "enterprise"
      ? "bg-white/40"
      : "bg-violet-500/80";

  const text =
    variant === "pro" || variant === "enterprise"
      ? "text-white/90"
      : "text-gray-700";

  return (
    <li className={`flex items-start gap-3 text-sm leading-relaxed ${text}`}>
      <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${dot}`} />
      <span>{children}</span>
    </li>
  );
}

function ProductCard({ p }: { p: typeof solars[0] }) {
  const isPro = p.variant === "pro";
  const isEnterprise = p.variant === "enterprise";

  const cardClass = isPro
    ? "bg-slate-900 text-white border-slate-800"
    : isEnterprise
    ? "bg-gradient-to-b from-violet-600 to-indigo-600 text-white border-transparent"
    : "bg-white text-gray-900 border-gray-200";

  const subtleText = isPro || isEnterprise ? "text-white/70" : "text-gray-500";

  const buttonClass =
    isPro || isEnterprise
      ? "bg-white text-slate-900 hover:bg-white/90"
      : "bg-violet-600 text-white hover:bg-violet-700";

  const pillClass = isPro
    ? "bg-white/10 text-white/80 border-white/15"
    : isEnterprise
    ? "bg-white/10 text-white/85 border-white/15"
    : "bg-violet-50 text-violet-700 border-violet-100";

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 shadow-sm hover:shadow-md transition ${cardClass}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">{p.title}</p>
        <span
          className={`text-[11px] px-2.5 py-1 rounded-full border ${pillClass}`}
        >
          {p.leads}
        </span>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {p.price}
        </div>
        <div className={`pb-1 text-sm ${subtleText}`}>{p.period}</div>
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${
          isPro || isEnterprise ? "text-white/80" : "text-gray-600"
        }`}
      >
        {p.desc}
      </p>

      <button
        className={`mt-6 w-full rounded-lg py-3 font-semibold transition ${buttonClass}`}
      >
        {p.cta}
      </button>

      <div
        className={`mt-6 h-px w-full ${
          isPro || isEnterprise ? "bg-white/15" : "bg-gray-200"
        }`}
      />

      <p
        className={`mt-5 text-[11px] font-semibold tracking-widest uppercase ${subtleText}`}
      >
        What you will get
      </p>
      <ul className="mt-4 space-y-3">
        {p.bullets.map((b) => (
          <CheckBullet key={b} variant={p.variant}>
            {b}
          </CheckBullet>
        ))}
      </ul>
    </div>
  );
}

function CustomizeCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition flex flex-col">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-gray-900">Customize</p>
        <span className="text-[11px] px-2.5 py-1 rounded-full border border-orange-100 bg-orange-50 text-orange-700">
          Custom Plan
        </span>
      </div>

      <div className="mt-5">
        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Custom
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Choose your volume and delivery preferences for Auto Insurance leads.
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        We’ll create a package that matches your budget and goals—perfect if you
        need a specific lead mix or unique routing.
      </p>

      <button className="mt-6 w-full rounded-lg py-3 font-semibold bg-orange-600 text-white hover:bg-orange-700 transition">
        Contact Sales
      </button>

      <div className="mt-6 h-px w-full bg-gray-200" />

      <p className="mt-5 text-[11px] font-semibold tracking-widest uppercase text-gray-500">
        What you will get
      </p>
      <ul className="mt-4 space-y-3">
        <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-500/80" />
          <span>Custom quantity and pricing</span>
        </li>
        <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-500/80" />
          <span>Targeted Auto Insurance leads</span>
        </li>
        <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-500/80" />
          <span>Routing + delivery preferences</span>
        </li>
        <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-500/80" />
          <span>Priority support</span>
        </li>
      </ul>
    </div>
  );
}

export default function AutoInsuranceSalesPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full">
        <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[260px] overflow-hidden">
          <Image
            src="https://topdoglead.com/wp-content/uploads/2019/09/pic_paralax_2.jpg"
            alt="Our Auto Insurance Sales header"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl">
              Auto Insurance Leads
            </h1>
            <p className="text-white/90 text-sm sm:text-base mt-2">
              <Link href="/" className="underline underline-offset-4">
                Home
              </Link>{" "}
              <span className="mx-2">•</span>  Auto Insurance Leads
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solars.map((p) => (
            <ProductCard key={p.title + p.leads} p={p} />
          ))}
          <CustomizeCard />
        </div>
      </section>
    </main>
  );
}