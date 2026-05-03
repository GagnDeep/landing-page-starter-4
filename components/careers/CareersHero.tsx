import React from 'react'
import { careersContent } from '@/content/careers'
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs'

export function CareersHero() {
  const { hero } = careersContent

  return (
    <section className="relative py-32 md:py-48 bg-background overflow-hidden border-b border-border/40 text-center">
      <FloatingBlobs className="opacity-30" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
          {hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          {hero.subheadline}
        </p>
      </div>
    </section>
  )
}
