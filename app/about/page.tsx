import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, CheckCircle, GraduationCap, Heart, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Girish N. Mirajkar | MCh (Gold Medal) DrNB Plastic Surgeon Mumbai",
  description:
    "Dr. Girish N. Mirajkar — MBBS MS DNB MRCS (England) MCh (Gold Medal) DrNB — Consultant Plastic, Aesthetic and Reconstructive Surgeon in Mumbai with extensive expertise in cosmetic and reconstructive surgery.",
};

const education = [
  {
    year: "MBBS",
    degree: "Bachelor of Medicine & Bachelor of Surgery",
    institution: "Medical Degree — Foundation of Clinical Excellence",
    icon: GraduationCap,
  },
  {
    year: "MS",
    degree: "Master of Surgery",
    institution: "Advanced Surgical Training",
    icon: GraduationCap,
  },
  {
    year: "DNB",
    degree: "Diplomate of National Board — General Surgery",
    institution: "National Board of Examinations, India",
    icon: GraduationCap,
  },
  {
    year: "MRCS",
    degree: "Member of the Royal College of Surgeons — England",
    institution: "Royal College of Surgeons of England",
    icon: Award,
  },
  {
    year: "MCh",
    degree: "Master of Chirurgiae — Plastic Surgery (Gold Medal)",
    institution: "Super-speciality in Plastic & Reconstructive Surgery",
    icon: Star,
  },
  {
    year: "DrNB",
    degree: "Doctorate of National Board — Plastic & Reconstructive Surgery",
    institution: "National Board of Examinations, India",
    icon: Award,
  },
];

const certifications = [
  "MBBS · MS · DNB (General Surgery)",
  "MRCS — Member, Royal College of Surgeons, England",
  "MCh — Plastic Surgery (Gold Medal)",
  "DrNB — Plastic & Reconstructive Surgery",
  "Member — Indian Association of Plastic Surgeons (IAPS)",
  "Member — Association of Plastic Surgeons of India (APSI)",
];

const philosophyPoints = [
  {
    title: "Patient-First Approach",
    desc: "Every consultation begins and ends with listening. Your goals, concerns, and comfort drive every decision we make together.",
    icon: Heart,
  },
  {
    title: "Natural Results",
    desc: "True artistry means enhancing what is already beautiful — not replacing it. Dr. Girish's signature is results that look unmistakably natural.",
    icon: Star,
  },
  {
    title: "Safety & Precision",
    desc: "All procedures are performed in accredited facilities with the highest standards of anaesthesia, sterility, and post-operative care.",
    icon: CheckCircle,
  },
  {
    title: "Lifelong Partnership",
    desc: "The relationship doesn't end in the operating room. We walk with you through every stage of your transformation journey.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      {/* ─── Hero ─── */}
      <section className="pt-24 pb-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">
            The Surgeon Behind the Results
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            About{" "}
            <span className="text-[#C9A96E]">Dr. Girish N. Mirajkar</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            MBBS MS DNB MRCS(Eng) MCh(Gold Medal) DrNB · Consultant Plastic, Aesthetic & Reconstructive Surgeon · Mumbai
          </p>
        </div>
      </section>

      {/* ─── Bio ─── */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 items-center">
            {/* Doctor Photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#C9A96E]/20 shadow-2xl shadow-black/30">
                <Image
                  src="/doctor-surgery.jpg"
                  alt="Dr. Girish in the operating theatre"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/30 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#C9A96E] text-[#0f1a2e] rounded-xl px-5 py-3 shadow-xl">
                <p className="font-serif text-lg font-bold">10+</p>
                <p className="font-sans text-xs font-semibold">Years Experience</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-6 leading-snug">
                Crafting Confidence,{" "}
                <span className="text-[#C9A96E]">One Patient at a Time</span>
              </h2>
              <div className="space-y-4 text-[#94a3b8] font-sans leading-relaxed">
                <p>
                  Dr. Girish is a Board Certified MCh Plastic Surgeon based in Mumbai,
                  India, with over a decade of specialised experience in aesthetic and reconstructive
                  surgery. His practice is built on a singular philosophy: every patient deserves
                  results that feel as natural as they look.
                </p>
                <p>
                  Trained at some of India's most prestigious institutions — including Grant Medical
                  College, KEM Hospital, and LTMMC — Dr. Girish brings together a rigorous academic
                  foundation and refined surgical artistry. He has performed thousands of successful
                  procedures ranging from rhinoplasty and facelifts to advanced body contouring and
                  hair restoration.
                </p>
                <p>
                  An active member of the Indian Association of Plastic Surgeons (IAPS), he
                  regularly participates in national and international conferences to stay at the
                  forefront of evolving techniques in plastic and aesthetic surgery.
                </p>
                <p>
                  Beyond the operating theatre, Dr. Girish is known for his calm, empathetic
                  consultation style — taking time to understand each patient's unique anatomy,
                  lifestyle, and aspirations before crafting a personalised surgical plan.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-8 bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-8 py-3 rounded-full transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ─── Education Timeline ─── */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-3">
              Academic Background
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA]">
              Education &amp; Training
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#243355] hidden sm:block" />

            <div className="space-y-10">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="sm:pl-20 relative">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-[#1a2a45] border-2 border-[#C9A96E] items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C9A96E]" />
                    </div>
                    <div className="bg-[#1a2a45] border border-[#243355] rounded-xl p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-xl text-[#FAFAFA]">{item.degree}</h3>
                        <span className="font-sans text-sm text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/20 px-3 py-1 rounded-full whitespace-nowrap">
                          {item.year}
                        </span>
                      </div>
                      <p className="font-sans text-[#94a3b8]">{item.institution}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-3">
              Credentials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA]">
              Certifications &amp; Memberships
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-[#1a2a45] border border-[#243355] rounded-xl p-5 flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                <p className="font-sans text-[#FAFAFA] text-sm leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-3">
              Our Ethos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-4">
              The Dr. Girish Philosophy
            </h2>
            <p className="text-[#94a3b8] font-sans max-w-2xl mx-auto">
              Every decision in our practice stems from four core principles that guide how we think,
              operate, and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {philosophyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={i} className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#C9A96E]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#FAFAFA] mb-3">{point.title}</h3>
                  <p className="font-sans text-[#94a3b8] leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Schedule a private consultation with Dr. Girish and take the first step toward the
            results you've envisioned.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200 text-lg"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
