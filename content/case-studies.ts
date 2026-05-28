import { site } from "@/lib/config/site.config"
import type { MarketCaseStudy } from "@/lib/config/market"

export type CaseStudy = MarketCaseStudy

export const caseStudies: CaseStudy[] = site.content.caseStudies

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug)
