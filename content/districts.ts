import { site } from "@/lib/config/site.config"
import type { MarketDistrict } from "@/lib/config/market"

export type District = MarketDistrict

export const districts: District[] = site.content.districts

export const getDistrict = (slug: string) =>
  districts.find((d) => d.slug === slug)
