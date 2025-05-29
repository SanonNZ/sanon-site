import type React from "react"
import { Poppins } from "next/font/google"
import ClientLayout from "./ClientLayout"
import './globals.css'

// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Arcova | Scientific Evidence for Business Decisions",
  description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Arcova | Scientific Evidence for Business Decisions",
    description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
    siteName: "Arcova",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "From Data to Clarity - Actionable insight from complex research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcova | Scientific Evidence for Business Decisions",
    description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
    images: ["/images/og-image.png"],
    creator: "@arcova",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}