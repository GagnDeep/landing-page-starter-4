import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { homeContent } from '@/content/home'
import { images } from '@/lib/images'
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh'

export function Hero() {
  const { hero } = homeContent

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with Animated Mesh */}
      <AnimatedGradientMesh className="z-0 opacity-60 dark:opacity-40" />

      {/* Structural Image Background (Optional, using the primary hero image with low opacity for texture) */}
      <div className="absolute inset-0 z-0">
         <Image
           src={images.heroPrimary.src}
           alt={images.heroPrimary.alt}
           fill
           priority
           className="object-cover opacity-10 dark:opacity-5 mix-blend-overlay"
         />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000">
            {hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000 motion-safe:delay-200 motion-safe:fill-mode-backwards">
            {hero.subheadline}
          </p>
          <div className="pt-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000 motion-safe:delay-500 motion-safe:fill-mode-backwards">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              {hero.primaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
