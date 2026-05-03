import React from 'react'
import { featuresContent } from '@/content/features'
import { MicroIconSet } from '@/components/visuals/MicroIconSet'

export function HygieneProtocols() {
  const { hygiene } = featuresContent
  const icons = ['hygiene', 'quality', 'trust'] as const

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold mb-16 text-center">{hygiene.heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {hygiene.points.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <MicroIconSet icon={icons[idx % icons.length]} className="mb-4" />
              <h3 className="font-heading text-xl font-semibold">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
