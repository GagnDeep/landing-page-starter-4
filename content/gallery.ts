import { site } from "@/lib/config/site.config"
import type { MarketGalleryItem } from "@/lib/config/market"

export type GalleryItem = MarketGalleryItem

export const gallery: GalleryItem[] = site.content.gallery
