import React from 'react'
import { aboutContent } from '@/content/about'
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs'

export function AboutHero() {
  const { hero } = aboutContent

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-secondary/20">
      <FloatingBlobs className="opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            {hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {hero.subheadline}
          </p>
        </div>
      </div>
    </section>
  )
}
