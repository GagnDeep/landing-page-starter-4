import React from 'react'
import { featuresContent } from '@/content/features'
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid'

export function FeaturesHero() {
  const { hero } = featuresContent

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-border/40">
      <DotMatrixGrid className="opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {hero.subheadline}
          </p>
        </div>
      </div>
    </section>
  )
}
