import { PricingHero } from "@/components/pricing/pricing-hero";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { ConciergePackages } from "@/components/pricing/concierge-packages";
import { FinancingOptions } from "@/components/pricing/financing-options";
import { PricingCta } from "@/components/pricing/pricing-cta";

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingHero />
      <ComparisonTable />
      <ConciergePackages />
      <FinancingOptions />
      <PricingCta />
    </div>
  );
}
