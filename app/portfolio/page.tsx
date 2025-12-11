import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio — AdvArts",
  description:
    "Explore our AI-generated ad creative samples. Each project showcases conversion-optimized visuals and copy.",
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Portfolio</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Explore our AI-generated ad creative samples. Each project showcases conversion-optimized visuals and
              copy.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  )
}
