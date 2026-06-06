"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    slug: "sarah-bartlet-optimal-health",
    name: "Sarah Bartlet Optimal Health",
    tags: ["Health", "Web Design", "Wellbeing"],
    year: "2026",
    image: "/case-studies/sarah-bartlet-optimal-health.png",
    alt: "Sarah Bartlet Optimal Health nutritional therapy website built by Devora",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    slug: "kickin-kilos",
    name: "Kickin Kilos",
    tags: ["Health", "Coaching", "Web Design"],
    year: "2026",
    image: "/case-studies/kickin-kilos.png",
    alt: "Kickin Kilos weight loss coaching website built by Devora",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    slug: "teachers-surgery",
    name: "Teacher's Surgery",
    tags: ["Next.js", "Community", "Website"],
    year: "2024",
    image: "/case-studies/teachers-surgery-thumb.png",
    alt: "The Teacher's Surgery website built by Devora",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    slug: "ahrk-property-maintenance",
    name: "AHRK Property Maintenance",
    tags: ["Next.js", "Property", "Conversion"],
    year: "2026",
    image: "/case-studies/ahrk-property-maintenance-thumb.png",
    alt: "AHRK Property Maintenance website built by Devora",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    slug: "luma-education",
    name: "Luma Education",
    tags: ["Website", "SEO", "Branding"],
    year: "2024",
    image: "/case-studies/luma-education-thumb.png",
    alt: "Luma Education Recruitment website built by Devora",
    imageClass: "object-cover object-center",
    unoptimized: true,
  },
  {
    slug: "sandalwood-memorials",
    name: "Sandalwood Memorials",
    tags: ["E-commerce", "Next.js", "3D"],
    year: "2025",
    image: "/case-studies/sandalwood-memorials-thumb.png",
    alt: "Sandalwood Memorials e-commerce website built by Devora",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    slug: "lr-talent",
    name: "LR Talent",
    tags: ["Branding", "Website", "Recruitment"],
    year: "2024",
    image: "/case-studies/lr-talent.png",
    alt: "LR Talent recruitment website built by Devora",
  },
]

const floatingCards = [
  {
    slug: "teachers-surgery",
    label: "Teacher's Surgery",
    image: "/case-studies/teachers-surgery-thumb.png",
    alt: "The Teacher's Surgery website preview",
    className:
      "absolute -left-2 top-6 z-20 hidden w-[38%] max-w-[9.5rem] rotate-[-7deg] lg:block xl:-left-8 xl:top-10 xl:max-w-[10.5rem]",
  },
  {
    slug: "lr-talent",
    label: "LR Talent",
    image: "/case-studies/lr-talent.png",
    alt: "LR Talent website preview",
    className:
      "absolute -right-1 top-16 z-30 hidden w-[34%] max-w-[8.5rem] rotate-[6deg] lg:block xl:-right-6 xl:top-20 xl:max-w-[9.5rem]",
  },
]

export function HeroShowcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [paused])

  const project = projects[active]

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {floatingCards.map((card) => (
        <Link
          key={card.slug}
          href={`/case-studies/${card.slug}`}
          className={`${card.className} group overflow-hidden rounded-xl border border-white/70 bg-white shadow-[0_18px_40px_rgba(15,23,41,0.14)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.04]`}
          aria-label={`View ${card.label} case study`}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
              sizes="160px"
              loading="lazy"
            />
          </div>
          <div className="border-t border-[#0A0A0A]/6 bg-white px-2.5 py-2">
            <p className="truncate text-[10px] font-black text-[#0A0A0A]">{card.label}</p>
          </div>
        </Link>
      ))}

      <Link
        href={`/case-studies/${project.slug}`}
        className="group relative block overflow-hidden rounded-2xl border-2 border-[#0A0A0A]/10 bg-[#0A0A0A]/5 shadow-[0_32px_90px_rgba(15,23,41,0.18)] sm:rounded-[1.35rem] lg:rounded-[1.75rem]"
        aria-label={`View ${project.name} case study`}
      >
        <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] xl:min-h-[28rem]">
          {projects.map((item, index) => (
            <div
              key={item.slug}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== active}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className={`${item.imageClass ?? "object-cover object-top"} transition-transform duration-700 group-hover:scale-[1.03]`}
                sizes="(min-width: 1024px) 48vw, 100vw"
                quality={85}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                priority={index === 0}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/55 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#0A0A0A] backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute right-4 top-4 hidden items-center gap-2 rounded-full bg-[#0A0A0A]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CCFF00] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CCFF00]" />
            </span>
            Live client work
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4 pt-16 sm:px-5 sm:pb-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                Featured project
              </p>
              <p className="mt-1 text-xl font-black tracking-[-0.03em] text-white sm:text-2xl">
                {project.name}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-black text-[#0A0A0A]">
                {project.year}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#0A0A0A]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div
        className="mt-4 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Featured project slides"
      >
        {projects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show ${item.name} project`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active
                ? "w-8 bg-[#0A0A0A]"
                : "w-2 bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
