import React from 'react';
import { cn } from '@/lib/utils';

export function HowItWorksDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-3xl mx-auto py-12", className)} aria-hidden="true">
      <svg viewBox="0 0 800 200" className="w-full h-auto drop-shadow-sm">
        {/* Connection Line */}
        <path
          d="M 100 100 Q 250 150 400 100 T 700 100"
          fill="none"
          stroke="var(--border)"
          strokeWidth="2"
          strokeDasharray="8 8"
          className="motion-safe:animate-[dash-flow_3s_linear_infinite]"
        />

        {/* Step 1 Node */}
        <circle cx="100" cy="100" r="24" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" className="transition-all duration-500 hover:scale-110 origin-center" />
        <text x="100" y="106" textAnchor="middle" fill="var(--primary)" className="font-sans text-sm font-semibold">01</text>

        {/* Step 2 Node */}
        <circle cx="400" cy="100" r="24" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" className="transition-all duration-500 hover:scale-110 origin-center" />
        <text x="400" y="106" textAnchor="middle" fill="var(--primary)" className="font-sans text-sm font-semibold">02</text>

        {/* Step 3 Node */}
        <circle cx="700" cy="100" r="24" fill="var(--primary)" className="transition-all duration-500 hover:scale-110 origin-center" />
        <text x="700" y="106" textAnchor="middle" fill="var(--primary-foreground)" className="font-sans text-sm font-semibold">03</text>
      </svg>
      <style>{`
        @keyframes dash-flow {
          from { stroke-dashoffset: 16; }
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion) {
           .motion-safe\\:animate-\\[dash-flow_3s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}
