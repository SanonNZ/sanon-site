import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center py-6 px-4 md:px-6">
        {/* Left column: Icon + Copyright */}
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Image src="/SAnon-logo.png" alt="SAnon" width={24} height={24} />
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} SAnon NZ</span>
        </div>
        
        {/* Right column: Links */}
        <div className="flex justify-center gap-6 my-4 sm:my-0">
          <Link
            href="/privacy"
            className="text-sm text-gray-600 hover:text-sanon-purpleExtraDark transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-600 hover:text-sanon-purpleExtraDark transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
