import StoryDeck from "./story-deck"

export const metadata = {
  title: "Our Story | Arcova",
  description: "How we help science-backed brands and investors communicate with clarity and confidence",
}

export default function StoryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Fixed header that stays in view */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003344]">Arcova explains things simply.</h2>
          </div>
        </div>
      </div>

      {/* Story deck with slides */}
      <StoryDeck />
    </div>
  )
}
