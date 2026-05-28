/**
 * Punjab market preset (legacy).
 * --------------------------------------------------------------
 * Original market — INR, India, PSPCL utility, PM Surya Ghar subsidy.
 * Activate by setting `NEXT_PUBLIC_MARKET=punjab` at build time.
 */

import type { Market } from "../market"

export const punjabMarket: Market = {
  id: "punjab",

  url: "https://punjabsolar.example.com",
  name: "Punjab Solar",
  legalName: "Punjab Solar Pvt. Ltd.",
  tagline: "Rooftop solar across Punjab",
  description:
    "Rooftop solar designed, installed and serviced from Patiala. PM Surya Ghar subsidy handled, paperwork done, panels generating in 21 days.",
  shortDescription:
    "Rooftop solar across Punjab. Subsidy handled. Panels on in 21 days.",
  foundingYear: 2019,

  phone: "+91 98765 43210",
  phoneDigits: "919876543210",
  email: "hello@punjabsolar.com",
  whatsapp: "919876543210",

  address: {
    street: "Plot 14, Industrial Area, Phase II",
    locality: "Patiala",
    region: "Punjab",
    regionCode: "PB",
    postalCode: "147001",
    country: "IN",
    countryName: "India",
    lat: 30.3398,
    lng: 76.3869,
  },

  hours: [
    { day: "Monday", open: "09:00", close: "19:00" },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "19:00" },
    { day: "Saturday", open: "09:00", close: "19:00" },
  ],
  hoursHuman: "Mon–Sat · 9:00–19:00",

  businessIdLabel: "GSTIN",
  businessId: "03ABCDE1234F1Z5",
  gstin: "03ABCDE1234F1Z5",
  cin: "U40106PB2019PTC012345",

  social: {
    facebook: "https://facebook.com/punjabsolar",
    instagram: "https://instagram.com/punjabsolar",
    youtube: "https://youtube.com/@punjabsolar",
    linkedin: "https://linkedin.com/company/punjabsolar",
    x: "https://x.com/punjabsolar",
    googleBusiness: "https://g.page/punjabsolar",
  },

  verification: { google: "", bing: "", facebook: "" },

  rating: { value: 4.9, count: 612, best: 5 },

  currency: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
    thousandSuffix: "k",
    useLakh: true,
  },

  incentive: {
    program: "PM Surya Ghar Muft Bijli Yojana",
    authority: "MNRE, Govt. of India",
    type: "DBT",
    max: 78000,
    currency: "INR",
    slabs: [
      { kw: 1, amount: 30000 },
      { kw: 2, amount: 60000 },
      { kw: 3, amount: 78000 },
      { kw: 10, amount: 78000 },
    ],
    short: "₹78,000 central subsidy",
    long: "The PM Surya Ghar Muft Bijli Yojana subsidy is a Direct Benefit Transfer to your linked savings account, usually within 30 days of commissioning. We file every form on your behalf.",
  },

  subsidy: {
    program: "PM Surya Ghar Muft Bijli Yojana",
    authority: "MNRE, Govt. of India",
    max: 78000,
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

  calculator: {
    tariffByType: { Home: 7.5, Farm: 6, Business: 8 },
    perKwByType: { Home: 62000, Farm: 55000, Business: 58000 },
    sunHoursPerDay: 4.4,
    emiFactor: 0.0215,
    lifetimeYears: 25,
    sqftPerKw: 80,
    lifetimeInflator: 1.15,
    kgCo2PerKwh: 0.82,
  },

  content: {
    districts: [
      { slug: "patiala", name: "Patiala", sunHours: 4.5, avgBill: 4500, popularKw: 5, hero: "Where we started — 6 install crews, hundreds of rooftops, fastest service window in Punjab." },
      { slug: "amritsar", name: "Amritsar", sunHours: 4.4, avgBill: 4200, popularKw: 5, hero: "Active installs from Walled City to Vallah. Two crews on standby every weekday." },
      { slug: "ludhiana", name: "Ludhiana", sunHours: 4.5, avgBill: 5200, popularKw: 5, hero: "The factory district. Industrial rooftops, residential colonies, and farm pumps — we cover all three." },
      { slug: "jalandhar", name: "Jalandhar", sunHours: 4.4, avgBill: 4400, popularKw: 5, hero: "From Model Town to Adampur, we've wired solar onto every kind of Jalandhar roof." },
      { slug: "bathinda", name: "Bathinda", sunHours: 4.7, avgBill: 5000, popularKw: 6, hero: "Some of Punjab's best generation. Hot summers turn into the highest annual savings in the state." },
      { slug: "mohali", name: "Mohali", sunHours: 4.5, avgBill: 5400, popularKw: 5, hero: "New-build kothis, IT-park rooftops, and gated colonies. Subsidy filings handled end-to-end." },
      { slug: "pathankot", name: "Pathankot", sunHours: 4.3, avgBill: 3800, popularKw: 4, hero: "Northern-most district. Crews dispatched from Amritsar — site visits within 48 hours." },
      { slug: "hoshiarpur", name: "Hoshiarpur", sunHours: 4.4, avgBill: 4000, popularKw: 4, hero: "Hill-fringe homes, farm pumps, and small-town shops — we install across the whole district." },
      { slug: "moga", name: "Moga", sunHours: 4.6, avgBill: 4200, popularKw: 4, hero: "Cooperative-society installs, PSPCL net-meter applications filed by us, every time." },
      { slug: "firozpur", name: "Firozpur", sunHours: 4.6, avgBill: 4100, popularKw: 4, hero: "Border-belt installs — our linesmen are familiar with every village substation." },
      { slug: "kapurthala", name: "Kapurthala", sunHours: 4.4, avgBill: 4000, popularKw: 4 },
      { slug: "sangrur", name: "Sangrur", sunHours: 4.6, avgBill: 4400, popularKw: 5, hero: "Big farms, big roofs, big savings. Tube-well solarisation a specialty." },
      { slug: "barnala", name: "Barnala", sunHours: 4.6, avgBill: 4100, popularKw: 4 },
      { slug: "mansa", name: "Mansa", sunHours: 4.7, avgBill: 4300, popularKw: 5 },
      { slug: "faridkot", name: "Faridkot", sunHours: 4.6, avgBill: 4000, popularKw: 4 },
      { slug: "muktsar", name: "Sri Muktsar Sahib", sunHours: 4.6, avgBill: 3900, popularKw: 4 },
      { slug: "rupnagar", name: "Rupnagar", sunHours: 4.4, avgBill: 4100, popularKw: 4 },
      { slug: "fatehgarh-sahib", name: "Fatehgarh Sahib", sunHours: 4.5, avgBill: 4200, popularKw: 4 },
      { slug: "gurdaspur", name: "Gurdaspur", sunHours: 4.3, avgBill: 3900, popularKw: 4 },
      { slug: "tarn-taran", name: "Tarn Taran", sunHours: 4.4, avgBill: 4000, popularKw: 4 },
      { slug: "nawanshahr", name: "Shaheed Bhagat Singh Nagar", sunHours: 4.4, avgBill: 4000, popularKw: 4 },
      { slug: "fazilka", name: "Fazilka", sunHours: 4.7, avgBill: 4100, popularKw: 5 },
      { slug: "khanna", name: "Khanna", sunHours: 4.5, avgBill: 4300, popularKw: 5 },
    ],

    packages: [
      {
        slug: "essential-3kw",
        name: "Essential 3 kW",
        sub: "Family of 4 · ~₹4,000 bill",
        panels: "Tier-1 mono PERC",
        inverter: "Microtek string",
        price: "₹1,08,000",
        strike: "₹1,86,000",
        featured: false,
        badge: "After ₹78k subsidy",
        warranty: "25 yr panel · 10 yr inv",
        installTime: "14–21 days",
      },
      {
        slug: "premium-5kw",
        name: "Premium 5 kW",
        sub: "Larger home · ~₹7,000 bill",
        panels: "TOPCon bifacial",
        inverter: "Growatt smart",
        price: "₹2,32,000",
        strike: "₹3,10,000",
        featured: true,
        badge: "Most chosen",
        warranty: "25 yr panel · 10 yr inv",
        installTime: "14–21 days",
      },
      {
        slug: "hybrid-8kw-battery",
        name: "Hybrid 8 kW + Battery",
        sub: "Power cuts? Solved.",
        panels: "Adani / Tata bifacial",
        inverter: "Sungrow hybrid + 10 kWh Li",
        price: "₹6,40,000",
        strike: "₹7,18,000",
        featured: false,
        badge: "Backup ready",
        warranty: "25 yr panel · 10 yr inv · 10 yr battery",
        installTime: "18–25 days",
      },
    ],

    caseStudies: [
      {
        slug: "ranjit-singh-patiala-5kw",
        title: "Ranjit ji's bill went from ₹6,800 to ₹380",
        subtitle: "5 kW residential install, Tripuri colony, Patiala",
        customer: "Ranjit Singh",
        district: "Patiala",
        systemKw: 5,
        beforeBill: 6800,
        afterBill: 380,
        installDate: "January 2026",
        category: "Residential",
        body: "Ranjit's family of five had been complaining about the AC bill for years. After the 5 kW install in Tripuri colony, the very first bill came in at ₹420 — and steadied around ₹380 across summer. Subsidy of ₹78,000 hit his bank account 27 days after commissioning. Payback projected at 3.2 years.",
      },
      {
        slug: "harvinder-kaur-mohali-4kw",
        title: "Harvinder's quote, written and honoured",
        subtitle: "4 kW residential install, Sector 70, Mohali",
        customer: "Harvinder Kaur",
        district: "Mohali",
        systemKw: 4,
        beforeBill: 5200,
        afterBill: 410,
        installDate: "March 2026",
        category: "Residential",
        body: 'Two installers had quoted vague "site charges" that would be revealed later. Punjab Solar gave one written number with subsidy applied. Installed in 17 days end-to-end. Harvinder\'s monthly bill dropped from ₹5,200 to under ₹500.',
      },
      {
        slug: "gurmeet-bathinda-10kw-farm",
        title: "Gurmeet's tube well runs free now",
        subtitle: "10 kW farm system, Talwandi Sabo, Bathinda",
        customer: "Gurmeet Singh Brar",
        district: "Bathinda",
        systemKw: 10,
        beforeBill: 9800,
        afterBill: 0,
        installDate: "November 2025",
        category: "Farm",
        body: "We migrated Gurmeet's farm connection from agriculture-tariff to a 10 kW solar+grid hybrid. Tube well runs entirely on solar during the day. Annual savings ₹1.1 lakh, paid back in under 4 years.",
      },
    ],

    posts: [
      {
        slug: "pm-surya-ghar-walkthrough",
        title: "PM Surya Ghar, walked through end-to-end",
        excerpt:
          "Every form, every checkbox, every screen — what we file on your behalf for the central government's rooftop solar subsidy.",
        date: "2026-01-12",
        author: "Punjab Solar",
        body: `## What is PM Surya Ghar?\n\nThe PM Surya Ghar Muft Bijli Yojana is the central government's residential rooftop solar subsidy. For homeowners, it covers up to ₹78,000 of the upfront cost of a system between 1 kW and 10 kW.`,
      },
      {
        slug: "solar-in-punjab-monsoon",
        title: "Does solar work in Punjab's monsoon?",
        excerpt:
          "What four monsoons of generation data tell us about July–September performance for Punjab rooftops.",
        date: "2026-02-04",
        author: "Punjab Solar",
        body: `## The short answer: yes.\n\nPunjab gets ~60–70 cloudy days a year.`,
      },
      {
        slug: "shaded-roofs-bifacial",
        title: "Shaded roof? Bifacial panels and microinverters",
        excerpt:
          "Why a partially shaded Punjab roof doesn't have to mean a smaller system.",
        date: "2026-03-18",
        author: "Punjab Solar",
        body: `## Shading is the #1 reason installers under-quote\n\nMost installers see a tree or a water tank and lop 30% off the system size. We don't.`,
      },
      {
        slug: "punjab-tariff-trajectory",
        title: "Punjab tariffs are rising — here's the math",
        excerpt:
          "Domestic tariffs in Punjab have risen ~6% a year. What that means for your 25-year solar payback.",
        date: "2026-04-02",
        author: "Punjab Solar",
        body: `## A boring-sounding number that compounds\n\nPSPCL's domestic tariff has trended up roughly 6% per year.`,
      },
      {
        slug: "battery-backup-when-it-makes-sense",
        title: "Battery backup: when it actually makes sense",
        excerpt:
          "Hybrid + battery costs more upfront. Here's how to decide whether the spend is worth it for your home.",
        date: "2026-04-21",
        author: "Punjab Solar",
        body: `## Battery is not for everyone\n\nSolar without battery saves you the most money — and shuts off during a power cut.`,
      },
    ],

    testimonials: [
      {
        q: "Bill came down from ₹6,800 to ₹420 in the first month. Paperwork took them three weeks, not three months.",
        who: "Ranjit Singh",
        where: "Patiala · 5 kW · installed Jan 2026",
        district: "patiala",
      },
      {
        q: 'Tried two other installers — both quoted vague "site charges". Punjab Solar gave one number, stuck to it.',
        who: "Harvinder Kaur",
        where: "Mohali · 4 kW · installed Mar 2026",
        district: "mohali",
      },
      {
        q: "Tube well runs free now. They handled the agriculture connection switch with PSPCL themselves.",
        who: "Gurmeet Singh Brar",
        where: "Bathinda · 10 kW farm · installed Nov 2025",
        district: "bathinda",
      },
    ],

    partners: [
      { n: "Adani Solar", c: "Tier-1 panels" },
      { n: "Waaree", c: "Tier-1 panels" },
      { n: "Tata Power Solar", c: "Tier-1 panels" },
      { n: "Vikram Solar", c: "Tier-1 panels" },
      { n: "Growatt", c: "Inverters" },
      { n: "Sungrow", c: "Hybrid inverters" },
      { n: "Microtek", c: "String inverters" },
      { n: "Luminous", c: "Lithium batteries" },
    ],

    gallery: [
      { city: "Patiala", size: "5 kW", type: "Residential", a: "4/5" },
      { city: "Sangrur", size: "10 kW", type: "Farm pump", a: "1/1" },
      { city: "Ludhiana", size: "25 kW", type: "Factory rooftop", a: "5/4" },
      { city: "Amritsar", size: "3 kW", type: "Residential", a: "4/5" },
      { city: "Bathinda", size: "7.5 kW", type: "Residential + battery", a: "1/1" },
    ],

    stats: [
      { n: "1,247", l: "Rooftops powered" },
      { n: "8.4 MW", l: "Total installed" },
      { n: "23/23", l: "Punjab districts served" },
      { n: "4.9★", l: "Google rating · 612 reviews" },
    ],

    marquee: [
      "PSPCL EMPANELLED",
      "MNRE APPROVED",
      "TIER-1 PANELS ONLY",
      "25-YEAR WARRANTY",
      "PM SURYA GHAR FILED FOR YOU",
      "NET METERING HANDLED",
      "1,200+ ROOFTOPS",
      "ALL 23 PUNJAB DISTRICTS",
    ],

    steps: [
      { n: "01", t: "Free site survey", d: "Engineer at your door in 48 hours. Roof measured. Shading checked. Zero charge." },
      { n: "02", t: "Custom design + quote", d: "Right-sized for your bill. Subsidy locked in writing — not promised verbally." },
      { n: "03", t: "We file every form", d: "PM Surya Ghar. DISCOM application. Net-meter request. You sign once." },
      { n: "04", t: "Install in 7 days", d: "Tier-1 panels. IP65 inverters. Our linesmen — never subcontracted." },
      { n: "05", t: "Net-meter + power-on", d: "PSPCL inspection done. Meter swapped. App live. You start exporting." },
      { n: "06", t: "25-year service", d: "Annual cleaning. Performance reports. WhatsApp answered by a human, not a bot." },
    ],

    timeline: [
      { d: "Day 0", t: "You book", s: "Online or WhatsApp. Two clicks.", icon: "book" },
      { d: "Day 1–2", t: "Site survey", s: "Engineer, drone shot, structural check.", icon: "survey" },
      { d: "Day 3", t: "Quote locked", s: "Subsidy confirmed in writing.", icon: "quote" },
      { d: "Day 4–7", t: "Forms filed", s: "PM Surya Ghar + DISCOM.", icon: "forms" },
      { d: "Day 10–14", t: "Install", s: "Panels, inverter, earthing.", icon: "install" },
      { d: "Day 15–17", t: "PSPCL inspection", s: "Officials verify the work.", icon: "inspect" },
      { d: "Day 18–21", t: "Power-on", s: "Net-meter installed. You export to grid.", icon: "poweron" },
      { d: "Day 30–50", t: "Subsidy paid", s: "MNRE deposits straight to your bank.", icon: "money" },
    ],

    reasons: [
      { t: "Local engineers", d: "Punjabi-speaking team, based in Patiala. We're not a call-center reselling installs to subcontractors." },
      { t: "Empanelled with PSPCL", d: "Officially listed installer. Your subsidy claim and net-metering is processed faster, not stuck in queues." },
      { t: "Tier-1 panels only", d: "Adani, Waaree, Vikram, Tata. We never use the cheap unbranded modules that fail in 5 years." },
      { t: "Honest pricing", d: 'One quote, written. No "site charges" added later. The price you see includes GST, install, and subsidy paperwork.' },
    ],

    citiesOnMap: [
      { x: 22, y: 30, name: "Pathankot" },
      { x: 28, y: 42, name: "Amritsar" },
      { x: 38, y: 55, name: "Jalandhar" },
      { x: 50, y: 60, name: "Ludhiana" },
      { x: 60, y: 70, name: "Patiala" },
      { x: 35, y: 75, name: "Bathinda" },
      { x: 65, y: 50, name: "Mohali" },
      { x: 45, y: 40, name: "Hoshiarpur" },
      { x: 55, y: 80, name: "Sangrur" },
    ],

    faqs: [
      { q: "How long does installation actually take?", a: "From the day you book the site visit to power-on, typically 18–21 days. The installation itself takes 2–3 days; the rest is DISCOM paperwork and net-meter scheduling, which we handle.", category: "general" },
      { q: "What if my roof is shaded or oddly shaped?", a: "We use a drone survey for any roof above 5 kW. Bifacial panels, microinverters, and tilted mounts all help — our engineer will design around the shading on the spot.", category: "general" },
      { q: "Does the subsidy actually land in my account?", a: "Yes — it's a Direct Benefit Transfer to your linked savings account, usually within 30 days of commissioning. We provide the invoice and tracking number.", category: "subsidy" },
      { q: "What happens during a power cut?", a: "A standard grid-tied system shuts off (safety regulation). For uninterrupted power, choose the Hybrid + Battery package — it islands your home and keeps essentials running.", category: "general" },
      { q: "What if I sell the house?", a: "The system stays with the property and adds 4–6% to resale value on average. Warranty transfers to the new owner. We handle the name change with PSPCL.", category: "service" },
      { q: "Do you serve villages and small towns?", a: "Yes — every district in Punjab. We have installation crews in Patiala, Ludhiana, Amritsar, Bathinda and Pathankot covering surrounding areas.", category: "service" },
      { q: "How does EMI work?", a: "We're partnered with Tata Capital and Aditya Birla Capital for solar loans. 5-year tenure, ~10.5% reducing, no collateral up to ₹6 lakh. Approval in 48 hours.", category: "calc" },
    ],
  },

  copy: {
    regionName: "Punjab",
    regionLong: "Punjab, India",
    regionPossessive: "Punjab's",
    serviceArea: "all 23 Punjab districts",
    districtCount: 23,
    districtWord: "district",
    districtWordPlural: "districts",
    utilityShort: "PSPCL",
    utilityLong: "PSPCL · MNRE · PM Surya Ghar",
    greeting: "Sat sri akaal.",
    scriptFamilies: ["Devanagari", "Gurmukhi"],
    installDays: "21 days",
    defaultBill: 4500,
    panelsCallout: "Adani, Waaree, Vikram, Tata",
    footerTagline: "Made in Patiala · ਪੰਜਾਬ",
  },

  brand: {
    primary: "#E5B844",
    primaryDeep: "#C29722",
    ink: "#0F1410",
    paper: "#F5EFE3",
  },

  ogImage: "/og.jpg",
  logo: "/logo.png",
  appleTouchIcon: "/apple-touch-icon.png",

  locales: ["en", "hi", "pa"] as const,
  defaultLocale: "en",
  localeNames: { en: "English", hi: "हिन्दी", pa: "ਪੰਜਾਬੀ" },
  ogLocaleByLang: { en: "en_IN", hi: "hi_IN", pa: "pa_IN" },
  primaryLocale: "en_IN",
  hreflang: {
    primary: "en-IN",
    alternates: ["hi-IN", "pa-IN", "x-default"],
  },

  aiPolicy: {
    allowTraining: false,
    allowCitation: true,
    contact: "hello@punjabsolar.com",
  },
}
