"use client"

import type React from "react"

import { Poppins } from "next/font/google"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SiteFooter } from "@/components/site-footer"
import "@/app/globals.css"

// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
