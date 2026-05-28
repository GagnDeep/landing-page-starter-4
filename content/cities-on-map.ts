import { site } from "@/lib/config/site.config"
import type { MarketCityDot } from "@/lib/config/market"

export type CityDot = MarketCityDot

export const citiesOnMap: CityDot[] = site.content.citiesOnMap
