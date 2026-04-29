import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const procedures = [
  { label: "Face Procedures", href: "/procedures/face" },
  { label: "Breast Procedures", href: "/procedures/breast" },
  { label: "Body Contouring", href: "/procedures/body" },
  { label: "Hair Restoration", href: "/procedures/hair-restoration" },
];

const quickLinks = [
  { label: "About Dr. Girish", href: "/about" },
  { label: "Before & After Gallery", href: "/gallery" },
  { label: "Patient Testimonials", href: "/testimonials" },
  { label: "Blog & Articles", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1220] border-t border-[#243355]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-[#C9A96E]">
                Dr. Girish N. Mirajkar
              </span>
              <p className="text-[10px] text-[#94a3b8] uppercase tracking-widest mt-0.5 font-sans">
                Consultant Plastic, Aesthetic & Reconstructive Surgeon
              </p>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed font-sans mt-4">
              Board-certified Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai with over 10
              years of experience. Dedicated to enhancing your natural beauty
              with precision, care, and artistry.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1a2a45] flex items-center justify-center text-[#94a3b8] hover:text-[#C9A96E] hover:bg-[#243355] transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1a2a45] flex items-center justify-center text-[#94a3b8] hover:text-[#C9A96E] hover:bg-[#243355] transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1a2a45] flex items-center justify-center text-[#94a3b8] hover:text-[#C9A96E] hover:bg-[#243355] transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="font-serif text-[#FAFAFA] font-semibold mb-4 text-base">
              Procedures
            </h3>
            <div className="w-8 h-0.5 bg-[#C9A96E] mb-4" />
            <ul className="space-y-2.5">
              {procedures.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-[#FAFAFA] font-semibold mb-4 text-base">
              Quick Links
            </h3>
            <div className="w-8 h-0.5 bg-[#C9A96E] mb-4" />
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-[#FAFAFA] font-semibold mb-4 text-base">
              Contact
            </h3>
            <div className="w-8 h-0.5 bg-[#C9A96E] mb-4" />
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#C9A96E] mt-0.5 shrink-0" />
                <span className="text-sm text-[#94a3b8] font-sans leading-relaxed">
                  5XQ8+HH,<br />
                  Thane, Maharashtra
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#C9A96E] shrink-0" />
                <a
                  href="tel:+917620246448"
                  className="text-sm text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans"
                >
                  +91 76202 46448
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#C9A96E] shrink-0" />
                <a
                  href="mailto:drgirishmirajkar@gmail.com"
                  className="text-sm text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans"
                >
                  drgirishmirajkar@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-[#94a3b8] font-sans uppercase tracking-wide mb-2">
                Clinic Hours
              </p>
              <p className="text-sm text-[#94a3b8] font-sans">
                Mon – Sat: 5:00 PM – 8:00 PM
              </p>
              <p className="text-sm text-[#94a3b8] font-sans">
                Sun: By Appointment Only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#243355] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94a3b8] font-sans text-center">
            © {new Date().getFullYear()} Dr. Girish N. Mirajkar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs text-[#94a3b8] hover:text-[#C9A96E] transition-colors font-sans"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
