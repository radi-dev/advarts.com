import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About — AdvArts",
  description:
    "Meet the team behind AdvArts. We're creators and engineers combining AI and design to build ad creative that performs.",
}

const team = [
  {
    name: "Radi",
    role: "Creative Engineer",
    bio: "Full-stack engineer with a passion for AI and automation. Radi leads the technical development of our creative generation systems and ensures every output meets our quality standards.",
    email: "radi@advarts.com",
    avatar: "/professional-male-portrait-headshot-friendly.jpg",
  },
  {
    name: "Christi",
    role: "Designer",
    bio: "Visual designer with 8+ years of experience in brand and performance marketing. Christi crafts the creative direction and ensures every ad is both beautiful and conversion-optimized.",
    email: "christi@advarts.com",
    avatar: "/professional-female-portrait-headshot-friendly.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Built by creators + engineers
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              We're Radi and Christi — a creative engineer + designer pair who combine AI and design to build ad
              creative that performs. We started AdvArts to give startups the quality of an agency at a price and speed
              that fits modern growth teams.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-[#F1F2F6]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-16">Meet the team</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-[#0B2340]">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role} at AdvArts`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#6C5CE7] font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <Link
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-[#00CEC9] hover:text-[#00CEC9]/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're building AdvArts into a platform that automates the creative runways for scale — from ideation to
                A/B winners. Our goal is to democratize high-quality ad creative so every startup can compete with the
                resources of enterprise marketing teams.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#0B2340]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-white text-center mb-16">What we believe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Results First",
                  description: "Every creative decision we make is backed by conversion data and performance metrics.",
                },
                {
                  title: "Speed Matters",
                  description: "Growth teams need to move fast. We deliver quality at the speed of modern marketing.",
                },
                {
                  title: "Human + AI",
                  description: "AI generates scale, humans ensure quality. The best results come from combining both.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
