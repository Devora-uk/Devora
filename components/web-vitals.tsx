"use client"

import { useReportWebVitals } from "next/web-vitals"

type GtagFn = (
  command: "event",
  eventName: string,
  params: Record<string, string | number | boolean>,
) => void

declare global {
  interface Window {
    gtag?: GtagFn
  }
}

function reportWebVitalToAnalytics(metric: {
  id: string
  name: string
  value: number
  rating: string
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return

  window.gtag("event", metric.name, {
    event_category: "Web Vitals",
    event_label: metric.id,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_rating: metric.rating,
    non_interaction: true,
  })
}

export function WebVitals() {
  useReportWebVitals(reportWebVitalToAnalytics)
  return null
}
