"use client"

import { motion } from "framer-motion"
import {
  Wrench,
  Cog,
  Shield,
  Car,
  Zap,
  Wind,
  FileCheck,
  Circle,
  Settings,
  Calendar,
  Users,
} from "lucide-react"

const services = [
  { icon: Wrench, name: "Diesel Diagnostics", description: "Advanced diagnostic equipment for quick problem identification" },
  { icon: Cog, name: "Engine & Drivetrain", description: "Complete engine and transmission repair services" },
  { icon: Shield, name: "Brake Systems", description: "Brake inspection, repair, and replacement" },
  { icon: Car, name: "Suspension", description: "Suspension system maintenance and repair" },
  { icon: Zap, name: "Electrical Systems", description: "Electrical troubleshooting and repair" },
  { icon: Wind, name: "Air Systems", description: "Air brake and air system service" },
  { icon: FileCheck, name: "DOT Inspections", description: "Certified DOT inspection services" },
  { icon: Circle, name: "Tire Services", description: "Tire installation, repair, and balancing" },
  { icon: Settings, name: "Preventive Maintenance", description: "Scheduled maintenance to prevent breakdowns" },
  { icon: Calendar, name: "PM Services", description: "Regular preventive maintenance programs" },
  { icon: Users, name: "Fleet Services", description: "Dedicated fleet account management" },
]

interface ServicesProps {
  onServiceClick?: (serviceName: string) => void
}

export function Services({ onServiceClick }: ServicesProps) {
  const handleServiceClick = (serviceName: string) => {
    if (onServiceClick) {
      onServiceClick(serviceName)
    }
    const element = document.querySelector("#contact")
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  return (
    <section id="services" className="py-8 px-4 sm:px-6 lg:px-8">
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
              Complete Truck Services
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Professional repair services to keep your fleet on the road. 
              Fast, reliable, and backed by experienced technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleServiceClick(service.name)}
                    className="glass-card w-full text-left hover:cursor-pointer group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {service.description}
                    </p>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

