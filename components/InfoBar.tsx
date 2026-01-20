"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Phone, AlertCircle } from "lucide-react"

const infoItems = [
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 9AM–6PM",
    subValue: "Sunday: 10AM–3PM",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "11919 Tramway Dr",
    subValue: "Cincinnati, OH 45241",
    href: "https://www.google.com/maps/search/?api=1&query=11919+Tramway+Dr,+Cincinnati,+OH+45241",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "917-375-1002",
    subValue: "Call anytime",
    href: "tel:9173751002",
  },
  {
    icon: AlertCircle,
    label: "Roadside",
    value: "Roadside Service",
    subValue: "Available during business hours",
    href: "tel:9173751002",
  },
]

export function InfoBar() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-section"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoItems.map((item, index) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-muted mb-1">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-text-primary">
                      {item.value}
                    </p>
                    {item.subValue && (
                      <p className="text-sm text-text-secondary mt-1">
                        {item.subValue}
                      </p>
                    )}
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card hover:cursor-pointer block"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <div key={index} className="glass-card">
                  {content}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

