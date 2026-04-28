import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Breast Procedures Mumbai | Augmentation, Reduction, Lift | Dr. Girish N. Mirajkar",
  description: "Expert breast surgery in Mumbai — Breast Augmentation, Reduction, and Lift performed by Board Certified MCh Plastic Surgeon Dr. Girish N. Mirajkar.",
};

const procedures = [
  {
    id: "augmentation",
    name: "Breast Augmentation",
    tagline: "Fuller contours, naturally balanced",
    description: "Breast augmentation enhances breast size and shape using silicone or saline implants, or fat transfer. Dr. Girish tailors implant selection to your unique body frame, ensuring results that look proportionate and feel natural. A detailed 3D planning session is conducted during consultation.",
    benefits: ["Custom implant selection by body frame", "Natural and proportionate enhancement", "Submuscular or subglandular placement options", "Fat transfer option available", "Long-lasting results with quality implants"],
    recovery: "10-14 days",
    anaesthesia: "General",
  },
  {
    id: "reduction",
    name: "Breast Reduction",
    tagline: "Relief, comfort, and renewed confidence",
    description: "Breast reduction removes excess breast tissue, fat, and skin to relieve physical symptoms such as neck and back pain, shoulder grooving, skin irritation, and difficulty with physical activity. The procedure also improves breast shape and symmetry, delivering both medical and aesthetic benefits simultaneously.",
    benefits: ["Relieves chronic neck, back, and shoulder pain", "Improves posture and physical activity", "Corrects asymmetry", "Improves breast shape and projection", "Insurance coverage may apply for medical cases"],
    recovery: "14-21 days",
    anaesthesia: "General",
  },
  {
    id: "lift",
    name: "Breast Lift (Mastopexy)",
    tagline: "Restore youth and firmness",
    description: "A breast lift raises and reshapes sagging breasts by removing excess skin and tightening surrounding tissue. It repositions the nipple-areola complex to a more youthful position. Often performed after weight loss, pregnancy, or breastfeeding, it can be combined with augmentation for added volume.",
    benefits: ["Lifts and firms sagging breasts", "Repositions nipple-areola to natural position", "Can be combined with augmentation", "Corrects asymmetry", "Long-lasting results with stable weight"],
    recovery: "10-14 days",
    anaesthesia: "General",
  },
];

const faqs = [
  { q: "What type of breast implants does Dr. Girish N. Mirajkar use?", a: "Dr. Girish uses FDA-approved, CE-marked cohesive gel silicone implants from internationally recognised manufacturers. Round and anatomical profiles are available depending on your goals and anatomy." },
  { q: "Will breast implants affect breastfeeding?", a: "Most breast augmentation techniques preserve breastfeeding ability. Incision location and implant placement are planned to minimise interference with milk ducts and glands." },
  { q: "How long do breast implants last?", a: "Modern high-quality implants are designed to last 15-20+ years. They do not require routine replacement unless there is a complication. Regular check-ups are recommended." },
  { q: "Will there be visible scarring after breast surgery?", a: "Scars are placed in inconspicuous locations within the breast fold, around the areola, or in the armpit. They fade significantly over 12-18 months." },
  { q: "Can I combine a breast lift with augmentation?", a: "Yes. A combined augmentation-mastopexy is a common and effective procedure. Dr. Girish will assess whether a combined or staged approach is safer for your case." },
  { q: "When can I return to exercise after breast surgery?", a: "Light walking resumes within days. Upper body exercise is restricted for 6 weeks. Full unrestricted exercise typically resumes at 8 weeks post-surgery." },
];

export default function BreastProceduresPage() {
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
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Personalised to Your Frame</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Breast <span className="text-[#C9A96E]">Procedures</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Whether seeking enhancement, relief from physical discomfort, or restoration — Dr. Girish delivers breast surgery tailored to your body, lifestyle, and goals.
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
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">Begin Your Consultation</h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Discuss your goals with Dr. Girish in a private, comfortable setting and receive a personalised recommendation.
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