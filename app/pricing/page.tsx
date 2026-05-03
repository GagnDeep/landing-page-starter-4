import { pricingContent } from "@/content/pricing";
import { PageHero } from "@/components/ui/page-hero";
import { PricingDisclaimer, PricingTables, PricingMemberships, PricingCTA } from "@/components/pricing";

export const metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        headline={pricingContent.sections.hero.headline || "Transparent Luxury"}
        subheading={pricingContent.sections.hero.subheading}
      />
      <PricingDisclaimer />
      <PricingTables />
      <PricingMemberships />
      <PricingCTA />
    </>
  );
}
