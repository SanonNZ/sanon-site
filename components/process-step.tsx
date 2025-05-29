"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  subtitle: string
  description: string
  delay: number
  color: string
  gradient: string
  insightIcon: "search" | "filter" | "connect" | "rocket"
}

export function ProcessStep({
  number,
  title,
  subtitle,
  description,
  delay,
  color,
  gradient,
  insightIcon
}: ProcessStepProps) {
  const icons = {
    search: (
      <svg 
        viewBox="0 0 24 24" 
        className="w-4 h-4 text-arcova-teal flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    filter: (
      <svg 
        viewBox="0 0 24 24" 
        className="w-4 h-4 text-arcova-teal flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    connect: (
      <svg 
        viewBox="0 0 24 24" 
        className="w-4 h-4 text-arcova-teal flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    rocket: (
      <svg 
        viewBox="0 0 24 24" 
        className="w-4 h-4 text-arcova-teal flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${gradient} p-4 md:p-6 hover:shadow-lg transition-all duration-300 group flex flex-col min-h-[250px]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-arcova-teal/40" />
      <div className="flex-1 text-center">
        <div className="flex items-center justify-center mb-3">
          <div className={`w-12 h-12 rounded-full bg-arcova-teal/10 flex items-center justify-center`}>
            <span className="text-arcova-teal text-2xl font-bold">{number}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-arcova-darkblue mb-2">{title}</h3>
        <p className="text-arcova-darkblue/90 text-sm leading-relaxed mb-2">{description}</p>
      </div>
      <div className="mt-2 flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-arcova-blue italic text-center max-w-[80%]">{subtitle}</p>
        <div className="w-8 h-8 rounded-full bg-arcova-teal/10 flex items-center justify-center">
          {icons[insightIcon]}
        </div>
      </div>
    </motion.div>
  )
}
