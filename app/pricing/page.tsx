import { PricingHero } from '@/components/pricing/PricingHero'
import { ServiceCategories } from '@/components/pricing/ServiceCategories'
import { CuratedPackages } from '@/components/pricing/CuratedPackages'
import { PricingFAQ } from '@/components/pricing/PricingFAQ'

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <ServiceCategories />
      <CuratedPackages />
      <PricingFAQ />
    </>
  )
}
