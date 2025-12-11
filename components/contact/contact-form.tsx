"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

interface FormData {
  name: string
  company: string
  website: string
  monthlyAdSpend: string
  projectBrief: string
  email: string
  phone: string
  marketingConsent: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    website: "",
    monthlyAdSpend: "",
    projectBrief: "",
    email: "",
    phone: "",
    marketingConsent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name) newErrors.name = "Please complete this field."
    if (!formData.email) newErrors.email = "Please complete this field."
    if (!formData.company) newErrors.company = "Please complete this field."
    if (!formData.projectBrief) newErrors.projectBrief = "Please complete this field."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // In production, send to backend/webhook
      setSubmitted(true)
    }
  }

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12" role="alert" aria-live="polite">
        <CheckCircle className="w-16 h-16 text-[#00CEC9] mx-auto mb-4" />
        <h3 className="font-heading text-xl font-semibold mb-2">Thanks — we'll reply within 24 hours.</h3>
        <p className="text-muted-foreground">Check your inbox for confirmation.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`mt-2 rounded-lg ${errors.name ? "border-destructive" : ""}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="company">
            Company <span className="text-destructive">*</span>
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={`mt-2 rounded-lg ${errors.company ? "border-destructive" : ""}`}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p id="company-error" className="text-sm text-destructive mt-1">
              {errors.company}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`mt-2 rounded-lg ${errors.email ? "border-destructive" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="mt-2 rounded-lg"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          placeholder="https://"
          value={formData.website}
          onChange={(e) => handleChange("website", e.target.value)}
          className="mt-2 rounded-lg"
        />
      </div>

      <div>
        <Label htmlFor="monthlyAdSpend">Monthly ad spend</Label>
        <Select value={formData.monthlyAdSpend} onValueChange={(value) => handleChange("monthlyAdSpend", value)}>
          <SelectTrigger id="monthlyAdSpend" className="mt-2 rounded-lg">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-1k">Under $1,000</SelectItem>
            <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
            <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
            <SelectItem value="50k-plus">$50,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="projectBrief">
          Project brief <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="projectBrief"
          placeholder="Briefly describe your product, audience and objective…"
          value={formData.projectBrief}
          onChange={(e) => handleChange("projectBrief", e.target.value)}
          className={`mt-2 rounded-lg min-h-[120px] ${errors.projectBrief ? "border-destructive" : ""}`}
          aria-invalid={!!errors.projectBrief}
          aria-describedby={errors.projectBrief ? "brief-error" : undefined}
        />
        {errors.projectBrief && (
          <p id="brief-error" className="text-sm text-destructive mt-1">
            {errors.projectBrief}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="marketingConsent"
          checked={formData.marketingConsent}
          onCheckedChange={(checked) => handleChange("marketingConsent", !!checked)}
          className="mt-1"
        />
        <Label htmlFor="marketingConsent" className="text-sm text-muted-foreground font-normal cursor-pointer">
          I agree to receive marketing emails from AdvArts. You can unsubscribe at any time.
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white rounded-lg shadow-[0_6px_20px_rgba(108,92,231,0.15)]"
      >
        Send message
      </Button>

      <p className="text-xs text-muted-foreground text-center">We reply within 24 hours on business days.</p>
    </form>
  )
}
