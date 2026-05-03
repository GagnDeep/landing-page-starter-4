import React from 'react';
import { aboutContent } from '@/content/about';

export function MissionVision() {
  const { missionVision } = aboutContent;

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Decorative background typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] dark:opacity-[0.04] select-none z-0">
        <span className="font-heading font-bold text-[20vw] leading-none whitespace-nowrap">
          PURPOSE
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          <div className="flex flex-col">
            <h3 className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-6 font-bold">
              {missionVision.mission.headline}
            </h3>
            <p className="font-heading text-3xl md:text-4xl text-foreground font-medium leading-tight">
              {missionVision.mission.description}
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-sans text-xs tracking-[0.3em] text-secondary uppercase mb-6 font-bold">
              {missionVision.vision.headline}
            </h3>
            <p className="font-heading text-3xl md:text-4xl text-foreground font-medium leading-tight">
              {missionVision.vision.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
