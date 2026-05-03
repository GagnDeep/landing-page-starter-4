import React from 'react';
import Link from 'next/link';
import { featuresContent } from '@/content/features';
import { MagneticButton } from '@/components/visuals';

export function FeaturesCta() {
  const { cta } = featuresContent;

  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-8">
          {cta.headline}
        </h2>
        <p className="font-sans text-xl text-background/70 font-light mb-12">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton strength={20}>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center bg-primary text-primary-foreground px-8 font-sans text-sm font-semibold tracking-widest uppercase transition-transform hover:scale-105 min-w-[250px] shadow-xl shadow-primary/20 border border-primary"
            >
              {cta.buttonSalon}
            </Link>
          </MagneticButton>
          <MagneticButton strength={20}>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center border border-background bg-transparent text-background px-8 font-sans text-sm font-medium tracking-widest uppercase transition-colors hover:bg-background/10 min-w-[250px]"
            >
              {cta.buttonAcademy}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
