"use client"

import { Phone, MapPin, Mail } from "lucide-react"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Parking", href: "#parking" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border-default">
      <div className="max-w-7xl mx-auto">
        <div className="glass-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Goldman Truck Services
              </h3>
              <p className="text-text-secondary mb-4">
                Fast, reliable truck repair services in Cincinnati, OH.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:9173751002"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>917-375-1002</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11919+Tramway+Dr,+Cincinnati,+OH+45241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  <span>11919 Tramway Dr, Cincinnati, OH 45241</span>
                </a>
                <a
                  href="mailto:service@goldmantruckservices.com"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>service@goldmantruckservices.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Legal
              </h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="/privacy"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-border-default text-center text-sm text-text-muted">
            <p>&copy; {new Date().getFullYear()} Goldman Truck Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

