import { redirect } from "next/navigation";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const params = await searchParams;
  redirect(`/dashboard?email=${params.email}`);
}