import React from 'react'
import { faqContent } from '@/content/faq'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function CategorizedFAQ() {
  const { categories } = faqContent

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl space-y-24">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h2 className="font-heading text-3xl font-bold mb-8 border-b border-border pb-4">
              {category.categoryName}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((q, qIdx) => (
                <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors text-lg py-6">
                    {q.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {q.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}
