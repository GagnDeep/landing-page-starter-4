import {
  FeaturesHero,
  ServicesLayout,
  PatientJourney,
  TechStack,
  FeaturesCta
} from "@/components/features";
import { featuresContent } from "@/content/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <ServicesLayout />
      <PatientJourney />
      <TechStack />
      <FeaturesCta />
    </>
  );
}
