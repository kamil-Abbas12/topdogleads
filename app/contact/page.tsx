"use client";

import * as React from "react";

type InterestOption = { label: string; value: string };

const INTERESTS: InterestOption[] = [
  { label: "Select a Service", value: "" },
  { label: "Appliance Repair", value: "appliance-repair" },
  { label: "Plumbing", value: "plumbing" },
  { label: "Window Installation", value: "window-installation" },
  { label: "Auto Glass Repair", value: "auto-glass-repair" },
];

export default function ContactSplit() {
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

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className="min-h-screen bg-white text-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
        {/* LEFT */}
        <div>
          <div className="text-xs text-black/60">
            <span className="hover:text-black/80">Home</span>
            <span className="mx-1">/</span>
            <span className="text-black/80">Contact</span>
          </div>

          <h1 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[1.02] text-blue-900 tracking-tight sm:text-6xl lg:text-7xl">
            Let’s make <br />
            great things <br />
            happen.
          </h1>
        </div>

        {/* RIGHT */}
        <div className="lg:pt-2">
          <h2 className="text-lg font-medium tracking-tight sm:text-xl">
            Why don’t we start with your name?
          </h2>

          <form onSubmit={onSubmit} className="mt-10 space-y-8">
            {/* Name */}
            <div>
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your Name"
                className="w-full bg-transparent pb-3 text-sm text-black placeholder:text-black/40 outline-none border-b border-black/20 focus:border-black/70"
              />
            </div>

            {/* Email */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">
                EMAIL ADDRESS*
              </div>
              <label className="sr-only" htmlFor="email">
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your Email Address"
                className="mt-3 w-full bg-transparent pb-3 text-sm text-black placeholder:text-black/40 outline-none border-b border-black/20 focus:border-black/70"
              />
            </div>

            {/* Interest */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">
                INTEREST*
              </div>
              <label className="sr-only" htmlFor="interest">
                Select a Service
              </label>

              <div className="relative mt-3">
                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={onChange}
                  className="w-full appearance-none bg-transparent pb-3 pr-10 text-sm text-black outline-none border-b border-black/20 focus:border-black/70"
                >
                  {INTERESTS.map((o) => (
                    <option key={o.value} value={o.value} className="text-black">
                      {o.label}
                    </option>
                  ))}
                </select>

                {/* caret */}
                <svg
                  className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-black/60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] text-black/70">
                WHAT’S ON YOUR MIND?
              </div>
              <label className="sr-only" htmlFor="message">
                Tell us about your business
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your business"
                rows={3}
                className="mt-3 w-full resize-none bg-transparent pb-3 text-sm text-black placeholder:text-black/40 outline-none border-b border-black/20 focus:border-black/70"
              />
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex h-11 w-40 items-center justify-center bg-blue-500 
                 text-xs font-semibold tracking-[0.22em] rounde-2xl text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
