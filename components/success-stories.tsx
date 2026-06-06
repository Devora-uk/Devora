"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { BrandBadge } from "@/components/brand-badge"

const testimonials = [
  {
    quote:
      "Khalil really brought my vision to life and created a fantastic website. I was amazed at the speed, efficiency and communication throughout.",
    name: "Katy",
    role: "Founder of LR Talent",
  },
  {
    quote:
      "I was under time pressure and Khalil was able to turn my project around rapidly. The speed, quality and efficiency were excellent.",
    name: "Isaac",
    role: "Founder of Rectify International",
  },
  {
    quote:
      "The entire experience felt professional yet personal. Devora understood my vision and turned it into something even better than I imagined.",
    name: "Michael",
    role: "HV Direct",
  },
  {
    quote:
      "Great service, quick results, high finish and great communication. Would highly recommend.",
    name: "Sarah",
    role: "Startup founder",
  },
  {
    quote:
      "We needed professional help with our website and Devora were exactly the right people for the job. Responsive, thoughtful, and skilled.",
    name: "James",
    role: "Education sector",
  },
  {
    quote:
      "The team gave good leadership and produced a fine website which stands out from the crowd. Premium product delivery.",
    name: "Helen",
    role: "B2B services",
  },
]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <article className="flex h-full flex-col px-1">
      <div className="flex flex-1 flex-col rounded-2xl border border-[#0F1729]/8 bg-white/80 p-5 backdrop-blur-sm max-md:shadow-[0_8px_32px_rgba(15,23,41,0.08)] md:rounded-xl md:bg-white/70 md:p-7">
        <p className="text-base leading-7 text-[#0F1729]/85 md:text-lg md:leading-8">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="mt-5 flex items-center gap-3 pl-1">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-bold text-[#0F1729]"
          aria-hidden="true"
        >
          {testimonial.name[0]}
        </div>
        <div>
          <p className="text-base font-medium text-[#0F1729]">{testimonial.name}</p>
          <p className="text-sm text-muted-navy-subtle">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export function SuccessStories() {
  return (
    <section
      id="testimonials"
      className="section-dark section-shell-dark relative overflow-hidden mobile-safe-x page-section"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#CCFF00]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative page-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: testimonials.length,
            }),
          }}
        />

        <div className="max-w-2xl">
          <p className="mobile-section-label text-white/50 lg:hidden" aria-hidden="true">
            05 · Voices
          </p>
          <BrandBadge variant="navy" className="mb-5 max-md:mb-4 border-white/10 bg-white/8 text-white md:mb-6">
            Client voices
          </BrandBadge>
          <h2 id="testimonials-heading" className="section-heading section-heading-mobile md:section-heading-tablet text-white">
            What our clients <span className="heading-accent">say</span>
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          className="relative mt-8 max-md:-mx-5 max-md:px-5 md:mt-10 md:px-10 lg:px-14"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-[88%] pl-3 sm:basis-[45%] md:basis-1/2 md:pl-4 lg:basis-[42%] xl:basis-1/4"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden border border-white/15 bg-white/10 text-white hover:bg-[#CCFF00] hover:text-[#0F1729] md:flex" />
          <CarouselNext className="right-0 hidden border border-white/15 bg-white/10 text-white hover:bg-[#CCFF00] hover:text-[#0F1729] md:flex" />
        </Carousel>
        <p className="mobile-scroll-hint mobile-scroll-hint-light mt-4 md:hidden" aria-hidden="true">
          Swipe testimonials
        </p>
      </div>
    </section>
  )
}
