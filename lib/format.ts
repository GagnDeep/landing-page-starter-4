/**
 * Currency- and locale-aware formatters.
 * All money formatting in the app goes through these so a single
 * config swap (lib/config/site.config.ts) flips ₹ → $ everywhere.
 */

import { site } from "./config/site.config"

/** Full money formatting using the market's locale + currency symbol. */
export const formatMoney = (n: number) => {
  const rounded = Math.round(n)
  return `${site.currency.symbol}${rounded.toLocaleString(site.currency.locale)}`
}

/** Plain number with grouping but no currency symbol. */
export const formatNumber = (n: number, decimals = 0) =>
  n.toLocaleString(site.currency.locale, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })

/**
 * Compact money — for headlines like "₹78k" or "$8.4k".
 * Falls through to lakh-style for Indian locales when configured.
 */
export const formatMoneyCompact = (n: number) => {
  if (site.currency.useLakh) {
    if (n >= 10000000)
      return `${site.currency.symbol}${(n / 10000000).toFixed(1)}Cr`
    if (n >= 100000)
      return `${site.currency.symbol}${(n / 100000).toFixed(1)}L`
    if (n >= 1000)
      return `${site.currency.symbol}${Math.round(n / 1000)}${site.currency.thousandSuffix}`
    return formatMoney(n)
  }
  if (n >= 1_000_000)
    return `${site.currency.symbol}${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1000)
    return `${site.currency.symbol}${(n / 1000).toFixed(1)}${site.currency.thousandSuffix}`
  return formatMoney(n)
}

/**
 * Lakh-style summary, kept as a back-compat alias.
 * Returns the same compact form in non-Indian markets.
 */
export const formatLakh = (n: number) => formatMoneyCompact(n)

/** Back-compat alias for the legacy formatINR import surface. */
export const formatINR = formatMoney
