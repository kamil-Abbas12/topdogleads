import { redirect } from "next/navigation";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  if (!params.session_id) {
    redirect("/dashboard");
  }
  redirect(`/dashboard?session_id=${encodeURIComponent(params.session_id)}`);
}