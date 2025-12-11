import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — AdvArts",
  description: "AdvArts Privacy Policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#0B2340] pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-slate">
            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, fill out a form,
              make a purchase, or contact us for support. This may include your name, email address, company name,
              website URL, and payment information.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and track information and to improve and
              analyze our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except to
              provide services you have requested, when we have your permission, or as required by law.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us at
              privacy@advarts.com to exercise these rights.
            </p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@advarts.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
