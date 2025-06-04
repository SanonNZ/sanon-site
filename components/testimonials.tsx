"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { testimonials, type Testimonial } from "../data/reviews"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Helper function to get the next 6 testimonials, ensuring no repeats
  const getVisibleTestimonials = (startIndex: number) => {
    const result = []
    const seenIndexes = new Set()  // Set to track already shown testimonials

    for (let i = 0; i < 6; i++) {
      let index = (startIndex + i) % testimonials.length

      // Ensure that the testimonial has not been shown already
      while (seenIndexes.has(index)) {
        index = (index + 1) % testimonials.length // Move to the next one
      }

      result.push(testimonials[index])
      seenIndexes.add(index) // Mark this testimonial as seen
    }

    return result
  }

  useEffect(() => {
    if (isPaused) return

    const rotateTestimonials = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % testimonials.length)
    }

    const interval = setInterval(rotateTestimonials, 3000) // 3 seconds
    return () => clearInterval(interval)
  }, [isPaused])

  const visibleTestimonials = getVisibleTestimonials(currentIndex)

  return (
    <div 
      className="mx-auto max-w-7xl px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {visibleTestimonials.map((testimonial, index) => (
          <figure 
            key={`${currentIndex}-${index}`}
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
          </figure>
        ))}
      </div>
    </div>
  )
} 