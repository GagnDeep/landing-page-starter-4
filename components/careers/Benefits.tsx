import React from 'react'
import { careersContent } from '@/content/careers'
import { MicroIconSet } from '@/components/visuals/MicroIconSet'

export function Benefits() {
  const { benefits } = careersContent
  const icons = ['quality', 'trust', 'time', 'hygiene'] as const

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center mb-16">{benefits.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {benefits.items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 text-center items-center">
              <MicroIconSet icon={icons[idx % icons.length]} className="mb-4" />
              <h3 className="font-heading text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
