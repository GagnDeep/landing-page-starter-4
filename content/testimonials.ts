import { site } from "@/lib/config/site.config"
import type { MarketTestimonial } from "@/lib/config/market"

export type Testimonial = MarketTestimonial

export const testimonials: Testimonial[] = site.content.testimonials
