import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Sparkles } from "lucide-react"
import Link from "next/link"
import { SaasWaitlist } from "@/components/pricing/saas-waitlist"

export const metadata: Metadata = {
  title: "Pricing — AdvArts",
  description:
    "Choose a package that fits your needs. Services start at $49 for a 3-ad sample. SaaS platform coming soon.",
}

const servicePackages = [
  {
    name: "Quick Test",
    price: "$49",
    features: ["3 ad variations", "3 headline options", "3 CTAs", "1 style prompt", "48hr delivery"],
  },
  {
    name: "Growth Pack",
    price: "$499",
    features: [
      "30 ad variations",
      "5 video cuts",
      "15 copy variants",
      "A/B test plan",
      "Audience recommendations",
      "Brand AI Prompt Kit",
      "5-day delivery",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "API access",
      "Monthly retainer",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
    ],
  },
]

const saasPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    features: {
      "AI Generator": true,
      "Brand Styles": "1",
      "Copy Variants": "10/mo",
      "Predictive Score": false,
      "Export to Ad Platforms": true,
      "Team Seats": "1",
      "API Access": false,
    },
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    highlighted: true,
    features: {
      "AI Generator": true,
      "Brand Styles": "5",
      "Copy Variants": "50/mo",
      "Predictive Score": true,
      "Export to Ad Platforms": true,
      "Team Seats": "3",
      "API Access": false,
    },
  },
  {
    name: "Agency",
    price: "$249",
    period: "/mo",
    features: {
      "AI Generator": true,
      "Brand Styles": "Unlimited",
      "Copy Variants": "Unlimited",
      "Predictive Score": true,
      "Export to Ad Platforms": true,
      "Team Seats": "Unlimited",
      "API Access": true,
    },
  },
]

const featureList = [
  "AI Generator",
  "Brand Styles",
  "Copy Variants",
  "Predictive Score",
  "Export to Ad Platforms",
  "Team Seats",
  "API Access",
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Simple, transparent pricing</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              No hidden fees. Cancel anytime. Choose a package that fits your needs.
            </p>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-24 bg-[#F1F2F6]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-4">Agency Services</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Get conversion-optimized ad creative delivered by our team.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {servicePackages.map((pkg) => (
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
                        Best Value
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-heading text-xl">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#0B2340]">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-[#00CEC9] shrink-0" />
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
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SaaS Teaser */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#6C5CE7]/10 text-[#6C5CE7] text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">AdvArts Studio</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Generate, test, and scale ad creative in minutes. Self-serve platform for modern growth teams.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                "One-click ad generation for any platform",
                "Brand-safe style system guarantees on-brand output",
                "Predictive performance scoring to prioritize winners",
                "Export presets for Facebook, Google, TikTok",
                "Team seats + version history + A/B testing workflows",
                "Developer API for custom integrations",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3 bg-[#F1F2F6] rounded-xl p-4">
                  <Check className="w-5 h-5 text-[#6C5CE7] shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* SaaS Pricing Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 bg-[#F1F2F6] rounded-tl-xl">Features</th>
                    {saasPlans.map((plan) => (
                      <th
                        key={plan.name}
                        className={`py-4 px-4 text-center ${plan.highlighted ? "bg-[#6C5CE7] text-white" : "bg-[#F1F2F6]"} ${plan.name === "Agency" ? "rounded-tr-xl" : ""}`}
                      >
                        <div className="font-heading font-semibold">{plan.name}</div>
                        <div className="mt-1">
                          <span className="text-2xl font-bold">{plan.price}</span>
                          <span className="text-sm opacity-70">{plan.period}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureList.map((feature, i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F1F2F6]/50"}>
                      <td className="py-4 px-4 text-sm font-medium">{feature}</td>
                      {saasPlans.map((plan) => {
                        const value = plan.features[feature as keyof typeof plan.features]
                        return (
                          <td key={plan.name} className="py-4 px-4 text-center">
                            {value === true ? (
                              <Check className="w-5 h-5 text-[#00CEC9] mx-auto" />
                            ) : value === false ? (
                              <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                            ) : (
                              <span className="text-sm">{value}</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Waitlist Form */}
            <SaasWaitlist />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
