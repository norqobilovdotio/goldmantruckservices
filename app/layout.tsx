import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Goldman Truck Services | Fast, Reliable Truck Repair | Cincinnati, OH",
  description: "Professional truck repair services in Cincinnati, OH. Fast turnaround, diesel diagnostics, secure parking. Call 917-375-1002.",
  icons: {
    icon: "/GTSFront.png",
    apple: "/GTSFront.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

