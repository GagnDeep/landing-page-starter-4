import React from 'react'
import { homeContent } from '@/content/home'
import { LogoMarquee } from '@/components/visuals/LogoMarquee'
import { Star } from 'lucide-react'

// Placeholder icons representing publications or partner brands
const BrandLogos = [
  <div key="b1" className="font-heading text-xl font-bold tracking-widest uppercase">Vogue</div>,
  <div key="b2" className="font-heading text-xl font-bold tracking-widest uppercase">Harper's</div>,
  <div key="b3" className="font-heading text-xl font-bold tracking-widest uppercase">Elle</div>,
  <div key="b4" className="font-heading text-xl font-bold tracking-widest uppercase">GQ</div>,
  <div key="b5" className="font-heading text-xl font-bold tracking-widest uppercase">Cosmopolitan</div>,
]

export function TrustBar() {
  const { trustBar } = homeContent

  return (
    <section className="bg-secondary/50 py-12 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground">{trustBar.rating}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{trustBar.reviewsText}</span>
            </div>
          </div>

          <div className="text-center md:text-right">
             <p className="text-sm font-medium text-foreground">{trustBar.label}</p>
          </div>
        </div>

        <LogoMarquee logos={BrandLogos} speed="slow" className="opacity-70" />
      </div>
    </section>
  )
}
