"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Gift } from "lucide-react"

export function SampleRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    productDescription: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = "Please complete this field."
    if (!formData.email) newErrors.email = "Please complete this field."
    if (!formData.productDescription) newErrors.productDescription = "Please complete this field."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8" role="alert" aria-live="polite">
        <CheckCircle className="w-16 h-16 text-[#00CEC9] mx-auto mb-4" />
        <h3 className="font-heading text-xl font-semibold mb-2">Your sample is on the way!</h3>
        <p className="text-muted-foreground">We'll send your free 3-ad sample within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3 bg-[#6C5CE7]/10 rounded-lg p-4 mb-6">
        <Gift className="w-6 h-6 text-[#6C5CE7] shrink-0" />
        <p className="text-sm">
          <span className="font-semibold">Free sample includes:</span> 3 ad image variations + 3 headlines + 3 CTAs
        </p>
      </div>

      <div>
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className={`mt-2 rounded-lg ${errors.name ? "border-destructive" : ""}`}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className={`mt-2 rounded-lg ${errors.email ? "border-destructive" : ""}`}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="website">Website (optional)</Label>
        <Input
          id="website"
          type="url"
          placeholder="https://"
          value={formData.website}
          onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
          className="mt-2 rounded-lg"
        />
      </div>

      <div>
        <Label htmlFor="productDescription">
          Tell us about your product <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="productDescription"
          placeholder="What do you sell? Who is your target audience? What's your main goal?"
          value={formData.productDescription}
          onChange={(e) => setFormData((prev) => ({ ...prev, productDescription: e.target.value }))}
          className={`mt-2 rounded-lg min-h-[120px] ${errors.productDescription ? "border-destructive" : ""}`}
        />
        {errors.productDescription && <p className="text-sm text-destructive mt-1">{errors.productDescription}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
      >
        Request free sample
      </Button>

      <p className="text-xs text-muted-foreground text-center">Delivery within 48 hours. No payment required.</p>
    </form>
  )
}
