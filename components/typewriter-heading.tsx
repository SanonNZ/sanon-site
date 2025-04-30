"use client"

import { useState, useEffect } from "react"

interface TypewriterHeadingProps {
  prefix: string
  words: string[]
  className?: string
  suffix?: string
}

export function TypewriterHeading({ prefix, words, className = "", suffix = "" }: TypewriterHeadingProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // Prevent animation from running during SSR/hydration
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const word = words[currentWordIndex]

    const timer = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      }
      // If typing
      else {
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal speed when typing
      }

      // If finished typing the word
      if (!isDeleting && currentText === word) {
        // Pause at the end of the word
        setTypingSpeed(2000) // Pause for 2 seconds
        setIsDeleting(true)
      }
      // If finished deleting the word
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setTypingSpeed(150)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, isMounted])

  // Don't render anything during SSR/hydration to prevent mismatch
  if (!isMounted) {
    return (
      <h1 className={className}>
        {prefix} <span className="text-blue-600">{words[0]}</span>
        {suffix}
      </h1>
    )
  }

  return (
    <h1 className={className}>
      {prefix} <span className="text-blue-600">{currentText}</span>
      <span className="animate-pulse">|</span>
      {suffix}
    </h1>
  )
}
