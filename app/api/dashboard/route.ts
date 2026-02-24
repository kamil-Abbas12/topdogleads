// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Payment } from "@/models/Payment"; // IMPORTANT: use Payment if webhook writes Payment

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email) return NextResponse.json({ profile: null, purchases: [] });

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
