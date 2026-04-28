"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f1a2e]">
      {/* Background gradient + pattern */}
      <div
        ref={ref}
        className="absolute inset-0 will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28 lg:py-0">

          {/* Left — Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              <span className="text-xs text-[#C9A96E] uppercase tracking-widest font-sans font-medium">
                Board Certified Plastic Surgeon · Mumbai
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FAFAFA] leading-[1.1] mb-6">
              Transform Your
              <br />
              <span className="text-gold-gradient">Confidence</span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-lg sm:text-xl text-[#94a3b8] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Expert plastic, aesthetic & reconstructive surgery in Mumbai. Personalized care,
              natural results, and advanced techniques tailored to you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#C9A96E] text-[#0f1a2e] font-sans font-semibold text-sm rounded-full hover:bg-[#D4B483] hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all duration-200 min-w-[200px] text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/procedures"
                className="px-8 py-4 text-[#C9A96E] font-sans font-medium text-sm rounded-full border border-[#C9A96E]/50 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-200 min-w-[200px] text-center"
              >
                Explore Procedures
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-10 mt-14">
              {[
                { value: "9+", label: "Years Experience" },
                { value: "1000+", label: "Procedures" },
                { value: "700+", label: "Happy Patients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-serif text-3xl font-bold text-[#C9A96E]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#94a3b8] uppercase tracking-widest font-sans mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Doctor Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-[#C9A96E]/8 blur-3xl scale-90" />

            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden border border-[#C9A96E]/20 shadow-2xl shadow-black/40">
                <Image
                  src="/doctor-formal.jpg"
                  alt="Dr. Girish N. Mirajkar — Consultant Plastic Surgeon"
                  width={480}
                  height={600}
                  className="w-full object-cover object-top"
                  priority
                  style={{ aspectRatio: "4/5" }}
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1a2e]/80 to-transparent" />
              </div>

              {/* Floating credential badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#1a2a45] border border-[#C9A96E]/30 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm">
                <div className="font-serif text-xl font-bold text-[#C9A96E]">MCh</div>
                <div className="text-[10px] text-[#94a3b8] font-sans uppercase tracking-wide leading-tight">
                  Plastic Surgery<br />Gold Medal
                </div>
              </div>

              {/* Floating surgery badge */}
              <div className="absolute -top-4 -right-4 bg-[#C9A96E] rounded-2xl px-4 py-3 shadow-xl">
                <div className="font-serif text-lg font-bold text-[#0f1a2e]">MRCS</div>
                <div className="text-[10px] text-[#0f1a2e]/80 font-sans uppercase tracking-wide">England</div>
              </div>

              {/* Surgery action badge */}
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:block">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#C9A96E]/40 shadow-lg">
                  <Image
                    src="/doctor-surgery.jpg"
                    alt="Dr. Girish in surgery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8] animate-bounce">
        <span className="text-xs font-sans uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
