"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Icon } from "@/components/primitives/icon"
import { compute, type CustomerType } from "@/lib/calculator"
import { formatMoney, formatMoneyCompact } from "@/lib/format"
import { site } from "@/lib/config/site.config"

interface Props {
  defaultCity?: string
}

export function HeroCalcCard({ defaultCity }: Props) {
  const t = useTranslations("heroCalc")
  const router = useRouter()
  const initialCity =
    defaultCity ?? site.content.districts[0]?.name ?? site.address.locality
  const [bill, setBill] = useState(site.copy.defaultBill)
  const [type, setType] = useState<CustomerType>("Home")

  const result = useMemo(
    () => compute({ bill, type, roof: 600, city: initialCity }),
    [bill, type, initialCity],
  )

  const launch = () => {
    const params = new URLSearchParams({
      bill: String(bill),
      type,
      city: initialCity,
    })
    router.push(`/calculator/?${params.toString()}`)
  }

  // Sensible min/max for the slider based on currency scale.
  const minBill = site.currency.useLakh ? 1000 : 50
  const maxBill = site.currency.useLakh ? 25000 : 800
  const stepBill = site.currency.useLakh ? 500 : 10

  return (
    <div className="hero-calc">
      <div className="hc-top">
        <span className="hc-eyebrow mono">{t("eyebrow")}</span>
        <span className="hc-mini mono">{t("mini")}</span>
      </div>

      <div className="seg hero-seg" role="tablist">
        {(["Home", "Farm", "Business"] as const).map((tt) => (
          <button
            key={tt}
            className={type === tt ? "active" : ""}
            onClick={() => setType(tt)}
          >
            {t(
              `types.${tt.toLowerCase()}` as
                | "types.home"
                | "types.farm"
                | "types.business",
            )}
          </button>
        ))}
      </div>

      <div className="hc-bill">
        <label className="label">{t("billLabel")}</label>
        <div className="bill-row">
          <span className="bill-currency serif">{site.currency.symbol}</span>
          <input
            type="number"
            className="input bill-num"
            value={bill}
            onChange={(e) =>
              setBill(Math.max(minBill, Number(e.target.value) || 0))
            }
            step={stepBill}
          />
        </div>
        <input
          type="range"
          min={minBill}
          max={maxBill}
          step={stepBill}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="bill-range"
          aria-label="Bill slider"
        />
        <div className="bill-range-marks mono">
          <span>{formatMoneyCompact(minBill)}</span>
          <span>{formatMoneyCompact(maxBill)}</span>
        </div>
      </div>

      <div className="hc-headline">
        <div className="hc-h-num serif">
          {formatMoney(result.monthlySavings)}
        </div>
        <div className="hc-h-sub">
          {t("savings")} <strong>{result.sysKw} kW</strong> {t("system")}{" "}
          <strong>{result.payback}</strong> {t("years")}
        </div>
      </div>

      {type === "Home" && result.subsidy > 0 && (
        <div className="hc-subsidy mono">
          <span className="hc-sub-tag">{t("subsidy")}</span>
          <span>
            – {formatMoney(result.subsidy)} {t("off")}
          </span>
        </div>
      )}

      <button
        className="btn btn-primary btn-lg hero-calc-cta"
        onClick={launch}
      >
        {t("cta")} <Icon.arrow />
      </button>
    </div>
  )
}
