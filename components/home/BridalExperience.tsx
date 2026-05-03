import React from 'react';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';

export function BridalExperience() {
  const { bridalExperience } = homeContent;

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.salon.src}
          alt={images.hero.salon.alt}
          fill
          className="object-cover object-center"
        />
        {/* Glam gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
        <div className="bg-card/30 backdrop-blur-md border border-border/50 p-12 md:p-16">
          <span className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-6 font-bold block">
            The Salon
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8">
            {bridalExperience.headline}
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            {bridalExperience.description}
          </p>
        </div>
      </div>
    </section>
  );
}
