import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "what-to-expect-rhinoplasty-recovery",
    title: "What to Expect During Rhinoplasty Recovery",
    excerpt:
      "A week-by-week guide to rhinoplasty recovery — from swelling timelines to final results and care tips.",
    category: "Recovery",
    readTime: "5 min read",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close-up of woman's facial profile illustrating rhinoplasty recovery",
  },
  {
    slug: "breast-augmentation-vs-lift-which-is-right",
    title: "Breast Augmentation vs. Lift: Which is Right for You?",
    excerpt:
      "Understanding the difference between augmentation and lift procedures to help you make an informed decision.",
    category: "Procedures",
    readTime: "4 min read",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Doctor consulting with a patient about surgical procedures",
  },
  {
    slug: "fue-hair-transplant-mumbai-guide",
    title: "FUE Hair Transplant in Mumbai: Your Complete Guide",
    excerpt:
      "Everything you need to know about FUE hair transplants — candidacy, procedure, and what results to expect.",
    category: "Hair",
    readTime: "6 min read",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close-up of healthy hair illustrating FUE hair transplant results",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-[#0a1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
              Knowledge Base
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA]">
              Articles & Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A96E] font-sans text-sm font-medium hover:gap-3 transition-all group shrink-0"
          >
            View All Articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden hover:border-[#C9A96E]/30 hover:shadow-lg hover:shadow-[#C9A96E]/5 transition-all duration-300">
                {/* Image header */}
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/60 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C9A96E]/90 rounded-full text-xs text-[#0f1a2e] font-sans font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#94a3b8] font-sans mb-3">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#FAFAFA] mb-3 group-hover:text-[#C9A96E] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm font-sans leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-sans font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
