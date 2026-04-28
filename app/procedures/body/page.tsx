import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Body Contouring Mumbai | Liposuction, Tummy Tuck, Mommy Makeover | Dr. Girish N. Mirajkar",
  description: "Expert body contouring surgery in Mumbai — Liposuction, Tummy Tuck, Mommy Makeover, and Arm Lift by MCh Plastic Surgeon Dr. Girish N. Mirajkar.",
};

const procedures = [
  {
    id: "liposuction",
    name: "Liposuction",
    tagline: "Sculpt stubborn fat with precision",
    description: "Liposuction removes localised fat deposits that are resistant to diet and exercise. Dr. Girish uses advanced VASER ultrasound-assisted and tumescent liposuction techniques for smooth, precise fat removal from the abdomen, flanks, thighs, arms, back, and chin. The result is improved contour and definition, not weight loss.",
    benefits: ["Targets diet-resistant fat deposits", "VASER and tumescent techniques available", "Treats multiple areas in one session", "Minimal scarring via small access ports", "Improved body contour and proportion"],
    recovery: "7-14 days",
    anaesthesia: "General / IV Sedation",
  },
  {
    id: "tummy-tuck",
    name: "Tummy Tuck (Abdominoplasty)",
    tagline: "A flatter, firmer abdomen",
    description: "A tummy tuck removes excess abdominal skin and fat while tightening separated or weakened abdominal muscles (rectus diastasis). It is ideal for patients after significant weight loss or pregnancy who cannot achieve a flat abdomen through exercise alone. Dr. Girish performs full, mini, and extended abdominoplasty depending on the degree of correction needed.",
    benefits: ["Removes excess skin and fat", "Repairs separated abdominal muscles", "Improves abdominal wall strength", "Long-lasting results with stable weight", "Can be combined with liposuction"],
    recovery: "14-21 days",
    anaesthesia: "General",
  },
  {
    id: "mommy-makeover",
    name: "Mommy Makeover",
    tagline: "Restore your pre-pregnancy confidence",
    description: "A mommy makeover is a customised combination of procedures to address the physical changes of pregnancy and breastfeeding. Typically including breast augmentation or lift, tummy tuck, and liposuction, it restores both breast and abdominal contour in a single surgical session. Dr. Girish personalises each plan to the patient's anatomy and goals.",
    benefits: ["Comprehensive body restoration in one surgery", "Customised combination of procedures", "Addresses breasts, abdomen, and flanks", "One anaesthetic, one recovery", "Significant confidence restoration"],
    recovery: "21-28 days",
    anaesthesia: "General",
  },
  {
    id: "arm-lift",
    name: "Arm Lift (Brachioplasty)",
    tagline: "Defined, toned upper arms",
    description: "An arm lift removes excess skin and fat from the upper arms — the classic bat-wing appearance that develops with age or after significant weight loss. Dr. Girish places the incision along the inner arm where it is naturally concealed, removing redundant tissue and firming the skin for toned, proportionate arms.",
    benefits: ["Removes sagging upper arm skin", "Improves arm contour and definition", "Scar positioned along inner arm", "Can be combined with liposuction", "Long-lasting with weight maintenance"],
    recovery: "10-14 days",
    anaesthesia: "General / IV Sedation",
  },
];

const faqs = [
  { q: "Is liposuction a weight-loss procedure?", a: "No. Liposuction is a body contouring tool, not a weight-loss treatment. It is best suited for patients near their ideal weight with localised fat deposits that do not respond to diet and exercise." },
  { q: "How much skin is removed in a tummy tuck?", a: "This varies greatly by patient. Dr. Girish assesses the degree of skin laxity, muscle separation, and fat distribution during consultation to plan how much tissue needs to be removed for optimal results." },
  { q: "When is the best time to have a mommy makeover?", a: "We recommend waiting until you have completed your family, as future pregnancies can reverse results. It is also best performed when your weight has been stable for at least 6 months and you have finished breastfeeding." },
  { q: "Will I have drains after a tummy tuck?", a: "Surgical drains are typically placed for 5-7 days after abdominoplasty to prevent fluid accumulation. Dr. Girish will instruct you on drain care and schedule drain removal at your follow-up appointment." },
  { q: "Can body contouring procedures be combined?", a: "Yes, and it is common. Combining liposuction with a tummy tuck or arm lift reduces overall recovery time and often achieves more harmonious results. Safety and operating time are always prioritised." },
  { q: "How long do body contouring results last?", a: "Results are long-lasting provided your weight remains stable. Liposuction permanently removes fat cells from treated areas. Tummy tuck results are maintained indefinitely without additional pregnancies or major weight fluctuations." },
];

export default function BodyProceduresPage() {
  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      <div className="pt-24 pb-4 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/procedures" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#C9A96E] font-sans text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to All Procedures
          </Link>
        </div>
      </div>
      <section className="pb-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Sculpt and Restore</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Body <span className="text-[#C9A96E]">Contouring</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Targeted body contouring procedures designed to reveal the silhouette you have worked toward — and address changes that diet and exercise cannot correct alone.
          </p>
        </div>
      </section>
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {procedures.map((proc, index) => (
              <div key={proc.id} id={proc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start rounded-2xl border border-[#243355] overflow-hidden bg-[#1a2a45]">
                <div className="min-h-[160px] sm:min-h-[220px] bg-gradient-to-br from-[#243355] to-[#0a1220] flex items-center justify-center p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A96E]/20 border-2 border-[#C9A96E]/40 flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-xl text-[#C9A96E]">{index + 1}</span>
                    </div>
                    <p className="font-serif text-xl text-[#C9A96E]">{proc.name}</p>
                    <p className="font-sans text-sm text-[#94a3b8] mt-1 italic">{proc.tagline}</p>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#FAFAFA] mb-3">{proc.name}</h2>
                  <p className="font-sans text-[#94a3b8] leading-relaxed mb-6">{proc.description}</p>
                  <h3 className="font-sans text-sm font-semibold text-[#C9A96E] uppercase tracking-wider mb-3">Key Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {proc.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-[#94a3b8]">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C9A96E]" />
                      <span className="font-sans text-sm text-[#94a3b8]">Recovery: <span className="text-[#FAFAFA]">{proc.recovery}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C9A96E]" />
                      <span className="font-sans text-sm text-[#94a3b8]">Anaesthesia: <span className="text-[#FAFAFA]">{proc.anaesthesia}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#1a2a45] border border-[#243355] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-sans font-medium text-[#FAFAFA] hover:text-[#C9A96E] transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-[#C9A96E] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-sans text-[#94a3b8] leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">Ready to Transform?</h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Consult with Dr. Girish to explore which body contouring procedures are right for your goals and anatomy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
              Book a Consultation
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E]/10 font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}