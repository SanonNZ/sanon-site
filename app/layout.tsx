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
  title: "We make science make sense | Arcova",
  description: "We help turn research into strategy, products, and progress.",
  icons: {
    icon: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ],
    shortcut: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ],
    apple: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ],
    other: [
      { url: "/arcova-favicon.png", sizes: "200x200", type: "image/png" }
    ]
  },
  openGraph: {
    type: "website",
    title: "We make science make sense | Arcova",
    description: "We help turn research into strategy, products, and progress.",
    siteName: "Arcova",
    images: [
      {
        url: "/images/arcova-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "We make science make sense",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Arcova | Scientific Evidence for Business Decisions",
  //   description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  //   images: ["/images/og-image.png"],
  //   creator: "@arcova",
  // },
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