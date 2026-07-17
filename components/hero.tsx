import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { HeroProjectCarousel } from "@/components/hero-project-carousel"

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0b101b] pt-[4.5rem] text-white md:pt-[5.5rem]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.055),transparent_32%)]" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-[90rem] px-5 mobile-safe-x md:px-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(28rem,0.86fr)] lg:px-10">
        <div className="flex flex-col border-white/10 py-12 lg:border-r lg:py-16 lg:pr-16 xl:pr-24">
          <div className="animate-hero-rise flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
            <span className="h-px w-8 bg-white/35" aria-hidden="true" />
            Independent digital studio · Sheffield
          </div>

          <div className="my-auto py-14 lg:py-20">
            <h1
              id="hero-heading"
              className="animate-hero-rise max-w-[10ch] text-balance text-[clamp(3.35rem,8.3vw,7.1rem)] font-medium leading-[0.91] tracking-[-0.065em] [animation-delay:70ms] lg:text-[clamp(4.4rem,6.4vw,6.8rem)]"
            >
              Digital work of lasting value.
            </h1>

            <div className="animate-hero-rise mt-9 grid max-w-[38rem] gap-8 border-t border-white/15 pt-7 [animation-delay:140ms] sm:grid-cols-[1fr_auto] sm:items-end md:mt-12">
              <p className="max-w-[31rem] text-[1.02rem] leading-7 text-white/65 md:text-lg md:leading-8">
                We design and build distinctive websites, brands and digital
                products for organisations with ambition.
              </p>

              <Link
                href="#contact"
                className="group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-[#0b101b]"
                aria-label="Start a project"
              >
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="animate-hero-rise flex items-end justify-between gap-6 text-[11px] uppercase tracking-[0.18em] text-white/40 [animation-delay:210ms]">
            <Link href="/case-studies" className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white">
              Selected projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link href="#intro" className="hidden items-center gap-2 sm:flex" aria-label="Scroll to introduction">
              Scroll
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="animate-hero-rise relative min-h-[28rem] overflow-hidden border-t border-white/10 [animation-delay:130ms] lg:min-h-0 lg:border-t-0 lg:pl-10 xl:pl-14">
          <HeroProjectCarousel />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-x-10 gap-y-2 px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/38 mobile-safe-x md:px-8 lg:px-10">
          <span>Strategy &amp; direction</span>
          <span>Identity &amp; design</span>
          <span>Web &amp; digital products</span>
          <span>Optimisation &amp; growth</span>
        </div>
      </div>
    </section>
  )
}
