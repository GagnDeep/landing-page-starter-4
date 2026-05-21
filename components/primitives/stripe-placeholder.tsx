interface Props {
  label?: string
  aspect?: string
  className?: string
}

export function StripePlaceholder({
  label = "site photo",
  aspect = "4/3",
  className = "",
}: Props) {
  return (
    <div
      className={"stripe-placeholder " + className}
      style={{ aspectRatio: aspect }}
    >
      <div className="stripe-label mono">{label}</div>
    </div>
  )
}
