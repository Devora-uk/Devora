import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BrandBadge } from "@/components/brand-badge"
import { MarqueeStrip } from "@/components/marquee-strip"

export function Hero() {
  return (
    <section
      className="hero-marble-bg relative flex min-h-svh flex-col overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <p className="hero-watermark-brand select-none lowercase">devora.</p>
      </div>

      <div
        className="pointer-events-none absolute left-5 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#0F1729]/15 to-transparent md:left-8 lg:left-10 xl:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-end mobile-safe-x px-5 pb-6 pt-24 max-md:pb-8 max-md:pt-[max(6rem,env(safe-area-inset-top,0px)+4.5rem)] md:px-8 md:pb-8 md:pt-28 lg:px-10">
        <div className="max-w-3xl">
          <BrandBadge variant="lime" className="animate-hero-rise mb-5 max-md:mb-4 max-md:text-xs max-md:px-3 max-md:py-1.5 md:mb-6">
            UK digital studio
          </BrandBadge>

          <h1 className="animate-hero-rise text-balance text-[clamp(2.1rem,9.5vw,5.25rem)] font-normal leading-[0.98] tracking-[-0.04em] text-[#0F1729] max-md:leading-[1.02] md:text-[clamp(2.5rem,4.5vw,4.25rem)] lg:text-[clamp(2.35rem,6.2vw,5.25rem)] [animation-delay:0.08s]">
            Design, build &amp; brand for{" "}
            <span className="relative inline-block whitespace-nowrap">
              ambitious founders
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#CCFF00]"
                aria-hidden="true"
              />
            </span>.
          </h1>

          <p className="animate-hero-rise mt-5 max-w-xl text-base leading-7 text-muted-navy max-md:leading-[1.65] md:mt-6 md:text-lg md:leading-8 [animation-delay:0.16s]">
            Bespoke websites and identities for startups who need to stand out and
            scale with confidence.
          </p>

          <ul className="animate-hero-rise mt-5 hidden flex-wrap gap-2 max-md:flex [animation-delay:0.2s]" aria-label="Services">
            {["Web design", "Development", "Branding"].map((item) => (
              <li key={item} className="mobile-chip text-[#0F1729]">
                <span className="mobile-chip-dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="animate-hero-rise mt-7 flex flex-col gap-3 max-md:mt-6 md:flex-row md:flex-wrap md:items-center md:gap-x-7 md:gap-y-3 [animation-delay:0.24s]">
            <Link
              href="/case-studies"
              className="btn-touch group w-full justify-between rounded-xl border border-[#0F1729]/12 bg-white/60 text-[#0F1729] backdrop-blur-sm transition-colors hover:bg-white/90 md:w-auto md:justify-center md:rounded-none md:border-0 md:bg-transparent md:backdrop-blur-none link-inline md:hover:underline"
            >
              view our work
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <span className="hidden h-3 w-px bg-[#0F1729]/15 md:block" aria-hidden="true" />
            <Link
              href="#contact"
              className="btn-touch w-full justify-center rounded-xl bg-[#0F1729] text-white transition-colors hover:bg-[#162038] md:w-auto md:rounded-none md:bg-transparent md:text-muted-navy md:hover:text-[#0F1729] link-inline md:hover:underline"
            >
              start a project
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-6 max-md:mt-10 md:mt-14">
          <p className="animate-hero-rise hidden max-w-[14rem] text-sm leading-6 text-muted-navy-subtle md:block lg:block [animation-delay:0.32s]">
            Web design · Development · Branding
            <br />
            Remote-first across the UK
          </p>

          <Link
            href="#intro"
            className="group ml-auto flex min-h-11 flex-col items-center justify-center gap-2.5 text-muted-navy transition-colors hover:text-[#0F1729] md:ml-0"
            aria-label="Scroll to content"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Scroll
            </span>
            <span className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-[#0F1729]/25 pt-2 transition-colors group-hover:border-[#0F1729]/55">
              <span className="h-2 w-1 animate-scroll-wheel rounded-full bg-[#0F1729]/65" />
            </span>
          </Link>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F1729]/12 via-[#0F1729]/4 to-transparent"
        aria-hidden="true"
      />

      <MarqueeStrip theme="dark" className="relative z-10" />
    </section>
  )
}
