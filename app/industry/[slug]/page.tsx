"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter, useParams, usePathname } from "next/navigation";
import { industries } from "@/data/industries";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

export default function IndustryPage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

const industry = industries.find((i) => i.slug === slug);


  const [companyError, setCompanyError] = useState("");
  const [step2Error, setStep2Error] = useState("");

  const [company, setCompany] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [leadType, setLeadType] = useState("");
  const [phone, setPhone] = useState("");

  if (!industry) return <div className="p-10">Industry not found</div>;

  /* RESET FORM WHEN SLUG CHANGES */
  useEffect(() => {
    setCompany("");
    setFormOpen(false);
    setCompanyError("");
    setStep2Error("");
    setEmail("");
    setBuyerName("");
    setLeadType("");
    setPhone("");
  }, [pathname]);

  const validateStep2 = () => {
    if (!email.trim()) return "Email is required";
    if (!leadType) return "Please select service";
    if (!phone) return "Phone is required";
    return "";
  };

  const handleCtaClick = async () => {
    // STEP 1 → STEP 2
    if (!formOpen) {
      if (!company.trim()) {
        setCompanyError("Company name is required");
        return;
      }
      setCompanyError("");
      setFormOpen(true);
      return;
    }

    // STEP 2 VALIDATION
    const msg = validateStep2();
    if (msg) {
      setStep2Error(msg);
      return;
    }
if (!slug) {
  setStep2Error("Invalid route slug");
  return;
}

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry: slug,
          company,
          email,
          buyerName,
          leadType,
          phone,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push(`/industry/${slug}/sales`);
      } else {
        setStep2Error(data.message || "Submission failed");
      }
    } catch {
      setStep2Error("Server error. Try again.");
    }
  };

  const inputBase =
    "w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-gray-700 outline-none";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Live Leads.Live Calls.Start Today
          </h1>

          <Image
            src={industry.image}
            alt={industry.name}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          <h2 className="text-3xl mb-4">Stop Dialing. Start Talking</h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Join thousands of agents using Top Dog Leads to get high-intent
            {` ${industry.name}`} leads delivered straight to your phone.
          </p>

          {/* STEP 1 */}
          {!formOpen && (
            <div className="space-y-5">
              <select
                disabled
                className="w-full h-12 border rounded-md px-4 bg-white 
                appearance-none text-gray-700 outline-none cursor-pointer"
              >
                <option>{industry.name}</option>
              </select>

              <input
                placeholder="Company name"
                value={company}
                onChange={e => {
                  setCompany(e.target.value);
                  setCompanyError("");
                }}
                className={inputBase}
              />

              {companyError && (
                <p className="text-sm text-blue-600">{companyError}</p>
              )}
<div className="flex flex-col lg:flex-row  items-center gap-4">

              <button
                onClick={handleCtaClick}
                className="bg-[#1c2d56] text-white px-6 py-3 lg:px-12  rounded-md cursor-pointer"
              >
                Get Calls
              </button>

              <p className="text-sm text-gray-600">
                Questions?{" "}
                <span className="font-semibold">{industry.phone}</span>
              </p>
              </div>

            </div>
          )}

          {/* STEP 2 */}
          {formOpen && (
            <div className="space-y-5">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={inputBase}
              />

              <input
                placeholder="Buyer name"
                value={buyerName}
                onChange={e => setBuyerName(e.target.value)}
                className={inputBase}
              />

              <select
                value={leadType}
                onChange={e => setLeadType(e.target.value)}
                className={inputBase}
              >
                <option value="">Select service</option>
                <option value="call">Call</option>
                <option value="lead">Leads</option>
              </select>

              {/* PHONE INPUT */}
              <PhoneInput
                country="us"
                value={phone}
                onChange={setPhone}
                enableSearch
                countryCodeEditable={false}
                inputStyle={{ width: "100%", height: "48px" }}
              />

              {step2Error && (
                <p className="text-sm text-blue-600">{step2Error}</p>
              )}

              <button
                onClick={handleCtaClick}
                className="bg-[#1c2d56] text-white px-6 lg:px-10 cursor-pointer py-3 rounded-md "
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
