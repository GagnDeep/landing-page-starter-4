'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function FloatingBlobs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-20", className)}>
      <svg
        className="absolute top-10 left-10 w-64 h-64 opacity-20 text-primary motion-safe:animate-float"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M45.7,-76.1C58.9,-69.3,69.1,-55.4,76.6,-40.4C84.1,-25.4,88.9,-9.4,85.2,5.2C81.5,19.8,69.4,32.9,58.3,44.8C47.2,56.7,37.1,67.4,24.1,73.5C11.1,79.6,-4.8,81.1,-20.3,77.5C-35.8,73.9,-50.9,65.2,-61.8,53.2C-72.7,41.2,-79.4,25.9,-81.9,10.1C-84.4,-5.7,-82.7,-22.1,-74.6,-35.1C-66.5,-48.1,-52,-57.7,-37.9,-63.9C-23.8,-70.1,-11.9,-72.9,1.8,-75.7C15.5,-78.5,31,-81.3,45.7,-76.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-10 right-10 w-72 h-72 opacity-20 text-accent motion-safe:animate-float"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M38.1,-63.9C52.6,-57.1,69.7,-51.7,78.8,-40.1C87.9,-28.5,89,-10.7,85.1,5.6C81.2,21.9,72.3,36.7,60.8,48.2C49.3,59.7,35.2,67.9,20.4,72.6C5.6,77.3,-9.9,78.5,-23.7,73.9C-37.5,69.3,-49.6,58.9,-59.5,46.9C-69.4,34.9,-77.1,21.3,-79.4,6.9C-81.7,-7.5,-78.6,-22.7,-70.6,-35.4C-62.6,-48.1,-49.7,-58.3,-36.1,-65.4C-22.5,-72.5,-8.2,-76.5,3.3,-81.5C14.8,-86.5,23.6,-70.7,38.1,-63.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
