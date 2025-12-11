import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MessageSquare, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — AdvArts",
  description: "Get in touch with AdvArts. Book a demo, request a proposal, or start a conversation.",
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email us",
    description: "For general inquiries",
    action: "hello@advarts.com",
    href: "mailto:hello@advarts.com",
  },
  {
    icon: Calendar,
    title: "Book a demo",
    description: "See AdvArts in action",
    action: "Schedule call",
    href: "#calendly",
  },
  {
    icon: MessageSquare,
    title: "Sales inquiry",
    description: "For enterprise pricing",
    action: "sales@advarts.com",
    href: "mailto:sales@advarts.com",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Get in touch</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Ready to create ad creative that converts? Fill out the form below or book a demo call.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#F1F2F6]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Methods */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-heading text-2xl font-bold mb-8">Contact methods</h2>
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="flex items-start gap-4 bg-white rounded-xl p-6 border border-[rgba(11,35,64,0.04)] shadow-[0_8px_24px_rgba(11,35,64,0.06)] hover:shadow-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6C5CE7]/10 shrink-0">
                      <method.icon className="w-6 h-6 text-[#6C5CE7]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <span className="text-sm text-[#00CEC9] font-medium">{method.action}</span>
                    </div>
                  </a>
                ))}

                {/* Calendly Placeholder */}
                <div id="calendly" className="bg-[#0B2340] rounded-xl p-6 text-center">
                  <Calendar className="w-12 h-12 text-[#00CEC9] mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">Schedule a demo</h3>
                  <p className="text-sm text-white/60 mb-4">Pick a time that works for you</p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00CEC9] hover:bg-[#00CEC9]/90 text-[#0B2340] font-medium px-6 py-2 rounded-lg transition-colors"
                  >
                    Open Calendly
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl p-8 border border-[rgba(11,35,64,0.04)] shadow-[0_8px_24px_rgba(11,35,64,0.06)]">
                  <h2 className="font-heading text-2xl font-bold mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
