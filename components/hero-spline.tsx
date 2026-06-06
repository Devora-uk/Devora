"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const HERO_SPLINE_SCENE = process.env.NEXT_PUBLIC_HERO_SPLINE_SCENE ?? "loading..."

const Spline = dynamic(() => import("@splinetool/react-spline/next"), {
  ssr: false,
  loading: () => null,
})

function hasUsableScene(scene: string) {
  return scene.startsWith("https://") || scene.endsWith(".splinecode")
}

function SplineFallback() {
  return (
    <div className="relative z-20 h-full min-h-[22rem] md:min-h-[34rem] lg:min-h-[42rem]" aria-hidden="true">
      <div className="absolute left-[18%] top-[18%] h-28 w-28 rounded-full border border-background/20 bg-background/5 shadow-[0_0_80px_oklch(0.5_0.18_28_/_0.3)] md:h-40 md:w-40" />
      <div className="absolute right-[12%] top-[26%] h-44 w-44 rounded-full border border-background/15 bg-background/5 md:h-64 md:w-64" />
      <div className="absolute bottom-[18%] left-[32%] h-36 w-36 rounded-full border border-background/20 bg-accent/20 md:h-52 md:w-52" />
      <div className="absolute inset-x-[18%] top-1/2 h-px bg-background/25" />
      <div className="absolute bottom-[30%] left-[44%] top-[24%] w-px bg-background/20" />
    </div>
  )
}

export function HeroSpline() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldMountSpline, setShouldMountSpline] = useState(false)
  const shouldRenderSpline = hasUsableScene(HERO_SPLINE_SCENE)

  useEffect(() => {
    if (!shouldRenderSpline) return

    const mountSpline = () => setShouldMountSpline(true)

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(mountSpline, { timeout: 2500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(mountSpline, 1500)
    return () => window.clearTimeout(timeoutId)
  }, [shouldRenderSpline])

  return (
    <div className="relative h-full min-h-[22rem] w-full overflow-hidden bg-foreground text-background md:min-h-[34rem] lg:min-h-[42rem]">
      <div className="absolute inset-0 premium-grid opacity-[0.18]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_38%,oklch(0.5_0.18_28_/_0.32),transparent_34%),linear-gradient(135deg,oklch(0.15_0.012_255),oklch(0.22_0.04_255)_62%,oklch(0.5_0.18_28))]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/72 to-transparent md:h-36" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-background to-transparent md:block" aria-hidden="true" />

      {!isLoaded && shouldMountSpline && (
        <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden="true">
          <div className="relative h-36 w-36 rounded-full border border-background/20">
            <span className="absolute inset-4 rounded-full border border-background/15" />
            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/75 blur-2xl" />
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
          </div>
        </div>
      )}

      {shouldMountSpline && shouldRenderSpline ? (
        <Spline
          scene={HERO_SPLINE_SCENE}
          onLoad={() => setIsLoaded(true)}
          className={`relative z-20 h-full min-h-[22rem] w-full transition-opacity duration-700 md:min-h-[34rem] lg:min-h-[42rem] ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <SplineFallback />
      )}
    </div>
  )
}
