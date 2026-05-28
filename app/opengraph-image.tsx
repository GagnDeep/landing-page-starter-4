import { ImageResponse } from "next/og"
import { site } from "@/lib/config/site.config"

export const dynamic = "force-static"
export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: site.brand.paper,
          color: site.brand.ink,
          padding: 72,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: `radial-gradient(circle at center, ${site.brand.primary} 0%, ${site.brand.primary}88 40%, transparent 70%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            color: site.brand.ink,
            opacity: 0.7,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: site.brand.primary,
            }}
          />
          <span>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 88,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Rooftop solar across {site.copy.regionName}.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: site.brand.ink,
            opacity: 0.7,
            fontFamily: "sans-serif",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Subsidy handled. Panels generating in 21 days.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
            fontSize: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: site.brand.ink,
            opacity: 0.55,
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>{site.incentive.short}</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
