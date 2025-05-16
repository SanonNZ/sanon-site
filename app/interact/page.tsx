import InteractiveCarousel from "./InteractiveCarousel"

export const metadata = {
  title: "Interactive Elements | Arcova",
  description: "Test page for interactive elements",
}

export default function InteractPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-8">
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <h1 className="text-3xl font-bold text-arcova-darkblue mb-8">Interactive Elements Test Page</h1>
          <p className="text-lg text-gray-600 mb-12">
            This page contains various interactive elements for testing purposes.
          </p>

          <InteractiveCarousel />
        </div>
      </main>
    </div>
  )
}
