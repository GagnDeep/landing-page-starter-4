import { featuresContent } from "@/content/features";
import { PageHero } from "@/components/ui/page-hero";
import { CategoryNav, TreatmentServices, ColorServices, CutSpaServices, ServiceFAQ, FeatureCTA } from "@/components/features";

export const metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        headline={featuresContent.sections.hero.headline || "Our Services"}
        subheading={featuresContent.sections.hero.subheading}
      />
      <CategoryNav />
      <TreatmentServices />
      <ColorServices />
      <CutSpaServices />
      <ServiceFAQ />
      <FeatureCTA />
    </>
  );
}
