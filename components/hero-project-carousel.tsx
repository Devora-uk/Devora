"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Four Leaf Recruitment",
    slug: "four-leaf-recruitment",
    discipline: "Recruitment · Web design",
    image: "/case-studies/four-leaf-recruitment-poster.jpg",
    video: "/case-studies/videos/four-leaf-recruitment-hero.mp4",
    position: "object-cover object-top",
  },
  {
    name: "Sandalwood Memorials",
    slug: "sandalwood-memorials",
    discipline: "E-commerce · 3D experience",
    image: "/case-studies/sandalwood-memorials-thumb.png",
    position: "object-cover object-top",
  },
  {
    name: "Thai Grace Massage & Wellbeing",
    slug: "thai-grace",
    discipline: "Wellness · Digital experience",
    image: "/case-studies/thai-grace-hero-poster.jpg",
    video: "/case-studies/videos/thai-grace-hero.mp4",
    position: "object-cover object-center",
  },
  {
    name: "Rolletic Massage London",
    slug: "rolletic-massage-london",
    discipline: "Wellness · Web design",
    image: "/case-studies/rolletic-hero-poster.jpg",
    video: "/case-studies/videos/rolletic-hero.mp4",
    position: "object-cover object-top",
  },
  {
    name: "The Teacher's Surgery",
    slug: "teachers-surgery",
    discipline: "Web design · Next.js development",
    image: "/case-studies/teachers-surgery-thumb.png",
    position: "object-cover object-top",
  },
  {
    name: "Luma Education Recruitment",
    slug: "luma-education",
    discipline: "Brand identity · Web design",
    image: "/case-studies/luma-education-thumb.png",
    position: "object-cover object-center",
  },
] as const

export function HeroProjectCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [paused])

  const project = projects[active]

  return (
    <div
      className="absolute inset-y-8 left-0 right-0 overflow-hidden bg-[#171d28] lg:inset-y-16 lg:left-10 xl:left-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Link
        href={`/case-studies/${project.slug}`}
        className="group absolute inset-0"
        aria-label={`View ${project.name} case study`}
      >
        {projects.map((item, index) => (
          <div
            key={item.slug}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={index !== active}
          >
            {item.video && index === active ? (
              <video
                key={item.slug}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                poster={item.image}
                className={`h-full w-full ${item.position}`}
              >
                <source src={item.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority={index === 0}
                unoptimized
                className={`${item.position} transition-transform duration-[1400ms] ease-out group-hover:scale-[1.015]`}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            )}
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#090d15]/90 via-transparent to-black/5" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 px-5 pb-20 pt-32 md:px-7 md:pb-24">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">{project.discipline}</p>
            <p className="mt-2 max-w-[20rem] text-lg font-medium leading-tight tracking-[-0.02em] text-white md:text-xl">{project.name}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
      </Link>

      <div className="absolute inset-x-5 bottom-5 z-20 flex items-center gap-2 border-t border-white/20 pt-4 md:inset-x-7 md:bottom-7" role="tablist" aria-label="Selected projects">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show ${item.name}`}
            onClick={() => setActive(index)}
            className="group flex h-6 flex-1 items-center"
          >
            <span className={`h-px w-full transition-colors duration-500 ${index === active ? "bg-white" : "bg-white/25 group-hover:bg-white/55"}`} />
          </button>
        ))}
        <span className="ml-2 text-[9px] tabular-nums tracking-[0.16em] text-white/55">
          {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
