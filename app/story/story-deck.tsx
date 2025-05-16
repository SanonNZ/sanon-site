"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

const slides = [
  {
    emoji: "🧬",
    title: "Every biotech deal is a bet on complexity.",
    subtitle: "Founders pitch with confidence. Decks look sharp.\nComplexity is opportunity.",
    bg: "#e7e0f5", // Light purple
  },
  {
    emoji: "⚠️",
    title: "But complexity is hard to understand.",
    subtitle: "And acting without understanding?\nThat's risk you can't price in.",
    bg: "#fff2cc", // Light amber for warning
  },
  {
    emoji: "🧠",
    title: "Arcova brings scientific minds into the room.",
    subtitle: "Fast. Condidential. Zero friction.\nFrom gut checks to deep dives, we pressure-test the science.",
    bg: "#daeff1", // Light teal
  },
  {
    emoji: "🚀",
    title: "Move fast. Think rigorously.",
    subtitle: "Scientific clarity. Investment confidence.\nWelcome to smarter due diligence.",
    bg: "#d4f2de", // Light green
    isFinal: true, // Mark this as the final slide
  },
]

export default function ScrollDeck() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {/* Scroll indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <p className="text-[#003344]/70 mb-2 text-sm">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-[#003344]/70" />
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {[...Array(slides.length)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full transition-all duration-300 bg-[#003344]/30" />
        ))}
      </div>

      {slides.map((slide, i) => (
        <motion.section
          key={i}
          className="h-screen w-full flex items-center justify-center snap-start"
          style={{ backgroundColor: "white" }}
        >
          <motion.div
            className="w-full max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.9 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <div
              className="rounded-xl shadow-lg p-8 md:p-12 overflow-hidden w-full"
              style={{
                backgroundColor: slide.bg,
                aspectRatio: isMobile ? "auto" : "16/9",
                height: isMobile ? "auto" : undefined,
                minHeight: isMobile ? "70vh" : undefined,
              }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                {/* Staggered reveal for title and subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="text-center mb-2"
                >
                  <span className="text-4xl">{slide.emoji}</span>
                </motion.div>

                <motion.h3
                  className="text-4xl md:text-5xl font-bold tracking-tight text-center text-[#003344] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  {slide.title}
                </motion.h3>

                <motion.p
                  className="text-xl md:text-2xl font-medium text-center text-gray-600 whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* Add CTA button to the final slide */}
                {slide.isFinal && (
                  <motion.button
                    className="mt-10 bg-[#003344] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#003344]/90 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false }}
                  >
                    Book a Call
                  </motion.button>
                )}

                {/* Step indicator */}
                <div className="absolute bottom-4 right-4 text-sm text-[#003344]/60 font-medium">
                  Step {i + 1} of {slides.length}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      ))}
    </div>
  )
}
