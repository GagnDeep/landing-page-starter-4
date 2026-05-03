import {
  HeroSection,
  TrustBar,
  BrandEthos,
  ServiceTreatments,
  ServiceColorStyling,
  WhyUs,
  SalonAtmosphere,
  FeaturedSpecialists,
  TreatmentDeepDive,
  Testimonials,
  Partners,
  PricingTeaser,
  FAQSection,
  PromotionalBanner,
  SocialProof,
  Newsletter,
  PreFooterCTA
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BrandEthos />

      <ServiceTreatments />
      <ServiceColorStyling />
      <WhyUs />

      <SalonAtmosphere />

      <FeaturedSpecialists />
      <TreatmentDeepDive />

      <Testimonials />
      <Partners />

      <PricingTeaser />
      <FAQSection />
      <PromotionalBanner />

      <SocialProof />
      <Newsletter />
      <PreFooterCTA />
    </>
  );
}
