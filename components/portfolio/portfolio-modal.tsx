"use client"

import { useEffect } from "react"
import { X, Download, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PortfolioProject } from "./portfolio-grid"

interface PortfolioModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 id="modal-title" className="font-heading text-xl font-bold">
                {project.title} — {project.platform}
              </h2>
              <span className="inline-block px-2 py-0.5 bg-[#6C5CE7] text-white text-xs font-medium rounded">
                SAMPLE
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Demo project – sample creative</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F1F2F6] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Preview Images */}
          <div>
            <h3 className="font-semibold mb-4">Creative Previews</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl"
                  style={{
                    background: `linear-gradient(${i * 45}deg, ${project.colors[0]}${20 + i * 10}, ${project.colors[1]}${30 + i * 10})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Copy Samples */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Headlines</h3>
              <ul className="space-y-2">
                {project.headlines.map((headline) => (
                  <li key={headline} className="flex items-center justify-between bg-[#F1F2F6] rounded-lg p-3">
                    <span className="text-sm">{headline}</span>
                    <button className="text-muted-foreground hover:text-[#6C5CE7]" aria-label="Copy headline">
                      <Copy className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hooks</h3>
              <ul className="space-y-2">
                {project.hooks.map((hook) => (
                  <li key={hook} className="flex items-center justify-between bg-[#F1F2F6] rounded-lg p-3">
                    <span className="text-sm">{hook}</span>
                    <button className="text-muted-foreground hover:text-[#6C5CE7]" aria-label="Copy hook">
                      <Copy className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-2">Call to Action</h3>
            <div className="inline-block bg-[#6C5CE7] text-white px-4 py-2 rounded-lg font-medium">{project.cta}</div>
          </div>

          {/* Strategy Note */}
          <div className="bg-[#0B2340] text-white rounded-xl p-6">
            <h3 className="font-semibold mb-2">Strategy Note</h3>
            <p className="text-white/80 text-sm mb-4">{project.strategy}</p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-[#00CEC9] text-sm font-medium">{project.result} (demo)</p>
            </div>
          </div>

          {/* Download */}
          <div className="flex justify-center">
            <Button className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg gap-2">
              <Download className="w-4 h-4" />
              Download Asset ZIP (Demo)
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
