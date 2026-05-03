import { AboutHero } from '@/components/about/AboutHero'
import { OurStory } from '@/components/about/OurStory'
import { Team } from '@/components/about/Team'
import { StudioSpace } from '@/components/about/StudioSpace'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Team />
      <StudioSpace />
      <FinalCTA />
    </>
  )
}
