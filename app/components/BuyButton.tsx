"use client";

import { useState } from "react";

export function BuyButton({
  slug,
  planId,
  className,
}: {
  slug: string;
  planId: string;
  className: string;
}) {
  const [loading, setLoading] = useState(false);

  async function onBuy() {
    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, planId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout failed");

      window.location.href = data.url;
    } catch (e: any) {
      alert(e.message);
      setLoading(false);
    }
  }

  return (
    <button className={className} onClick={onBuy} disabled={loading}>
      {loading ? "Redirecting..." : "Buy Bundle"}
    </button>
  );
}
