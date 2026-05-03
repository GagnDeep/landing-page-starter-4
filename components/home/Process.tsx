import React from 'react';
import { homeContent } from '@/content/home';

export function Process() {
  const { process } = homeContent;

  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {process.headline}
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {process.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center mb-8 relative transition-colors duration-500 group-hover:border-primary group-hover:bg-primary/5">
                  <span className="font-heading text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
