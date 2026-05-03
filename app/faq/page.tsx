import { faqContent } from "@/content/faq"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DotMatrixGrid, CTAGlow } from "@/components/visuals"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description,
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. FAQ Hero & 04. Search */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden border-b border-border bg-muted/20 px-6 pt-24 pb-16 text-center md:px-12">
        <div className="z-10 mx-auto w-full max-w-2xl space-y-8">
          <h1 className="font-heading text-5xl leading-tight tracking-tight md:text-7xl">
            {faqContent.hero.heading}
          </h1>
          <p className="text-lg font-light text-muted-foreground md:text-xl">
            {faqContent.hero.subheading}
          </p>
          <div className="pt-8">
            <Input
              type="search"
              placeholder="Search for an answer..."
              className="mx-auto max-w-md rounded-full bg-background py-6 text-base"
            />
          </div>
        </div>
      </section>

      {/* 05. Category Jump Links */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl overflow-x-auto px-6 py-4">
          <ul className="flex min-w-max items-center justify-center gap-8 text-sm font-medium tracking-widest uppercase">
            {faqContent.categories.map((category, idx) => (
              <li key={idx}>
                <a
                  href={`#cat-${idx}`}
                  className="text-muted-foreground transition-colors hover:text-foreground hover:text-primary"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* FAQ Categories & Accordions */}
      <section className="mx-auto w-full max-w-3xl space-y-24 px-6 py-24">
        {faqContent.categories.map((category, cIdx) => (
          <div key={cIdx} id={`cat-${cIdx}`} className="scroll-mt-24 space-y-8">
            <h2 className="border-b border-border pb-4 font-heading text-3xl text-primary md:text-4xl">
              {category.name}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.items.map((item, iIdx) => (
                <AccordionItem key={iIdx} value={`item-${cIdx}-${iIdx}`}>
                  <AccordionTrigger className="text-lg font-medium transition-colors hover:text-primary data-[state=open]:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      {/* 16-18. Fallback CTA */}
      <section className="relative overflow-hidden border-t border-border bg-accent/5 px-6 py-24">
        <DotMatrixGrid className="opacity-10" />
        <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
          <h2 className="font-heading text-4xl">{faqContent.cta.heading}</h2>
          <p className="text-lg text-muted-foreground">{faqContent.cta.text}</p>
          <CTAGlow className="inline-block">
            <Button
              size="lg"
              className="mt-4 rounded-full px-12 text-sm tracking-widest uppercase"
              asChild
            >
              <Link href={faqContent.cta.cta.href}>
                {faqContent.cta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  )
}
