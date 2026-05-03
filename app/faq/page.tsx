import { faqContent } from "@/content/faq";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DotMatrixGrid, CTAGlow } from "@/components/visuals";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description,
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. FAQ Hero & 04. Search */}
      <section className="relative flex flex-col min-h-[50vh] items-center justify-center overflow-hidden pt-24 pb-16 px-6 md:px-12 bg-muted/20 border-b border-border text-center">
        <div className="z-10 max-w-2xl mx-auto space-y-8 w-full">
          <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight">
            {faqContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {faqContent.hero.subheading}
          </p>
          <div className="pt-8">
            <Input type="search" placeholder="Search for an answer..." className="rounded-full bg-background max-w-md mx-auto py-6 text-base" />
          </div>
        </div>
      </section>

      {/* 05. Category Jump Links */}
      <nav className="border-b border-border sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 overflow-x-auto py-4">
            <ul className="flex justify-center items-center gap-8 text-sm tracking-widest uppercase font-medium min-w-max">
            {faqContent.categories.map((category, idx) => (
                <li key={idx}>
                    <a href={`#cat-${idx}`} className="hover:text-primary transition-colors text-muted-foreground hover:text-foreground">
                        {category.name}
                    </a>
                </li>
            ))}
            </ul>
        </div>
      </nav>

      {/* FAQ Categories & Accordions */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full space-y-24">
         {faqContent.categories.map((category, cIdx) => (
             <div key={cIdx} id={`cat-${cIdx}`} className="space-y-8 scroll-mt-24">
                 <h2 className="font-heading text-3xl md:text-4xl text-primary border-b border-border pb-4">{category.name}</h2>
                 <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, iIdx) => (
                        <AccordionItem key={iIdx} value={`item-${cIdx}-${iIdx}`}>
                            <AccordionTrigger className="text-lg font-medium hover:text-primary data-[state=open]:text-primary transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
             </div>
         ))}
      </section>

      {/* 16-18. Fallback CTA */}
      <section className="py-24 px-6 bg-accent/5 border-t border-border relative overflow-hidden">
        <DotMatrixGrid className="opacity-10" />
        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
             <h2 className="font-heading text-4xl">{faqContent.cta.heading}</h2>
             <p className="text-muted-foreground text-lg">{faqContent.cta.text}</p>
             <CTAGlow className="inline-block">
                <Button size="lg" className="rounded-full px-12 tracking-widest uppercase text-sm mt-4" asChild>
                    <Link href={faqContent.cta.cta.href}>{faqContent.cta.cta.label}</Link>
                </Button>
            </CTAGlow>
        </div>
      </section>
    </div>
  );
}
