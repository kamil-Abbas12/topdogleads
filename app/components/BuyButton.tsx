"use client";

import { useState } from "react";

export function BuyButton({
  slug,
  planId,
  email,
  company,
  buyerName,
  planTitle,
  className,
}: {
  slug: string;
  planId: string;
  email: string;
  company: string;
  buyerName: string;
  planTitle?: string;
  className: string;
}) {

  const [loading, setLoading] = useState(false);

  async function onBuy() {
    if (!email) {
      alert("Missing email. Please fill form first.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
  slug,
  planId,
  email,
  company,
  buyerName,
  planTitle,
}),
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