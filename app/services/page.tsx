import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { featuresContent } from "@/content/features"
import { images } from "@/lib/images"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export const metadata: Metadata = {
  title: "Salon Services | Hair Makeup Unisex Salon & Academy",
  description: featuresContent.meta.description,
}

export default function ServicesPage() {
  const content = featuresContent

  return (
    <div className="w-full">
      {/* 1. Header */}
      <section className="relative overflow-hidden bg-secondary/30 px-4 py-20 text-center">
        <div className="relative z-10 container mx-auto">
          <h1 className="mb-4 font-heading text-5xl font-bold md:text-6xl lg:text-7xl">
            {content.salonMenu.headline}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {content.header.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Salon Services Menu */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {content.salonMenu.categories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <h2 className="border-b border-border pb-4 font-heading text-3xl font-bold tracking-widest text-primary uppercase">
                  {category.name}
                </h2>
                <ul className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group">
                      <div className="mb-2 flex items-baseline justify-between">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <div className="relative top-[-6px] mx-4 flex-1 border-b border-dotted border-muted-foreground/30 opacity-50"></div>
                        <span className="text-sm font-semibold tracking-widest whitespace-nowrap text-muted-foreground uppercase">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider type="diamond" />

      {/* 4. Feature Highlights */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-heading text-4xl font-bold md:text-5xl">
            {content.highlights.headline}
          </h2>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[600px] w-full overflow-hidden rounded-md">
              <Image
                src={images.services.preBridal.url}
                alt={images.services.preBridal.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-12">
              {content.highlights.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary font-heading text-xl text-primary">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-2xl font-bold">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="border-t border-border bg-secondary/30 px-4 py-24 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-8 font-heading text-4xl font-bold">
            {content.cta.headline}
          </h2>
          <Button
            size="lg"
            className="rounded-none px-12 py-6 text-xs font-semibold tracking-wider uppercase"
          >
            {content.cta.primaryCTA}
          </Button>
        </div>
      </section>
    </div>
  )
}
