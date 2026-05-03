import React from 'react'
import { pricingContent } from '@/content/pricing'
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'

export function ServiceCategories() {
  const { categories } = pricingContent

  return (
    <section className="py-16 container px-4 sm:px-6 mx-auto space-y-24">
      {/* Sticky Category Nav */}
      <div className="sticky top-20 z-40 bg-background/90 backdrop-blur-md py-4 border-b border-border/40 hidden md:block">
        <div className="flex justify-center gap-8">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {categories.map((category) => (
        <div key={category.id} id={category.id} className="scroll-mt-32">
          <h2 className="font-heading text-3xl font-semibold mb-8 border-b border-border pb-4">{category.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {category.services.map((service, index) => (
              <div key={index} className="flex flex-col gap-2 group">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-sans font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <span className="font-medium text-lg whitespace-nowrap">{service.price}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/30">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" /> {service.duration}
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs font-semibold hover:text-primary">
                    Book this
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
