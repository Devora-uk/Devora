import * as React from "react"
import { cn } from "@/lib/utils"

interface PageEditorialSectionProps {
  title: string
  variant?: "black" | "cream"
  children: React.ReactNode
  className?: string
  id?: string
}

export function PageEditorialSection({
  title,
  variant = "cream",
  children,
  className,
  id,
}: PageEditorialSectionProps) {
  const isBlack = variant === "black"

  return (
    <section
      id={id}
      className={cn(
        "page-section",
        isBlack ? "bg-[#0b101b] text-white" : "bg-[#FAF8F4] text-[var(--navy)]",
        className
      )}
    >
      <div className="page-container max-w-3xl">
        <h2
          className={cn(
            "text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em]",
            isBlack ? "text-white" : "text-[var(--navy)]"
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "mt-7 space-y-5 border-t pt-7 text-base leading-7 md:mt-9 md:text-lg md:leading-8",
            isBlack ? "border-white/15 text-white/70" : "border-[var(--navy)]/10 text-[var(--navy)]/72"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
