import React from 'react'
import { faqContent } from '@/content/faq'
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid'

export function FAQHero() {
  const { hero } = faqContent

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-border/40 bg-secondary/10">
      <DotMatrixGrid className="opacity-50" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
          {hero.headline}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {hero.subheadline}
        </p>
      </div>
    </section>
  )
}
