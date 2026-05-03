import {
  PricingHero,
  PricingPhilosophy,
  PricingTables,
  PricingFinancing,
  PricingFaq,
  PricingCta
} from "@/components/pricing";
import { pricingContent } from "@/content/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPhilosophy />
      <PricingTables />
      <PricingFinancing />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
