import {
  Hero,
  TrustBar,
  CorePhilosophy,
  SplitFeatureSalon,
  SplitFeatureAcademy,
  FounderSpotlight,
  CurriculumOverview,
  FeaturedArtists,
  BridalExperience,
  Testimonials,
  Statistics,
  GalleryTeaser,
  PricingTiers,
  Process,
  FaqTeaser,
  Location,
  Newsletter,
  BlogTeaser,
  FinalCta
} from "@/components/home";
import { SectionDivider } from "@/components/visuals";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CorePhilosophy />

      <SectionDivider type="diamonds" />

      <SplitFeatureSalon />
      <SplitFeatureAcademy />

      <SectionDivider type="line" />

      <FounderSpotlight />
      <CurriculumOverview />
      <FeaturedArtists />
      <BridalExperience />
      <Testimonials />
      <Statistics />
      <GalleryTeaser />
      <PricingTiers />
      <Process />
      <FaqTeaser />
      <Location />
      <Newsletter />
      <BlogTeaser />
      <FinalCta />
    </>
  );
}
