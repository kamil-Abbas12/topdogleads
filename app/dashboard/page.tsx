// app/dashboard/page.tsx (SERVER COMPONENT)
import { Suspense } from "react";
import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

// Private, per-customer page — must never be indexed.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const sp = await searchParams;
  const sessionId = sp?.session_id ?? "";

  return (
    <Suspense fallback={<div className="p-10">Loading dashboard…</div>}>
      <DashboardClient sessionId={sessionId} />
    </Suspense>
  );
}
