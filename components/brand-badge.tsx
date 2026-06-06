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
          bg: "bg-[#CCFF00]/15 border border-[#CCFF00]/25",
          dot: "bg-[#CCFF00]",
          text: "text-[#0F1729]",
        }
      case "cyan":
        return {
          bg: "bg-[#00C8E8]/12 border border-[#00C8E8]/20",
          dot: "bg-[#00C8E8]",
          text: "text-[#0F1729]",
        }
      case "pink":
        return {
          bg: "bg-[#FF5CB4]/12 border border-[#FF5CB4]/20",
          dot: "bg-[#FF5CB4]",
          text: "text-[#0F1729]",
        }
      case "navy":
        return {
          bg: "bg-[#0F1729] border border-[#0F1729]/10",
          dot: "bg-[#CCFF00]",
          text: "text-white",
        }
    }
  }

  const colors = getColors()

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.18em] shadow-xs select-none",
        colors.bg,
        colors.text,
        className
      )}
      {...props}
    >
      {showDot && (
        <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", colors.dot)} aria-hidden="true" />
      )}
      {children}
    </span>
  )
}
