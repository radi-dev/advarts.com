import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { TrustStripMobile } from "@/components/home/trust-strip"
import { HowItWorks } from "@/components/home/how-it-works"
import { ServicesPreview } from "@/components/home/services-preview"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { PricingTeaser } from "@/components/home/pricing-teaser"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStripMobile />
        <HowItWorks />
        <ServicesPreview />
        <PortfolioPreview />
        <PricingTeaser />
      </main>
      <Footer />
    </>
  )
}
