import Link from "next/link"
import { LogoLink } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container grid grid-cols-1 sm:grid-cols-3 items-center py-6 px-4 md:px-6">
        {/* Left column: Logo */}
        <div className="flex justify-center sm:justify-start">
          <LogoLink />
        </div>
        
        {/* Middle column: Links */}
        <div className="flex justify-center gap-6 my-4 sm:my-0">
          <Link
            href="/privacy"
            className="text-sm text-gray-600 hover:text-arcova-teal transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-arcova-teal transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-600 hover:text-arcova-teal transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Right column: Copyright */}
        <div className="flex justify-center sm:justify-end">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Arcova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
