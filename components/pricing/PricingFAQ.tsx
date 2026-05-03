import React from 'react'
import { pricingContent } from '@/content/pricing'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function PricingFAQ() {
  const { faq } = pricingContent

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold">{faq.heading}</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faq.questions.map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors text-lg">
                {q.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {q.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
