import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';
import { AnimatedGradientMesh, MagneticButton } from '@/components/visuals';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden w-full">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.home.src}
          alt={images.hero.home.alt}
          fill
          className="object-cover object-center opacity-40 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Animated Mesh Layer */}
      <AnimatedGradientMesh className="z-0 opacity-50" intensity="medium" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-16">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground mb-6 leading-none">
          {homeContent.hero.headline}
        </h1>
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 font-light tracking-wide">
          {homeContent.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center bg-primary text-primary-foreground px-8 font-sans text-sm font-medium tracking-widest uppercase transition-colors hover:bg-primary/90 min-w-[200px]"
            >
              {homeContent.hero.ctaPrimary}
            </Link>
          </MagneticButton>
          <MagneticButton strength={20}>
            <Link
              href="/features"
              className="inline-flex h-14 items-center justify-center border border-primary/30 bg-transparent text-foreground px-8 font-sans text-sm font-medium tracking-widest uppercase transition-colors hover:bg-muted min-w-[200px]"
            >
              {homeContent.hero.ctaSecondary}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
