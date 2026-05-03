import React from 'react';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { images } from '@/lib/images';

export function FeaturedArtists() {
  const { featuredArtists } = homeContent;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {featuredArtists.headline}
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            {featuredArtists.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/5] group overflow-hidden">
            <Image
              src={images.portraits.artist1.src}
              alt={images.portraits.artist1.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase font-bold block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Senior Artist
              </span>
              <h3 className="font-heading text-3xl text-foreground font-bold">Simran</h3>
            </div>
          </div>
          <div className="relative aspect-[4/5] group overflow-hidden">
            <Image
              src={images.portraits.artist2.src}
              alt={images.portraits.artist2.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase font-bold block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Academy Instructor
              </span>
              <h3 className="font-heading text-3xl text-foreground font-bold">Kiran</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
