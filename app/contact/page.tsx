import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Girish N. Mirajkar Plastic Surgeon Mumbai",
  description: "Schedule a private consultation with Dr. Girish N. Mirajkar — MCh Plastic Surgeon in Mumbai. Contact us by phone, email, or our online booking form.",
};

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

const contactDetails = [
  {
    icon: MapPin,
    label: "Clinic Address",
    lines: [{ text: "Dr. Girish Mirajkar | Plastic Surgeon" }, { text: "G4 Akansha C.H.S, Navpada, Thane, Maharashtra" }],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [{ text: "+91 76202 46448", href: "tel:+917620246448" }],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ text: "drgirishmirajkar@gmail.com", href: "mailto:drgirishmirajkar@gmail.com" }],
  },
  {
    icon: Clock,
    label: "Clinic Hours",
    lines: [
      { text: "Monday – Saturday: 5:00 PM – 8:00 PM" },
      { text: "Sunday: By Appointment" },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Private Consultations Available</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Book a <span className="text-[#C9A96E]">Consultation</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Take the first step. Fill in the form below and our team will contact you within 24 hours to confirm your appointment. In-clinic and virtual consultations are available.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8">
                <h2 className="font-serif text-2xl text-[#FAFAFA] mb-2">Request an Appointment</h2>
                <p className="font-sans text-sm text-[#94a3b8] mb-8">All fields marked with * are required.</p>

                <form className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="firstName">
                        First Name <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Priya"
                        className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="lastName">
                        Last Name <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Sharma"
                        className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="email">
                        Email Address <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="priya@example.com"
                        className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="phone">
                        Phone Number <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 76202 46448"
                        className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Procedure */}
                  <div>
                    <label className="block font-sans text-sm text-[#94a3b8] mb-2" htmlFor="procedure">
                      Procedure of Interest <span className="text-[#C9A96E]">*</span>
                    </label>
                    <select
                      id="procedure"
                      name="procedure"
                      required
                      className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#94a3b8] focus:outline-none focus:border-[#C9A96E] transition-colors text-sm appearance-none cursor-pointer"
                    >
                      {procedures.map((p) => (
                        <option key={p} value={p === "Select a Procedure" ? "" : p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Consultation type */}
                  <div>
                    <label className="block font-sans text-sm text-[#94a3b8] mb-3">
                      Consultation Type
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {["In-Clinic (Mumbai)", "Virtual / Online"].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="consultationType"
                            value={type}
                            defaultChecked={type === "In-Clinic (Mumbai)"}
                            className="w-4 h-4 accent-[#C9A96E]"
                          />
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
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your concerns, goals, or any questions you have for Dr. Girish..."
                      className="w-full bg-[#0f1a2e] border border-[#243355] rounded-xl px-4 py-3 font-sans text-[#FAFAFA] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#C9A96E] transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="w-4 h-4 mt-0.5 accent-[#C9A96E] flex-shrink-0"
                    />
                    <label htmlFor="consent" className="font-sans text-xs text-[#94a3b8] leading-relaxed cursor-pointer">
                      I consent to Dr. Girish's team contacting me regarding my enquiry. I understand that my personal information will be handled in accordance with applicable privacy laws and will not be shared with third parties. <span className="text-[#C9A96E]">*</span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold py-4 px-8 rounded-full transition-colors duration-200 text-base"
                  >
                    Submit Consultation Request
                  </button>

                  <p className="font-sans text-xs text-[#94a3b8] text-center leading-relaxed">
                    Our team will respond within 24 hours on business days. For urgent matters, please call us directly.
                  </p>
                </form>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#C9A96E]" />
                      </div>
                      <h3 className="font-sans font-semibold text-[#FAFAFA] text-sm">{item.label}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.lines.map((line, i) =>
                        "href" in line ? (
                          <a key={i} href={line.href} className="block font-sans text-sm text-[#94a3b8] hover:text-[#C9A96E] transition-colors leading-relaxed">
                            {line.text}
                          </a>
                        ) : (
                          <p key={i} className="font-sans text-sm text-[#94a3b8] leading-relaxed">
                            {line.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Google Maps embed */}
              <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.4463985305916!2d72.9664114139195!3d19.188622098828635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b98aa0a7a18f%3A0x5bee53b763628b30!2sDr%20Girish%20Mirajkar%20%7C%20Plastic%20Surgeon%20%7C%20Thane!5e1!3m2!1sen!2sin!4v1777452007518!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Girish Mirajkar Clinic Location — Thane"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="py-16 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "Confidential", desc: "All consultations are strictly private and your information is never shared." },
              { title: "No Pressure", desc: "A consultation is exploratory. There is never any obligation to proceed." },
              { title: "Personalised Plan", desc: "Every recommendation is tailored to your specific anatomy and goals." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a2a45] border border-[#243355] rounded-xl p-6">
                <h3 className="font-serif text-lg text-[#C9A96E] mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-[#94a3b8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}