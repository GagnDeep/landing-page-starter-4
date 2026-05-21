import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { DisplayHeading } from "@/components/primitives/display-heading"

interface Props {
  eyebrow: string
  titleHtml: string
  lead?: string
  className?: string
  centered?: boolean
}

export function SectionHead({
  eyebrow,
  titleHtml,
  lead,
  className,
  centered,
}: Props) {
  return (
    <div
      className={cn(
        "section-head",
        centered && "section-head--centered",
        className,
      )}
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <DisplayHeading html={titleHtml} />
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}
