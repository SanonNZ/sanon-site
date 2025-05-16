import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function StoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-[#003344] hover:text-[#003344]/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="text-[#8A70D6] text-sm font-medium px-3 py-1 rounded-full bg-[#E6E6FA]">Arcova</div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
