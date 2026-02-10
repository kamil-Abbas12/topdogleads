import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const { company, email, buyerName, leadType, phone } = body;

if (!company || !email || !leadType || !phone) {
  return NextResponse.json(
    { success: false, message: "Missing required fields" },
    { status: 400 }
  );
}

await Lead.create({
  company,
  email,
  buyerName,
  leadType,
  phone,
});

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
