import type { TimelineIconName } from "@/content/timeline"

interface Props {
  name: TimelineIconName
}

export function TimelineIcon({ name }: Props) {
  const paths: Record<TimelineIconName, React.ReactNode> = {
    book: (
      <path d="M4 6c0-1.1.9-2 2-2h10l4 4v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6Zm12 0v3h3M8 13h6M8 17h4" />
    ),
    survey: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" />
      </>
    ),
    quote: (
      <>
        <path d="M5 4h11l4 4v12H5z" />
        <path d="M9 11h7M9 15h5" />
      </>
    ),
    forms: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),
    install: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
    inspect: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.5-4.5" />
      </>
    ),
    poweron: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M22 12h-4M6 12H2M19 5l-3 3M8 16l-3 3M19 19l-3-3M8 8 5 5" />
      </>
    ),
    money: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9c0-1.5-1.3-2-3-2s-3 .8-3 2 1 1.8 3 2.2c2 .4 3 1 3 2.3s-1.5 2-3 2-3-.6-3-2M12 6v2M12 16v2" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}
