import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/content/about';
import { images } from '@/lib/images';
import { AnimatedGradientMesh } from '@/components/visuals';

export function AboutHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.about.src}
          alt={images.hero.about.alt}
          fill
          className="object-cover object-center opacity-50 dark:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div>

      <AnimatedGradientMesh className="z-0 opacity-40" intensity="medium" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl mt-16">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
          {aboutContent.hero.headline}
        </h1>
        <p className="font-sans text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          {aboutContent.hero.subheadline}
        </p>
      </div>
    </section>
  );
}
