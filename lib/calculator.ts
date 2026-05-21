export type CustomerType = "Home" | "Farm" | "Business"

export interface CalcInput {
  bill: number
  type: CustomerType
  roof: number
  city: string
}

export interface CalcResult {
  sysKw: number
  perKw: number
  grossCost: number
  subsidy: number
  net: number
  annualUnits: number
  annualSavings: number
  monthlySavings: number
  newBill: number
  payback: string
  lifetimeSavings: number
  co2: number
  trees: number
  emi: number
}

export function compute(data: CalcInput): CalcResult {
  const tariff = data.type === "Business" ? 8 : data.type === "Farm" ? 6 : 7.5
  const monthlyUnits = data.bill / tariff
  const dailyUnits = monthlyUnits / 30
  const generation = 4.4
  const sysFromBill = dailyUnits / generation
  const sysFromRoof = data.roof > 0 ? data.roof / 80 : 99
  const sysKw = Math.max(
    1,
    Math.round(Math.min(sysFromBill, sysFromRoof) * 2) / 2,
  )

  const perKw =
    data.type === "Business" ? 58000 : data.type === "Farm" ? 55000 : 62000
  const grossCost = sysKw * perKw

  let subsidy = 0
  if (data.type === "Home") {
    if (sysKw <= 2) subsidy = sysKw * 30000
    else if (sysKw <= 3) subsidy = 60000 + (Math.min(sysKw, 3) - 2) * 18000
    else subsidy = 78000
  }
  const net = grossCost - subsidy

  const annualUnits = sysKw * generation * 365
  const annualSavings = Math.round(annualUnits * tariff * 0.92)
  const monthlySavings = Math.round(annualSavings / 12)
  const newBill = Math.max(0, data.bill - monthlySavings)
  const payback = (net / annualSavings).toFixed(1)
  const lifetimeSavings = Math.round(annualSavings * 25 * 1.15)
  const co2 = Math.round(annualUnits * 0.82)
  const trees = Math.round(co2 / 21)
  const emi = Math.round(net * 0.0215)

  return {
    sysKw,
    perKw,
    grossCost,
    subsidy,
    net,
    annualUnits: Math.round(annualUnits),
    annualSavings,
    monthlySavings,
    newBill,
    payback,
    lifetimeSavings,
    co2,
    trees,
    emi,
  }
}

export const PUNJAB_CITIES = [
  "Patiala",
  "Amritsar",
  "Ludhiana",
  "Jalandhar",
  "Bathinda",
  "Mohali",
  "Pathankot",
  "Hoshiarpur",
  "Moga",
  "Firozpur",
  "Kapurthala",
  "Sangrur",
  "Barnala",
  "Mansa",
  "Faridkot",
  "Muktsar",
  "Rupnagar",
  "Fatehgarh Sahib",
  "Gurdaspur",
  "Tarn Taran",
  "Nawanshahr",
  "Fazilka",
  "Khanna",
] as const
