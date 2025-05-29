import Link from "next/link"

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Contact", href: "/contact" },
]

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-blue-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
