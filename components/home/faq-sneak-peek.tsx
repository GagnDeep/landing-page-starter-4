import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqContent } from "@/content/faq";
import { homeContent } from "@/content/home";

export function FaqSneakPeek() {
  const previewQs = faqContent.categories[0].questions.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">
          {homeContent.faqSneakPeek.title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {previewQs.map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline">
                {q.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {q.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
