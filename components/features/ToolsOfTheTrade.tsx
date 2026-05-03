import React from 'react';
import { featuresContent } from '@/content/features';
import { LogoMarquee } from '@/components/visuals';

export function ToolsOfTheTrade() {
  const { toolsOfTheTrade } = featuresContent;

  return (
    <section className="py-24 border-y border-border bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {toolsOfTheTrade.headline}
        </h2>
        <p className="font-sans text-lg text-muted-foreground font-light">
          {toolsOfTheTrade.description}
        </p>
      </div>

      <LogoMarquee logos={toolsOfTheTrade.brands} speed="normal" className="bg-transparent" />
    </section>
  );
}
