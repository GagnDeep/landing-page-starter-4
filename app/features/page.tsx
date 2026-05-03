import {
  FeaturesHero,
  SalonServices,
  AcademyCurriculum,
  ToolsOfTheTrade,
  FeaturesFaq,
  FeaturesCta
} from "@/components/features";
import { featuresContent } from "@/content/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <SalonServices />
      <AcademyCurriculum />
      <ToolsOfTheTrade />
      <FeaturesFaq />
      <FeaturesCta />
    </>
  );
}
