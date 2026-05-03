import React from 'react';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';

export function FounderSpotlight() {
  const { founderSpotlight } = homeContent;

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-0">

          {/* Portrait */}
          <div className="w-full md:w-1/2 relative z-10 md:pr-12 lg:pr-24">
            <div className="relative aspect-[3/4] w-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
              <Image
                src={images.portraits.founder.src}
                alt={images.portraits.founder.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Editorial Content */}
          <div className="w-full md:w-1/2 relative z-20 md:-ml-12 lg:-ml-24 bg-background/95 backdrop-blur-sm p-8 lg:p-16 border border-border shadow-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
              {founderSpotlight.headline}
            </h2>
            <p className="font-sans text-sm tracking-[0.2em] text-primary uppercase mb-8 font-semibold">
              {founderSpotlight.subheadline}
            </p>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light mb-12">
              {founderSpotlight.description}
            </p>

            {/* Signature styling using italic serif */}
            <div className="text-right">
              <span className="font-heading text-3xl md:text-4xl text-foreground italic font-medium opacity-80">
                {founderSpotlight.signatureText}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
