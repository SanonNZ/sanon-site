"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ProcessStepProps {
  number?: string
  title: string
  subtitle: string
  description: string
  delay: number
  color: string
  gradient?: string
}

export function ProcessStep({
  title,
  subtitle,
  description,
  delay,
  color,
}: ProcessStepProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col min-h-[250px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="flex flex-col h-full text-center">
        {/* Main content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-arcova-darkblue mb-4">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Footer area with fixed height */}
        <div className="h-[60px] pt-4">
          {subtitle && (
            <p className="text-sm font-medium text-arcova-teal italic">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
