import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="hero-marble-bg relative flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* Large transparent "devora." watermark centered */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="select-none font-bold lowercase text-[var(--navy)]/5 text-[clamp(5.5rem,20vw,14rem)] leading-none tracking-[-0.065em]">
          devora.
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col mobile-safe-x px-5 pb-6 pt-20 md:px-8 md:pb-8 md:pt-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--navy)]/55">
            UK digital studio
          </p>

          <h1 className="mt-3 text-balance text-[clamp(2rem,7vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[var(--navy)] md:mt-5 md:text-[clamp(2.5rem,4.5vw,3.75rem)] lg:text-[clamp(2.75rem,4.2vw,4rem)]">
            Bespoke websites<br />for every scale.
          </h1>

          <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.55] text-[var(--navy)]/75 md:mt-5 md:text-base md:leading-[1.6]">
            Design, build and brand for businesses of all scales and public
            sector organisations across the UK.
          </p>

          <div className="mt-5 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-6 md:mt-6">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 font-medium text-[var(--navy)] transition-colors hover:text-[var(--navy)]/80"
            >
              view our work
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <span className="hidden h-3.5 w-px bg-[var(--navy)]/15 sm:block" aria-hidden="true" />

            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#162038] sm:w-auto sm:py-2.5"
            >
              start a project
            </Link>
          </div>
        </div>

        {/* Bottom meta + scroll prompt */}
        <div className="mt-6 flex items-end justify-between gap-6 pt-2 md:mt-8">
          <p className="hidden max-w-[15rem] text-sm leading-6 text-[var(--navy)]/55 md:block">
            Web design · Development · Branding<br />
            Sheffield Technology Park, Sheffield
          </p>

          <Link
            href="#intro"
            className="group ml-auto flex min-h-11 flex-col items-center justify-center gap-1.5 text-[var(--navy)]/65 transition-colors hover:text-[var(--navy)] md:ml-0"
            aria-label="Scroll to content"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Scroll
            </span>
            <span className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-[var(--navy)]/20 pt-1.5 transition-colors group-hover:border-[var(--navy)]/45">
              <span className="h-1.5 w-px animate-scroll-wheel rounded-full bg-[var(--navy)]/50" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
