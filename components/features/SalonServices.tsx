import React from 'react';
import Image from 'next/image';
import { featuresContent } from '@/content/features';
import { images } from '@/lib/images';

export function SalonServices() {
  const { salonServices } = featuresContent;

  return (
    <section id="salon" className="py-24 bg-card scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex flex-col md:flex-row gap-16 items-start">

          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <span className="font-sans text-xs tracking-[0.3em] text-primary uppercase font-bold block mb-4">
              The Salon
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {salonServices.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground font-light mb-12">
              {salonServices.subheadline}
            </p>
            <div className="relative aspect-[3/4] w-full max-w-sm rounded-lg overflow-hidden hidden md:block">
               <Image
                src={images.salon.bridalGlam.src}
                alt={images.salon.bridalGlam.alt}
                fill
                className="object-cover"
               />
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-12">
            {salonServices.services.map((service, idx) => (
              <div key={idx} className="group border-b border-border pb-12 last:border-0 last:pb-0">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-lg text-muted-foreground font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-border text-xs font-sans tracking-wider uppercase text-muted-foreground rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
