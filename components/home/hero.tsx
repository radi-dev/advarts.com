import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B2340] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#6C5CE7] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#00CEC9] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-300 mx-auto px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-tight mb-6">
              AI-powered ad creatives that convert
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Generate highly converting visuals and ad copy — fast. From single-test creatives to full-funnel
              campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
              >
                <Link href="/sample-request">Get a free sample</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[1.5px] border-[#00CEC9] text-[#00CEC9] bg-transparent hover:bg-[#00CEC9]/10 rounded-lg"
              >
                <Link href="/contact">Book a demo</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="bg-[#1B1B1E] rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-[#6C5CE7]/20 to-[#00CEC9]/20 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded bg-[#6C5CE7]/40" />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-2 w-20 bg-white/20 rounded" />
                <div className="h-2 w-16 bg-[#6C5CE7]/40 rounded" />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6C5CE7] rounded-xl rotate-12 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00CEC9] rounded-lg -rotate-12 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
