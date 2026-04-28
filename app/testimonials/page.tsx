import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Girish Plastic Surgeon Mumbai",
  description: "Read what patients say about their experience with Dr. Girish — real stories from rhinoplasty, facelift, breast surgery, and hair restoration patients in Mumbai.",
};

const testimonials = [
  {
    name: "Priya S.",
    procedure: "Rhinoplasty",
    location: "Mumbai",
    rating: 5,
    date: "February 2026",
    quote: "I had been insecure about my nose for over a decade. After consulting three surgeons, Dr. Girish was the only one who truly understood what I wanted — a subtle refinement, not a dramatic change. Six months on, I have the nose I always pictured. The scar from the open approach is completely invisible. I am so grateful.",
  },
  {
    name: "Sneha R.",
    procedure: "Breast Augmentation",
    location: "Pune",
    rating: 5,
    date: "January 2026",
    quote: "Dr. Girish spent an hour with me during consultation going through every concern I had. The 3D planning really helped me visualise the outcome. The surgery itself was smooth, recovery was easier than I expected, and the results look completely natural. I could not be happier.",
  },
  {
    name: "Rohan M.",
    procedure: "FUE Hair Transplant",
    location: "Mumbai",
    rating: 5,
    date: "November 2025",
    quote: "I had my FUE transplant done nine months ago — 2,400 grafts. The hairline design is exactly what I asked for and the density is incredible. Friends who do not know I had the procedure genuinely cannot tell. Dr. Girish and his team made the entire experience comfortable from start to finish.",
  },
  {
    name: "Kavitha T.",
    procedure: "Tummy Tuck",
    location: "Bangalore",
    rating: 5,
    date: "October 2025",
    quote: "After two pregnancies my abdomen was something I could not fix no matter how much I exercised. The tummy tuck gave me back a flat stomach I had not had in years. Dr. Girish was honest about what the surgery could and could not achieve, which made me trust him completely. Results exceeded my expectations.",
  },
  {
    name: "Aarti K.",
    procedure: "Facelift",
    location: "Mumbai",
    rating: 5,
    date: "September 2025",
    quote: "I was very nervous about looking overdone — I had seen facelifts that looked pulled and unnatural. Dr. Girish reassured me from the first consultation and the result speaks for itself. I look like a rested, younger version of myself. My family said I look refreshed but could not put a finger on why. That is exactly what I wanted.",
  },
  {
    name: "Amit D.",
    procedure: "Beard Transplant",
    location: "Delhi",
    rating: 5,
    date: "August 2025",
    quote: "I had patchy beard growth that bothered me for years. Dr. Girish designed a beard shape that suits my face perfectly. The transplanted hair grew fully and blends seamlessly with my natural beard. The procedure was painless under local anaesthesia and I was back to work in a week. Absolutely worth it.",
  },
  {
    name: "Meera V.",
    procedure: "Breast Reduction",
    location: "Mumbai",
    rating: 5,
    date: "July 2025",
    quote: "Years of back pain and difficulty finding clothes that fit. The breast reduction changed my life. I no longer have constant discomfort and I feel proportionate for the first time. Dr. Girish was compassionate, explained the entire process clearly, and the scars have faded beautifully. I only wish I had done it sooner.",
  },
  {
    name: "Nidhi P.",
    procedure: "Blepharoplasty",
    location: "Mumbai",
    rating: 5,
    date: "June 2025",
    quote: "The hooded eyelids were ageing me significantly and I was always told I looked tired. After the eyelid surgery my eyes are open and bright — it has made an enormous difference to my appearance and confidence. The procedure was quick and recovery was surprisingly easy. Dr. Girish is genuinely skilled and attentive.",
  },
  {
    name: "Suresh L.",
    procedure: "Liposuction",
    location: "Hyderabad",
    rating: 5,
    date: "May 2025",
    quote: "I had stubborn fat around my abdomen and flanks that refused to go despite a healthy lifestyle. Dr. Girish used VASER liposuction and the result is a much more defined contour. The recovery was manageable and the team was available whenever I had questions. Professional practice from start to finish.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={"w-4 h-4 " + (i < rating ? "text-[#C9A96E] fill-[#C9A96E]" : "text-[#243355]")}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      <section className="pt-24 pb-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">In Their Own Words</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Patient <span className="text-[#C9A96E]">Testimonials</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            The most meaningful measure of our work is what our patients say about their experience. Here are their stories — unedited and unfiltered.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-7 flex flex-col hover:border-[#C9A96E]/30 transition-colors duration-300"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#C9A96E]/30 mb-4 flex-shrink-0" />

                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Quote */}
                <p className="font-sans text-[#94a3b8] leading-relaxed mt-4 flex-1 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <hr className="border-[#243355] my-5" />

                {/* Patient info */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-sans font-semibold text-[#FAFAFA] text-sm">{t.name}</p>
                    <p className="font-sans text-xs text-[#C9A96E] mt-0.5">{t.procedure}</p>
                    <p className="font-sans text-xs text-[#94a3b8] mt-0.5">{t.location}</p>
                  </div>
                  <span className="font-sans text-xs text-[#94a3b8] whitespace-nowrap mt-0.5">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-16">
            {[
              { stat: "500+", label: "5-Star Reviews" },
              { stat: "98%", label: "Would Recommend" },
              { stat: "10+", label: "Years of Trust" },
            ].map((item) => (
              <div key={item.stat} className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8">
                <p className="font-serif text-4xl text-[#C9A96E] mb-2">{item.stat}</p>
                <p className="font-sans text-[#94a3b8]">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">
              Ready to Write Your Own Story?
            </h2>
            <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation with Dr. Girish and take the first step toward the transformation you have been considering.
            </p>
            <Link href="/contact" className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}