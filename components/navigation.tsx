import Link from "next/link"
import { LogoLink } from "@/components/logo"

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "For Investors", href: "/investors" },
  { name: "For Science-Backed Brands", href: "/sciencebrands" },
  { name: "Join Our Network", href: "/network" },
]

export const Navigation = () => {
  return (
    <nav className="container flex h-20 items-center px-4 md:px-6">
      <div className="flex-none">
        <LogoLink />
      </div>
      <ul className="flex-1 flex justify-center space-x-8">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
