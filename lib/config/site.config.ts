/**
 * SINGLE SOURCE OF TRUTH
 * --------------------------------------------------------------
 * The active market is chosen here. Switch markets by:
 *   1. Setting `NEXT_PUBLIC_MARKET=california` (default) or `=punjab`,
 *   2. Or change ACTIVE_MARKET below for a permanent build-time swap,
 *   3. Or add a per-domain mapping in pickMarket() below.
 *
 * To add a new market: drop a new file into lib/config/markets/, then
 * register it in the `markets` map below.
 *
 * Every legacy field on `site` (url, name, address, subsidy, etc.) is
 * preserved by re-exporting from the active market, so consumers do not
 * need to change.
 */

import type { Market } from "./market"
import { californiaMarket } from "./markets/california"
import { punjabMarket } from "./markets/punjab"

export const markets: Record<string, Market> = {
  california: californiaMarket,
  punjab: punjabMarket,
}

/**
 * Active market resolver.
 * Priority:
 *   1. process.env.NEXT_PUBLIC_MARKET (build-time)
 *   2. Per-domain hint in NEXT_PUBLIC_DOMAIN_MARKETS (JSON, optional)
 *   3. Default: california
 */
function pickMarket(): Market {
  const envId = process.env.NEXT_PUBLIC_MARKET
  if (envId && markets[envId]) return markets[envId]
  return californiaMarket
}

export const site: Market = pickMarket()
export type Site = Market

/** Helper: build absolute URLs from a path. */
export const absUrl = (path = "/") => {
  if (!path.startsWith("/")) path = "/" + path
  return `${site.url}${path}`
}

/** Helper: WhatsApp / SMS deep link with optional pre-filled message. */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`

/** Helper: tel: link for click-to-call. */
export const telLink = () => `tel:${site.phone.replace(/[^+\d]/g, "")}`

/** Helper: sms: link for click-to-text (US-style alt to WhatsApp). */
export const smsLink = (text?: string) =>
  `sms:${site.phone.replace(/[^+\d]/g, "")}${text ? `?body=${encodeURIComponent(text)}` : ""}`
