import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service — AdvArts",
  description: "AdvArts Terms of Service. Read our terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-slate">
            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using AdvArts services, you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our services.
            </p>

            <h2>2. Services</h2>
            <p>
              AdvArts provides AI-powered ad creative generation services. We reserve the right to modify, suspend, or
              discontinue any part of our services at any time.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon full payment, you own the ad creative we produce for you. AdvArts retains the right to use anonymized
              examples of our work for portfolio purposes unless otherwise agreed.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment is due upon order placement for standard packages. Enterprise clients may have custom payment
              terms as specified in their agreements.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              AdvArts shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of our services.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. We will notify you of any changes by posting the new terms on
              this page.
            </p>

            <h2>8. Contact</h2>
            <p>For questions about these Terms of Service, contact us at legal@advarts.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
