import React from 'react';
import Link from 'next/link';
import { pricingContent } from '@/content/pricing';
import { MagneticButton, FloatingBlobs } from '@/components/visuals';

export function PricingCta() {
  const { cta } = pricingContent;

  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      <FloatingBlobs className="opacity-20" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-8">
          {cta.headline}
        </h2>
        <p className="font-sans text-xl text-background/70 font-light mb-12">
          {cta.description}
        </p>

        <MagneticButton strength={30}>
          <Link
            href="/contact"
            className="inline-flex h-16 items-center justify-center bg-primary text-primary-foreground px-12 font-sans text-base font-semibold tracking-widest uppercase transition-transform hover:scale-105 shadow-2xl shadow-primary/20"
          >
            {cta.button}
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
