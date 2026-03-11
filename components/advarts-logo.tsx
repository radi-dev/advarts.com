interface LogoProps {
  variant?: "full" | "icon" | "monochrome"
  className?: string
}

export function ALogo({ variant = "full", className = "" }: LogoProps) {
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





export function AdvArtsLogo0({ className = "" }) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`w-10 h-10 ${className}`}
      fill="none"
    >
      {/* Abstract R logo */}
      <circle cx="15" cy="15" r="8" fill="#d4c5a9" />
      <circle cx="35" cy="15" r="5" fill="#d4c5a9" opacity="0.7" />
      <circle cx="25" cy="35" r="6" fill="#d4c5a9" opacity="0.5" />
      <rect x="22" y="12" width="6" height="6" rx="1" fill="#1c1c1c" />
    </svg>
  );
}



export function AdvArtsLogo1({ className = "" }) {
  return (
    <svg viewBox="0 0 50 50" className={`w-10 h-10 ${className}`} fill="none">
      <defs>
        <linearGradient id="advartsGradient1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>

      <circle cx="15" cy="15" r="8" fill="url(#advartsGradient1)" />
      <circle cx="35" cy="15" r="6" fill="#7C5CFF" opacity="0.8" />
      <circle cx="25" cy="35" r="7" fill="#00D4FF" opacity="0.8" />
    </svg>
  );
}

export function AdvArtsLogo2({ className = "" }) {
  return (
    <svg viewBox="0 0 50 50" className={`w-10 h-10 ${className}`} fill="none">
      <circle cx="15" cy="15" r="8" fill="#FF6B6B" />
      <circle cx="35" cy="15" r="6" fill="#FFD93D" />
      <circle cx="25" cy="35" r="7" fill="#4D96FF" />
    </svg>
  );
}

export function AdvArtsLogo3({ className = "" }) {
  return (
    <svg viewBox="0 0 50 50" className={`w-10 h-10 ${className}`} fill="none">
      <circle cx="15" cy="15" r="8" fill="#8B5CF6" />
      <circle cx="35" cy="15" r="6" fill="#22C55E" opacity="0.9" />
      <circle cx="25" cy="35" r="7" fill="#06B6D4" opacity="0.9" />
    </svg>
  );
}

export function AdvArtsLogo4({ className = "" }) {
  return (
    <svg viewBox="0 0 50 50" className={`w-10 h-10 ${className}`} fill="none">
      <circle cx="18" cy="18" r="9" fill="#111827" />
      <circle cx="34" cy="18" r="6" fill="#6366F1" />
      <circle cx="26" cy="34" r="7" fill="#22D3EE" />
    </svg>
  );
}


export function AdvArtsLogo5({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <polygon points="30,6 54,54 6,54" fill="#7C5CFF" />
      <polygon points="30,18 44,48 16,48" fill="#00D4FF" />
    </svg>
  );
}

export function AdvArtsLogo6({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <rect x="26" y="6" width="8" height="48" fill="#6366F1" />
      <rect x="6" y="26" width="48" height="8" fill="#22D3EE" />
      <rect x="12" y="12" width="36" height="8" transform="rotate(45 30 30)" fill="#F472B6" />
    </svg>
  );
}


export function AdvArtsLogo7({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <rect x="10" y="12" width="40" height="10" rx="2" fill="#6366F1" />
      <rect x="14" y="26" width="32" height="10" rx="2" fill="#22D3EE" />
      <rect x="18" y="40" width="24" height="10" rx="2" fill="#F59E0B" />
    </svg>
  );
}

export function AdvArtsLogo8({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <rect x="8" y="8" width="18" height="18" fill="#6366F1" />
      <rect x="34" y="8" width="18" height="18" fill="#22D3EE" />
      <rect x="8" y="34" width="18" height="18" fill="#F472B6" />
      <rect x="34" y="34" width="18" height="18" fill="#F59E0B" />
    </svg>
  );
}



export function AdvArtsLogo9({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <path
        d="M5 35 C15 10, 45 10, 55 35"
        stroke="#6366F1"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M10 40 C20 20, 40 20, 50 40"
        stroke="#22D3EE"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}


export function AdvArtsLogo10({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <polygon points="30,6 54,22 30,38 6,22" fill="#6366F1" />
      <polygon points="30,22 46,32 30,48 14,32" fill="#22D3EE" />
    </svg>
  );
}




export function AdvArtsLogo11({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">
      <polygon points="30,6 54,54 6,54" fill="#7C5CFF" />
      <polygon points="30,18 44,48 16,48" fill="#00D4FF" />
      <rect x="10" y="12" width="40" height="10" rx="2" fill="#6366F1" />
      <rect x="14" y="26" width="32" height="10" rx="2" fill="#22D3EE" />
      <rect x="18" y="40" width="24" height="10" rx="2" fill="#F59E0B" />
    </svg>
  );
}


export function AdvArtsLogo12({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">

      {/* grid */}
      <rect x="8" y="8" width="18" height="18" fill="#C7D2FE" />
      <rect x="34" y="8" width="18" height="18" fill="#A5F3FC" />
      <rect x="8" y="34" width="18" height="18" fill="#FBCFE8" />

      {/* fragmented output */}
      <rect x="36" y="34" width="6" height="6" transform="rotate(6 39 37)" fill="#FDE68A" />
      <rect x="44" y="34" width="6" height="6" transform="rotate(-8 47 37)" fill="#D1FAE5" />
      <rect x="36" y="42" width="6" height="6" transform="rotate(-4 39 45)" fill="#C7D2FE" />
      <rect x="44" y="42" width="6" height="6" transform="rotate(10 47 45)" fill="#A5F3FC" />

    </svg>
  );
}

export function AdvArtsLogox({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">

      {/* stable grid */}
      <rect x="8" y="8" width="18" height="18" fill="#C7D2FE" />
      <rect x="34" y="8" width="18" height="18" fill="#A5F3FC" />
      <rect x="8" y="34" width="18" height="18" fill="#FBCFE8" />

      {/* fragmented 3x3 output grid */}
      {/*
      <rect x="32" y="32" width="6" height="6"
        transform="rotate(-2 35 35)"
        fill="#FDE68A" />

      <rect x="40" y="32" width="6" height="6"
        transform="rotate(1.5 43 35)"
        fill="#D1FAE5" />

      <rect x="48" y="32" width="6" height="6"
        transform="rotate(-1.2 51 35)"
        fill="#C7D2FE" />


      <rect x="32" y="40" width="6" height="6"
        transform="rotate(2.2 35 43)"
        fill="#A5F3FC" />

      <rect x="40" y="40" width="6" height="6"
        transform="rotate(-1.6 43 43)"
        fill="#FBCFE8" />

      <rect x="48" y="40" width="6" height="6"
        transform="rotate(2.5 51 43)"
        fill="#FDE68A" />


      <rect x="32" y="48" width="6" height="6"
        transform="rotate(-2.3 35 51)"
        fill="#D1FAE5" />

      <rect x="40" y="48" width="6" height="6"
        transform="rotate(1.8 43 51)"
        fill="#C7D2FE" />

      <rect x="48" y="48" width="6" height="6"
        transform="rotate(-1.4 51 51)"
        fill="#A5F3FC" /> */}

    </svg>
  );
}

export function AdvArtsLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">

      {/* stable grid */}
      <rect x="8" y="8" width="18" height="18" fill="#C7D2FE" />
      <rect x="34" y="8" width="18" height="18" fill="#A5F3FC" />
      <rect x="8" y="34" width="18" height="18" fill="#FBCFE8" />

      {/* fragmented 3x3 output grid */}

      <rect x="32" y="32" width="6" height="6"
        transform="rotate(-2 35 35)"
        fill="#FDE68A" />

      <rect x="40" y="32" width="6" height="6"
        transform="rotate(1.5 43 35)"
        fill="#D1FAE5" />

      <rect x="48" y="32" width="6" height="6"
        transform="rotate(-1.2 51 35)"
        fill="#C7D2FE" />


      <rect x="32" y="40" width="6" height="6"
        transform="rotate(2.2 35 43)"
        fill="#A5F3FC" />

      <rect x="40" y="40" width="6" height="6"
        transform="rotate(-1.6 43 43)"
        fill="#FBCFE8" />

      <rect x="48" y="40" width="6" height="6"
        transform="rotate(2.5 51 43)"
        fill="#FDE68A" />


      <rect x="32" y="48" width="6" height="6"
        transform="rotate(-2.3 35 51)"
        fill="#D1FAE5" />

      <rect x="40" y="48" width="6" height="6"
        transform="rotate(1.8 43 51)"
        fill="#C7D2FE" />

      <rect x="48" y="48" width="6" height="6"
        transform="rotate(-1.4 51 51)"
        fill="#A5F3FC" />

    </svg>
  );
}


export function AdvArtsLogoDefault2({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">

      {/* prism */}
      <polygon points="30,6 46,22 14,22" fill="#C7D2FE" />

      {/* output fragments */}
      <rect x="16" y="28" width="8" height="6" rx="1" fill="#FBCFE8" />
      <rect x="26" y="28" width="8" height="6" rx="1" fill="#A5F3FC" />
      <rect x="36" y="28" width="8" height="6" rx="1" fill="#FDE68A" />

      {/* base layer */}
      <rect x="14" y="38" width="32" height="8" rx="2" fill="#D1FAE5" />

    </svg>
  );
}



export function AdvArtsLogo14({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">

      <rect x="16" y="40" width="28" height="8" rx="2" fill="#FDE68A" />
      <rect x="16" y="28" width="28" height="8" rx="2" fill="#D1FAE5" />

      <rect x="16" y="12" width="12" height="12" fill="#C7D2FE" />
      <rect x="32" y="12" width="12" height="12" fill="#A5F3FC" />

    </svg>
  );
}



export function AdvArtsLogo13({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 ${className}`} fill="none">

      {/* grid frame */}
      <rect x="8" y="8" width="44" height="44" stroke="#C7D2FE" strokeWidth="4" />

      {/* prism core */}
      <polygon points="30,14 42,36 18,36" fill="#A5F3FC" />
      <polygon points="30,20 36,32 24,32" fill="#FBCFE8" />

    </svg>
  );
}