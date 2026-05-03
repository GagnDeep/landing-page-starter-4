import React from 'react';
import { aboutContent } from '@/content/about';

export function OriginStory() {
  const { originStory } = aboutContent;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-sm tracking-[0.3em] text-primary uppercase font-bold text-center mb-12">
          {originStory.headline}
        </h2>

        <div className="flex flex-col gap-8 md:gap-12">
          {originStory.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={`font-sans text-lg md:text-xl leading-relaxed text-muted-foreground font-light ${
                idx === 0 ? "text-2xl md:text-3xl text-foreground !font-normal" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
