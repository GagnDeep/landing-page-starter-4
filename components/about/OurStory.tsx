import React from 'react'
import Image from 'next/image'
import { aboutContent } from '@/content/about'
import { images } from '@/lib/images'

export function OurStory() {
  const { ourStory } = aboutContent

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 space-y-32">
        {ourStory.sections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Alternate image positioning based on index */}
            <div className={`relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
              <Image
                src={index % 2 === 0 ? images.heroSecondary.src : images.studioInterior.src}
                alt={index % 2 === 0 ? images.heroSecondary.alt : images.studioInterior.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className={`flex flex-col gap-6 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                {section.heading}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
