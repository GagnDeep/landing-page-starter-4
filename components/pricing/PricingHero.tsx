import React from 'react';
import { pricingContent } from '@/content/pricing';
import { DotMatrixGrid } from '@/components/visuals';

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background overflow-hidden border-b border-border">
      <DotMatrixGrid className="opacity-20" size={3} spacing={32} />
      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
          {pricingContent.hero.headline}
        </h1>
        <p className="font-sans text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          {pricingContent.hero.subheadline}
        </p>
      </div>
    </section>
  );
}
