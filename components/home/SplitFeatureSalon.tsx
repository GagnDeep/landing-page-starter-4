import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';
import { MagneticButton } from '@/components/visuals';

export function SplitFeatureSalon() {
  const { splitSalon } = homeContent;

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Image - 60% */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden group">
            <Image
              src={images.salon.bridalGlam.src}
              alt={images.salon.bridalGlam.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          </div>

          {/* Text - 40% */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-6 font-bold">
              {splitSalon.label}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              {splitSalon.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-12 font-light">
              {splitSalon.description}
            </p>
            <MagneticButton strength={20}>
              <Link
                href="/features"
                className="inline-flex h-12 items-center justify-center bg-foreground text-background px-8 font-sans text-sm font-medium tracking-widest uppercase transition-transform hover:scale-105"
              >
                {splitSalon.cta}
              </Link>
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
}
