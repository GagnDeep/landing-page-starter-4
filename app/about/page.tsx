import { aboutContent } from "@/content/about";
import { PageHero } from "@/components/ui/page-hero";
import { VisionMission, TheJourney, MeetTheTeam, TheSpace, CoreValues, AboutCTAs } from "@/components/about";

export const metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline={aboutContent.sections.hero.headline || "Our Story"}
        subheading={aboutContent.sections.hero.subheading}
      />
      <VisionMission />
      <TheJourney />
      <MeetTheTeam />
      <TheSpace />
      <CoreValues />
      <AboutCTAs />
    </>
  );
}
