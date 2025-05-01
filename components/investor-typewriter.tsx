"use client"

import { useState, useEffect } from "react"

interface InvestorTypewriterProps {
  prefix: string
  phrases: string[]
  className?: string
}

export function InvestorTypewriter({ prefix, phrases, className = "" }: InvestorTypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  // Prevent animation from running during SSR/hydration
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const phrase = phrases[currentPhraseIndex]

    const timer = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(phrase.substring(0, currentText.length - 1))
        setTypingSpeed(30) // Faster when deleting
      }
      // If typing
      else {
        setCurrentText(phrase.substring(0, currentText.length + 1))
        setTypingSpeed(80) // Normal speed when typing
      }

      // If finished typing the phrase
      if (!isDeleting && currentText === phrase) {
        // Pause at the end of the phrase
        setTypingSpeed(2500) // Pause for 2.5 seconds
        setIsDeleting(true)
      }
      // If finished deleting the phrase
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setTypingSpeed(300) // Slight pause before typing next phrase
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, isMounted])

  // Don't render anything during SSR/hydration to prevent mismatch
  if (!isMounted) {
    return (
      <div className={className}>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-2">{prefix}</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-arcova-blue">{phrases[0]}</h2>
      </div>
    )
  }

  return (
    <div className={className}>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-1">{prefix}</h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-arcova-blue h-14 md:h-16 flex items-center justify-center">
        {currentText}
        <span className="animate-pulse ml-1">|</span>
      </h2>
    </div>
  )
}
