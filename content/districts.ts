export interface District {
  slug: string
  name: string
  sunHours: number
  avgBill: number
  popularKw: number
  hero?: string
}

export const districts: District[] = [
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
]

export const getDistrict = (slug: string) =>
  districts.find((d) => d.slug === slug)
