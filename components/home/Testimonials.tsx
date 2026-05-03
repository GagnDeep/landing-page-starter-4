import React from 'react';
import { homeContent } from '@/content/home';

export function Testimonials() {
  const { testimonials } = homeContent;

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-16">
          {testimonials.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.reviews.map((review, idx) => (
            <div key={idx} className="bg-card border border-border p-8 md:p-12 relative group">
              <span className="absolute top-4 left-6 font-heading text-8xl text-primary/10 group-hover:text-primary/20 transition-colors leading-none select-none">
                &quot;
              </span>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed relative z-10 mb-8 font-light">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-primary" />
                <span className="font-heading font-bold text-foreground tracking-widest uppercase">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
