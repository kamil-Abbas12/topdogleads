import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { industries as productIndustries } from "@/data/products";

export const runtime = "nodejs";

export async function POST(req: Request) {
const { slug, planId, email, company, name } = await req.json();

  const industry = productIndustries.find((i) => i.slug === slug);
  if (!industry) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  const plan = (industry.plans || []).find((p: any) => p.id === planId);
  if (!plan) {
    return NextResponse.json({ error: "Invalid planId" }, { status: 400 });
  }

  if (plan.price == null) {
    return NextResponse.json(
      { error: "Custom plans cannot be purchased" },
      { status: 400 }
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const amount = Math.round(Number(plan.price) * 100);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],

    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: `${industry.name} — ${plan.title}`,
            description: plan.desc,
          },
        },
      },
    ],

    // ⭐ VERY IMPORTANT — used by dashboard
    metadata: {
  industrySlug: String(slug),
  planId: String(planId),
  email: String(email),
  company: String(company),
  name: String(name),
},

    // also prefill Stripe email UI
    customer_email: email,

    success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&email=${email}`,
    cancel_url: `${appUrl}/checkout/cancel`,
  });

  return NextResponse.json({ url: session.url });
}