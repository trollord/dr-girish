import Image from "next/image";

export default function SurgeryBanner() {
  return (
    <section className="bg-[#0a1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          {/* Full image — natural aspect ratio, no cropping */}
          <div className="relative w-full">
            <Image
              src="/doctor-surgery.jpg"
              alt="Dr. Girish performing surgery in the operating theatre"
              width={960}
              height={1280}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text content */}
          <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-0">
            <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-4">
              In the Operating Theatre
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight mb-5">
              Surgical Precision,
              <br />
              <span className="text-gold-gradient">Every Time</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#C9A96E] mb-6" />
            <p className="text-[#94a3b8] font-sans text-base sm:text-lg leading-relaxed mb-8">
              Every procedure is performed by Dr. Girish personally — no delegation,
              no compromise. His hands-on approach ensures consistency and the highest
              standard of care for every patient.
            </p>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-3">
              {["MCh Plastic Surgery", "MRCS (England)", "Gold Medallist", "10+ Years"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs text-[#C9A96E] border border-[#C9A96E]/40 bg-[#C9A96E]/10 rounded-full px-4 py-1.5"
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
