import Link from "next/link"
import { ArrowRight, Images, FileText, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "AI Ad Creative Sets",
    description:
      "10–30 ad variations ready for Facebook, Instagram, TikTok, Google Display. Delivered as PNG/JPEG/MP4 and ad copy variants.",
    icon: Images,
  },
  {
    title: "AI-Assist Copywriting",
    description: "Hooks, CTAs, descriptions, product headlines — tested for conversions.",
    icon: FileText,
  },
  {
    title: "Brand AI Style System",
    description: "Color, typography, and AI prompt kit so your ads stay on-brand at scale.",
    icon: Palette,
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-[#F1F2F6]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Services</h2>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-[#6C5CE7] hover:text-[#6C5CE7]/80 font-medium transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white border border-[rgba(11,35,64,0.04)] shadow-[0_8px_24px_rgba(11,35,64,0.06)] rounded-xl hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6C5CE7]/10 mb-4">
                  <service.icon className="w-6 h-6 text-[#6C5CE7]" strokeWidth={1.5} />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link
          href="/services"
          className="flex md:hidden items-center justify-center gap-2 text-[#6C5CE7] font-medium mt-8"
        >
          View all services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
