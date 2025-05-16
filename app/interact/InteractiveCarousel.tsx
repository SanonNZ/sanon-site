"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Circle, Undo, ChevronRightIcon, ArrowRight } from "lucide-react"
import confetti from "canvas-confetti"

// Define the card data structure
interface CardData {
  id: number
  claim: string
  mainQuestion: string
  methodQuestions: string[]
  color: number // Index of the color to use
  isFinal?: boolean
  isIntro?: boolean
}

// Science-backed brand cards
const brandCards: CardData[] = [
  {
    id: 0,
    claim: "Good claims ask better questions.",
    mainQuestion: "Swipe through a few we've sharpened.",
    methodQuestions: ["", ""],
    color: 6, // Navy (special color for intro)
    isIntro: true,
  },
  {
    id: 1,
    claim: "Clinically proven to improve memory.",
    mainQuestion: "Turn this into a compelling message that builds trust?",
    methodQuestions: [
      "Clarify what the study really showed",
      "Connect the science to something your audience values",
      "Shape the message to build credibility, not just clinical claims",
    ],
    color: 0, // Purple
    isFinal: false,
  },
  {
    id: 2,
    claim: "Boosts immune function by 80% in two weeks.",
    mainQuestion: "Make this bold claim believable, and interesting?",
    methodQuestions: [
      "Clarify what was actually tested, and how",
      "Link it to benefits that resonate with real people, not just biomarkers",
      "Use it to create content that educates and builds authority, not overstatement",
    ],
    color: 1, // Teal
    isFinal: false,
  },
  {
    id: 3,
    claim: "Published in a leading journal.",
    mainQuestion: "Make this research work harder in your content?",
    methodQuestions: [
      "Translate the paper into a clear, persuasive brand story",
      "Position it to support your authority and domain expertise",
      "Use it to spark SEO-friendly content that performs",
    ],
    color: 2, // Green
    isFinal: false,
  },
  {
    id: 4,
    claim: "Backed by the latest neuroscience.",
    mainQuestion: "Bring this to life without sounding generic or overhyped?",
    methodQuestions: [
      "Break down what the research actually says",
      "Highlight why it's relevant to your product or purpose",
      "Turn it into a message your audience cares about",
    ],
    color: 3, // Pink
    isFinal: false,
  },
  {
    id: 5,
    claim: "Breakthrough discovery in aging biology.",
    mainQuestion: "Use this science to say something original, not just impressive?",
    methodQuestions: [
      "Explain what the discovery is, and what it really means for your audience",
      "Connect it to your product's story or purpose",
      "Turn complexity into content that sparks curiosity, not confusion",
    ],
    color: 4, // Orange
    isFinal: false,
  },
  {
    id: 6,
    claim: "Built on Nobel-winning research.",
    mainQuestion: "Move beyond name-dropping — and make it matter?",
    methodQuestions: [
      "Show how this science underpins your product — not just your pitch",
      "Give people a reason to care — not just a reason to believe",
      "Use it to build thought leadership, not just backstory",
    ],
    color: 5, // Plum
    isFinal: false,
  },
  {
    id: 7,
    claim: "Hype is loud. Rigor is quiet.",
    mainQuestion: "",
    methodQuestions: ["", ""],
    color: 6, // Navy (special color for final)
    isFinal: true,
  },
]

// Investor cards with updated content
const investorCards: CardData[] = [
  {
    id: 8,
    claim: "Good claims ask better questions.",
    mainQuestion: "Swipe through a few we've sharpened.",
    methodQuestions: ["", ""],
    color: 6, // Navy (special color for intro)
    isIntro: true,
  },
  {
    id: 9,
    claim: "We're transforming drug discovery with AI.",
    mainQuestion: "Tell whether this is a real breakthrough, or just a rebrand?",
    methodQuestions: [
      "Identify which pipeline step is changing, and why it matters",
      "Clarify how this differs from other AI-driven approaches",
      "Distinguish what's novel, what's working, and what's defensible",
    ],
    color: 0, // Purple
    isFinal: false,
  },
  {
    id: 10,
    claim: "The first scalable platform for personalised therapeutics.",
    mainQuestion: "See what's scalable, and what's still theory?",
    methodQuestions: [
      "Clarify what's being personalised, and how",
      "Show what makes the platform scalable - tech, data, ops?",
      "Understand whether this has been tested beyond a few use cases",
    ],
    color: 1, // Teal
    isFinal: false,
  },
  {
    id: 11,
    claim: "Leverages protein engineering to target previously 'undruggable' pathways.",
    mainQuestion: "Figure out what's newly druggable, vs. what's a new pitch?",
    methodQuestions: [
      "Define what made the target undruggable, and what's changed",
      "Clarify how the mechanism works, and where it's been tested",
      "Link the breakthrough to a real patient group and market need",
    ],
    color: 2, // Green
    isFinal: false,
  },
  {
    id: 12,
    claim: "Spun out of Ivy League / Top 10 lab.",
    mainQuestion: "Move from academic credibility to commercial confidence?",
    methodQuestions: [
      "Highlight what's been validated outside the lab",
      "Show the team's ability to productize the science",
      "Distinguish novelty from name recognition",
    ],
    color: 3, // Pink
    isFinal: false,
  },
  {
    id: 13,
    claim: "Revolutionising how we age at the cellular level.",
    mainQuestion: "Determine revolutionary science vs. hype?",
    methodQuestions: [
      "Pinpoint what aspect of aging is being targeted, and why it matters",
      "Clarify what's been shown in real systems vs lab models",
      "Connect the science to a disease, market, or path to approval",
    ],
    color: 4, // Orange
    isFinal: false,
  },
  {
    id: 14,
    claim: "Predictive accuracy above 90%.",
    mainQuestion: "Tell what this number really means, and whether 90% is actually good?",
    methodQuestions: [
      "Define what's being predicted, and how accuracy is measured",
      "Compare performance to competitors or existing standards",
      "Clarify how the model was validated, and in what context",
    ],
    color: 5, // Plum
    isFinal: false,
  },
  {
    id: 15,
    claim: "Hype is loud. Rigor is quiet.",
    mainQuestion: "",
    methodQuestions: ["", ""],
    color: 6, // Navy (special color for final)
    isFinal: true,
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
  {
    color: "#003344", // Navy dark (for intro and final cards)
    gradient: "linear-gradient(135deg, #003344, #003344)",
    backColor: "#002233", // Darker navy for back
    textColor: "#ffffff", // White text
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
    "#003344": "#002233", // Darker navy
  }

  return darkerVariants[baseColor] || baseColor
}

// Carousel component for brand cards
function CardCarousel({
  cards,
  title,
  isInvestor = false,
}: { cards: CardData[]; title: string; isInvestor?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({})
  const [direction, setDirection] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [confettiShown, setConfettiShown] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const totalCards = cards.length
  const currentCard = cards[currentIndex]
  const isFlipped = flippedCards[currentIndex] || false
  const isIntroCard = currentCard.isIntro
  const isFinalCard = currentCard.isFinal

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

  // Handle card click based on card type
  const handleCardClick = () => {
    if (isIntroCard) {
      goToNext()
    } else if (!isFinalCard) {
      handleFlip()
    }
  }

  // Update the handleFlip function to work for all cards
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !isFlipped && !isFinalCard && !isIntroCard) {
        handleFlip()
      } else if (e.key === "ArrowRight" && isFlipped) {
        goToNext()
      } else if (e.key === "ArrowLeft") {
        goToPrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, isFlipped, isFinalCard, isIntroCard])

  // Get previous and next cards for the carousel
  const prevCard = currentIndex > 0 ? cards[currentIndex - 1] : null
  const nextCard = currentIndex < totalCards - 1 ? cards[currentIndex + 1] : null

  // Format claim with quotation marks
  const formatClaim = (claim: string, isFinal: boolean | undefined, isIntro: boolean | undefined) => {
    if (isFinal || isIntro) return claim // Don't add quotes to the final or intro card
    return `"${claim}"`
  }

  // Get the audience label based on whether this is for investors or brands
  const getAudienceLabel = () => {
    return isInvestor ? "For investors" : "For science-backed brands"
  }

  // Get the dot color for the audience pill
  const getDotColor = () => {
    return isInvestor ? "#8A70D6" : "#FF3399" // Purple for investors, Pink for brands
  }

  return (
    <div className="w-full py-8 bg-[#F8F7FF] rounded-xl mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

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
                  style={{ background: cardColors[prevCard.color].color }}
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
                    <p className="text-sm font-medium text-white line-clamp-3 text-center">
                      {formatClaim(prevCard.claim, prevCard.isFinal, prevCard.isIntro)}
                    </p>
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
                      onClick={handleCardClick}
                      style={{
                        background: cardColors[currentCard.color].color,
                        backfaceVisibility: "hidden",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      }}
                    >
                      {/* Audience tag pill at top - only for regular cards */}
                      {!isIntroCard && !isFinalCard && (
                        <div className="absolute top-8 left-0 right-0 flex justify-center">
                          <div
                            className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5"
                            style={{
                              backgroundColor: cardColors[currentCard.color].backColor, // Light version
                              color: getDarkerCardColor(currentCard.color), // Darker color for text
                            }}
                          >
                            <Circle className="h-2 w-2 fill-current" style={{ color: getDotColor() }} />
                            <span className="text-center">{getAudienceLabel()}</span>
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
                                backgroundColor: getDarkerCardColor(currentCard.color),
                              }}
                            >
                              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                                {formatClaim(currentCard.claim, currentCard.isFinal, currentCard.isIntro)}
                              </h3>
                            </div>
                            {/* Flip indicator directly below the bubble with minimal spacing */}
                            <div className="mt-2 flex justify-center">
                              <div className="text-white text-base font-black flex items-center gap-1">
                                <span>Flip to unpack</span>
                                <ChevronRightIcon className="h-4 w-4" />
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
                    </div>

                    {/* Back of card - only for regular and final cards */}
                    {!isIntroCard && (
                      <div
                        className="absolute w-full h-full rounded-3xl shadow-lg p-8 md:p-10 flex flex-col cursor-pointer transition-all duration-500"
                        onClick={handleFlip}
                        style={{
                          background: cardColors[currentCard.color].backColor,
                          backfaceVisibility: "hidden",
                          transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                        }}
                      >
                        {/* Audience tag pill at top - centered */}
                        {!isFinalCard && (
                          <div className="w-full flex justify-center mb-8">
                            <div
                              className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5"
                              style={{
                                backgroundColor: cardColors[currentCard.color].color, // Dark version
                                color: "white", // White text
                              }}
                            >
                              <Circle className="h-2 w-2 fill-current" style={{ color: getDotColor() }} />
                              <span>{getAudienceLabel()}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex-1 flex flex-col items-center text-center px-4">
                          {/* Main question section - only for regular cards */}
                          {!isFinalCard && (
                            <>
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
                            </>
                          )}

                          {/* Final card back content */}
                          {isFinalCard && (
                            <>
                              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to go deeper?</h3>
                              <p className="text-xl text-white/90 mb-8">
                                Read more about how we work with {isInvestor ? "investors" : "science-backed brands"}
                              </p>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Add your page link here
                                  window.open(isInvestor ? "/investor-services" : "/science-backed-brands", "_blank")
                                }}
                                className="bg-white hover:bg-white/90 text-[#003344] font-bold rounded-full px-6 py-3 shadow-md transition-all duration-300 flex items-center gap-2"
                              >
                                Learn More
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </>
                          )}

                          {/* Flip back button - now a circle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleFlip()
                            }}
                            className="mt-6 bg-white hover:bg-gray-50 text-[#003344] border border-gray-200 rounded-full w-10 h-10 shadow-sm transition-all duration-300 flex items-center justify-center"
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
                  onClick={isIntroCard ? goToNext : isFlipped ? goToNext : handleFlip}
                  style={{ background: cardColors[nextCard.color].color }}
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
                    <p className="text-sm font-medium text-white line-clamp-3 text-center">
                      {formatClaim(nextCard.claim, nextCard.isFinal, nextCard.isIntro)}
                    </p>
                  </div>
                </div>
              )}

              {/* Mobile-only arrow */}
              {currentIndex < totalCards - 1 && (
                <button
                  onClick={isIntroCard ? goToNext : isFlipped ? goToNext : handleFlip}
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
    </div>
  )
}

export default function InteractiveCarousel() {
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
          <h2 className="text-4xl font-bold text-[#003344] mb-2">Hype is loud. Rigor is quiet.</h2>
          <p className="text-[#003344]/70 mt-2 mb-8">We help you hear the difference. Try it.</p>
        </div>

        {/* Brand Cards Carousel */}
        <CardCarousel cards={brandCards} title="Science-backed Brand Cards" />

        {/* Investor Cards Carousel */}
        <CardCarousel cards={investorCards} title="Investor Cards" isInvestor={true} />
      </div>
    </div>
  )
}
