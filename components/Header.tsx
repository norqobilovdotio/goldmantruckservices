"use client"

import * as React from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Parking", href: "#parking" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "top-2" : "top-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-pill flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            Goldman Truck Services
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick("#contact")}
              >
                Get Quote
              </Button>
              <Button
                variant="primary"
                size="sm"
                asChild
              >
                <a href="tel:9173751002" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-section">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-base font-medium text-text-secondary hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border-default">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full"
                >
                  Get Quote
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  asChild
                  className="w-full"
                >
                  <a href="tel:9173751002" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

