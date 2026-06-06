"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("devora-cookie-consent")
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("devora-cookie-consent", "all")
    setIsVisible(false)
    window.location.reload()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1a1a1a] px-5 py-4 text-white md:px-8">
      <div className="mx-auto flex max-w-[90rem] flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-base leading-7 text-muted-light">
          We use cookies to ensure that we give you the best experience on our website.
          If you continue to use this site we will assume that you are happy with it.
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="btn-touch rounded-full bg-[#D4237A] px-6 text-white transition-colors hover:bg-[#b81d66]"
          >
            Ok
          </button>
          <Link
            href="/privacy"
            className="btn-touch rounded-full bg-[#D4237A] px-6 text-white transition-colors hover:bg-[#b81d66]"
          >
            Privacy policy
          </Link>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="ml-1 flex h-11 w-11 items-center justify-center text-muted-light transition-colors hover:text-white"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
