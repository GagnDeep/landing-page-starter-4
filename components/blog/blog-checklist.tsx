"use client"

import { useCallback, useMemo, useSyncExternalStore } from "react"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

function storageKey(items: string[]) {
  let h = 0
  for (const s of items.join("|")) {
    h = (h * 31 + s.charCodeAt(0)) | 0
  }
  return `bc-checklist:${h}`
}

function parseSnapshot(raw: string, count: number): boolean[] {
  if (!raw) return new Array(count).fill(false)
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length === count) {
      return parsed.map(Boolean)
    }
  } catch {
    // ignore
  }
  return new Array(count).fill(false)
}

const STORAGE_EVENT = "bc-checklist:update"

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", cb)
  window.addEventListener(STORAGE_EVENT, cb)
  return () => {
    window.removeEventListener("storage", cb)
    window.removeEventListener(STORAGE_EVENT, cb)
  }
}

export function BlogChecklist({ attrs, lines }: Props) {
  const items = useMemo(
    () => lines.map((l) => l.trim()).filter(Boolean),
    [lines],
  )
  const key = useMemo(() => storageKey(items), [items])

  const snapshot = useSyncExternalStore(
    subscribe,
    useCallback(() => {
      return typeof localStorage !== "undefined"
        ? (localStorage.getItem(key) ?? "")
        : ""
    }, [key]),
    () => "",
  )

  const checkedArr = useMemo(
    () => parseSnapshot(snapshot, items.length),
    [snapshot, items.length],
  )

  const toggle = (i: number) => {
    const next = checkedArr.slice()
    next[i] = !next[i]
    try {
      localStorage.setItem(key, JSON.stringify(next))
      window.dispatchEvent(new Event(STORAGE_EVENT))
    } catch {
      // ignore
    }
  }

  if (!items.length) return null
  const done = checkedArr.filter(Boolean).length

  return (
    <section className="bc-checklist" aria-label={attrs.title ?? "Checklist"}>
      <div className="bc-checklist-head">
        <p className="bc-checklist-title">
          {attrs.title ?? "Your checklist"}
        </p>
        <span className="bc-checklist-count mono">
          {done}/{items.length}
        </span>
      </div>
      <ul className="bc-checklist-list">
        {items.map((it, i) => (
          <li className="bc-checklist-item" key={i}>
            <label>
              <input
                type="checkbox"
                checked={checkedArr[i] ?? false}
                onChange={() => toggle(i)}
              />
              <span className={checkedArr[i] ? "is-done" : ""}>{it}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
