/**
 * California market preset (default).
 * --------------------------------------------------------------
 * California is the #1 US state for residential solar by installs.
 * Calc constants, tariff, and incentive numbers reflect mid-2026 norms
 * across PG&E / SCE / SDG&E service territories.
 *
 * REPLACE markers indicate values you should swap when going live
 * for a specific brand/installer.
 */

import type { Market } from "../market"

export const californiaMarket: Market = {
  id: "california",

  // ============================================================
  // REPLACE: identity
  // ============================================================
  url: "https://goldenstatesolar.example.com",
  name: "Golden State Solar",
  legalName: "Golden State Solar, Inc.",
  tagline: "Rooftop solar across California",
  description:
    "Rooftop solar designed, installed and serviced from Los Angeles. Federal tax credit handled, paperwork done, panels generating in 21 days.",
  shortDescription:
    "Rooftop solar across California. Tax credit handled. Panels on in 21 days.",
  foundingYear: 2019,

  // ============================================================
  // REPLACE: contact
  // ============================================================
  phone: "+1 (310) 555-0142",
  phoneDigits: "13105550142",
  email: "hello@goldenstatesolar.com",
  whatsapp: "13105550142",

  // ============================================================
  // REPLACE: address
  // ============================================================
  address: {
    street: "2150 W Olympic Blvd, Suite 410",
    locality: "Los Angeles",
    region: "California",
    regionCode: "CA",
    postalCode: "90006",
    country: "US",
    countryName: "United States",
    lat: 34.0522,
    lng: -118.2437,
  },

  hours: [
    { day: "Monday", open: "08:00", close: "18:00" },
    { day: "Tuesday", open: "08:00", close: "18:00" },
    { day: "Wednesday", open: "08:00", close: "18:00" },
    { day: "Thursday", open: "08:00", close: "18:00" },
    { day: "Friday", open: "08:00", close: "18:00" },
    { day: "Saturday", open: "09:00", close: "16:00" },
  ],
  hoursHuman: "Mon–Fri · 8:00–18:00 · Sat · 9:00–16:00",

  // ============================================================
  // REPLACE: business identifiers
  // CSLB = Contractors State License Board (CA solar contractor)
  // ============================================================
  businessIdLabel: "CSLB License",
  businessId: "C-46 #1098765",
  gstin: "C-46 #1098765",
  cin: "EIN 88-1234567",

  social: {
    facebook: "https://facebook.com/goldenstatesolar",
    instagram: "https://instagram.com/goldenstatesolar",
    youtube: "https://youtube.com/@goldenstatesolar",
    linkedin: "https://linkedin.com/company/goldenstatesolar",
    x: "https://x.com/gs_solar",
    googleBusiness: "https://g.page/goldenstatesolar",
  },

  verification: { google: "", bing: "", facebook: "" },

  rating: { value: 4.9, count: 1247, best: 5 },

  // ============================================================
  // Currency — USD, en-US formatting
  // ============================================================
  currency: {
    code: "USD",
    symbol: "$",
    locale: "en-US",
    thousandSuffix: "k",
    useLakh: false,
  },

  // ============================================================
  // Incentive program — Federal ITC + CA-NEM 3.0 credit
  // ============================================================
  incentive: {
    program: "Federal Residential Clean Energy Credit (ITC)",
    authority: "IRS · Section 25D",
    type: "ITC",
    max: 9000, // typical 30% of $30k system
    currency: "USD",
    pctOfCost: 0.3,
    short: "30% federal tax credit",
    long: "30% federal tax credit under IRC Section 25D — applied directly to your federal taxes the year your system is placed in service. We hand you the IRS Form 5695 worksheet at commissioning.",
    // No slabs in US; included for backwards compat with old subsidy slab JSON-LD.
  },

  subsidy: {
    program: "Federal Residential Clean Energy Credit (ITC)",
    authority: "IRS · Section 25D",
    max: 9000,
  },

  pricing: {
    currency: "USD",
    range: "$12,500 – $36,800",
  },

  // ============================================================
  // Calculator constants (California rooftop solar, mid-2026)
  // ============================================================
  calculator: {
    // $/kWh — California tier-2 residential is ~$0.42 (PG&E), commercial ~$0.30, agriculture ~$0.22
    tariffByType: { Home: 0.42, Farm: 0.22, Business: 0.3 },
    // $/kW installed — turnkey residential ~$2,800/kW; commercial ~$2,400; agriculture ~$2,200
    perKwByType: { Home: 2800, Farm: 2200, Business: 2400 },
    // California average sun hours per day across the state
    sunHoursPerDay: 5.4,
    // 15-yr 7.99% loan EMI factor ≈ 0.0095 per $ financed/month
    emiFactor: 0.0095,
    lifetimeYears: 25,
    sqftPerKw: 80,
    lifetimeInflator: 1.18,
    kgCo2PerKwh: 0.42,
  },

  // ============================================================
  // Content — California-specific
  // ============================================================
  content: {
    districts: [
      { slug: "los-angeles", name: "Los Angeles", sunHours: 5.6, avgBill: 285, popularKw: 7, hero: "Where we started — five install crews, thousands of LA rooftops, fastest service window in SoCal." },
      { slug: "san-diego", name: "San Diego", sunHours: 5.7, avgBill: 310, popularKw: 7, hero: "Coastal climate, year-round sun. From La Jolla to Chula Vista — net-billing handled with SDG&E." },
      { slug: "san-francisco", name: "San Francisco", sunHours: 4.9, avgBill: 295, popularKw: 6, hero: "Foggy mornings, bright afternoons. PG&E NEM 3.0 paperwork is our specialty." },
      { slug: "san-jose", name: "San Jose", sunHours: 5.3, avgBill: 320, popularKw: 7, hero: "Silicon Valley rooftops. Battery + EV-ready systems are the default here." },
      { slug: "sacramento", name: "Sacramento", sunHours: 5.6, avgBill: 280, popularKw: 7, hero: "SMUD service territory — different rules, lower rates, faster interconnection. We know all of it." },
      { slug: "fresno", name: "Fresno", sunHours: 6.2, avgBill: 340, popularKw: 8, hero: "Central Valley heat. Highest generation potential in the state — and the highest summer bills." },
      { slug: "long-beach", name: "Long Beach", sunHours: 5.6, avgBill: 270, popularKw: 6 },
      { slug: "oakland", name: "Oakland", sunHours: 5.1, avgBill: 290, popularKw: 6 },
      { slug: "bakersfield", name: "Bakersfield", sunHours: 6.1, avgBill: 360, popularKw: 8, hero: "Hot, dry, sunny. Ag-tariff farms get the fastest paybacks in California." },
      { slug: "anaheim", name: "Anaheim", sunHours: 5.6, avgBill: 280, popularKw: 7 },
      { slug: "santa-ana", name: "Santa Ana", sunHours: 5.6, avgBill: 275, popularKw: 6 },
      { slug: "riverside", name: "Riverside", sunHours: 5.9, avgBill: 320, popularKw: 7, hero: "Inland Empire homes — large roofs, summer cooling loads, big solar wins." },
      { slug: "stockton", name: "Stockton", sunHours: 5.7, avgBill: 295, popularKw: 7 },
      { slug: "irvine", name: "Irvine", sunHours: 5.6, avgBill: 320, popularKw: 7, hero: "Master-planned OC communities. HOA-friendly mount designs, every install." },
      { slug: "chula-vista", name: "Chula Vista", sunHours: 5.7, avgBill: 290, popularKw: 6 },
      { slug: "fremont", name: "Fremont", sunHours: 5.3, avgBill: 310, popularKw: 7 },
      { slug: "san-bernardino", name: "San Bernardino", sunHours: 5.9, avgBill: 305, popularKw: 7 },
      { slug: "modesto", name: "Modesto", sunHours: 5.8, avgBill: 290, popularKw: 6, hero: "MID service area. Different interconnection process, lower tariff — we handle the paperwork." },
      { slug: "oxnard", name: "Oxnard", sunHours: 5.6, avgBill: 280, popularKw: 6 },
      { slug: "fontana", name: "Fontana", sunHours: 5.9, avgBill: 295, popularKw: 7 },
      { slug: "moreno-valley", name: "Moreno Valley", sunHours: 5.9, avgBill: 300, popularKw: 7 },
      { slug: "huntington-beach", name: "Huntington Beach", sunHours: 5.6, avgBill: 270, popularKw: 6 },
      { slug: "glendale", name: "Glendale", sunHours: 5.6, avgBill: 270, popularKw: 6 },
    ],

    packages: [
      {
        slug: "essential-6kw",
        name: "Essential 6 kW",
        sub: "Family of 4 · ~$240 bill",
        panels: "Tier-1 mono PERC",
        inverter: "Enphase IQ8 microinverters",
        price: "$11,760",
        strike: "$16,800",
        featured: false,
        badge: "After 30% ITC",
        warranty: "25 yr panel · 25 yr inv",
        installTime: "14–21 days",
      },
      {
        slug: "premium-9kw",
        name: "Premium 9 kW",
        sub: "Larger home · ~$340 bill",
        panels: "REC Alpha Pure-R bifacial",
        inverter: "Enphase IQ8 + monitoring",
        price: "$17,640",
        strike: "$25,200",
        featured: true,
        badge: "Most chosen",
        warranty: "25 yr panel · 25 yr inv",
        installTime: "14–21 days",
      },
      {
        slug: "hybrid-12kw-battery",
        name: "Hybrid 12 kW + Battery",
        sub: "PSPS-proof · NEM 3.0 optimized",
        panels: "REC / Q.CELLS bifacial",
        inverter: "Tesla Powerwall 3 (13.5 kWh)",
        price: "$33,600",
        strike: "$48,000",
        featured: false,
        badge: "Outage ready",
        warranty: "25 yr panel · 10 yr battery",
        installTime: "21–28 days",
      },
    ],

    caseStudies: [
      {
        slug: "morales-family-la-7kw",
        title: "The Morales family cut their bill from $380 to $14",
        subtitle: "7 kW residential install, Highland Park, Los Angeles",
        customer: "Morales family",
        district: "los-angeles",
        systemKw: 7,
        beforeBill: 380,
        afterBill: 14,
        installDate: "February 2026",
        category: "Residential",
        body: "The Morales family in Highland Park had been complaining about their summer LADWP bill for years. After the 7 kW install, the very first bill came in at $18 — and steadied around $14 across the year. Federal tax credit of $5,880 applied to their 2026 return. Payback projected at 5.4 years.",
      },
      {
        slug: "chen-residence-sd-6kw",
        title: "The Chen residence — quoted in writing, delivered as quoted",
        subtitle: "6 kW residential install, Carmel Valley, San Diego",
        customer: "Chen residence",
        district: "san-diego",
        systemKw: 6,
        beforeBill: 320,
        afterBill: 22,
        installDate: "March 2026",
        category: "Residential",
        body: "Two installers had floated vague \"site adders\" they'd reveal later. Golden State Solar gave one written number with the ITC modeled in. Installed in 17 days end-to-end. Chen's monthly bill dropped from $320 to under $25.",
      },
      {
        slug: "ramirez-farm-fresno-15kw",
        title: "The Ramirez farm runs its pumps free of charge",
        subtitle: "15 kW agricultural system, Selma, Fresno County",
        customer: "Ramirez Family Farms",
        district: "fresno",
        systemKw: 15,
        beforeBill: 940,
        afterBill: 0,
        installDate: "November 2025",
        category: "Farm",
        body: "We migrated the Ramirez farm from the PG&E AG-A1 tariff to a 15 kW solar + grid hybrid. The drip-irrigation pumps now run entirely on solar through the daylight hours. Annual savings $11,200, paid back in under 4 years.",
      },
    ],

    posts: [
      {
        slug: "federal-itc-walkthrough",
        image: "/images/blog/federal-itc-walkthrough.jpg",
        title: "The Federal Solar Tax Credit, walked through end-to-end",
        excerpt:
          "Every line of IRS Form 5695, every supporting document — what we file on your behalf for the 30% Residential Clean Energy Credit.",
        date: "2026-01-12",
        author: "Golden State Solar",
        body: `## What is the Federal Solar Tax Credit?

The Residential Clean Energy Credit (IRC §25D) is a 30% dollar-for-dollar federal tax credit on the installed cost of a residential rooftop solar system. It's available for systems placed in service from 2022 through 2032.

## How the credit ladder works

- 2022 – 2032: 30% of installed cost
- 2033: 26%
- 2034: 22%
- 2035: 0% (sunset)

We hand you the IRS Form 5695 worksheet at commissioning so your CPA can drop the credit directly into your federal return.

## What's covered

- Solar panels and microinverters
- Mounting and racking hardware
- Permitting and inspection fees
- Battery storage (if 3 kWh+)
- Sales tax on the equipment

## Common mistakes that delay the credit

1. Filing the credit on the wrong tax year (use the year *placed in service*, not the year ordered).
2. Forgetting to subtract any utility rebates from the basis.
3. Skipping Form 5695 entirely and trying to claim on Schedule 3.

We pre-empt all three for our customers.`,
      },
      {
        slug: "california-marine-layer-solar",
        image: "/images/blog/california-marine-layer-solar.jpg",
        title: "Does solar work through California's marine layer?",
        excerpt:
          "What four years of generation data tell us about coastal-fog performance for SoCal and Bay Area rooftops.",
        date: "2026-02-04",
        author: "Golden State Solar",
        body: `## The short answer: yes.

Coastal California gets ~80–100 marine-layer days a year. Even on those days, panels generate 35–60% of their clear-day output thanks to diffuse light. Our customer fleet averages a 9% June-gloom dip vs the April peak — and a full recovery by August.

## How we design for fog

- REC Alpha Pure-R bifacial panels in our Premium tier — they pick up reflected light off wet rooftops, partially offsetting the cloud loss.
- IP67-rated microinverters that handle salt-air corrosion.
- 10° tilt mounts that shed marine moisture and reduce coastal dust.

## A real number

Across our installed fleet, average annual generation is **97.1%** of the design estimate — meaning the marine layer barely moves the lifetime payback math.`,
      },
      {
        slug: "nem-3-economics",
        image: "/images/blog/nem-3-economics.jpg",
        title: "NEM 3.0 changed the math — and battery economics",
        excerpt:
          "California's NEM 3.0 cut export rates ~75%. Here's why batteries went from optional to default for new installs.",
        date: "2026-03-18",
        author: "Golden State Solar",
        body: `## Net Billing replaced Net Metering in April 2023

Under NEM 2.0, you got retail credit for every kWh you sent to the grid. Under NEM 3.0 ("Net Billing Tariff"), exports earn a much lower avoided-cost rate that varies by hour.

## What that means

A homeowner with **no battery** under NEM 3.0 sees ~60% of the savings they would have under NEM 2.0.

A homeowner with **a battery** captures most of the lost savings — by shifting daytime production into the 4–9pm peak window when buy-back rates are highest.

## Two design fixes

**Hybrid inverter from day one.** Even if you don't buy the battery now, ratify the inverter — adding storage later is then a one-day job.

**Slightly larger array.** ~15% over your daily kWh need keeps the battery topped off through cloudy days.`,
      },
      {
        slug: "ca-tariff-trajectory",
        image: "/images/blog/ca-tariff-trajectory.jpg",
        title: "California IOU rates keep climbing — here's the math",
        excerpt:
          "PG&E rates have risen ~9% a year. SCE and SDG&E are close behind. What that means for your 25-year payback.",
        date: "2026-04-02",
        author: "Golden State Solar",
        body: `## A boring-sounding number that compounds

PG&E's average residential rate has trended up roughly 9% per year over the last five years. That doesn't sound like much — until you compound it across 25 years.

A $300 monthly bill today, at 9% inflation, is **$2,580 a month** in year 25.

A solar customer's bill stays close to zero — meaning the gap between "without solar" and "with solar" widens every single year.

## The takeaway

The longer you wait, the more lifetime savings you forfeit. The math is unforgiving — especially with the ITC stepping down after 2032.`,
      },
      {
        slug: "powerwall-vs-franklin",
        image: "/images/blog/powerwall-vs-franklin.jpg",
        title: "Powerwall 3 vs FranklinWH: which battery is right for you",
        excerpt:
          "Both work great. The decision turns on warranty, EV-charger handling, and panel-current — not just kWh on the spec sheet.",
        date: "2026-04-21",
        author: "Golden State Solar",
        body: `## Two excellent batteries

We install Tesla Powerwall 3 and FranklinWH aPower 2 — both top-tier hybrid systems with 10+ year warranties.

## Where they differ

- **Whole-home backup:** Both can do it. Powerwall needs a Gateway 3; FranklinWH builds the panel-current handling in.
- **EV charger integration:** FranklinWH integrates more cleanly with Level 2 chargers.
- **Stackability:** FranklinWH stacks in 13.6 kWh blocks; Powerwall in 13.5 kWh.
- **App experience:** Tesla's app is polished; FranklinWH's catches up daily.

## How we decide

We look at your panel size, EV plans, and outage history. Then we recommend.`,
      },
      // ============================================================
      // Long-form pillar posts — added May 2026.
      // Each runs ~1,800 words with inline :::widget blocks.
      // ============================================================
      {
        slug: "california-solar-cost-2026",
        image: "/images/blog/california-solar-cost-2026.jpg",
        title: "California Solar Cost in 2026: Real Numbers, Not Marketing",
        excerpt:
          "What rooftop solar actually costs in California this year — system sizes, post-ITC prices, payback periods, and the line items installers hide on their first quote.",
        date: "2026-03-04",
        author: "Golden State Solar",
        category: "Cost & Pricing",
        keywords: [
          "california solar cost 2026",
          "solar panel cost california",
          "rooftop solar price",
          "solar installation cost",
          "ITC california",
          "solar payback period",
          "cost per watt solar",
          "residential solar pricing",
        ],
        featured: true,
        updated: "2026-05-12",
        body: `Solar pricing in California is one of the most opaque corners of the home-improvement industry. Two installers will quote the same roof for $14,000 and $26,000 and both will swear the other one is "cutting corners". They're usually both wrong — there's a real number, and it's narrower than the spread suggests.

This post strips the math down to what we actually see on signed contracts across PG&E, SCE, SDG&E, SMUD and LADWP territory in 2026. No teaser pricing. No "site adders revealed at install".

## The honest baseline: $2.80 per watt installed

Across our 2026 installs, the all-in turnkey cost of a residential rooftop system sits between **$2.65 and $3.10 per watt** before the federal tax credit. The mid-point — $2.80 — is what we use for early estimates.

That number includes Tier-1 panels (REC, Q.CELLS, Panasonic, Silfab), Enphase IQ8 microinverters, mounting hardware, conduit and disconnects, the permit and inspection fees, the utility interconnection application, and labour for a two-day install crew with a licensed electrician.

:::callout type=tip title="Quick rule"
A useful back-of-envelope: take your average monthly bill, multiply by 0.025, and you'll be within $1,500 of your actual system price after the federal tax credit.
:::

## What 6 kW, 9 kW and 12 kW actually run

The three system sizes that cover ~85% of California rooftops are 6 kW (compact 3-bed home), 9 kW (4-bed with AC and one EV), and 12 kW (5-bed, two EVs, or a battery-paired NEM 3.0 build).

:::table caption="2026 California rooftop pricing — turnkey, by system size"
System size | Sticker price | After 30% ITC | Monthly payment (15-yr loan)
6 kW (small home) | $16,800 | $11,760 | $112
7 kW (popular) | $19,600 | $13,720 | $130
9 kW (large home) | $25,200 | $17,640 | $168
12 kW + 13.5 kWh battery | $48,000 | $33,600 | $319
:::

Loan payments assume a 15-year solar loan at 7.99% APR — what Mosaic, Sunlight Financial and GoodLeap have been writing in 2026.

## Why two installers quote the same roof so differently

Three things drive the spread:

**Panel tier.** Tier-2 modules (the unbranded sheets from factories you've never heard of) cost the installer $0.18/W; Tier-1 panels (REC, Q.CELLS) cost $0.34/W. On a 9 kW system that's a $1,440 swing — but Tier-2 modules degrade faster and rarely outlive their inverter, so the up-front "savings" evaporate by year 12.

**Microinverters vs string inverters.** Enphase IQ8 microinverters add ~$0.18/W vs a SolarEdge string-plus-optimisers setup. They're worth it for any roof with shade, multiple azimuths, or future battery plans (the NEM 3.0 export math demands per-panel optimisation).

**Labour and roof complexity.** Tile roofs add ~$1,200. Two-storey installs add ~$600. Old electrical panels needing an upgrade add anywhere from $1,500 to $4,500.

## What the line items actually are

A clean California residential quote breaks down roughly like this for a 9 kW system at $19,600:

- Panels: $5,800
- Microinverters: $2,700
- Mounting + racking: $1,400
- Electrical (BoS, conduit, disconnects, MPU if needed): $1,700
- Permits + plan check + city inspection: $1,200
- Utility interconnection (PG&E/SCE/SDG&E NEM 3.0): $450
- Labour (2 crews × 2 days + electrician): $3,200
- Sales/design/overhead: $2,400
- Profit margin (8–12%): $750

:::compare title="Sticker vs actual out-of-pocket after the federal tax credit"
before | Quote price (turnkey) | 25200 | $
after  | Net cost after 30% ITC | 17640 | $
:::

## Payback math under NEM 3.0

California's switch to NEM 3.0 ("Net Billing Tariff") in April 2023 changed the payback math but didn't break it. Under NEM 2.0 you got retail credit for every exported kWh; under NEM 3.0 exports pay an "Avoided Cost Calculator" rate that varies hour-by-hour and averages about 25% of retail.

For a 9 kW system at $17,640 net cost on a $340/month PG&E bill:

:::stats
4.8  | yrs | Simple payback (no battery)
5.4  | yrs | NEM 3.0 payback (no battery)
4.1  | yrs | NEM 3.0 payback (with 13.5 kWh battery)
138 | k$ | Lifetime savings (25 yrs, 9% rate inflation)
:::

The battery shortens payback because it shifts your daytime production into the 4–9 PM peak window when buy-back rates are highest — which is precisely what NEM 3.0 is designed to reward.

## What's *not* included in a real quote

Watch for these omissions on installer A's "cheaper" quote that suddenly appear on your final invoice:

- **Main Panel Upgrade (MPU).** A 100 A panel with a 9 kW system needs to be upgraded to 200 A. Cost: $2,800–$4,200. Either the original quote covers it or you'll be holding the cheque.
- **Roof reinforcement.** A 2008-or-older roof on a south-facing slope may need decking or rafter reinforcement. $600–$1,800.
- **Removal and re-install.** If your roof is within 5 years of needing replacement, get the roof done first or pay $2,200 to detach-and-reset at year 10.
- **HOA architectural fees.** A real cost in master-planned OC and Inland Empire communities. $150–$450.
- **EV charger pre-wire.** If you'll add a Level 2 charger in the next 3 years, run conduit now. $400 vs. $1,800 later.

:::callout type=savings title="Hidden saving"
The 30% federal credit applies to **every line item** above except the sales-tax portion. So that $4,200 panel upgrade actually nets out to $2,940 after the ITC.
:::

## Financing: cash, loan, lease, PPA

We see four financing patterns in 2026:

1. **Cash (28% of customers).** Best lifetime return — payback in 4–6 years, no interest paid.
2. **Solar loan (54%).** 15- or 25-year tenure, 6.99–9.99% APR depending on credit. Monthly payment is engineered to be lower than your bill savings from day one.
3. **Lease (11%).** No money down. Installer owns the panels; you pay them a monthly fee. You lose the ITC (the leasing company keeps it). Lifetime savings ~40% of a cash purchase.
4. **PPA — Power Purchase Agreement (7%).** You buy the electricity from the panels on your roof at a discounted rate. Similar economics to a lease.

For most customers we recommend cash if it's available or a loan if it isn't. Lease and PPA make sense if you can't claim the ITC (no federal tax liability) or if you're planning to sell within 3 years.

:::cta href="/calculator" label="Run my numbers"
See the real price for *your* roof and bill in 60 seconds. Includes ITC, financing options, and a 25-year payback chart.
:::

## What changed in 2026 vs 2025

Three things moved this year:

- **Panel prices dropped ~8%.** Excess Tier-1 supply from oversold 2024 orders worked through the channel.
- **Labour rose ~4%.** CSLB-licensed electricians in California are in short supply post-IRA build-out.
- **Battery prices are flat.** Powerwall 3 and FranklinWH aPower 2 stayed at $11,000–$13,500 installed.

Net effect on a 9 kW system: about $400 cheaper than last spring.

## The bottom line

Expect to pay around **$2.80 per watt** installed, drop 30% off with the ITC, finance the rest at ~$120–$170/month if you're not paying cash, and recover the investment in 4–6 years. Anything dramatically below $2.30/W means Tier-2 panels, a string inverter, or a contract with "to-be-determined" line items. Anything above $3.30/W means you're paying for a national-brand sales operation, not better hardware.

:::faq
Q: Does the price include the federal tax credit?
A: Quotes are shown as sticker price (pre-credit) and net price (post-credit). The credit is applied on your federal tax return, not at point of sale — so you pay the full amount up front and recover 30% the following April.

Q: Are there any California state incentives left?
A: Most state-level rebates (CSI, SGIP for batteries) have either sunset or are reserved for low-income/equity tracks. The 30% federal ITC is the main incentive for standard residential installs in 2026.

Q: How long is the quote good for?
A: We hold quotes for 30 days. Panel and inverter prices move with the supply chain, so a 90-day-old quote is unreliable in either direction.

Q: Can I negotiate the price?
A: There's about 4–6% of margin in any honest residential quote. Beyond that, you're losing line items.
:::

We publish actual installed prices for every California ZIP code we serve. Ask for the comparable-installs report when you book a site survey — we'll send you anonymised quotes from your neighbourhood the same day.`,
      },
      {
        slug: "nem-3-explained",
        image: "/images/blog/nem-3-explained.jpg",
        title: "NEM 3.0 Explained: What California's Net Billing Actually Means",
        excerpt:
          "NEM 3.0 cut California export rates by ~75% and made batteries the default. Here's what the rule actually says and how to design around it.",
        date: "2026-03-12",
        author: "Golden State Solar",
        category: "Policy & Incentives",
        keywords: [
          "NEM 3.0 explained",
          "california net billing tariff",
          "NEM 3.0 vs NEM 2.0",
          "net metering california",
          "avoided cost calculator",
          "solar export rates california",
          "PG&E NEM 3.0",
          "solar battery NEM 3",
        ],
        featured: true,
        body: `On April 15, 2023, the California Public Utilities Commission (CPUC) replaced Net Energy Metering 2.0 with the Net Billing Tariff — popularly called "NEM 3.0". Three years later, the misinformation about what changed is still everywhere. This is what the rule actually says and how it changes the economics of a residential rooftop install.

## What changed in one paragraph

Under NEM 2.0, every kWh you exported to the grid earned a credit at your retail electricity rate (about $0.40 in PG&E territory). Under NEM 3.0, exports earn a much lower **Avoided Cost Calculator (ACC)** rate that varies by hour, day, season and utility — and averages roughly $0.08/kWh across the year. That's about 80% less, in plain numbers.

The catch nobody mentions: **the rate you pay to import power didn't change**. So a customer who consumes everything they produce in real time pays the same tariff as before; the change only affects exports.

:::compare title="What a typical exported kWh now earns"
before | NEM 2.0 export credit | 40 | ¢
after  | NEM 3.0 export credit | 8  | ¢
:::

## Why CPUC did this

The official rationale is the **cost shift**: NEM 2.0 paid solar customers retail rates while the utility's marginal cost to deliver power was much lower. The remaining non-solar ratepayers — disproportionately renters and lower-income households — were subsidising solar adopters through their distribution charges.

Whether the cost shift was real and how much is genuinely contested. What's not contested is that CPUC sided with the IOUs and pushed the new rule through.

## Who NEM 3.0 affects

NEM 3.0 applies to any **new** interconnection application submitted on or after April 15, 2023 in PG&E, SCE or SDG&E territory. If you applied before that date and were interconnected within 180 days, you're locked into NEM 2.0 for 20 years from your PTO date.

NEM 3.0 does **not** apply to publicly-owned utilities (SMUD, LADWP, Imperial Irrigation District). Those run their own net-metering programs with different — typically more generous — terms.

## The ACC rate, demystified

The Avoided Cost Calculator is a CPUC-published table of marginal-cost values for every hour of every month. It's based on what the utility would otherwise have paid to procure that kWh from the wholesale market plus a small adder for transmission and capacity.

In practice, the rates split into three regimes:

:::table caption="ACC export rates by period — PG&E residential, 2026"
Period | Window | Avg export rate
Summer peak | June–Sep, 4–9 PM | $0.32 – $0.48/kWh
Summer mid | June–Sep, 9 AM – 4 PM | $0.04 – $0.07/kWh
Winter | Oct–May, all hours | $0.05 – $0.09/kWh
:::

You can see the design intent: shift production from midday to evening, when the grid is stressed and gas peakers are firing. The way you do that as a homeowner is to add a battery and a smart energy manager that holds back exports until 4 PM.

:::callout type=warn title="Common misconception"
"NEM 3.0 makes solar worth half as much." False. It makes *exports* worth less. Your own consumption — the kWh you use the moment they're produced — still avoids the full retail tariff. For a typical home that's still 40–60% of total production.
:::

## The four-quadrant design that wins under NEM 3.0

Across the 1,800+ NEM 3.0 systems we've designed, the ones with the best payback all share four properties:

**1. Slightly oversized array (~15%).** You want enough mid-day production to fully charge the battery on cloudy days.

**2. Battery sized to your 4–9 PM load.** Typical California home uses 8–14 kWh in peak hours. A 13.5 kWh Powerwall or a 13.6 kWh FranklinWH covers it.

**3. Hybrid inverter, day one.** Even if you skip the battery now, the inverter makes adding storage later a one-day job instead of a forklift upgrade.

**4. Time-of-Use rate plan.** The right TOU schedule (PG&E EV2-A, SCE TOU-D-PRIME, SDG&E EV-TOU-5) makes the peak window worth 3× more.

:::stats
75 | %   | Avg export rate cut vs NEM 2.0
40 | %   | Self-consumption rate (no battery)
85 | %   | Self-consumption rate (with battery)
4.1 | yrs | Payback w/ battery, 9 kW + 13.5 kWh, $340 bill
:::

## A worked example

Sarah lives in Carmel Valley (San Diego, SDG&E). Pre-solar bill: $310/month, mostly summer AC and an EV.

Without a battery: a 7 kW NEM 3.0 system saves ~$3,150/year (vs. ~$3,500 under NEM 2.0). Payback 5.6 years.

With a 13.5 kWh battery added at install: same 7 kW array saves ~$3,400/year. Payback drops to 4.4 years, even though the battery added $11,500 to the system cost (because the battery captured the export gap).

The battery doesn't "pay for itself" as a standalone item. It pays for itself as the piece of hardware that recovers what NEM 3.0 took.

## What if you already have NEM 2.0?

You stay on NEM 2.0 for 20 years from your PTO date. That's the deal CPUC struck. If you're considering adding panels to a NEM 2.0 system, the rules permit a one-time 10% capacity increase without losing the grandfathered status — and that's typically the best move.

Don't upgrade by more than 10% unless you genuinely want to migrate to NEM 3.0 (almost no one does).

## The honest take

NEM 3.0 made California solar marginally less of a no-brainer than it was under NEM 2.0. But "marginally less of a no-brainer" still means a 4–5 year payback in most of the state, with 25-year savings of $80,000–$150,000 on a typical residential install. The math just demands a battery now where it didn't before.

:::cta href="/calculator" label="Model NEM 3.0 for my bill"
We've baked the current ACC rate schedule into our calculator. Plug in your usage and see the with-battery vs without-battery split for your exact ZIP.
:::

:::faq
Q: Does NEM 3.0 kill the case for residential solar?
A: No. It reduces export value to about 25% of retail but doesn't change the import side. Combined with the 30% federal ITC and California's high retail rates, payback under NEM 3.0 is still 4–6 years for a battery-paired system.

Q: How long do exports stay at the locked ACC rate?
A: 9 years from your PTO date. After that, exports move to the prevailing ACC. The 9-year lock is one of the things CPUC added to soften the transition.

Q: Can I skip the battery and still have a worthwhile system?
A: Yes, but payback stretches to 6–8 years. The right call is to install a hybrid inverter now and add storage in year 2 or 3 once you've used the SGIP equity rebate.

Q: What about commercial and agricultural customers?
A: Commercial customers got a parallel new tariff (Net Billing Tariff-C) with similar mechanics. Agriculture customers in PG&E AG-A1/AG-A2 are still on a modified version that's closer to old NEM 2.0.

Q: I'm in LADWP territory — does NEM 3.0 apply to me?
A: No. LADWP runs its own net-metering program separate from CPUC. SMUD, BWP, Glendale Water & Power, and Imperial Irrigation District are also outside NEM 3.0.
:::

If you're shopping for solar in California in 2026 and an installer hands you a quote without mentioning a battery or a hybrid inverter, get a second opinion. They're either still designing for NEM 2.0 or hoping you don't notice.`,
      },
      {
        slug: "federal-solar-tax-credit-itc-2026",
        image: "/images/blog/federal-solar-tax-credit-itc-2026.jpg",
        title: "The 30% Federal Solar Tax Credit (ITC) in 2026: Step-by-Step",
        excerpt:
          "How the federal Residential Clean Energy Credit actually works — what's covered, what's not, how to claim it on IRS Form 5695, and the rookie mistakes that delay it a year.",
        date: "2026-03-22",
        author: "Golden State Solar",
        category: "Policy & Incentives",
        keywords: [
          "federal solar tax credit 2026",
          "ITC 30 percent",
          "IRS Form 5695",
          "residential clean energy credit",
          "section 25D",
          "solar tax credit how to claim",
          "ITC eligible costs",
          "solar federal incentive",
        ],
        featured: true,
        body: `The Residential Clean Energy Credit (IRC §25D) — what most people call "the ITC" — is the single biggest financial incentive for residential solar in the United States. It's a 30% dollar-for-dollar tax credit on the installed cost of a qualifying system, and it's been the workhorse of the post-IRA rooftop boom.

It's also one of the most misunderstood pieces of the federal tax code. Below is the entire process, with the actual line numbers, the actual eligible costs, and the four mistakes we see customers' CPAs make every spring.

## What it is

A *tax credit* — not a deduction, not a rebate. Every $1 of credit reduces your federal income tax liability by $1. It's claimed on **IRS Form 5695, Residential Energy Credits**, and flows to **Schedule 3, line 5a** of your Form 1040.

:::stats
30 | %    | Of installed cost, federal
9000 | $  | Typical credit (30 kW system)
2032 | yr | Last full-rate year
:::

## How long the 30% stays at 30%

The Inflation Reduction Act (Aug 2022) reset the ITC ladder to 30% from 2022 through 2032, then a step-down begins:

:::table caption="ITC step-down schedule under the IRA"
Year placed in service | Credit rate
2022 – 2032 | 30%
2033 | 26%
2034 | 22%
2035 onward | 0% (sunset)
:::

"Placed in service" means the system is **operational** — which in practice means you have Permission to Operate (PTO) from the utility. The system being on your roof but not yet PTO'd does *not* count. This is the single most common deferral we see: customers who install in December and don't get PTO until January claim the credit a year early and the IRS adjusts the return.

## What costs qualify

The IRS guidance is broad. Eligible costs include:

- Solar PV panels
- Inverters (string, micro, or hybrid)
- Battery storage (3 kWh capacity or larger)
- Mounting hardware, racking, conduit, BoS
- Labour costs for on-site preparation, assembly, installation
- Permitting fees, inspection fees, plan-check fees
- Sales tax on the eligible equipment
- Wiring, breakers, and panel upgrades **directly required by the solar install**

Costs that **do not** qualify:

- Roof repair or replacement (unless it's structurally required for the solar install — narrow exception)
- Tree removal
- Extended warranties or service contracts
- Financing costs (loan origination fees, interest)
- A *general* electrical service upgrade that would have been needed anyway

:::callout type=tip title="The MPU question"
Main Panel Upgrades are eligible only if the upgrade is *required by* the solar install. A 100 A panel that needs to become 200 A specifically to handle a new PV breaker → qualifies. A 100 A panel you wanted to upgrade anyway for future EV charging → does not.
:::

## Who can claim it

The 30% ITC is claimable by:

- **The homeowner** of a primary or secondary residence in the US
- **A taxpayer** (you must have federal tax liability — the credit is non-refundable but does roll forward)
- **Cash buyers and solar-loan buyers** (you own the system)

**Cannot claim it:**

- Lessees of leased solar systems (the leasing company claims the credit)
- PPA customers (the PPA provider claims it)
- Landlords for systems on rental properties (those go through the commercial ITC instead)

If your tax liability is smaller than the credit in year one, the unused portion carries forward — currently up to 22 years.

## Step-by-step: claiming on Form 5695

Here's what filing actually looks like. Numbers are for a hypothetical $24,000 installed cost.

:::steps
1. Gather your invoice + PTO letter | The dated PTO from your utility proves the year placed in service. The invoice itemises eligible costs.
2. Open IRS Form 5695 | The current revision is on irs.gov — make sure it matches your tax year, not the prior year's form.
3. Part I, Line 1 — qualified solar PV property | Enter the total eligible cost. In our example: $24,000.
4. Line 2 onward — battery, geothermal, fuel cell | Fill in zero unless you also added any of those.
5. Line 6a sums it up | $24,000.
6. Line 6b multiplies by 30% | $7,200.
7. Line 13 — tax liability limit | Pull the limit from the worksheet (your liability before this credit).
8. Line 14 — smaller of credit or limit | The amount you actually claim this year.
9. Line 16 — carry-forward | Any excess rolls to next year.
10. Flow to Schedule 3 → Form 1040 | Line 5a of Schedule 3 picks up the Form 5695 credit and reduces your bottom-line tax.
:::

## The four mistakes we see every April

**1. Wrong tax year.** Claiming the credit for the year ordered or contracted instead of the year placed in service (PTO date). Your installer should hand you a one-page memo confirming the PTO date — keep it with your invoice.

**2. Forgetting the basis adjustment.** If you received any utility rebate or state rebate, that amount reduces the basis on which the 30% is calculated. CA-SGIP for batteries is the usual culprit.

**3. Skipping Form 5695 entirely.** Some CPAs new to clean-energy credits try to claim it directly on Schedule 3 without filing Form 5695. The IRS rejects the credit.

**4. Including non-eligible costs.** Tree removal, structural roof replacement, and extended warranties are common candidates. Be conservative; the IRS audits clean-energy credits at about 3× the rate of other credits.

:::checklist
PTO letter from your utility (or commissioning certificate)
Itemised invoice from installer
IRS Form 5695 — current tax year
Tax-liability worksheet (Schedule 3 instructions)
Basis adjustment for any state/utility rebates received
Final 1040 with credit flowing through Schedule 3 line 5a
:::

## What if my tax liability is small?

The credit is non-refundable but rolls forward. If your liability is $2,400 and your credit is $7,200, you take $2,400 this year and $4,800 next year. The credit does not expire until you've used it all, capped at 22 years post-purchase.

The roll-forward rule is why retirees with low-but-steady tax liability still benefit fully — they just spread the credit over 3–4 years.

## Stacking with state and utility programs

The 30% federal ITC stacks with:

- **California SGIP** (Self-Generation Incentive Program) for batteries — equity tier only, $850/kWh
- **DAC-SASH / SASH** for low-income whole-system rebates
- **Local-utility rebates** (rare in 2026, but SMUD and Anaheim Utilities still have small ones)

It does *not* stack with the **commercial ITC** (§48E). If a system is used for both personal and business purposes (think rural property with a workshop), you split the cost and claim each portion under the appropriate credit.

:::callout type=savings title="Worth knowing"
Adding a battery in a separate year *after* the panels also qualifies for its own 30% credit on the battery cost — as long as the battery is 3 kWh+ and placed in service in or after 2023.
:::

## The bottom line

The 30% ITC is one of the most generous and easy-to-claim federal tax credits in the code. As long as you have the PTO letter, the itemised invoice, and a tax liability that can absorb the credit (this year or carried forward), the paperwork is honestly straightforward.

We hand every customer a one-page "ITC worksheet" at commissioning with:

- The eligible-cost total (already netted of any rebates)
- The PTO date in writing
- The relevant Form 5695 line numbers pre-filled

Your CPA copies the numbers into Form 5695, the credit flows to Schedule 3, and your refund grows by exactly 30% of the eligible cost.

:::cta href="/contact" label="Get the ITC worksheet template"
We send a downloadable version to anyone who books a survey — even if you go with another installer. The math works the same.
:::

:::faq
Q: Does the 30% apply to a solar lease or PPA?
A: No. The leasing company / PPA provider claims the credit on the equipment they own. Your savings come from the discounted electricity rate they charge you instead.

Q: Can I claim the ITC for solar on a second home?
A: Yes, if it's a personal residence (not a rental). Vacation homes qualify. Pure rental properties go through the commercial ITC.

Q: What if I move before claiming the full credit?
A: The credit follows you, not the house. You can continue to carry forward unused credit on subsequent returns.

Q: Does battery storage qualify if I add it later?
A: Yes — any battery 3 kWh or larger installed in 2023 or later qualifies for its own 30% credit, even on an existing solar system or as a standalone battery.

Q: How does the credit interact with the 2032 step-down?
A: The credit rate is locked at the rate in effect when your system is *placed in service* (PTO date). A system PTO'd December 31, 2032 gets 30%; one PTO'd January 1, 2033 gets 26%.

Q: What documentation does the IRS expect if I'm audited?
A: The PTO letter, the itemised invoice, and proof of payment. Keep all three for 7 years.
:::`,
      },
      {
        slug: "how-much-solar-do-i-need",
        image: "/images/blog/how-much-solar-do-i-need.jpg",
        title: "How Much Solar Do You Need? A California Sizing Guide",
        excerpt:
          "Sizing your solar system from your past 12 months of bills — with worked examples for a 3-bed PG&E home, a 5-bed SCE home with two EVs, and an SDG&E split-level near the coast.",
        date: "2026-04-01",
        author: "Golden State Solar",
        category: "Design & Sizing",
        keywords: [
          "how much solar do i need",
          "solar system size california",
          "calculate solar size from bill",
          "kw of solar per home",
          "EV solar sizing",
          "right size solar system",
          "solar offset percentage",
          "PG&E solar size",
        ],
        body: `"How big should my solar system be?" is the single most common question we get on a first site visit. The honest answer is: "exactly big enough that your post-solar bill stays near zero across a full year, with room for the next EV." Translating that into kilowatts requires four numbers from your existing bills and one judgement call about the future.

## The four numbers you need

Pull your last twelve PG&E/SCE/SDG&E bills. Or log into your utility's portal and download the CSV. You're looking for:

1. **Annual kWh consumption** (sum of all twelve months)
2. **Peak-month kWh** (usually July or August in inland California; January in coastal homes with electric heat)
3. **Average monthly bill** (annual cost ÷ 12)
4. **Time-of-use plan** (or flat tier if you're still on one)

## The formula

The basic sizing math is:

System size (kW) = (Annual kWh ÷ 365) ÷ Sun hours per day

For California, "sun hours per day" averages 5.4 across the state — but it varies from 4.9 in foggy SF to 6.2 in Fresno and 6.1 in Bakersfield.

:::stats
4.9 | hr  | SF Bay daily sun (foggy belt)
5.4 | hr  | California average
6.2 | hr  | Central Valley (Fresno, Bakersfield)
:::

For a home using 9,855 kWh/year (the California residential median) at 5.4 sun hours:

System size = (9,855 ÷ 365) ÷ 5.4 = **5.0 kW**

That's the "100% offset" size — enough to match annual production to annual consumption. Most customers should size somewhat *larger* than this. Here's why.

## Why we size at 110–120% of annual usage

Three factors push us above the 100% line:

**1. Panel degradation.** Tier-1 modules lose about 0.45%/year of output. By year 25 you're at 89% of nameplate. Build in headroom.

**2. EV adoption.** The average California household will add an EV within the next 5 years (CARB target). Each EV adds 2,400–4,200 kWh/year depending on commute.

**3. Future electrification.** Heat pumps, induction stoves, heat-pump water heaters — California is electrifying everything, and each upgrade adds 1,500–3,500 kWh/year.

A 5 kW system "right-sized" for today's usage becomes a 70%-offset system in 5 years. Better to install 6 kW now.

## Three worked examples

### Example 1: Pasadena 3-bed, no EV

- Annual usage: 7,200 kWh
- Peak month: 980 kWh (July, AC running)
- Bill: $260/month (SCE TOU-D-4-9PM)
- Sun hours: 5.5 (LA basin)

Baseline: (7,200 ÷ 365) ÷ 5.5 = 3.6 kW (100% offset)
Right-sized: 4.5 – 5 kW (125% — leaves room for one EV)

Recommended: **5 kW** with 14 modules at 360W each.

### Example 2: Riverside 5-bed, two EVs

- Annual usage: 14,800 kWh (includes both EVs)
- Peak month: 1,920 kWh (August)
- Bill: $480/month (SCE TOU-D-PRIME)
- Sun hours: 5.9

Baseline: (14,800 ÷ 365) ÷ 5.9 = 6.9 kW (100% offset)
Right-sized: 8.5 – 9 kW (some buffer + the third future EV)

Recommended: **9 kW** with 25 modules + 13.5 kWh battery for NEM 3.0.

### Example 3: Encinitas coastal split-level, heat pump

- Annual usage: 6,400 kWh (no EV, electric heat pump)
- Peak month: 920 kWh (December, heat pump on)
- Bill: $290/month (SDG&E EV-TOU-5)
- Sun hours: 5.4 (mild marine layer)

Baseline: (6,400 ÷ 365) ÷ 5.4 = 3.2 kW (100% offset)
Right-sized: 4 – 4.5 kW (heat pump load is winter-skewed, when sun is lower)

Recommended: **4 kW** with a 13.5 kWh battery to time-shift the December heat-pump load.

:::compare title="Right-sized vs. exactly-100% — the 25-year cost"
before | Sized exactly to today's usage | 89400 | $
after  | Right-sized (110-120% buffer) | 124800 | $
:::

(Lifetime savings, 9 kW vs 7.5 kW, $340 PG&E bill, 25-year horizon.)

## When NOT to oversize

There are two cases where staying at or below 100% offset is smart:

**1. Roof constrained.** If you only have 350 sqft of clear roof, you can't fit 9 kW. Take whatever fits.

**2. NEM 3.0 export math.** Oversizing past your home's daytime consumption means you're exporting more kWh at the low ACC rate. If you don't have a battery, anything past ~110% of consumption pays back slowly.

:::callout type=warn title="The PG&E annual true-up trap"
PG&E settles your NEM 3.0 account once a year on your "true-up" date. If you generated more than you consumed, the excess pays out at the average ACC rate — which is roughly 20% of retail. Oversize without a battery and you'll feel this on your true-up bill.
:::

## The future-EV question

The single biggest sizing mistake we see is "we're not planning an EV, size for today's usage". California's Advanced Clean Cars II rule requires 100% ZEV new-car sales by 2035, and used-EV prices are cratering. Most non-EV households today will own an EV in 3–5 years.

Add 2,400 kWh/year for a single-car commuter, 4,200 kWh for two cars, and you'll thank yourself when the EV arrives and the panels already handle it.

:::cta href="/calculator" label="Size my system from my bill"
Plug in your annual kWh and ZIP code. We model the right-sized system, the panel layout, and the NEM 3.0 economics in 60 seconds.
:::

## Roof-space sanity check

A practical constraint that overrides the math: how much clear, south-or-west-facing roof do you actually have?

:::table caption="Roof-area requirements by system size"
System size | Modules (400W each) | Roof area required
4 kW | 10 | ~280 sqft
6 kW | 15 | ~430 sqft
9 kW | 23 | ~640 sqft
12 kW | 30 | ~860 sqft
:::

Bifacial 410W modules shrink this further. If you have a complex roof with multiple azimuths, microinverters (Enphase IQ8) let you mix orientations without losing performance.

:::faq
Q: Should I size to current usage or future usage?
A: Future. Solar's lifetime is 25 years; your usage in 5–10 years will be 30–60% higher because of EVs and electrification. The marginal cost of an extra kW at install is roughly $2,400; retrofitting later is $4,200+.

Q: What's the smallest system worth installing?
A: 4 kW. Below that, the fixed costs (permit, interconnection, design, labour for the install crew) dominate the per-kW cost and stretch payback past 8 years.

Q: Should I size to peak month or average?
A: Annual average. Solar smooths over the year — high-sun months overproduce, low-sun months under, and NEM lets you bank credits.

Q: My utility is SMUD/LADWP — do these numbers still apply?
A: The math is the same, but the export-rate economics differ. SMUD pays much closer to retail; LADWP has a flat $0.075/kWh export rate. Both make smaller systems more attractive than IOU territory.
:::

The sizing question really only has one right answer: pull twelve months of bills, run the formula, add a 15% buffer for the future, and don't go bigger than your roof can fit. Everything else is sales fluff.`,
      },
      {
        slug: "solar-battery-worth-it-california",
        image: "/images/blog/solar-battery-worth-it-california.jpg",
        title: "Solar + Battery in California: Worth It Under NEM 3.0?",
        excerpt:
          "A battery adds $10–13K but recovers most of the NEM 3.0 export-rate cut. Here's the actual math for adding storage to a California rooftop system in 2026.",
        date: "2026-04-08",
        author: "Golden State Solar",
        category: "Battery & Storage",
        keywords: [
          "solar battery worth it california",
          "powerwall worth it",
          "battery payback solar",
          "NEM 3 battery economics",
          "solar storage california",
          "tesla powerwall california",
          "FranklinWH worth it",
          "battery payback period",
        ],
        featured: true,
        body: `When NEM 2.0 was the default, batteries were a luxury — you paid $12,000 for slightly more grid resilience and a marginal NPV improvement. Under NEM 3.0, the same battery now closes a real revenue gap. The economics flipped in a 12-month window, and most installers were slow to update their pitch.

This post walks through the actual 2026 math for adding a 13.5 kWh battery (Powerwall 3 or FranklinWH aPower 2) to a California rooftop solar install. Numbers come from our own install fleet, not vendor marketing.

## The premise: NEM 3.0 created a price gap

Under NEM 3.0, every kWh you export earns the ACC rate — about $0.08/kWh on average. Every kWh you import from the grid still costs you the retail rate — about $0.42/kWh in PG&E territory and $0.36–$0.48 elsewhere.

That **$0.34 spread per kWh** is the financial engine of the battery payback. The job of the battery is to convert kWh you would have exported (for $0.08) into kWh you avoid importing later (saving $0.42).

:::compare title="The kWh value gap under NEM 3.0"
before | Exported kWh (NEM 3.0 ACC) | 8 | ¢
after  | Self-consumed kWh (retail offset) | 42 | ¢
:::

## The honest numbers

A 13.5 kWh battery (Powerwall 3 installed, including Gateway 3 and electrical work) runs **$11,500 – $13,500** in California in 2026. The 30% federal ITC applies to the entire battery cost, so the net is **$8,050 – $9,450**.

For a typical California home with a 9 kW PV system and a $320 PG&E bill:

:::stats
4200 | kWh/yr | Pre-battery exports (lost to low ACC)
3300 | kWh/yr | Post-battery exports (kept for offset)
1380 | $/yr  | Annual savings from battery only
6.1  | yrs   | Battery-only payback
:::

The battery doesn't pay back on its own as a financial product. It pays back as the piece of hardware that **recovers NEM 3.0 losses** — which means the relevant comparison is "system with battery" vs "system without battery" and the gap is much smaller than the battery's $9k net cost suggests.

## When the battery is clearly worth it

Three customer profiles where we recommend a battery every time:

**1. PG&E or SCE customer on NEM 3.0.** The export-rate gap is too big to ignore.

**2. PSPS-exposed neighbourhoods.** If you've experienced public-safety power shutoffs (most of NorCal and the foothill belt), the battery doubles as keep-the-fridge-running insurance worth $400–$800 per outage in avoided spoilage.

**3. Time-of-Use customer with evening peak usage.** EV charging + AC + cooking + dishwasher all in the 4–9 PM window is the worst case for grid-import cost. The battery turns that into 100% off-peak production.

## When the battery is borderline

Two cases where you should think twice:

**1. SMUD or LADWP customer.** These public utilities aren't on NEM 3.0 and pay near-retail for exports. The export-rate gap that justifies a battery doesn't exist here. Buy a battery for backup if you want it, but the financial case is thin.

**2. Daytime-heavy households.** If you're home all day (retirees, WFH) and run AC + appliances mostly at noon, you're already self-consuming most of your production. The battery adds resilience but doesn't add much revenue.

:::callout type=tip title="Quick test"
If your average evening (4–9 PM) electricity usage is over 5 kWh and you're on NEM 3.0, the battery payback is under 7 years. Below 3 kWh, payback stretches past 9 years.
:::

## Powerwall 3 vs FranklinWH aPower 2 vs Enphase IQ Battery

The three batteries we install most often. All three are LFP chemistry, 10+ year warranty, 13–13.6 kWh usable.

:::table caption="Battery comparison — installed in California, 2026"
Spec | Powerwall 3 | FranklinWH aPower 2 | Enphase IQ Battery 10C
Usable capacity | 13.5 kWh | 13.6 kWh | 10.08 kWh
Continuous power | 11.5 kW | 10 kW | 7.6 kW
Surge | 30 kW | 13 kW | 10.6 kW
Warranty | 10 yr, 70% retention | 12 yr, 70% retention | 15 yr (with monitoring)
Installed cost | $13,200 | $12,400 | $9,800 (per unit)
Whole-home backup | Needs Gateway 3 | Built-in panel automation | Single-circuit only without Sub-Panel
:::

The right pick depends on your goals:

- **Whole-home backup + AC + EV charging during outages:** Powerwall 3 (highest surge handling).
- **Whole-home backup with simpler installation:** FranklinWH (panel automation is built in).
- **Selective backup + flexible scaling later:** Enphase IQ Battery (smaller units, scale as needed).

## What the battery does *not* do

A 13.5 kWh battery is not the same as a generator. It will run your fridge and your essentials overnight, but it won't power a 4 kW AC unit for 8 hours during a heat dome. Expect 4–8 hours of essential-load backup, depending on what you're running.

If your goal is full-home backup through a 24-hour outage, you need 27+ kWh of storage — i.e., two batteries.

## NEM 3.0 plus SGIP equity battery rebate

The California Self-Generation Incentive Program (SGIP) still has an **equity tier** that pays roughly $850/kWh for battery installs in disadvantaged communities (DAC ZIP codes) or for households on CARE/FERA. That's $11,475 on a 13.5 kWh battery — enough to make the battery essentially free.

The general-market SGIP tier ran out of funds in 2023 and has not been refilled. Equity is the only path in 2026.

:::cta href="/calculator" label="See my battery payback"
Our calculator runs the NEM 3.0 + battery math for your specific bill, ZIP, and TOU plan. SGIP eligibility is auto-checked.
:::

## Future-proofing: install the inverter even if you skip the battery

If you can't justify a battery today (cost, or roof-only retrofit), still install a **hybrid inverter** at the time of the panel install. The Enphase IQ8H or the Tesla Solar Inverter make adding storage later a one-day job: connect to the existing DC bus, no permit re-pull, no microinverter swap.

The marginal cost of a hybrid inverter over a non-hybrid is about $400. Retrofitting later costs $1,800–$3,200. Pay $400 now or pay 5×.

:::callout type=savings title="The 2-year add-on play"
We see ~30% of our solar-only customers come back inside 24 months to add a battery once their first true-up bill arrives. Installing the hybrid inverter up front means the add-on cost is half what it would have been.
:::

## The bottom line

Under NEM 3.0, a battery is the difference between a 4–5 year payback and a 6–7 year one. It's not the *biggest* lever — that's still the panels themselves — but it's the lever that closes the post-NEM-3.0 revenue gap.

If you're on an IOU (PG&E, SCE, SDG&E) and getting a quote in 2026, ask for both numbers — solar-only and solar+battery — modelled side by side. Any installer who can't produce both is either underequipped to design under NEM 3.0 or hoping you don't notice.

:::faq
Q: Will the battery pay for itself just from electricity savings?
A: Not as a standalone product, but yes as part of a NEM 3.0 system. The battery's job is to recover the value NEM 3.0 took from exports. Net payback (system with battery vs without) is typically 4–7 years for the incremental battery cost.

Q: How many cycles does the battery last?
A: Powerwall 3 and FranklinWH are warrantied for unlimited cycles within a 10–12 year window at 70% retained capacity. Real-world cycle count: about 365 a year if you cycle daily, ~4,000 over the warranty period — well inside spec.

Q: Can I add a battery to an existing solar system?
A: Yes. If you have a string inverter, you'll add an AC-coupled battery (slightly less efficient but works fine). If you already have a hybrid inverter, the battery DC-couples directly. Cost difference: ~$1,200.

Q: What's the difference between LFP and NMC batteries?
A: LFP (Lithium Iron Phosphate) is what Powerwall 3, FranklinWH and most modern home batteries use. It's safer (no thermal runaway), lasts longer, and is now cheaper than NMC. NMC batteries (LG RESU, older Powerwall 2) are still in service but no longer the default for new installs.

Q: What happens to the battery in a fire or earthquake?
A: LFP batteries are non-flammable under normal abuse — they vent rather than ignite. Mounting is interior-wall or exterior-shaded; both meet CRC and CFC code. Worst case in an earthquake is the battery shifts and the wall mount holds (we use seismic brackets standard).
:::

The short answer: yes, for almost everyone on a California IOU. The long answer is on your quote — and it should be easy to see, line by line.`,
      },
      {
        slug: "pge-vs-sce-vs-sdge-solar",
        image: "/images/blog/pge-vs-sce-vs-sdge-solar.jpg",
        title: "PG&E vs. SCE vs. SDG&E: Which CA Utility Pays Solar Best",
        excerpt:
          "Same panel, same roof, different utility — the export rates, interconnection timelines, and true-up rules vary more than most installers admit. Here's the side-by-side.",
        date: "2026-04-15",
        author: "Golden State Solar",
        category: "Utilities & Interconnection",
        keywords: [
          "PG&E vs SCE vs SDGE solar",
          "best utility for solar california",
          "california IOU solar comparison",
          "PG&E NEM 3.0",
          "SCE solar export",
          "SDGE net billing",
          "interconnection california",
          "utility tariff solar",
        ],
        body: `If you live in California, you almost certainly take electricity from one of three investor-owned utilities: Pacific Gas & Electric (north, central coast, Sierra foothills), Southern California Edison (LA basin minus LADWP, Inland Empire, southern Central Valley), or San Diego Gas & Electric (San Diego County, southern Orange County). Plus a smaller cohort served by SMUD (Sacramento), LADWP (Los Angeles city), and Imperial Irrigation District.

All three IOUs are on NEM 3.0. All three settle exports against the same Avoided Cost Calculator. And yet the practical solar economics differ enough that the same 9 kW system can pay back in 4.1 years in San Diego or 5.4 years in Modesto.

Below is the actual side-by-side from our 2026 installs.

## The retail tariff: what you're saving on every imported kWh

The "retail rate" — the cost of grid electricity you'd otherwise pay — is the most underappreciated variable. It's literally the savings side of solar.

:::table caption="Residential TOU rate ranges — 2026"
Utility | Off-peak | Peak | Avg blended
PG&E (E-TOU-C) | $0.34 | $0.51 | $0.42
SCE (TOU-D-PRIME) | $0.31 | $0.62 | $0.38
SDG&E (EV-TOU-5) | $0.29 | $0.65 | $0.36
SMUD (R-TOD) | $0.13 | $0.30 | $0.18
LADWP (R-1A) | $0.18 | $0.28 | $0.22
:::

SDG&E has the highest peak rate in California. SCE has the second highest. PG&E has the smoothest blend. SMUD and LADWP are dramatically lower than the IOUs.

The implication: **the higher your retail rate, the faster solar pays back**. SDG&E customers see the fastest payback in the state — usually 3.8–4.4 years.

## Export rates: who's the most generous

All three IOUs export at the ACC rate, which is the same baseline calculator. But peak-hour ACC values diverge a bit because each utility's marginal cost profile is slightly different.

:::stats
0.42 | $/kWh | SDG&E peak ACC (summer 4-9PM)
0.38 | $/kWh | SCE peak ACC
0.34 | $/kWh | PG&E peak ACC
0.06 | $/kWh | All three midday ACC
:::

For a customer with a battery that shifts production into the 4–9 PM window, SDG&E is the most generous. For a customer without a battery exporting all day, all three are roughly equal.

## Interconnection: who's fastest

Once your install is mechanically complete, the utility needs to inspect the meter, swap to a bidirectional meter (or activate the existing one), and grant Permission to Operate. This is the step that frustrates customers because the installer's done but the system is dark.

:::compare title="Average PTO turnaround after final inspection — 2026"
before | PG&E (PTO turnaround) | 28 | days
after  | SDG&E (PTO turnaround) | 6  | days
:::

SDG&E's portal is the best of the three. SCE has improved dramatically since 2023 (5–10 days now, was 30+). PG&E remains the slowest, partly because of staffing constraints in the post-wildfire era.

## True-up: when the bill resets

All three IOUs run an annual "true-up" — a once-a-year reconciliation of your generation and consumption. If you generated more than you consumed, the excess pays out at the lower NSC (Net Surplus Compensation) rate. If you consumed more, you settle up.

The true-up date matters more than people realise. It locks in:

- The 9-year ACC rate
- The annual reconciliation point
- Whether your "excess production" months can offset your "deficit production" months

We typically target a true-up date that lands in **April or May** — that maximises the offset window because the months immediately preceding (low-sun winter) get fully banked against the months immediately following (high-sun summer).

:::callout type=tip title="Tip: pick your true-up"
You can request a true-up date when your NEM 3.0 application is filed. Most installers leave it as the install month default. Asking for May vs. November can be worth $400+ annually on a typical residential system.
:::

## The "non-bypassable charges" trap

A piece of fine print most installers skip: even when you've offset 100% of your usage, you still pay roughly **$0.045–$0.055/kWh in non-bypassable charges** on every imported kWh. These cover wildfire mitigation, public-purpose programs and nuclear decommissioning.

For a customer who imports 4,000 kWh/year (typical with a battery), that's $180–$220/year that solar can't touch. It's not a deal-breaker — it just means "$0 bill" almost never happens. You'll see $8–$18 per month even with perfect offset.

## The CARE / FERA rate question

California's CARE program (low-income discount, ~33% off retail rate) interacts with solar in a way that surprises customers. The CARE discount applies to your **net imports**, not your gross consumption. If you offset 80% of your usage with solar, you get the CARE discount on 20% of your usage — much smaller dollars.

This isn't a reason not to install solar on CARE — the savings are still substantial. But the per-kWh savings rate is lower because the baseline is already discounted.

## What about SMUD, LADWP, IID, Glendale Water & Power?

Public-power customers are outside CPUC and therefore outside NEM 3.0. Each runs its own program:

- **SMUD (Sacramento)** — Net Energy Metering Successor Tariff. Exports paid at $0.077/kWh year-round. No time variation. Simple, predictable.
- **LADWP (LA city)** — Solar Incentive Program (SIP) plus net metering. Exports paid at $0.075/kWh flat.
- **IID (Imperial Valley)** — Net metering 1.0-style program. Exports paid at retail rate. Best NEM terms in California.
- **Glendale, Burbank, Pasadena, Anaheim Utilities** — varies; mostly modest export rates, low retail rates. The math is tighter than IOU territory but works for customers with above-average usage.

:::callout type=savings title="If you're in IID territory"
Imperial Irrigation District still pays full retail for solar exports. It's effectively NEM 2.0 economics — payback periods of 3–4 years are common. Same hardware as anywhere else in California, much better math.
:::

## Putting it together: who wins what

:::table caption="2026 California rooftop solar payback by utility (9 kW system)"
Utility | Avg payback | Battery recommended | True-up flexibility
PG&E | 4.6 yrs | Strongly | Yes
SCE | 4.4 yrs | Strongly | Yes
SDG&E | 3.9 yrs | Strongly | Yes
SMUD | 5.8 yrs | Optional | Limited
LADWP | 6.4 yrs | Optional | Limited
IID | 3.5 yrs | Optional | Yes
:::

Note the inversion: IOUs (worst export rates) actually have the fastest payback because their retail rates are so much higher. Public utilities have slower payback because their retail rates are lower — there's less to save.

This is the single most counter-intuitive fact about California solar economics, and the one most installers don't explain clearly.

:::cta href="/calculator" label="Run my utility's math"
Our calculator pulls your utility's current TOU schedule and ACC rate. Drop in your bill and ZIP, see the with-battery and without-battery numbers side by side.
:::

:::faq
Q: My utility hasn't moved my account to NEM 3.0 yet — does that mean I'm grandfathered?
A: Almost certainly not. NEM 3.0 applies based on your interconnection application date, not your account creation date. If you applied for solar interconnection after April 14, 2023 you're on NEM 3.0.

Q: Can I switch utilities to get better solar economics?
A: Only if you move. The IOUs are geographic monopolies. CCA (Community Choice Aggregation) lets you change the generation portion of your bill (PCE, MCE, etc.) but the delivery and net-metering rules remain with the IOU.

Q: Does CCA enrollment affect my NEM 3.0 credit?
A: No. NEM credits apply to delivery and generation charges set by the IOU; CCAs handle generation only. Your solar exports still settle against the IOU's published ACC rates.

Q: What's the actual cheapest electricity rate in California?
A: Imperial Irrigation District averages $0.13/kWh. SMUD averages $0.18. The IOUs average $0.36–$0.42.
:::

The right framing isn't "which utility is best for solar?" — it's "given my utility, how do I size and finance the system to maximise savings?" PG&E customers will pay slightly more per panel and wait longer for PTO, but they save more dollars per kWh once it's running. SMUD customers will install faster and cheaper but save less. The hardware on the roof is identical.`,
      },
      {
        slug: "how-long-do-solar-panels-last",
        image: "/images/blog/how-long-do-solar-panels-last.jpg",
        title: "How Long Do Solar Panels Last? Degradation & 25-Year ROI",
        excerpt:
          "Tier-1 panels degrade about 0.45% a year, inverters last 12-15, and the system you install in 2026 will outproduce your retirement. The real numbers from the IEC fleet data.",
        date: "2026-04-25",
        author: "Golden State Solar",
        category: "Hardware & Longevity",
        keywords: [
          "how long do solar panels last",
          "solar panel degradation",
          "25 year solar warranty",
          "solar lifespan",
          "panel performance over time",
          "inverter lifespan",
          "tier 1 panel longevity",
          "solar ROI 25 years",
        ],
        body: `The marketing line is "25-year warranty". The reality is more nuanced — and, for Tier-1 panels, considerably better than 25 years. This post walks through what actually happens to solar hardware over time, what fails, what doesn't, and what the lifetime ROI math looks like when you account for it honestly.

## The 25-year warranty isn't an end-date

Almost every Tier-1 manufacturer (REC, Q.CELLS, Panasonic, Silfab, LG before exit, SunPower before bankruptcy) warrants their panels for 25 years at typically **85–87% retained output**. That's not "after 25 years the panel dies" — it's "after 25 years the panel will still be making at least 85% of its rated power."

In the real world, panels run well past the warranty window. IEC's degradation studies show median real-world performance of:

:::stats
99.5 | %    | Year 1 (after light-induced degradation)
97.7 | %    | Year 5
93.2 | %    | Year 15
89.0 | %    | Year 25 (warranty endpoint)
84.6 | %    | Year 35 (post-warranty)
:::

A panel installed in 2026 will still be making 85% of its rated power in 2061. The cells themselves don't fail; the encapsulant slowly yellows, micro-cracks develop, and the AR coating wears.

## The 0.45%/year number

Modern monocrystalline panels lose about **0.45% of output per year** on average. The decay is roughly linear after the first-year "light-induced degradation" drop of 1–2%.

Tier-2 panels (the unbranded modules from factories you've never heard of) degrade at 0.7–1.1%/year — fast enough that by year 20 you're at 78–82% instead of 91%. Over a 25-year horizon, the difference is roughly $14,000 in lost production on a 9 kW system.

:::compare title="25-yr cumulative production gap — Tier-1 vs Tier-2"
before | Tier-2 panel (1.0%/yr deg) | 220000 | kWh
after  | Tier-1 panel (0.45%/yr deg) | 247000 | kWh
:::

That's why the up-front $0.16/W premium for Tier-1 panels is the easiest line item in any solar quote to defend.

## What actually fails on a 20-year-old system

We service systems from 2007–2015 installed by other companies. Here's what we replace:

**Frequent (within 25 years):**
- **Inverters**: string inverters last 12–15 years; microinverters last 20–25. Plan to replace the inverter once during the panel's lifetime.
- **DC isolators / disconnects**: 15–20 years; corrosion-driven.
- **Mounting hardware**: stainless steel fasteners can corrode in coastal salt air; we re-torque at year 10 and replace anything pitted.

**Rare (uncommon in 25 years):**
- **Panels themselves**: ~1.5% lifetime failure rate (broken glass, junction-box failure, hotspot defects)
- **Wire / conduit**: virtually never, if installed correctly
- **Combiner boxes**: occasional water ingress in old systems

**Practically never:**
- **Cells**: the silicon wafer is the most durable component. We've never seen a Tier-1 cell wear out.

## The inverter timeline

If you install in 2026:

:::table caption="Expected hardware-replacement timeline"
Year | Component | Notes
2026 | Initial install | Tier-1 panels, IQ8 microinverters, BoS
2036 | First check | Re-torque mounts, inspect DC system, clean
2046 | Microinverter EoL approaches | 25-yr warranty ending; consider replacement
2051 | Panel warranty ends | Panels still at ~89% output, keep them
2061 | System still active | Panels at ~85% nameplate, inverter on its second life
:::

If you went with a string inverter (cheaper up front but shorter-lived), expect to replace it in 2038–2040 at a cost of $2,800–$3,800 for a residential unit. If you went with Enphase microinverters, the warranty matches the panels (25 years) — and Enphase has historically honored failures with same-day replacement units.

## Manufacturer warranty nuances

There are two warranties on every panel:

**1. Product (workmanship) warranty.** Covers physical defects in the module — broken glass, delamination, junction-box failure. Usually 15–25 years.

**2. Performance (linear power output) warranty.** Covers the guaranteed output curve. Usually 25–30 years.

The product warranty is the one that pays for replacement panels if something fails. The performance warranty is rarely invoked because real-world degradation is well inside the guaranteed line.

:::callout type=tip title="Read the fine print"
Some "25-year warranty" panels include "labour" only for the first 5–10 years. After that, the manufacturer covers the panel but not the cost of getting on your roof to swap it. Tier-1 brands (REC, Q.CELLS, Panasonic) include labour for the full warranty term.
:::

## The 25-year ROI, honestly

Let's run the numbers for a 9 kW system installed in 2026 at $17,640 net cost (after ITC), with a $340/month PG&E starting bill on NEM 3.0 + battery.

:::stats
17640 | $   | Net upfront cost
4280  | $   | Year-1 savings
0.45  | %   | Annual panel degradation
8     | %   | Assumed annual retail rate inflation
138400 | $  | 25-year cumulative savings
8.8   | x   | Lifetime ROI on net cost
:::

Even with degradation accounted for, the rate-inflation tailwind dominates. Every $1 of solar production is worth more next year than this year, because the alternative — buying that kWh from PG&E — keeps getting more expensive.

If we run a more pessimistic scenario (3% inflation instead of 8%, 0.7% degradation instead of 0.45%), 25-year cumulative savings still come in at $88,000. Even in the worst plausible case, the system pays back 5× the net upfront cost.

:::compare title="25-year savings, optimistic vs conservative"
before | Conservative case (3% inflation, faster degradation) | 88000 | $
after  | Base case (8% inflation, Tier-1 degradation) | 138400 | $
:::

## What this means for sizing decisions today

Two practical implications:

**Build for 30 years, not 10.** The panels you install in 2026 will be making power in 2056. Don't undersize for current usage; size for the lifetime of the system.

**Pay for Tier-1.** The $1,500 premium for Tier-1 panels on a 9 kW system saves $14,000+ in degraded production over 25 years and avoids out-of-warranty hardware replacement.

**Inverter choice matters.** Microinverters cost more up-front but match the panel warranty. String inverters save $1,200 today and cost $3,000 in year 14.

:::callout type=warn title="The "panel cleaning" myth"
A frequent up-sell from servicing companies is annual panel cleaning. In California, modern Tier-1 panels with anti-soiling coatings recover most rain-soiled output naturally. We measure ~2-3% gain from one cleaning per year, which costs $250+. Skip the subscription; let the rain do it.
:::

:::cta href="/contact" label="Get our 25-yr maintenance plan"
We service every system we install for 25 years — annual production reports, included monitoring, two on-site inspections at year 5 and year 15. No subscription fees.
:::

:::faq
Q: What's the difference between Tier-1 and Tier-2 panels?
A: Tier-1 is a Bloomberg NEF designation for panel manufacturers with consistent quality, financial stability, and 5+ years of operating history. REC, Q.CELLS, Panasonic, Silfab, Trina, JA Solar all qualify. Tier-2 is everything else — usually OEM-built modules from smaller factories with shorter operating history.

Q: Do panels work less well in heat?
A: Yes, marginally. Cell efficiency drops about 0.4%/°C above 25°C. A 45°C cell (mid-summer LA roof) produces about 8% less than a 25°C cell. Modern Tier-1 panels have lower temperature coefficients (-0.30%/°C) than older modules.

Q: Will my panels still be compatible with future hardware?
A: Yes. The PV module ecosystem is highly standardized (MC4 connectors, IEC 61215 certification, 30–60 V DC output range). Panels installed in 2026 will work with any inverter or microinverter sold in 2050.

Q: What happens if my installer goes out of business?
A: Manufacturer warranties (panels, inverter) stay valid — they're with the manufacturer, not the installer. The installer's workmanship warranty does evaporate. Service can be picked up by any licensed solar contractor.

Q: How often should I clean the panels?
A: Twice a year in dusty areas (Bakersfield, Fresno, agricultural Central Valley). Once a year or less elsewhere. In coastal CA, the rain does most of the work. Don't pay for monthly cleaning subscriptions; the gain is tiny.

Q: Does hail damage panels?
A: Tier-1 panels are tested to handle 25mm hail at 80 km/h. Cosmetic damage is rare; functional damage is very rare. Standard homeowner's insurance covers any rooftop hail damage to PV.
:::

The panel you put on your roof in 2026 will outproduce your career. Plan accordingly.`,
      },
      {
        slug: "california-solar-permits-timeline",
        image: "/images/blog/california-solar-permits-timeline.jpg",
        title: "California Solar Permits: City-by-City Timelines",
        excerpt:
          "Permit delays are the single biggest reason installs take 21 days instead of 12. Here's the actual paperwork timeline across the 20 largest California cities.",
        date: "2026-05-02",
        author: "Golden State Solar",
        category: "Process & Permits",
        keywords: [
          "california solar permit timeline",
          "solar permit days",
          "los angeles solar permit",
          "san diego solar permit",
          "PG&E interconnection time",
          "SB 379 solar streamline",
          "automated solar permit",
          "solar plan check",
        ],
        body: `If you ask a customer who installed solar what took the longest, they'll say "permitting". They're right. The actual install is 2 days; the paperwork around it is 15–25. This post is the practical city-by-city breakdown of how long permits actually take in California — and what state law SB 379 was supposed to fix.

## The paperwork pipeline, end to end

A residential solar install in California has six distinct paperwork milestones:

:::steps
1. Customer signs contract | Design done, system sized, financing in motion.
2. Plans drawn + structural review | 2-5 days; engineer-stamped if roof is non-standard.
3. City permit filed | Through a portal (most cities) or paper (some smaller cities).
4. City permit issued | Days to weeks depending on city — see table below.
5. Utility interconnection application | Filed in parallel with city permit.
6. Install + city inspection + utility PTO | Sequential after permit issuance.
:::

The city permit is the slowest step and the one most installers underestimate when quoting "install time."

## What SB 379 changed

California Senate Bill 379 (Wiener, 2022) requires every city with population ≥5,000 to offer **online, automated, same-day approval** of residential solar permits for systems under 30 kW. The deadline was September 30, 2023.

Most large cities met the deadline. Many small cities did not. Even among large cities, the "automated" portals vary from genuinely instant to "you submit online but a human still reviews."

## The 2026 city-by-city numbers

These are our actual measured timelines from 2025-2026 installs. "Permit days" is from submission to issuance; "Inspection days" is from install completion to city inspection sign-off.

:::table caption="Permit + inspection timelines, top 20 California cities (2026)"
City | Permit days | Inspection days | SB 379 status
Los Angeles | 5–10 | 3–5 | Compliant (LADBS portal)
San Diego | 1–3 | 2–4 | Compliant (City portal)
San Jose | 1–3 | 2–4 | Compliant (Symbium)
San Francisco | 7–14 | 5–8 | Compliant (slow review)
Fresno | 5–10 | 3–6 | Compliant
Sacramento | 1–3 | 2–4 | Compliant (Symbium)
Long Beach | 3–7 | 3–5 | Compliant
Oakland | 7–14 | 5–9 | Compliant (slow)
Bakersfield | 1–3 | 2–4 | Compliant
Anaheim | 1–3 | 3–5 | Compliant
Santa Ana | 5–10 | 3–6 | Mixed
Riverside | 3–7 | 3–5 | Compliant
Stockton | 5–10 | 4–7 | Compliant
Irvine | 1–3 | 2–4 | Compliant (very fast)
Chula Vista | 3–7 | 3–5 | Compliant
Fremont | 1–3 | 2–4 | Compliant (Symbium)
San Bernardino | 7–14 | 4–7 | Mixed
Modesto | 5–10 | 4–7 | Compliant
Oxnard | 7–14 | 5–8 | Mixed
Fontana | 5–10 | 3–6 | Compliant
:::

The fastest cities (San Jose, Sacramento, Fremont, Bakersfield, Anaheim, Irvine, San Diego) use the **Symbium SolarAPP+** portal or a similar instant-issuance system. You upload the stamped plans, the system runs a code-compliance check, and the permit issues within 24 hours.

The slowest cities (San Francisco, Oakland, Oxnard) have automated portals but still route everything through a human plan checker, who reviews on a 7–14 day backlog.

## Why San Francisco and Oakland are slow

Both cities adopted SolarAPP+ but added local amendments that re-introduce human review. SF specifically requires structural review for any roof over 30 years old (a meaningful chunk of housing stock); Oakland reviews mounting on tile roofs in addition to the SolarAPP+ check.

There's no good workaround for this. Plan for the extra 2 weeks.

## Why HOAs are the wildcard

Solar Rights Act (CA Civil Code §714) requires HOAs to allow solar — but it permits them to set "reasonable" architectural standards on placement and visibility. HOAs can take 30–60 days to approve a design.

We work around this in two ways:

1. **Submit HOA approval in parallel with city permits** — not sequentially.
2. **Provide HOA-friendly design options** up front: black-frame all-black modules, micro-conduit, no exposed wiring on visible roof slopes.

If your HOA is one of the strict ones (looking at you, Irvine master-planned communities), the install timeline is gated by HOA approval, not city permit.

:::callout type=tip title="Heads-up if you're in an HOA"
Provide your HOA architectural-committee contact at the time of contract signing. We email the submission package the same day. Most California HOAs respond inside 21 days; those that don't are usually triggered by the 60-day default-approval rule of Civil Code §714.

:::

## The utility interconnection step

In parallel with the city permit, your installer files an interconnection application with your IOU. Timing varies by utility:

:::stats
6  | days | SDG&E avg interconnection turn
10 | days | SCE avg
14 | days | PG&E avg (post-2024 staffing)
:::

The interconnection application can be filed before the city permit issues. We submit both within 48 hours of contract signing.

## The post-install bottleneck: PTO

After the install is mechanically complete and the city inspector signs off, the utility issues Permission to Operate (PTO). This is the step that locks in your NEM 3.0 effective date — and the one where customer frustration peaks.

Average PTO turnarounds in 2026:

- **SDG&E:** 6 days
- **SCE:** 10 days
- **PG&E:** 18-28 days
- **SMUD:** 3-5 days
- **LADWP:** 10-14 days

PG&E PTO times grew during 2023-2024 because of post-wildfire staffing reallocation. They've recovered partially but are still the slowest of the IOUs.

:::compare title="Total project timeline: from contract to PTO"
before | Worst case (SF + PG&E + HOA) | 56 | days
after  | Best case (San Jose + SDG&E) | 14 | days
:::

## What you can do to accelerate

Five practical steps that genuinely move things faster:

1. **Choose an installer with a clean permit history in your city.** First-time submitters routinely get sent back for minor formatting issues. Repeat submitters know the local quirks.

2. **Pre-arrange the inspection slot.** As soon as the permit issues, request the inspection date — even if it's a few days out from the actual install completion.

3. **HOA approval in parallel.** Submit the day you sign the contract, not after the city permit issues.

4. **Have your utility account ready.** PTO requires your account number; have it handy.

5. **Don't switch utilities/CCAs during the install.** A pending CCA enrollment can stall PTO by 2-3 weeks.

:::checklist
Utility account number provided to installer
HOA architectural committee contact provided
Roof age (yes/no over 30 years) noted at signing
City building permit account access verified
Final TOU rate plan selected (default isn't usually best)
PTO date confirmed in writing once issued
:::

## What's typical vs. fast vs. slow

For a 9 kW residential install in a "compliant SB 379" city with a normal IOU:

- **Fast (San Jose / SDG&E / no HOA):** 12-16 days total
- **Typical (most California cities):** 18-25 days
- **Slow (SF or Oakland or PG&E backlog):** 35-50 days

We quote a 21-day window because it's representative. If your install runs into a HOA delay or a PG&E PTO backlog, that's where the variance shows up.

:::cta href="/contact" label="Get your city's exact timeline"
Tell us your city and utility — we'll send you the expected day-by-day schedule and the worst-case fallbacks for your area.
:::

:::faq
Q: Can I install solar without a permit?
A: No. Unpermitted solar is a building-code violation, invalidates your homeowner's insurance, can be flagged at sale, and risks utility disconnection. Every city requires a permit.

Q: What happens if the city rejects my plans?
A: The installer revises and resubmits. In SolarAPP+ cities the system flags issues before submission — rejection is rare. In manual-review cities, expect a 1-2 week loop if anything needs revision.

Q: Does the permit cost vary?
A: Yes. Range is $250 (Sacramento) to $1,200 (some San Francisco roofs). Most cities are $400-$700. The cost is included in our quote.

Q: My city isn't on the list above — what should I assume?
A: Small cities (under 50K population) tend to be slower than the big SB 379 cities. Plan for 10-15 day permit times and 5-8 day inspection turns.

Q: Do farm/agricultural installs follow a different process?
A: Yes. Systems over 30 kW go through county-level review (much slower) and IOU "Net Energy Metering Aggregation" (NEMA) for multi-meter farms. Typical agricultural permit timeline is 6-10 weeks.
:::

The single best thing you can do is choose an installer with hundreds of successful permits in your city. The paperwork is solvable; it's just that the solving takes someone who's seen the city's portal a dozen times.`,
      },
      {
        slug: "best-roof-orientation-for-solar",
        image: "/images/blog/best-roof-orientation-for-solar.jpg",
        title: "South-Facing, East-West, or Flat? Best CA Roof Orientations",
        excerpt:
          "South-facing is the textbook answer but east-west arrays can beat it under NEM 3.0. Here's how we pick orientation — and why three California cases break the rule.",
        date: "2026-05-09",
        author: "Golden State Solar",
        category: "Design & Sizing",
        keywords: [
          "best roof orientation solar",
          "south facing solar panels",
          "east west solar array",
          "solar roof tilt california",
          "panel orientation production",
          "flat roof solar mounting",
          "NEM 3 orientation",
          "solar azimuth",
        ],
        body: `For decades the textbook rule was "south-facing, 25° tilt, no shade." Under NEM 2.0 it was still right. Under NEM 3.0 it's still *mostly* right — but the export-rate inversion has made east-west arrays a serious contender for the first time. This post is the practical orientation guide for California rooftops in 2026.

## The fundamentals: azimuth and tilt

Two angles describe a solar panel's orientation:

- **Azimuth** — compass direction the panel faces. 0° = north, 90° = east, 180° = south, 270° = west.
- **Tilt** — angle from horizontal. 0° = flat; 90° = vertical.

For California latitudes (32°–42° N), the textbook-optimal orientation is **180° azimuth, 25–32° tilt**. That maximises annual energy yield.

But "maximises annual energy yield" was the right answer when every kWh exported earned retail credit. Under NEM 3.0, where exports earn ~$0.08 and self-consumed kWh save ~$0.42, the right answer is "matches my consumption profile" — not "produces the most kWh."

## Production by orientation: the raw numbers

For a 9 kW system in Los Angeles, here's how annual production varies by azimuth, holding tilt at 25°:

:::table caption="Annual production by panel orientation (9 kW, LA, 25° tilt)"
Azimuth | Direction | Annual kWh | % of optimal
180° | South | 14,800 | 100%
135° / 225° | SE / SW | 14,200 | 96%
90° / 270° | E / W | 13,000 | 88%
180° (flat) | South, 5° tilt | 13,600 | 92%
:::

South wins by a margin of 4-12% over the alternatives. But under NEM 3.0, the *shape* of production matters as much as the total.

## The NEM 3.0 wrinkle: peak-hour production

A south-facing array peaks at solar noon, when grid demand is moderate and export rates are at their lowest (mid-day ACC is around $0.06/kWh).

A west-facing array peaks at 2–4 PM — much closer to the 4–9 PM peak window, when ACC rates jump to $0.32-$0.48/kWh.

For a customer with no battery, the west-facing array exports fewer total kWh but at higher rates, partially closing the gap.

:::compare title="Annual revenue value of exports — south vs west (no battery)"
before | South-facing (more kWh, lower rate) | 950 | $
after  | West-facing (fewer kWh, higher rate) | 1180 | $
:::

For customers *with* a battery, this matters less — the battery time-shifts production into the peak window regardless of orientation, so south's higher total kWh wins.

## East-west: the contrarian play

A small but growing number of California installs use a deliberate east-west design on a flat roof. The setup: half the modules tilted to face east, half tilted to face west, both at 10-15°.

This produces a flat production curve from 8 AM to 6 PM rather than a sharp noon peak. Total kWh is 88% of south-facing — but self-consumption is much higher because production lines up with morning + evening usage patterns.

:::stats
88 | %    | E-W production vs south
72 | %    | Self-consumption rate (south + no battery)
89 | %    | Self-consumption rate (E-W + no battery)
:::

For an all-day-at-home household without a battery, E-W can beat south on net revenue. It's the only orientation choice where this is true under NEM 3.0.

## When orientation is forced by the roof

Most homes don't have a choice. The roof faces whatever it faces, and you work with it.

**Single-pitch roof, south-ish:** Easy decision. Lay panels along the slope, optimise tilt with mounting clamps.

**Hip roof with four orientations:** Split the array across two or three orientations. Microinverters (Enphase IQ8) handle the mixed-azimuth case without performance loss; string inverters need optimisers (SolarEdge) to do the same.

**Pure east-west gable:** Both planes get panels. Production is closer to the "E-W flat" case above.

**Flat roof:** Best flexibility. Choose between south-tilted (highest kWh), east-west (highest self-consumption), or shallow-tilt south (best aesthetics + lowest wind load).

:::callout type=tip title="Microinverters change the math"
On a single-orientation string inverter, the worst-shaded panel sets output for the whole string. On a mixed-azimuth microinverter system, every panel reports independently. We default to microinverters for any home with multiple roof planes — the production gain pays for itself in 2-3 years.
:::

## Shading: the silent killer

Shading is more consequential than orientation. A south-facing panel shaded 20% of daylight produces less than a west-facing panel in full sun.

Three sources of shade we measure on every survey:

1. **Trees.** Mature live oaks, eucalyptus, and London planes on south sides of yards. The "we'll trim them later" plan is rarely honored.
2. **Chimneys.** A 4-foot chimney casts a 12-foot shadow at 10 AM in winter. The shadow rotates and grows with sun angle.
3. **Adjacent two-storey structures.** Common in older LA / SF neighborhoods.

We use a drone scan + Solar Pathfinder + Helioscope simulation to predict annual shading loss. Anything over 12% loss on the best plane should trigger a redesign — different panels, microinverters mandatory, or skip the shaded section entirely.

:::compare title="Annual production: full sun vs. moderate shade (9 kW LA)"
before | Full sun (no shade) | 14800 | kWh
after  | 18% morning shade | 12200 | kWh
:::

## Roof slope: tilt below 5°, above 45°, and tile complications

Most California homes have a 18°-30° slope. This is within 5° of optimal for our latitudes — no need for tilt-frame mounts.

**Below 5° (effectively flat):** Add a tilt frame to get to 10-15°. Mostly for water shedding (panels self-clean better) and snow management in higher elevations.

**Above 45°:** Less common in California but does happen in older Victorian rooflines. Production is similar to optimal-tilt south — the panel "sees" almost the same sky.

**Tile roofs:** Add $1,200-$1,800 to the install cost. Tile-replacement hooks (SkyHook, QuickMount) preserve waterproofing.

**Spanish-tile roofs (heavy clay):** Sometimes require structural review — extra weight of mounting + panels. $400-$800 in engineering.

## Three California cases that break the rules

**Case 1: Pasadena 1920s bungalow, east-facing roof.**
South side is shaded by mature oaks (homeowner refuses to remove). East-facing array is 92% of south-equivalent production, perfect afternoon shade for the house. **Pick: 9 kW east-facing with microinverters, no battery.**

**Case 2: Carmel Valley split-level, two roof planes (east + west).**
Owner is retired, runs AC all afternoon. Split array gives flat morning-to-evening production curve. **Pick: 7 kW split E/W with 13.5 kWh battery, NEM 3.0.**

**Case 3: Encinitas modern flat-roof.**
Owner plans to add a deck someday. Tilt frames preserve roof for future use; south-tilted array maximises lifetime production. **Pick: 10 kW south-tilted at 18°, batteries optional.**

:::cta href="/contact" label="Get a roof orientation survey"
Our designer comes out with a drone and a Solar Pathfinder, takes 90 minutes, and produces a production estimate by orientation. Free, no obligation.
:::

:::faq
Q: Is north-facing solar ever worth it?
A: Almost never. Annual production drops to 60-70% of optimal. Worth it only on a roof where every other orientation is shaded.

Q: What if I add east-west panels later to my south array?
A: Microinverters make it easy. The new panels report independently; no inverter reconfiguration needed. With a string inverter, you'd need a second string or a second inverter.

Q: Does dual-axis tracking help on residential roofs?
A: No. Tracking adds 25-35% production but costs 4-6× more, and the moving parts complicate the warranty. Residential CA is fixed-tilt only.

Q: What's the impact of a small obstruction (vent pipe, antenna)?
A: Microinverters fully isolate the affected panel. A single vent pipe on a south-facing array typically costs <2% annual production with microinverters; up to 25% with a non-optimized string inverter.

Q: Should I install on the garage instead of the house?
A: If the garage has a clean south-facing slope and the house doesn't, yes. Garage installs are mechanically simpler (often single-storey) and meet code identically. Wire run distance can add $200-$600.

Q: Will my orientation choice affect resale value?
A: Marginally. South-facing arrays are slightly more attractive to buyers because the kWh/year number is higher. East-west arrays with batteries are increasingly recognised. Net resale impact is generally +4-6% regardless of orientation.
:::

If your roof faces south, your decision is easy: take it. If your roof doesn't, your installer's job is to make the alternative work — through panel choice, microinverters, and a thoughtful array layout. There's no roof that can't support solar profitably in California. There are only designs that ignore the roof.`,
      },
      {
        slug: "solar-lease-vs-buy-vs-loan",
        image: "/images/blog/solar-lease-vs-buy-vs-loan.jpg",
        title: "Lease vs. Buy vs. Loan: True Cost of CA Solar Financing",
        excerpt:
          "Cash, loan, lease and PPA produce wildly different 25-year outcomes. Here's the side-by-side total cost, and the customer profiles each option actually fits.",
        date: "2026-05-16",
        author: "Golden State Solar",
        category: "Financing",
        keywords: [
          "solar lease vs buy",
          "solar loan vs lease",
          "PPA solar california",
          "solar financing options",
          "best way to finance solar",
          "solar loan rates 2026",
          "solar lease cost",
          "cash vs loan solar",
        ],
        body: `Four ways to pay for residential solar in California: cash, solar loan, lease, or power-purchase agreement (PPA). They produce wildly different 25-year outcomes. The marketing for each option focuses on the "monthly payment" while glossing over the lifetime numbers. This post shows the actual lifetime cash flows side by side.

## The four options in one sentence each

**Cash** — pay the full installed cost up-front, own the system outright, claim the 30% ITC, keep 100% of the production savings.

**Solar loan** — borrow the full installed cost (usually 15–25 yr, 6.99–9.99% APR), own the system outright, claim the ITC, pay back the loan with the bill savings.

**Lease** — installer owns the panels on your roof; you pay them a flat monthly fee (typically $90–$160) for the right to use the production. Lessor keeps the ITC.

**PPA (Power Purchase Agreement)** — installer owns the panels; you buy the electricity they produce at a discounted per-kWh rate (typically $0.16–$0.22 vs. utility's $0.42 retail).

## The side-by-side math

For a 9 kW system at $25,200 sticker / $17,640 net (cash) on a $340/month PG&E bill, 25-year horizon:

:::table caption="25-year cumulative cost — by financing option"
Option | Year-1 outlay | 25-yr total paid | 25-yr utility savings | Net 25-yr benefit
Cash | $17,640 (net of ITC) | $17,640 | $138,400 | +$120,760
15-yr loan, 7.99% | $0 | $25,400 | $138,400 | +$113,000
25-yr loan, 7.99% | $0 | $32,800 | $138,400 | +$105,600
Lease ($120/mo, 2.9% escalator) | $0 | $48,200 | $87,000 | +$38,800
PPA ($0.19/kWh, 2.9% escalator) | $0 | $52,400 | $79,000 | +$26,600
:::

Three observations:

1. **Cash wins on absolute lifetime benefit** — by about $7,800 vs. a 15-yr loan, $15,200 vs. a 25-yr loan.
2. **Loans are close behind cash.** The interest paid is mostly offset by the time-value of keeping your cash invested elsewhere.
3. **Lease and PPA produce roughly one-third the lifetime benefit** of cash or loan. The leasing company captures the rest — the ITC, the depreciation, and the spread between production cost and the lease/PPA rate.

:::compare title="25-year net benefit by financing option"
before | Lease (no ITC, escalating fee) | 38800 | $
after  | Cash purchase (full ITC, no interest) | 120760 | $
:::

## Where each option actually fits

### Cash — fits if you have the capital and a reasonable tax appetite

The clear winner if you can afford it and have $5,000+ in federal tax liability to claim the ITC. Payback in year 4-5, ROI 6-8× lifetime.

Customer profile: established homeowner, 50+, paid-off mortgage, retired or near it. About 28% of our 2026 installs.

### Solar loan — fits if you don't want to deplete savings or you're early in the mortgage

The financially-sound default for most working-age homeowners. The loan is sized so the monthly payment is **less than the bill savings from day one** — meaning positive cash flow from month one.

Two loan terms dominate:

- **15-year, ~7.99% APR** — higher monthly payment, lower lifetime interest. The math winner.
- **25-year, ~7.99% APR** — lower monthly payment, much higher lifetime interest. The cash-flow winner.

We usually recommend 15-year unless the customer needs the cash flow help.

Customer profile: working professional 30-55, mortgage active, prefers monthly cash flow over up-front outlay. About 54% of our 2026 installs.

:::callout type=tip title="The ITC trick on loans"
Most solar loans are structured with two tranches: a "promotional period" (months 1-18, no payment) and an "amortising period" (months 19+, full payment). The promotional period is designed for you to apply the 30% ITC tax refund to the loan principal — bringing your monthly payment down significantly when amortisation starts. Don't skip this step.
:::

### Lease — fits if you can't claim the ITC

Lease economics are dominated by one fact: the leasing company keeps the 30% ITC, the MACRS depreciation, and any state/utility incentives. They give back ~25% of those savings to you in the form of a discounted electricity price.

If your federal tax liability is too small to use the ITC even with the carryforward, lease becomes more attractive — you're trading a credit you can't use for an immediate bill savings.

Customer profile: low-income or fixed-income homeowner, low tax liability, can't claim the ITC. About 11% of our installs.

:::callout type=warn title="Lease escalator clauses"
Most lease contracts include a **2.9% annual escalator** on the monthly fee. Over 20 years, that turns a $120/month lease into a $208/month lease. Read the contract: if the escalator is above 1.99%, you're getting a worse deal than the marketing suggests.
:::

### PPA — fits if you want zero-risk simplicity

A PPA is structurally identical to a lease but priced per-kWh instead of per-month. You pay only for production. If the system underperforms in a cloudy year, you pay less.

Most modern PPAs include a 2.9% annual rate escalator — the same trap as leases. The starting per-kWh rate is typically $0.16–$0.22 vs. PG&E's $0.42 retail, so the year-one savings are real (about 50% of your old bill). The lifetime savings are much smaller than cash or loan because the PPA provider's escalator and ownership keep most of the long-term value.

Customer profile: same as lease, plus customers who specifically want production-based pricing. About 7% of our 2026 installs.

## The "free solar" trap

You've seen the billboards: "Get solar for $0 down." It's technically true for lease, PPA and most loans. It's misleading because it hides the lifetime cost difference.

Three questions to ask any installer pitching $0 down:

1. **Is the ITC mine or yours?** If theirs, it's a lease/PPA. If yours, it's a loan.
2. **What's the escalator?** If non-zero, the offered monthly payment increases every year.
3. **What's the buyout?** Most leases offer a year-7 or year-10 buyout. Compare it to the equivalent cash purchase.

:::stats
0   | %  | Escalator on solar loans
2.9 | %  | Typical lease/PPA escalator
44  | %  | Average lease 25-yr savings vs. cash
100 | %  | ITC value retained by loan/cash buyer
:::

## What about HELOC or cash-out refinancing?

A home-equity line of credit (HELOC) at 8.5% APR is functionally equivalent to a 15-yr solar loan at the same rate. The advantage: HELOC interest is potentially tax-deductible if used for "substantial improvements" to the home (and solar qualifies). The disadvantage: HELOC rate is variable, solar-loan rate is fixed.

We recommend HELOC for customers who already have one open and a comfortable cushion. We don't recommend opening a HELOC specifically for solar — the rate-risk + closing costs offset the deductibility benefit.

## The decision tree

:::steps
1. Have $15-25K in cash + federal tax appetite? | Pay cash. Best lifetime outcome.
2. Want positive monthly cash flow without depleting savings? | 15-yr solar loan. Second-best outcome.
3. Can't claim the ITC? | Lease or PPA. Worse lifetime outcome but real near-term savings.
4. Have a HELOC already open at ≤8.5%? | Use the HELOC. Same math as a loan, plus deductibility.
5. Selling the house in <5 years? | Cash or loan. Lease assumption complicates resale.
:::

## Lease/PPA on home sale: the wrinkle nobody mentions

If you sell the house during a lease or PPA term, the buyer either has to qualify to assume the lease/PPA or you have to buy it out. About 35% of buyers in California will assume a lease cleanly; the rest renegotiate or walk. The buyout is rarely cheap — typically $14,000-$22,000 in years 5-10.

A cash or loan-financed system *increases* resale value (Zillow data shows +4-6%). A leased system is neutral-to-slight-negative on resale.

:::cta href="/calculator" label="Compare options for my numbers"
Plug your bill and ZIP. We model cash, 15-yr loan, 25-yr loan, lease and PPA — side by side, monthly cash flow, 25-yr lifetime, year-of-payback for each.
:::

:::faq
Q: Are solar-loan interest rates really 7-10%?
A: Yes, in 2026. Loan rates moved up with the broader rate environment 2022-2024 and have stabilised. The 1.99% promotional rates of 2019-2021 are gone.

Q: What's the difference between a solar loan and a personal loan?
A: A solar loan is purpose-built — typically secured against the system (UCC-1 filing), longer tenure, slightly lower rate than an unsecured personal loan. Personal loans are 12-15% APR; solar loans are 7-10%.

Q: Can I refinance a solar loan?
A: Yes, like any loan. If rates drop, refinancing into a lower-rate loan can save thousands over the remaining term.

Q: What happens to the lease if my installer goes out of business?
A: The lease is securitised — usually held by a third-party financial institution (Sunrun, Mosaic, etc.). The installer's status doesn't affect your lease. Service may shift to a successor company.

Q: Does the loan or lease show up on my credit report?
A: Loan: yes, as an installment debt. Lease/PPA: typically no — it's classified as a utility expense, not debt. (Some lease providers report; ask before signing.)

Q: How long does the ITC take to hit my bank account?
A: It's claimed on your annual tax return for the year the system was placed in service. If you typically get a refund in April, the ITC refund arrives then. If you typically owe, the ITC offsets what you owe.
:::

Solar financing is the area of the install with the widest difference in lifetime outcomes. Same hardware, same roof — the difference between cash and lease is roughly $80,000 over 25 years. Choose deliberately.`,
      },
      // ============================================================
      // 2026 research cluster — added May 2026.
      // Long-form, citation-backed pillar posts (degradation field
      // studies, Title 24, heat-pump pairing, quote decoding, EV
      // sizing, warranty mechanics, bifacial, PSPS resilience,
      // CA-vs-Germany soft costs, inverter showdown).
      // ============================================================
      {
        slug: "solar-panel-degradation-25-year-performance-data",
        image: "/images/blog/solar-panel-degradation-25-year-performance-data.jpg",
        title: "Solar Panel Degradation: What 25 Years of Real Performance Data Shows",
        excerpt:
          "NREL field data, IEC 61215 testing, and our own California install history reveal what your panels will actually produce in year 25.",
        date: "2026-04-18",
        author: "Golden State Solar",
        category: "Research & Data",
        keywords: [
          "solar panel degradation rate",
          "25 year solar performance",
          "NREL degradation study",
          "REC Alpha degradation warranty",
          "Q CELLS degradation rate",
          "LID PID solar panels",
          "IEC 61215 testing",
          "california solar panel lifespan",
          "linear vs step degradation",
          "solar panel year 25 output",
        ],
        featured: false,
        body: `Every solar quote in California promises a 25-year production curve, but very few homeowners ever see what those curves look like in the field. After installing several thousand residential systems across PG&E, SCE, and SDG&E territory, we have one advantage: we get called back. Service tickets, monitoring exports, and post-roof-replacement reinstalls give us a real picture of how panels age in California's specific climate stack — coastal salt air, Central Valley heat, and the Sierra foothill snow line.

This post pulls together what the NREL long-term field studies show, what the Tier-1 manufacturers actually warranty, and what we measure on our own fleet.

## What "degradation" actually means

A solar panel's degradation rate is the percentage of nameplate DC output it loses each year. It is not the same as system losses (inverter clipping, soiling, wiring, shading). It is the cell-level decline in the module itself.

Two patterns dominate modern residential panels:

- **Linear degradation.** A steady annual decline, typically 0.4–0.5% per year for monocrystalline PERC and 0.25–0.35% for n-type TOPCon and heterojunction (HJT).
- **Step degradation.** A larger first-year drop (1.0–2.0%) from light-induced degradation (LID), then a slower linear curve. This was the standard model for p-type panels for two decades.

The industry has shifted hard toward n-type since 2023. REC Alpha Pure-RX, Q.CELLS Q.TRON, Panasonic EverVolt HK2, and Silfab Elite are all n-type and use linear curves with much lower year-one losses.

:::stats
0.4 | %/yr | Typical PERC degradation (NREL median)
0.3 | %/yr | n-type TOPCon median degradation
87-92 | % | Year-25 output retention (Tier-1)
2.0 | % | Worst-case first-year LID (older p-type)
:::

## What the NREL field studies actually found

NREL's Photovoltaic Module Reliability program has tracked field-deployed modules since the mid-2000s. The most-cited synthesis (Jordan, Kurtz et al., updated through the 2024 review) found a median degradation rate of 0.5%/year across all crystalline silicon modules in service, with a long tail of underperformers above 1%/year — almost all of them from pre-2010 manufacturing or systems with documented installation defects.

For modules manufactured after 2015, the median tightened to about 0.4%/year. For n-type modules entering field studies after 2020, early data points to 0.25–0.35%/year, though the dataset is still young.

Three things matter for a California homeowner reading those numbers:

1. **Median is not your panel.** A specific SKU from a specific factory in a specific year can sit well above or below the median. Look at the manufacturer's published step or linear curve, not industry averages.
2. **Climate is real.** Hot-and-humid climates accelerate degradation. Hot-and-dry (most of inland California) is moderate. Marine climates (San Diego, the Peninsula, anywhere within ~5 miles of the coast) introduce a separate failure mode — potential-induced degradation (PID) from humidity penetrating the encapsulant — that the panel's PID-resistance rating matters for.
3. **Failure rate is not degradation.** Roughly 0.05% of fielded modules fail outright per year (NREL). Those panels get replaced under warranty; they do not show up as a slow decline.

## Linear vs step warranties: what you're actually buying

:::table caption="Comparing 2026 Tier-1 performance warranties"
Panel | Type | Year 1 | Year 25 | Annual Decline
REC Alpha Pure-RX 470W | HJT linear | 98% | 92% | 0.25%
Q.CELLS Q.TRON BLK M-G2+ 440W | n-TOPCon linear | 98% | 90.58% | 0.33%
Panasonic EverVolt HK2 410W | HJT linear | 98% | 92% | 0.25%
Silfab Elite BG 440W | n-TOPCon linear | 98% | 89.5% | 0.35%
REC TwinPeak 5 (older p-type) | PERC linear | 98% | 86% | 0.5%
:::

What this means in practice: a 10 kW array of REC Alpha Pure-RX at year 25 still delivers about 9.2 kW DC at standard test conditions. A 10 kW array of older PERC panels delivers about 8.6 kW. Over 25 years of California production (roughly 1,500–1,700 kWh per kW-DC per year depending on tilt and azimuth), that gap is 22,500–25,500 kWh of lifetime production. At a blended NEM 3.0 self-consumption value of about $0.32/kWh, that's $7,000–$8,000 in lifetime value swing — which is why the panel SKU on your quote matters more than most homeowners realize.

:::callout type=tip title="Read the asterisk on the warranty"
Some manufacturers warrant the linear curve under "STC" and exclude soiling, shading, and any system where the inverter has been replaced with a non-approved unit. If your installer pairs a premium panel with an off-list inverter, you can void the long-tail warranty.
:::

## LID, LeTID, and PID — the three degradation modes that matter

- **LID (light-induced degradation).** A boron-oxygen defect activated in the first ~100 hours of sunlight. Affects p-type silicon. Causes 1–2% initial loss. n-type modules are immune.
- **LeTID (light- and elevated-temperature-induced degradation).** A separate, slower mechanism in PERC cells activated by heat and current. Can cost 2–6% in the first few years if uncontrolled. Modern Tier-1 PERC panels (post-2020) have engineered this down significantly.
- **PID (potential-induced degradation).** Voltage stress between cells and the frame, accelerated by humidity. Triggered most often on systems with negative-grounded inverters and coastal humidity. All Tier-1 panels sold in California now ship PID-free certification (IEC 62804).

## What we actually see across our installs

- **Coastal systems (within ~3 miles of the ocean) lose about 0.1%/year more than inland systems** on the same panel model. We attribute this to higher persistent humidity and salt deposition on glass that does not get fully rinsed by California's dry summers.
- **Central Valley systems run hotter and degrade slightly faster than coastal**, but the larger production base means absolute kWh loss is similar.
- **Step-degradation panels installed 2015–2018 are tracking better than warranty.** Year-10 measurements show ~93–94% retention against a warranty floor near 92%.

:::compare title="Year-25 production: cheap panel vs premium panel"
before | Generic Tier-2 PERC, 10 kW array | 8.6 | kW DC at year 25
after  | REC Alpha Pure-RX, 10 kW array | 9.2 | kW DC at year 25
:::

## What this means when you're choosing a system

If you plan to keep the home more than 8–10 years, the panel's degradation curve matters more than its first-year wattage. A 440W panel that loses 0.25%/yr beats a 460W panel that loses 0.50%/yr by year 12 and never looks back.

:::faq
Q: Do California's heat waves actually shorten panel life?
A: Heat reduces instantaneous output (about 0.3–0.4%/°C above 25°C cell temp) but only modestly accelerates long-term degradation. The bigger long-term factor is thermal cycling — daily expansion and contraction stressing solder joints — which is why IEC 61215's 200-cycle test exists.

Q: Does NEM 3.0 change how I should think about degradation?
A: Yes. Because NEM 3.0 pays so little for exports, the year-25 self-consumption value is what matters. Paying for a panel with a tighter linear curve has a better return than it did under NEM 2.0.

Q: Will my Enphase microinverters outlast my panels?
A: The Enphase IQ8 series carries a 25-year warranty matched to the panel. Across our installs we see microinverter failure rates around 0.3–0.5% per unit over a 10-year window, with most failures occurring in the first 18 months (infant mortality) and replaced free under warranty.
:::

:::cta href="/packages" label="See our 25-year-tested panel lineup"
We only stock panels with published linear curves we've verified against field data.
:::

Bottom line: degradation is the single most under-discussed line item in a residential solar purchase.`,
      },
      {
        slug: "california-title-24-2025-solar-update-homeowners",
        image: "/images/blog/california-title-24-2025-solar-update-homeowners.jpg",
        title: "California Title 24 and Solar: What the 2025 Update Changed for Homeowners",
        excerpt:
          "The 2022 code put solar on new homes. The 2025 update added batteries for some buildings. Here's what it means if you're buying, building, or remodeling.",
        date: "2026-03-11",
        author: "Golden State Solar",
        category: "Policy & Incentives",
        keywords: [
          "California Title 24 2025",
          "Title 24 solar requirement",
          "California energy code battery",
          "CEC 2022 building energy efficiency standards",
          "Title 24 new construction solar",
          "Title 24 remodel solar requirement",
          "California solar mandate new homes",
          "Title 24 PV sizing calculator",
          "Title 24 multifamily battery",
          "Title 24 retrofit requirements",
        ],
        body: `California has had a solar-on-new-homes requirement since January 1, 2020. The 2022 Energy Code (effective January 1, 2023) extended that requirement to a broader set of building types. The 2025 Energy Code, effective January 1, 2026, added battery storage requirements to several occupancy categories and tightened the heat-pump-ready provisions.

If you're buying a new build, adding an ADU, or doing a major remodel, Title 24 is now part of your solar conversation whether you wanted it to be or not.

## What Title 24 is, in one paragraph

Title 24, Part 6 of the California Code of Regulations is the Building Energy Efficiency Standards, updated by the California Energy Commission (CEC) on a three-year cycle. Each cycle tightens envelope, HVAC, lighting, and on-site generation requirements. Compliance is enforced at the local building department; you cannot pull a final on a covered project without showing compliance via the CF1R/CF2R/CF3R forms or an approved performance pathway.

## What the 2022 code required (and still does)

- **Low-rise residential** (single-family, ADUs, duplexes-fourplexes, multifamily up to three habitable stories): solar PV required, sized via the standards' PV sizing equation.
- **High-rise multifamily** (four or more habitable stories): added to the requirement for the first time in 2022.
- **Selected nonresidential occupancies**: hotels, offices, retail, schools, restaurants, grocery, and a few others now require PV.

PV sizing for low-rise residential uses the equation: kWdc = (CFA × A) / 1,000 + (NDwell × B), where CFA is conditioned floor area, NDwell is number of dwelling units, and A and B are climate-zone-specific coefficients from the standards.

:::callout type=info title="The sizing equation gives you a floor, not a cap"
Title 24 only requires the minimum kW. Most homeowners we work with size 30–60% above the Title 24 minimum to actually offset their projected load, especially if they're going all-electric.
:::

## What changed January 1, 2026

1. **Battery storage requirements expanded.** High-rise multifamily and several nonresidential occupancies (offices, retail, schools, grocery, restaurants) now require on-site battery storage paired with the PV. Low-rise residential remains PV-required but battery-optional, with strong performance-pathway credits for adding storage.
2. **Heat-pump-ready and heat-pump-default provisions tightened.** New low-rise residential now uses heat-pump space heating or heat-pump water heating as the prescriptive baseline.
3. **EV-ready requirements were upgraded.** New homes must have a 240V/40A circuit reserved for a Level 2 charger.

:::table caption="Title 24 PV and battery requirements snapshot — 2026"
Building Type | PV Required | Battery Required | Heat Pump
Single-family new | Yes | No (credit available) | Yes (prescriptive)
ADU new (attached or detached) | Yes (with exceptions) | No | Yes (prescriptive)
Low-rise multifamily | Yes | No (credit available) | Yes (prescriptive)
High-rise multifamily | Yes | Yes | Yes (prescriptive)
New office or retail | Yes | Yes | Performance path
Major remodel adding >700 sf | Triggers PV review | No | Triggers review
:::

## Builder responsibility vs homeowner responsibility

For a new tract or custom home, the builder is responsible for Title 24 compliance and delivers the system as part of the home. The buyer signs the CF3R (the installation verification) at closing.

For homeowners doing additions or major remodels, the trigger points are: additions over 700 square feet typically trigger PV review; reroofing alone does not trigger PV; a change in building use class (garage → ADU) does trigger ADU-level requirements.

## How Title 24 interacts with NEM 3.0

Title 24 forces PV onto new homes; NEM 3.0 (the Net Billing Tariff, in effect since April 15, 2023) makes that PV worth much less when exported. The result is that builder-installed systems sized to the Title 24 minimum produce a lot of midday energy worth ~$0.05–$0.08/kWh on export.

:::compare title="Builder-spec PV alone vs PV + small battery on a new home"
before | Title 24 minimum PV, no battery | 1400 | $ saved/yr
after  | Title 24 PV + 10 kWh battery | 2650 | $ saved/yr
:::

If you're closing on a new home in 2026 with builder PV only, retrofitting a battery within the first 12 months — while the home still qualifies for the federal 25D Residential Clean Energy Credit on the standalone storage portion — is one of the highest-ROI moves available.

:::faq
Q: Does Title 24 require I install solar on my existing home?
A: No. Title 24 applies to new construction and certain major remodels and additions. There is no retroactive requirement on existing homes.

Q: Can I opt out of solar on a new build?
A: There are narrow exceptions but in practice very few new homes in California are built without PV anymore.

Q: Does the 2025 code require a Tesla Powerwall or specific brand of battery?
A: No. Code requires a battery meeting certain capacity and round-trip efficiency thresholds. Powerwall 3, FranklinWH aPower 2, Enphase IQ Battery 5P, and SolarEdge Home Battery all qualify.
:::

:::cta href="/contact" label="Get a Title 24 + retrofit consultation"
We work with builders, architects, and homeowners on Title 24 compliance and post-close battery retrofits.
:::`,
      },
      {
        slug: "heat-pump-solar-best-payback-2026",
        image: "/images/blog/heat-pump-solar-best-payback-2026.jpg",
        title: "Heat Pump + Solar: Why the Pairing Has the Best Payback in 2026",
        excerpt:
          "Federal 25C, 25D, HEEHRA rebates, and California TOU rates stack. We break down the real numbers across PG&E E-ELEC and SCE TOU-D-PRIME.",
        date: "2026-02-26",
        author: "Golden State Solar",
        category: "Cost & Pricing",
        keywords: [
          "heat pump solar payback California",
          "25C tax credit heat pump",
          "25D residential clean energy credit",
          "HEEHRA rebate California 2026",
          "PG&E E-ELEC heat pump",
          "SCE TOU-D-PRIME",
          "heat pump electrical load",
          "all electric home solar sizing",
          "heat pump water heater solar",
          "California IRA electrification rebates",
        ],
        body: `If you asked us in 2026 which single combination of upgrades gives a California homeowner the best return on investment, the answer is consistent: an air-source heat pump paired with a right-sized solar system on a TOU-EV or whole-home electrification rate plan.

## The incentive stack, plainly

Three federal programs matter for this combo in 2026:

- **25C — Energy Efficient Home Improvement Credit.** A tax credit covering 30% of the cost of qualified heat pumps, heat pump water heaters, and electrical panel upgrades. Capped at $2,000/year for heat pumps and $600/year for electrical panel work.
- **25D — Residential Clean Energy Credit.** A 30% tax credit on solar PV, batteries 3 kWh+, and solar water heating. No annual cap. Available through 2032.
- **HEEHRA — High-Efficiency Electric Home Rebate Program.** Point-of-sale rebates for low- and moderate-income households: up to $8,000 for a heat pump, $1,750 for a heat pump water heater, $4,000 for an electrical panel.

:::stats
30 | % | Federal 25D credit through 2032
2000 | $ | Annual 25C cap (heat pump portion)
8000 | $ | HEEHRA heat pump rebate (income-qualified)
3000 | $ | TECH Clean California incentive (typical)
:::

## The right TOU rate plan changes everything

:::table caption="2026 California TOU rates for electrified homes"
Plan | Utility | Off-peak | Mid-peak | Peak (4-9pm) | Best For
E-ELEC | PG&E | $0.27 | $0.40 | $0.55 | Heat pump + EV
EV2-A | PG&E | $0.25 | $0.42 | $0.55 | EV-focused
TOU-D-PRIME | SCE | $0.26 | $0.34 | $0.55 | Heat pump + EV
EV-TOU-5 | SDG&E | $0.18 | $0.35 | $0.65 | EV + electrified
:::

E-ELEC (PG&E) and TOU-D-PRIME (SCE) require you to certify that you have either an EV or an electric heat pump. They reward you with lower off-peak rates and a baseline credit structure that favors heavy off-peak consumption.

:::callout type=savings title="The plan switch is often $400-$700/year by itself"
On our customer base, switching from PG&E E-TOU-C to E-ELEC after a heat pump install averages about $580/year in additional savings — purely from the rate structure, no equipment change.
:::

## A real example from our install queue

A customer in Pleasanton (PG&E, climate zone 12), 2,400 sf 1990s two-story.

**Scope of work:**
- 9.6 kW solar (REC Alpha Pure-RX, Enphase IQ8M)
- Tesla Powerwall 3 (13.5 kWh)
- Mitsubishi Hyper-Heat ducted 3-ton heat pump
- Rheem ProTerra 65-gal heat pump water heater
- 200A main service panel upgrade

**Incentives captured:**
- 25D credit on solar + battery: $7,920
- 25C credit on heat pump: $2,000
- 25C credit on heat pump water heater: $600
- 25C credit on panel upgrade: $600
- TECH Clean California heat pump rebate: $3,000
- BayREN home+ rebate: $1,500

**Net cost after incentives:** ~$33,800 from a gross of $49,400.
**Annual savings:** ~$3,980/yr.
**Simple payback:** 8.5 years.

:::compare title="Solar-only vs solar + heat pump electrification"
before | Solar only (no electrification) | 10.5 | yr payback
after  | Solar + heat pump + HPWH + panel | 8.5 | yr payback
:::

:::callout type=warn title="Watch the 120% rule"
NEC 705.12 limits backfed solar breakers to 120% of busbar rating. On a 200A panel, that means up to a 40A solar breaker. This affects whether you can fit a 10+ kW system on a standard residential panel without additional electrical work.
:::

:::faq
Q: Do I have to switch to E-ELEC or TOU-D-PRIME after a heat pump install?
A: No, but you usually should. Your installer or you can submit the enrollment form (proof of electrification required).

Q: Will my electrical service handle a heat pump + solar + EV?
A: Often not without an upgrade. Plan a 200A panel as a baseline.

Q: My existing solar is on NEM 2.0 — should I add a heat pump?
A: Yes, and your NEM 2.0 grandfathering applies to the existing system.
:::

:::cta href="/calculator" label="Estimate your electrification payback"
Our calculator factors in climate zone, panel upgrades, and the 25C/25D stack.
:::`,
      },
      {
        slug: "reading-solar-quote-line-by-line-hidden-cost",
        image: "/images/blog/reading-solar-quote-line-by-line-hidden-cost.jpg",
        title: "Reading a Solar Quote Line-by-Line: How to Spot the $4,200 Hidden Cost",
        excerpt:
          "We break down a real California solar quote, line by line — what's legitimate, what's padding, and where most homeowners overpay.",
        date: "2026-04-02",
        author: "Golden State Solar",
        category: "Buying Guide",
        keywords: [
          "solar quote breakdown California",
          "solar installation cost per watt 2026",
          "hidden solar costs",
          "solar quote red flags",
          "MPU main panel upgrade cost",
          "solar permit fees California",
          "solar interconnection fee",
          "site adders solar quote",
          "compare solar quotes",
          "solar engineering fee",
        ],
        body: `We see customers carry three or four quotes into the first conversation. They look totally different on the surface but underneath the cost stack is the same. Knowing how to decompose a quote is the single most useful skill a solar shopper can have.

This post walks through a real (anonymized) quote from a competitor that a customer brought us in San Jose late last year. Same equipment list, same scope. They were quoted $42,800. We landed at $38,600. The gap was almost entirely in three line items.

## The seven categories that make up every quote

1. **Modules** — the panels themselves
2. **Inverter system** — microinverters or string + optimizers
3. **Mounting and balance of system (BoS)** — rails, flashing, wire, conduit, combiners, monitoring
4. **Battery** (if included) — pack + gateway/backup interface
5. **Electrical service work** — panel upgrade, line-side tap, sub-panels
6. **Soft costs** — labor, design, permits, interconnection, sales overhead
7. **Adders / contingencies** — roof penetration counts, structural reinforcement, conduit runs

In 2026 California, a fair installed price-per-watt for a quality system runs $2.65–$3.10 before incentives. Anything above $3.40/W needs justification; anything below $2.50/W needs equipment scrutiny.

## The example quote — 9.2 kW DC, San Jose, PG&E, no battery

:::table caption="The competitor quote that walked through our door"
Line | Description | Amount
1 | 23x REC Alpha Pure-RX 400W modules | $9,200
2 | 23x Enphase IQ8M microinverters | $5,290
3 | IQ Combiner 5C + monitoring | $1,200
4 | Racking, flashing, BoS hardware | $2,800
5 | Electrical materials | $1,400
6 | Labor (35 hours @ $145/hr) | $5,075
7 | Design and engineering fee | $2,400
8 | Permits (city + PG&E) | $1,850
9 | Interconnection fee | $750
10 | Site adders (steep pitch + comp shingle) | $3,500
11 | Project management | $2,800
12 | Sales / overhead | $3,915
13 | Contingency | $2,620
| Total | $42,800
:::

## Lines that need scrutiny

**Line 7 — Design and engineering fee ($2,400).** Legitimate engineering for a residential rooftop is structural letter ($300–$600), electrical single-line and load calc ($200–$400), and PV3R/Title-24 documentation ($150–$300). Total real engineering cost on a standard residential job is $700–$1,300. **Real gap: ~$1,100.**

**Line 9 — Interconnection fee ($750).** PG&E does NOT charge a residential interconnection fee for systems under 30 kW under Rule 21 in 2026. SCE and SDG&E are the same. If a quote includes an "interconnection fee" as a charge to you, it's installer margin labeled to look like a utility expense. **Real gap: $750.**

**Line 10 — Site adders ($3,500).** A genuine steep-pitch adder runs $0.05–$0.10/W (about $460–$920 on this system). A standard comp-shingle roof is the baseline — it should not carry an adder at all. **Real gap: ~$2,000.**

:::callout type=warn title="The three lines to question first on every quote"
On almost every quote we review, the same three lines carry the inflation: engineering fee, interconnection fee, and site adders. They sound technical, they're hard to verify, and they add up.
:::

:::compare title="Two quotes, same equipment"
before | Competitor quote, 9.2 kW REC + IQ8M | 42800 | $
after  | Transparent quote, same scope | 38600 | $
:::

## A quick scoring checklist

- [ ] Every module, inverter, and battery has a real model number on the page.
- [ ] Bill of materials matches the system size.
- [ ] Permits line is reasonable for your jurisdiction.
- [ ] Interconnection fee is $0 (residential <30 kW, all CA IOUs).
- [ ] Engineering line is justified with deliverables.
- [ ] Site adders are tied to specific roof or site conditions.
- [ ] Warranty terms are explicit and in writing.
- [ ] CSLB license number and bond info are on the proposal.
- [ ] Roof workmanship warranty period stated separately (10 years minimum).
- [ ] Payment terms aren't front-loaded (CA law caps deposits at 10% or $1,000).

:::faq
Q: Should I be suspicious of a quote that's much lower than the others?
A: Look at the equipment first. Off-brand modules, no-name inverters, and 5-year workmanship warranties are the typical cost-cutting moves.

Q: Are zero-down loans actually zero-down?
A: They're zero out-of-pocket at signing, but the dealer fee (typically 18–30% of the system cost) is rolled into the loan principal. Always ask for the cash price and the loan price side by side.

Q: How long should a CA residential solar project take?
A: From signed contract to PTO: 8–14 weeks is typical in 2026.
:::

:::cta href="/contact" label="Get a transparent line-item quote"
We send the bill of materials with model numbers and itemized soft costs, before you sign anything.
:::`,
      },
      {
        slug: "ev-solar-sizing-tesla-rivian-f150-lightning",
        image: "/images/blog/ev-solar-sizing-tesla-rivian-f150-lightning.jpg",
        title: "EV + Solar: How to Size a Rooftop System Around a Tesla, Rivian, or F-150 Lightning",
        excerpt:
          "Miles to kWh, charger amperage, TOU plans, and the right battery pairing for one EV, two EVs, or an electric truck — with real numbers.",
        date: "2026-05-08",
        author: "Golden State Solar",
        category: "Buying Guide",
        keywords: [
          "EV solar sizing California",
          "Tesla solar system size",
          "Rivian home charging solar",
          "F-150 Lightning solar",
          "Level 2 charger installation cost",
          "EV2-A rate plan PG&E",
          "EV-TOU-5 SDG&E",
          "solar for two EVs",
          "electric truck home charging",
          "solar EV battery sizing",
        ],
        body: `Half the new solar projects we quote in 2026 include at least one EV in the household. The math gets interesting fast.

## Step 1: Convert miles to kWh

:::table caption="Real-world kWh per 1,000 miles, California driving"
Vehicle | EPA mi/kWh | Real-world | kWh per 1,000 mi
Tesla Model 3 RWD (2024+) | 4.2 | 3.6 | 278
Tesla Model Y AWD | 3.8 | 3.3 | 303
Rivian R1S Dual Standard | 2.3 | 2.0 | 500
Rivian R1T Dual Standard | 2.4 | 2.1 | 476
Ford F-150 Lightning ER | 2.0 | 1.7 | 588
Chevy Equinox EV | 3.6 | 3.1 | 322
Hyundai Ioniq 5 RWD | 3.5 | 3.0 | 333
:::

For a typical California household driving 12,000 miles/year per car:
- Tesla Model 3: ~3,400 kWh/year
- Tesla Model Y / Hyundai Ioniq 5: ~3,700–4,000 kWh/year
- Rivian R1T or R1S: ~5,700–6,000 kWh/year
- F-150 Lightning: ~7,000–7,500 kWh/year

Add 8–12% for charging losses.

## Step 2: Convert kWh to solar kW

In California, 1 kW-DC of well-oriented residential solar produces about 1,500–1,750 kWh/year. We use 1,600 kWh/kW/year as a planning number.

:::table caption="Solar kW needed per vehicle (using 1,600 kWh/kW/yr)"
Vehicle | Annual kWh | Solar kW Needed
Tesla Model 3 | 3,400 | 2.1 kW
Tesla Model Y | 4,000 | 2.5 kW
Rivian R1S/R1T | 6,000 | 3.8 kW
F-150 Lightning | 7,500 | 4.7 kW
:::

## Step 3: Pick the charger

1. **32A / 7.7 kW** — works on a 40A circuit. About 25–30 mi/hr.
2. **40A / 9.6 kW** — works on a 50A circuit. About 35–40 mi/hr.
3. **48A / 11.5 kW** — works on a 60A circuit. About 45 mi/hr.

The 60A circuit pushes you toward a 200A or 225A main panel.

**Installation cost reality (2026 California):**
- Charger hardware: $450–$900
- Direct hardwire to nearby panel: $700–$1,200 labor + permit
- Long conduit run (40–80 ft): $1,800–$3,200
- 200A panel upgrade (if needed): $3,500–$6,500

:::callout type=tip title="Wire the conduit even if you don't install the charger yet"
On any solar project for a customer planning an EV in the next 2 years, we run conduit during the solar install. Doing it during the same trip costs $400–$700. Doing it as a standalone project later costs $1,800–$3,200.
:::

## Step 4: Pick the TOU rate plan

:::table caption="2026 EV-focused TOU rates"
Plan | Utility | Super-Off-Peak | Off-Peak | Peak | Notes
EV2-A | PG&E | $0.25 | $0.32 | $0.55 | Whole-home EV rate
E-ELEC | PG&E | — | $0.27 | $0.55 | Requires EV or heat pump
EV-TOU-5 | SDG&E | $0.18 | $0.35 | $0.65 | Steep peak, deep off-peak
TOU-D-PRIME | SCE | — | $0.26 | $0.55 | Requires EV or heat pump
:::

On EV2-A, the off-peak rate is roughly 35–40% cheaper than the default E-TOU-C rate. The plan switch alone is ~$550/year.

## Three example builds

**Build 1: One Tesla Model 3, gas heat, PG&E**
- 7.2 kW solar, no battery, 40A Tesla Wall Connector, EV2-A
- Net: $15,960 after 25D credit
- Annual savings: ~$2,100 — Payback: ~7.5 years

**Build 2: Two EVs, all-electric home, SCE**
- 11.5 kW solar, Tesla Powerwall 3, 48A + 32A chargers, TOU-D-PRIME
- Net: $31,150 after 25D credit
- Annual savings: ~$3,800 — Payback: ~8.2 years

**Build 3: F-150 Lightning + Model Y, SDG&E**
- 14.4 kW solar, 2× FranklinWH aPower 2, 60A Ford Charge Station Pro + 48A L2, EV-TOU-5
- Net: ~$47,000 after credits
- Annual savings: ~$5,200 — Payback: ~9 years

:::compare title="Solar + EV with vs without battery on NEM 3.0"
before | 9.6 kW solar, 2 EVs, no battery | 2400 | $ saved/yr
after  | 9.6 kW solar + 13.5 kWh Powerwall 3, 2 EVs | 3650 | $ saved/yr
:::

:::faq
Q: Can I install solar now and add a battery later?
A: Yes. Enphase IQ8 systems and SolarEdge systems both support add-on batteries cleanly.

Q: Is bidirectional charging worth waiting for?
A: If you drive a Tesla today and the rest of the system makes sense, don't wait. Broader V2X adoption is still 2–3 years out.
:::

:::cta href="/calculator" label="Size a system for your EV"
Tell us the cars, miles, and territory — we'll run the numbers.
:::`,
      },
      {
        slug: "solar-panel-warranties-decoded-2026",
        image: "/images/blog/solar-panel-warranties-decoded-2026.jpg",
        title: "Solar Panel Warranties Decoded: 25-Year Performance vs 12-Year Product",
        excerpt:
          "The two warranties on every California solar quote protect very different things — and one of them quietly expires while your panels are still on the roof.",
        date: "2026-04-18",
        author: "Golden State Solar",
        category: "Buying Guide",
        keywords: [
          "solar panel warranty california",
          "performance warranty vs product warranty",
          "tier 1 solar panel warranties 2026",
          "rec alpha pure-r warranty",
          "q.cells q.peak duo warranty",
          "panasonic evervolt warranty",
          "silfab prime warranty",
          "sunpower maxeon 40 year warranty",
          "solar panel rma process",
          "solar workmanship warranty california",
        ],
        updated: "2026-05-10",
        body: `Most California homeowners read "25-year warranty" on a solar proposal and assume the whole system is covered for a quarter century. It isn't. There are at least three separate warranties stacked on every rooftop install.

## The Three Warranties on Every Solar System

:::table caption="The three warranties on a typical California solar install"
Warranty | Issued by | Typical term | Covers
Product (panel) | Module manufacturer | 12–40 years | Defects in materials and workmanship of the panel itself
Performance | Module manufacturer | 25–40 years | Power output staying above a guaranteed curve
Workmanship (labor) | Installer | 5–25 years | Roof penetrations, wiring, racking, labor for any swap
:::

The workmanship warranty is the one people forget to ask about. When a panel fails in year 14, the manufacturer ships a new module to your driveway. Someone still has to climb on your roof, pull the broken one, install the new one, re-flash any penetration, and re-commission the string.

:::callout type=warn title="Ask this exact question before signing"
"If a panel fails in year 14, who pays the labor to remove and reinstall it, and is that in writing?" If the answer isn't a written 25-year workmanship warranty from the installer, you are the one paying.
:::

## 2026 Warranty Comparison: Tier 1 Residential Panels

:::table caption="Published warranty terms, leading residential modules in California (2026)"
Panel | Product warranty | Performance warranty | Year 25 output guarantee
REC Alpha Pure-R | 25 years | 25 years | 92.0%
Q.CELLS Q.PEAK DUO ML-G11+ | 25 years | 25 years | 86.0%
Panasonic EverVolt H-series | 25 years | 25 years | 92.0%
Silfab Prime | 30 years | 30 years | 86.6% at year 30
Maxeon 7 (formerly SunPower) | 40 years | 40 years | 92.0% at year 25
:::

**REC Alpha Pure-R** ships with a 25/25 warranty as standard, but only if installed by a REC Certified Solar Professional. If your installer isn't REC certified, the product warranty drops to 20 years.

**Q.CELLS Q.PEAK DUO** is the most commonly installed Tier 1 panel in California by volume. The 25/25 warranty is standard with no installer certification gate.

**Maxeon 7** has the longest warranty at 40/40. The catch: Maxeon Solar Technologies has been through significant financial restructuring since the 2024 SunPower bankruptcy.

## The Bankruptcy Gotcha

In August 2024, SunPower Corp. filed Chapter 11. Homeowners with SunPower-branded panels installed before the split with Maxeon discovered the warranty obligation had been transferred, partially honored, partially not.

:::callout type=tip title="The bankruptcy-proofing checklist"
1. Buy from manufacturers with a 10+ year operating history and diversified business lines.
2. Pick an installer that's been operating under the same legal entity for 8+ years.
3. Check if the manufacturer offers third-party insurance-backed warranties (PowerGuard, Solar Insure, Omnidian).
4. Save the warranty PDF, serial numbers, and commissioning report to cloud storage.
:::

## How the RMA Process Actually Works

:::stats
1 | week | Installer diagnoses and submits RMA to manufacturer
2-6 | weeks | Manufacturer reviews diagnostic data, approves or rejects
2-4 | weeks | Replacement panel ships to installer
1 | day | Installer schedules and performs swap
:::

That's 5–11 weeks of partial system underperformance for a single panel failure.

## What We Actually Recommend

- **Minimum acceptable:** 25-year product, 25-year performance, 92% year-25 floor, 25-year workmanship from the installer.
- **Coastal or extreme environment:** verify the marine-rated SKU is specified on the quote.
- **Long-hold properties:** Silfab Prime 30/30 or Maxeon 7 40/40, paired with an installer offering 25-year workmanship.

:::faq
Q: Do warranties transfer when I sell my house?
A: Most manufacturer warranties transfer automatically. Installer workmanship warranties usually transfer but may require a one-time form.

Q: What's the most common warranty claim you actually file?
A: Microinverter or optimizer failure, by a wide margin — not panels. Panel-level electronics fail at roughly 5–10× the rate of the panels themselves over 25 years.

Q: Does insurance cover a panel that fails outside warranty?
A: Homeowners insurance generally covers sudden physical damage but not gradual degradation or manufacturing defects.
:::

:::cta href="/contact" label="Get a quote with 25-year workmanship"
Every Golden State Solar install ships with a 25-year workmanship warranty — labor, roof penetrations, and electrical recommissioning included.
:::`,
      },
      {
        slug: "bifacial-solar-comparison-california-2026",
        image: "/images/blog/bifacial-solar-comparison-california-2026.jpg",
        title: "Why Your Solar Quote Should Include a Bifacial Comparison",
        excerpt:
          "Bifacial panels can deliver 3–15% more annual yield depending on your roof — but California rooftops only capture a fraction of the lab-claimed gain.",
        date: "2026-03-22",
        author: "Golden State Solar",
        category: "Technology",
        keywords: [
          "bifacial solar panels california",
          "rec alpha pure-r bifacial",
          "longi hi-mo 6 bifacial",
          "bifacial vs monofacial residential",
          "bifacial gain rooftop",
          "albedo solar california",
          "ground mount bifacial",
          "agrivoltaics california",
          "best solar panels for snow california",
        ],
        body: `Bifacial solar modules — panels with active cells on both the front and back — are now common on residential quotes, often at a $0.05–$0.15 per watt premium over the monofacial equivalent. The marketing claim is "up to 30% more energy." The honest California rooftop number is closer to 3–6%.

## How Bifacial Panels Actually Generate Extra Power

A bifacial module uses a transparent backsheet or dual glass, exposing rear-side solar cells to whatever light reflects up from beneath the panel. That reflected light is called albedo, measured 0–1.

:::table caption="Approximate albedo values for surfaces under California rooftop arrays"
Surface beneath array | Albedo | Practical rear-side gain
Asphalt shingle (dark) | 0.10–0.15 | 1–2%
Asphalt shingle (light) | 0.18–0.22 | 2–3%
Concrete tile (terracotta) | 0.20–0.30 | 3–5%
Cool roof / TPO white membrane | 0.60–0.80 | 8–12%
Grass / dry vegetation | 0.20–0.25 | 3–5%
Bare soil / desert sand | 0.30–0.40 | 5–8%
Fresh snow | 0.80–0.90 | 12–20%
Light gravel ballast | 0.30–0.45 | 6–10%
:::

## The California Rooftop Reality

:::stats
3 | % | Bifacial gain, dark asphalt shingle (Bay Area average)
5 | % | Bifacial gain, concrete tile roofs (Sacramento, Inland Empire)
9 | % | Bifacial gain, white TPO flat roof with elevated tilt rack
14 | % | Bifacial gain, ground-mount with light gravel (Central Valley)
:::

These are measured numbers from monitored installs, not lab specs.

## When Bifacial Is Worth the Premium

**Worth it:**
- Flat roofs (TPO, modified bitumen, foam) with cool-roof white membranes.
- Tile roofs with light terracotta or cool-roof tile.
- Ground-mount systems on gravel, concrete, or short grass.
- Snow-belt installs (Truckee, Mammoth, Big Bear, Sierra foothills).
- Agrivoltaic and shade-structure installs.

**Not worth it:**
- Dark asphalt shingle roofs with flush-mounted panels.
- Roofs with significant marine layer, fog, or chronic morning haze.
- Heavily shaded roofs.

:::compare title="Bifacial premium vs measured gain, 8 kW Bay Area asphalt-shingle install"
before | Monofacial REC Alpha Pure-R | 12800 | annual kWh
after  | Bifacial REC Alpha Pure-R | 13150 | annual kWh
:::

## Bifacial + NEM 3.0 Math

Under NEM 3.0, every extra kWh produced has two possible values:
1. Self-consumed instantly (full retail value, ~$0.35–$0.55/kWh in PG&E E-ELEC territory)
2. Exported back to the grid (~$0.04–$0.08/kWh average)

If bifacial gain mostly happens in the late morning when your home isn't drawing much load, much of the extra production exports at the low value.

:::callout type=savings title="Bifacial pairs better with batteries under NEM 3.0"
A 10 kWh battery captures bifacial overproduction at the full self-consumption value. Without storage, the extra exports earn pennies.
:::

:::faq
Q: How much more does bifacial cost in California?
A: Typically $0.05–$0.15 per watt for the panel premium, or roughly $400–$1,200 on a typical 8 kW residential system.

Q: Will bifacial panels fade my roof underneath?
A: No. Bifacial panels still block most direct sunlight.

Q: Are bifacial panels more durable?
A: The glass-glass construction common to bifacial modules is more durable than glass-backsheet monofacial, with lower degradation rates.
:::

:::cta href="/contact" label="Get a side-by-side bifacial quote"
We'll model your specific roof with realistic albedo, shading, and orientation.
:::`,
      },
      {
        slug: "solar-storage-psps-resilience-california-2026",
        image: "/images/blog/solar-storage-psps-resilience-california-2026.jpg",
        title: "Solar + Storage Resilience: Surviving a Multi-Day PSPS Without a Generator",
        excerpt:
          "Public Safety Power Shutoffs now average 2–4 days. Here's exactly how to size a solar + battery system to ride one out without a propane generator.",
        date: "2026-02-14",
        author: "Golden State Solar",
        category: "Battery & Storage",
        keywords: [
          "psps california solar battery",
          "powerwall psps backup",
          "battery sizing for resilience",
          "critical loads panel california",
          "whole home backup vs partial",
          "tesla powerwall 3 ride through",
          "franklinwh apower 2",
          "enphase iq battery 5p",
          "multi day outage solar",
          "pge psps preparation",
        ],
        updated: "2026-04-08",
        body: `California's three major investor-owned utilities collectively called over 200 Public Safety Power Shutoff events in the 2020–2025 period. The average PSPS duration is 2–4 days; the longest single event (October 2019) hit some PG&E customers for over 5 days.

## Resilience Sizing Is a Different Problem

:::stats
2-4 | days | Average PSPS event duration (2020-2025)
800-1500 | watts | Typical critical-loads draw, average California home
5-15 | kWh | Critical-loads daily energy use (24 hours)
4-8 | kWh | Daily solar harvest needed to sustain critical loads indefinitely
:::

## Step 1: Define the Critical Loads Panel

:::table caption="Critical-loads panel design, typical California home"
Load | Continuous watts | Daily kWh | Backup priority
Refrigerator + freezer | 150 avg | 3.6 | Essential
Internet router + ONT | 25 | 0.6 | Essential
Furnace blower (gas heat) | 400 when running | 1.5 | Essential (winter)
LED lighting (selected) | 100 | 0.8 | Essential
Phone + laptop charging | 50 | 0.4 | Essential
Well pump (if applicable) | 1500 when running | 2.0 | Essential (rural)
Microwave | 1200 when running | 0.5 | Important
Air conditioning | 3000-5000 when running | 8-15 | Comfort only
EV charging | 3500-11500 | varies | Comfort only
:::

## Step 2: Whole-Home vs Partial Backup

:::compare title="13.5 kWh battery, partial vs whole-home backup, 100°F PSPS day"
before | Whole-home (AC running) | 6 | hours runtime
after  | Critical loads only (no AC) | 16 | hours runtime
:::

Our default recommendation: install whole-home backup hardware but configure aggressive load-shedding so non-essential circuits drop within minutes of grid loss.

## Step 3: Battery Capacity Math

For a household with 8 kWh/day of essential critical loads:
- 1 day of overnight ride-through = need 4–5 kWh usable battery.
- 1 full day with no solar = need ~8 kWh usable.
- 2-day ride-through with intermittent solar = need 12–15 kWh usable plus 4–5 kW of solar.
- 4-day ride-through with intermittent solar = need 20–27 kWh usable plus 6–8 kW of solar.

:::callout type=savings title="Solar matters more than battery size for multi-day resilience"
Doubling your battery from 13.5 to 27 kWh doubles your no-sun runtime. Adding 4 kW of solar to a 13.5 kWh battery gives you indefinite runtime. For PSPS lasting more than 2 days, more solar beats more battery.
:::

## Step 4: Pick the Right Battery Architecture

:::table caption="Battery platform comparison for PSPS resilience, California 2026"
Platform | Usable kWh per unit | Continuous output | Best for
Tesla Powerwall 3 | 13.5 | 11.5 kW | Whole-home backup, tight integration
FranklinWH aPower 2 | 15.0 | 10.0 kW | Existing PV systems, generator integration
Enphase IQ Battery 5P | 5.0 | 3.84 kW | Modular sizing, IQ8 PV systems
Sol-Ark 15K + EG4 | 14+ stackable | 12 kW | Large banks, off-grid-capable, rural
:::

## Real-World Ride-Through Examples

:::stats
16 | hours | 13.5 kWh Powerwall, 800 W critical loads, no solar input
32 | hours | Same battery, with 4 kW solar refilling during daylight
96+ | hours | 27 kWh dual-Powerwall, 6 kW solar, well pump + fridge + lights
:::

:::callout type=warn title="Generators alone are not a substitute for solar + battery"
A generator covers outages, but it runs continuously, burns fuel constantly, requires monthly exercise and annual service, and provides zero daily savings. Solar + battery pays for itself with NEM 3.0 savings even when there's no outage.
:::

:::faq
Q: Can I run my AC during a PSPS on solar + battery?
A: Briefly, yes. Continuously, no. A 3-ton AC draws ~3–4 kW running. For multi-day events, treat AC as a comfort-only load.

Q: Does the federal solar tax credit cover the battery?
A: Yes. The 30% Residential Clean Energy Credit covers standalone batteries 3+ kWh starting in 2023, regardless of whether they're paired with solar.

Q: What about smoke blocking the sun during a wildfire?
A: Heavy smoke can cut solar output 30–70% for days. This is the case where the layered architecture earns its cost.
:::

:::cta href="/calculator" label="Size a resilience system for your home"
Run our calculator with your zip code and critical loads.
:::`,
      },
      {
        slug: "california-solar-soft-costs-vs-germany-2026",
        image: "/images/blog/california-solar-soft-costs-vs-germany-2026.jpg",
        title: "California Solar Soft Costs vs Hardware: Why We Pay 2× What Germany Does",
        excerpt:
          "Panels cost roughly the same in Munich and Modesto. So why does a California install cost $2.80/W when Germany installs the same hardware for $1.30/W?",
        date: "2026-01-28",
        author: "Golden State Solar",
        category: "Research & Data",
        keywords: [
          "california solar cost per watt 2026",
          "solar soft costs california",
          "germany solar cost comparison",
          "solarapp california adoption",
          "ab 942 california solar",
          "permitting solar california",
          "interconnection wait time pge",
          "tracking the sun lbnl 2024",
          "customer acquisition cost solar",
          "nrel solar cost benchmark",
        ],
        body: `Look at a bill of materials for a typical 8 kW residential solar install in California and an identical 8 kW install in Bavaria, and the hardware costs land within 10% of each other. Yet the all-in installed cost diverges sharply.

:::stats
2.80 | $/W | California residential average (NREL Q4 2024 benchmark)
1.30 | $/W | Germany residential average (Fraunhofer ISE 2024)
:::

## The Cost Stack: California vs Germany

:::table caption="Residential solar cost breakdown (8 kW system, $/W)"
Cost category | California | Germany | Delta
Modules (panels) | $0.32 | $0.28 | +$0.04
Inverter | $0.18 | $0.16 | +$0.02
Racking + BOS hardware | $0.14 | $0.12 | +$0.02
Direct labor (install) | $0.32 | $0.22 | +$0.10
Permitting + inspection | $0.18 | $0.04 | +$0.14
Interconnection | $0.12 | $0.03 | +$0.09
Sales + customer acquisition | $0.42 | $0.08 | +$0.34
Overhead + G&A | $0.28 | $0.12 | +$0.16
Margin | $0.34 | $0.15 | +$0.19
Sales tax / VAT effect | $0.20 | $0.10 | +$0.10
Total | $2.80 | $1.30 | +$1.50
:::

Hardware is only $0.08/W more expensive in California. The remaining 95% of the gap is soft costs.

## Soft Cost #1: Customer Acquisition ($0.34/W gap)

The average California solar customer is acquired through paid digital advertising, door-to-door sales, telemarketing, lead aggregators, or referral programs that pay $500–$3,000 per closed deal. In Germany, solar is a planned home improvement: 3–5 quotes from local Solarteure (installer cooperatives), often on referral.

## Soft Cost #2: Permitting + Inspection ($0.14/W gap)

:::stats
4-12 | weeks | Permit-to-PTO timeline, California (varies by AHJ)
$400-$1500 | fees | Typical AHJ permit fees
1-3 | reviews | Plan revision cycles
:::

Germany operates under a streamlined federal regime: residential systems under 30 kW require notification to the grid operator and electrical contractor sign-off, but typically no building permit at all.

**SolarAPP+**, an automated solar permitting platform, is now adopted by over 250 California jurisdictions as of 2026. **AB 942**, signed in 2024 and effective in 2026, requires all California AHJs to adopt automated permitting by 2027.

:::callout type=info title="Check if your AHJ uses SolarAPP+"
NREL maintains a public list of SolarAPP+ jurisdictions. If your city or county is on it, permit approval typically happens within 24 hours.
:::

## What's Actually Closing the Gap

1. **SolarAPP+ and AB 942.** Automated permitting cuts $0.06–$0.08/W.
2. **Local installer scale-up.** Local installers operating in 1–3 counties price at $2.20–$2.60/W vs $3.00–$3.50/W of the largest national players.
3. **NEM 3.0 market shake-out.** NEM 3.0's export rate cuts forced low-margin national installers to consolidate or exit California.

:::compare title="California residential solar cost trajectory ($/W installed)"
before | 2021 California average | 3.20 | $/W
after  | 2026 California average | 2.80 | $/W
:::

## What This Means for Your Quote

- **A quote at $3.20/W or higher in California is paying for national-installer overhead and sales commissions, not better equipment.**
- **Quotes that include "free" upgrades, expensive financing buydowns, or pressure to sign tonight are loading their margin into hidden fees.**
- **Your AHJ matters.** If you're in a SolarAPP+ jurisdiction, demand the SolarAPP+ permit pathway.

:::callout type=tip title="The 'multiple local quotes' rule"
The single best way to get a fair California solar price is to collect 3 quotes from local installers and reject anything significantly above the middle.
:::

:::faq
Q: Is California solar really 2× more expensive, or just looks that way on paper?
A: Both are real. NREL's Tracking the Sun (2024) and Fraunhofer ISE (2024) both confirm the roughly 2× gap.

Q: Will California ever match Germany's pricing?
A: Probably not at full parity, but $0.30–$0.50/W of closure is realistic by 2030 if SolarAPP+, AB 942, and interconnection reforms land as planned.

Q: Does the 30% federal tax credit close the gap?
A: Partially. After the 30% credit, a $2.80/W California system is effectively $1.96/W to the homeowner, closer to Germany's pre-incentive price.
:::

:::cta href="/contact" label="Get a transparent California solar quote"
Local installer, local pricing, no door-to-door commissions.
:::`,
      },
      {
        slug: "inverter-showdown-2026-microinverter-string-hybrid",
        image: "/images/blog/inverter-showdown-2026-microinverter-string-hybrid.jpg",
        title: "Inverter Showdown 2026: Microinverter vs String vs Hybrid",
        excerpt:
          "Enphase IQ8, SolarEdge string + optimizer, and Sol-Ark hybrid each win different California rooftops. Here's the framework we actually use to pick.",
        date: "2026-05-06",
        author: "Golden State Solar",
        category: "Technology",
        keywords: [
          "enphase iq8 vs solaredge 2026",
          "microinverter vs string inverter california",
          "sol-ark hybrid inverter review",
          "franklinwh hybrid inverter",
          "eg4 hybrid inverter",
          "nem 3.0 inverter selection",
          "best inverter for shaded roof",
          "solar inverter mtbf",
          "iq8 vs iq8m vs iq8p",
          "rapid shutdown california",
        ],
        body: `Pick the wrong inverter architecture and you'll regret it for 25 years. In 2026, three architectures compete for California residential rooftops: Enphase microinverters, SolarEdge string with DC optimizers, and hybrid inverters from Sol-Ark, EG4, and FranklinWH.

## Side-by-Side: 2026 California Reality

:::table caption="Residential inverter architectures, California 2026"
Spec | Enphase IQ8 (M/MC/P) | SolarEdge Home Wave + Optimizers | Sol-Ark 15K Hybrid
Architecture | 1 inverter per panel | 1 central + 1 optimizer per panel | 1 central, no per-panel
Panel-level MPPT | Yes | Yes | No (unless external optimizers)
Single point of failure | No | Yes (central inverter) | Yes (central inverter)
Built-in battery management | No (requires IQ Battery) | No (requires SE battery) | Yes
Warranty | 25 years | 12 years inverter + 25 years optimizers | 10 years (extendable to 12)
Rapid shutdown compliance | Built-in | Via optimizers | Requires external
California rooftop share (2025) | ~65% | ~22% | ~13% (rising)
:::

## Where Each One Wins

**Enphase IQ8 wins when:**
- The roof has any meaningful shading.
- The roof has multiple orientations.
- The homeowner expects to add a battery later.
- Future expansion is likely.

**SolarEdge wins when:**
- The roof is large, unshaded, and uniformly oriented.
- The homeowner is budget-sensitive.
- The system size is large (10+ kW).

**Hybrid inverters win when:**
- The system is battery-first, not solar-first.
- The homeowner wants integrated generator support.
- The system is large (12–20 kW PV with 30+ kWh battery).

## Real-World MTBF

- **Enphase microinverters:** ~0.05–0.10% failure rate per microinverter per year. Individual-panel failures.
- **SolarEdge optimizers:** similar (~0.05%/year).
- **SolarEdge central inverter:** 0.5–1.5%/year. Whole-system outage when it fails.
- **Sol-Ark / EG4 hybrids:** 1–2%/year early life, longer-term TBD.

:::stats
25 | years | Enphase IQ8 warranty
12 | years | SolarEdge Home Wave inverter warranty
25 | years | SolarEdge optimizer warranty
10-12 | years | Sol-Ark 15K hybrid warranty
:::

## NEM 3.0 Design Considerations

California's NEM 3.0 pushes most designs toward larger battery storage, slightly oversized PV, and inverter architectures that integrate cleanly with batteries.

:::compare title="California NEM 3.0 inverter mix shift (our installs)"
before | Pre-NEM 3.0 IQ8 microinverter share | 55 | %
after  | Post-NEM 3.0 IQ8 microinverter share | 70 | %
:::

## The Practical Decision Framework

:::table caption="Inverter architecture by use case (California 2026)"
Use case | Recommended architecture
Average suburban home, some tree shading, future battery | Enphase IQ8 + IQ Battery 5P
Large unshaded south-facing roof, budget priority | SolarEdge Home Wave + optimizers
Rural property, PSPS-prone, well + generator | Sol-Ark 15K + EG4 batteries
Off-grid or near-off-grid cabin | Sol-Ark or EG4 18kPV
Existing PV system, adding storage | FranklinWH aGate + aPower 2
Multi-orientation complex roof | Enphase IQ8 (per-panel MPPT essential)
Forever-home, lowest-maintenance priority | Enphase IQ8 (no central single-point-of-failure)
:::

:::callout type=warn title="Don't let an installer pick the inverter for you"
Different installers specialize in different architectures. Ask each quoting installer to model both microinverter and string designs for your specific roof, and to justify the choice with shading analysis, not preference.
:::

:::faq
Q: Are microinverters really worth the premium?
A: Usually yes on shaded or multi-orientation roofs, sometimes no on large simple south-facing roofs.

Q: What happens to my system if Enphase goes out of business?
A: Microinverters keep running — they're independent devices that don't need cloud services to produce power.

Q: How loud are these inverters?
A: Microinverters are silent. SolarEdge central inverters and hybrid inverters have audible fans.
:::

:::cta href="/contact" label="Get an inverter-architecture comparison"
We'll model your specific roof with shading analysis and side-by-side pricing.
:::`,
      },
    ],

    testimonials: [
      {
        q: "Bill came down from $380 to $14 in the first month. Federal tax credit of $5,880 applied to our 2026 return without a hitch.",
        who: "Morales family",
        where: "Los Angeles · 7 kW · installed Feb 2026",
        district: "los-angeles",
      },
      {
        q: "Two other installers floated vague \"adders\". Golden State Solar gave one written number and stuck to it.",
        who: "Chen residence",
        where: "San Diego · 6 kW · installed Mar 2026",
        district: "san-diego",
      },
      {
        q: "Pumps run free now. They handled the PG&E AG-tariff switch themselves — would not have figured that out alone.",
        who: "Ramirez Family Farms",
        where: "Fresno · 15 kW agricultural · installed Nov 2025",
        district: "fresno",
      },
    ],

    partners: [
      { n: "REC Solar", c: "Tier-1 panels" },
      { n: "Q.CELLS", c: "Tier-1 panels" },
      { n: "Panasonic", c: "Tier-1 panels" },
      { n: "Silfab", c: "Tier-1 panels" },
      { n: "Enphase", c: "Microinverters" },
      { n: "Tesla", c: "Powerwall 3 batteries" },
      { n: "FranklinWH", c: "Whole-home batteries" },
      { n: "SolarEdge", c: "Optimized inverters" },
    ],

    gallery: [
      { city: "Los Angeles", size: "7 kW", type: "Residential", a: "4/5" },
      { city: "Fresno", size: "15 kW", type: "Farm pump", a: "1/1" },
      { city: "San Jose", size: "30 kW", type: "Commercial rooftop", a: "5/4" },
      { city: "San Diego", size: "6 kW", type: "Residential", a: "4/5" },
      { city: "Bakersfield", size: "12 kW", type: "Residential + Powerwall", a: "1/1" },
    ],

    stats: [
      { n: "3,420", l: "Rooftops powered" },
      { n: "22.6 MW", l: "Total installed" },
      { n: "23/58", l: "California counties served" },
      { n: "4.9★", l: "Google rating · 1,247 reviews" },
    ],

    marquee: [
      "CSLB C-46 LICENSED",
      "NABCEP CERTIFIED",
      "TIER-1 PANELS ONLY",
      "25-YEAR WARRANTY",
      "ITC FILED FOR YOU",
      "NEM 3.0 OPTIMIZED",
      "3,400+ ROOFTOPS",
      "ALL CALIFORNIA IOUs",
    ],

    steps: [
      {
        n: "01",
        t: "Free site survey",
        d: "Designer at your door in 48 hours. Roof measured. Shading checked. Zero charge.",
      },
      {
        n: "02",
        t: "Custom design + quote",
        d: "Right-sized for your usage. ITC modeled in writing — not promised verbally.",
      },
      {
        n: "03",
        t: "We file every form",
        d: "Permit. Interconnection (NEM 3.0). HOA approval. You sign once.",
      },
      {
        n: "04",
        t: "Install in 2 days",
        d: "REC / Q.CELLS panels. Enphase microinverters. Our own union electricians.",
      },
      {
        n: "05",
        t: "PTO + power-on",
        d: "Utility inspection done. Permission to Operate issued. App live. You start exporting.",
      },
      {
        n: "06",
        t: "25-year service",
        d: "Annual cleaning. Performance reports. SMS answered by a human, not a bot.",
      },
    ],

    timeline: [
      { d: "Day 0", t: "You book", s: "Online or text. Two clicks.", icon: "book" },
      { d: "Day 1–2", t: "Site survey", s: "Designer, drone shot, structural check.", icon: "survey" },
      { d: "Day 3", t: "Quote locked", s: "ITC + NEM 3.0 modeled in writing.", icon: "quote" },
      { d: "Day 4–7", t: "Permits filed", s: "City permit + utility interconnection.", icon: "forms" },
      { d: "Day 10–14", t: "Install", s: "Panels, microinverters, conduit.", icon: "install" },
      { d: "Day 15–17", t: "City inspection", s: "Building dept signs off.", icon: "inspect" },
      { d: "Day 18–21", t: "Permission to Operate", s: "Utility flips the switch. You export.", icon: "poweron" },
      { d: "Tax season", t: "ITC claimed", s: "IRS Form 5695 dropped into your return.", icon: "money" },
    ],

    reasons: [
      {
        t: "Local designers",
        d: "English- and Spanish-speaking team, based in Los Angeles. We're not a call-center reselling to subcontractors.",
      },
      {
        t: "Every California IOU",
        d: "PG&E, SCE, SDG&E, plus SMUD and LADWP. We know each utility's interconnection portal cold.",
      },
      {
        t: "Tier-1 panels only",
        d: "REC, Q.CELLS, Panasonic, Silfab. We never use the cheap unbranded modules that fail in 5 years.",
      },
      {
        t: "Honest pricing",
        d: 'One quote, written. No "site adders" later. The price you see includes permits, install, and the ITC paperwork.',
      },
    ],

    citiesOnMap: [
      { x: 22, y: 28, name: "Sacramento" },
      { x: 18, y: 38, name: "San Francisco" },
      { x: 22, y: 44, name: "San Jose" },
      { x: 28, y: 55, name: "Fresno" },
      { x: 36, y: 65, name: "Bakersfield" },
      { x: 48, y: 75, name: "Los Angeles" },
      { x: 52, y: 80, name: "Long Beach" },
      { x: 62, y: 85, name: "San Diego" },
      { x: 42, y: 70, name: "Riverside" },
    ],

    faqs: [
      {
        q: "How long does installation actually take?",
        a: "From the day you book the site visit to Permission to Operate, typically 18–21 days. The installation itself takes 2 days; the rest is permit + utility interconnection scheduling, which we handle.",
        category: "general",
      },
      {
        q: "What if my roof is shaded or oddly shaped?",
        a: "We use a drone survey for any roof above 5 kW. Bifacial panels, microinverters, and tilted mounts all help — our designer will lay out around the shading on the spot.",
        category: "general",
      },
      {
        q: "Does the federal tax credit really work the way you describe?",
        a: "Yes — it's a 30% dollar-for-dollar credit on your federal taxes, claimed on IRS Form 5695 for the year your system is placed in service. We hand you the worksheet at commissioning.",
        category: "subsidy",
      },
      {
        q: "What happens during a PSPS event or outage?",
        a: "A standard grid-tied system shuts off (UL 1741-SA safety regulation). For uninterrupted power, choose the Hybrid + Battery package — it islands your home and keeps essentials running.",
        category: "general",
      },
      {
        q: "What if I sell the house?",
        a: "The system stays with the property and adds 4–6% to resale value on average (Zillow data). Warranty transfers to the new owner. We handle the utility account name change.",
        category: "service",
      },
      {
        q: "Do you serve all of California?",
        a: "Every PG&E, SCE, SDG&E, SMUD and LADWP zip code. We have installation crews in Los Angeles, San Diego, San Jose, Sacramento and Fresno covering surrounding areas.",
        category: "service",
      },
      {
        q: "How does financing work?",
        a: "We're partnered with Mosaic, Sunlight Financial and GoodLeap for solar loans. 15- or 25-year tenure, ~7.99% APR, no liens, $0 down options available.",
        category: "calc",
      },
    ],
  },

  // ============================================================
  // Copy snippets — California-specific phrasing
  // ============================================================
  copy: {
    regionName: "California",
    regionLong: "California, USA",
    regionPossessive: "California's",
    serviceArea: "every California IOU territory",
    districtCount: 23,
    districtWord: "county",
    districtWordPlural: "counties",
    utilityShort: "PG&E / SCE / SDG&E",
    utilityLong: "California IOUs + SMUD + LADWP",
    greeting: "Welcome.",
    scriptFamilies: [],
    installDays: "21 days",
    defaultBill: 280,
    panelsCallout: "REC, Q.CELLS, Panasonic, Silfab",
    footerTagline: "Designed in Los Angeles · ☀️ California",
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

  // i18n — US market ships English + Spanish
  locales: ["en", "es"] as const,
  defaultLocale: "en",
  localeNames: { en: "English", es: "Español" },
  ogLocaleByLang: { en: "en_US", es: "es_US" },
  primaryLocale: "en_US",
  hreflang: {
    primary: "en-US",
    alternates: ["es-US", "x-default"],
  },

  aiPolicy: {
    allowTraining: false,
    allowCitation: true,
    contact: "hello@goldenstatesolar.com",
  },
}
