interface Props {
  step: number
  total: number
}

export function ProgressDots({ step, total }: Props) {
  return (
    <div className="progress-dots">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={
            "pdot " +
            (i < step ? "done" : i === step ? "current" : "")
          }
        />
      ))}
    </div>
  )
}
