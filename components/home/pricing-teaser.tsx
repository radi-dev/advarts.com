import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PricingTeaser() {
  return (
    <section className="py-24 bg-[#0B2340]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Start creating today</h2>
        <p className="text-white/70 mb-2">
          Services start at <span className="text-[#00CEC9] font-semibold">$49</span> for a 3-ad sample.
        </p>
        <p className="text-white/50 text-sm mb-8">SaaS coming soon.</p>
        <Button
          asChild
          size="lg"
          className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
        >
          <Link href="/pricing">See pricing</Link>
        </Button>
      </div>
    </section>
  )
}
