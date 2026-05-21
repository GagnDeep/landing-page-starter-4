import { marqueeItems } from "@/content/marquee"

export function TrustMarquee() {
  const dup = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {dup.map((it, i) => (
          <span key={i}>
            <span className="star">✦</span> {it}
          </span>
        ))}
      </div>
    </div>
  )
}
