"use client"

import Image from "next/image"

export function ClientLogos() {
  const logos = [
    { src: "/client-logo-lr-talent.png", alt: "LR Talent - Recruitment platform client", width: 2173, height: 583, className: "max-w-[86%]" },
    { src: "/client-logo-nl-education.png", alt: "NL Education - Recruitment platform client", width: 388, height: 269, className: "max-w-[76%]" },
    { src: "/client-logo-rectify.png", alt: "Rectify - Energy recruitment client", width: 385, height: 413, className: "max-w-[68%]" },
    { src: "/client-logo-rfw.png", alt: "RFW - Wellness consultancy client", width: 514, height: 490, className: "max-w-[68%]" },
    { src: "/client-logo-sandalwood-memorials.png", alt: "Sandalwood Memorials - E-commerce client", width: 387, height: 411, className: "max-w-[68%]", tileClassName: "col-span-2 sm:col-span-1" },
  ]

  return (
    <section className="border-y border-black/15 bg-card px-4 py-8 md:px-6" aria-label="Selected Devora clients">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[17rem_1fr] md:items-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-foreground/68">
          Trusted by founders, recruiters and specialist teams
        </p>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-black/20 bg-black/20 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.src} className={`flex h-24 items-center justify-center bg-foreground px-5 md:h-28 md:px-7 ${logo.tileClassName ?? ""}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`max-h-16 w-auto object-contain opacity-95 md:max-h-20 ${logo.className}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
