import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientMeshProps {
  className?: string;
  colors?: [string, string, string];
}

export function AnimatedGradientMesh({
  className,
  colors = ['var(--primary)', 'var(--accent)', 'var(--secondary)']
}: AnimatedGradientMeshProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors[0]} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors[1]} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors[1]} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors[2]} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors[2]} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="20" cy="30" r="40" fill="url(#grad1)" className="motion-safe:animate-[drift_20s_ease-in-out_infinite_alternate]" />
        <circle cx="80" cy="70" r="50" fill="url(#grad2)" className="motion-safe:animate-[drift_25s_ease-in-out_infinite_alternate-reverse]" />
        <circle cx="50" cy="10" r="45" fill="url(#grad3)" className="motion-safe:animate-[drift_30s_ease-in-out_infinite_alternate]" />
      </svg>
      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5px, 10px) scale(1.05); }
          100% { transform: translate(-5px, -5px) scale(0.95); }
        }
        @media (prefers-reduced-motion) {
          .motion-safe\\:animate-\\[drift_20s_ease-in-out_infinite_alternate\\] { animation: none; }
          .motion-safe\\:animate-\\[drift_25s_ease-in-out_infinite_alternate-reverse\\] { animation: none; }
          .motion-safe\\:animate-\\[drift_30s_ease-in-out_infinite_alternate\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}
