"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "J. M.",
    text: "Fast service and honest pricing. Got my truck back on the road same day. Highly recommend.",
    rating: 5,
  },
  {
    name: "R. T.",
    text: "Great communication throughout the repair process. They kept me updated every step of the way.",
    rating: 5,
  },
  {
    name: "D. K.",
    text: "Professional team and quality work. My fleet has been using them for over a year now.",
    rating: 5,
  },
  {
    name: "M. S.",
    text: "Roadside service was fast and professional. They got me moving again.",
    rating: 5,
  },
  {
    name: "T. B.",
    text: "Fair prices and quick turnaround. No complaints. Will definitely use again.",
    rating: 5,
  },
  {
    name: "C. L.",
    text: "Parking was secure and convenient. Service was top-notch. Very satisfied.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-8 px-4 sm:px-6 lg:px-8">
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
              What Our Customers Say
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real feedback from drivers and fleet managers who trust us with their repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-text-secondary mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="text-sm font-semibold text-text-primary">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

