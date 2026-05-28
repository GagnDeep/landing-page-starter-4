import { site } from "@/lib/config/site.config"
import type { MarketPost } from "@/lib/config/market"

export type Post = MarketPost

export const posts: Post[] = site.content.posts

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
