"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { testimonials, type Testimonial } from "../data/reviews"
import { motion, AnimatePresence } from "framer-motion"

const DISPLAY_TIME = 7000
const FADE_DURATION = 0.5
const RIPPLE_STAGGER = 0.12

function getVisibleTestimonials(start: number, count: number) {
  const result: Testimonial[] = []
  const seen = new Set()
  let idx = start
  for (let i = 0; i < count; i++) {
    while (seen.has(idx)) idx = (idx + 1) % testimonials.length
    result.push(testimonials[idx])
    seen.add(idx)
    idx = (idx + 1) % testimonials.length
  }
  return result
}

type Phase = "visible" | "transitioning" | "incoming"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [batch, setBatch] = useState<Testimonial[]>(() => getVisibleTestimonials(0, 6))
  const [phase, setPhase] = useState<Phase>("visible")
  const [prevBatch, setPrevBatch] = useState<Testimonial[] | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Check viewport size on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (phase === "visible") {
      const timer = setTimeout(() => {
        setPrevBatch(batch)
        setPhase("transitioning")
      }, DISPLAY_TIME)
      return () => clearTimeout(timer)
    }
    if (phase === "transitioning") {
      // Wait for exit animation before switching to incoming
      const timer = setTimeout(() => {
        const cardCount = isMobile ? 3 : 6
        const increment = isMobile ? 3 : 6
        const nextBatch = getVisibleTestimonials((currentIndex + increment) % testimonials.length, cardCount)
        setBatch(nextBatch)
        setCurrentIndex((ci) => (ci + increment) % testimonials.length)
        setPhase("incoming")
      }, (FADE_DURATION + RIPPLE_STAGGER * (isMobile ? 2 : 5)) * 1000)
      return () => clearTimeout(timer)
    }
    if (phase === "incoming") {
      // Move back to visible after a tiny tick so AnimatePresence works correctly
      const timer = setTimeout(() => setPhase("visible"), 30)
      return () => clearTimeout(timer)
    }
  }, [phase, batch, currentIndex, isMobile])

  const getCardVariants = (i: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: FADE_DURATION, delay: i * RIPPLE_STAGGER },
        y: { duration: FADE_DURATION, delay: i * RIPPLE_STAGGER }
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        opacity: { duration: FADE_DURATION, delay: i * RIPPLE_STAGGER },
        y: { duration: FADE_DURATION, delay: i * RIPPLE_STAGGER }
      }
    }
  })

  // Determine which batch to render
  let toRender: Testimonial[] | null = null
  if (phase === "visible") toRender = batch
  else if (phase === "transitioning") toRender = prevBatch
  // incoming: intentionally render nothing for one tick

  return (
    <div 
      className="mx-auto max-w-7xl px-6 lg:px-8 min-h-[800px] lg:min-h-[650px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="wait">
          {toRender &&
            toRender.slice(0, isMobile ? 3 : 6).map((testimonial, i) => (
              <motion.figure
                key={testimonial.quote + phase}
                variants={getCardVariants(i)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="break-inside-avoid rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 mb-8 last:mb-0"
              >
                <blockquote className="text-gray-900">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold">{testimonial.author.name}</div>
                    {testimonial.author.title && (
                      <div className="text-gray-600">{testimonial.author.title}</div>
                    )}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
