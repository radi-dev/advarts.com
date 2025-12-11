import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services — AdvArts",
  description:
    "We create ad creative that's optimized for clicks, conversions and ROAS. Choose a package or book a custom proposal.",
}

const packages = [
  {
    name: "Quick Test",
    price: "$49",
    description: "Perfect for testing the waters",
    delivery: "48 hours",
    features: ["3 ad image variations (1080×1080)", "3 headline options + 3 CTAs", "1 style prompt for your brand"],
    cta: "Order Quick Test",
    highlighted: false,
  },
  {
    name: "Growth Pack",
    price: "$499",
    description: "Full creative arsenal for scaling",
    delivery: "5 business days",
    features: [
      "30 ad variations (images + 5 short video cuts)",
      "15 copy variants (hooks, body, CTAs)",
      "A/B test plan + recommended audiences",
      "Brand AI Prompt Kit",
    ],
    cta: "Start Growth Pack",
    highlighted: true,
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    description: "Tailored for large-scale operations",
    delivery: "Flexible",
    features: ["API access", "Monthly creative retainer", "Dedicated account manager", "Custom integrations"],
    cta: "Request proposal",
    highlighted: false,
  },
]

const testimonials = [
  {
    quote: "AdvArts doubled our CTR in the first test.",
    name: "Ana",
    company: "Shoply",
  },
  {
    quote: "Creative churn is now 10x faster. We scale winners.",
    name: "Ben",
    company: "CourseNest",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Services built for conversion
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              We create ad creative that's optimized for clicks, conversions and ROAS. Choose a package or book a custom
              proposal.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 bg-[#F1F2F6]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`relative rounded-xl ${
                    pkg.highlighted
                      ? "border-2 border-[#6C5CE7] shadow-[0_8px_32px_rgba(108,92,231,0.15)]"
                      : "border border-[rgba(11,35,64,0.04)] shadow-[0_8px_24px_rgba(11,35,64,0.06)]"
                  } bg-white`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#6C5CE7] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="font-heading text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#0B2340]">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Delivery: {pkg.delivery}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#00CEC9] shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-lg ${
                        pkg.highlighted
                          ? "bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
                          : "bg-[#0B2340] hover:bg-[#0B2340]/90 text-white"
                      }`}
                    >
                      <Link href="/contact">{pkg.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">What our clients say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-[#F1F2F6] border-none rounded-xl p-6">
                  <p className="text-lg text-[#0B2340] mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm text-muted-foreground">
                    — {testimonial.name}, {testimonial.company}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
