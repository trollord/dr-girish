import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0f1a2e]">
      {/* Background radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-4">
          Take the First Step
        </p>
        <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[#FAFAFA] mb-6 leading-tight">
          Ready to Begin
          <br />
          Your Journey?
        </h2>
        <p className="text-[#94a3b8] font-sans text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Schedule a private, no-obligation consultation with Dr. Girish.
          Discuss your goals and get a personalised treatment plan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C9A96E] text-[#0f1a2e] font-sans font-semibold text-sm rounded-full hover:bg-[#D4B483] hover:shadow-lg hover:shadow-[#C9A96E]/30 transition-all duration-200 min-w-[220px] text-center"
          >
            Book a Consultation
          </Link>
          <a
            href="https://wa.me/917620246448?text=Hi%20Dr.%20Girish%2C%20I%27d%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-[#FAFAFA] font-sans font-medium text-sm rounded-full border border-[#243355] hover:border-[#C9A96E]/40 hover:bg-[#1a2a45] transition-all duration-200 min-w-[220px] text-center flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact info bar */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center">
          <a
            href="tel:+917620246448"
            className="flex items-center gap-2 text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans text-sm"
          >
            <Phone size={14} className="text-[#C9A96E]" />
            +91 76202 46448
          </a>
          <div className="w-px h-4 bg-[#243355] hidden sm:block" />
          <span className="text-[#94a3b8] font-sans text-sm">
            Mon – Sat: 5 PM – 8 PM
          </span>
          <div className="w-px h-4 bg-[#243355] hidden sm:block" />
          <span className="text-[#94a3b8] font-sans text-sm">
            Thane, Maharashtra
          </span>
        </div>
      </div>
    </section>
  );
}
