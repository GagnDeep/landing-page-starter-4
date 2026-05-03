import React from 'react';
import { cn } from '@/lib/utils';

export function ServiceRevealMask({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden group", className)}>
      <div className="absolute inset-0 bg-[var(--secondary)] z-10 origin-bottom motion-safe:animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"></div>
      <div className="absolute inset-0 w-full h-full motion-safe:animate-[scale-down_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        {children}
      </div>
      <style>{`
        @keyframes reveal-up {
          0% { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }
        @keyframes scale-down {
          0% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @media (prefers-reduced-motion) {
          .motion-safe\\:animate-\\[reveal-up_0\\.8s_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\] { animation: none; transform: scaleY(0); }
          .motion-safe\\:animate-\\[scale-down_1\\.2s_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\] { animation: none; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
