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
}

export function ProcessStep({
  number,
  title,
  subtitle,
  description,
  delay,
  color,
  gradient,
}: ProcessStepProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${gradient} p-4 md:p-6 hover:shadow-lg transition-all duration-300 group flex flex-col min-h-[250px]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      {/* White background layer */}
      <div className="absolute inset-0 bg-white rounded-2xl" />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${gradient} opacity-90`} />

      {/* Content layer */}
      <div className="relative z-10">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className={`w-12 h-12 rounded-full bg-arcova-teal/10 flex items-center justify-center`}>
              <span className="text-arcova-teal text-2xl font-bold">{number}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-arcova-darkblue mb-2">{title}</h3>
          <p className="text-arcova-darkblue/90 text-sm leading-relaxed mb-2">{description}</p>
        </div>
        {subtitle && (
          <div className="mt-2 flex flex-col items-center gap-2">
            <p className="text-sm font-medium text-arcova-blue italic text-center max-w-[80%]">{subtitle}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
