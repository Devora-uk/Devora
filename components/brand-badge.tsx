import * as React from "react"
import { cn } from "@/lib/utils"

export type BrandBadgeVariant = "lime" | "cyan" | "pink" | "navy" | "default"

interface BrandBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BrandBadgeVariant
  showDot?: boolean
  children: React.ReactNode
}

export function BrandBadge({
  variant = "default",
  showDot = true,
  children,
  className,
  ...props
}: BrandBadgeProps) {
  const getColors = () => {
    switch (variant) {
      case "lime":
      case "default":
        return {
          bg: "bg-[color-mix(in_oklab,var(--lime)_14%,var(--background))] border border-[color-mix(in_oklab,var(--lime)_30%,var(--border))]",
          dot: "bg-[var(--lime)]",
          text: "text-[var(--navy)]",
        }
      case "cyan":
        return {
          bg: "bg-[color-mix(in_oklab,var(--cyan)_12%,var(--background))] border border-[color-mix(in_oklab,var(--cyan)_22%,var(--border))]",
          dot: "bg-[var(--cyan)]",
          text: "text-[var(--navy)]",
        }
      case "pink":
        return {
          bg: "bg-[color-mix(in_oklab,var(--pink)_12%,var(--background))] border border-[color-mix(in_oklab,var(--pink)_22%,var(--border))]",
          dot: "bg-[var(--pink)]",
          text: "text-[var(--navy)]",
        }
      case "navy":
        return {
          bg: "bg-[var(--navy)] border border-white/10",
          dot: "bg-[var(--lime)]",
          text: "text-white",
        }
    }
  }

  const colors = getColors()

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] select-none",
        colors.bg,
        colors.text,
        className
      )}
      {...props}
    >
      {showDot && (
        <span className={cn("h-1 w-1 rounded-full shrink-0", colors.dot)} aria-hidden="true" />
      )}
      {children}
    </span>
  )
}
