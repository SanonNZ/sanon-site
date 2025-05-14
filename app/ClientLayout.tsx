"use client"

import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MetaTags } from "@/components/meta-tags"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <MetaTags />
        <meta property="og:image" content="/favicon-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:title" content="Arcova | Scientific Evidence for Business Decisions" />
        <meta
          property="og:description"
          content="Oxford-trained PhD team turning raw biomedical literature into decision-ready insight."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" href="/favicon-512x512.png" />
        <link rel="shortcut icon" href="/favicon-512x512.png" />
        <style jsx global>{`
          h1, h2, h3 {
            font-family: ${poppins.style.fontFamily};
            font-weight: 400;
          }
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
