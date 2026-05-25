"use client";

import * as React from "react";

type InterestOption = { label: string; value: string };

const INTERESTS: InterestOption[] = [
  { label: "Select a Service", value: "" },
  { label: "Final Expense", value: "final-expense" },
  { label: "Medicare Insurance", value: "medicare-insurance" },
  { label: "Motor Vehicle Accident", value: "motor-vehicle-accident" },
  { label: "Home Insurance", value: "home-insurance" },
  { label: "Auto Insurance", value: "auto-insurance" },
  { label: "Pest Control", value: "pest-control" },
  { label: "Roofing", value: "roofing" },
  { label: "Solar", value: "solar" },
];

export default function ContactSplit() {
  const [toast, setToast] = React.useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const [loading, setLoading] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      interest: form.interest.trim(),
      message: form.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.interest || !payload.message) {
      setToast({
        show: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setToast({
          show: true,
          message: data.message || "Failed to send",
          type: "error",
        });
      } else {
        setToast({
          show: true,
          message: data.message || "Message sent successfully!",
          type: "success",
        });
        setForm({ name: "", email: "", interest: "", message: "" });
      }
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);
      setToast({
        show: true,
        message: "Something went wrong!",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
    }
  }

  return (
    <section className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16 items-start">
        {/* LEFT */}
        <div className="flex flex-col justify-start">
          <div className="text-xs text-black/60">
            <a href="/" className="hover:text-black/80">Home</a>
            <span className="mx-1">/</span>
            <a href="/contact" className="hover:text-black/80">Contact</a>
          </div>

          <h1 className="mt-2 max-w-[12ch] text-5xl font-semibold leading-tight text-blue-900 sm:text-6xl lg:text-7xl">
            Let’s make <br />
            great things <br />
            happen.
          </h1>
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col justify-start lg:pt-0">
          <h2 className="text-lg font-medium tracking-tight sm:text-xl mb-4">
            Why don’t we start with your name?
          </h2>

          {toast.show && (
            <div
              className={`mb-4 rounded-md px-4 py-3 text-sm ${
                toast.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {toast.message}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">NAME*</div>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your Name"
                required
                className="mt-1 w-full bg-transparent pb-2 text-sm text-black placeholder:text-black/40 outline-none border-b border-black/20 focus:border-black/70"
              />
            </div>

            {/* Email */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">EMAIL ADDRESS*</div>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your Email Address"
                required
                className="mt-1 w-full bg-transparent pb-2 text-sm text-black placeholder:text-black/40 outline-none border-b border-black/20 focus:border-black/70"
              />
            </div>

            {/* Interest */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">INTEREST*</div>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={onChange}
                required
                className="mt-1 w-full bg-transparent pb-2 pr-8 text-sm text-black outline-none border-b border-black/20 focus:border-black/70"
              >
                {INTERESTS.map((o) => (
                  <option key={o.value} value={o.value} className="text-black">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">WHAT’S ON YOUR MIND?*</div>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="How can we help you?"
                required
                className="mt-1 w-full h-24 resize-none bg-transparent pb-2 text-sm text-black placeholder:text-black/40 outline-none border-b border-black/20 focus:border-black/70"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 w-40 items-center justify-center bg-[#1c2d56] hover:bg-[#1c2d56]/90 disabled:opacity-60 text-xs font-semibold tracking-[0.22em] rounded-md text-white transition"
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
