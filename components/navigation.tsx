import Link from "next/link"
import { useState } from "react"
import { LogoLink } from "@/components/logo"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Join Our Network", href: "/network" },
]

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full flex justify-center bg-transparent sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 px-6 py-4 relative">
        {/* Logo (always visible) */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <LogoLink />
        </div>
        {/* Desktop Nav (hidden on mobile) */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 pb-2 ${pathname === item.href ? "border-b-2 border-arcova-teal text-blue-900" : "text-blue-900 hover:text-arcova-teal"}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* CTA Button (Desktop, hidden on mobile) */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-6 py-2 font-semibold text-base shadow-none transition-all duration-200 flex items-center gap-2"
          >
            <a href="https://calendly.com/emma-arcova/30min" target="_blank" rel="noopener noreferrer">
              Book a Call <span aria-hidden="true">&rarr;</span>
            </a>
          </Button>
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden p-2.5 rounded-full bg-arcova-teal/10 text-arcova-teal hover:bg-arcova-teal/20 transition-all duration-300 hover:scale-105"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            >
              <motion.div
                className="ml-auto w-3/4 max-w-xs h-full bg-white shadow-xl p-6 flex flex-col gap-8"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <LogoLink variant="icon" />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
                <ul className="flex flex-col gap-6">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block text-lg font-semibold transition-colors duration-200 pb-2 ${pathname === item.href ? "text-arcova-teal border-b-2 border-arcova-teal" : "text-gray-600 hover:text-arcova-teal"}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-6 py-2 font-semibold text-base shadow-none transition-all duration-200 mt-8 flex items-center gap-2"
                >
                  <a href="https://calendly.com/emma-arcova/30min" target="_blank" rel="noopener noreferrer">
                    Book a Call <span aria-hidden="true">&rarr;</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
