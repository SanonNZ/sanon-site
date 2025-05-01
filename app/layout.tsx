import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Arcova | Scientific Evidence for Business Decisions",
  description: "Oxford-trained PhD team turning raw biomedical literature into decision-ready insight.",
  icons: {
    icon: "/arcova-favicon.png",
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