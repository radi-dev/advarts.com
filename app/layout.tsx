import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "AdvArts — AI-driven ad creatives that convert",
  description:
    "AdvArts uses AI + creative strategy to generate high-converting ad visuals and copy. Fast delivery, A/B-ready variants, built for e-commerce and growth teams.",
  keywords: ["AI ad creative", "ad creatives generator", "AI ad copy", "ad creative studio", "conversion ad design"],
  openGraph: {
    title: "AdvArts — AI-driven ad creatives that convert",
    description:
      "Generate conversion-first ad visuals and copy using AI + human polish. Fast delivery for e-commerce, course creators and growth teams.",
    url: "https://advarts.com/",
    siteName: "AdvArts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdvArts — AI-driven ad creatives that convert",
    description: "Generate conversion-first ad visuals and copy using AI + human polish.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B2340",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
