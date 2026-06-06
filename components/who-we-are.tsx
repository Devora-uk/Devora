import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BrandBadge } from "@/components/brand-badge"

const focusAreas = [
  "Web design",
  "Development",
  "Branding",
  "Conversion refinement",
]

export function WhoWeAre() {
  return (
    <section
      id="intro"
      className="section-dark section-shell-dark relative overflow-hidden page-section text-white"
      aria-labelledby="who-we-are-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-[#CCFF00]/6 blur-3xl lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-48 w-48 rounded-full bg-[#CCFF00]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative page-container">
        <p className="mobile-section-label text-white/50 lg:hidden" aria-hidden="true">
          01 · Intro
        </p>
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <div>
            <BrandBadge variant="navy" className="mb-5 max-md:mb-4 border-white/10 bg-white/8 text-white md:mb-6">
              Who we are
            </BrandBadge>

            <h2
              id="who-we-are-heading"
              className="section-heading section-heading-mobile md:section-heading-tablet max-md:max-w-[18ch] md:max-w-none lg:max-w-xl text-balance"
            >
              Looking for a partner to take your brand{" "}
              <span className="heading-accent">forward?</span>
            </h2>

            <ul className="mt-6 flex flex-wrap gap-2 text-base text-muted-light md:mt-8 md:gap-x-4 md:gap-y-2">
              {focusAreas.map((area) => (
                <li key={area}>
                  <span className="mobile-chip border-white/12 bg-white/8 text-white/90 md:inline-flex md:rounded-none md:border-0 md:bg-transparent md:p-0 md:font-normal">
                    <span
                      className="mobile-chip-dot md:h-1 md:w-1"
                      aria-hidden="true"
                    />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-panel-dark p-5 md:tablet-panel-inset-dark lg:bg-transparent lg:p-0 lg:pt-14">
            <p className="text-base leading-8 text-white/80 md:text-lg md:leading-9">
              Based in the UK and built for startups, Devora delivers bespoke web design,
              development, branding, and conversion refinement, helping founders stand out
              and scale with confidence.
            </p>

            <blockquote className="mt-8 border-l-2 border-[#CCFF00]/70 pl-5">
              <p className="text-base leading-8 text-white/90 md:text-lg md:leading-9">
                Our mission has stayed the same from day one: create digital experiences
                that look beautiful and work brilliantly.
              </p>
            </blockquote>

            <p className="mt-6 text-base leading-8 text-white/80 md:text-lg md:leading-9">
              We take your vision, shape it into something tangible, and make sure your
              brand speaks clearly to the people you want to reach.
            </p>

            <Link
              href="#about"
              className="link-inline group mt-10 text-muted-light hover:text-white hover:underline"
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
