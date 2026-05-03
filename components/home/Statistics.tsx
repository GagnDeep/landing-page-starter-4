import React from 'react';
import { homeContent } from '@/content/home';
import { DotMatrixGrid } from '@/components/visuals';

export function Statistics() {
  const { statistics } = homeContent;

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <DotMatrixGrid className="opacity-10 dark:opacity-20 text-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-background/20">
          {statistics.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center pt-12 md:pt-0">
              <span className="font-heading text-6xl md:text-7xl font-bold text-background mb-4">
                {stat.number}
              </span>
              <span className="font-sans text-sm tracking-[0.2em] text-background/70 uppercase font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
