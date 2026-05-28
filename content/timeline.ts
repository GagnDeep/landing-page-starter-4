import { site } from "@/lib/config/site.config"
import type { MarketTimelineDay } from "@/lib/config/market"

export type TimelineIconName = MarketTimelineDay["icon"]
export type TimelineDay = MarketTimelineDay

export const timeline: TimelineDay[] = site.content.timeline
