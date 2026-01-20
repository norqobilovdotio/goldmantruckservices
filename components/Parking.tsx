"use client"

import { motion } from "framer-motion"
import { Shield, Lightbulb, Navigation, Lock, Moon, Phone } from "lucide-react"
import { Button } from "./ui/button"

const features = [
  { icon: Lightbulb, text: "Well-lit facility" },
  { icon: Navigation, text: "Easy access" },
  { icon: Lock, text: "Secure lot" },
  { icon: Moon, text: "Overnight options" },
  { icon: Phone, text: "Call for availability" },
]

export function Parking() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="parking" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-section"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 rounded-lg bg-accent/10 text-accent flex-shrink-0">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Secure Truck Parking
              </h2>
              <p className="text-lg text-text-secondary mb-6">
                Safe, secure parking for your truck while you wait for service or need overnight storage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="glass-card flex items-center gap-3 p-4">
                  <Icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-text-primary">
                    {feature.text}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              asChild
            >
              <a href="tel:9173751002" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Reserve by Phone
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
            >
              Request Parking Info
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

