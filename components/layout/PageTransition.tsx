"use client"

import React from 'react'

/**
 * Currently returning children directly.
 * Can be integrated with Framer Motion in the future for global page transitions.
 * (Tailwind animations inside specific page views are preferred for now).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex flex-col motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500">
      {children}
    </div>
  )
}
