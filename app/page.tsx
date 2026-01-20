"use client"

import * as React from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { InfoBar } from "@/components/InfoBar"
import { Services } from "@/components/Services"
import { Parking } from "@/components/Parking"
import { WhyUs } from "@/components/WhyUs"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { MapContact } from "@/components/MapContact"
import { Footer } from "@/components/Footer"

export default function Home() {
  const [prefillService, setPrefillService] = React.useState<string>("")

  const handleServiceClick = (serviceName: string) => {
    setPrefillService(serviceName)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InfoBar />
      <Services onServiceClick={handleServiceClick} />
      <Parking />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <MapContact prefillService={prefillService} />
      <Footer />
    </main>
  )
}

