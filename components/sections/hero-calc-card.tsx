"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Icon } from "@/components/primitives/icon"
import { compute, type CustomerType } from "@/lib/calculator"

interface Props {
  defaultCity?: string
}

export function HeroCalcCard({ defaultCity = "Patiala" }: Props) {
  const t = useTranslations("heroCalc")
  const router = useRouter()
  const [bill, setBill] = useState(4500)
  const [type, setType] = useState<CustomerType>("Home")

  const result = useMemo(
    () => compute({ bill, type, roof: 600, city: defaultCity }),
    [bill, type, defaultCity],
  )

  const launch = () => {
    const params = new URLSearchParams({
      bill: String(bill),
      type,
      city: defaultCity,
    })
    router.push(`/calculator/?${params.toString()}`)
  }

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
            {t(`types.${tt.toLowerCase()}` as "types.home" | "types.farm" | "types.business")}
          </button>
        ))}
      </div>

      <div className="hc-bill">
        <label className="label">{t("billLabel")}</label>
        <div className="bill-row">
          <span className="bill-currency serif">₹</span>
          <input
            type="number"
            className="input bill-num"
            value={bill}
            onChange={(e) =>
              setBill(Math.max(500, Number(e.target.value) || 0))
            }
            step={500}
          />
        </div>
        <input
          type="range"
          min={1000}
          max={25000}
          step={500}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="bill-range"
          aria-label="Bill slider"
        />
        <div className="bill-range-marks mono">
          <span>₹1k</span>
          <span>₹25k</span>
        </div>
      </div>

      <div className="hc-headline">
        <div className="hc-h-num serif">
          ₹{result.monthlySavings.toLocaleString("en-IN")}
        </div>
        <div className="hc-h-sub">
          {t("savings")} <strong>{result.sysKw} kW</strong> {t("system")}{" "}
          <strong>{result.payback}</strong> {t("years")}
        </div>
      </div>

      {type === "Home" && result.subsidy > 0 && (
        <div className="hc-subsidy mono">
          <span className="hc-sub-tag">{t("subsidy")}</span>
          <span>– ₹{result.subsidy.toLocaleString("en-IN")} {t("off")}</span>
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
