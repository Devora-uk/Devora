"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"
import { BrandBadge } from "@/components/brand-badge"

const projects = [
  {
    name: "Four Leaf Recruitment",
    slug: "four-leaf-recruitment",
    tags: ["Recruitment", "Web Design"],
    image: "/case-studies/four-leaf-recruitment-poster.jpg",
    imageAlt: "Four Leaf Recruitment website homepage with candidate and employer pathways",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]",
    imageClass: "object-cover object-top",
    unoptimized: true,
    video: "/case-studies/videos/four-leaf-recruitment-hero.mp4",
    poster: "/case-studies/four-leaf-recruitment-poster.jpg",
    autoplayVideo: true,
    priority: true,
    sizes: "(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 66vw",
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
    priority: false,
    sizes: "(max-width: 768px) 85vw, 33vw",
  },
  {
    name: "Thai Grace Massage & Wellbeing",
    slug: "thai-grace",
    tags: ["Wellness", "Video Hero"],
    image: "/case-studies/thai-grace-hero-poster.jpg",
    imageAlt: "Thai Grace Massage & Wellbeing hero section — captured with video background, branding and booking calls to action",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-center",
    unoptimized: true,
    video: "/case-studies/videos/thai-grace-hero.mp4",
    poster: "/case-studies/thai-grace-hero-poster.jpg",
    autoplayVideo: true,
  },
  {
    name: "Rolletic Massage London",
    slug: "rolletic-massage-london",
    tags: ["Wellness", "Video Hero"],
    image: "/case-studies/rolletic-hero-poster.jpg",
    imageAlt: "Rolletic Massage London hero section — captured with video background, clear treatment pathways and studio messaging",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    imageClass: "object-cover object-top",
    unoptimized: true,
    video: "/case-studies/videos/rolletic-hero.mp4",
    poster: "/case-studies/rolletic-hero-poster.jpg",
    autoplayVideo: true,
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
]

function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof projects)[number] & { containerClass?: string }
  className?: string
}) {
  const hasVideo = "video" in project && project.video && "poster" in project && project.poster
  const autoplayVideo = "autoplayVideo" in project && project.autoplayVideo
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  function handleEnter() {
    setIsHovering(true)
    const v = videoRef.current
    if (v && !autoplayVideo) {
      // Restart from beginning for a clean loop feel on each hover
      v.currentTime = 0
      v.play().catch(() => {})
    }
  }
  function handleLeave() {
    setIsHovering(false)
    const v = videoRef.current
    if (v && !autoplayVideo) {
      v.pause()
    }
  }

  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] ${project.containerClass ?? "bg-[#0F1729]/5"} ${project.span} ${project.aspect} ${className}`}
      aria-label={`View ${project.name} case study`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {hasVideo ? (
        <>
          {/* Poster as base layer (always visible, fast) */}
          <Image
            src={(project as any).poster}
            alt={"imageAlt" in project && project.imageAlt ? project.imageAlt : `${project.name} project`}
            fill
            className={`${project.imageClass ?? "object-cover"} transition-opacity duration-300 ${isHovering || autoplayVideo ? "opacity-0" : "opacity-100"}`}
            sizes={"sizes" in project && project.sizes ? project.sizes : "(max-width: 768px) 85vw, 33vw"}
            quality={90}
            unoptimized={"unoptimized" in project ? project.unoptimized : false}
            loading={"priority" in project && project.priority ? "eager" : "lazy"}
          />
          {/* Video plays on hover for the special video-hero projects */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay={autoplayVideo}
            preload={autoplayVideo ? "metadata" : "none"}
            poster={(project as any).poster}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovering || autoplayVideo ? "opacity-100" : "opacity-0"}`}
            aria-hidden={!isHovering && !autoplayVideo}
          >
            <source src={(project as any).video} type="video/mp4" />
          </video>
          {/* Subtle play affordance when not hovering */}
          {!isHovering && !autoplayVideo && (
            <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
          )}
        </>
      ) : (
        <Image
          src={project.image}
          alt={"imageAlt" in project && project.imageAlt ? project.imageAlt : `${project.name} project`}
          fill
          className={`${project.imageClass ?? "object-cover"} transition-transform duration-700 group-hover:scale-[1.03] group-active:scale-[0.98]`}
          sizes={"sizes" in project && project.sizes ? project.sizes : "(max-width: 768px) 85vw, 33vw"}
          quality={100}
          unoptimized={"unoptimized" in project ? project.unoptimized : false}
          loading={"priority" in project && project.priority ? "eager" : "lazy"}
          fetchPriority={"priority" in project && project.priority ? "high" : "auto"}
          priority={"priority" in project ? project.priority : false}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-[var(--navy)]/15 to-transparent transition-opacity duration-500 group-hover:from-[var(--navy)]/90" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <div className="mb-2 flex flex-wrap gap-1.5 md:mb-3 md:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white/90 md:px-3 md:py-1.5 md:text-xs"
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
        <BrandBadge variant="lime" className="mb-5 md:mb-6">
          Selected work
        </BrandBadge>
        <div className="max-w-2xl">
          <h2 id="work-heading" className="section-heading section-heading-mobile md:section-heading-tablet text-[#0F1729]">
            Some of our <span className="heading-accent">work</span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-navy md:mt-5 md:text-lg md:leading-8">
            Recent builds across health, education, property and e-commerce.
          </p>
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

        <div className="mt-10 border-t border-[#0F1729]/8 pt-8 md:mt-12 md:pt-10">
          <Link
            href="/case-studies"
            className="link-inline group text-muted-navy hover:text-[#0F1729] hover:underline"
          >
            view all projects
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
