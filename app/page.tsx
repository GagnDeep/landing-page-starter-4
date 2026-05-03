import { Hero } from "@/components/home/Hero"
import { TrustBar } from "@/components/home/TrustBar"
import { ValueProp } from "@/components/home/ValueProp"
import { ServiceSpotlight } from "@/components/home/ServiceSpotlight"
import { Features } from "@/components/home/Features"
import { Testimonials } from "@/components/home/Testimonials"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProp />
      <ServiceSpotlight />
      <Features />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
