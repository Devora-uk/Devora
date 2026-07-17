"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
      <div className="flex flex-1 flex-col rounded-2xl border border-white/12 p-5 md:rounded-xl md:p-7">
        <p className="text-base font-medium leading-7 text-white md:text-lg md:leading-8">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="mt-5 flex items-center gap-3 pl-1">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white"
          aria-hidden="true"
        >
          {testimonial.name[0]}
        </div>
        <div>
          <p className="text-base font-medium text-white">{testimonial.name}</p>
          <p className="text-sm font-medium text-white/65">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export function SuccessStories() {
  return (
    <section
      id="testimonials"
      className="bg-[#0b101b] page-section mobile-safe-x text-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="page-container">
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

        <h2
          id="testimonials-heading"
          className="max-w-[18ch] text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-white"
        >
          What our clients say
        </h2>

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
          <CarouselPrevious className="left-0 hidden border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black md:flex" />
          <CarouselNext className="right-0 hidden border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black md:flex" />
        </Carousel>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/45 md:hidden" aria-hidden="true">
          Swipe testimonials
        </p>
      </div>
    </section>
  )
}
