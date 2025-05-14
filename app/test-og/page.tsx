import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Test OG Image | Arcova",
  description: "A test page to verify Open Graph images are working correctly.",
  openGraph: {
    title: "Test OG Image | Arcova",
    description: "A test page to verify Open Graph images are working correctly.",
    images: [
      {
        url: "https://arcova.bio/og-image.png",
        width: 1200,
        height: 630,
        alt: "From Data to Clarity - Actionable insight from complex research",
      },
    ],
  },
}

export default function TestOGPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">OG Image Test Page</h1>

      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Current OG Image:</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
          <Image src="/og-image.png" alt="Arcova OG Image" width={1200} height={630} className="w-full h-auto" />
        </div>
        <p className="text-gray-600 mb-2">
          <strong>Image Path:</strong> /og-image.png
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Absolute URL:</strong> https://arcova.bio/og-image.png
        </p>
        <p className="text-gray-600">
          <strong>Dimensions:</strong> 1200 × 630 pixels
        </p>
      </div>

      <Link
        href="/"
        className="bg-arcova-teal hover:bg-arcova-blue text-white px-6 py-2 rounded-full transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
