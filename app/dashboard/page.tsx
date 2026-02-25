// app/dashboard/page.tsx (SERVER COMPONENT)
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const sp = await searchParams;
  const email = sp?.email ?? "";

  return (
    <Suspense fallback={<div className="p-10">Loading dashboard…</div>}>
      <DashboardClient email={email} />
    </Suspense>
  );
}
