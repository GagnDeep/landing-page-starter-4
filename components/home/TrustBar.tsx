import React from 'react';
import { homeContent } from '@/content/home';
import { LogoMarquee } from '@/components/visuals';

export function TrustBar() {
  return (
    <section className="py-8 border-y border-border bg-card/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="font-sans text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center md:text-left whitespace-nowrap">
          {homeContent.trustBar.text}
        </p>
        <div className="w-full md:w-2/3 overflow-hidden">
          <LogoMarquee logos={homeContent.trustBar.logos} speed="slow" className="py-0 bg-transparent" />
        </div>
      </div>
    </section>
  );
}
