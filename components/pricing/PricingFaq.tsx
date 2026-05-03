"use client";

import React, { useState } from 'react';
import { pricingContent } from '@/content/pricing';

export function PricingFaq() {
  const { faq } = pricingContent;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-12 text-center">
          {faq.headline}
        </h2>

        <div className="flex flex-col border-t border-border">
          {faq.questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-border">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                >
                  <span className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    {item.q}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-primary font-light text-3xl transition-transform duration-300 transform">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-sans text-muted-foreground font-light text-lg">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
