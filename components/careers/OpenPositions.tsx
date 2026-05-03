import React from 'react'
import { careersContent } from '@/content/careers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

export function OpenPositions() {
  const { openPositions } = careersContent

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-heading text-4xl font-bold text-center mb-16">{openPositions.heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {openPositions.jobs.map((job, idx) => (
            <Card key={idx} className="flex flex-col hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <CardTitle className="font-heading text-2xl">{job.title}</CardTitle>
                <CardDescription className="flex items-center gap-1.5 mt-2 text-foreground font-medium">
                  <MapPin className="w-4 h-4 text-muted-foreground" /> {job.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto bg-secondary/30 p-10 rounded-[2rem] border border-border/50">
          <p className="text-lg font-medium text-foreground mb-6">{openPositions.cta.text}</p>
          <Button size="lg" className="rounded-full px-10">{openPositions.cta.buttonText}</Button>
        </div>
      </div>
    </section>
  )
}
