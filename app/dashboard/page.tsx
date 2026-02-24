// app/dashboard/page.tsx
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic"; // avoids static prerender assumptions

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { email?: string };
}) {
  const email = searchParams.email ?? "";

  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="rounded-2xl border bg-white p-8">Loading dashboard…</div>
          </div>
        </main>
      }
    >
      <DashboardClient email={email} />
    </Suspense>
  );
}
