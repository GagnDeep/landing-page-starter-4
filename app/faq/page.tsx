import { faqContent } from "@/content/faq";
import { PageHero } from "@/components/ui/page-hero";
import { FAQSearch, FAQAccordions, FAQSupportCTA } from "@/components/faq";

export const metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description,
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        headline={faqContent.sections.hero.headline || "Frequently Asked Questions"}
        subheading={faqContent.sections.hero.subheading}
      />
      <FAQSearch />
      <FAQAccordions />
      <FAQSupportCTA />
    </>
  );
}
