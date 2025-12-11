"use client"

import { useState } from "react"
import { PortfolioCard } from "./portfolio-card"
import { PortfolioModal } from "./portfolio-modal"

export interface PortfolioProject {
  id: string
  title: string
  platform: string
  result: string
  strategy: string
  headlines: string[]
  hooks: string[]
  cta: string
  colors: [string, string]
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "EcoBottle",
    platform: "Facebook Carousel",
    result: "Tested 2 variants — Variant B achieved +34% CTR vs control",
    strategy: "Focused on eco-conscious messaging with vibrant product shots against natural backgrounds.",
    headlines: ["Sip Sustainably", "Hydrate Responsibly", "Zero Plastic. Full Taste."],
    hooks: ["Join 50K+ eco-warriors", "Your daily choice matters", "Premium meets sustainable"],
    cta: "Shop Now",
    colors: ["#22C55E", "#16A34A"],
  },
  {
    id: "2",
    title: "FitApp Pro",
    platform: "Instagram Stories",
    result: "Tested 3 variants — Variant A achieved +28% CTR vs control",
    strategy: "High-energy visuals with bold typography and action-oriented copy.",
    headlines: ["Transform Your Body", "Your Pocket Trainer", "Fitness Made Simple"],
    hooks: ["7-day free trial", "Used by 1M+ athletes", "No equipment needed"],
    cta: "Start Free Trial",
    colors: ["#F97316", "#EA580C"],
  },
  {
    id: "3",
    title: "CourseNest",
    platform: "Google Display",
    result: "Tested 2 variants — Variant B achieved +42% CTR vs control",
    strategy: "Clean, professional aesthetic emphasizing career growth and learning outcomes.",
    headlines: ["Level Up Your Skills", "Learn From Experts", "Your Future Starts Here"],
    hooks: ["Certificates included", "Self-paced learning", "Industry-recognized"],
    cta: "Explore Courses",
    colors: ["#6C5CE7", "#5B4ED4"],
  },
  {
    id: "4",
    title: "HomeRoot",
    platform: "TikTok Ads",
    result: "Tested 4 variants — Variant C achieved +51% CTR vs control",
    strategy: "Lifestyle imagery showing products in real home settings with aspirational copy.",
    headlines: ["Make Your Space Yours", "Home, Elevated", "Design Your Sanctuary"],
    hooks: ["Free shipping over $50", "As seen in homes", "Designer curated"],
    cta: "Shop Collection",
    colors: ["#00CEC9", "#00B5B0"],
  },
  {
    id: "5",
    title: "SnackBox",
    platform: "Facebook Feed",
    result: "Tested 2 variants — Variant A achieved +38% CTR vs control",
    strategy: "Mouth-watering product photography with urgency-driven messaging.",
    headlines: ["Snack Smarter", "Curated Cravings", "Taste Adventure Awaits"],
    hooks: ["New flavors weekly", "Subscribers save 20%", "Guilt-free indulgence"],
    cta: "Subscribe Now",
    colors: ["#F59E0B", "#D97706"],
  },
  {
    id: "6",
    title: "PetPal",
    platform: "Instagram Reels",
    result: "Tested 3 variants — Variant B achieved +45% CTR vs control",
    strategy: "Adorable pet imagery with emotional, pet-parent focused messaging.",
    headlines: ["Happy Pets, Happy Life", "Vet-Approved Care", "Love Your Pet More"],
    hooks: ["Free first box", "Natural ingredients only", "Join 100K+ pet parents"],
    cta: "Get Started",
    colors: ["#EC4899", "#DB2777"],
  },
  {
    id: "7",
    title: "TechGear",
    platform: "YouTube Ads",
    result: "Tested 2 variants — Variant A achieved +33% CTR vs control",
    strategy: "Sleek product showcases with tech-forward, feature-focused copy.",
    headlines: ["Next-Gen Performance", "Built for Tomorrow", "Tech That Delivers"],
    hooks: ["2-year warranty", "Free express shipping", "Industry-leading specs"],
    cta: "Shop Now",
    colors: ["#3B82F6", "#2563EB"],
  },
  {
    id: "8",
    title: "GlowSkin",
    platform: "Pinterest Ads",
    result: "Tested 3 variants — Variant C achieved +47% CTR vs control",
    strategy: "Clean beauty aesthetic with before/after social proof and ingredient highlights.",
    headlines: ["Reveal Your Glow", "Skincare Simplified", "Beauty From Within"],
    hooks: ["Dermatologist tested", "30-day guarantee", "Natural formula"],
    cta: "Try Now",
    colors: ["#F472B6", "#EC4899"],
  },
  {
    id: "9",
    title: "TravelEase",
    platform: "Facebook Stories",
    result: "Tested 2 variants — Variant B achieved +39% CTR vs control",
    strategy: "Wanderlust-inspiring destinations with urgency and value-focused messaging.",
    headlines: ["Adventure Awaits", "Escape the Ordinary", "Your Next Journey"],
    hooks: ["Flash deals today", "Book now, pay later", "Price match guarantee"],
    cta: "Explore Deals",
    colors: ["#14B8A6", "#0D9488"],
  },
  {
    id: "10",
    title: "MealPrep Co",
    platform: "Google Discovery",
    result: "Tested 4 variants — Variant D achieved +52% CTR vs control",
    strategy: "Appetizing meal photography with health and convenience benefits.",
    headlines: ["Eat Well, Live Well", "Meals Made Easy", "Healthy in Minutes"],
    hooks: ["Chef-prepared", "Customize weekly", "Skip or cancel anytime"],
    cta: "Start Eating Better",
    colors: ["#84CC16", "#65A30D"],
  },
]

export function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  return (
    <section className="py-24 bg-[#F1F2F6]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
