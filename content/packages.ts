export interface Tier {
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

export const tiers: Tier[] = [
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
]
