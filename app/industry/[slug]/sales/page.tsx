import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { BuyButton } from "@/app/components/BuyButton";

import { industries as productIndustries } from "@/data/products";
import { industries as metaIndustries } from "@/data/industries";

type Plan = {
  id: string;
  variant: "basic" | "pro" | "enterprise" | "custom";
  title: string;
  leads: string;
  price?: number | null;
  period: string;
  desc: string;
  isCustom?: boolean;
  bullets?: string[];
};

function CheckBullet({
  children,
  variant,
  isDark,
}: {
  children: ReactNode;
  variant: Plan["variant"];
  isDark: boolean;
}) {
  const dot =
    variant === "pro" || variant === "enterprise"
      ? "bg-white/40"
      : variant === "custom"
      ? "bg-orange-500/80"
      : "bg-violet-500/80";

  const text = isDark ? "text-white/90" : "text-gray-700";

  return (
    <li className={`flex items-start gap-3 text-sm leading-relaxed ${text}`}>
      <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
      <span className="line-clamp-1">{children}</span>
    </li>
  );
}

/* ⭐ UPDATED — now receives email + company */
function ProductCard({
  p,
  slug,
  email,
  company,
  buyerName,
}: {
  p: Plan;
  slug: string;
  email: string;
  company: string;
  buyerName: string;
}) {

  const isDark = p.variant === "pro" || p.variant === "enterprise";

  const cardClass =
    p.variant === "pro"
      ? "bg-slate-900 text-white border-slate-800"
      : p.variant === "enterprise"
      ? "bg-gradient-to-b from-violet-600 to-indigo-600 text-white border-transparent"
      : "bg-white text-gray-900 border-gray-200";

  const buttonClass = isDark
    ? "bg-white text-slate-900 hover:bg-white/90"
    : "bg-violet-600 text-white hover:bg-violet-700";

  const pillClass = isDark
    ? "bg-white/10 text-white/80 border-white/15"
    : "bg-violet-50 text-violet-700 border-violet-100";

  const subtleText = isDark ? "text-white/70" : "text-gray-500";
  const descText = isDark ? "text-white/80" : "text-gray-600";
  const divider = isDark ? "bg-white/15" : "bg-gray-200";

  return (
    <div
      className={[
        "rounded-2xl border p-6 sm:p-7 shadow-sm hover:shadow-md transition",
        "flex flex-col h-full",
        cardClass,
      ].join(" ")}
    >
      <div className="min-h-[88px]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">{p.title}</p>
          <span className={`text-[11px] px-2.5 py-1 rounded-full border ${pillClass}`}>
            {p.leads}
          </span>
        </div>

        <div className="mt-5 flex items-baseline gap-2">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
            {p.price != null ? `$${p.price}` : "Custom"}
          </div>
          <div className={`text-sm ${subtleText}`}>{p.period}</div>
        </div>
      </div>

      <p className={`mt-4 text-sm leading-relaxed line-clamp-4 min-h-[5.75rem] ${descText}`}>
        {p.desc}
      </p>

      <div className="mt-auto pt-6">
        {p.isCustom ? (
          <Link href="/contact">
            <button className="w-full h-12 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition">
              Contact Sales
            </button>
          </Link>
        ) : (
          <BuyButton
  slug={slug}
  planId={p.id}
  email={email}
  company={company}
  buyerName={buyerName}     // ✅ buyer name
  planTitle={p.title}       // ✅ optional if you want it in Stripe metadata
  className={`w-full h-12 rounded-lg font-semibold transition ${buttonClass}`}
/>

        )}

        <div className={`h-px my-6 ${divider}`} />

        <p className={`text-[11px] font-semibold tracking-widest uppercase ${subtleText}`}>
          What you will get
        </p>

        <ul className="mt-4 space-y-3 min-h-[108px]">
          {(p.bullets ?? []).map((b) => (
            <CheckBullet key={b} variant={p.variant} isDark={isDark}>
              {b}
            </CheckBullet>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =========================
   ⭐ MAIN PAGE — FIXED
   ========================= */

export default async function SalesPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
searchParams: Promise<{ email?: string; company?: string; buyerName?: string }>;
}) {
  const { slug } = await params;
  const query = await searchParams;
const buyerName = query.buyerName || "";
  const email = query.email || "";
  const company = query.company || "";

  const productIndustry = productIndustries.find((i) => i.slug === slug);
  if (!productIndustry) return notFound();

  const meta = metaIndustries.find((i) => i.slug === slug);

  const heroImage = productIndustry.image;
  const heroTitle = productIndustry.name;

  const plans: Plan[] = Array.isArray(productIndustry.plans)
    ? (productIndustry.plans as Plan[])
    : [];

  return (
    <main className="w-full bg-white">
      <section className="relative w-full">
        <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[260px] overflow-hidden">
          <Image src={heroImage} alt={heroTitle} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl">{heroTitle}</h1>

            <p className="text-white/90 text-sm sm:text-base mt-2">
              <Link href="/" className="underline">Home</Link>
              <span className="mx-2">•</span>
              <Link href={`/industry/${slug}`} className="underline">
                {meta?.name ?? "Industry"}
              </Link>
              <span className="mx-2">•</span> Sales
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <ProductCard
  key={plan.id}
  p={plan}
  slug={slug}
  email={email}
  company={company}
  buyerName={buyerName}
/>

          ))}
        </div>
      </section>
    </main>
  );
}