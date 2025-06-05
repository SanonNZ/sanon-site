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
                className={`text-base font-medium transition-colors duration-200 pb-2 text-black border-b-2 ${pathname === item.href ? "border-arcova-teal" : "border-transparent"}`}
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
            className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-6 py-2 font-semibold text-base shadow-none transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <a href="https://calendly.com/emma-arcova/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white">
              Book a Call
              <motion.span
                whileHover={{ x: 5 }}
                whileTap={{ x: 2 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                aria-hidden="true"
              >
                &rarr;
              </motion.span>
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
        </nav>


        
     {/* Mobile Drawer */}
 
     <AnimatePresence>
  {mobileOpen && (
    <motion.div
      className="fixed inset-0 z-50 flex justify-end items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Light translucent backdrop */}
      <div
        className="absolute inset-0 bg-white/60 backdrop-blur-md"
        onClick={() => setMobileOpen(false)}
      />

      {/* Right-aligned drawer */}
      <motion.div
        className="relative z-10 w-full max-w-xs sm:max-w-sm bg-white rounded-2xl shadow-xl p-6 m-4"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top row: Logo and Close button */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <img
              src="/images/arcova-logo.png"
              alt="Arcova logo"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full bg-arcova-teal/10 hover:bg-arcova-teal/20 text-arcova-teal transition"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation menu */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block text-base font-semibold px-4 py-2 rounded-lg transition-all text-black ${
                  pathname === "/"
                    ? "bg-arcova-teal/10"
                    : "hover:bg-arcova-blue/10"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/network"
                onClick={() => setMobileOpen(false)}
                className={`block text-base font-semibold px-4 py-2 rounded-lg transition-all text-black ${
                  pathname === "/network"
                    ? "bg-arcova-teal/10"
                    : "hover:bg-arcova-blue/10"
                }`}
              >
                Join Our Network
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold px-4 py-2 rounded-lg text-black hover:bg-arcova-blue/10 transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://calendly.com/emma-arcova/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-semibold px-4 py-2 rounded-lg text-black hover:bg-arcova-blue/10 transition-all"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>




    </header>
  )
}
