import { site } from "@/lib/config/site.config"
import type { MarketReason } from "@/lib/config/market"

export type Reason = MarketReason

export const reasons: Reason[] = site.content.reasons
