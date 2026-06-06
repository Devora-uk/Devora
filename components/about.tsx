import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BrandBadge } from "@/components/brand-badge"

export function About() {
  return (
    <section
      id="about"
      className="section-dark relative overflow-hidden page-section text-white"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#CCFF00]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[90rem] gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div>
          <p className="mobile-section-label text-white/50 lg:hidden" aria-hidden="true">
            03 · About
          </p>
          <BrandBadge variant="navy" className="mb-5 max-md:mb-4 border-white/10 bg-white/8 text-white md:mb-6">
            About us
          </BrandBadge>

          <h2 id="about-heading" className="section-heading section-heading-mobile md:section-heading-tablet max-w-xl text-balance">
            We exceed expectations because we{" "}
            <span className="heading-accent">care</span>.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg md:leading-9">
            Whether you&apos;re an early-stage startup or a growing business, we work to the
            very highest standards and specialise in building websites that earn trust and
            drive enquiries.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg md:leading-9">
            Interested in starting a project? We&apos;re always happy to discuss your requirements.
          </p>
        </div>

        <div className="flex flex-col justify-center lg:pl-8">
          <div className="mobile-panel-dark rounded-2xl border-[#CCFF00]/20 p-5 md:tablet-panel-inset-dark md:border-[#CCFF00]/25 lg:rounded-xl lg:border-white/10 lg:bg-white/5 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-light-subtle">
              Get in touch
            </p>
            <p className="mt-4">
              <Link
                href="mailto:hello@devora.co.uk"
                className="text-xl text-white underline-offset-4 transition-colors hover:underline md:text-2xl"
              >
                hello@devora.co.uk
              </Link>
            </p>
            <p className="mt-3 text-base text-muted-light">
              United Kingdom · Remote-first studio
            </p>
            <Link
              href="#contact"
              className="btn-touch group mt-6 w-full gap-2 rounded-xl bg-[#CCFF00] px-6 text-[#0F1729] transition-colors hover:bg-[#b8e600] md:mt-8 md:w-auto md:rounded-full"
            >
              start a conversation
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
