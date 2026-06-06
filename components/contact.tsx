"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { BrandBadge } from "@/components/brand-badge"

export function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const formLoadTime = useRef<number>(Date.now())
  const firstInteractionTime = useRef<number | null>(null)
  const hasInteracted = useRef<boolean>(false)

  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  const handleInteraction = () => {
    if (!hasInteracted.current) {
      firstInteractionTime.current = Date.now()
      hasInteracted.current = true
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInteraction()
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (isLoading) return
    if (formData.website) {
      toast.error("Invalid submission detected.")
      return
    }
    const now = Date.now()
    if (!hasInteracted.current || now - formLoadTime.current < 3000) {
      toast.error("Please take your time filling out the form.")
      return
    }
    if (firstInteractionTime.current && now - firstInteractionTime.current < 2000) {
      toast.error("Please take your time filling out the form.")
      return
    }
    if (!formData.message || formData.message.trim().length < 10) {
      toast.error("Please provide a more detailed message (at least 10 characters).")
      return
    }
    if (formData.message.length > 2000) {
      toast.error("Message is too long. Please keep it under 2000 characters.")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0] || formData.name,
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          email: formData.email,
          company: "",
          phone: formData.phone,
          message: formData.message,
          formLoadTime: formLoadTime.current,
          interactionTime: firstInteractionTime.current,
          submitTime: Date.now(),
        }),
      })
      let data
      try {
        data = await response.json()
      } catch {
        if (!response.ok) throw new Error(`Server error: ${response.status}`)
        data = {}
      }
      if (!response.ok) throw new Error(data.error || "Something went wrong")
      toast.success("Message sent! Redirecting...", { duration: 2000 })
      setFormData({ name: "", email: "", phone: "", message: "", website: "" })
      setTimeout(() => router.push("/thank-you"), 500)
    } catch (error) {
      if (error instanceof TypeError && error.message.includes("fetch")) {
        toast.error("Network error. Please check your connection and try again.")
      } else {
        toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.")
      }
      setIsLoading(false)
    }
  }


  return (
    <section
      id="contact"
      className="section-cream section-shell-cream relative overflow-hidden mobile-safe-x page-section"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#CCFF00]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[90rem] gap-12 md:grid-cols-2 md:gap-14 lg:gap-24">
        <div>
          <p className="mobile-section-label lg:hidden" aria-hidden="true">
            06 · Contact
          </p>
          <BrandBadge variant="lime" className="mb-5 max-md:mb-4 md:mb-6">
            Contact
          </BrandBadge>
          <h2 className="section-heading section-heading-mobile md:section-heading-tablet text-[#0F1729]">
            Let&apos;s do something <span className="heading-accent">exciting</span>
          </h2>

          <div className="mobile-panel mt-8 p-5 md:mt-10 md:tablet-panel-inset lg:mt-12 lg:bg-transparent lg:p-0 lg:shadow-none">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-base font-medium lowercase text-muted-navy">
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="your name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleInteraction}
                className="mobile-form-field min-h-11 w-full text-base text-[#0F1729] placeholder:text-[#0F1729]/35 lg:rounded-none lg:border-0 lg:border-b lg:border-[#0F1729]/25 lg:bg-transparent lg:px-0 lg:py-3 lg:shadow-none lg:focus:border-[#0F1729]/70 lg:focus:outline-none lg:focus:ring-0 lg:focus:shadow-none"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-base font-medium lowercase text-muted-navy">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleInteraction}
                className="mobile-form-field min-h-11 w-full text-base text-[#0F1729] placeholder:text-[#0F1729]/35 lg:rounded-none lg:border-0 lg:border-b lg:border-[#0F1729]/25 lg:bg-transparent lg:px-0 lg:py-3 lg:shadow-none lg:focus:border-[#0F1729]/70 lg:focus:outline-none lg:focus:ring-0 lg:focus:shadow-none"
                required
                autoComplete="email"
                inputMode="email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-base font-medium lowercase text-muted-navy">
                phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="optional"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleInteraction}
                className="mobile-form-field min-h-11 w-full text-base text-[#0F1729] placeholder:text-[#0F1729]/35 lg:rounded-none lg:border-0 lg:border-b lg:border-[#0F1729]/25 lg:bg-transparent lg:px-0 lg:py-3 lg:shadow-none lg:focus:border-[#0F1729]/70 lg:focus:outline-none lg:focus:ring-0 lg:focus:shadow-none"
                autoComplete="tel"
                inputMode="tel"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-base font-medium lowercase text-muted-navy">
                message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="tell us about your project"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleInteraction}
                rows={3}
                className="mobile-form-field min-h-[6rem] w-full resize-y text-base text-[#0F1729] placeholder:text-[#0F1729]/35 lg:min-h-[unset] lg:rounded-none lg:border-0 lg:border-b lg:border-[#0F1729]/25 lg:bg-transparent lg:px-0 lg:py-3 lg:shadow-none lg:focus:border-[#0F1729]/70 lg:focus:outline-none lg:focus:ring-0 lg:focus:shadow-none"
                required
                minLength={10}
                maxLength={2000}
              />
            </div>

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />

            <div className="mobile-sticky-cta flex justify-end pt-2 max-lg:sticky max-lg:bottom-0 lg:static lg:bg-transparent lg:p-0">
              <button
                type="submit"
                disabled={isLoading}
                className="btn-touch group w-full gap-2 rounded-xl bg-[#0F1729] px-7 text-white transition-colors hover:bg-[#162038] disabled:opacity-50 md:w-auto lg:rounded-full"
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
          </div>
        </div>

        <div className="mobile-panel flex flex-col justify-center p-5 md:tablet-panel-inset lg:bg-transparent lg:p-0 lg:shadow-none lg:pl-8">
          <p className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em] text-[#0F1729]">
            devora.
          </p>
          <address className="mt-8 space-y-1 not-italic text-base leading-8 text-muted-navy">
            <span className="block">Devora</span>
            <span className="block">United Kingdom</span>
            <span className="block">Remote-first studio</span>
          </address>
          <p className="mt-8">
            <a
              href="mailto:hello@devora.co.uk"
              className="text-base text-[#0F1729] underline-offset-4 transition-colors hover:underline"
            >
              hello@devora.co.uk
            </a>
          </p>
          <p className="mt-6 max-w-sm text-base leading-7 text-muted-navy-subtle">
            Tell us about your project and we&apos;ll get back to you within one working day.
          </p>
        </div>
      </div>
    </section>
  )
}
