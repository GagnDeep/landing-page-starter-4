export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  body: string
  author: string
}

export const posts: Post[] = [
  {
    slug: "pm-surya-ghar-walkthrough",
    title: "PM Surya Ghar, walked through end-to-end",
    excerpt:
      "Every form, every checkbox, every screen — what we file on your behalf for the central government's rooftop solar subsidy.",
    date: "2026-01-12",
    author: "Punjab Solar",
    body: `## What is PM Surya Ghar?

The PM Surya Ghar Muft Bijli Yojana is the central government's residential rooftop solar subsidy. For homeowners, it covers up to ₹78,000 of the upfront cost of a system between 1 kW and 10 kW.

## How the subsidy ladder works

- 1 kW system: ₹30,000 subsidy
- 2 kW system: ₹60,000 subsidy
- 3 kW or more: ₹78,000 (the maximum)

We file the National Portal registration, the DISCOM (PSPCL) feasibility application, and the post-install subsidy claim — you sign one consent form and we handle the rest.

## When does the money actually arrive?

The subsidy is a Direct Benefit Transfer to your linked savings account. We've consistently seen it arrive 22–30 days after commissioning. We provide the invoice and tracking number on day 1.

## Common mistakes that delay the claim

1. Linking the wrong bank account on the portal.
2. Submitting an installer quote from a non-empanelled vendor.
3. Skipping the post-install inspection sign-off.

We pre-empt all three for our customers.`,
  },
  {
    slug: "solar-in-punjab-monsoon",
    title: "Does solar work in Punjab's monsoon?",
    excerpt:
      "What four monsoons of generation data tell us about July–September performance for Punjab rooftops.",
    date: "2026-02-04",
    author: "Punjab Solar",
    body: `## The short answer: yes.

Punjab gets ~60–70 cloudy days a year. Even on those days, panels generate 30–60% of their clear-day output thanks to diffuse light. Our customer fleet averages a 14% July dip vs the May peak — and a full recovery by October.

## How we design for monsoon

- TOPCon bifacial panels in our Premium tier — they pick up reflected light off wet roofs, partially offsetting the cloud loss.
- IP65-rated inverters that we keep dry-tested before mounting.
- Tilted mounts that shed water and reduce dust accumulation.

## A real number

Across 6,240 installs, average annual generation is **96.4%** of the design estimate — meaning monsoon barely moves the lifetime payback math.`,
  },
  {
    slug: "shaded-roofs-bifacial",
    title: "Shaded roof? Bifacial panels and microinverters",
    excerpt:
      "Why a partially shaded Punjab roof doesn't have to mean a smaller system.",
    date: "2026-03-18",
    author: "Punjab Solar",
    body: `## Shading is the #1 reason installers under-quote

Most installers see a tree or a water tank and lop 30% off the system size. We don't.

## Two design fixes

**Microinverters.** Each panel runs independently — one shaded panel doesn't drag down the rest of the string.

**Bifacial panels.** They pick up reflected light off the roof and walls, which means even partially-shaded roofs see meaningful generation gains.

## Drone surveys

Any roof above 5 kW gets a drone survey. We map the shading hour by hour, then place panels where the shading is least.`,
  },
  {
    slug: "punjab-tariff-trajectory",
    title: "Punjab tariffs are rising — here's the math",
    excerpt:
      "Domestic tariffs in Punjab have risen ~6% a year. What that means for your 25-year solar payback.",
    date: "2026-04-02",
    author: "Punjab Solar",
    body: `## A boring-sounding number that compounds

PSPCL's domestic tariff has trended up roughly 6% per year over the last decade. That doesn't sound like much — until you compound it across 25 years.

A ₹4,500 monthly bill today, at 6% inflation, is **₹19,300 a month** in year 25.

A solar customer's bill stays close to zero — meaning the gap between "without solar" and "with solar" widens every single year.

## The takeaway

The longer you wait, the more lifetime savings you forfeit. The math is unforgiving.`,
  },
  {
    slug: "battery-backup-when-it-makes-sense",
    title: "Battery backup: when it actually makes sense",
    excerpt:
      "Hybrid + battery costs more upfront. Here's how to decide whether the spend is worth it for your home.",
    date: "2026-04-21",
    author: "Punjab Solar",
    body: `## Battery is not for everyone

Solar without battery (a standard grid-tied system) saves you the most money — and shuts off during a power cut.

A hybrid + battery system runs through power cuts but costs ~55% more.

## The honest test

Ask yourself: how many hours of power cuts did you have last summer? If it's under 2 hours a week, skip the battery. If it's daily, it pays back inside 6 years.

## What we recommend

Most Punjab homes don't need battery. Industrial customers, hospitals, and rural homes with frequent cuts almost always do.`,
  },
  {
    slug: "net-metering-explained",
    title: "Net metering, plainly explained",
    excerpt:
      "How the meter on your wall actually rolls backwards when you export, and what that means for your bill.",
    date: "2026-05-02",
    author: "Punjab Solar",
    body: `## What is net metering?

Your solar system generates more than you use during the day. The extra units flow back into the grid — and your meter literally rolls backwards.

At the end of the month, PSPCL only bills you for the **net** units consumed (units used minus units exported).

## What we file for you

The net-meter agreement is a separate filing from the subsidy. We submit the application alongside the install, schedule the inspection, and stay until the meter is physically swapped.

## What it means in rupees

A typical 5 kW Punjab home exports 30–40% of its generation back to the grid. That export is what takes the bill from ₹500 down to under ₹100.`,
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
