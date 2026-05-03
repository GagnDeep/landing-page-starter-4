import React from 'react';
import Link from 'next/link';
import { homeContent } from '@/content/home';
import { MagneticButton, CodeWindowTyping } from '@/components/visuals';

export function SplitFeatureAcademy() {
  const { splitAcademy } = homeContent;

  const codeLines = [
    '<span class="text-primary">import</span> { <span>Mastery</span> } <span class="text-primary">from</span> <span class="text-secondary">"@/99-institute/academy"</span>;',
    '',
    '<span class="text-primary">const</span> <span>curriculum</span> = {',
    '  <span class="text-muted-foreground">techniques:</span> [<span class="text-secondary">"HD Bridal"</span>, <span class="text-secondary">"Airbrush"</span>, <span class="text-secondary">"Color Theory"</span>],',
    '  <span class="text-muted-foreground">duration:</span> <span class="text-secondary">"8 Weeks"</span>,',
    '  <span class="text-muted-foreground">outcome:</span> <span class="text-secondary">"Industry-ready Professional"</span>,',
    '};',
    '',
    '<span class="text-primary">export default function</span> <span>YourCareer</span>() {',
    '  <span class="text-primary">return</span> <span class="text-foreground">&lt;Mastery</span> <span class="text-muted-foreground">level</span>=<span class="text-secondary">"elite"</span> <span class="text-foreground">/&gt;</span>;',
    '}'
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Text - 40% (Reversed order on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:order-1 order-2">
            <span className="font-sans text-xs tracking-[0.3em] text-secondary uppercase mb-6 font-bold">
              {splitAcademy.label}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              {splitAcademy.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-12 font-light">
              {splitAcademy.description}
            </p>
            <MagneticButton strength={20}>
              <Link
                href="/features"
                className="inline-flex h-12 items-center justify-center bg-secondary text-secondary-foreground px-8 font-sans text-sm font-medium tracking-widest uppercase transition-transform hover:scale-105"
              >
                {splitAcademy.cta}
              </Link>
            </MagneticButton>
          </div>

          {/* Code/Visual - 60% */}
          <div className="lg:col-span-7 relative w-full lg:order-2 order-1 h-[400px] lg:h-[600px] flex items-center justify-center">
             <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform -skew-y-3" />
             <CodeWindowTyping codeLines={codeLines} className="w-full max-w-xl relative z-10 shadow-2xl h-80" />
          </div>

        </div>
      </div>
    </section>
  );
}
