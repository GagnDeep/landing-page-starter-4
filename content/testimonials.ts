export interface Testimonial {
  q: string
  who: string
  where: string
  district: string
}

export const testimonials: Testimonial[] = [
  {
    q: "Bill came down from ₹6,800 to ₹420 in the first month. Paperwork took them three weeks, not three months.",
    who: "Ranjit Singh",
    where: "Patiala · 5 kW · installed Jan 2026",
    district: "patiala",
  },
  {
    q: "Tried two other installers — both quoted vague \"site charges\". Punjab Solar gave one number, stuck to it.",
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
]
