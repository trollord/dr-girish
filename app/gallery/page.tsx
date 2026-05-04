import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Before & After Gallery | Plastic Surgery Results | Dr. Girish N. Mirajkar Mumbai",
  description: "View before and after results from rhinoplasty, facelift, breast augmentation, liposuction, and hair restoration procedures by Dr. Girish N. Mirajkar in Mumbai.",
};

const galleryItems = [
  {
    id: 1, category: "face", procedure: "Rhinoplasty", label: "Nose refinement, natural profile correction",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Woman profile illustrating rhinoplasty result",
  },
  {
    id: 2, category: "breast", procedure: "Breast Augmentation", label: "Cohesive gel implants, 320cc anatomical",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Medical consultation illustrating breast augmentation procedure",
  },
  {
    id: 3, category: "body", procedure: "Tummy Tuck", label: "Full abdominoplasty with liposuction",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fit woman illustrating tummy tuck and body contouring result",
  },
  {
    id: 4, category: "hair", procedure: "FUE Hair Transplant", label: "2,800 grafts, hairline restoration",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Healthy hair illustrating FUE hair transplant result",
  },
  {
    id: 5, category: "face", procedure: "Facelift", label: "SMAS facelift with neck lift",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Confident woman illustrating natural facelift result",
  },
  {
    id: 6, category: "breast", procedure: "Breast Reduction", label: "Reduction and lift combined",
    image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Doctor and patient consultation for breast reduction surgery",
  },
  {
    id: 7, category: "body", procedure: "Liposuction", label: "Abdomen, flanks and thigh sculpting",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sculpted body illustrating liposuction contouring result",
  },
  {
    id: 8, category: "hair", procedure: "Beard Transplant", label: "Full beard reconstruction, 1,400 grafts",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Man with full beard illustrating beard transplant result",
  },
  {
    id: 9, category: "face", procedure: "Blepharoplasty", label: "Upper and lower eyelid surgery",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Woman with bright expressive eyes illustrating blepharoplasty result",
  },
  {
    id: 10, category: "breast", procedure: "Breast Lift", label: "Mastopexy, periareolar technique",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Confident woman illustrating breast lift result",
  },
  {
    id: 11, category: "body", procedure: "Mommy Makeover", label: "Tummy tuck, breast lift, liposuction",
    image: "https://images.unsplash.com/photo-1559757175-7cb057fba93b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Woman looking confident after mommy makeover procedure",
  },
  {
    id: 12, category: "face", procedure: "Lip Augmentation", label: "Hyaluronic acid filler, natural enhancement",
    image: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close-up of lips illustrating natural lip augmentation result",
  },
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
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#243355] overflow-hidden bg-[#1a2a45] hover:border-[#C9A96E]/40 transition-all duration-300"
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/60 to-transparent pointer-events-none" />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 font-sans text-xs text-[#0f1a2e] bg-[#C9A96E] px-2.5 py-1 rounded-full font-semibold">
                    {categoryLabels[item.category]}
                  </span>
                  {/* Before / After label strip */}
                  <div className="absolute bottom-0 inset-x-0 flex">
                    <div className="flex-1 flex items-center justify-center py-2 bg-black/40 border-r border-white/10">
                      <p className="font-sans text-xs text-[#94a3b8] uppercase tracking-widest">Before</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-2 bg-[#C9A96E]/20">
                      <p className="font-sans text-xs text-[#C9A96E] uppercase tracking-widest font-semibold">After</p>
                    </div>
                  </div>
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
