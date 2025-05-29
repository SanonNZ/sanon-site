"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Check,
  BookOpen,
  BarChart3,
  ClipboardCheck,
  Search,
  FileText,
  GraduationCap,
  X,
  ChevronDown,
  ChevronUp,
  Brain,
  Lightbulb,
  Microscope,
  Menu,
  Heart,
  PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { LogoLink } from "@/components/logo"
import { motion, AnimatePresence } from "framer-motion"
import { TypewriterHeading } from "@/components/typewriter-heading"
import { ScrollToTop } from "@/components/scroll-to-top"

// Confetti component
const Confetti = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (!isActive) return

    const createConfetti = () => {
      const confettiCount = 150
      const colors = ["#00A4B4", "#006680", "#8CD9C9", "#E8D6A0", "#003344"]

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti"
        confetti.style.setProperty("--confetti-x", Math.random() * 100 + "vw")
        confetti.style.setProperty("--confetti-y", Math.random() * 100 + "vh")
        confetti.style.setProperty("--confetti-size", Math.random() * 10 + 5 + "px")
        confetti.style.setProperty("--confetti-rotation", Math.random() * 360 + "deg")
        confetti.style.setProperty("--confetti-color", colors[Math.floor(Math.random() * colors.length)])
        confetti.style.setProperty("--confetti-speed", Math.random() * 3 + 2 + "s")

        document.body.appendChild(confetti)

        setTimeout(() => {
          confetti.remove()
        }, 5000)
      }
    }

    createConfetti()
  }, [isActive])

  return null
}

// Tab interface for the Core Skills section
interface SkillTab {
  id: string
  title: string
  content: string
  backgroundImage: string
  backgroundPosition: string
  icon: React.ReactNode
}

export default function ContributorsPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    expertise: "",
    institution: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const [showNotification, setShowNotification] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // State for the expanded tabs
  const [expandedTabs, setExpandedTabs] = useState<string[]>(["scientific-rigor"])

  // Toggle tab expansion
  const toggleTab = (tabId: string) => {
    if (expandedTabs.includes(tabId)) {
      setExpandedTabs(expandedTabs.filter((id) => id !== tabId))
    } else {
      setExpandedTabs([...expandedTabs, tabId])
    }
  }

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  // Core skills tabs data
  const skillTabs: SkillTab[] = [
    {
      id: "scientific-rigor",
      title: "Scientific Rigor",
      content:
        "Our network members excel in applying methodical approaches to research and analysis. They understand the importance of evidence quality, statistical significance, and reproducibility. This foundation ensures that all insights and recommendations are based on sound scientific principles and can withstand scrutiny from peers and stakeholders alike.",
      backgroundImage: "/images/neural-network-bg.png",
      backgroundPosition: "center 80%", // Custom position to show more of the top portion
      icon: <Microscope className="h-6 w-6" />,
    },
    {
      id: "clarity-of-thought",
      title: "Clarity of Thought",
      content:
        "The ability to distill complex scientific concepts into clear, actionable insights is a hallmark of our network. Members excel at identifying the most relevant information, organizing it logically, and communicating it effectively to diverse audiences. This skill is crucial for translating technical findings into business-relevant recommendations.",
      backgroundImage: "/images/neural-network-bg.png",
      backgroundPosition: "center 45%", // Custom position to show more of the upper portion
      icon: <Brain className="h-6 w-6" />,
    },
    {
      id: "deep-knowledge",
      title: "Deep Knowledge",
      content:
        "Our contributors bring specialized expertise in their respective fields, backed by advanced degrees and practical experience. This depth of knowledge allows them to quickly identify critical issues, evaluate claims against the current state of research, and provide nuanced perspectives that generalists might miss.",
      backgroundImage: "/images/molecular-structure-bg.png", // Updated to use the new image
      backgroundPosition: "center 80%", // Custom position for unique view
      icon: <Lightbulb className="h-6 w-6" />,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would send the form data to your backend here
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formState),
    // })

    setFormState({
      ...formState,
      submitted: true,
      loading: false,
      name: "",
      email: "",
      expertise: "",
      institution: "",
      message: "",
    })

    // Trigger confetti and notification
    setShowConfetti(true)
    setShowNotification(true)

    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Confetti effect when form is submitted */}
      <Confetti isActive={showConfetti} />

      {/* Notification banner */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-24 right-4 z-50 bg-arcova-teal text-white p-4 rounded-lg shadow-lg max-w-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h4 className="font-bold mb-1">Thanks for joining our network!</h4>
                <p className="text-sm">
                  We've received your details and can't wait to connect with you about upcoming opportunities.
                </p>
              </div>
              <button onClick={() => setShowNotification(false)} className="ml-4 text-white hover:text-gray-200">
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl p-6 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <LogoLink variant="icon" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={handleMobileNavClick}
                >
                  Home
                </Link>
                <Link
                  href="/investors"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={handleMobileNavClick}
                >
                  For Investors
                </Link>
                <Link
                  href="/sciencebrands"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={handleMobileNavClick}
                >
                  For Science-Backed Brands
                </Link>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    handleMobileNavClick()
                  }}
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                >
                  Join Our Network
                </Link>
                <Button
                  asChild
                  className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-colors duration-200 mt-4"
                  onClick={handleMobileNavClick}
                >
                  <a href="#contact-form">Join Our Network</a>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .confetti {
          position: fixed;
          width: var(--confetti-size);
          height: var(--confetti-size);
          background-color: var(--confetti-color);
          top: -100px;
          left: var(--confetti-x);
          opacity: 0;
          transform: rotate(var(--confetti-rotation));
          animation: fall var(--confetti-speed) ease-in forwards;
          z-index: 1000;
        }

        @keyframes fall {
          0% {
            top: -100px;
            opacity: 1;
            transform: rotate(var(--confetti-rotation));
          }
          100% {
            top: var(--confetti-y);
            opacity: 0;
            transform: rotate(calc(var(--confetti-rotation) + 360deg));
          }
        }
        
        .skill-tab-header {
          height: 100px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .skill-tab-content {
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        body.menu-open {
          overflow: hidden;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <LogoLink />
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/investors"
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              For Investors
            </Link>
            <Link
              href="/sciencebrands"
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              For Science-Backed Brands
            </Link>
            <Link
              href="/network"
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              Join Our Network
            </Link>
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-colors duration-200"
          >
            <a href="https://calendly.com/emma-arcova/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-md bg-arcova-teal/10 text-arcova-teal hover:bg-arcova-teal/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <AnimatedSection className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-[900px]">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Join our network of
                </h1>
                <div className="min-h-[70px] sm:min-h-[80px] md:min-h-[90px] flex items-center justify-center">
                  <TypewriterHeading
                    prefix=""
                    words={[
                      "scientific experts",
                      "data scientists",
                      "biomedical researchers",
                      "clinical trial analysts",
                      "pharma consultants",
                      "medical writers",
                      "regulatory specialists",
                      "AI researchers",
                      "academic reviewers",
                      "ML engineers",
                      "venture advisors",
                    ]}
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl text-arcova-teal"
                    suffix=""
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="mx-auto max-w-[700px] text-lg font-medium text-gray-600 leading-relaxed mt-2">
                  Lend your expertise to high-stakes research and due diligence projects. On your terms.
                </p>
              </div>
              {/* Scroll-down button */}
              <motion.div
                className="mt-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="#our-network" className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-teal-50 border border-teal-200 rounded-full p-3 text-arcova-teal group-hover:bg-teal-100 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="our-network" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Our Network
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-4">Who we're looking for</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
                We draw on a distributed network of scientists, technical specialists, and domain experts from
                world-leading institutions. Whether your background is in biomedical research, experimental biology,
                computational modeling, or IP — if you bring deep domain expertise, we'd love to talk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                className="bg-gradient-to-br from-white to-arcova-mint/10 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-arcova-teal/20 p-3 rounded-full flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-arcova-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Biomedical Scientists</h3>
                    <p className="text-gray-600">Deep knowledge in human biology, preclinical or clinical domains</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-arcova-blue/10 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-arcova-blue/20 p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-arcova-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Research Specialists</h3>
                    <p className="text-gray-600">PhDs or postdocs with strong methodology and synthesis skills</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-arcova-mint/10 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-arcova-teal/20 p-3 rounded-full flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-arcova-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Data Scientists</h3>
                    <p className="text-gray-600">Expertise in bioinformatics, ML workflows, or statistical analysis</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-arcova-blue/10 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-arcova-blue/20 p-3 rounded-full flex-shrink-0">
                    <ClipboardCheck className="h-5 w-5 text-arcova-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Regulatory Experts</h3>
                    <p className="text-gray-600">Familiar with FDA, EMA, or global approval frameworks</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-arcova-mint/10 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-arcova-teal/20 p-3 rounded-full flex-shrink-0">
                    <Search className="h-5 w-5 text-arcova-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Due Diligence Analysts</h3>
                    <p className="text-gray-600">Experience surfacing red flags or technical risks</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-arcova-blue/10 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-arcova-blue/20 p-3 rounded-full flex-shrink-0">
                    <FileText className="h-5 w-5 text-arcova-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Patent & IP Analysts</h3>
                    <p className="text-gray-600">Skilled in IP landscaping, prior art, or patent strategy</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Skills We Value section with stacked tabs */}
        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Core Skills
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-4">Core Skills We Value</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
                Regardless of discipline, contributors in our network share these key traits that make them exceptional
                collaborators.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {skillTabs.map((tab) => (
                <div key={tab.id} className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  {/* Tab header with background image */}
                  <div
                    className="skill-tab-header cursor-pointer"
                    style={{
                      backgroundImage: `url('${tab.backgroundImage}')`,
                      backgroundPosition: tab.backgroundPosition,
                    }}
                    onClick={() => toggleTab(tab.id)}
                  >
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-arcova-darkblue/40"></div>

                    {/* Tab header content */}
                    <div className="relative z-10 p-4 md:p-6 flex items-center justify-between h-full">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-full">{tab.icon}</div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{tab.title}</h3>
                      </div>
                      <div className="text-white">
                        {expandedTabs.includes(tab.id) ? (
                          <ChevronUp className="h-6 w-6" />
                        ) : (
                          <ChevronDown className="h-6 w-6" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tab content */}
                  <AnimatePresence>
                    {expandedTabs.includes(tab.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="skill-tab-content"
                        style={{
                          backgroundImage: `url('${tab.backgroundImage}')`,
                          backgroundPosition: tab.backgroundPosition,
                        }}
                      >
                        {/* Semi-transparent white overlay for readability */}
                        <div className="absolute inset-0 bg-white/85"></div>

                        {/* Content with relative positioning to appear above the overlay */}
                        <div className="relative z-10 p-6 md:p-8">
                          <p className="text-gray-700 text-lg leading-relaxed">{tab.content}</p>

                          {/* Additional content specific to each tab */}
                          {tab.id === "scientific-rigor" && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                                <h4 className="font-medium text-arcova-darkblue mb-2">Evidence Evaluation</h4>
                                <p className="text-gray-600">
                                  Ability to assess the quality and reliability of scientific evidence, understanding
                                  methodological strengths and limitations.
                                </p>
                              </div>
                              <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                                <h4 className="font-medium text-arcova-darkblue mb-2">Critical Analysis</h4>
                                <p className="text-gray-600">
                                  Skill in identifying potential biases, confounding factors, and alternative
                                  explanations for research findings.
                                </p>
                              </div>
                            </div>
                          )}

                          {tab.id === "clarity-of-thought" && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                                <h4 className="font-medium text-arcova-darkblue mb-2">Synthesis Skills</h4>
                                <p className="text-gray-600">
                                  Ability to integrate information from multiple sources into coherent, meaningful
                                  insights that address specific business questions.
                                </p>
                              </div>
                              <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                                <h4 className="font-medium text-arcova-darkblue mb-2">Communication</h4>
                                <p className="text-gray-600">
                                  Talent for explaining complex concepts in accessible language without sacrificing
                                  accuracy or nuance.
                                </p>
                              </div>
                            </div>
                          )}

                          {tab.id === "deep-knowledge" && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                                <h4 className="font-medium text-arcova-darkblue mb-2">Specialized Expertise</h4>
                                <p className="text-gray-600">
                                  In-depth understanding of specific scientific domains, methodologies, or technologies
                                  relevant to client projects.
                                </p>
                              </div>
                              <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                                <h4 className="font-medium text-arcova-darkblue mb-2">Contextual Awareness</h4>
                                <p className="text-gray-600">
                                  Understanding of how scientific findings relate to broader industry trends, regulatory
                                  environments, and market dynamics.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Get paid to think.
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Work that values you, and what you know.
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                Bring your research skills, analytical mind, and scientific training to real-world projects, without
                stepping away from the work you already care about.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-white to-arcova-mint/10 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-arcova-teal"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-arcova-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-7 w-7 text-arcova-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-arcova-darkblue">Intelligent work, on your terms</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-teal" />
                      </div>
                      <span>Consult on high-impact projects</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-teal" />
                      </div>
                      <span>Flexibly fits around existing commitments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-teal" />
                      </div>
                      <span>Work from home</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-white to-arcova-blue/10 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-arcova-blue"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-arcova-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-7 w-7 text-arcova-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-arcova-darkblue">Compensation that reflects your value</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-blue/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-blue" />
                      </div>
                      <span>Project-based fees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-blue/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-blue" />
                      </div>
                      <span>Short-term or ongoing contracts</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-white to-arcova-mint/10 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-arcova-teal"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-arcova-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <PlusCircle className="h-7 w-7 text-arcova-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-arcova-darkblue">Extend your impact</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-teal" />
                      </div>
                      <span>Apply your skills to new fields</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-arcova-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-arcova-teal" />
                      </div>
                      <span>Shape business decisions, health policy, or product development</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact-form" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join our network</h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                If you think you'd be a good fit for our network, we'd love to hear from you. Share your details below
                and we'll be in touch about relevant opportunities.
              </p>
            </div>

            <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              {formState.submitted ? (
                <div className="p-8 md:p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank you for joining our network!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your details and will be in touch about relevant opportunities that match your
                    expertise.
                  </p>
                  <Button
                    onClick={() => setFormState({ ...formState, submitted: false })}
                    className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-all duration-300"
                  >
                    Send Another Submission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expertise" className="text-sm font-medium text-gray-700">
                        Area of Expertise
                      </label>
                      <input
                        type="text"
                        id="expertise"
                        name="expertise"
                        value={formState.expertise}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                        placeholder="e.g., Neuroscience, Bioinformatics, Clinical Trials"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="institution" className="text-sm font-medium text-gray-700">
                        Institution/Company
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formState.institution}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                        placeholder="University, Research Institute, or Company"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-8">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                      placeholder="Tell us a bit more about your background, interests, or availability"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={formState.loading}
                      className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                    >
                      {formState.loading ? "Submitting..." : "Join Our Network"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <ScrollToTop />
    </div>
  )
}
