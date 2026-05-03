import { FeaturesHero } from '@/components/features/FeaturesHero'
import { HygieneProtocols } from '@/components/features/HygieneProtocols'
import { PremiumProducts } from '@/components/features/PremiumProducts'
import { DoorstepExperience } from '@/components/features/DoorstepExperience'
import { FinalCTA } from '@/components/home/FinalCTA' // Reusing from home as it serves the exact same purpose and data source

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <HygieneProtocols />
      <PremiumProducts />
      <DoorstepExperience />
      <FinalCTA />
    </>
  )
}
