'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AvatarStackProps {
  avatars: string[];
  totalCount: number;
  className?: string;
}

export function AvatarStack({ avatars, totalCount, className }: AvatarStackProps) {
  // We'll use a placeholder structure for the actual images to avoid downloading assets directly,
  // but we build the UI to expect valid image sources.
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex -space-x-4 overflow-hidden">
        {avatars.map((src, index) => (
          <div
            key={index}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-background relative overflow-hidden bg-muted motion-safe:transition-transform motion-safe:hover:-translate-y-1 motion-safe:duration-300 z-10"
            style={{ zIndex: avatars.length - index }}
          >
            {/* In a real scenario, these would be next/image components pointing to valid URLs */}
            <div className="w-full h-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
               {/* Fallback initials if image fails or is a placeholder */}
               U{index + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="ml-4 flex flex-col">
        <div className="flex items-center space-x-1 text-primary">
          {/* 5 Stars */}
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-muted-foreground font-sans mt-1">
          <span className="font-bold text-foreground">{totalCount}+</span> happy patients
        </p>
      </div>
    </div>
  );
}
