import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Face Procedures Mumbai | Rhinoplasty, Facelift, Blepharoplasty | Dr. Girish N. Mirajkar',
  description: 'Explore facial plastic surgery procedures in Mumbai performed by MCh Plastic Surgeon Dr. Girish N. Mirajkar.',
};

const procedures = [
  { id: 'rhinoplasty', name: 'Rhinoplasty (Nose Job)', tagline: 'Redefine your profile with precision', description: 'Rhinoplasty reshapes the nose to improve harmony with facial features. Dr. Girish N. Mirajkar performs both open and closed rhinoplasty, addressing a prominent hump, wide nostrils, a drooping tip, or breathing difficulties. The result is a nose that looks as though you were born with it.', benefits: ['Corrects structural asymmetries', 'Improves nasal tip definition', 'Reduces or refines nasal bridge', 'Can address breathing obstruction', 'Permanent, natural-looking results'], recovery: '7-14 days', anaesthesia: 'General' },
  { id: 'facelift', name: 'Facelift (Rhytidectomy)', tagline: 'Turn back the clock naturally', description: 'A facelift addresses sagging skin, deepened folds, and loss of facial volume that comes with ageing. Dr. Girish N. Mirajkar uses the SMAS technique to lift underlying muscle as well as skin, ensuring results that last 8-12 years without the pulled, over-operated look.', benefits: ['Addresses mid-face and jowl laxity', 'Restores jawline definition', 'SMAS-layer technique for longevity', 'Can be combined with neck lift', 'Natural, rested appearance'], recovery: '10-21 days', anaesthesia: 'General / IV Sedation' },
  { id: 'blepharoplasty', name: 'Blepharoplasty (Eyelid Surgery)', tagline: 'Open, bright, refreshed eyes', description: 'Blepharoplasty removes excess skin, fat, and muscle from the upper and/or lower eyelids, addressing drooping lids, under-eye bags, and a tired appearance. Dr. Girish N. Mirajkar places incisions that heal invisibly within natural skin folds.', benefits: ['Removes excess upper eyelid skin', 'Eliminates under-eye bags and puffiness', 'Scars hidden within eyelid creases', 'Can improve visual field', 'Quick procedure, lasting results'], recovery: '5-10 days', anaesthesia: 'Local / IV Sedation' },
  { id: 'lip-augmentation', name: 'Lip Augmentation', tagline: 'Fuller, perfectly shaped lips', description: 'Lip augmentation enhances volume, definition, and symmetry using dermal fillers or fat transfer. Dr. Girish N. Mirajkar specialises in subtle enhancement that preserves lip movement. Both temporary (hyaluronic acid) and permanent (fat transfer) options are available.', benefits: ['Custom volume and shape enhancement', 'Natural lip movement preserved', 'Option of temporary or permanent results', 'Corrects lip asymmetry', 'No downtime with filler option'], recovery: '1-3 days (filler) / 5-7 days (fat transfer)', anaesthesia: 'Topical / Local' },
];

const faqs = [
  { q: 'How long do face procedure results last?', a: 'Rhinoplasty results are permanent. Facelifts typically last 8-12 years. Blepharoplasty lasts 10+ years. Lip fillers last 9-18 months; fat transfer is long-lasting to permanent.' },
  { q: 'Will there be visible scarring after facial surgery?', a: 'Dr. Girish places all incisions strategically within natural skin creases or inside the nostrils, making scars virtually invisible once fully healed.' },
  { q: 'What is the minimum age for facial procedures?', a: 'Rhinoplasty is recommended after 17-18 years when nasal growth is complete. Facelifts and blepharoplasty are typically performed on adults 30+.' },
  { q: 'Can multiple facial procedures be combined?', a: 'Yes. Combining procedures is common — one anaesthetic, one recovery period, and harmonious combined results.' },
  { q: 'How do I prepare for facial surgery?', a: 'Stop smoking 4 weeks prior, avoid blood thinners 2 weeks prior, arrange a recovery companion, and follow fasting instructions.' },
  { q: 'Is a virtual consultation available?', a: 'Yes. Dr. Girish offers online consultations for patients outside Mumbai covering photo analysis, procedure discussion, and preliminary planning.' },
];

export default function FaceProceduresPage() {
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
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Surgical and Non-Surgical</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Face <span className="text-[#C9A96E]">Procedures</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Precision facial surgery that harmonises your features while preserving the authenticity of your natural appearance.
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
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-3">What to Expect</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA]">Recovery and Aftercare</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: 'Day 1-3', desc: 'Rest at home, head elevated, cold compresses as advised. A companion is recommended.' },
              { phase: 'Day 4-7', desc: 'Swelling and bruising peak then begin to subside. Sutures removed if external. Light activities resume.' },
              { phase: 'Week 2-4', desc: 'Most patients return to social and professional activities. Residual swelling resolves gradually.' },
              { phase: 'Month 3-12', desc: 'Final results become fully visible as deeper swelling clears and tissues settle naturally.' },
            ].map((phase, i) => (
              <div key={i} className="bg-[#1a2a45] border border-[#243355] rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-[#C9A96E] flex items-center justify-center text-[#0f1a2e] font-bold text-sm font-sans mb-4">{i + 1}</div>
                <h3 className="font-serif text-lg text-[#C9A96E] mb-2">{phase.phase}</h3>
                <p className="font-sans text-sm text-[#94a3b8] leading-relaxed">{phase.desc}</p>
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
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">Take the First Step</h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Consult with Dr. Girish to discuss your facial goals and receive a personalised treatment plan.
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
