import { site } from "@/lib/config/site.config"
import type { MarketStep } from "@/lib/config/market"

export type Step = MarketStep

export const steps: Step[] = site.content.steps
