import React from 'react'
import { pricingContent } from '@/content/pricing'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CTAGlow } from '@/components/visuals/CTAGlow'

export function CuratedPackages() {
  const { packages } = pricingContent

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold">{packages.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {packages.items.map((pkg, i) => (
            <Card key={i} className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <CTAGlow className="opacity-50" />
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Select Package</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
