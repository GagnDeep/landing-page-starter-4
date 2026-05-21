"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Icon } from "@/components/primitives/icon"

type Answer = "yes" | "no" | null

export function QuickCheck() {
  const t = useTranslations("quickCheck")
  const [a1, setA1] = useState<Answer>(null)
  const [a2, setA2] = useState<Answer>(null)
  const [a3, setA3] = useState<Answer>(null)

  const allAnswered = a1 && a2 && a3
  const score =
    (a1 === "yes" ? 1 : 0) + (a2 === "yes" ? 1 : 0) + (a3 === "yes" ? 1 : 0)

  const verdict = !allAnswered
    ? null
    : score === 3
      ? {
          t: "Solar is a no-brainer for you.",
          s: "Your bill, roof and intent all line up. Most people in your spot save 80–95% on bills.",
        }
      : score === 2
        ? {
            t: "Solar makes sense for you.",
            s: "Two of three signals are strong. A 5-minute calculator will show your real numbers.",
          }
        : score === 1
          ? {
              t: "Solar can still pay off — let's check.",
              s: "Some indicators are softer. Best to talk to an engineer before deciding.",
            }
          : {
              t: "Solar may not be urgent yet.",
              s: "Honest answer: if your bill is small and roof is shaded, payback gets longer. Worth checking when bills rise.",
            }

  const questions: {
    id: "q1" | "q2" | "q3"
    q: string
    help: string
    val: Answer
    setter: (a: Answer) => void
  }[] = [
    {
      id: "q1",
      q: "Is your monthly bill above ₹2,000?",
      help: "The higher your bill, the faster solar pays back.",
      val: a1,
      setter: setA1,
    },
    {
      id: "q2",
      q: "Do you own (or have permission for) the roof?",
      help: "Tenants need landlord agreement; we can help with the conversation.",
      val: a2,
      setter: setA2,
    },
    {
      id: "q3",
      q: "Does sunlight reach your roof most of the day?",
      help: "Some shade is fine — heavy shading from trees or tall buildings is the only problem.",
      val: a3,
      setter: setA3,
    },
  ]

  return (
    <section className="qcheck">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              className="display qcheck-h"
              dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
            />
          </div>
          <p className="lead">{t("lead")}</p>
        </div>

        <div className="qcheck-grid">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className={"qcheck-q " + (q.val ? "answered" : "")}
            >
              <div className="qcheck-num mono">Q.0{i + 1}</div>
              <div className="qcheck-q-text serif">{q.q}</div>
              <div className="qcheck-help">{q.help}</div>
              <div className="qcheck-answers">
                <button
                  className={q.val === "yes" ? "active" : ""}
                  onClick={() => q.setter("yes")}
                >
                  {t("yes")}
                </button>
                <button
                  className={q.val === "no" ? "active" : ""}
                  onClick={() => q.setter("no")}
                >
                  {t("no")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {verdict && (
          <div className="qcheck-verdict">
            <span className="results-eyebrow mono">
              {t("verdictEyebrow")}
            </span>
            <h3 className="display verdict-h">{verdict.t}</h3>
            <p className="verdict-sub">{verdict.s}</p>
            {score >= 1 && (
              <Link
                href="/calculator"
                className="btn btn-primary btn-lg"
              >
                {t("ctaRun")} <Icon.arrow />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
