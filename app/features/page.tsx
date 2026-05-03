import { FeaturesHero } from "@/components/features/features-hero";
import { ServiceLayout } from "@/components/features/service-layout";
import { ClosingCtas } from "@/components/features/closing-ctas";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <FeaturesHero />
      <ServiceLayout />
      <ClosingCtas />
    </div>
  );
}
