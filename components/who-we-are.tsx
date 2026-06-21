import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function WhoWeAre() {
  return (
    <section
      id="intro"
      className="bg-black page-section text-white"
      aria-labelledby="who-we-are-heading"
    >
      <div className="page-container">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14 lg:gap-24">
          <div>
            <h2
              id="who-we-are-heading"
              className="max-w-[18ch] text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-white md:max-w-[16ch]"
            >
              Looking for a partner to take your brand forward?
            </h2>
          </div>

          <div className="space-y-6 md:pt-1">
            <p className="text-base font-medium leading-7 text-white md:text-lg md:leading-8">
              Based in the UK, Devora delivers bespoke web design, development,
              branding, and conversion refinement for startups ready to stand out
              and scale.
            </p>

            <p className="text-base font-medium leading-7 text-white md:text-lg md:leading-8">
              Our mission stays the same: create digital experiences that look
              beautiful and work brilliantly—then make sure your brand speaks
              clearly to the people you want to reach.
            </p>

            <Link
              href="#about"
              className="link-inline group inline-flex items-center gap-1.5 pt-2 font-medium text-white transition-colors hover:underline"
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
