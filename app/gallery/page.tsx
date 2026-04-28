import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Before & After Gallery | Plastic Surgery Results | Dr. Girish N. Mirajkar Mumbai",
  description: "View before and after results from rhinoplasty, facelift, breast augmentation, liposuction, and hair restoration procedures by Dr. Girish N. Mirajkar in Mumbai.",
};

const galleryItems = [
  { id: 1, category: "face", procedure: "Rhinoplasty", label: "Nose refinement, natural profile correction" },
  { id: 2, category: "breast", procedure: "Breast Augmentation", label: "Cohesive gel implants, 320cc anatomical" },
  { id: 3, category: "body", procedure: "Tummy Tuck", label: "Full abdominoplasty with liposuction" },
  { id: 4, category: "hair", procedure: "FUE Hair Transplant", label: "2,800 grafts, hairline restoration" },
  { id: 5, category: "face", procedure: "Facelift", label: "SMAS facelift with neck lift" },
  { id: 6, category: "breast", procedure: "Breast Reduction", label: "Reduction and lift combined" },
  { id: 7, category: "body", procedure: "Liposuction", label: "Abdomen, flanks and thigh sculpting" },
  { id: 8, category: "hair", procedure: "Beard Transplant", label: "Full beard reconstruction, 1,400 grafts" },
  { id: 9, category: "face", procedure: "Blepharoplasty", label: "Upper and lower eyelid surgery" },
  { id: 10, category: "breast", procedure: "Breast Lift", label: "Mastopexy, periareolar technique" },
  { id: 11, category: "body", procedure: "Mommy Makeover", label: "Tummy tuck, breast lift, liposuction" },
  { id: 12, category: "face", procedure: "Lip Augmentation", label: "Hyaluronic acid filler, natural enhancement" },
];

const gradients = [
  "from-rose-900/60 via-[#1a2a45] to-[#0a1220]",
  "from-violet-900/60 via-[#1a2a45] to-[#0a1220]",
  "from-sky-900/60 via-[#1a2a45] to-[#0a1220]",
  "from-emerald-900/60 via-[#1a2a45] to-[#0a1220]",
  "from-amber-900/60 via-[#1a2a45] to-[#0a1220]",
  "from-pink-900/60 via-[#1a2a45] to-[#0a1220]",
];

const categoryLabels: Record<string, string> = {
  face: "Face",
  breast: "Breast",
  body: "Body",
  hair: "Hair",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Real Results</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Before &amp; After <span className="text-[#C9A96E]">Gallery</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            A curated selection of results from procedures performed by Dr. Girish. All photographs are shared with explicit patient consent.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#1a2a45] border border-[#243355] rounded-full px-5 py-2.5 text-[#94a3b8] font-sans text-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] inline-block"></span>
            All images published with written patient consent
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar — static display with note */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {["All", "Face", "Breast", "Body", "Hair"].map((filter) => (
              <button
                key={filter}
                className={
                  filter === "All"
                    ? "font-sans text-sm font-semibold px-6 py-2.5 rounded-full bg-[#C9A96E] text-[#0f1a2e] transition-colors"
                    : "font-sans text-sm font-semibold px-6 py-2.5 rounded-full border border-[#243355] text-[#94a3b8] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
                }
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#243355] overflow-hidden bg-[#1a2a45] hover:border-[#C9A96E]/40 transition-all duration-300"
              >
                {/* Before / After placeholder visual */}
                <div className="relative">
                  <div className={
                    "aspect-[4/3] bg-gradient-to-br " + gradients[index % gradients.length] +
                    " flex"
                  }>
                    <div className="flex-1 flex items-center justify-center border-r border-white/10">
                      <div className="text-center">
                        <p className="font-sans text-xs text-[#94a3b8] uppercase tracking-widest mb-1">Before</p>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                          <span className="font-serif text-[#94a3b8] text-lg">B</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-sans text-xs text-[#C9A96E] uppercase tracking-widest mb-1">After</p>
                        <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center mx-auto">
                          <span className="font-serif text-[#C9A96E] text-lg">A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 font-sans text-xs text-[#0f1a2e] bg-[#C9A96E] px-2.5 py-1 rounded-full font-semibold">
                    {categoryLabels[item.category]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-[#FAFAFA] mb-1">{item.procedure}</h3>
                  <p className="font-sans text-sm text-[#94a3b8]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Consent note */}
          <div className="mt-12 bg-[#1a2a45] border border-[#243355] rounded-xl p-6 text-center">
            <p className="font-sans text-sm text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#C9A96E] font-semibold">Patient Privacy Notice:</span> All before and after photographs displayed in this gallery have been obtained with explicit written consent from the respective patients. Photographs are the exclusive property of Dr. Girish N. Mirajkar and may not be reproduced without permission. Results may vary between patients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">
            Envision Your Results
          </h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Schedule a consultation to discuss your goals and see how Dr. Girish can help you achieve them.
          </p>
          <Link href="/contact" className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}