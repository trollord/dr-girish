"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const procedures = [
  { label: "Face Procedures", href: "/procedures/face" },
  { label: "Breast Procedures", href: "/procedures/breast" },
  { label: "Body Contouring", href: "/procedures/body" },
  { label: "Hair Restoration", href: "/procedures/hair-restoration" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Procedures", href: "/procedures", dropdown: true },
  // { label: "Gallery", href: "/gallery" },
  // { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1a2e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#243355]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-serif text-xl font-bold text-[#C9A96E] group-hover:text-[#D4B483] transition-colors">
              Dr. Girish N. Mirajkar
            </span>
            <span className="text-[10px] text-[#94a3b8] uppercase tracking-widest font-sans">
              Consultant Plastic, Aesthetic & Reconstructive Surgeon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-[#1a2a45] border border-[#243355] rounded-lg shadow-xl shadow-black/30 py-2">
                      {procedures.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="block px-4 py-2.5 text-sm text-[#FAFAFA] hover:text-[#C9A96E] hover:bg-[#243355] transition-colors font-sans"
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-medium text-[#C9A96E] border border-[#C9A96E] rounded-full hover:bg-[#C9A96E] hover:text-[#0f1a2e] transition-all duration-200 font-sans"
            >
              Book Appointment
            </Link>
            <button
              className="lg:hidden text-[#FAFAFA] hover:text-[#C9A96E] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f1a2e]/98 backdrop-blur-md border-t border-[#243355]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-3 text-[#FAFAFA] hover:text-[#C9A96E] hover:bg-[#1a2a45] rounded-lg transition-colors font-sans text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 space-y-1 mt-1">
                    {procedures.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-3 py-2 text-[#94a3b8] hover:text-[#C9A96E] text-sm rounded-lg hover:bg-[#1a2a45] transition-colors font-sans"
                        onClick={() => setMobileOpen(false)}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#243355]">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-medium text-[#C9A96E] border border-[#C9A96E] rounded-full hover:bg-[#C9A96E] hover:text-[#0f1a2e] transition-all font-sans"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
