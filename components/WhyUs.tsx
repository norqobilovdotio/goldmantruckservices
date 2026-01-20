"use client"

import { motion } from "framer-motion"
import { Clock, DollarSign, MessageSquare, Users, Award, MapPin } from "lucide-react"

const valueProps = [
  { icon: Clock, text: "Fast turnaround" },
  { icon: DollarSign, text: "Honest estimates" },
  { icon: MessageSquare, text: "Driver-first communication" },
  { icon: Users, text: "Fleet accounts welcome" },
  { icon: Award, text: "Quality workmanship" },
  { icon: MapPin, text: "Convenient Cincinnati location" },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-section"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose Goldman Truck Services
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We understand that downtime costs money. That's why we focus on getting you back on the road quickly and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-base font-semibold text-text-primary">
                    {prop.text}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

