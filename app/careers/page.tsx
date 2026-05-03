import { careersContent } from "@/content/careers";
import { PageHero } from "@/components/ui/page-hero";
import { WhyWorkWithUs, OpenPositions, ApplicationForm, Testimonial } from "@/components/careers";

export const metadata = {
  title: careersContent.seo.title,
  description: careersContent.seo.description,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        headline={careersContent.sections.hero.headline || "Join the Lounge"}
        subheading={careersContent.sections.hero.subheading}
      />
      <WhyWorkWithUs />
      <OpenPositions />
      <ApplicationForm />
      <Testimonial />
    </>
  );
}
