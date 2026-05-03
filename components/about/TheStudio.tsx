import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/content/about';
import { images } from '@/lib/images';

export function TheStudio() {
  const { theStudio } = aboutContent;

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images.salon.interior.src}
              alt={images.salon.interior.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start lg:pl-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              {theStudio.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
              {theStudio.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
