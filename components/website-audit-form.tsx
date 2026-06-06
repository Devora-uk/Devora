"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2, ArrowRight, ScanSearch, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const auditIncludes = [
  "Performance and speed review",
  "SEO optimisation recommendations",
  "Mobile responsiveness check",
  "User experience assessment",
  "Conversion opportunities",
] as const

const inputClassName =
  "min-h-11 w-full rounded-none border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25"

const labelClassName =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70"

interface WebsiteAuditFormProps {
  className?: string
  variant?: "hero" | "inline"
}

function AuditFormContent({
  onFormSubmit,
  router,
}: {
  onFormSubmit: () => void
  router: ReturnType<typeof useRouter>
}) {
  const [formData, setFormData] = useState({
    email: "",
    websiteUrl: "",
    company: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInteraction()
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isLoading) {
      return
    }

    if (formData.website) {
      console.log("Bot detected via honeypot")
      toast.error("Invalid submission detected. Please try again.", {
        duration: 5000,
      })
      return
    }

    const now = Date.now()
    const timeSinceLoad = now - formLoadTime.current
    const minTimeToSubmit = 3000

    if (!hasInteracted.current || timeSinceLoad < minTimeToSubmit) {
      console.log("Bot detected via time validation", {
        timeSinceLoad,
        hasInteracted: hasInteracted.current,
      })
      toast.error("Please take your time filling out the form.", {
        duration: 5000,
      })
      return
    }

    if (firstInteractionTime.current) {
      const timeSinceInteraction = now - firstInteractionTime.current
      if (timeSinceInteraction < 2000) {
        console.log("Bot detected via interaction time validation", {
          timeSinceInteraction,
        })
        toast.error("Please take your time filling out the form.", {
          duration: 5000,
        })
        return
      }
    }

    if (!formData.email?.trim() || !formData.websiteUrl?.trim()) {
      toast.error("Please fill in all required fields.", {
        duration: 5000,
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please provide a valid email address.", {
        duration: 5000,
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/website-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          websiteUrl: formData.websiteUrl,
          company: formData.company,
          formLoadTime: formLoadTime.current,
          interactionTime: firstInteractionTime.current,
          submitTime: Date.now(),
        }),
      })

      let data
      try {
        data = await response.json()
      } catch {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }
        data = {}
      }

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      toast.success("Audit request submitted successfully! Redirecting...", {
        duration: 2000,
      })

      setFormData({
        email: "",
        websiteUrl: "",
        company: "",
        website: "",
      })

      onFormSubmit()

      setTimeout(() => {
        router.push("/thank-you")
      }, 500)
    } catch (error) {
      console.error("Form submission error:", error)

      if (error instanceof TypeError && error.message.includes("fetch")) {
        toast.error("Network error. Please check your connection and try again.", {
          duration: 5000,
        })
      } else {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to submit audit request. Please try again."
        toast.error(errorMessage, {
          duration: 5000,
        })
      }

      setIsLoading(false)
    }
  }

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-40" aria-hidden="true" />

      <div className="relative border-b border-black/15 bg-foreground px-5 pb-6 pt-5 text-background sm:px-6 sm:pb-7 sm:pt-6">
        <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-background/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-background/90">
          <ScanSearch className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Free audit
        </div>
        <h2 className="text-2xl font-black leading-[1.05] tracking-[-0.03em] sm:text-[1.75rem]">
          See what your website is costing you
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-background/82">
          We review speed, SEO, mobile experience and conversion gaps, then send practical fixes within 24 hours.
        </p>
      </div>

      <div className="relative space-y-5 bg-card px-5 py-5 sm:px-6 sm:py-6">
        <div className="border border-black/15 bg-background/60 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#006677]">
            What you receive
          </p>
          <ul className="mt-3 space-y-2.5">
            {auditIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#006677]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
          onKeyDown={(e) => {
            if (e.key === "Enter" && isLoading) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
          onClick={(e) => {
            const target = e.target as HTMLElement
            if (
              target instanceof HTMLButtonElement &&
              target.type === "submit" &&
              isLoading
            ) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="audit-website-url" className={labelClassName}>
                Website URL *
              </label>
              <input
                id="audit-website-url"
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                onFocus={handleInteraction}
                placeholder="https://yourwebsite.com"
                className={inputClassName}
                required
                autoComplete="url"
              />
            </div>

            <div>
              <label htmlFor="audit-email" className={labelClassName}>
                Email address *
              </label>
              <input
                id="audit-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleInteraction}
                placeholder="you@company.com"
                className={inputClassName}
                required
                autoComplete="email"
                inputMode="email"
              />
            </div>

            <div>
              <label htmlFor="audit-company" className={labelClassName}>
                Company name
              </label>
              <input
                id="audit-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={handleInteraction}
                placeholder="Your company"
                className={inputClassName}
                autoComplete="organization"
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
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-full bg-foreground text-base font-bold text-background hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault()
                e.stopPropagation()
              }
            }}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Get my free audit</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </form>

        <p className="text-center text-xs leading-5 text-muted-foreground">
          No spam. Just a clear, useful review delivered within 24 hours.
        </p>
      </div>
    </div>
  )
}

export default function WebsiteAuditForm({
  className = "",
  variant = "inline",
}: WebsiteAuditFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const dialogContentClassName =
    "gap-0 max-h-[min(100dvh-1rem,44rem)] overflow-y-auto border-black/20 bg-card p-0 shadow-[0_30px_110px_rgba(15,23,42,0.16)] sm:max-w-[min(100vw-2rem,32rem)] [&_[data-slot=dialog-close]]:top-4 [&_[data-slot=dialog-close]]:right-4 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:h-9 [&_[data-slot=dialog-close]]:w-9 [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-black/15 [&_[data-slot=dialog-close]]:bg-background [&_[data-slot=dialog-close]]:text-foreground [&_[data-slot=dialog-close]]:opacity-100 hover:[&_[data-slot=dialog-close]]:bg-muted"

  if (variant === "hero") {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className={`group w-full cursor-pointer text-left ${className}`}
          >
            <div className="border border-black/20 bg-card p-5 shadow-sm transition-colors hover:border-accent/60 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-black/15 bg-background">
                    <ScanSearch className="h-5 w-5 text-[#006677]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-[-0.02em] text-foreground">
                      Free website audit
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      Practical insights within 24 hours
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className="h-5 w-5 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-[#006677]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className={dialogContentClassName}>
          <DialogHeader className="sr-only">
            <DialogTitle>Free website audit</DialogTitle>
            <DialogDescription>
              Request a free comprehensive audit of your website
            </DialogDescription>
          </DialogHeader>
          <AuditFormContent onFormSubmit={() => setIsOpen(false)} router={router} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className={className}>
      <AuditFormContent onFormSubmit={() => {}} router={router} />
    </div>
  )
}
