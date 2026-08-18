// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Payment } from "@/models/Payment"; // IMPORTANT: use Payment if webhook writes Payment
import { stripe } from "@/lib/stripe";

// SECURITY: we never trust a raw ?email= query param — that would let
// anyone view any customer's purchases/receipts just by knowing their
// email (IDOR). Instead we require the Stripe checkout session_id that
// only the actual purchaser receives on the success redirect, verify it
// with Stripe, and derive the email FROM that verified session.
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { profile: null, purchases: [], error: "Missing session_id" },
      { status: 400 }
    );
  }

  let verifiedEmail: string | null = null;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid" && session.status !== "complete") {
      return NextResponse.json(
        { profile: null, purchases: [], error: "Session not completed" },
        { status: 403 }
      );
    }
    verifiedEmail =
      (session.metadata?.email as string | undefined) ||
      session.customer_details?.email ||
      null;
  } catch {
    return NextResponse.json(
      { profile: null, purchases: [], error: "Invalid session" },
      { status: 403 }
    );
  }

  if (!verifiedEmail) {
    return NextResponse.json({ profile: null, purchases: [] });
  }

  const email = verifiedEmail;

  await dbConnect();

  const payments = await Payment.find({ customerEmail: email })
    .sort({ createdAt: -1 })
    .lean();

  const displayName =
    payments?.[0]?.customerName ||
    email.split("@")[0] ||
    "Customer";

  const profile = {
    name: displayName,
    email,
    company: payments?.[0]?.company || null,
  };

  const purchases = payments.map((p: any) => ({
    id: String(p._id),
    company: p.company,
    industry: p.industrySlug,
    planId: p.planId,
    amount: p.amountTotal,
    currency: p.currency,
    status: p.status,
    createdAt: p.createdAt,
    receiptUrl: p.receiptUrl,
  }));

  return NextResponse.json({ profile, purchases });
}
