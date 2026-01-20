"use client"

import { motion } from "framer-motion"
import { Accordion } from "./ui/accordion"

const faqItems = [
  {
    question: "Can I park overnight?",
    answer: "Yes, we offer secure overnight parking. Please call ahead to check availability and reserve a spot.",
  },
  {
    question: "Do you offer fleet accounts?",
    answer: "Yes, we welcome fleet accounts and offer dedicated account management and flexible payment terms.",
  },
  {
    question: "Do you provide estimates before repairs?",
    answer: "Yes, we provide honest, upfront estimates before starting any work. No surprises, no hidden fees.",
  },
  {
    question: "What are your hours?",
    answer: "We&apos;re open Monday through Saturday from 9AM to 6PM. Sunday hours are 10AM to 3PM. Roadside service is available during business hours.",
  },
  {
    question: "Do you handle diagnostics?",
    answer: "Yes, we use advanced diagnostic equipment to quickly identify issues with diesel engines and electrical systems.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, and offer net terms for fleet accounts. Contact us for payment options.",
  },
  {
    question: "How do I get directions?",
    answer: "We&apos;re located at 11919 Tramway Dr, Cincinnati, OH 45241. Click the address in our contact section for directions, or call us at 917-375-1002.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "We do our best to provide same-day service when possible, depending on the complexity of the repair and our current schedule.",
  },
  {
    question: "What types of trucks do you service?",
    answer: "We service commercial trucks including Class 8 trucks, box trucks, flatbeds, and more.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-8 px-4 sm:px-6 lg:px-8">
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Have a question? We&apos;re here to help.
            </p>
          </div>

          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}

