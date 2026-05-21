import type { SVGProps } from "react"

type P = SVGProps<SVGSVGElement>

export const Icon = {
  arrow: (p: P) => (
    <svg width="16" height="16" viewBox="0 0 16 16" {...p}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 14 14" {...p}>
      <path
        d="M2.5 7.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  spark: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 14 14" {...p}>
      <path
        d="M7 1v4M7 9v4M1 7h4M9 7h4M3 3l2.5 2.5M8.5 8.5L11 11M3 11l2.5-2.5M8.5 5.5L11 3"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  whatsapp: (p: P) => (
    <svg width="16" height="16" viewBox="0 0 16 16" {...p}>
      <path
        d="M8 1.5a6.5 6.5 0 00-5.6 9.8L1.5 14.5l3.3-.85A6.5 6.5 0 108 1.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M5.5 5.7c.1-.3.3-.3.5-.3h.4c.1 0 .3 0 .4.3l.5 1.2c0 .1.1.2 0 .3l-.3.4c-.1.1-.1.2 0 .3.3.5.7.9 1.2 1.2.1.1.2.1.3 0l.4-.4c.1-.1.2-.1.3 0l1.2.6c.1.1.2.2.2.3 0 .8-.6 1.4-1.4 1.4-1.6 0-3.5-1.9-3.5-3.5 0-.7.4-1.2 0-1.8z"
        fill="currentColor"
      />
    </svg>
  ),
  phone: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 14 14" {...p}>
      <path
        d="M2 3c0-.5.5-1 1-1h2l1 3-1.5 1c.5 1.5 1.5 2.5 3 3l1-1.5 3 1v2c0 .5-.5 1-1 1C5.5 11.5 2 8 2 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  menu: (p: P) => (
    <svg width="18" height="18" viewBox="0 0 18 18" {...p}>
      <path
        d="M2 5h14M2 9h14M2 13h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  close: (p: P) => (
    <svg width="14" height="14" viewBox="0 0 14 14" {...p}>
      <path
        d="M3 3l8 8M11 3l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
}
