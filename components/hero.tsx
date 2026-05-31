"use client"
 
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, MousePointer2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
 
export function Hero() {
  const proof = ["Bespoke builds", "Brand Development", "Search-ready structure"]
  const visualCards = [
    {
      className: "left-[8%] top-[12%] w-[58%] animate-hero-card-a",
      label: "Search demand",
      title: "Qualified visitors",
      metric: "+68%",
      bars: ["w-[88%]", "w-[64%]", "w-[74%]"],
    },
    {
      className: "right-[2%] top-[30%] w-[54%] animate-hero-card-b",
      label: "Conversion path",
      title: "Enquiry flow",
      metric: "2.4x",
      bars: ["w-[70%]", "w-[92%]", "w-[58%]"],
    },
    {
      className: "bottom-[10%] left-[20%] w-[48%] animate-hero-card-c",
      label: "Build health",
      title: "Core Web Vitals",
      metric: "99",
      bars: ["w-[96%]", "w-[82%]", "w-[88%]"],
    },
  ]
 
  return (
    <section
      className="relative isolate overflow-hidden bg-background pt-20 sm:pt-24 md:min-h-[92vh] md:pt-32"
      aria-label="Hero section - bespoke web design and development for startups"
    >
      <div className="absolute inset-0 premium-grid opacity-55 md:opacity-75" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 hidden h-64 bg-white/85 md:block" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 hidden w-[66%] bg-gradient-to-r from-background via-background/96 to-background/35 md:block" aria-hidden="true" />
 
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative pb-10 md:min-h-[calc(92vh-7rem)] md:pb-16">
          <div className="absolute right-[-1.5rem] top-12 hidden h-[76%] w-[48%] md:block lg:right-0" aria-hidden="true">
            <div className="relative h-full overflow-hidden border border-black/20 bg-card shadow-[0_30px_110px_rgba(15,23,42,0.14)]">
              <div className="absolute inset-0 premium-grid opacity-80" />
              <div className="absolute inset-x-0 top-0 flex h-12 items-center justify-between border-b border-black/15 bg-foreground px-5 text-background">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-background/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-background/35" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-background/70">Live site engine</span>
              </div>
 
              <div className="absolute inset-x-12 top-28 h-px bg-foreground/20" />
              <div className="absolute bottom-24 left-12 right-12 h-px bg-foreground/20" />
              <div className="absolute bottom-24 left-12 top-28 w-px bg-foreground/20" />
              <div className="absolute bottom-24 right-12 top-28 w-px bg-foreground/20" />
              <div className="absolute left-[14%] top-[24%] h-3 w-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(200,54,28,0.1)] animate-hero-pulse" />
              <div className="absolute right-[18%] top-[52%] h-3 w-3 rounded-full bg-foreground shadow-[0_0_0_8px_rgba(15,23,42,0.1)] animate-hero-pulse-delayed" />
              <div className="absolute bottom-[22%] left-[46%] h-3 w-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(200,54,28,0.1)] animate-hero-pulse" />
              <div className="absolute left-0 top-16 h-24 w-full bg-gradient-to-b from-accent/18 via-transparent to-transparent animate-hero-scan" />
 
              {visualCards.map((card) => (
                <div key={card.title} className={`absolute border border-black/20 bg-card p-5 shadow-[0_18px_60px_rgba(15,23,42,0.16)] ${card.className}`}>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{card.label}</p>
                      <p className="mt-2 text-xl font-black leading-none tracking-[-0.03em] text-foreground">{card.title}</p>
                    </div>
                    <span className="font-serif text-4xl italic leading-none text-foreground">{card.metric}</span>
                  </div>
                  <div className="space-y-2">
                    {card.bars.map((bar, index) => (
                      <span key={index} className="block h-2 bg-muted">
                        <span className={`block h-full bg-foreground ${bar}`} />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          <div className="relative z-10 max-w-xl pt-5 sm:max-w-2xl md:max-w-[min(100%,40rem)] md:pt-16 lg:max-w-[min(100%,42rem)]">
            <div className="mb-4 inline-flex max-w-full items-center gap-2 border border-black/20 bg-card px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground shadow-sm sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              BUILT FOR START-UPS • WEB DEVELOPMENT • BRAND DEVELOPMENT
            </div>
 
            <h1 className="max-w-[16.5rem] text-[2.4rem] font-black leading-[1.06] tracking-[-0.025em] text-foreground sm:max-w-lg sm:text-[2.65rem] md:max-w-[14em] md:text-balance md:text-[clamp(2.65rem,3.6vw,3.75rem)] md:leading-[1.02] md:tracking-[-0.035em] lg:max-w-[14.5em] lg:text-[clamp(2.85rem,3.2vw,4.25rem)] xl:text-[4.35rem]">
              <span className="block">Bespoke web design &</span>
              <span className="block">custom development</span>
            </h1>
 
            <div className="mt-5 flex flex-col gap-5 md:mt-8">
              <p className="max-w-xl text-base leading-[1.72] text-foreground/78 sm:max-w-2xl md:max-w-[34rem] md:text-xl md:leading-8 lg:max-w-[36rem]">
                We specialize in helping early-stage startups and ambitious brands stand out and scale intelligently. No inflated agency overhead, no premium bloat, just high-end design, custom development, and brand development built to perform.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:flex-col lg:flex-row lg:flex-wrap">
                <Link href="#contact" aria-label="Start a project with Devora">
                  <Button size="lg" className="h-12 w-full rounded-full bg-foreground px-7 text-base font-bold text-background hover:bg-accent sm:w-auto md:h-13">
                    Start a project
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/areas-we-cover" aria-label="View areas Devora covers across the UK">
                  <Button size="lg" variant="outline" className="h-12 w-full rounded-full border-black/25 bg-card px-7 text-base font-bold shadow-sm hover:border-accent hover:text-accent-foreground sm:w-auto md:h-13">
                    Areas we cover
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/case-studies" aria-label="View Devora case studies">
                  <Button size="lg" variant="outline" className="h-12 w-full rounded-full border-black/25 bg-card px-7 text-base font-bold shadow-sm hover:border-accent hover:text-accent-foreground sm:w-auto md:h-13">
                    See the work
                    <MousePointer2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pb-1 md:mt-9 md:pb-0">
              {proof.map((item) => (
                <span key={item} className="inline-flex shrink-0 items-center gap-2 border border-black/20 bg-card px-3 py-2 text-sm font-semibold text-foreground shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 overflow-hidden border border-black/20 bg-card p-3 shadow-sm md:hidden" aria-hidden="true">
            <div className="premium-grid absolute inset-0 opacity-80" />
            <div className="relative flex items-center justify-between border-b border-black/15 pb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70">Live site engine</span>
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-hero-pulse" />
            </div>
            <div className="relative mt-3 grid gap-2">
              {visualCards.map((card) => (
                <div key={card.title} className="border border-black/15 bg-card p-3 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">{card.label}</p>
                      <p className="mt-2 text-lg font-black leading-none tracking-[-0.03em]">{card.title}</p>
                    </div>
                    <span className="font-serif text-3xl italic leading-none">{card.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
