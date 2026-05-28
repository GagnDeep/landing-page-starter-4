/**
 * Market preset type definitions.
 * --------------------------------------------------------------
 * A "Market" is everything that changes when you target a different
 * state/country: identity, currency, utility regulator, incentive
 * program, district list, sample copy, content, calculator constants.
 *
 * Two presets ship with the site:
 *   - lib/config/markets/california.ts  (default — US, USD)
 *   - lib/config/markets/punjab.ts      (legacy — India, INR)
 *
 * Switch the active market with env: `NEXT_PUBLIC_MARKET=punjab`
 * (default is "california"). Or override per-domain by tweaking
 * lib/config/site.config.ts.
 */

export interface MarketCurrency {
  code: "USD" | "INR" | "EUR" | "GBP" | "AUD" | "CAD"
  symbol: string
  locale: string
  /** Used for short notations like "$78k" / "₹78k". */
  thousandSuffix: string
  /** Whether to use lakh formatting (Indian) for big numbers. */
  useLakh: boolean
}

export interface MarketAddress {
  street: string
  locality: string
  region: string
  regionCode: string
  postalCode: string
  country: string
  countryName: string
  lat: number
  lng: number
}

export interface MarketHours {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
  open: string
  close: string
}

export interface MarketSocial {
  facebook: string
  instagram: string
  youtube: string
  linkedin: string
  x: string
  googleBusiness: string
}

export interface MarketIncentive {
  program: string
  authority: string
  /** "DBT" (direct deposit), "ITC" (tax credit), "credit" (utility credit). */
  type: "DBT" | "ITC" | "credit" | "rebate"
  max: number
  /** Currency the incentive is measured in — usually market.currency.code. */
  currency: string
  /** Optional kw → amount tiers (Indian-style step). */
  slabs?: { kw: number; amount: number }[]
  /** Optional flat percentage of system cost (US-style ITC). */
  pctOfCost?: number
  short: string
  long: string
}

export interface MarketCalculator {
  /** Tariff per kWh in market currency (delivered + generation). */
  tariffByType: { Home: number; Farm: number; Business: number }
  /** Installed cost per kW (turnkey, pre-incentive). */
  perKwByType: { Home: number; Farm: number; Business: number }
  /** Average daily generation per kW installed. */
  sunHoursPerDay: number
  /** Loan EMI factor (multiply by net cost to get monthly payment). */
  emiFactor: number
  /** Lifetime in years (warranty length). */
  lifetimeYears: number
  /** Sq ft of clear roof per kW. */
  sqftPerKw: number
  /** Lifetime savings inflation multiplier. */
  lifetimeInflator: number
  /** kg CO₂ per kWh avoided (grid carbon intensity). */
  kgCo2PerKwh: number
}

export interface MarketDistrict {
  slug: string
  name: string
  sunHours: number
  avgBill: number
  popularKw: number
  hero?: string
}

export interface MarketTier {
  slug: string
  name: string
  sub: string
  panels: string
  inverter: string
  price: string
  strike: string
  featured: boolean
  badge: string
  warranty: string
  installTime: string
}

export interface MarketCaseStudy {
  slug: string
  title: string
  subtitle: string
  customer: string
  district: string
  systemKw: number
  beforeBill: number
  afterBill: number
  installDate: string
  body: string
  category: "Residential" | "Farm" | "Commercial"
}

export interface MarketPost {
  slug: string
  title: string
  excerpt: string
  date: string
  body: string
  author: string
  /** Optional hero image path (relative to /public). */
  image?: string
  /** SEO keywords for per-post metadata. */
  keywords?: string[]
  /** Section/category label — drives related-post selection + index badge. */
  category?: string
  /** ISO date when the post was last revised; if set and !== date, surfaces an Updated stamp. */
  updated?: string
  /** Promotes the post into the featured slot on the blog index + bumps sitemap priority. */
  featured?: boolean
}

export interface MarketTestimonial {
  q: string
  who: string
  where: string
  district: string
}

export interface MarketPartner {
  n: string
  c: string
}

export interface MarketGalleryItem {
  city: string
  size: string
  type: string
  a: string
}

export interface MarketStat {
  n: string
  l: string
}

export interface MarketStep {
  n: string
  t: string
  d: string
}

export interface MarketTimelineDay {
  d: string
  t: string
  s: string
  icon:
    | "book"
    | "survey"
    | "quote"
    | "forms"
    | "install"
    | "inspect"
    | "poweron"
    | "money"
}

export interface MarketReason {
  t: string
  d: string
}

export interface MarketCityDot {
  x: number
  y: number
  name: string
}

export interface MarketFAQ {
  q: string
  a: string
  category?: "general" | "subsidy" | "service" | "calc" | "contact"
}

export interface MarketCopy {
  /** "California" / "Punjab" — used in headlines and the hero. */
  regionName: string
  /** "California, USA" / "Punjab, India" */
  regionLong: string
  /** "California's" / "Punjab's" */
  regionPossessive: string
  /** "all 58 California counties" / "all 23 Punjab districts" */
  serviceArea: string
  /** Map of district/county count. */
  districtCount: number
  /** Word for region division: "district" / "county". */
  districtWord: string
  /** Plural: "districts" / "counties". */
  districtWordPlural: string
  /** Utility regulator short name (e.g., "PG&E"). */
  utilityShort: string
  /** Utility regulator long name (e.g., "California IOUs"). */
  utilityLong: string
  /** Greeting on the post-booking page ("Sat sri akaal." / "Welcome."). */
  greeting: string
  /** Language fallbacks for typography (CSS unicode-range fallbacks). */
  scriptFamilies: string[]
  /** "21 days" / "21 days" — could differ per market. */
  installDays: string
  /** Cheap monthly bill range to show in default calc state. */
  defaultBill: number
  /** Tier-1 panel callout. */
  panelsCallout: string
  /** Region tagline used in the footer. */
  footerTagline: string
}

export interface Market {
  /** Stable identifier used by env var. */
  id: string
  // identity
  url: string
  name: string
  legalName: string
  tagline: string
  description: string
  shortDescription: string
  foundingYear: number
  // contact
  phone: string
  phoneDigits: string
  email: string
  whatsapp: string
  // address
  address: MarketAddress
  // hours
  hours: MarketHours[]
  hoursHuman: string
  // business identifiers (license/GST)
  businessIdLabel: string
  businessId: string
  /** Backwards-compat aliases. */
  gstin: string
  cin: string
  // social
  social: MarketSocial
  // verification meta
  verification: { google: string; bing: string; facebook: string }
  // rating
  rating: { value: number; count: number; best: number }
  // currency
  currency: MarketCurrency
  // incentive program
  incentive: MarketIncentive
  /** Backwards-compat alias for "subsidy". */
  subsidy: {
    program: string
    authority: string
    max: number
    slabs?: { kw: number; amount: number }[]
  }
  // pricing
  pricing: { currency: string; range: string }
  // calculator constants
  calculator: MarketCalculator
  // content
  content: {
    districts: MarketDistrict[]
    packages: MarketTier[]
    caseStudies: MarketCaseStudy[]
    posts: MarketPost[]
    testimonials: MarketTestimonial[]
    partners: MarketPartner[]
    gallery: MarketGalleryItem[]
    stats: MarketStat[]
    marquee: string[]
    steps: MarketStep[]
    timeline: MarketTimelineDay[]
    reasons: MarketReason[]
    citiesOnMap: MarketCityDot[]
    faqs: MarketFAQ[]
  }
  // copy snippets that reference market identity
  copy: MarketCopy
  // brand
  brand: {
    primary: string
    primaryDeep: string
    ink: string
    paper: string
  }
  // assets
  ogImage: string
  logo: string
  appleTouchIcon: string
  // i18n
  locales: readonly string[]
  defaultLocale: string
  localeNames: Record<string, string>
  ogLocaleByLang: Record<string, string>
  /** Primary locale for og:locale and html lang. */
  primaryLocale: string
  /** BCP-47 used in hreflang. */
  hreflang: { primary: string; alternates: string[] }
  // ai policy
  aiPolicy: { allowTraining: boolean; allowCitation: boolean; contact: string }
}
