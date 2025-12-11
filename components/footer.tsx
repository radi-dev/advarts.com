import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdvArtsLogo } from "@/components/advarts-logo"

const footerLinks = {
  product: [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1B1B1E] text-white" role="contentinfo">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to see results?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get conversion-first ad creatives that actually perform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
              >
                <Link href="/sample-request">Get a free sample</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10">
                <Link href="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <AdvArtsLogo variant="full" className="h-8 mb-4" />
            <p className="text-white/60 text-sm">AI-driven ad creatives that convert.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} AdvArts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
