"use client";

import { useState } from "react";

const procedures = [
  "Select a Procedure",
  // Facial — Surgical
  "Rhinoplasty (Nose Job)",
  "Facelift",
  "Brow-Lift",
  "Blepharoplasty (Eyelid Surgery)",
  "Dimple Creation",
  "Lip Height Reduction",
  "Buccal Fat Removal",
  "Fat Transfer for Scars",
  "Scar Revision (Face)",
  // Ear
  "Prominent Ears Correction",
  "Stahl's Ear Correction",
  "Lobuloplasty (Ear Piercings)",
  "Keloid Treatment After Piercings",
  // Facial — Non-Surgical
  "Botox",
  "Fillers",
  "Thread-Lift",
  // Hair
  "Hair Transplant",
  "FUE Hair Transplant",
  "Beard Transplant",
  // Breast
  "Breast Augmentation",
  "Breast Reduction",
  "Mastopexy (Breast-Lift)",
  "Augmentation Mastopexy",
  "Nipple Inversion Correction",
  // Body
  "Double Chin Reduction",
  "Arm Fat Reduction",
  "Gynaecomastia",
  "Tummy Fat Removal",
  "360° Liposuction",
  "Tummy Tuck (Abdominoplasty)",
  "Total Mommy-Makeover",
  "Thigh Lift",
  "Post Massive Weight Loss Surgery",
  // Scar
  "Cesarian Section Scar Revision",
  "Body Scar Revision",
  "Acne Scar Treatment",
  "Previous Surgical Scar Revision",
  // Aesthetic Gynaecology
  "Labia Reduction",
  "Vaginal Rejuvenation",
  // Other
  "Other / Multiple Procedures",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      procedure: (form.elements.namedItem("procedure") as HTMLSelectElement).value,
      consultationType: (form.querySelector('input[name="consultationType"]:checked') as HTMLInputElement | null)?.value || "Not specified",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");

      // Fade out form, then show success
      setVisible(false);
      setTimeout(() => {
        setStatus("success");
        setVisible(true);
      }, 350);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8 overflow-hidden">
      <div
        style={{
          transition: "opacity 350ms ease, transform 350ms ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
        }}
      >
        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">Message Submitted!</h3>
            <p className="text-sm text-[#94a3b8] font-sans leading-relaxed max-w-xs mx-auto">
              Thank you for reaching out. Dr. Girish&apos;s team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-2xl text-[#FAFAFA] mb-2">Request an Appointment</h2>
            <p className="font-sans text-sm text-[#94a3b8] mb-8">All fields marked with * are required.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="firstName">
                    First Name <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input type="text" id="firstName" name="firstName" required placeholder="Priya"
                    className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm" />
                </div>
                <div>
                  <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="lastName">
                    Last Name <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Sharma"
                    className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm" />
                </div>
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="email">
                    Email Address <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input type="email" id="email" name="email" required placeholder="priya@example.com"
                    className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm" />
                </div>
                <div>
                  <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="phone">
                    Phone Number <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input type="tel" id="phone" name="phone" required placeholder="+91 76202 46448"
                    className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm" />
                </div>
              </div>

              {/* Procedure */}
              <div>
                <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="procedure">
                  Procedure of Interest <span className="text-[#C9A96E]">*</span>
                </label>
                <select id="procedure" name="procedure" required
                  className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#94a3b8] focus:outline-none focus:border-[#C9A96E] transition-colors text-sm appearance-none cursor-pointer">
                  {procedures.map((p) => (
                    <option key={p} value={p === "Select a Procedure" ? "" : p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Consultation type */}
              <div>
                <label className="block font-sans text-sm text-[#94a3b8] mb-3">Consultation Type</label>
                <div className="flex flex-wrap gap-4">
                  {["In-Clinic (Mumbai)", "Virtual / Online"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="consultationType" value={type}
                        defaultChecked={type === "In-Clinic (Mumbai)"} className="w-4 h-4 accent-[#C9A96E]" />
                      <span className="font-sans text-sm text-[#94a3b8]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="message">
                  Message / Additional Details
                </label>
                <textarea id="message" name="message" rows={5}
                  placeholder="Describe your concerns, goals, or any questions you have for Dr. Girish..."
                  className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm resize-none" />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" name="consent" required
                  className="w-4 h-4 mt-0.5 accent-[#C9A96E] flex-shrink-0" />
                <label htmlFor="consent" className="font-sans text-xs text-[#94a3b8] leading-relaxed cursor-pointer">
                  I consent to Dr. Girish&apos;s team contacting me regarding my enquiry. I understand that my personal
                  information will be handled in accordance with applicable privacy laws and will not be shared with
                  third parties. <span className="text-[#C9A96E]">*</span>
                </label>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-red-400 font-sans">{errorMsg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"}
                className="w-full bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold py-4 px-8 rounded-full transition-colors duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : "Submit Consultation Request"}
              </button>

              <p className="font-sans text-xs text-[#94a3b8] text-center leading-relaxed">
                Our team will respond within 24 hours on business days. For urgent matters, please call us directly.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
