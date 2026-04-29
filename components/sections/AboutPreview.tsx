"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "MBBS · MS · DNB (General Surgery) · MRCS (England)" },
  { icon: Award, text: "MCh (Gold Medal) · DrNB (Plastic & Reconstructive Surgery)" },
  { icon: Stethoscope, text: "Consultant Plastic, Aesthetic & Reconstructive Surgeon" },
];

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#0f1a2e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image */}
          <div ref={ref} className="relative">
            <div className="relative rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 aspect-[4/5]">
              <Image
                src="/doctor-office.jpg"
                alt="Dr. Girish — Plastic Surgeon in clinic"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gold border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/30 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 right-2 sm:-bottom-6 sm:-right-4 lg:right-0 bg-[#1a2a45] border border-[#243355] rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl">
              <div className="font-serif text-3xl font-bold text-[#C9A96E]">
                9+
              </div>
              <div className="text-xs text-[#94a3b8] font-sans uppercase tracking-wide">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
              About Dr. Girish
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight mb-5 sm:mb-6">
              Precision, Art &<br />
              <span className="text-gold-gradient">Compassion</span>
            </h2>
            <div className="section-divider" />
            <p className="text-[#94a3b8] font-sans leading-relaxed mb-6">
              Dr. Girish Mirajkar is a board-certified Consultant Plastic, Aesthetic & Reconstructive Surgeon
              based in Thane, with a decade of surgical experience in
              reconstructive and aesthetic procedures. He combines surgical
              precision with an artistic eye to deliver results that are
              natural, refined, and long-lasting.
            </p>
            <p className="text-[#94a3b8] font-sans leading-relaxed mb-8">
              Trained at leading institutions across India, Dr. Girish
              specializes in facial rejuvenation, body contouring, breast
              aesthetics, and hair restoration — providing a comprehensive,
              patient-centered approach to cosmetic care.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#C9A96E]" />
                  </div>
                  <span className="text-sm text-[#94a3b8] font-sans">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#C9A96E] font-sans font-medium text-sm hover:gap-3 transition-all group"
            >
              Read Full Bio
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
