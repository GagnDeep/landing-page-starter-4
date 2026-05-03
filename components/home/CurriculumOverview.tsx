import React from 'react';
import { homeContent } from '@/content/home';
import { MicroIconSet } from '@/components/visuals';

export function CurriculumOverview() {
  const { curriculumOverview } = homeContent;

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {curriculumOverview.headline}
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            {curriculumOverview.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curriculumOverview.cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition-colors duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />

              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary/5 transition-colors duration-300">
                <MicroIconSet
                  iconName={card.icon as "crown" | "sparkles" | "eye" | "brush" | "camera"}
                  className="w-8 h-8 text-foreground group-hover:text-primary transition-colors"
                  active={false} // Would be true on hover if we extracted card to client component, keeping simple for SSR
                />
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 relative z-10">
                {card.title}
              </h3>
              <p className="font-sans text-muted-foreground font-light relative z-10">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
