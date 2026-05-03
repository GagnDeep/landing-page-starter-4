import React from 'react';
import { cn } from '@/lib/utils';

export function CTAGlow({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-full", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--primary)] opacity-20 blur-xl mix-blend-screen motion-safe:animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; transform: scale(0.9); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @media (prefers-reduced-motion) {
           .motion-safe\\:animate-\\[pulse-glow_4s_ease-in-out_infinite\\] { animation: none; opacity: 0.2; transform: none; }
        }
      `}</style>
    </div>
  );
}
