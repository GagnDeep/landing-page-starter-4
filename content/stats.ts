import { site } from "@/lib/config/site.config"
import type { MarketStat } from "@/lib/config/market"

export type Stat = MarketStat

export const stats: Stat[] = site.content.stats
