import React from 'react'
import Link from 'next/link'
import { faqContent } from '@/content/faq'
import { Button } from '@/components/ui/button'
import { CTAGlow } from '@/components/visuals/CTAGlow'

export function ContactCTA() {
  const { contactCta } = faqContent

  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      <CTAGlow />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="bg-card/60 backdrop-blur-xl border border-border/50 p-12 md:p-16 rounded-[2rem] shadow-xl">
          <h2 className="font-heading text-4xl font-bold mb-4">{contactCta.heading}</h2>
          <p className="text-lg text-muted-foreground mb-10">{contactCta.description}</p>
          <Button size="lg" className="rounded-full px-10 h-14" asChild>
            <Link href="/contact">{contactCta.buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
