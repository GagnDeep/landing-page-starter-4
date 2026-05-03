import React from 'react'
import { homeContent } from '@/content/home'

export function Testimonials() {
  const { testimonials } = homeContent

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground">
            {testimonials.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.reviews.map((review, i) => (
            <div key={i} className="bg-card p-10 rounded-3xl shadow-sm border border-border/50 flex flex-col justify-between">
              <p className="font-heading text-xl md:text-2xl text-foreground leading-snug italic mb-8">
                "{review.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
