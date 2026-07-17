import * as React from "react"
import { cn } from "@/lib/utils"
import { Breadcrumbs, type BreadcrumbLink } from "@/components/Breadcrumbs"

interface PageHeroProps {
  category?: React.ReactNode
  /** @deprecated Use `category` instead */
  badge?: React.ReactNode
  title: React.ReactNode
  tagline?: React.ReactNode
  description?: React.ReactNode
  breadcrumbs?: BreadcrumbLink[]
  actions?: React.ReactNode
  aside?: React.ReactNode
  className?: string
}

export function PageHero({
  category,
  badge,
  title,
  tagline,
  description,
  breadcrumbs,
  actions,
  aside,
  className,
}: PageHeroProps) {
  const resolvedCategory = category ?? badge
  const intro = aside ?? description

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-[#0b101b] px-5 pb-16 pt-28 text-white section-mobile md:section-tablet md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-40",
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.05),transparent_30%)]" aria-hidden="true" />
      <div className="page-container relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={breadcrumbs}
            className="text-sm font-medium text-white/45 md:text-base"
          />
        )}

        <div
          className={cn(
            "grid gap-10",
            intro ? "mt-8 md:mt-10 md:grid-cols-2 md:gap-14 lg:gap-24" : "mt-8 max-w-3xl"
          )}
        >
          <div>
            {resolvedCategory && (
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                <span className="h-px w-7 bg-white/30" aria-hidden="true" />
                {resolvedCategory}
              </p>
            )}

            <h1
              id="page-hero-heading"
              className={cn(
                "max-w-[15ch] text-balance font-medium leading-[0.98] tracking-[-0.045em] text-white",
                resolvedCategory ? "mt-5" : "",
                "text-[clamp(2.7rem,6.5vw,5.6rem)] md:text-[clamp(3.25rem,5.5vw,5.5rem)]"
              )}
            >
              {title}
            </h1>

            {tagline && (
              <p className="mt-5 max-w-xl text-balance text-[clamp(1.15rem,2.2vw,1.55rem)] font-medium leading-snug tracking-[-0.02em] text-white/80 md:mt-6">
                {tagline}
              </p>
            )}

            {intro && !aside && (
              <p className="mt-7 max-w-xl border-t border-white/15 pt-6 text-base leading-7 text-white/65 md:text-lg md:leading-8">
                {intro}
              </p>
            )}

            {actions && !aside && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {actions}
              </div>
            )}
          </div>

          {intro && aside !== undefined && (
            <div className="md:pt-1">
              {typeof intro === "string" ? (
                <p className="border-t border-white/15 pt-6 text-base leading-7 text-white/65 md:text-lg md:leading-8">
                  {intro}
                </p>
              ) : (
                intro
              )}
              {actions && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {actions}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
