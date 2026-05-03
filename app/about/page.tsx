import {
  AboutHero,
  OriginStory,
  MissionVision,
  Philosophy,
  MeetTheTeam,
  TheStudio,
  AboutCta
} from "@/components/about";
import { SectionDivider } from "@/components/visuals";
import { aboutContent } from "@/content/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <MissionVision />
      <Philosophy />
      <SectionDivider type="line" />
      <MeetTheTeam />
      <TheStudio />
      <AboutCta />
    </>
  );
}
