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
  PUNJAB_CITIES,
  type CalcInput,
  type CalcResult,
  type CustomerType,
} from "@/lib/calculator"
import { whatsappLink } from "@/lib/site"
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

  const initBill = Number(search.get("bill")) || initial?.bill || 3500
  const initType = (search.get("type") || initial?.type || "Home") as CustomerType
  const initCity = search.get("city") || initial?.city || "Patiala"
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
  const presets = [
    { v: 1500, label: "Around ₹1,500", note: "small flat" },
    { v: 3500, label: "Around ₹3,500", note: "average home" },
    { v: 6500, label: "Around ₹6,500", note: "AC running" },
    { v: 12000, label: "₹10,000+", note: "large home / shop" },
  ]
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
          <span className="serif ft-num">
            ₹{data.bill.toLocaleString("en-IN")}
          </span>
        </div>
        <input
          type="range"
          min={500}
          max={25000}
          step={250}
          value={data.bill}
          onChange={(e) =>
            setData({ ...data, bill: Number(e.target.value) })
          }
          className="bill-range"
        />
        <div className="bill-range-marks mono">
          <span>₹500</span>
          <span>₹12.5k</span>
          <span>₹25k</span>
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
  const popular = ["Patiala", "Amritsar", "Ludhiana", "Jalandhar", "Bathinda", "Mohali"]
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
          {PUNJAB_CITIES.map((c) => (
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
                savings: results.monthlySavings.toLocaleString("en-IN"),
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
            <span className="rs-v">
              ₹{data.bill.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="rs-arrow" aria-hidden="true">
            →
          </div>
          <div className="rs-pair rs-pair-hi">
            <span className="rs-k">{t("withSolar")}</span>
            <span className="rs-v">
              ₹{results.newBill.toLocaleString("en-IN")}
            </span>
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
              ₹{(results.lifetimeSavings / 100000).toFixed(1)}
              <i>L</i>
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
            <span className="mono">
              ₹{results.grossCost.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="cost-line neg">
            <span>
              {t("subsidyLine")}{" "}
              <span className="tag gold mono">{t("weFileIt")}</span>
            </span>
            <span className="mono">
              – ₹{results.subsidy.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="cost-line total">
            <span className="serif">{t("youPay")}</span>
            <span className="serif total-num">
              ₹{results.net.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="cost-line emi">
            <span>{t("emiLine")}</span>
            <span className="mono">
              ₹{results.emi.toLocaleString("en-IN")} / mo
            </span>
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
  const packages: PkgChoice[] = [
    {
      id: "essential",
      label: "Essential",
      sub: "Best value · Tier-1 mono panels",
      brand: "Waaree / Vikram",
      inverter: "Microtek string",
      delta: 0,
      perks: [
        "Tier-1 panels",
        "10-yr inverter warranty",
        "App monitoring",
      ],
      featured: false,
    },
    {
      id: "premium",
      label: "Premium",
      sub: "What most people pick",
      brand: "Adani / Tata bifacial",
      inverter: "Growatt smart",
      delta: Math.round(results.grossCost * 0.12),
      perks: [
        "Bifacial TOPCon panels",
        "+8% generation",
        "Smart app + alerts",
        "Priority service",
      ],
      featured: true,
    },
    {
      id: "battery",
      label: "Premium + Battery",
      sub: "Power cuts? Solved.",
      brand: "Adani + Luminous Li",
      inverter: "Sungrow hybrid",
      delta: Math.round(results.grossCost * 0.55),
      perks: [
        "Everything in Premium",
        "10 kWh lithium backup",
        "Runs through power cuts",
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
                  ₹{(results.net + p.delta).toLocaleString("en-IN")}
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
  const valid = form.name && form.phone.length >= 10 && form.address

  const handleSubmit = async () => {
    if (!valid || submitting) return
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
              <label className="label">{t("fieldName")}</label>
              <input
                className="input"
                placeholder="Harpreet Singh"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label className="label">{t("fieldPhone")}</label>
              <input
                className="input"
                placeholder="98765 43210"
                value={form.phone}
                inputMode="numeric"
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
              />
            </div>
            <div className="field full">
              <label className="label">{t("fieldAddress")}</label>
              <input
                className="input"
                placeholder="House no., locality, city, PIN"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label className="label">{t("fieldDate")}</label>
              <input
                className="input"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div className="seg-field">
              <label className="label">{t("fieldSlot")}</label>
              <div className="seg seg-lg">
                {(["Morning", "Afternoon", "Evening"] as const).map((s) => (
                  <button
                    key={s}
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
            disabled={!valid || submitting}
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
                  <span>– ₹{results.subsidy.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="totalrow">
                <span>{t("asideTotal")}</span>
                <span className="total-num">
                  ₹{(results.net + pkg.delta).toLocaleString("en-IN")}
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
