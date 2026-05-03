import { AboutHero } from "@/components/about/about-hero";
import { DoctorJourney } from "@/components/about/doctor-journey";
import { TheTeam } from "@/components/about/the-team";
import { ClinicSpace } from "@/components/about/clinic-space";
import { GlobalReach } from "@/components/about/global-reach";
import { EthosValues } from "@/components/about/ethos-values";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <DoctorJourney />
      <TheTeam />
      <ClinicSpace />
      <GlobalReach />
      <EthosValues />
    </div>
  );
}
