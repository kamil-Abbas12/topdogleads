"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

function money(amount: number, currency = "usd") {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `$${amount}`;
  }
}

function fmtDate(d?: string | Date) {
  if (!d) return "—";
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

function StatusPill({ status }: { status: string }) {
  const s = (status || "").toLowerCase();
  const cls =
    s === "paid" || s === "succeeded"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : s === "failed"
      ? "bg-rose-50 text-rose-700 ring-rose-200"
      : "bg-slate-50 text-slate-700 ring-slate-200";

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${cls}`}>
      {status || "unknown"}
    </span>
  );
}

export default function Dashboard() {
  const params = useSearchParams();
  const email = params.get("email");

  const [profile, setProfile] = useState<{ name: string; email: string; company?: string | null } | null>(null);
  const [purchases, setPurchases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) return;

    setLoading(true);
    fetch(`/api/dashboard?email=${encodeURIComponent(email)}`)
      .then((r) => r.json())
      .then((d) => {
        setProfile(d.profile);
        setPurchases(d.purchases || []);
      })
      .finally(() => setLoading(false));
  }, [email]);

  const totals = useMemo(() => {
    const totalSpent = purchases.reduce((acc, p) => acc + (Number(p.amount) || 0), 0);
    const last = purchases[0]?.createdAt;
    return { totalSpent, count: purchases.length, last };
  }, [purchases]);

  if (!email) {
    return (
      <main className="min-h-[70vh] bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-2xl border bg-white p-8">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="mt-2 text-slate-600">Missing email. Please return from checkout success page.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header card */}
        <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center font-bold">
                {(profile?.name || email).slice(0, 1).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Welcome{profile?.name ? `, ${profile.name}` : ""}.
                </h1>
                <p className="text-slate-600 text-sm">
                  {profile?.company ? `${profile.company} • ` : ""}{email}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
              >
                Get support
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border bg-white hover:bg-slate-50"
              >
                Browse bundles
              </a>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-600">Total purchases</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{totals.count}</p>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-600">Total spent</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {money(totals.totalSpent, purchases[0]?.currency || "usd")}
              </p>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-600">Last purchase</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{fmtDate(totals.last)}</p>
            </div>
          </div>
        </div>

        {/* Purchases */}
        <div className="mt-6 rounded-2xl border bg-white shadow-sm">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Purchase history</h2>
              <p className="text-sm text-slate-600">Receipts and details of your bundles.</p>
            </div>
          </div>

          {loading ? (
            <div className="p-6 text-slate-600">Loading purchases…</div>
          ) : purchases.length === 0 ? (
            <div className="p-6">
              <div className="rounded-2xl border bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">No purchases yet</p>
                <p className="mt-1 text-sm text-slate-600">
                  Once a payment is confirmed, it will appear here automatically.
                </p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr className="text-left">
                    <th className="px-6 py-3 font-semibold">Industry</th>
                    <th className="px-6 py-3 font-semibold">Plan</th>
                    <th className="px-6 py-3 font-semibold">Amount</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                    <th className="px-6 py-3 font-semibold">Date</th>
                    <th className="px-6 py-3 font-semibold">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {purchases.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/60">
                      <td className="px-6 py-4 font-semibold text-slate-900">{p.industry}</td>
                      <td className="px-6 py-4 text-slate-700">{p.planId}</td>
                      <td className="px-6 py-4 text-slate-700">{money(p.amount, p.currency)}</td>
                      <td className="px-6 py-4"><StatusPill status={p.status} /></td>
                      <td className="px-6 py-4 text-slate-700">{fmtDate(p.createdAt)}</td>
                      <td className="px-6 py-4">
                        {p.receiptUrl ? (
                          <a className="font-semibold text-indigo-600 hover:text-indigo-700" href={p.receiptUrl} target="_blank">
                            View
                          </a>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer note */}
        
      </div>
    </main>
  );
}
