import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageCtaProps {
  title: React.ReactNode
  description?: string
  href?: string
  linkLabel?: string
  className?: string
}

export function PageCta({
  title,
  description,
  href = "/#contact",
  linkLabel = "start a project",
  className,
}: PageCtaProps) {
  return (
    <section
      className={cn(
        "section-dark section-shell-dark page-section text-white",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-[#CCFF00]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative page-container md:flex md:items-end md:justify-between md:gap-12">
        <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-xl md:text-left lg:max-w-2xl">
          <h2 className="section-heading md:section-heading-tablet text-balance">{title}</h2>
          {description && (
            <p className="mt-5 text-base leading-8 text-muted-light md:mt-6 md:text-lg">{description}</p>
          )}
        </div>
        <Link
          href={href}
          className="link-inline group mx-auto mt-8 flex w-full max-w-sm justify-center rounded-xl border border-white/15 bg-white/8 px-6 backdrop-blur-sm transition-colors hover:bg-white/12 hover:underline md:mx-0 md:mt-0 md:w-auto md:max-w-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:backdrop-blur-none text-white"
        >
          {linkLabel}
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  )
}
