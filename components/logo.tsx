import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "icon"
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function Logo({ variant = "full", className = "", width, height, priority }: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <Image src="/images/arcova-icon.png" alt="Arcova" width={56} height={56} className="max-h-10 w-auto object-contain" />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/SAnon-logo.png"
        alt="SAnon"
        width={width}
        height={height}
        className={cn("w-auto h-auto", className)}
        priority={priority}
      />
    </div>
  )
}

export function LogoLink({ variant = "full", className = "", width, height, priority }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Logo variant={variant} width={width} height={height} priority={priority} />
    </Link>
  )
}
