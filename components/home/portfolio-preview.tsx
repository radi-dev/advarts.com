import Link from "next/link"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "EcoBottle Campaign",
    result: "+42% CTR",
    tag: "Demo",
  },
  {
    title: "FitApp Launch",
    result: "+35% CTR",
    tag: "Demo",
  },
  {
    title: "CourseNest Promo",
    result: "+28% CTR",
    tag: "Demo",
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Recent work</h2>
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 text-[#6C5CE7] hover:text-[#6C5CE7]/80 font-medium transition-colors"
          >
            View portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Link
              key={item.title}
              href="/portfolio"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-br from-[#0B2340] to-[#1B1B1E] portfolio-item"
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="grid grid-cols-2 gap-2 mb-4 opacity-60">
                  <div className="aspect-square rounded-lg bg-[#6C5CE7]/30" />
                  <div className="aspect-square rounded-lg bg-[#00CEC9]/30" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium flex items-center gap-2">
                  View demo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-2 py-1 bg-[#6C5CE7] text-white text-xs font-medium rounded">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-[#00CEC9] text-sm font-medium">{item.result}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="flex md:hidden items-center justify-center gap-2 text-[#6C5CE7] font-medium mt-8"
        >
          View portfolio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
