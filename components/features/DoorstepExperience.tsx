import React from 'react'
import { featuresContent } from '@/content/features'
import { HowItWorksDiagram } from '@/components/visuals/HowItWorksDiagram'

export function DoorstepExperience() {
  const { doorstepExperience } = featuresContent

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center mb-8">{doorstepExperience.heading}</h2>

        {/* Animated Visual Diagram representation */}
        <div className="hidden md:block mb-16">
          <HowItWorksDiagram />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {doorstepExperience.steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col gap-4 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-6xl font-heading font-black text-primary/10 absolute -top-4 -right-2 select-none">
                {step.step}
              </span>
              <h3 className="font-heading text-xl font-bold mt-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
