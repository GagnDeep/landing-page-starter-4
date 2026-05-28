"use client"

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Icon } from "@/components/primitives/icon"
import {
  compute,
  REGION_CITIES,
  type CalcInput,
  type CalcResult,
  type CustomerType,
} from "@/lib/calculator"
import { whatsappLink, site } from "@/lib/config/site.config"
import { formatMoney, formatMoneyCompact } from "@/lib/format"
import { ProgressDots } from "./progress-dots"
import { BillCompareChart } from "./bill-compare-chart"
import { HouseIcon, FarmIcon, ShopIcon } from "./icons"

type StepName =
  | "bill"
  | "type"
  | "roof"
  | "city"
  | "results"
  | "package"
  | "booking"
  | "done"

interface PkgChoice {
  id: string
  label: string
  sub: string
  brand: string
  inverter: string
  delta: number
  perks: string[]
  featured: boolean
}

interface BookingForm {
  name: string
  phone: string
  email: string
  address: string
  date: string
  slot: "Morning" | "Afternoon" | "Evening"
}

interface Props {
  initial?: Partial<CalcInput>
  variant?: "modal" | "inline"
  onClose?: () => void
}

export function CalculatorFlow({
  initial,
  variant = "inline",
  onClose,
}: Props) {
  const t = useTranslations("calculator")
  const search = useSearchParams()
  const router = useRouter()

  const initBill = Number(search.get("bill")) || initial?.bill || site.copy.defaultBill
  const initType = (search.get("type") || initial?.type || "Home") as CustomerType
  const initCity =
    search.get("city") || initial?.city || site.content.districts[0]?.name || site.address.locality
  const initRoof = initial?.roof ?? 600

  const hasPrefill = search.has("bill") && search.has("type")
  const [stepName, setStepName] = useState<StepName>(hasPrefill ? "roof" : "bill")
  const [data, setData] = useState<CalcInput>({
    bill: initBill,
    type: initType,
    roof: initRoof,
    city: initCity,
  })
  const [pkg, setPkg] = useState<PkgChoice | null>(null)
  const [form, setForm] = useState<BookingForm | null>(null)

  const STEPS: StepName[] = [
    "bill",
    "type",
    "roof",
    "city",
    "results",
    "package",
    "booking",
    "done",
  ]
  const stepIndex = STEPS.indexOf(stepName)
  const visualSteps = 4
  const results = useMemo(() => compute(data), [data])

  useEffect(() => {
    if (variant === "modal") {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [variant])

  const goNext = () => {
    const map: Partial<Record<StepName, StepName>> = {
      bill: "type",
      type: "roof",
      roof: "city",
      city: "results",
      results: "package",
    }
    const next = map[stepName]
    if (next) setStepName(next)
  }
  const goBack = () => {
    const map: Partial<Record<StepName, StepName>> = {
      type: "bill",
      roof: "type",
      city: "roof",
      results: "city",
      package: "results",
      booking: "package",
    }
    const prev = map[stepName]
    if (prev) setStepName(prev)
    else if (variant === "modal" && onClose) onClose()
  }

  const submitBooking = async (f: BookingForm) => {
    const ref = "PSL-" + Math.random().toString(36).slice(2, 8).toUpperCase()
    const payload = { form: f, data, results, pkg, ref, ts: Date.now() }
    try {
      sessionStorage.setItem("psl-quote", JSON.stringify(payload))
    } catch {}
    const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } catch {
        // network may fail in dev; carry on regardless
      }
    } else {
      await new Promise((r) => setTimeout(r, 800))
    }
    setForm(f)
    if (variant === "inline") {
      router.push("/thanks/")
    } else {
      setStepName("done")
    }
  }

  const STEP_TITLES: Record<StepName, { sup?: string; t?: string }> = {
    bill: { sup: t("step1Sup"), t: t("step1Title") },
    type: { sup: t("step2Sup"), t: t("step2Title") },
    roof: { sup: t("step3Sup"), t: t("step3Title") },
    city: { sup: t("step4Sup"), t: t("step4Title") },
    results: { sup: t("stepResultsSup"), t: t("stepResultsTitle") },
    package: { sup: t("stepPackageSup"), t: t("stepPackageTitle") },
    booking: { sup: t("stepBookingSup"), t: t("stepBookingTitle") },
    done: {},
  }
  const meta = STEP_TITLES[stepName]
  const isQuestion = ["bill", "type", "roof", "city"].includes(stepName)
  const showFooter = stepName !== "done" && stepName !== "booking"

  const inner = (
    <>
      <header className="calc-header-friendly">
        <div className="calc-brand mono">{t("brand")}</div>
        {stepIndex < visualSteps && (
          <ProgressDots step={stepIndex} total={visualSteps} />
        )}
        {variant === "modal" && (
          <button
            className="calc-close"
            onClick={onClose}
            aria-label={t("close")}
          >
            ✕
          </button>
        )}
      </header>

      {meta.t && (
        <div className="step-head">
          {meta.sup && <div className="step-sup mono">{meta.sup}</div>}
          <h2 className="display step-title">{meta.t}</h2>
        </div>
      )}

      <div className="calc-body">
        {stepName === "bill" && <BillStep data={data} setData={setData} />}
        {stepName === "type" && <TypeStep data={data} setData={setData} />}
        {stepName === "roof" && <RoofStep data={data} setData={setData} />}
        {stepName === "city" && <CityStep data={data} setData={setData} />}
        {stepName === "results" && (
          <ResultsStep
            data={data}
            results={results}
            onContinue={() => setStepName("package")}
          />
        )}
        {stepName === "package" && (
          <PackagesStep
            results={results}
            onPick={(p) => {
              setPkg(p)
              setStepName("booking")
            }}
          />
        )}
        {stepName === "booking" && pkg && (
          <BookingStep
            data={data}
            results={results}
            pkg={pkg}
            onSubmit={submitBooking}
          />
        )}
        {stepName === "done" && form && pkg && (
          <DoneStep results={results} pkg={pkg} form={form} />
        )}
      </div>

      {showFooter && (
        <footer className="calc-footer">
          <button className="btn btn-ghost" onClick={goBack}>
            {stepName === "bill" ? t("cancel") : `← ${t("back")}`}
          </button>
          {isQuestion && (
            <button className="btn btn-primary btn-lg" onClick={goNext}>
              {stepName === "city" ? t("showSavings") : t("next")}{" "}
              <Icon.arrow />
            </button>
          )}
        </footer>
      )}
    </>
  )

  if (variant === "modal") {
    return (
      <div
        className="calc-overlay"
        role="dialog"
        aria-label="Solar calculator"
      >
        <div className="calc-panel">{inner}</div>
      </div>
    )
  }
  return <div className="calc-inline">{inner}</div>
}

/* ---------- steps ---------- */

interface StepProps {
  data: CalcInput
  setData: (d: CalcInput) => void
}

function BillStep({ data, setData }: StepProps) {
  const t = useTranslations("calculator")
  const defaultBill = site.copy.defaultBill
  // Spread presets symmetrically around the market's typical bill so they map
  // to "small / average / large / extra-large" regardless of currency scale.
  const presets = [
    {
      v: Math.round(defaultBill * 0.35),
      label: `Around ${formatMoney(Math.round(defaultBill * 0.35))}`,
      note: "small flat",
    },
    {
      v: defaultBill,
      label: `Around ${formatMoney(defaultBill)}`,
      note: "average home",
    },
    {
      v: Math.round(defaultBill * 1.5),
      label: `Around ${formatMoney(Math.round(defaultBill * 1.5))}`,
      note: "AC running hard",
    },
    {
      v: Math.round(defaultBill * 2.5),
      label: `${formatMoney(Math.round(defaultBill * 2.5))}+`,
      note: "large home / shop",
    },
  ]
  const minBill = site.currency.useLakh ? 500 : 50
  const maxBill = site.currency.useLakh ? 25000 : 800
  const stepBill = site.currency.useLakh ? 250 : 10
  return (
    <div className="step-body">
      <p className="step-help">{t("billHelp")}</p>
      <div className="bill-presets">
        {presets.map((p) => (
          <button
            key={p.v}
            className={
              "bill-preset " +
              (Math.abs(data.bill - p.v) < 800 ? "active" : "")
            }
            onClick={() => setData({ ...data, bill: p.v })}
          >
            <div className="bp-label">{p.label}</div>
            <div className="bp-note">{p.note}</div>
          </button>
        ))}
      </div>
      <div className="bill-finetune">
        <div className="ft-head">
          <span className="label">{t("billExact")}</span>
          <span className="serif ft-num">{formatMoney(data.bill)}</span>
        </div>
        <input
          type="range"
          min={minBill}
          max={maxBill}
          step={stepBill}
          value={data.bill}
          aria-label={t("billExact")}
          aria-valuetext={formatMoney(data.bill)}
          aria-valuemin={minBill}
          aria-valuemax={maxBill}
          aria-valuenow={data.bill}
          onChange={(e) =>
            setData({ ...data, bill: Number(e.target.value) })
          }
          className="bill-range"
        />
        <div className="bill-range-marks mono">
          <span>{formatMoneyCompact(minBill)}</span>
          <span>{formatMoneyCompact(Math.round((minBill + maxBill) / 2))}</span>
          <span>{formatMoneyCompact(maxBill)}</span>
        </div>
      </div>
    </div>
  )
}

function TypeStep({ data, setData }: StepProps) {
  const t = useTranslations("calculator")
  const opts: { v: CustomerType; t: string; sub: string; icon: ReactNode }[] = [
    { v: "Home", t: "Homeowner", sub: "House, flat or kothi", icon: <HouseIcon /> },
    { v: "Farm", t: "Farmer", sub: "Tube well, pump set", icon: <FarmIcon /> },
    { v: "Business", t: "Business", sub: "Shop, factory, office", icon: <ShopIcon /> },
  ]
  return (
    <div className="step-body">
      <p className="step-help">{t("typeHelp")}</p>
      <div className="tile-choice">
        {opts.map((o) => (
          <button
            key={o.v}
            className={"tile " + (data.type === o.v ? "active" : "")}
            onClick={() => setData({ ...data, type: o.v })}
          >
            <div className="tile-icon" aria-hidden="true">
              {o.icon}
            </div>
            <div className="tile-label">{o.t}</div>
            {o.sub && <div className="tile-sub">{o.sub}</div>}
          </button>
        ))}
      </div>
    </div>
  )
}

function RoofStep({ data, setData }: StepProps) {
  const t = useTranslations("calculator")
  const cards = [
    { v: 300, label: "Small", sub: "Apartment terrace, ~300 sq ft" },
    { v: 600, label: "Medium", sub: "Typical 1-floor home, ~600 sq ft" },
    { v: 1200, label: "Large", sub: "Big roof, ~1,200 sq ft" },
    { v: 0, label: "I'll measure later", sub: "We'll figure it out at the site visit" },
  ]
  return (
    <div className="step-body">
      <p className="step-help">{t("roofHelp")}</p>
      <div className="roof-grid">
        {cards.map((c) => (
          <button
            key={c.label}
            className={"roof-card " + (data.roof === c.v ? "active" : "")}
            onClick={() => setData({ ...data, roof: c.v })}
          >
            <div className="serif rc-label">{c.label}</div>
            <div className="rc-sub">{c.sub}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

function CityStep({ data, setData }: StepProps) {
  const t = useTranslations("calculator")
  const popular = site.content.districts.slice(0, 6).map((d) => d.name)
  return (
    <div className="step-body">
      <p className="step-help">{t("cityHelp")}</p>
      <div className="city-pills">
        {popular.map((c) => (
          <button
            key={c}
            className={"city-pill " + (data.city === c ? "active" : "")}
            onClick={() => setData({ ...data, city: c })}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="city-other">
        <label className="label">{t("cityOther")}</label>
        <select
          className="select"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        >
          {REGION_CITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

function ResultsStep({
  data,
  results,
  onContinue,
}: {
  data: CalcInput
  results: CalcResult
  onContinue: () => void
}) {
  const t = useTranslations("calculator")
  return (
    <div className="step-body results-friendly">
      <div className="results-headline">
        <span className="results-eyebrow mono">{t("resultsEyebrow")}</span>
        <h3 className="display results-h">
          <span
            dangerouslySetInnerHTML={{
              __html: t("resultsTitle1", { kw: results.sysKw }),
            }}
          />
          <br />
          <span
            dangerouslySetInnerHTML={{
              __html: t("resultsTitle2", {
                savings: results.monthlySavings.toLocaleString(
                  site.currency.locale,
                ),
              }),
            }}
          />
        </h3>
      </div>

      <BillCompareChart data={data} results={results} />

      <div className="results-summary">
        <div className="rs-row">
          <div className="rs-pair">
            <span className="rs-k">{t("billToday")}</span>
            <span className="rs-v">{formatMoney(data.bill)}</span>
          </div>
          <div className="rs-arrow" aria-hidden="true">
            →
          </div>
          <div className="rs-pair rs-pair-hi">
            <span className="rs-k">{t("withSolar")}</span>
            <span className="rs-v">{formatMoney(results.newBill)}</span>
          </div>
        </div>

        <div className="rs-meta">
          <div className="rs-meta-cell">
            <span className="rs-meta-num serif">
              {results.payback}
              <i>yrs</i>
            </span>
            <span className="rs-meta-lbl">{t("paybackLabel")}</span>
          </div>
          <div className="rs-meta-cell">
            <span className="rs-meta-num serif">
              {formatMoneyCompact(results.lifetimeSavings)}
            </span>
            <span className="rs-meta-lbl">{t("lifetimeLabel")}</span>
          </div>
          <div className="rs-meta-cell">
            <span className="rs-meta-num serif">
              {(results.co2 / 1000).toFixed(1)}
              <i>t</i>
            </span>
            <span className="rs-meta-lbl">{t("co2Label")}</span>
          </div>
        </div>
      </div>

      {data.type === "Home" && results.subsidy > 0 && (
        <div className="cost-strip">
          <div className="cost-line">
            <span>{t("systemCost")}</span>
            <span className="mono">{formatMoney(results.grossCost)}</span>
          </div>
          <div className="cost-line neg">
            <span>
              {t("subsidyLine")}{" "}
              <span className="tag gold mono">{t("weFileIt")}</span>
            </span>
            <span className="mono">– {formatMoney(results.subsidy)}</span>
          </div>
          <div className="cost-line total">
            <span className="serif">{t("youPay")}</span>
            <span className="serif total-num">{formatMoney(results.net)}</span>
          </div>
          <div className="cost-line emi">
            <span>{t("emiLine")}</span>
            <span className="mono">{formatMoney(results.emi)} / mo</span>
          </div>
        </div>
      )}

      <button
        className="btn btn-primary btn-lg results-cta"
        onClick={onContinue}
      >
        {t("pickPackage")} <Icon.arrow />
      </button>
      <div className="results-foot mono">{t("resultsFoot")}</div>
    </div>
  )
}

function PackagesStep({
  results,
  onPick,
}: {
  results: CalcResult
  onPick: (p: PkgChoice) => void
}) {
  const t = useTranslations("calculator")
  // Driven by the active market preset so swapping markets reshapes the lineup.
  const m = site.content.packages
  const packages: PkgChoice[] = [
    {
      id: "essential",
      label: m[0]?.name ?? "Essential",
      sub: m[0]?.sub ?? "Best value",
      brand: m[0]?.panels ?? "Tier-1 mono",
      inverter: m[0]?.inverter ?? "String inverter",
      delta: 0,
      perks: [
        "Tier-1 panels",
        m[0]?.warranty ?? "Long-term warranty",
        "App monitoring",
      ],
      featured: false,
    },
    {
      id: "premium",
      label: m[1]?.name ?? "Premium",
      sub: m[1]?.sub ?? "Most popular",
      brand: m[1]?.panels ?? "Bifacial panels",
      inverter: m[1]?.inverter ?? "Smart inverter",
      delta: Math.round(results.grossCost * 0.12),
      perks: [
        "Bifacial / TOPCon panels",
        "+8% generation",
        "Smart app + alerts",
        "Priority service",
      ],
      featured: true,
    },
    {
      id: "battery",
      label: m[2]?.name ?? "Hybrid + Battery",
      sub: m[2]?.sub ?? "Outage-proof",
      brand: m[2]?.panels ?? "Bifacial panels",
      inverter: m[2]?.inverter ?? "Hybrid + battery",
      delta: Math.round(results.grossCost * 0.55),
      perks: [
        "Everything in Premium",
        "Whole-home battery backup",
        "Runs through outages",
        "Off-grid capable",
      ],
      featured: false,
    },
  ]
  return (
    <div className="step-body">
      <p className="step-help">{t("packagesHelp", { kw: results.sysKw })}</p>
      <div className="packages-friendly">
        {packages.map((p) => (
          <button
            key={p.id}
            className={"pkgf " + (p.featured ? "is-featured" : "")}
            onClick={() => onPick(p)}
          >
            {p.featured && (
              <span className="pkgf-badge mono">Most chosen</span>
            )}
            <div className="pkgf-head">
              <span className="serif pkgf-name">{p.label}</span>
              <span className="pkgf-sub">{p.sub}</span>
            </div>
            <ul className="pkgf-perks">
              {p.perks.map((perk) => (
                <li key={perk}>
                  <Icon.check /> {perk}
                </li>
              ))}
            </ul>
            <div className="pkgf-foot">
              <div className="pkgf-spec mono">
                <div>{p.brand}</div>
                <div>{p.inverter}</div>
              </div>
              <div className="pkgf-price">
                <span className="mono small">{t("youPaySmall")}</span>
                <span className="serif price">
                  {formatMoney(results.net + p.delta)}
                </span>
              </div>
            </div>
            <span className="pkgf-cta mono">
              {t("chooseThis")} <Icon.arrow />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function BookingStep({
  data,
  results,
  pkg,
  onSubmit,
}: {
  data: CalcInput
  results: CalcResult
  pkg: PkgChoice
  onSubmit: (f: BookingForm) => void
}) {
  const t = useTranslations("calculator")
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    slot: "Morning",
  })
  const [submitting, setSubmitting] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const errors = {
    name: !form.name ? "Please add your name" : "",
    phone: form.phone.length < 10 ? "Enter a 10-digit phone number" : "",
    address: !form.address ? "Add a service address" : "",
  }
  const valid = !errors.name && !errors.phone && !errors.address

  const handleSubmit = async () => {
    if (submitting) return
    if (!valid) {
      setTouched({ name: true, phone: true, address: true })
      return
    }
    setSubmitting(true)
    await onSubmit(form)
    setSubmitting(false)
  }

  return (
    <div className="step-body booking-friendly">
      <div className="bf-grid">
        <div className="bf-form">
          <p className="step-help">{t("bookHelp")}</p>
          <div className="form-grid">
            <div className="field">
              <label className="label" htmlFor="bk-name">
                {t("fieldName")} <span aria-hidden="true" className="req">*</span>
              </label>
              <input
                id="bk-name"
                name="name"
                type="text"
                autoComplete="name"
                className="input"
                placeholder="Alex Morales"
                value={form.name}
                required
                aria-required="true"
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={touched.name && errors.name ? "bk-name-err" : undefined}
                onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {touched.name && errors.name && (
                <p id="bk-name-err" className="field-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="bk-phone">
                {t("fieldPhone")} <span aria-hidden="true" className="req">*</span>
              </label>
              <input
                id="bk-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="input"
                placeholder="(310) 555-0142"
                value={form.phone}
                inputMode="tel"
                required
                aria-required="true"
                aria-invalid={touched.phone && !!errors.phone}
                aria-describedby={touched.phone && errors.phone ? "bk-phone-err" : undefined}
                onBlur={() => setTouched((s) => ({ ...s, phone: true }))}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
              />
              {touched.phone && errors.phone && (
                <p id="bk-phone-err" className="field-error" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="field full">
              <label className="label" htmlFor="bk-address">
                {t("fieldAddress")} <span aria-hidden="true" className="req">*</span>
              </label>
              <input
                id="bk-address"
                name="address"
                type="text"
                autoComplete="street-address"
                className="input"
                placeholder="Street, city, ZIP"
                value={form.address}
                required
                aria-required="true"
                aria-invalid={touched.address && !!errors.address}
                aria-describedby={touched.address && errors.address ? "bk-addr-err" : undefined}
                onBlur={() => setTouched((s) => ({ ...s, address: true }))}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />
              {touched.address && errors.address && (
                <p id="bk-addr-err" className="field-error" role="alert">
                  {errors.address}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="bk-date">{t("fieldDate")}</label>
              <input
                id="bk-date"
                name="date"
                className="input"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div className="seg-field">
              <label className="label" id="bk-slot-label">{t("fieldSlot")}</label>
              <div className="seg seg-lg" role="radiogroup" aria-labelledby="bk-slot-label">
                {(["Morning", "Afternoon", "Evening"] as const).map((s) => (
                  <button
                    key={s}
                    role="radio"
                    aria-checked={form.slot === s}
                    className={form.slot === s ? "active" : ""}
                    onClick={() => setForm({ ...form, slot: s })}
                  >
                    {t(s.toLowerCase() as "morning" | "afternoon" | "evening")}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-lg book-cta"
            disabled={submitting}
            aria-disabled={!valid || submitting}
            onClick={handleSubmit}
          >
            {t("bookCta")} <Icon.arrow />
          </button>
          <div className="book-foot mono">
            <Icon.check /> {t("bookFoot")}
          </div>
        </div>

        <aside className="bf-aside">
          <div className="bf-card">
            <span className="results-eyebrow mono">{t("asideEyebrow")}</span>
            <div className="serif bf-sys">{pkg.label}</div>
            <div className="bf-sub mono">
              {results.sysKw} kW · {data.city}
            </div>

            <div className="bf-rows mono">
              <div>
                <span>{t("asideSystem")}</span>
                <span>{results.sysKw} kW</span>
              </div>
              <div>
                <span>{t("asidePanels")}</span>
                <span>{pkg.brand}</span>
              </div>
              <div>
                <span>{t("asideInverter")}</span>
                <span>{pkg.inverter}</span>
              </div>
              {results.subsidy > 0 && (
                <div>
                  <span>{t("asideSubsidy")}</span>
                  <span>– {formatMoney(results.subsidy)}</span>
                </div>
              )}
              <div className="totalrow">
                <span>{t("asideTotal")}</span>
                <span className="total-num">
                  {formatMoney(results.net + pkg.delta)}
                </span>
              </div>
            </div>
          </div>

          <div className="bf-promise mono">
            <div>
              <Icon.check /> {t("promise1")}
            </div>
            <div>
              <Icon.check /> {t("promise2")}
            </div>
            <div>
              <Icon.check /> {t("promise3")}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function DoneStep({
  results,
  pkg,
  form,
}: {
  results: CalcResult
  pkg: PkgChoice
  form: BookingForm
}) {
  const t = useTranslations("calculator")
  const [ref] = useState(
    () => "PSL-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
  )
  return (
    <div className="step-body done">
      <div className="done-hero">
        <div className="done-tick">
          <svg viewBox="0 0 60 60" width="60" height="60">
            <circle
              cx="30"
              cy="30"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M18 31l8 8 16-18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
          className="display done-title"
          dangerouslySetInnerHTML={{
            __html: t("doneTitle", {
              name: form.name.split(" ")[0] || "friend",
            }),
          }}
        />
        <p className="done-lead">{t("doneLead")}</p>
      </div>
      <div className="done-card card">
        <div className="done-row mono">
          <span>{t("doneRefLabel")}</span>
          <span className="bold">{ref}</span>
        </div>
        <div className="done-row mono">
          <span>{t("doneSysLabel")}</span>
          <span>
            {pkg.label} · {results.sysKw} kW
          </span>
        </div>
        <div className="done-row mono">
          <span>{t("doneVisitLabel")}</span>
          <span>
            {form.date || "Within 48 hrs"} · {form.slot}
          </span>
        </div>
        <div className="done-row mono">
          <span>{t("doneAddressLabel")}</span>
          <span className="addr">{form.address}</span>
        </div>
      </div>
      <div className="done-next">
        <h4 className="mono">{t("doneNextHead")}</h4>
        <ol>
          <li>
            <span className="mono num">01</span> {t("doneNext1")}
          </li>
          <li>
            <span className="mono num">02</span> {t("doneNext2")}
          </li>
          <li>
            <span className="mono num">03</span> {t("doneNext3")}
          </li>
          <li>
            <span className="mono num">04</span> {t("doneNext4")}
          </li>
        </ol>
      </div>
      <a href={whatsappLink()} className="btn btn-gold btn-lg done-cta">
        <Icon.whatsapp /> {t("doneCta")}
      </a>
    </div>
  )
}
