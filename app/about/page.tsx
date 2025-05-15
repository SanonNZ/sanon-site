import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"
import { MetaTags } from "@/components/meta-tags"

export const metadata: Metadata = {
  title: "About Arcova | Biomedical Consulting",
  description:
    "We distil complex biomedical research into decision-ready insight for investors and science-backed brands.",
}

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About Arcova | Biomedical Consulting"
        description="We distil complex biomedical research into decision-ready insight for investors and science-backed brands."
        url="https://arcova.co/about"
        imageUrl="/og-image.png"
      />
      <AboutPageClient />
    </>
  )
}
