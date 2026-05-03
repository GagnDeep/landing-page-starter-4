import { CareersHero } from "@/components/careers/careers-hero";
import { CultureBenefits } from "@/components/careers/culture-benefits";
import { OpenRoles } from "@/components/careers/open-roles";
import { CareersCta } from "@/components/careers/careers-cta";

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <CareersHero />
      <CultureBenefits />
      <OpenRoles />
      <CareersCta />
    </div>
  );
}
