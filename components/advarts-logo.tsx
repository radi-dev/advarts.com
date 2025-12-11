interface LogoProps {
  variant?: "full" | "icon" | "monochrome"
  className?: string
}

export function AdvArtsLogo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="AdvArts Logo"
      >
        {/* Slanted A with pixel squares breaking off */}
        <rect x="2" y="2" width="4" height="4" fill="#6C5CE7" opacity="0.4" />
        <rect x="8" y="4" width="3" height="3" fill="#6C5CE7" opacity="0.6" />
        <rect x="4" y="8" width="2" height="2" fill="#00CEC9" opacity="0.5" />
        <path d="M20 6L32 34H26L23.5 28H16.5L14 34H8L20 6Z" fill="white" />
        <path d="M20 14L22.5 22H17.5L20 14Z" fill="#0B2340" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AdvArts Logo"
    >
      {/* Icon */}
      <rect x="2" y="2" width="4" height="4" fill="#6C5CE7" opacity="0.4" />
      <rect x="8" y="4" width="3" height="3" fill="#6C5CE7" opacity="0.6" />
      <rect x="4" y="8" width="2" height="2" fill="#00CEC9" opacity="0.5" />
      <path d="M20 6L32 34H26L23.5 28H16.5L14 34H8L20 6Z" fill="white" />
      <path d="M20 14L22.5 22H17.5L20 14Z" fill="#0B2340" />

      {/* Wordmark */}
      <text x="42" y="28" fill="white" fontFamily="Space Grotesk, sans-serif" fontSize="20" fontWeight="600">
        AdvArts
      </text>
    </svg>
  )
}
