import React from 'react';
import { aboutContent } from '@/content/about';

export function Philosophy() {
  const { philosophy } = aboutContent;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-20">
          {philosophy.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {philosophy.pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-px bg-border mb-8 group-hover:bg-primary transition-colors duration-500" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-muted-foreground font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
