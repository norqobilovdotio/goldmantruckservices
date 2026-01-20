"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Mail, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Toast } from "./ui/toast"

interface MapContactProps {
  prefillService?: string
}

export function MapContact({ prefillService }: MapContactProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    truckType: "",
    serviceNeeded: prefillService || "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [toast, setToast] = React.useState<{ message: string; type: "success" | "error" } | null>(null)

  React.useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: prefillService }))
    }
  }, [prefillService])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Honeypot check
    const honeypot = (e.target as HTMLFormElement).querySelector('input[name="website"]') as HTMLInputElement
    if (honeypot?.value) {
      return // Bot detected
    }

    if (!formData.consent) {
      setToast({ message: "Please consent to being contacted.", type: "error" })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setToast({ message: "Thank you! We'll contact you soon.", type: "success" })
        setFormData({
          name: "",
          phone: "",
          email: "",
          truckType: "",
          serviceNeeded: "",
          message: "",
          consent: false,
        })
      } else {
        setToast({ message: "Something went wrong. Please try again or call us.", type: "error" })
      }
    } catch (error) {
      setToast({ message: "Something went wrong. Please try again or call us.", type: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Ready to get your truck back on the road? Contact us today for a free quote or to schedule service.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:9173751002"
                  className="flex items-start gap-4 glass-card hover:cursor-pointer group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Phone</p>
                    <p className="text-lg font-semibold text-text-primary">917-375-1002</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=11919+Tramway+Dr,+Cincinnati,+OH+45241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 glass-card hover:cursor-pointer group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Address</p>
                    <p className="text-lg font-semibold text-text-primary">
                      11919 Tramway Dr<br />
                      Cincinnati, OH 45241
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:service@goldmantruckservices.com"
                  className="flex items-start gap-4 glass-card hover:cursor-pointer group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Email</p>
                    <p className="text-lg font-semibold text-text-primary">
                      service@goldmantruckservices.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-default bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-default bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-default bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="truckType" className="block text-sm font-medium text-text-primary mb-2">
                    Truck Type
                  </label>
                  <select
                    id="truckType"
                    name="truckType"
                    value={formData.truckType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-default bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select truck type</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Box Truck">Box Truck</option>
                    <option value="Flatbed">Flatbed</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-text-primary mb-2">
                    Service Needed
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-default bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select service</option>
                    <option value="Diesel Diagnostics">Diesel Diagnostics</option>
                    <option value="Engine & Drivetrain">Engine & Drivetrain</option>
                    <option value="Brake Systems">Brake Systems</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Electrical Systems">Electrical Systems</option>
                    <option value="Air Systems">Air Systems</option>
                    <option value="DOT Inspections">DOT Inspections</option>
                    <option value="Tire Services">Tire Services</option>
                    <option value="Preventive Maintenance">Preventive Maintenance</option>
                    <option value="PM Services">PM Services</option>
                    <option value="Fleet Services">Fleet Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-default bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-border-default text-accent focus:ring-accent"
                  />
                  <label htmlFor="consent" className="text-sm text-text-secondary">
                    I consent to being contacted by Goldman Truck Services regarding my inquiry. <span className="text-red-500">*</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="glass-card p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=11919+Tramway+Dr,+Cincinnati,+OH+45241&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Goldman Truck Services Location"
              />
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="secondary"
                asChild
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11919+Tramway+Dr,+Cincinnati,+OH+45241"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  )
}

