import React from 'react';
import Link from 'next/link';
import { homeContent } from '@/content/home';
import { MagneticButton } from '@/components/visuals';

export function PricingTiers() {
  const { pricingTiers } = homeContent;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          {pricingTiers.headline}
        </h2>
        <p className="font-sans text-lg text-muted-foreground font-light mb-12">
          {pricingTiers.subheadline}
        </p>

        <MagneticButton strength={20}>
          <Link
            href="/pricing"
            className="inline-flex h-14 items-center justify-center border border-primary bg-transparent text-foreground px-12 font-sans text-sm font-semibold tracking-widest uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {pricingTiers.cta}
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
