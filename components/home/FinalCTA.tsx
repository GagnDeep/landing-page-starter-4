import React from 'react'
import { Button } from '@/components/ui/button'
import { homeContent } from '@/content/home'
import { CTAGlow } from '@/components/visuals/CTAGlow'

export function FinalCTA() {
  const { finalCta } = homeContent

  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <CTAGlow />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-card/60 backdrop-blur-xl border border-border/50 p-12 md:p-16 rounded-[2rem] shadow-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            {finalCta.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {finalCta.subheadline}
          </p>
          <div className="pt-6">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg">
              {finalCta.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
