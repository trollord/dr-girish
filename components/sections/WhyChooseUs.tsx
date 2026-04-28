import { Shield, Microscope, Heart, Clock, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Board Certified",
    description:
      "Fully certified by the Medical Council of India with fellowship training in plastic & reconstructive surgery.",
  },
  {
    icon: Microscope,
    title: "Advanced Techniques",
    description:
      "Utilizing the latest surgical technologies and minimally invasive methods for better outcomes and faster recovery.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every treatment plan is individually crafted — no cookie-cutter approaches. Your goals, your timeline.",
  },
  {
    icon: Clock,
    title: "Quick Recovery",
    description:
      "Optimized protocols to minimize downtime and get you back to life faster, with ongoing post-op support.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Over 2000 successful procedures with a portfolio of before & after results that speak for themselves.",
  },
  {
    icon: Users,
    title: "Patient-First Approach",
    description:
      "Transparent consultations, honest expectations, and a supportive team with you every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0f1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
            Why Dr. Girish
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            The Right Choice for You
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-6" />
          <p className="text-[#94a3b8] font-sans max-w-xl mx-auto leading-relaxed">
            Exceptional outcomes come from combining skill, technology, and a
            genuine commitment to patient wellbeing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-[#1a2a45] border border-[#243355] rounded-2xl p-7 hover:border-[#C9A96E]/30 hover:bg-[#1e2f50] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center mb-5 group-hover:bg-[#C9A96E]/15 transition-colors">
                <Icon size={20} className="text-[#C9A96E]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#FAFAFA] mb-3">
                {title}
              </h3>
              <p className="text-[#94a3b8] text-sm font-sans leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
