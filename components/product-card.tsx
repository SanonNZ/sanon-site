"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  title: string
  features: string[]
  price: string
  popular: boolean
  delay: number
  color?: string
}

export function ProductCard({ title, features, price, popular, delay, color = "blue" }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" })
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <motion.div
      ref={ref}
      className={`bg-white p-8 rounded-2xl shadow-md ${
        popular ? `border-2 border-${color}-500` : ""
      } flex flex-col h-full relative hover:shadow-xl transition-all duration-300`}
      initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 20 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: isMobile ? 0 : -5 }}
    >
      {popular && (
        <div
          className={`absolute top-0 right-0 bg-${color}-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg`}
        >
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`bg-${color}-100 p-1 rounded-full mr-3 mt-0.5`}>
              <Check className={`h-4 w-4 text-${color}-600`} />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <p className="text-2xl font-bold mb-6">{price}</p>
        <Button
          asChild
          className={`w-full ${popular ? `bg-${color}-600 hover:bg-${color}-700` : ""} rounded-full transition-all duration-300`}
        >
          <Link href="#cta">Get Started</Link>
        </Button>
      </div>
    </motion.div>
  )
}
