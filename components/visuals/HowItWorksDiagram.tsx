'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksDiagramProps {
  steps: Step[];
  className?: string;
}

export function HowItWorksDiagram({ steps, className }: HowItWorksDiagramProps) {
  return (
    <div className={cn("relative flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto space-y-12 md:space-y-0", className)}>
      {/* Background connecting line (Desktop) */}
      <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />

      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 px-4">
          {/* Step Number Circle */}
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-background border-4 border-primary text-primary text-2xl font-heading font-bold shadow-sm motion-safe:transition-transform motion-safe:hover:scale-110 motion-safe:duration-300">
            {index + 1}
          </div>

          {/* Connecting line (Mobile) */}
          {index < steps.length - 1 && (
            <div className="md:hidden w-0.5 h-12 bg-border my-2" />
          )}

          {/* Text Content */}
          <h3 className="mt-6 text-xl font-heading font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground font-sans">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
