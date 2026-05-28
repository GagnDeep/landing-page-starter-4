import { site } from "./config/site.config"

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

/**
 * Market-aware solar calculator.
 * All constants (tariffs, $/kW pricing, sun hours, subsidy, finance terms)
 * come from the active market preset in lib/config/markets/*.
 */
export function compute(data: CalcInput): CalcResult {
  const cal = site.calculator
  const inc = site.incentive

  const tariff = cal.tariffByType[data.type]
  const monthlyUnits = data.bill / tariff
  const dailyUnits = monthlyUnits / 30
  const sysFromBill = dailyUnits / cal.sunHoursPerDay
  const sysFromRoof = data.roof > 0 ? data.roof / cal.sqftPerKw : 99
  const sysKw = Math.max(
    1,
    Math.round(Math.min(sysFromBill, sysFromRoof) * 2) / 2,
  )

  const perKw = cal.perKwByType[data.type]
  const grossCost = sysKw * perKw

  // Subsidy: percentage-of-cost (US ITC) or kw-tiered (Indian PM Surya Ghar).
  let subsidy = 0
  if (data.type === "Home") {
    if (inc.pctOfCost) {
      subsidy = Math.min(grossCost * inc.pctOfCost, inc.max * 4)
    } else if (inc.slabs && inc.slabs.length) {
      const sorted = [...inc.slabs].sort((a, b) => a.kw - b.kw)
      let last = sorted[0]
      for (const slab of sorted) {
        if (sysKw >= slab.kw) last = slab
      }
      subsidy = last.amount
    }
  }

  const net = Math.max(0, grossCost - subsidy)

  const annualUnits = sysKw * cal.sunHoursPerDay * 365
  const annualSavings = Math.round(annualUnits * tariff * 0.92)
  const monthlySavings = Math.round(annualSavings / 12)
  const newBill = Math.max(0, data.bill - monthlySavings)
  const payback = annualSavings > 0 ? (net / annualSavings).toFixed(1) : "—"
  const lifetimeSavings = Math.round(
    annualSavings * cal.lifetimeYears * cal.lifetimeInflator,
  )
  const co2 = Math.round(annualUnits * cal.kgCo2PerKwh)
  const trees = Math.round(co2 / 21)
  const emi = Math.round(net * cal.emiFactor)

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

/** Region/district list from the active market. */
export const REGION_CITIES = site.content.districts.map((d) => d.name)

/** Back-compat alias for legacy imports. */
export const PUNJAB_CITIES = REGION_CITIES
