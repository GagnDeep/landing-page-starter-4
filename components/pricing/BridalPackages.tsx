import React from 'react';
import { pricingContent } from '@/content/pricing';
import { MicroIconSet } from '@/components/visuals';

export function BridalPackages() {
  const { bridalPackages } = pricingContent;

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {bridalPackages.headline}
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            {bridalPackages.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {bridalPackages.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative bg-background border flex flex-col p-8 md:p-12 transition-all duration-500 h-full ${
                tier.highlighted
                  ? 'border-primary shadow-2xl lg:-mt-8 lg:mb-[-2rem] z-10'
                  : 'border-border hover:border-primary/50 mt-0 z-0'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-sans tracking-widest uppercase font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="font-sans text-2xl text-primary font-semibold tracking-wider">
                  {tier.price}
                </p>
              </div>

              <p className="font-sans text-muted-foreground font-light mb-8">
                {tier.description}
              </p>

              <div className="w-full h-px bg-border mb-8" />

              <ul className="flex flex-col gap-4 flex-grow mb-12">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <MicroIconSet iconName="sparkles" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-sans text-muted-foreground font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="/contact"
                  className={`block w-full py-4 text-center font-sans text-sm font-semibold tracking-widest uppercase transition-colors border ${
                    tier.highlighted
                      ? 'bg-primary border-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-transparent border-border text-foreground hover:border-primary'
                  }`}
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
