"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const params = useSearchParams();
  const email = params.get("email");

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/dashboard?email=${email}`)
      .then(r => r.json())
      .then(d => setData(d.purchases || []));
  }, [email]);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

      {data.length === 0 && <p>No purchases yet</p>}

      <div className="grid gap-6">
        {data.map((p, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <p><b>Company:</b> {p.company}</p>
            <p><b>Industry:</b> {p.industry}</p>
            <p><b>Plan:</b> {p.planId}</p>
            <p><b>Amount:</b> ${p.amount}</p>
          </div>
        ))}
      </div>
    </main>
  );
}