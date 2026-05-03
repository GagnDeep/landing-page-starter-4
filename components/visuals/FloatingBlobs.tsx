import React from 'react';
import { cn } from '@/lib/utils';

export function FloatingBlobs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10 dark:opacity-5">
        <path
          fill="var(--primary)"
          className="motion-safe:animate-[morph_15s_ease-in-out_infinite]"
          d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.2,-16.3,88.4,-0.9C86.7,14.4,80.5,28.8,71.5,40.5C62.4,52.2,50.6,61.1,37.3,67.6C24,74.2,9.3,78.3,-5.2,78.6C-19.8,78.8,-34.1,75.1,-46.6,67.7C-59.2,60.4,-69.9,49.2,-77.3,35.9C-84.7,22.6,-88.7,7.2,-87.3,-7.8C-85.9,-22.8,-79.1,-37.4,-68.8,-48.6C-58.5,-59.9,-44.6,-67.7,-30.9,-75.1C-17.1,-82.4,-3.6,-89.2,10.6,-89.4C24.7,-89.6,30.5,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: scale(1) translate(0px, 0px); }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: scale(1.05) translate(10px, -10px); }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; transform: scale(0.95) translate(-10px, 10px); }
        }
        @media (prefers-reduced-motion) {
           .motion-safe\\:animate-\\[morph_15s_ease-in-out_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}
