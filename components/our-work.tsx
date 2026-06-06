"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Sarah Bartlet Optimal Health",
    slug: "sarah-bartlet-optimal-health",
    tags: ["Health & Wellbeing", "Web Design"],
    image: "/case-studies/sarah-bartlet-optimal-health.png",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]",
    imageClass: "object-cover object-top",
    unoptimized: true,
    priority: true,
  },
  {
    name: "Kickin Kilos",
    slug: "kickin-kilos",
    tags: ["Health & Wellbeing", "Web Design"],
    image: "/case-studies/kickin-kilos.png",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    name: "AHRK Property Maintenance",
    slug: "ahrk-property-maintenance",
    tags: ["Next.js", "Property Services"],
    image: "/case-studies/ahrk-property-maintenance-thumb.png",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    name: "The Teacher's Surgery",
    slug: "teachers-surgery",
    tags: ["Web Design", "Next.js Development"],
    image: "/case-studies/teachers-surgery-thumb.png",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
  {
    name: "Luma Education Recruitment",
    slug: "luma-education",
    tags: ["Branding", "Web Design"],
    image: "/case-studies/luma-education-thumb.png",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-center",
    unoptimized: true,
  },
  {
    name: "Sandalwood Memorials",
    slug: "sandalwood-memorials",
    tags: ["E-commerce", "3D Experience"],
    image: "/case-studies/sandalwood-memorials-thumb.png",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-top",
    unoptimized: true,
  },
]

function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof projects)[number] & { containerClass?: string }
  className?: string
}) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className={`group relative overflow-hidden rounded-2xl border border-[#0F1729]/8 ${project.containerClass ?? "bg-[#0F1729]/5"} ${project.span} ${project.aspect} ${className}`}
      aria-label={`View ${project.name} case study`}
    >
      <Image
        src={project.image}
        alt={`${project.name} project`}
        fill
        className={`${project.imageClass ?? "object-cover"} transition-transform duration-700 group-hover:scale-[1.03] group-active:scale-[0.98]`}
        sizes="(max-width: 768px) 85vw, 33vw"
        quality={85}
        loading={"priority" in project && project.priority ? "eager" : "lazy"}
        fetchPriority={"priority" in project && project.priority ? "high" : "auto"}
        priority={"priority" in project ? project.priority : false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729]/75 via-[#0F1729]/15 to-transparent transition-opacity duration-500 group-hover:from-[#0F1729]/85" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <div className="mb-2 flex flex-wrap gap-1.5 md:mb-3 md:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm md:px-3 md:py-1.5 md:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-normal text-white md:text-2xl">{project.name}</h3>
      </div>
    </Link>
  )
}

export function OurWork() {
  return (
    <section
      id="work"
      className="section-cream section-shell-cream mobile-safe-x page-section"
      aria-labelledby="work-heading"
    >
      <div className="page-container">
        <p className="mobile-section-label lg:hidden" aria-hidden="true">
          02 · Projects
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="max-w-2xl">
            <h2 id="work-heading" className="section-heading section-heading-mobile md:section-heading-tablet text-[#0F1729]">
              Latest and <span className="heading-accent">greatest</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="link-inline group hidden text-muted-navy hover:text-[#0F1729] md:inline-flex"
          >
            view all projects
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="relative mt-8 md:hidden">
          <div
            className="mobile-scroll-strip -mx-5 px-5 pb-1"
            aria-label="Featured projects — swipe to browse"
          >
            {projects.map((project) => (
              <ProjectCard
                key={`mobile-${project.slug}`}
                project={project}
                className="w-[min(85vw,20rem)] aspect-[3/4]"
              />
            ))}
          </div>
          <p className="mobile-scroll-hint" aria-hidden="true">
            Swipe for more
          </p>
        </div>

        {/* Desktop: masonry grid */}
        <div className="mt-10 hidden grid-cols-1 gap-3 sm:grid-cols-2 md:grid lg:grid-cols-3 lg:gap-4">
          {projects.map((project) => (
            <ProjectCard key={`desktop-${project.slug}`} project={project} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/case-studies"
            className="btn-touch w-full justify-between rounded-xl border border-[#0F1729]/12 bg-white/70 text-muted-navy backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0F1729]"
          >
            view all projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
