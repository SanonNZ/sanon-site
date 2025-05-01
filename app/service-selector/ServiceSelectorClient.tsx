"use client"

import { useState } from "react"
import { ArrowRight, Check, FileText, Users, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Only using Arcova colors with updated service names
const services = [
  {
    id: "rapid",
    name: "Initial Check",
    description: "Quick assessment of scientific claims and methodology.",
    features: ["Focused analysis", "Key risk identification", "Executive summary"],
    price: "$3,995",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "technical",
    name: "Technical Review",
    description: "Comprehensive evaluation with detailed insights and recommendations.",
    features: ["In-depth analysis", "Stakeholder presentation", "Follow-up support"],
    price: "$12,000",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: "strategic",
    name: "Full Validation",
    description: "Full-service partnership with ongoing scientific advisory and support.",
    features: ["Dedicated team", "Continuous monitoring", "Strategic guidance"],
    price: "Custom",
    icon: <Users className="h-5 w-5" />,
  },
]

export default function ServiceSelectorClient() {
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-arcova-darkblue">
            Scientific due diligence
          </h2>
          <p className="text-lg text-gray-600 max-w-[700px]">
            Select the level of analysis that matches your investment needs
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Left column: Modern pill tabs - now centered vertically */}
          <div className="md:col-span-4 flex flex-col justify-center md:py-12">
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={cn(
                    "relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-300",
                    "text-left overflow-hidden group w-full",
                    selectedService === index
                      ? "bg-blue-50 border border-blue-200 text-arcova-blue" // Pale button style
                      : "bg-white hover:bg-gray-50 border border-transparent",
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {/* Icon container */}
                  <motion.div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full",
                      selectedService === index ? "bg-arcova-blue text-white" : "bg-gray-100 text-gray-500",
                    )}
                    animate={{
                      scale: hoveredService === index || selectedService === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-1">
                    <div
                      className={cn(
                        "font-medium text-lg transition-colors duration-300",
                        selectedService === index ? "text-arcova-blue" : "text-gray-700",
                      )}
                    >
                      {service.name}
                    </div>
                  </div>

                  {/* Subtle arrow that appears on hover or when selected */}
                  <motion.div
                    className="text-arcova-blue"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredService === index || selectedService === index ? 1 : 0,
                      x: hoveredService === index || selectedService === index ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right column: Beautiful content box */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-0"
              >
                <div className="p-8 md:p-10">
                  {/* Top accent bar */}
                  <div className="w-16 h-1.5 bg-arcova-blue rounded-full mb-8"></div>

                  <h3 className="text-3xl font-bold text-arcova-darkblue mb-3">{services[selectedService].name}</h3>
                  <p className="text-xl text-gray-600 mb-8">{services[selectedService].description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-lg font-medium text-arcova-darkblue mb-4">Key Benefits</h4>
                      <ul className="space-y-4">
                        {services[selectedService].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="rounded-full bg-arcova-green p-1 mr-3 mt-0.5 flex-shrink-0">
                              <Check className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-arcova-darkblue mb-4">What You Get</h4>
                      <ul className="space-y-4">
                        <motion.li
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="rounded-full bg-arcova-green p-1 mr-3 mt-0.5 flex-shrink-0">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-gray-700">Expert scientific analysis</span>
                        </motion.li>
                        <motion.li
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <div className="rounded-full bg-arcova-green p-1 mr-3 mt-0.5 flex-shrink-0">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-gray-700">Clear, actionable insights</span>
                        </motion.li>
                        <motion.li
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <div className="rounded-full bg-arcova-green p-1 mr-3 mt-0.5 flex-shrink-0">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-gray-700">Confidential reporting</span>
                        </motion.li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100">
                    <div className="mb-6 md:mb-0">
                      <div className="text-sm text-gray-500 mb-1">Starting from</div>
                      <div className="text-3xl font-bold text-arcova-darkblue">{services[selectedService].price}</div>
                    </div>
                    <motion.button
                      className="bg-blue-50 hover:bg-blue-100 text-arcova-blue border border-blue-200 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request consultation
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                          repeatDelay: 1,
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
