"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface TypewriterHeadingProps {
  prefix: string
  words: string[]
  className?: string
  suffix?: string
  as?: React.ElementType
}

export function TypewriterHeading({
  prefix,
  words,
  className = "",
  suffix = "",
  as: Component = "span",
}: TypewriterHeadingProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(113)

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
        setTypingSpeed(38) // Faster when deleting
      }
      // If typing
      else {
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(113) // Normal speed when typing
      }

      // If finished typing the word
      if (!isDeleting && currentText === word) {
        // Pause at the end of the word
        setTypingSpeed(1500) // Pause for 1.5 seconds
        setIsDeleting(true)
      }
      // If finished deleting the word
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setTypingSpeed(113)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, isMounted])

  // Don't render anything during SSR/hydration to prevent mismatch
  if (!isMounted) {
    return (
      <Component className={className}>
        {prefix} <span className="text-arcova-teal">{words[0]}</span>
        {suffix}
      </Component>
    )
  }

  return (
    <Component className={className}>
      {prefix}{" "}
      <span className="text-arcova-teal inline-block">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
      {suffix}
    </Component>
  )
}
