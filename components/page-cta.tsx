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
    <section className={cn("border-t border-white/10 bg-[#0b101b] page-section text-white", className)}>
      <div className="page-container md:flex md:items-end md:justify-between md:gap-12">
        <div className="max-w-2xl md:max-w-xl lg:max-w-2xl">
          <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-7 text-white/65 md:mt-6 md:text-lg md:leading-8">
              {description}
            </p>
          )}
        </div>
        <Link
          href={href}
          className="link-inline group mt-8 inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:underline md:mt-0"
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
