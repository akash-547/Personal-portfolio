import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Highly recommend, He did a great job fixing issues in my Lovable.dev app and getting everything working smoothly again. He understood the problem quickly, communicated clearly, and delivered exactly what I needed. Very reliable and easy to work with. I’d definitely hire him again for future Lovable.dev and SaaS projects.",
    author: "Majid MR Muhammad",
    role: "Client • Lovable.dev Bug Fixes",
    avatar: "MM",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div
        className="container mx-auto
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground
          text-sm font-medium tracking-wider
          uppercase animate-fade-in"
          >
            What People Say
          </span>

          <h2
            className="text-4xl md:text-5xl
          font-bold mt-4 mb-6 animate-fade-in
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {[...Array(testimonials[activeIdx].rating)].map((_, idx) => (
                  <span
                    key={idx}
                    className="text-yellow-400 text-lg leading-none"
                  >
                    ★
                  </span>
                ))}

                <span className="text-sm text-muted-foreground ml-2">
                  {testimonials[activeIdx].rating}.0
                </span>
              </div>

              {/* Real Upwork Review */}
              <blockquote className="text-base md:text-lg font-medium leading-relaxed mb-8 line-clamp-5">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Client Avatar */}
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="text-primary font-semibold text-lg">
                    {testimonials[activeIdx].avatar}
                  </span>
                </div>

                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};