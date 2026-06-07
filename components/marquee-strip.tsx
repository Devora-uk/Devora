"use client"

import { useEffect, useRef, useState } from "react"

const items = [
  "Web Design",
  "Next.js Development",
  "Branding",
  "Local SEO",
  "Conversion Optimisation",
  "Brand Strategy",
  "UI/UX Design",
  "Startup Websites",
  "Digital Identity",
  "Performance Builds",
]

const LOOP_DURATION_MS = 28000

interface MarqueeStripProps {
  theme?: "light" | "dark"
  className?: string
}

function MarqueePills({
  list,
  pillClass,
}: {
  list: string[]
  pillClass: string
}) {
  return (
    <>
      {list.map((item) => (
        <span
          key={item}
          className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] ${pillClass}`}
        >
          <span className="h-1 w-1 rounded-full bg-[#CCFF00]" aria-hidden="true" />
          {item}
        </span>
      ))}
    </>
  )
}

export function MarqueeStrip({ theme = "light", className = "" }: MarqueeStripProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const segmentRef = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  const isDark = theme === "dark"
  const stripBg = isDark ? "border-white/8 bg-[#0F1729]" : "border-[#0A0A0A]/8 bg-[#F0EBE3]"
  const fadeFrom = isDark ? "from-[#0F1729]" : "from-[#F0EBE3]"
  const pillClass = isDark
    ? "border-white/12 bg-white/6 text-white/90"
    : "border-[#0A0A0A]/10 bg-white text-[#0A0A0A]"

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener("change", updateMotionPreference)
    return () => mediaQuery.removeEventListener("change", updateMotionPreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const track = trackRef.current
    const segment = segmentRef.current
    if (!track || !segment) return

    let offset = 0
    let segmentWidth = 0
    let lastTime = performance.now()
    let frameId = 0

    const measure = () => {
      segmentWidth = segment.getBoundingClientRect().width
    }

    measure()

    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(segment)

    const tick = (time: number) => {
      const delta = Math.min(time - lastTime, 32)
      lastTime = time

      if (segmentWidth > 0) {
        const speed = segmentWidth / LOOP_DURATION_MS
        offset -= speed * delta

        if (offset <= -segmentWidth) {
          offset += segmentWidth
        }

        track.style.transform = `translate3d(${offset}px, 0, 0)`
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      track.style.transform = ""
    }
  }, [reducedMotion])

  return (
    <div
      className={`relative overflow-hidden border-t py-3.5 md:py-4 ${stripBg} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r md:w-20 ${fadeFrom} to-transparent`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l md:w-20 ${fadeFrom} to-transparent`}
        aria-hidden="true"
      />

      <div
        ref={trackRef}
        className={`flex w-max gap-3 whitespace-nowrap will-change-transform ${reducedMotion ? "" : "[transform:translate3d(0,0,0)]"}`}
      >
        <div ref={segmentRef} className="flex shrink-0 gap-3">
          <MarqueePills list={items} pillClass={pillClass} />
        </div>
        <div className="flex shrink-0 gap-3" aria-hidden="true">
          <MarqueePills list={items} pillClass={pillClass} />
        </div>
      </div>
    </div>
  )
}
