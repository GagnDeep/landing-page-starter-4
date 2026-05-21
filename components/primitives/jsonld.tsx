/**
 * Renders one or more JSON-LD blocks. RSC-safe (no client JS).
 */
export function Jsonld({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[]
}) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  )
}
