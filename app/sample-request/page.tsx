import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SampleRequestForm } from "@/components/contact/sample-request-form"

export const metadata: Metadata = {
  title: "Get a Free Sample — AdvArts",
  description: "Request a free 3-ad sample to see the quality of our AI-generated ad creative.",
}

export default function SampleRequestPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Get a free sample</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See the quality of our AI-generated ad creative with a complimentary 3-ad sample. No commitment required.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-[#F1F2F6]">
          <div className="max-w-xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 border border-[rgba(11,35,64,0.04)] shadow-[0_8px_24px_rgba(11,35,64,0.06)]">
              <SampleRequestForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
