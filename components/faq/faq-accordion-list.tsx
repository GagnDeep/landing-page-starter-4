import { faqContent } from "@/content/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function FaqAccordionList() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="space-y-24">
          {faqContent.categories.map((category, index) => (
            <StaggeredReveal key={category.title} delay={index * 0.1}>
              <StaggerItem>
                <h2 className="font-heading text-3xl text-foreground mb-8 pb-4 border-b border-border">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((q, i) => (
                    <AccordionItem key={i} value={`item-${index}-${i}`} className="border-border py-2">
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline transition-colors">
                        {q.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                        {q.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </StaggerItem>
            </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
