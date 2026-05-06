import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, CheckCircle, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Hair Restoration Mumbai | FUE Hair Transplant, PRP Therapy | Dr. Girish N. Mirajkar",
  description: "Advanced hair restoration in Mumbai — FUE Hair Transplant, PRP Therapy, and Beard Transplant performed by MCh Plastic Surgeon Dr. Girish N. Mirajkar.",
};

const procedures = [
  {
    id: "fue-transplant",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    imageAlt: "FUE hair transplant surgery procedure",
    name: "FUE Hair Transplant",
    tagline: "Permanent, natural-looking hair restoration",
    description: "Follicular Unit Extraction (FUE) is the gold standard in hair transplantation. Individual hair follicles are harvested from the donor area (typically the back of the scalp) using a precision micro-punch and transplanted to thinning or bald areas. Dr. Girish meticulously designs the hairline to suit your facial structure, ensuring undetectable, natural results that grow permanently.",
    benefits: ["Permanent hair restoration", "No linear scar — tiny dot scars only", "Natural hairline design customised to face", "Grafts survive and grow for lifetime", "Local anaesthesia, walk-in walk-out procedure"],
    recovery: "5-7 days (social), 2-3 weeks (full)",
    anaesthesia: "Local",
  },
  {
    id: "prp-therapy",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "PRP platelet rich plasma therapy scalp treatment",
    name: "PRP Therapy",
    tagline: "Regenerate, strengthen, and thicken",
    description: "Platelet-Rich Plasma (PRP) therapy uses your own blood, processed to concentrate growth factors, and injected into the scalp to stimulate hair follicle activity. It is highly effective for early-to-moderate hair thinning, as a standalone treatment or combined with FUE transplant to maximise graft survival and accelerate regrowth.",
    benefits: ["Uses your own blood — no foreign substances", "Stimulates dormant follicles", "Thickens and strengthens existing hair", "Complements FUE for better graft survival", "No downtime, comfortable outpatient procedure"],
    recovery: "1-2 days",
    anaesthesia: "None / Topical",
  },
  {
    id: "beard-transplant",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Beard transplant facial hair restoration",
    name: "Beard Transplant",
    tagline: "Full, defined beard — exactly where you want it",
    description: "A beard transplant fills patchy, thin, or absent beard areas using FUE-harvested follicles from the scalp. Dr. Girish carefully designs the beard shape, density, and direction to match your facial features and desired style. Whether you want a full beard, a shaped goatee, or coverage for scarring, the results are permanent and indistinguishable from natural beard growth.",
    benefits: ["Fills patchy or absent beard areas", "Permanent and natural-looking results", "Customised beard shape and density", "Covers post-traumatic or surgical scars", "Grafts grow and can be shaved normally"],
    recovery: "5-7 days",
    anaesthesia: "Local",
  },
];

const faqs = [
  { q: "How many grafts do I need for an FUE transplant?", a: "The number of grafts depends on the extent of hair loss, donor availability, and your desired density. A typical FUE session ranges from 1,500 to 3,500 grafts. Dr. Girish provides an accurate graft estimate during your consultation with a detailed scalp assessment." },
  { q: "When will I see results after an FUE transplant?", a: "Transplanted hairs shed within 2-4 weeks (normal and expected — the follicles remain). New growth begins at 3-4 months. Significant density is visible by 6-8 months, with final results at 12-18 months." },
  { q: "Is hair transplant surgery painful?", a: "The procedure is performed under local anaesthesia, making it comfortable throughout. Mild soreness is expected for 2-3 days post-procedure and is easily managed with prescribed pain relief." },
  { q: "How many PRP sessions are needed?", a: "A standard course is 3-4 sessions spaced 4-6 weeks apart, followed by maintenance sessions every 4-6 months. Results are cumulative and most patients notice reduced shedding after the first 2 sessions." },
  { q: "Can women undergo FUE hair transplant?", a: "Yes. Female pattern hair loss can be effectively treated with FUE in suitable candidates. Dr. Girish assesses donor density, hair loss pattern, and underlying causes before recommending surgical or non-surgical options." },
  { q: "Is there an age restriction for hair transplant?", a: "It is generally recommended after age 25-28 when hair loss patterns have stabilised. Transplanting too early risks needing repeat procedures as natural hair loss continues. Each case is assessed individually." },
];

export default function HairRestorationPage() {
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
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Restore Your Confidence</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Hair <span className="text-[#C9A96E]">Restoration</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Advanced FUE technology and regenerative therapies delivering natural, permanent hair restoration — designed around your unique hair loss pattern and facial anatomy.
          </p>
        </div>
      </section>
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {procedures.map((proc) => (
              <div key={proc.id} id={proc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start rounded-2xl border border-[#243355] overflow-hidden bg-[#1a2a45]">
                <div className="relative min-h-[220px] sm:min-h-[280px] overflow-hidden">
                  <Image
                    src={proc.image}
                    alt={proc.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/80 via-[#0a1220]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-serif text-lg text-[#C9A96E]">{proc.name}</p>
                    <p className="font-sans text-sm text-[#94a3b8] italic">{proc.tagline}</p>
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
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">Start Your Hair Restoration Journey</h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Schedule a consultation to assess your hair loss, discuss expectations, and receive a customised restoration plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
              Book a Consultation
            </Link>
            <a href="tel:+917620246448" className="inline-flex items-center justify-center gap-2 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E]/10 font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}