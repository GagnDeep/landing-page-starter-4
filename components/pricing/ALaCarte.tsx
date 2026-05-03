import React from 'react';
import { pricingContent } from '@/content/pricing';

export function ALaCarte() {
  const { aLaCarte, paymentPlans } = pricingContent;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* A La Carte Services */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
              {aLaCarte.headline}
            </h2>
            <div className="flex flex-col gap-6">
              {aLaCarte.services.map((service, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-border pb-6 last:border-0 last:pb-0">
                  <span className="font-sans text-lg text-foreground font-light">
                    {service.name}
                  </span>
                  <span className="font-sans text-lg text-primary font-medium tracking-wide">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Plans */}
          <div className="bg-background border border-border p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              {paymentPlans.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground font-light mb-6">
              {paymentPlans.description}
            </p>
            <div className="p-6 bg-secondary/5 border-l-2 border-secondary font-sans text-foreground/80 font-medium">
              {paymentPlans.details}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
