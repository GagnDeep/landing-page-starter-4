import React from 'react';
import { homeContent } from '@/content/home';

export function CorePhilosophy() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground font-medium italic tracking-tight leading-snug md:leading-snug mb-12">
          &quot;{homeContent.corePhilosophy.quote}&quot;
        </h2>

        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-px bg-primary/50" />
          <p className="font-sans text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            {homeContent.corePhilosophy.description}
          </p>
          <span className="font-heading text-lg font-bold tracking-widest text-primary uppercase mt-4">
            — {homeContent.corePhilosophy.author}
          </span>
        </div>
      </div>
    </section>
  );
}
