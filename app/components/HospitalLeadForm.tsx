"use client";
import { useState } from "react";
import { Phone, CheckCircle2 } from "lucide-react";

export default function HospitalLeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.zip) {
      setError("Please fill in your name, phone number, and zip code.");
      return;
    }

    setError("");

    // TODO: replace with your real submission logic
    // e.g. fetch("/api/lead", { method: "POST", body: JSON.stringify(form) })
    console.log("Lead submitted:", form);

    setSubmitted(true);
  };

  return (
    <section className="bg-[#1c2d56] rounded-2xl px-6 sm:px-10 py-12 sm:py-14 my-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: info */}
        <div >
          <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-3">
            Get Your Free Quote
          </p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold leading-snug mb-4">
            See what hospital indemnity coverage could look like for you
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
            Share a few details and a licensed agent will help match you with a
            plan that fits your budget and household — no obligation.
          </p>

          <ul className="space-y-3 mb-8 text-white">
            {[
              "No medical exam required for most plans",
              "Coverage for you, your spouse, and dependents",
              "Answers in minutes, not days",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-blue-50 text-sm">
                <CheckCircle2 size={18} className="text-blue-300 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 text-white text-sm">
            <span className="h-px w-8 bg-blue-100/30 text-white" />
            Prefer to talk it through?
          </div>

          <a
            href="tel:+16784628013"
            className="mt-4 inline-flex items-center gap-2 bg-white text-[#1c2d56] font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition"
            aria-label="Call Top Dog Leads now at +1 678 462 8013"
          >
            <Phone size={18} />
            Call Now: +1 678 462 8013
          </a>
        </div>

        {/* RIGHT: form */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 size={40} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Thanks — you&apos;re all set!
              </h3>
              <p className="text-gray-600 text-sm">
                A member of our team will reach out shortly. You can also call
                us directly anytime at{" "}
                <a href="tel:+16784628013" className="text-blue-600 font-medium">
                  +1 678 462 8013
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                Tell us where to reach you
              </h3>

              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1c2d56]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1c2d56]"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address (optional)"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1c2d56]"
                />
              </div>

              <div>
                <label htmlFor="zip" className="sr-only">
                  Zip code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  inputMode="numeric"
                  placeholder="Zip code"
                  value={form.zip}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1c2d56]"
                />
              </div>

              {error && <p className="text-red-600 text-xs">{error}</p>}

              <button
                type="submit"
                className="w-full bg-[#1c2d56] hover:bg-[#1c2d56]/90 text-white font-semibold py-3 rounded-md transition cursor-pointer"
              >
                Get My Free Quote
              </button>

              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                By submitting, you agree to be contacted by phone, text, or
                email about hospital indemnity insurance options.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}