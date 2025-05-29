"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

type ExpandableItem = {
  id: string
  title: string
  content: string[]
}

const items: ExpandableItem[] = [
  {
    id: "innovation",
    title: "Innovation is accelerating. So is complexity.",
    content: ["Biotech, AI, and health are moving fast, and the details are getting harder to understand."],
  },
  {
    id: "decisions",
    title: "Decisions demand real understanding.",
    content: [
      "Founders, marketers, and investors face technical claims they can't always validate.",
      "AI adds noise, not clarity. Insight gets drowned out, and it's harder than ever to tell what's credible.",
    ],
  },
  {
    id: "arcova",
    title: "Arcova puts deep thinkers in the room.",
    content: ["Clarity is possible."],
  },
]

export function ExpandableContent() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    innovation: false,
    decisions: false,
    arcova: false,
  })

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.id} className="space-y-2">
          <button onClick={() => toggleItem(item.id)} className="flex items-center gap-2 text-left w-full group">
            <motion.div
              animate={{ rotate: expandedItems[item.id] ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-arcova-teal flex-shrink-0"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.div>
            <span className="font-bold text-lg text-arcova-darkblue group-hover:text-arcova-teal transition-colors">
              {item.title}
            </span>
          </button>

          <AnimatePresence>
            {expandedItems[item.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pl-7"
              >
                {item.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
