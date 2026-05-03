import { FaqHero } from "@/components/faq/faq-hero";
import { FaqAccordionList } from "@/components/faq/faq-accordion-list";
import { FaqCta } from "@/components/faq/faq-cta";

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FaqHero />
      <FaqAccordionList />
      <FaqCta />
    </div>
  );
}
