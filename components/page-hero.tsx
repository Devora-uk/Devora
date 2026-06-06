import * as React from "react"
import { cn } from "@/lib/utils"
import { Breadcrumbs, type BreadcrumbLink } from "@/components/Breadcrumbs"
import { BrandBadge } from "@/components/brand-badge"

interface PageHeroProps {
  badge?: React.ReactNode
  badgeVariant?: "lime" | "cyan" | "pink" | "navy" | "default"
  title: React.ReactNode
  description?: React.ReactNode
  breadcrumbs?: BreadcrumbLink[]
  actions?: React.ReactNode
  aside?: React.ReactNode
  variant?: "cream" | "dark"
  className?: string
}

export function PageHero({
  badge,
  badgeVariant = "lime",
  title,
  description,
  breadcrumbs,
  actions,
  aside,
  variant = "cream",
  className,
}: PageHeroProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={cn(
        "relative overflow-hidden px-5 pb-16 pt-28 section-mobile md:section-tablet md:px-8 md:pb-20 md:pt-36 lg:px-10 lg:pb-24 lg:pt-44",
        isDark ? "section-dark text-white" : "hero-marble-bg text-[#0F1729]",
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className="relative z-10 page-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={breadcrumbs}
            className={cn(
              "text-base font-medium",
              isDark ? "text-muted-light-subtle" : "text-muted-navy-subtle"
            )}
          />
        )}

        <div
          className={cn(
            "grid gap-10",
            aside ? "mt-8 md:mt-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-end" : "mt-8 max-w-3xl"
          )}
        >
          <div>
            {badge && (
              <BrandBadge
                variant={isDark ? "navy" : badgeVariant}
                className={cn("mb-6", isDark && "border-white/10 bg-white/8 text-white")}
              >
                {badge}
              </BrandBadge>
            )}

            <h1
              id="page-hero-heading"
              className={cn(
                "text-balance md:section-heading-tablet",
                aside
                  ? "max-w-5xl text-[clamp(2.1rem,5vw,5.25rem)] font-normal leading-[0.98] tracking-[-0.04em]"
                  : "text-[clamp(2.1rem,5vw,5.25rem)] font-normal leading-[0.98] tracking-[-0.04em]"
              )}
            >
              {title}
            </h1>

            {description && !aside && (
              <p
                className={cn(
                  "mt-6 max-w-xl text-base leading-7 md:text-lg md:leading-8",
                  isDark ? "text-muted-light" : "text-muted-navy"
                )}
              >
                {description}
              </p>
            )}

            {actions && !aside && <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">{actions}</div>}
          </div>

          {aside && (
            <div
              className={cn(
                "md:border-l md:pl-6 lg:pl-8",
                isDark ? "border-white/20" : "border-[#0F1729]/15"
              )}
            >
              {typeof aside === "string" ? (
                <p
                  className={cn(
                    "text-base leading-7 md:text-lg md:leading-8",
                    isDark ? "text-white/75" : "text-[#0F1729]/65"
                  )}
                >
                  {aside}
                </p>
              ) : (
                aside
              )}
              {actions && <div className="mt-7 flex flex-col gap-3 md:flex-row lg:flex-col xl:flex-row">{actions}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
