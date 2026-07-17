import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function WhoWeAre() {
  return (
    <section
      id="intro"
      className="border-b border-[var(--navy)]/8 bg-[#FAF8F4] page-section text-[var(--navy)]"
      aria-labelledby="who-we-are-heading"
    >
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14 lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--navy)]/45">
              <span className="h-px w-7 bg-[var(--navy)]/25" aria-hidden="true" />
              What we believe
            </p>
            <h2
              id="who-we-are-heading"
              className="max-w-[18ch] text-balance text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.035em] text-[var(--navy)] md:max-w-[16ch]"
            >
              Looking for a partner to take your brand forward?
            </h2>
          </div>

          <div className="space-y-6 md:pt-1">
            <p className="text-base leading-7 text-[var(--navy)]/72 md:text-lg md:leading-8">
              Based in the UK, Devora delivers bespoke web design, development,
              branding, and conversion refinement for businesses of all scales
              and public sector organisations.
            </p>

            <p className="text-base leading-7 text-[var(--navy)]/72 md:text-lg md:leading-8">
              Our mission stays the same: create digital experiences that look
              beautiful and work brilliantly—then make sure your brand speaks
              clearly to the people you want to reach.
            </p>

            <Link
              href="#about"
              className="link-inline group inline-flex items-center gap-1.5 pt-2 font-medium text-[var(--navy)] transition-colors hover:underline"
            >
              read more about us
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
