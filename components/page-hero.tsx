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
        "bg-black px-5 pb-14 pt-28 text-white section-mobile md:section-tablet md:px-8 md:pb-16 md:pt-36 lg:px-10 lg:pb-20 lg:pt-40",
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className="page-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={breadcrumbs}
            className="text-sm font-medium text-white/50 md:text-base"
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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                {resolvedCategory}
              </p>
            )}

            <h1
              id="page-hero-heading"
              className={cn(
                "text-balance font-bold leading-[1.08] tracking-tight text-white",
                resolvedCategory ? "mt-4" : "",
                "text-[clamp(2rem,5vw,3.5rem)] md:text-[clamp(2.25rem,4vw,3.75rem)]"
              )}
            >
              {title}
            </h1>

            {tagline && (
              <p className="mt-4 max-w-xl text-balance text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug tracking-tight text-white md:mt-5">
                {tagline}
              </p>
            )}

            {intro && !aside && (
              <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white md:text-lg md:leading-8">
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
                <p className="text-base font-medium leading-7 text-white md:text-lg md:leading-8">
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
