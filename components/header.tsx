"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdvArtsLogo } from "@/components/advarts-logo"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        isScrolled ? "bg-[#0B2340]" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-[1200px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2" aria-label="AdvArts Home">
          <AdvArtsLogo variant="full" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-[#00CEC9] text-[#00CEC9] bg-transparent hover:bg-[#00CEC9]/10 rounded-lg"
          >
            <Link href="/contact">Book a demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2340] border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-white text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="w-full border-[#00CEC9] text-[#00CEC9] bg-transparent hover:bg-[#00CEC9]/10"
            >
              <Link href="/contact">Book a demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
