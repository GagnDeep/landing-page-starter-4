import { site } from "@/lib/config/site.config"
import type { MarketFAQ } from "@/lib/config/market"

export type FAQ = MarketFAQ

export const faqs: FAQ[] = site.content.faqs
