"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 9, suffix: "+", label: "Years of Experience", description: "Practising in Mumbai" },
  { value: 1000, suffix: "+", label: "Procedures Performed", description: "With precision & care" },
  { value: 700, suffix: "+", label: "Happy Patients", description: "Across Mumbai & beyond" },
  // { value: 5, suffix: "", label: "National Awards", description: "For surgical excellence" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, description, start }: (typeof stats)[0] & { start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="text-center group">
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#C9A96E] mb-2 tabular-nums">
        {count}
        <span className="text-[#D4B483]">{suffix}</span>
      </div>
      <div className="font-serif text-lg text-[#FAFAFA] font-semibold mb-1">
        {label}
      </div>
      <div className="text-sm text-[#94a3b8] font-sans">{description}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1220 0%, #0f1a2e 50%, #0a1220 100%)",
      }}
    >
      {/* Gold line top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA]">
            Trusted by Thousands
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              {i > 0 && (
                <div className="hidden lg:block absolute w-px h-16 bg-[#243355] top-1/2 -translate-y-1/2 -left-0" />
              )}
              <StatItem {...stat} start={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
