import { MessageSquare, Sparkles, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Share brief",
    description: "Tell us your product, audience and goal. 5 minutes.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "We generate",
    description: "AI-crafted visuals + copy. Human polish. 10–48 hrs.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Test & scale",
    description: "Download, run A/B tests, and scale winners.",
    icon: TrendingUp,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#6C5CE7]/10 mb-6">
                <step.icon className="w-8 h-8 text-[#6C5CE7]" strokeWidth={1.5} />
              </div>
              <div className="text-sm font-semibold text-[#6C5CE7] mb-2">{step.number}</div>
              <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
