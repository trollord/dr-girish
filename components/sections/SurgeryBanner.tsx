import Image from "next/image";

export default function SurgeryBanner() {
  return (
    <section className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
      {/* Full-width surgical photo */}
      <Image
        src="/doctor-surgery.jpg"
        alt="Dr. Girish performing surgery — precision and expertise in the operating theatre"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,18,32,0.85) 0%, rgba(10,18,32,0.55) 50%, rgba(10,18,32,0.3) 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-4">
              In the Operating Theatre
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight mb-5">
              Surgical Precision,
              <br />
              <span className="text-[#C9A96E]">Every Time</span>
            </h2>
            <p className="text-[#FAFAFA]/75 font-sans text-base sm:text-lg leading-relaxed max-w-md">
              Every procedure is performed by Dr. Girish personally — no delegation, no compromise.
              His hands-on approach ensures consistency and the highest standard of care for every patient.
            </p>

            {/* Credential strip */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["MCh Plastic Surgery", "MRCS (England)", "Gold Medallist", "10+ Years"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs text-[#C9A96E] border border-[#C9A96E]/40 bg-[#C9A96E]/10 rounded-full px-3 py-1.5 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
