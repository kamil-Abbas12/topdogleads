import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const { slug, name, email, comment } = body as {
    slug?: string;
    name?: string;
    email?: string;
    comment?: string;
  };

  if (!slug || !name || !email || !comment) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: Save to database. For now, just log.
  console.log("COMMENT_SUBMITTED", { slug, name, email, comment });

  return NextResponse.json({ ok: true });
}
