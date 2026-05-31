"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, Mail, MapPin, Sparkles } from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    website: "", // Honeypot field - bots will fill this
  })
  const [isLoading, setIsLoading] = useState(false)
  const formLoadTime = useRef<number>(Date.now())
  const firstInteractionTime = useRef<number | null>(null)
  const hasInteracted = useRef<boolean>(false)

  // Track when form component mounts
  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  // Track first user interaction with form fields
  const handleInteraction = () => {
    if (!hasInteracted.current) {
      firstInteractionTime.current = Date.now()
      hasInteracted.current = true
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInteraction()
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    console.log('Form submit triggered', { isLoading, formData })
    
    // Prevent double submission
    if (isLoading) {
      console.log('Already loading, preventing double submission')
      return
    }
    
    // Honeypot check - if website field is filled, it's likely a bot
    if (formData.website) {
      console.log('Bot detected via honeypot')
      toast.error('Invalid submission detected. Please try again.', {
        duration: 5000,
      })
      return
    }

    // Time-based validation - reject submissions that happen too quickly
    const now = Date.now()
    const timeSinceLoad = now - formLoadTime.current
    const minTimeToSubmit = 3000 // Minimum 3 seconds from form load
    
    // If user hasn't interacted yet, or submission is too fast, it's suspicious
    if (!hasInteracted.current || timeSinceLoad < minTimeToSubmit) {
      console.log('Bot detected via time validation', { timeSinceLoad, hasInteracted: hasInteracted.current })
      toast.error('Please take your time filling out the form.', {
        duration: 5000,
      })
      return
    }

    // Check time since first interaction (should be at least 2 seconds)
    if (firstInteractionTime.current) {
      const timeSinceInteraction = now - firstInteractionTime.current
      if (timeSinceInteraction < 2000) {
        console.log('Bot detected via interaction time validation', { timeSinceInteraction })
        toast.error('Please take your time filling out the form.', {
          duration: 5000,
        })
        return
      }
    }

    // Basic validation
    if (!formData.message || formData.message.trim().length < 10) {
      toast.error('Please provide a more detailed message (at least 10 characters).', {
        duration: 5000,
      })
      return
    }

    if (formData.message.length > 2000) {
      toast.error('Message is too long. Please keep it under 2000 characters.', {
        duration: 5000,
      })
      return
    }

      console.log('Starting form submission...')
      setIsLoading(true)

      try {
        console.log('Sending request to /api/contact')
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
            formLoadTime: formLoadTime.current,
            interactionTime: firstInteractionTime.current,
            submitTime: Date.now(),
          }),
        })
      
      console.log('Response received:', { status: response.status, ok: response.ok })

      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        // If response is not JSON, check status
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }
        data = {}
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      // Show success message
      toast.success('Message sent successfully! Redirecting...', {
        duration: 2000,
      })

      // Clear form data on success (only after successful response)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        website: "",
      })

      // Small delay to ensure form state is cleared before navigation
      setTimeout(() => {
        // Redirect to thank you page for Google Ads conversion tracking
        router.push('/thank-you')
      }, 500)
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Handle network errors specifically
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast.error('Network error. Please check your connection and try again.', {
          duration: 5000,
        })
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
        toast.error(errorMessage, {
          duration: 5000,
        })
      }
      
      setIsLoading(false)
      // Don't reset form on error - keep user's data
    }
  }

  return (
    <>
      <section id="contact" className="bg-card px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Get in touch</p>
              <h2 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl">
                Ready to stop looking ordinary?
              </h2>
            </div>
            <p className="text-lg leading-8 text-foreground/76">
              Tell us what you are building, what is not working, and what you want the site to make happen next.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8 bg-foreground p-6 text-background md:col-span-1 md:p-8">
              <div>
                <Sparkles className="mb-8 h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="text-3xl font-black leading-none tracking-[-0.035em]">Brief us like you mean it.</h3>
                <p className="mt-4 text-sm leading-6 text-background/82">
                  We reply with the next sensible step, not a sales script.
                </p>
              </div>

              <div className="flex gap-4 border-t border-white/15 pt-8">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-sm font-black">Email</h3>
                  <p className="break-all text-sm text-background/82">hello@devora.co.uk</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-sm font-black">Location</h3>
                  <p className="text-sm text-background/82">United Kingdom (Remote-First)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-5 md:col-span-2 md:p-8">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4 md:space-y-6"
                noValidate
                onKeyDown={(e) => {
                  // Prevent form submission on Enter key if loading
                  if (e.key === 'Enter' && isLoading) {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
                onClick={(e) => {
                  // Prevent accidental form submission on mobile
                  const target = e.target as HTMLElement
                  if (target instanceof HTMLButtonElement && target.type === 'submit' && isLoading) {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={handleInteraction}
                      className="min-h-12 w-full rounded-none border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 md:px-4"
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={handleInteraction}
                      className="min-h-12 w-full rounded-none border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 md:px-4"
                      required
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleInteraction}
                      className="min-h-12 w-full rounded-none border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 md:px-4"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 (0)123 456 7890"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={handleInteraction}
                      className="min-h-12 w-full rounded-none border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 md:px-4"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Company Name (Optional)
                  </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={handleInteraction}
                      className="min-h-12 w-full rounded-none border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 md:px-4"
                      autoComplete="organization"
                    />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What's your vision?"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleInteraction}
                    rows={4}
                    className="w-full resize-y rounded-none border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-foreground/48 hover:border-accent/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25 md:px-4"
                    required
                    minLength={10}
                    maxLength={2000}
                  />
                </div>

                {/* Honeypot field - hidden from users but visible to bots */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0,
                    pointerEvents: 'none'
                  }}
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-full bg-foreground text-base font-bold text-background hover:bg-accent md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                  onClick={(e) => {
                    // Prevent double clicks/taps on mobile
                    if (isLoading) {
                      e.preventDefault()
                      e.stopPropagation()
                      return
                    }
                  }}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
