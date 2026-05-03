import React from 'react'
import { homeContent } from '@/content/home'
import { MicroIconSet } from '@/components/visuals/MicroIconSet'
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid'

export function Features() {
  const { features } = homeContent

  // Map the feature index to our predefined icons
  const icons = ['hygiene', 'quality', 'time'] as const

  return (
    <section className="relative py-32 border-y border-border/40 overflow-hidden">
      <DotMatrixGrid className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            {features.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {features.items.map((item, index) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-6">
              <MicroIconSet icon={icons[index % icons.length]} className="mb-2" />
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
