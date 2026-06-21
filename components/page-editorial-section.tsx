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
        isBlack ? "bg-black text-white" : "bg-[var(--cream)] text-[var(--navy)]",
        className
      )}
    >
      <div className="page-container max-w-3xl">
        <h2
          className={cn(
            "text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight",
            isBlack ? "text-white" : "text-[var(--navy)]"
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "mt-6 space-y-5 text-base font-medium leading-7 md:mt-8 md:text-lg md:leading-8",
            isBlack ? "text-white" : "text-[var(--navy)]"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
