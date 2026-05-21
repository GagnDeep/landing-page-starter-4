export interface FAQ {
  q: string
  a: string
  category?: "general" | "subsidy" | "service" | "calc" | "contact"
}

export const faqs: FAQ[] = [
  {
    q: "How long does installation actually take?",
    a: "From the day you book the site visit to power-on, typically 18–21 days. The installation itself takes 2–3 days; the rest is DISCOM paperwork and net-meter scheduling, which we handle.",
    category: "general",
  },
  {
    q: "What if my roof is shaded or oddly shaped?",
    a: "We use a drone survey for any roof above 5 kW. Bifacial panels, microinverters, and tilted mounts all help — our engineer will design around the shading on the spot.",
    category: "general",
  },
  {
    q: "Does the subsidy actually land in my account?",
    a: "Yes — it's a Direct Benefit Transfer to your linked savings account, usually within 30 days of commissioning. We provide the invoice and tracking number.",
    category: "subsidy",
  },
  {
    q: "What happens during a power cut?",
    a: "A standard grid-tied system shuts off (safety regulation). For uninterrupted power, choose the Hybrid + Battery package — it islands your home and keeps essentials running.",
    category: "general",
  },
  {
    q: "What if I sell the house?",
    a: "The system stays with the property and adds 4–6% to resale value on average. Warranty transfers to the new owner. We handle the name change with PSPCL.",
    category: "service",
  },
  {
    q: "Do you serve villages and small towns?",
    a: "Yes — every district in Punjab. We have installation crews in Patiala, Ludhiana, Amritsar, Bathinda and Pathankot covering surrounding areas.",
    category: "service",
  },
  {
    q: "How does EMI work?",
    a: "We're partnered with Tata Capital and Aditya Birla Capital for solar loans. 5-year tenure, ~10.5% reducing, no collateral up to ₹6 lakh. Approval in 48 hours.",
    category: "calc",
  },
]
