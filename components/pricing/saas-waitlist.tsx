"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell } from "lucide-react"

export function SaasWaitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    setSubmitted(true)
  }

  return (
    <div className="mt-16 text-center">
      <div className="max-w-md mx-auto">
        {submitted ? (
          <div className="bg-[#00CEC9]/10 text-[#00CEC9] rounded-xl p-6" role="alert" aria-live="polite">
            <Bell className="w-8 h-8 mx-auto mb-3" />
            <p className="font-semibold">You're on the list!</p>
            <p className="text-sm mt-1">We'll notify you when AdvArts Studio launches.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-xl font-semibold mb-4">Get notified when we launch</h3>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg"
                aria-label="Email address"
              />
              <Button
                type="submit"
                className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
              >
                Notify me
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
          </>
        )}
      </div>
    </div>
  )
}
