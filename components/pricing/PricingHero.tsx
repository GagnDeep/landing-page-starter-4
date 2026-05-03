import React from 'react'
import { pricingContent } from '@/content/pricing'
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh'

export function PricingHero() {
  const { hero } = pricingContent

  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center">
      <AnimatedGradientMesh className="opacity-40" />
      <div className="container relative z-10 px-4">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
          {hero.headline}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {hero.subheadline}
        </p>
      </div>
    </section>
  )
}
