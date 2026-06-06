"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { BrandBadge } from "@/components/brand-badge"
import { faqs } from "@/lib/faq-content"

export function FAQ() {
  return (
    <section className="section-cream section-shell-cream page-section">
      <div className="page-container page-grid-aside gap-10 md:gap-12">
        <div>
          <BrandBadge variant="lime" className="mb-5 md:mb-6">
            Common questions
          </BrandBadge>
          <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
            Everything you need to <span className="heading-accent">know</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-navy md:mt-6 md:text-lg">
            Our process, services, and how we work with businesses to build websites that matter.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full divide-y divide-[#0F1729]/8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-0 py-1">
              <AccordionTrigger className="min-h-12 py-5 hover:no-underline">
                <span className="text-left text-base font-medium tracking-[-0.01em] text-[#0F1729] md:text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-navy">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
