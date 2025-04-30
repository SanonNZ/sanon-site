"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  delay: number
  color?: string
}

export function ProcessStep({ number, title, description, delay, color = "blue" }: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={`bg-${color}-100 p-4 rounded-full w-16 h-16 flex items-center justify-center`}>
        <span className={`text-${color}-600 text-xl font-bold`}>{number}</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-blue-500 group-hover:to-transparent transition-all duration-500"></div>
    </motion.div>
  )
}
