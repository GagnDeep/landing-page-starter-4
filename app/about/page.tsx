import {
  AboutHero,
  AboutMission,
  AboutFounders,
  AboutTeam,
  AboutFacility,
  AboutMilestones,
  AboutAccreditations,
  AboutCta
} from "@/components/about";
import { aboutContent } from "@/content/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutFounders />
      <AboutTeam />
      <AboutFacility />
      <AboutMilestones />
      <AboutAccreditations />
      <AboutCta />
    </>
  );
}
