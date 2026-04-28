import Link from "next/link";
import { ArrowRight } from "lucide-react";

const procedures = [
  {
    title: "Face",
    subtitle: "Facial Procedures",
    href: "/procedures/face",
    description:
      "Surgical and non-surgical facial procedures — from rhinoplasty and facelifts to Botox, fillers, and thread-lifts for a naturally refined appearance.",
    items: ["Rhinoplasty (Nose Job)", "Facelift", "Brow-Lift", "Blepharoplasty", "Dimple Creation", "Botox & Fillers"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "👤",
  },
  {
    title: "Breast",
    subtitle: "Breast Procedures",
    href: "/procedures/breast",
    description:
      "Expert breast procedures tailored to your frame and goals — augmentation, reduction, lift, nipple correction, and combined augmentation mastopexy.",
    items: ["Breast Augmentation", "Breast Reduction", "Mastopexy (Breast-lift)", "Nipple Inversion Correction", "Augmentation Mastopexy"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "✦",
  },
  {
    title: "Body",
    subtitle: "Body Contouring",
    href: "/procedures/body",
    description:
      "Sculpt and refine your silhouette — from 360° liposuction and tummy tuck to mommy makeover, gynaecomastia correction, and post weight loss surgery.",
    items: ["360° Liposuction", "Tummy Tuck", "Total Mommy-Makeover", "Gynaecomastia", "Thigh Lift", "Arm Fat Reduction"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "◈",
  },
  {
    title: "Hair",
    subtitle: "Hair Restoration",
    href: "/procedures/hair-restoration",
    description:
      "Natural-looking hair restoration with advanced transplant techniques for scalp and beard alike.",
    items: ["Hair Transplant", "FUE Transplant", "Hairline Design", "Beard Transplant"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "◎",
  },
  {
    title: "Ears",
    subtitle: "Ear Aesthetics",
    href: "/procedures/face",
    description:
      "Specialized procedures for ear aesthetics — prominent ear correction, Stahl's ear, lobuloplasty, and keloid treatment after piercings.",
    items: ["Prominent Ears Correction", "Stahl's Ear", "Lobuloplasty", "Keloid Treatment"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "◉",
  },
  {
    title: "Scars",
    subtitle: "Scar Revision",
    href: "/procedures/body",
    description:
      "Advanced scar revision for facial scars, C-section scars, acne scars, body scars, and fat transfer for scar improvement.",
    items: ["Facial Scars", "C-Section Scars", "Acne Scars", "Fat Transfer for Scars", "Buccal Fat Removal"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "✸",
  },
  {
    title: "Gynaecology",
    subtitle: "Aesthetic Gynaecology",
    href: "/procedures/body",
    description:
      "Private, sensitive aesthetic gynaecology procedures performed with utmost discretion and care.",
    items: ["Labia Reduction", "Vaginal Rejuvenation"],
    gradient: "from-[#1a2a45] to-[#0f1a2e]",
    icon: "◇",
  },
];

export default function ProceduresGrid() {
  return (
    <section className="py-24 bg-[#0a1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            Our Procedures
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-6" />
          <p className="text-[#94a3b8] font-sans max-w-xl mx-auto leading-relaxed">
            Comprehensive aesthetic and reconstructive procedures performed with
            the highest standards of safety and artistry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {procedures.map((proc) => (
            <Link key={proc.title} href={proc.href} className="group block">
              <div className="h-full bg-[#1a2a45] border border-[#243355] rounded-2xl p-6 hover:border-[#C9A96E]/40 hover:shadow-lg hover:shadow-[#C9A96E]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-xl mb-5 group-hover:bg-[#C9A96E]/15 transition-colors">
                  <span>{proc.icon}</span>
                </div>

                {/* Labels */}
                <p className="text-[#C9A96E] text-xs font-sans uppercase tracking-widest mb-1">
                  {proc.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">
                  {proc.title}
                </h3>

                {/* Description */}
                <p className="text-[#94a3b8] text-sm font-sans leading-relaxed mb-5 flex-1">
                  {proc.description}
                </p>

                {/* Procedure list */}
                <ul className="space-y-1.5 mb-6">
                  {proc.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-[#94a3b8] font-sans flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9A96E]/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-sans font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All procedures CTA */}
        <div className="text-center mt-12">
          <Link
            href="/procedures"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#C9A96E] border border-[#C9A96E]/40 rounded-full hover:bg-[#C9A96E]/10 hover:border-[#C9A96E] transition-all font-sans"
          >
            View All Procedures
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
