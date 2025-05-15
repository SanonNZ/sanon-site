"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, Circle, Undo } from "lucide-react"
import confetti from "canvas-confetti"

// Define the card data structure
interface CardData {
  id: number
  claim: string
  audience: "brands" | "investors"
  mainQuestion: string
  methodQuestions: string[]
  insight: string
  isFinal?: boolean
  isIntro?: boolean
}

// Card data with just one claim card
const cards: CardData[] = [
  {
    id: 0,
    claim: "Good claims ask better questions.",
    audience: "brands",
    mainQuestion: "Swipe through a few we've sharpened.",
    methodQuestions: ["", ""],
    insight: "",
    isIntro: true,
  },
  {
    id: 1,
    claim: "Clinically proven to improve memory.",
    audience: "brands",
    mainQuestion: "How can we turn this into a compelling, defensible message that builds trust?",
    methodQuestions: ["Clarifying what type of memory was tested", "Reviewing the effect size and study quality"],
    insight: "From dense data to digestible content — without losing rigor.",
    isFinal: false,
  },
  {
    id: 2,
    claim: "Hype is loud. Rigor is quiet.",
    audience: "brands", // Doesn't matter for final card
    mainQuestion: "",
    methodQuestions: ["", ""],
    insight: "Arcova helps you ask the questions that matter — and avoid the ones that don't.",
    isFinal: true,
  },
]

// Update the cardColors array with the new color scheme
// The order is important as we want the first card to be purple
const cardColors = [
  {
    color: "#8d7dc7", // Purple dark (first card)
    gradient: "linear-gradient(135deg, #8d7dc7, #8d7dc7)",
    backColor: "#e7e0f5", // Purple light
  },
  {
    color: "#00a4b4", // Teal dark
    gradient: "linear-gradient(135deg, #00a4b4, #00a4b4)",
    backColor: "#daeff1", // Teal light
  },
  {
    color: "#8cd9c9", // Green dark
    gradient: "linear-gradient(135deg, #8cd9c9, #8cd9c9)",
    backColor: "#d4f2de", // Green light
  },
  {
    color: "#f55f96", // Pink dark
    gradient: "linear-gradient(135deg, #f55f96, #f55f96)",
    backColor: "#fbcede", // Pink light
  },
  {
    color: "#ffb996", // Orange dark
    gradient: "linear-gradient(135deg, #ffb996, #ffb996)",
    backColor: "#ffede4", // Orange light
  },
  {
    color: "#7d4c79", // Plum dark
    gradient: "linear-gradient(135deg, #7d4c79, #7d4c79)",
    backColor: "#f3e4f0", // Plum light
  },
]

// Navy color for text and buttons
const navyColor = "#003344"

// Update the getCardColor function to handle the new color scheme
const getCardColor = (cardId: number) => {
  // Skip intro card (id 0)
  if (cardId === 0)
    return {
      color: "#00a4b4", // Teal for intro card
      gradient: "linear-gradient(135deg, #00a4b4, #00a4b4)",
      backColor: "#daeff1",
    }

  // For final card (id 2 in this case)
  if (cardId === 2)
    return {
      color: navyColor,
      gradient: `linear-gradient(135deg, ${navyColor}, ${navyColor})`,
      backColor: navyColor,
    }

  // For the single claim card (id 1), use the purple color
  return cardColors[0] // Purple color
}

// Add a function to get darker variant of card colors
const getDarkerCardColor = (cardId: number) => {
  const baseColor = getCardColor(cardId).color

  // Mapping of base colors to their darker variants
  const darkerVariants: { [key: string]: string } = {
    "#8d7dc7": "#6a5fa0", // Darker purple
    "#00a4b4": "#00828f", // Darker teal
    "#8cd9c9": "#5eb3a0", // Darker green
    "#f55f96": "#d93a6c", // Darker pink
    "#ffb996": "#ff9966", // Darker orange
    "#7d4c79": "#5f3a5c", // Darker plum
    "#003344": "#002233", // Darker navy
  }

  return darkerVariants[baseColor] || baseColor
}

export default function SingleCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({})
  const [direction, setDirection] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [confettiShown, setConfettiShown] = useState(false)
  const [showInsight, setShowInsight] = useState<boolean>(false)
  const [currentInsight, setCurrentInsight] = useState<string>("")
  const carouselRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const totalCards = cards.length
  const currentCard = cards[currentIndex]
  const isFinalCard = currentCard.isFinal
  const isIntroCard = currentCard.isIntro
  const isFlipped = flippedCards[currentIndex] || false

  // Get the previous and next card
  const prevCard = cards[currentIndex - 1]
  const nextCard = cards[currentIndex + 1]

  // Function to get the background color of the card
  const getCardBgColor = (cardId: number, isBack: boolean, isFinal: boolean, isIntro: boolean) => {
    if (isFinal) {
      return "#002233" // Darker navy
    }

    if (isIntro) {
      return getCardColor(cardId).gradient
    }

    if (isBack) {
      return getCardColor(cardId).backColor
    }

    return getCardColor(cardId).gradient
  }

  // Trigger confetti when reaching the final card
  useEffect(() => {
    if (isFinalCard && !confettiShown) {
      setTimeout(() => {
        const duration = 2000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        function randomInRange(min: number, max: number) {
          return Math.random() * (max - min) + min
        }

        const interval: any = setInterval(() => {
          const timeLeft = animationEnd - Date.now()

          if (timeLeft <= 0) {
            return clearInterval(interval)
          }

          const particleCount = 50 * (timeLeft / duration)

          // Since particles fall down, start a bit higher than random
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: randomInRange(0.1, 0.3) },
          })
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: randomInRange(0.1, 0.3) },
          })
        }, 250)

        setConfettiShown(true)
      }, 500)
    }
  }, [isFinalCard, confettiShown])

  const goToNext = () => {
    if (currentIndex < totalCards - 1) {
      setDirection(1)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, 300)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
      }, 300)
    }
  }

  // Add a function to handle going to next card with insight
  const goToNextWithInsight = () => {
    if (currentIndex < totalCards - 1 && !showInsight) {
      setCurrentInsight(currentCard.insight)
      setShowInsight(true)

      // After showing insight for a moment, proceed to next card
      setTimeout(() => {
        setShowInsight(false)
        setDirection(1)
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1)
        }, 300)
      }, 2500)
    } else {
      // If insight was already shown or we're just flipping, just go to next card
      goToNext()
    }
  }

  // Update the handleFlip function to work for all cards including the final card
  const handleFlip = () => {
    if (!isIntroCard) {
      setFlippedCards({
        ...flippedCards,
        [currentIndex]: !isFlipped,
      })
    }
  }

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < totalCards - 1) {
      goToNext()
    } else if (isRightSwipe && currentIndex > 0) {
      goToPrev()
    }
  }

  return (
    <div className="w-full py-8 bg-[#F8F7FF] rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with branding similar to Tracksuit */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="text-[#8A70D6] text-sm font-medium px-3 py-1 rounded-full border border-[#8A70D6]/20">
              Going Non-Linear
            </div>
          </div>
          <div className="text-[#8A70D6] text-sm font-medium px-3 py-1 rounded-full bg-[#E6E6FA]">Arcova</div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#003344] mb-2">The Signal Test</h2>
          <p className="text-[#003344]/70 mt-2">Can you separate signal from noise in scientific claims?</p>
        </div>

        <div
          className="relative"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation arrows for desktop */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Previous card with arrow overlay */}
            <div className="relative w-12 md:w-40 flex-shrink-0">
              {prevCard && (
                <div
                  className="hidden md:block w-32 h-64 relative overflow-hidden rounded-3xl shadow-md opacity-50 transform -translate-x-4 scale-90 cursor-pointer transition-all duration-300 hover:opacity-70"
                  onClick={goToPrev}
                  style={{ background: getCardBgColor(prevCard.id, false, !!prevCard.isFinal, !!prevCard.isIntro) }}
                >
                  {/* Arrow overlay on the card - moved to bottom center */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center z-20">
                    <div className="bg-white/80 rounded-full p-2 shadow-md">
                      <ChevronLeft className="h-6 w-6 text-[#003344]" />
                    </div>
                  </div>

                  {/* Semi-transparent overlay to improve text readability under the arrow */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>

                  {/* Card content */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center">
                    <p className="text-sm font-medium text-white line-clamp-3 text-center">{currentCard.claim}</p>
                  </div>
                </div>
              )}

              {/* Mobile-only arrow */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrev}
                  className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="h-6 w-6 text-[#003344]" />
                </button>
              )}
            </div>

            {/* Current card container */}
            <div className="w-full max-w-md aspect-[3/4] md:aspect-[3/4]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 100 : direction < 0 ? -100 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction < 0 ? 100 : direction > 0 ? -100 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  {/* Card container with 3D effect */}
                  <div className="w-full h-full relative" style={{ perspective: "1000px" }}>
                    {/* Front of card */}
                    <div
                      className={`absolute w-full h-full rounded-3xl shadow-lg p-8 md:p-10 flex flex-col ${
                        !isIntroCard && !isFinalCard ? "cursor-pointer" : ""
                      } transition-all duration-500`}
                      onClick={isIntroCard ? goToNext : !isFinalCard ? handleFlip : undefined}
                      style={{
                        background: getCardBgColor(currentCard.id, false, isFinalCard, isIntroCard),
                        backfaceVisibility: "hidden",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      }}
                    >
                      {/* Audience tag pill at top */}
                      {!isIntroCard && !isFinalCard && (
                        <div className="absolute top-8 left-0 right-0 flex justify-center">
                          <div
                            className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5"
                            style={{
                              backgroundColor: getCardColor(currentCard.id).backColor, // Light version
                              color: getDarkerCardColor(currentCard.id), // Darker color for text
                            }}
                          >
                            <Circle className="h-2 w-2 fill-current text-[#FF3399]" /> {/* Pink dot */}
                            <span className="text-center">For science-backed brands</span>
                          </div>
                        </div>
                      )}

                      {/* Main content - vertically centered */}
                      <div className="flex-1 flex flex-col items-center justify-center">
                        {isIntroCard && (
                          <>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
                              {currentCard.claim}
                            </h3>
                            <p className="text-lg text-white/90 mb-4 text-center">{currentCard.mainQuestion}</p>
                          </>
                        )}
                        {!isIntroCard && !isFinalCard && (
                          <>
                            <div
                              className="relative p-6 rounded-2xl shadow-md w-full flex items-center justify-center"
                              style={{
                                backgroundColor: getDarkerCardColor(currentCard.id),
                              }}
                            >
                              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                                "{currentCard.claim}"
                              </h3>
                            </div>
                            {/* Flip indicator directly below the bubble with minimal spacing */}
                            <div className="mt-2 flex justify-center">
                              <div className="text-white text-base font-black flex items-center gap-1">
                                <span>Flip to unpack</span>
                                <ChevronRight className="h-4 w-4" />
                              </div>
                            </div>
                          </>
                        )}

                        {isFinalCard && (
                          <>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
                              {currentCard.claim}
                            </h3>
                            <p className="text-lg text-white/90 mb-8 text-center">
                              Book a call with our team to learn more about how we work
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                // Add your booking link here
                                window.open("https://calendly.com/your-booking-link", "_blank")
                              }}
                              className="bg-white hover:bg-white/90 text-[#003344] font-bold rounded-full px-6 py-3 shadow-md transition-all duration-300 flex items-center gap-2"
                            >
                              Book a Call
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Flip indicator - positioned directly below the claim bubble */}
                      {!isFinalCard && (
                        <div className="mt-4 flex justify-center">
                          <div className="text-white text-base font-black flex items-center gap-1">
                            <span>Flip to unpack</span>
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Back of card - Redesigned to match the image */}
                    {!isIntroCard && !isFinalCard && (
                      <div
                        className="absolute w-full h-full rounded-3xl shadow-lg p-8 md:p-10 flex flex-col cursor-pointer transition-all duration-500"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleFlip()
                        }}
                        style={{
                          background: getCardBgColor(currentCard.id, true, false, false),
                          backfaceVisibility: "hidden",
                          transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                        }}
                      >
                        {/* Audience tag pill at top - centered */}
                        <div className="w-full flex justify-center mb-8">
                          <div
                            className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5"
                            style={{
                              backgroundColor: getCardColor(currentCard.id).color, // Dark version
                              color: "white", // White text
                            }}
                          >
                            <Circle className="h-2 w-2 fill-current text-[#FF3399]" />
                            <span>For science-backed brands</span>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center text-center px-4">
                          {/* Main question section */}
                          <div className="mb-8 w-full">
                            <h3 className="text-3xl font-extrabold text-[#003344] mb-4">How can we...</h3>
                            <p className="text-2xl font-bold text-[#003344]">{currentCard.mainQuestion}</p>
                          </div>

                          {/* Checklist items */}
                          <div className="space-y-6 mb-8 w-full px-4">
                            {currentCard.methodQuestions.map((question, index) => (
                              <div key={index} className="flex items-start max-w-md mx-auto">
                                <div className="mt-1 text-green-500 flex-shrink-0 mr-3">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect width="20" height="20" rx="4" fill="#4ADE80" fillOpacity="0.2" />
                                    <path
                                      d="M14 7L8.5 12.5L6 10"
                                      stroke="#22C55E"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <p className="text-[#003344] text-base font-medium text-left">{question}</p>
                              </div>
                            ))}
                          </div>

                          {/* Flip back button - now a circle */}
                          <button
                            onClick={handleFlip}
                            className="mt-6 bg-white hover:bg-gray-50 text-[#003344] border border-gray-200 rounded-full w-10 h-10 shadow-sm transition-all duration-300 flex items-center justify-center"
                          >
                            <Undo className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Back of final card */}
                    {isFinalCard && (
                      <div
                        className="absolute w-full h-full rounded-3xl shadow-lg p-8 md:p-10 flex flex-col cursor-pointer transition-all duration-500"
                        onClick={handleFlip}
                        style={{
                          background: "#002233", // Darker navy
                          backfaceVisibility: "hidden",
                          transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                        }}
                      >
                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to go deeper?</h3>
                          <p className="text-xl text-white/90 mb-8">
                            Read more about how we work with science-backed brands
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              // Add your science-backed brands page link here
                              window.open("/science-backed-brands", "_blank")
                            }}
                            className="bg-white hover:bg-white/90 text-[#003344] font-bold rounded-full px-6 py-3 shadow-md transition-all duration-300 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4" />
                          </button>

                          {/* Flip back button - now a circle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleFlip()
                            }}
                            className="mt-6 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full w-10 h-10 shadow-sm transition-all duration-300 flex items-center justify-center"
                          >
                            <Undo className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progress dots at the bottom - only show for non-intro cards */}
                  {!isIntroCard && (
                    <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
                      <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex gap-2 items-center">
                        {cards.slice(1, totalCards - 1).map((_, index) => {
                          // Adjust index to account for intro card
                          const adjustedIndex = index + 1

                          return (
                            <div
                              key={index}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                adjustedIndex === currentIndex ? "w-6" : "w-2 hover:bg-opacity-70 cursor-pointer"
                              }`}
                              style={{
                                backgroundColor: adjustedIndex === currentIndex ? navyColor : "#CCCCCC", // Navy for active dot, grey for inactive
                              }}
                              onClick={() => setCurrentIndex(adjustedIndex)}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next card with arrow overlay */}
            <div className="relative w-12 md:w-40 flex-shrink-0">
              {nextCard && (
                <div
                  className="hidden md:block w-32 h-64 relative overflow-hidden rounded-3xl shadow-md opacity-50 transform translate-x-4 scale-90 cursor-pointer transition-all duration-300 hover:opacity-70"
                  onClick={isIntroCard ? goToNext : isFlipped ? goToNextWithInsight : handleFlip}
                  style={{ background: getCardBgColor(nextCard.id, false, !!nextCard.isFinal, !!nextCard.isIntro) }}
                >
                  {/* Arrow overlay on the card - moved to bottom center */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center z-20">
                    <div className="bg-white/80 rounded-full p-2 shadow-md">
                      <ChevronRight className="h-6 w-6 text-[#003344]" />
                    </div>
                  </div>

                  {/* Semi-transparent overlay to improve text readability under the arrow */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>

                  {/* Card content */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center">
                    <p className="text-sm font-medium text-white line-clamp-3 text-center">{nextCard.claim}</p>
                  </div>
                </div>
              )}

              {/* Mobile-only arrow */}
              {currentIndex < totalCards - 1 && (
                <button
                  onClick={isIntroCard ? goToNext : isFlipped ? goToNextWithInsight : handleFlip}
                  className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Next card"
                >
                  <ChevronRight className="h-6 w-6 text-[#003344]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Insight banner */}
      {showInsight && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white p-8 rounded-xl max-w-md text-center shadow-xl"
          >
            <div className="text-4xl mb-4">✨</div>
            <p className="text-xl font-medium text-[#003344]">{currentInsight}</p>
          </motion.div>
        </div>
      )}
    </div>
  )
}
