/**
 * SINGLE SOURCE OF TRUTH
 * --------------------------------------------------------------
 * Every replaceable value lives in this file.
 * Look for `// REPLACE:` markers when going live.
 * Anything not marked REPLACE is brand/structural and rarely changes.
 */

export const site = {
  // ============================================================
  // REPLACE: identity
  // ============================================================
  url: "https://punjabsolar.example.com",
  name: "Punjab Solar",
  legalName: "Punjab Solar Pvt. Ltd.",
  tagline: "Rooftop solar across Punjab",
  description:
    "Rooftop solar designed, installed and serviced from Patiala. PM Surya Ghar subsidy handled, paperwork done, panels generating in 21 days.",
  shortDescription:
    "Rooftop solar across Punjab. Subsidy handled. Panels on in 21 days.",
  foundingYear: 2019,

  // ============================================================
  // REPLACE: contact
  // ============================================================
  phone: "+91 98765 43210",
  phoneDigits: "919876543210",
  email: "hello@punjabsolar.com",
  whatsapp: "919876543210",

  // ============================================================
  // REPLACE: address (used by LocalBusiness JSON-LD + /contact)
  // ============================================================
  address: {
    street: "Plot 14, Industrial Area, Phase II",
    locality: "Patiala",
    region: "Punjab",
    postalCode: "147001",
    country: "IN",
    countryName: "India",
    lat: 30.3398,
    lng: 76.3869,
  },

  // ============================================================
  // REPLACE: per-day hours (LocalBusiness OpeningHoursSpecification)
  // ============================================================
  hours: [
    { day: "Monday", open: "09:00", close: "19:00" },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "19:00" },
    { day: "Saturday", open: "09:00", close: "19:00" },
  ],
  hoursHuman: "Mon–Sat · 9:00–19:00",

  // ============================================================
  // REPLACE: business identifiers
  // ============================================================
  gstin: "03ABCDE1234F1Z5",
  cin: "U40106PB2019PTC012345",

  // ============================================================
  // REPLACE: social handles (used in Organization sameAs + footer)
  // ============================================================
  social: {
    facebook: "https://facebook.com/punjabsolar",
    instagram: "https://instagram.com/punjabsolar",
    youtube: "https://youtube.com/@punjabsolar",
    linkedin: "https://linkedin.com/company/punjabsolar",
    x: "https://x.com/punjabsolar",
    googleBusiness: "https://g.page/punjabsolar",
  },

  // ============================================================
  // REPLACE: verification meta tags
  // ============================================================
  verification: {
    google: "",
    bing: "",
    facebook: "",
  },

  // ============================================================
  // REPLACE: aggregate rating (LocalBusiness + Product)
  // ============================================================
  rating: {
    value: 4.9,
    count: 612,
    best: 5,
  },

  // ============================================================
  // REPLACE: pricing / subsidy constants
  // ============================================================
  subsidy: {
    max: 78000,
    program: "PM Surya Ghar Muft Bijli Yojana",
    authority: "MNRE, Govt. of India",
    slabs: [
      { kw: 1, amount: 30000 },
      { kw: 2, amount: 60000 },
      { kw: 3, amount: 78000 },
      { kw: 10, amount: 78000 },
    ],
  },
  pricing: {
    currency: "INR",
    range: "₹1,08,000 – ₹6,40,000",
  },

  // ============================================================
  // Brand (rarely changes)
  // ============================================================
  brand: {
    primary: "#E5B844",
    primaryDeep: "#C29722",
    ink: "#0F1410",
    paper: "#F5EFE3",
  },

  // ============================================================
  // Assets
  // ============================================================
  ogImage: "/og.jpg",
  logo: "/logo.png",
  appleTouchIcon: "/apple-touch-icon.png",

  // ============================================================
  // i18n
  // ============================================================
  locales: ["en", "hi", "pa"] as const,
  defaultLocale: "en" as const,
  localeNames: { en: "English", hi: "हिन्दी", pa: "ਪੰਜਾਬੀ" } as Record<
    string,
    string
  >,
  ogLocaleByLang: { en: "en_IN", hi: "hi_IN", pa: "pa_IN" } as Record<
    string,
    string
  >,

  // ============================================================
  // AI/LLM policy — used by robots.ts and /ai.txt
  // ============================================================
  aiPolicy: {
    allowTraining: false,
    allowCitation: true,
    contact: "hello@punjabsolar.com",
  },
} as const

export type Site = typeof site

/** Helper: build absolute URLs from a path. */
export const absUrl = (path = "/") => {
  if (!path.startsWith("/")) path = "/" + path
  return `${site.url}${path}`
}

/** Helper: WhatsApp deep link with optional pre-filled message. */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`

/** Helper: tel: link for click-to-call. */
export const telLink = () => `tel:${site.phone.replace(/\s/g, "")}`
