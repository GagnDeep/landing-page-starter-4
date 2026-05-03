import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';

export function Location() {
  const { location } = homeContent;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">

          <div className="bg-background p-12 md:p-16 flex flex-col justify-center">
            <span className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-6 font-bold block">
              Visit Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              {location.headline}
            </h2>
            <address className="font-sans text-lg text-muted-foreground font-light not-italic mb-2">
              {location.address}
            </address>
            <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="font-sans text-lg text-foreground hover:text-primary transition-colors mb-12 block">
              {location.phone}
            </a>
            <div>
              <Link
                href="/contact"
                className="inline-block font-sans text-sm font-semibold tracking-widest uppercase text-primary hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-primary"
              >
                {location.cta}
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <Image
              src={images.salon.interior.src}
              alt={images.salon.interior.alt}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
