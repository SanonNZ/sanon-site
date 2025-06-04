"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

interface HorizontalFeatureCardProps {
  title: string
  content: string
  icon: React.ReactNode
  delay: number
  microInsight: string
  bulletPoints: string[]
}

export const HorizontalFeatureCard = ({
  title,
  content,
  icon,
  delay,
  microInsight,
  bulletPoints,
}: HorizontalFeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ccecfe]/30 via-transparent to-[#ccecfe]/50 p-6 md:p-8 hover:shadow-lg transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-arcova-blue/40" />
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-arcova-blue/10 flex items-center justify-center text-arcova-blue">
            {icon}
          </div>
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-arcova-darkblue mb-2">{title}</h3>
            <p className="text-sm italic text-arcova-blue">{microInsight}</p>
          </div>
          
          {/* Desktop view - always visible */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-4">
            <ul className="space-y-2 mx-auto md:mx-0 inline-block text-left">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-arcova-blue mt-1.5"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-600 md:border-l md:border-arcova-blue/20 md:pl-4 text-center md:text-left">
              {content}
            </div>
          </div>

          {/* Mobile view - expandable */}
          <div className="md:hidden">
            <ul className="space-y-2 mx-auto inline-block text-left mb-3">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-arcova-blue mt-1.5"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="relative overflow-hidden" style={{ height: isExpanded ? 'auto' : '0' }}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mt-3 text-sm text-gray-600"
                  >
                    {content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-7 h-7 rounded-full bg-arcova-blue/10 flex items-center justify-center text-arcova-blue transition-transform duration-300 hover:bg-arcova-blue/20 mx-auto mt-2"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 