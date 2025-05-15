"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

type Pill = {
  id: string
  title: string
  content: string
}

const pills: Pill[] = [
  {
    id: "innovation",
    title: "Innovation is accelerating. So is complexity.",
    content: "Biotech, AI, and health are moving fast, and the details are getting harder to understand.",
  },
  {
    id: "decisions",
    title: "Decisions depend on understanding.",
    content: "Founders, marketers, and investors face technical claims they can't always validate.",
  },
  {
    id: "ai",
    title: "AI adds noise, not clarity.",
    content: "Insight gets drowned out, and it's harder than ever to tell what's credible.",
  },
]

export function ExpandablePills() {
  const [expandedPills, setExpandedPills] = useState<Record<string, boolean>>({
    innovation: false,
    decisions: false,
    ai: false,
  })

  const togglePill = (id: string) => {
    setExpandedPills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-4">
      {pills.map((pill) => (
        <div key={pill.id} className="space-y-2">
          <button
            onClick={() => togglePill(pill.id)}
            className={`w-full text-left px-4 py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
              expandedPills[pill.id]
                ? "bg-arcova-teal text-white shadow-md"
                : "bg-arcova-mint/20 text-arcova-darkblue hover:bg-arcova-mint/30"
            }`}
          >
            <span className="font-bold">{pill.title}</span>
            <span className="ml-2 flex-shrink-0">
              {expandedPills[pill.id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </span>
          </button>

          <AnimatePresence>
            {expandedPills[pill.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-lg text-gray-600 px-4 pt-2 pb-1">{pill.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
