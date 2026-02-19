import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function GET(req: Request) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json([]);
  }

  const comments = await Comment.find({ slug }).sort({ createdAt: -1 });

  return NextResponse.json(comments);
}
