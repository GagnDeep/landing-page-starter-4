import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { homeContent } from '@/content/home'
import { images } from '@/lib/images'
import { HowItWorksDiagram } from '@/components/visuals/HowItWorksDiagram'

export function ValueProp() {
  const { valueProposition } = homeContent

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Studio Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={images.studioInterior.src}
              alt={images.studioInterior.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-start gap-6 max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {valueProposition.inSalon.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {valueProposition.inSalon.description}
            </p>
            <Button variant="outline" size="lg" className="rounded-full mt-4">
              {valueProposition.inSalon.cta}
            </Button>
          </div>
        </div>

        {/* Doorstep Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start gap-6 max-w-xl order-2 lg:order-1">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {valueProposition.atHome.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {valueProposition.atHome.description}
            </p>

            {/* Diagram Integration */}
            <div className="w-full mt-6 mb-2">
              <HowItWorksDiagram />
            </div>

            <Button variant="outline" size="lg" className="rounded-full mt-4">
              {valueProposition.atHome.cta}
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src={images.doorstepService.src}
              alt={images.doorstepService.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
