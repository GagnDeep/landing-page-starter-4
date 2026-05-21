/**
 * @deprecated Import from `@/lib/config/site.config` instead.
 * Kept as a thin re-export for backwards compatibility.
 */
import { site, whatsappLink } from "./config/site.config"

export const siteUrl = site.url
export const siteName = site.name
export const siteDescription = site.description
export const phone = site.phone
export const phoneDigits = site.phoneDigits
export const email = site.email
export const officeAddress = {
  street: site.address.street,
  city: site.address.locality,
  state: site.address.region,
  postalCode: site.address.postalCode,
  country: site.address.country,
}
export const hours = site.hoursHuman
export const gstin = site.gstin

export { whatsappLink }
