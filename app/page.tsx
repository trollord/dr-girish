import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProceduresGrid from "@/components/sections/ProceduresGrid";
import Stats from "@/components/sections/Stats";
import SurgeryBanner from "@/components/sections/SurgeryBanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Dr. Girish N. Mirajkar | Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai",
  description:
    "Dr. Girish N. Mirajkar is a board-certified Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai offering rhinoplasty, breast augmentation, liposuction, hair transplant and more. Book a consultation today.",
  alternates: {
    canonical: "https://drgirish.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProceduresGrid />
      <Stats />
      <SurgeryBanner />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
