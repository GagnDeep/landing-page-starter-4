"use client"

import { useInView } from "@/hooks/use-in-view"
import { testimonials, type Testimonial } from "@/content/testimonials"

interface Props {
  filter?: string
}

export function Testimonials({ filter }: Props) {
  let items: Testimonial[] = testimonials
  if (filter) {
    const matched = testimonials.filter((t) => t.district === filter)
    items = matched.length ? matched : testimonials
  }
  const [rowRef, rowSeen] = useInView<HTMLDivElement>({ threshold: 0.1, once: true })
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-row" ref={rowRef}>
          {items.map((t, i) => (
            <blockquote key={i} className={`testimonial anim${rowSeen ? " in" : ""}`}>
              <div className="quote-mark serif">&ldquo;</div>
              <p className="quote-text">{t.q}</p>
              <footer>
                <div className="serif who">{t.who}</div>
                <div className="mono where">{t.where}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
