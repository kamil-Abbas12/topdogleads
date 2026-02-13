"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { usePathname, useRouter } from "next/navigation";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

export default function AutoInsurancePage() {
  const router = useRouter();
  const pathname = usePathname();

  const [companyError, setCompanyError] = useState("");
  const [step2Error, setStep2Error] = useState("");

  const [email, setEmail] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [leadType, setLeadType] = useState("");
  const [phone, setPhone] = useState("");

  const [company, setCompany] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const inputBase =
    "w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-gray-700 outline-none focus:border-gray-300";
  const selectBase =
    "w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-gray-700 outline-none focus:border-gray-300";

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
    if (!email?.trim()) return "Email is required";
    if (!leadType?.trim()) return "Please select your services";
    if (!phone?.trim()) return "Phone is required";
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
    setStep2Error("");
    setFormOpen(true);
    return;
  }

  // STEP 2 VALIDATION
  const msg = validateStep2();
  if (msg) {
    setStep2Error(msg);
    return;
  }

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        industry: "auto-insurance",
        company,
        email,
        buyerName,
        leadType,
        phone,
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/auto-insurance-sales");
    } else {
      setStep2Error(data.message || "Failed to submit");
    }
  } catch (err) {
    console.error(err);
    setStep2Error("Server error. Try again.");
  }
};

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Live Leads. Live Calls. Start Today
            </h1>

            <div className="relative w-full max-w-xl">
              <div className="relative w-full overflow-hidden rounded-md aspect-[3/2] sm:aspect-[16/10]">
                <Image
                  src="/lead.jpg"
                  alt="Auto Insurance Leads"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4 sm:mb-6">
              Stop Dialing. Start Talking
            </h2>

            <p className="text-gray-600 mb-8 sm:mb-10 max-w-md">
              Join 3,000+ agents using Top Dog leads to get high-intent Auto Insurance leads delivered straight to your phone
            </p>

            {/* FORM */}
            <div className="max-w-md w-full">
              {/* STEP 1 */}
              {!formOpen && (
                <div className="space-y-5 sm:space-y-6">
                  <select
                    defaultValue="auto-insurance"
                    disabled
                    className="w-full h-12 rounded-md border border-gray-300 px-4 bg-white text-gray-700 cursor-not-allowed appearance-none"
                  >
                    <option value="auto-insurance">Auto Insurance</option>
                  </select>

                  <div>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                        if (companyError) setCompanyError("");
                      }}
                      className={`${inputBase} ${
                        companyError ? "border-blue-500" : ""
                      }`}
                    />
                    {companyError && (
                      <p className="text-sm text-blue-600 mt-1">{companyError}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 sm:pt-4">
                    <button
                      type="button"
                      onClick={handleCtaClick}
                      className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
                    >
                      Get Calls
                    </button>

                    <p className="text-sm sm:text-md text-gray-600">
                      Questions?{" "}
                      <span className="font-semibold text-gray-900">
                        (310) 295-4421
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {formOpen && (
                <div className="flex flex-col min-h-[400px]">
                  <div className="space-y-5 sm:space-y-6">
                    <input
                      required
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (step2Error) setStep2Error("");
                      }}
                      className={inputBase}
                    />

                    <input
                      type="text"
                      placeholder="Buyer name"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className={inputBase}
                    />

                    <select
                      required
                      value={leadType}
                      onChange={(e) => {
                        setLeadType(e.target.value);
                        if (step2Error) setStep2Error("");
                      }}
                      className={selectBase}
                    >
                      <option value="" disabled>
                        Select your services
                      </option>
                      <option value="call">Call</option>
                      <option value="lead">Leads</option>
                    </select>

                    <PhoneInput
                      country="us"
                      value={phone}
                      onChange={(value) => {
                        setPhone(value);
                        if (step2Error) setStep2Error("");
                      }}
                      enableSearch
                      countryCodeEditable={false}
                      containerStyle={{ width: "100%", height: "48px" }}
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        fontSize: "16px",
                        color: "#374151",
                        paddingLeft: "56px",
                        boxSizing: "border-box",
                      }}
                      buttonStyle={{
                        border: "1px solid #d1d5db",
                        borderRight: "none",
                        borderRadius: "6px 0 0 6px",
                        height: "48px",
                        background: "#fff",
                      }}
                      dropdownStyle={{ zIndex: 9999 }}
                    />

                    {step2Error && (
                      <p className="text-sm text-blue-600">{step2Error}</p>
                    )}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <button
                        type="button"
                        onClick={handleCtaClick}
                        className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
                      >
                        Next
                      </button>

                      <p className="text-sm sm:text-md text-gray-600">
                        Questions?{" "}
                        <span className="font-semibold text-gray-900">
                          (310) 295-4421
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* END FORM */}
          </div>
        </div>
      </div>
    </section>
  );
}
