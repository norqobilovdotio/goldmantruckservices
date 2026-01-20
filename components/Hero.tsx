"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Wrench, Clock, Users, Shield } from "lucide-react"
import { Button } from "./ui/button"
import { Phone } from "lucide-react"

const trustChips = [
  {
    icon: Clock,
    text: "Same-day service when possible",
  },
  {
    icon: Wrench,
    text: "Diesel diagnostics",
  },
  {
    icon: Users,
    text: "Truck repairs",
  },
  {
    icon: Shield,
    text: "Secure parking",
  },
]

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-section text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            Fast, Reliable Truck Repair + Secure Parking
          </motion.h1>
          <div className="mb-8">
            <div className="mx-auto max-w-6xl">
              <div className="relative rounded-[24px] p-[14px] bg-white/65 border border-[rgba(59,130,246,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-[8px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      label: "Repairs & Service",
                      alt: "Technicians performing truck repairs and service",
                      src: "/service.png",
                    },
                    {
                      label: "Roadside / Towing",
                      alt: "Roadside assistance and towing for commercial trucks",
                      src: "/roadside.png",
                    },
                    {
                      label: "Diesel Diagnostics",
                      alt: "Diesel diagnostics equipment and service bay",
                      src: "/dizel.png",
                    },
                    {
                      label: "Preventive Maintenance",
                      alt: "Preventive maintenance inspection for trucks",
                      src: "/pv.png",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="group relative overflow-hidden rounded-2xl shadow-sm transition-shadow duration-200 ease-out motion-reduce:transition-none hover:shadow-md"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={700}
                        height={520}
                        className="h-32 sm:h-36 md:h-40 lg:h-44 w-full object-cover transition-transform duration-200 ease-out motion-reduce:transition-none group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.08)] to-[rgba(15,23,42,0.18)]" />
                      <div className="absolute left-3 top-3">
                        <span className="inline-flex items-center rounded-full border border-[rgba(59,130,246,0.18)] bg-white/80 px-2.5 py-1 text-[12px] font-semibold text-text-primary shadow-sm transition-colors duration-200 ease-out motion-reduce:transition-none group-hover:border-[rgba(59,130,246,0.32)]">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-text-secondary">
                  We know downtime costs money — quick turnaround and clear communication.
                </p>
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto"
          >
            Quick turnaround, experienced technicians, and driver-friendly communication. 
            We keep your fleet moving with professional service you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              asChild
            >
              <a href="tel:9173751002" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {trustChips.map((chip, index) => (
              <div
                key={index}
                className="glass-card flex items-center gap-3 p-4"
              >
                <chip.icon className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-text-primary">
                  {chip.text}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

