import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Articles | Plastic Surgery Insights | Dr. Girish N. Mirajkar Mumbai",
  description: "Expert articles on rhinoplasty, facelift, breast augmentation, hair restoration, and body contouring from MCh Plastic Surgeon Dr. Girish N. Mirajkar.",
};

const posts = [
  {
    slug: "rhinoplasty-what-to-expect",
    category: "Face",
    title: "Rhinoplasty: What to Expect Before, During, and After Surgery",
    excerpt: "A comprehensive guide to the nose reshaping procedure — from your initial consultation and surgical planning to the recovery timeline and final results. Everything you need to make an informed decision.",
    date: "March 5, 2026",
    readTime: "8 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close-up portrait illustrating facial profile relevant to rhinoplasty",
  },
  {
    slug: "fue-hair-transplant-complete-guide",
    category: "Hair",
    title: "The Complete Guide to FUE Hair Transplant in 2026",
    excerpt: "How does FUE work, who is the ideal candidate, how many grafts will you need, and what does the growth timeline look like? We answer every question about modern hair transplantation.",
    date: "February 20, 2026",
    readTime: "10 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Healthy hair illustrating FUE hair transplant results",
  },
  {
    slug: "breast-augmentation-implant-guide",
    category: "Breast",
    title: "Choosing the Right Breast Implant: Size, Profile, and Material",
    excerpt: "Round vs anatomical, silicone vs saline, over vs under the muscle — the number of choices can be overwhelming. Dr. Girish breaks down every decision factor in simple, practical terms.",
    date: "February 8, 2026",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Doctor consulting with patient about surgical procedure options",
  },
  {
    slug: "tummy-tuck-vs-liposuction",
    category: "Body",
    title: "Tummy Tuck vs Liposuction: Which One Do You Actually Need?",
    excerpt: "These two procedures are often confused, but they address very different problems. Understanding the distinction could save you from choosing the wrong surgery — or avoiding a beneficial one.",
    date: "January 25, 2026",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fit woman illustrating body contouring results",
  },
  {
    slug: "facelift-myths-debunked",
    category: "Face",
    title: "5 Facelift Myths That Are Completely False",
    excerpt: "From the fear of looking windswept to worries about visible scars, many facelift misconceptions stop patients from exploring an option that could genuinely transform their confidence. We set the record straight.",
    date: "January 12, 2026",
    readTime: "5 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Confident mature woman illustrating natural facelift results",
  },
  {
    slug: "mommy-makeover-right-time",
    category: "Body",
    title: "The Mommy Makeover: Is the Timing Right for You?",
    excerpt: "A mommy makeover can restore body confidence after pregnancy, but timing matters. Dr. Girish discusses when to proceed, what to realistically expect, and how to prepare for the best possible outcome.",
    date: "December 30, 2025",
    readTime: "9 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Woman looking confident illustrating mommy makeover transformation",
  },
];

const categoryColors: Record<string, string> = {
  Face: "text-rose-300 bg-rose-900/30 border-rose-800/50",
  Hair: "text-emerald-300 bg-emerald-900/30 border-emerald-800/50",
  Breast: "text-violet-300 bg-violet-900/30 border-violet-800/50",
  Body: "text-sky-300 bg-sky-900/30 border-sky-800/50",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      <section className="pt-24 pb-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">Knowledge Centre</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Blog &amp; <span className="text-[#C9A96E]">Articles</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            In-depth guides, procedure overviews, and honest insights from Dr. Girish — designed to help you make confident, well-informed decisions about aesthetic surgery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post */}
          <div className="mb-12">
            <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-6">Featured Article</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-[#243355] overflow-hidden bg-[#1a2a45] hover:border-[#C9A96E]/40 transition-colors duration-300">
              <div className="relative min-h-[260px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/70 via-[#0a1220]/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className={"font-sans text-xs border rounded-full px-3 py-1 " + (categoryColors[featured.category] || "text-[#C9A96E] bg-[#C9A96E]/10 border-[#C9A96E]/20")}>
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={"font-sans text-xs border rounded-full px-3 py-1 " + (categoryColors[featured.category] || "text-[#C9A96E] bg-[#C9A96E]/10 border-[#C9A96E]/20")}>
                    {featured.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#94a3b8] text-xs font-sans">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </div>
                  <div className="flex items-center gap-1 text-[#94a3b8] text-xs font-sans">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </div>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FAFAFA] mb-4 leading-snug">{featured.title}</h2>
                <p className="font-sans text-[#94a3b8] leading-relaxed mb-6">{featured.excerpt}</p>
                <Link href={"/blog/" + featured.slug} className="inline-flex items-center gap-2 text-[#C9A96E] font-sans font-semibold hover:gap-3 transition-all duration-200">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group bg-[#1a2a45] border border-[#243355] hover:border-[#C9A96E]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Image header */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/60 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className={"font-sans text-xs border rounded-full px-3 py-1 " + (categoryColors[post.category] || "text-[#C9A96E] bg-[#C9A96E]/10 border-[#C9A96E]/20")}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1 text-[#94a3b8] text-xs font-sans">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-[#94a3b8] text-xs font-sans">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-serif text-lg text-[#FAFAFA] mb-3 leading-snug group-hover:text-[#C9A96E] transition-colors duration-200 flex-1">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-[#94a3b8] leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={"/blog/" + post.slug} className="inline-flex items-center gap-2 text-[#C9A96E] font-sans text-sm font-semibold mt-auto group-hover:gap-3 transition-all duration-200">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">
            Have a Specific Question?
          </h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Our articles cover common questions but every patient is unique. Book a consultation and get answers tailored specifically to your anatomy, goals, and medical history.
          </p>
          <Link href="/contact" className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
