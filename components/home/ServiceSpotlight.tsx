import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { homeContent } from '@/content/home'
import { images } from '@/lib/images'
import { ServiceRevealMask } from '@/components/visuals/ServiceRevealMask'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ServiceSpotlight() {
  const { serviceSpotlight } = homeContent

  // Map image keys to the categories defined in content
  const categoryImages = [
    images.serviceHair,
    images.serviceSkin,
    images.serviceNails,
    images.serviceBridal
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground max-w-xl">
            {serviceSpotlight.heading}
          </h2>
          <Button variant="link" className="text-primary gap-2" asChild>
            <Link href="/pricing">
              {serviceSpotlight.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceSpotlight.categories.map((category, index) => (
            <Link key={category.name} href={category.link} className="group flex flex-col gap-6 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-3xl">
              <ServiceRevealMask className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={categoryImages[index]?.src || ''}
                  alt={categoryImages[index]?.alt || ''}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </ServiceRevealMask>
              <div className="px-2 space-y-2">
                <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {category.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
