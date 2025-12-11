"use client"

import { ArrowRight } from "lucide-react"
import type { PortfolioProject } from "./portfolio-grid"

interface PortfolioCardProps {
  project: PortfolioProject
  onClick: () => void
}

export function PortfolioCard({ project, onClick }: PortfolioCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-br from-[#0B2340] to-[#1B1B1E] portfolio-item text-left w-full"
      aria-label={`View ${project.title} project details`}
    >
      {/* Visual placeholder */}
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div
            className="rounded-lg opacity-60"
            style={{ background: `linear-gradient(135deg, ${project.colors[0]}40, ${project.colors[1]}60)` }}
          />
          <div
            className="rounded-lg opacity-40"
            style={{ background: `linear-gradient(135deg, ${project.colors[1]}40, ${project.colors[0]}60)` }}
          />
          <div
            className="rounded-lg opacity-50 col-span-2"
            style={{ background: `linear-gradient(90deg, ${project.colors[0]}30, ${project.colors[1]}50)` }}
          />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-medium flex items-center gap-2">
          View demo
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      {/* Sample badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-block px-2 py-1 bg-[#6C5CE7] text-white text-xs font-medium rounded">SAMPLE</span>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-semibold mb-1">
          {project.title} — {project.platform}
        </h3>
        <p className="text-[#00CEC9] text-sm font-medium">(Demo)</p>
      </div>
    </button>
  )
}
