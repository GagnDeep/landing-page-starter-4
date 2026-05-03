import React from 'react';
import Link from 'next/link';
import { homeContent } from '@/content/home';
import { FloatingBlobs, MagneticButton } from '@/components/visuals';

export function FinalCta() {
  const { finalCta } = homeContent;

  return (
    <section className="py-32 md:py-48 bg-background relative overflow-hidden">
      <FloatingBlobs className="opacity-50" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
          {finalCta.headline}
        </h2>
        <p className="font-sans text-xl md:text-2xl text-muted-foreground font-light mb-12">
          {finalCta.description}
        </p>

        <MagneticButton strength={40}>
          <Link
            href="/contact"
            className="inline-flex h-16 items-center justify-center bg-primary text-primary-foreground px-12 font-sans text-base font-semibold tracking-widest uppercase transition-transform hover:scale-105 shadow-xl shadow-primary/20"
          >
            {finalCta.ctaPrimary}
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
