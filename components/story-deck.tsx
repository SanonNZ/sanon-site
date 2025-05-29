"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface StorySlide {
  emoji: string
  title: string
  subtitle: string
  bg: string
  body?: string
  isFinal?: boolean
}

interface StoryDeckProps {
  slides: StorySlide[]
  ctaText?: string
  ctaHref?: string
  ctaAction?: () => void
  rotationInterval?: number
}

export default function StoryDeck({
  slides,
  ctaText = "Book a Call",
  ctaHref = "https://calendly.com/emma-arcova/30min",
  ctaAction = () => {},
  rotationInterval = 1000,
}: StoryDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideHistory, setSlideHistory] = useState<number[]>([0])

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length
    setCurrentSlide(next)
    setSlideHistory((prev) => [...prev, next])

    // Keep history at a reasonable size
    if (slideHistory.length > 10) {
      setSlideHistory((prev) => prev.slice(prev.length - 10))
    }
  }, [currentSlide, slides.length, slideHistory.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [nextSlide, rotationInterval])

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div
        className="relative rounded-xl overflow-hidden shadow-lg"
        style={{
          minHeight: "500px",
          perspective: "1500px", // Increased perspective for more dramatic effect
        }}
      >
        <AnimatePresence mode="sync">
          {slideHistory.map((slideIndex, historyIndex) => {
            const slide = slides[slideIndex]
            const isLatest = historyIndex === slideHistory.length - 1

            return (
              <motion.div
                key={`${slideIndex}-${historyIndex}`}
                initial={{
                  opacity: 0,
                  scale: 1.25, // Increased scale for more dramatic effect
                  z: 600, // Significantly increased z value for more pronounced depth
                  y: -30, // Slightly increased y offset
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  z: 0,
                  y: 0,
                }}
                transition={{
                  duration: 1, // Slightly longer duration to appreciate the movement
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center justify-center text-center p-8 md:p-12 absolute inset-0"
                style={{
                  backgroundColor: slide.bg,
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  zIndex: historyIndex, // Ensures newer slides appear on top
                  boxShadow: isLatest ? "0 10px 30px rgba(0,0,0,0.1)" : "none", // Shadow only on latest slide
                }}
              >
                <motion.div
                  initial={{ scale: 1.2, opacity: 0, z: 300 }} // Increased z value
                  animate={{ scale: 1, opacity: 1, z: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl md:text-7xl mb-6"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {slide.emoji}
                </motion.div>

                <motion.h3
                  initial={{ scale: 1.1, opacity: 0, z: 250 }} // Increased z value
                  animate={{ scale: 1, opacity: 1, z: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {slide.title}
                </motion.h3>

                <motion.p
                  initial={{ scale: 1.1, opacity: 0, z: 200 }} // Increased z value
                  animate={{ scale: 1, opacity: 1, z: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg md:text-xl mb-8 max-w-2xl whitespace-pre-line"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.p
                  initial={{ scale: 1.1, opacity: 0, z: 150 }}
                  animate={{ scale: 1, opacity: 1, z: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg mb-8 max-w-xl italic font-bold text-arcova-darkblue-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {slide.body ||
                    "This is placeholder text for the body content. It appears in italic style and provides additional context."}
                </motion.p>

                {slide.isFinal && isLatest && (
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0, z: 100 }} // Increased z value
                    animate={{ scale: 1, opacity: 1, z: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <button
                      onClick={ctaAction}
                      className="inline-flex items-center justify-center rounded-full font-medium transition-colors bg-arcova-blue hover:bg-arcova-teal text-white h-11 px-8 py-2 shadow-lg"
                    >
                      {ctaText}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-50">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-arcova-blue w-4" : "bg-arcova-blue/30"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
