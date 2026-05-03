import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';
import { MagneticButton } from '@/components/visuals';

export function GalleryTeaser() {
  const { galleryTeaser } = homeContent;

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {galleryTeaser.headline}
        </h2>
        <MagneticButton strength={20}>
          <Link
            href="/features"
            className="inline-flex h-12 items-center justify-center border border-border bg-transparent text-foreground px-8 font-sans text-sm font-medium tracking-widest uppercase transition-colors hover:bg-muted"
          >
            {galleryTeaser.cta}
          </Link>
        </MagneticButton>
      </div>

      {/* Tight Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-1 md:px-2">
        {[images.salon.partyMakeup, images.salon.hairStyling, images.academy.masterclass, images.academy.students].map((img, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
