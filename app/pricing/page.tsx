import {
  PricingHero,
  BridalPackages,
  AcademyTuition,
  ALaCarte,
  PricingFaq,
  PricingCta
} from "@/components/pricing";
import { pricingContent } from "@/content/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <BridalPackages />
      <AcademyTuition />
      <ALaCarte />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
