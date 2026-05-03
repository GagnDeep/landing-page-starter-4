import React from 'react'
import { featuresContent } from '@/content/features'
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs'

export function PremiumProducts() {
  const { products } = featuresContent

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <FloatingBlobs className="opacity-40" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="font-heading text-4xl font-bold mb-6">{products.heading}</h2>
        <p className="text-xl text-muted-foreground mb-16">{products.description}</p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {products.brands.map((brand, idx) => (
            <div key={idx} className="px-6 py-3 bg-background border border-border/50 shadow-sm rounded-full font-semibold text-foreground hover:border-primary/50 transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
