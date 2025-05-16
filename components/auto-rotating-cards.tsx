"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Circle } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

// Define the card data structure
export interface CardData {
  id: number
  claim: string
  mainQuestion: string
  supportingText: string
  emoji?: string
  color: number
  isInvestor: boolean
}

// Science-backed brand cards
const brandCards: CardData[] = [
  {
    id: 1,
    claim: "Clinically proven to improve memory.",
    mainQuestion: "We connect the study to what your audience cares about.",
    supportingText: "Use research wisely. And make it sing.",
    emoji: "🧠",
    color: 0, // Purple
    isInvestor: false,
  },
  {
    id: 2,
    claim: "Boosts immune function by 80% in two weeks.",
    mainQuestion: "We unpack what was measured and why it matters.",
    supportingText: "Big numbers don't always mean big insight.",
    emoji: "🎯",
    color: 1, // Teal
    isInvestor: false,
  },
  {
    id: 3,
    claim: "Published in a leading journal.",
    mainQuestion: "We link journal prestige to product relevance.",
    supportingText: "Published ≠ Persuasive.",
    emoji: "📖",
    color: 2, // Green
    isInvestor: false,
  },
  {
    id: 4,
    claim: "Backed by neuroscience.",
    mainQuestion: "We translate new science into real value for your audience.",
    supportingText: "Good science deserves to be understood.",
    emoji: "👂",
    color: 3, // Pink
    isInvestor: false,
  },
  {
    id: 5,
    claim: "Breakthrough discovery in aging biology.",
    mainQuestion: "We decode the claim, and connect it to outcomes.",
    supportingText: "Scientific credibility doesn't have to be boring.",
    emoji: "💥",
    color: 4, // Orange
    isInvestor: false,
  },
  {
    id: 6,
    claim: "The science speaks for itself.",
    mainQuestion: "We help your audience hear what the science is saying.",
    supportingText: "Back it up, break it down, bring it to life.",
    emoji: "🧬",
    color: 5, // Plum
    isInvestor: false,
  },
]

// Investor cards with updated content
const investorCards: CardData[] = [
  {
    id: 7,
    claim: "We're transforming drug discovery with AI.",
    mainQuestion: "We assess what's new versus repackaged.",
    supportingText: "Strong claims need sharp questions.",
    emoji: "💥",
    color: 0, // Purple
    isInvestor: true,
  },
  {
    id: 8,
    claim: "The first scalable platform for personalized therapeutics.",
    mainQuestion: "We assess whether the data shows promise, or if it's just a polished pitch.",
    supportingText: "Make it simple. Keep it true.",
    emoji: "🧩",
    color: 1, // Teal
    isInvestor: true,
  },
  {
    id: 9,
    claim: "Leverages AI to target 'undruggable' pathways.",
    mainQuestion: "We clarify what's druggable, and what that unlocks in practice.",
    supportingText: "Great pitch, or great biology?",
    emoji: "🧬",
    color: 2, // Green
    isInvestor: true,
  },
  {
    id: 10,
    claim: "Spun out of an Ivy League college.",
    mainQuestion: "We assess what's been validated beyond the lab.",
    supportingText: "Say less, prove more.",
    emoji: "💬",
    color: 3, // Pink
    isInvestor: true,
  },
  {
    id: 11,
    claim: "Revolutionising how we age at the cellular level.",
    mainQuestion: "We probe the science, from cell to market impact.",
    supportingText: "Build trust from the data up.",
    emoji: "🧱",
    color: 4, // Orange
    isInvestor: true,
  },
  {
    id: 12,
    claim: "Predictive accuracy above 90%.",
    mainQuestion: "We unpack what's being predicted, and whether 90% is actually impressive.",
    supportingText: "Accuracy depends on what you're measuring.",
    emoji: "🎯",
    color: 5, // Plum
    isInvestor: true,
  },
]

// Update the cardColors array with the new color scheme
const cardColors = [
  {
    color: "#8d7dc7", // Purple dark (first card)
    gradient: "linear-gradient(135deg, #8d7dc7, #8d7dc7)",
    backColor: "#e7e0f5", // Purple light
    textColor: "#FF3399", // Pink text for brands
  },
  {
    color: "#00a4b4", // Teal dark
    gradient: "linear-gradient(135deg, #00a4b4, #00a4b4)",
    backColor: "#daeff1", // Teal light
    textColor: "#00a4b4", // Teal text
  },
  {
    color: "#8cd9c9", // Green dark
    gradient: "linear-gradient(135deg, #8cd9c9, #8cd9c9)",
    backColor: "#d4f2de", // Green light
    textColor: "#5eb3a0", // Green text
  },
  {
    color: "#f55f96", // Pink dark
    gradient: "linear-gradient(135deg, #f55f96, #f55f96)",
    backColor: "#fbcede", // Pink light
    textColor: "#f55f96", // Pink text
  },
  {
    color: "#ffb996", // Orange dark
    gradient: "linear-gradient(135deg, #ffb996, #ffb996)",
    backColor: "#ffede4", // Orange light
    textColor: "#ff9966", // Orange text
  },
  {
    color: "#7d4c79", // Plum dark
    gradient: "linear-gradient(135deg, #7d4c79, #7d4c79)",
    backColor: "#f3e4f0", // Plum light
    textColor: "#7d4c79", // Plum text
  },
]

// Navy color for text and buttons
const navyColor = "#003344"

// Update the getDarkerCardColor function to use darker shades
const getDarkerCardColor = (colorIndex: number) => {
  const baseColor = cardColors[colorIndex].color

  // Mapping of base colors to their darker variants
  const darkerVariants: { [key: string]: string } = {
    "#8d7dc7": "#6a5fa0", // Darker purple
    "#00a4b4": "#00828f", // Darker teal
    "#8cd9c9": "#5eb3a0", // Darker green
    "#f55f96": "#d93a6c", // Darker pink
    "#ffb996": "#ff9966", // Darker orange
    "#7d4c79": "#5f3a5c", // Darker plum
  }

  return darkerVariants[baseColor] || baseColor
}

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Create alternating array of brand and investor cards
function createAlternatingDeck(): CardData[] {
  const shuffledBrands = shuffleArray(brandCards)
  const shuffledInvestors = shuffleArray(investorCards)

  // Create alternating array
  const alternatingDeck: CardData[] = []
  const maxLength = Math.max(shuffledBrands.length, shuffledInvestors.length)

  for (let i = 0; i < maxLength; i++) {
    if (i < shuffledInvestors.length) alternatingDeck.push(shuffledInvestors[i])
    if (i < shuffledBrands.length) alternatingDeck.push(shuffledBrands[i])
  }

  return alternatingDeck
}

export default function AutoRotatingCards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [deck, setDeck] = useState<CardData[]>([])
  const [isVisible, setIsVisible] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Initialize the deck
  useEffect(() => {
    setDeck(createAlternatingDeck())
  }, [])

  // Animation sequence
  useEffect(() => {
    if (deck.length === 0 || isPaused) return

    // Clear any existing timers
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Step 1: Show front of card for 1.5 seconds (half of original 3 seconds)
    timerRef.current = setTimeout(() => {
      // Step 2: Flip to back of card
      setIsFlipped(true)

      // Step 3: Show back of card for 2.5 seconds (increased by 0.5 seconds)
      timerRef.current = setTimeout(() => {
        // Step 4: Fade out
        setIsVisible(false)

        // Step 5: After fade out, move to next card and reset
        timerRef.current = setTimeout(() => {
          setCurrentCardIndex((prevIndex) => (prevIndex + 1) % deck.length)
          setIsFlipped(false)
          setIsVisible(true)
        }, 1000) // Fade duration (1 second)
      }, 2500) // Back display duration (2.5 seconds - increased by 0.5 seconds)
    }, 1500) // Front display duration (1.5 seconds)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentCardIndex, deck, isPaused])

  // If deck is empty, show loading
  if (deck.length === 0) {
    return <div className="w-full h-64 flex items-center justify-center">Loading cards...</div>
  }

  const currentCard = deck[currentCardIndex]

  // Format claim with quotation marks
  const formatClaim = (claim: string) => {
    return `"${claim}"`
  }

  // Get the audience label based on whether this is for investors or brands
  const getAudienceLabel = (isInvestor: boolean) => {
    return isInvestor ? "For investors" : "For science-backed brands"
  }

  // Get the dot color for the audience pill
  const getDotColor = (isInvestor: boolean) => {
    return isInvestor ? "#22C55E" : "#FF3399" // Green for investors, Pink for brands
  }

  return (
    <div
      className="w-full max-w-sm mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header text above the card */}
      <div className="text-center text-base text-muted-foreground font-medium mb-4">
        Real claims. Rigorously unpacked.
      </div>

      {/* Card container - now taller with shadow for elevation */}
      <div className="w-full h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={`card-${currentCardIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full aspect-[3/4] shadow-lg rounded-xl"
            >
              {/* Card container with 3D effect */}
              <div className="w-full h-full relative" style={{ perspective: "1000px" }}>
                {/* Card with both front and back sides */}
                <div
                  className="w-full h-full relative transition-transform duration-1000"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card (with speech bubble) */}
                  <div
                    className="absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col"
                    style={{
                      background: cardColors[currentCard.color].color,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Audience tag pill at top - smaller and not bold */}
                    <div className="absolute top-6 left-0 right-0 flex justify-center">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-normal flex items-center gap-1 whitespace-nowrap"
                        style={{
                          backgroundColor: cardColors[currentCard.color].backColor, // Light version
                          color: getDarkerCardColor(currentCard.color), // Darker color for text
                        }}
                      >
                        <Circle
                          className="h-1.5 w-1.5 fill-current"
                          style={{ color: getDotColor(currentCard.isInvestor) }}
                        />
                        <span className="text-center">{getAudienceLabel(currentCard.isInvestor)}</span>
                      </div>
                    </div>

                    {/* Main content - vertically centered with speech bubble */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      {/* Classic speech bubble matching the provided image */}
                      <div className="relative mb-6">
                        {/* Main bubble with fully rounded corners */}
                        <div
                          className="w-full p-5 rounded-2xl shadow-md"
                          style={{
                            backgroundColor: getDarkerCardColor(currentCard.color),
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          <h3 className="text-xl font-bold italic text-white text-center">
                            {formatClaim(currentCard.claim)}
                          </h3>
                        </div>

                        {/* Small triangular tail positioned at bottom left */}
                        <div
                          className="absolute -bottom-3 left-10"
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: "10px solid transparent",
                            borderRight: "10px solid transparent",
                            borderTop: `15px solid ${getDarkerCardColor(currentCard.color)}`,
                            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))",
                            zIndex: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Back of card (with supporting text) */}
                  <div
                    className="absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col"
                    style={{
                      background: cardColors[currentCard.color].backColor,
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Audience tag pill at top - centered, smaller and not bold */}
                    <div className="w-full flex justify-center mb-4">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-normal flex items-center gap-1 whitespace-nowrap"
                        style={{
                          backgroundColor: cardColors[currentCard.color].color, // Dark version
                          color: "white", // White text
                        }}
                      >
                        <Circle
                          className="h-1.5 w-1.5 fill-current"
                          style={{ color: getDotColor(currentCard.isInvestor) }}
                        />
                        <span>{getAudienceLabel(currentCard.isInvestor)}</span>
                      </div>
                    </div>

                    {/* Main content - vertically centered with main question and supporting text */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                      <div className="w-full">
                        <p className="text-xl font-medium text-[#003344] text-center leading-relaxed">
                          {currentCard.mainQuestion}
                        </p>
                      </div>

                      {/* Divider and supporting text with emoji */}
                      <div className="w-full mt-4 pt-4 border-t border-gray-200">
                        {/* Supporting text with emoji - responsive layout */}
                        {isMobile ? (
                          // Mobile layout - stacked
                          <div className="flex flex-col items-center text-center space-y-2">
                            <span className="text-2xl">{currentCard.emoji}</span>
                            <span className="text-[#003344] text-sm font-normal italic">
                              {currentCard.supportingText}
                            </span>
                          </div>
                        ) : (
                          // Desktop layout - side by side with proper alignment
                          <div className="flex justify-center">
                            <div className="inline-flex items-center">
                              <span className="text-xl flex-shrink-0 mr-3">{currentCard.emoji}</span>
                              <span className="text-[#003344] text-sm font-normal italic">
                                {currentCard.supportingText}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pause indicator - only visible when paused */}
      {isPaused && (
        <div className="mt-2 text-center text-xs text-muted-foreground">
          Animation paused. Move mouse away to resume.
        </div>
      )}
    </div>
  )
}
