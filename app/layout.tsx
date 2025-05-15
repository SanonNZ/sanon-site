import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Arcova | Scientific Evidence for Business Decisions",
  description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  icons: {
    icon: "/arcova-favicon.png",
    apple: "/favicon-512x512.png",
    shortcut: "/favicon-512x512.png",
  },
  openGraph: {
    type: "website",
    title: "Arcova | Scientific Evidence for Business Decisions",
    description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
    siteName: "Arcova",
    images: [
      {
        url: "/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Arcova",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Arcova | Scientific Evidence for Business Decisions",
    description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
    images: ["/favicon-512x512.png"],
    creator: "@arcova",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'