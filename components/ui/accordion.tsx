"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="glass-card overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="font-semibold text-text-primary pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-text-muted flex-shrink-0 transition-transform duration-200",
                openIndex === index && "transform rotate-180"
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-text-secondary">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

