"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    procedure: "Rhinoplasty",
    rating: 5,
    text: "Dr. Girish completely transformed my confidence. The results are so natural — nobody can tell I've had surgery. The whole team was professional and caring throughout.",
  },
  {
    name: "Anita R.",
    procedure: "Breast Augmentation",
    rating: 5,
    text: "I was nervous at first, but Dr. Girish took the time to explain everything in detail. The consultation was thorough and the results exceeded my expectations. Highly recommend!",
  },
  {
    name: "Meera K.",
    procedure: "Liposuction",
    rating: 5,
    text: "After two children, I wanted my body back. Dr. Girish listened to my goals and delivered results I didn't think were possible. Recovery was faster than expected.",
  },
  {
    name: "Rahul M.",
    procedure: "FUE Hair Transplant",
    rating: 5,
    text: "I had tried many things before. Dr. Girish's hair transplant changed everything — the density and hairline look completely natural. Best decision I've made.",
  },
  {
    name: "Sunita P.",
    procedure: "Facelift",
    rating: 5,
    text: "At 52, I look the best I've ever felt. Dr. Girish's artistry is exceptional — subtle, natural, and beautifully done. The entire experience was world-class.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-[#0f1a2e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
            Patient Stories
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            What Our Patients Say
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <div
                key={t.name + i}
                className={`bg-[#1a2a45] border rounded-2xl p-7 transition-all duration-300 ${
                  i === 1
                    ? "border-[#C9A96E]/40 shadow-lg shadow-[#C9A96E]/10 scale-105"
                    : "border-[#243355] opacity-70"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-[#C9A96E] fill-[#C9A96E]"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-[#94a3b8] font-sans text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#243355] border border-[#C9A96E]/20 flex items-center justify-center">
                    <span className="text-[#C9A96E] font-serif font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-[#FAFAFA] font-sans text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-[#C9A96E] text-xs font-sans uppercase tracking-wide">
                      {t.procedure}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <div className="bg-[#1a2a45] border border-[#C9A96E]/40 rounded-2xl p-7">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-[#C9A96E] fill-[#C9A96E]"
                    />
                  )
                )}
              </div>
              <p className="text-[#94a3b8] font-sans text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#243355] border border-[#C9A96E]/20 flex items-center justify-center">
                  <span className="text-[#C9A96E] font-serif font-bold text-sm">
                    {testimonials[current].name[0]}
                  </span>
                </div>
                <div>
                  <div className="text-[#FAFAFA] font-sans text-sm font-semibold">
                    {testimonials[current].name}
                  </div>
                  <div className="text-[#C9A96E] text-xs font-sans uppercase tracking-wide">
                    {testimonials[current].procedure}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#243355] flex items-center justify-center text-[#94a3b8] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "w-6 h-2 bg-[#C9A96E]"
                      : "w-2 h-2 bg-[#243355] hover:bg-[#C9A96E]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#243355] flex items-center justify-center text-[#94a3b8] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
