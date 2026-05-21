export interface CaseStudy {
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

export const caseStudies: CaseStudy[] = [
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
    body: "Two installers had quoted vague \"site charges\" that would be revealed later. Punjab Solar gave one written number with subsidy applied. Installed in 17 days end-to-end. Harvinder's monthly bill dropped from ₹5,200 to under ₹500.",
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
]

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug)
