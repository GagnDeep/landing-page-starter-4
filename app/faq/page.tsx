import { FAQHero } from '@/components/faq/FAQHero'
import { CategorizedFAQ } from '@/components/faq/CategorizedFAQ'
import { ContactCTA } from '@/components/faq/ContactCTA'

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <CategorizedFAQ />
      <ContactCTA />
    </>
  )
}
