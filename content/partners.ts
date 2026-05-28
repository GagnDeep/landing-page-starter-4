import { site } from "@/lib/config/site.config"
import type { MarketPartner } from "@/lib/config/market"

export type Partner = MarketPartner

export const partners: Partner[] = site.content.partners
