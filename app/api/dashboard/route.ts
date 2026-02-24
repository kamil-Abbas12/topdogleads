import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Payment } from "@/models/Payment";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) return NextResponse.json({ purchases: [] });

  await dbConnect();

  const payments = await Payment.find({ customerEmail: email })
    .sort({ createdAt: -1 })
    .lean();

  // Map to what the UI expects
  const purchases = payments.map((p: any) => ({
    company: p.company,
    industry: p.industrySlug,
    planId: p.planId,
    amount: p.amountTotal,
    currency: p.currency,
    receiptUrl: p.receiptUrl,
    status: p.status,
  }));

  return NextResponse.json({ purchases });
}
