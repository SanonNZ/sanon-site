import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "full" | "icon"
  className?: string
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <Image src="/arcova-icon.png" alt="Arcova" width={40} height={40} className="h-10 w-10" />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image src="/arcova-logo-large.png" alt="Arcova" width={240} height={60} className="h-10 w-auto" priority />
    </div>
  )
}

export function LogoLink({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Logo variant={variant} />
    </Link>
  )
}
