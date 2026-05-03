import { HomeHero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { EthosStatement } from "@/components/home/ethos-statement";
import { SignatureTreatments } from "@/components/home/signature-treatments";
import { Spotlight } from "@/components/home/spotlight";
import { Concierge } from "@/components/home/concierge";
import { DoctorProfile } from "@/components/home/doctor-profile";
import { StatsAndTestimonials } from "@/components/home/stats-and-testimonials";
import { Process } from "@/components/home/process";
import { CtaModule } from "@/components/home/cta-module";
import { SectionDivider } from "@/components/visuals/section-divider";
import { ClinicExperience } from "@/components/home/clinic-experience";
import { ClinicalPrecision } from "@/components/home/clinical-precision";
import { FeaturedJournal } from "@/components/home/featured-journal";
import { VideoTestimonial } from "@/components/home/video-testimonial";
import { FaqSneakPeek } from "@/components/home/faq-sneak-peek";
import { Awards } from "@/components/home/awards";
import { Newsletter } from "@/components/home/newsletter";
import { LocationMap } from "@/components/home/location-map";
import { TestimonialCarousel } from "@/components/visuals/testimonial-carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <TrustBar />
      <EthosStatement />
      <SignatureTreatments />
      <ClinicExperience />
      <Spotlight />
      <Concierge />
      <DoctorProfile />
      <StatsAndTestimonials />
      <ClinicalPrecision />
      <Process />
      <FeaturedJournal />
      <VideoTestimonial />
      <FaqSneakPeek />
      <Awards />
      <Newsletter />
      <LocationMap />
      <CtaModule />
    </div>
  );
}
