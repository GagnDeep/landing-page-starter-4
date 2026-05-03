import React from 'react'
import Image from 'next/image'
import { aboutContent } from '@/content/about'
import { images } from '@/lib/images'

export function StudioSpace() {
  const { studioSpace } = aboutContent

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl font-bold mb-6">{studioSpace.heading}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
          {studioSpace.description}
        </p>

        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src={images.studioInterior.src}
            alt={images.studioInterior.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}
