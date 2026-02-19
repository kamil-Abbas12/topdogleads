"use client";

type Plan = {
  id: string;
  variant: "basic" | "pro" | "enterprise" | "custom";
  title: string;
  leads: string;
  price?: number | null;
  period: string;
  desc: string;
  bullets?: string[];
};

export default function ProductCard({ p }: { p: Plan }) {
  async function handleCheckout() {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      body: JSON.stringify({
        title: p.title,
        price: p.price,
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div className="rounded-2xl border p-6 shadow-sm flex flex-col">
      <h3 className="font-bold text-lg">{p.title}</h3>

      <p className="text-4xl font-extrabold mt-2">
        {p.price ? `$${p.price}` : "Custom"}
      </p>

      <p className="text-gray-600 mt-4">{p.desc}</p>

      <button
        onClick={handleCheckout}
        className="mt-6 h-12 rounded-lg bg-violet-600 text-white font-semibold"
      >
        Buy Bundle
      </button>
    </div>
  );
}
