import { site } from "@/lib/config/site.config"
import type { MarketTier } from "@/lib/config/market"

export type Tier = MarketTier

export const tiers: Tier[] = site.content.packages

export const getTier = (slug: string) => tiers.find((t) => t.slug === slug)
