"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X, ChevronDown, Star, Check, FileText, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { LogoLink } from "@/components/logo"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { TypewriterHeading } from "@/components/typewriter-heading"

// Service selector data
const services = [
  {
    id: "tldr",
    name: "Research Summaries",
    description: "Concise summaries of complex research papers with key findings highlighted.",
    features: ["1-page summary", "Key findings extraction", "Plain language translation"],
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "articles",
    name: "Authority Articles",
    description: "In-depth, evidence-based articles that establish your brand as a trusted authority.",
    features: ["SEO optimization", "Peer-reviewed sources", "Engaging narratives"],
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: "series",
    name: "Content Series",
    description: "Comprehensive content packages that build audience trust and engagement over time.",
    features: ["Strategic planning", "Multimedia formats", "Audience targeting"],
    icon: <Users className="h-5 w-5" />,
  },
]

export default function TeamsClientPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const contentCardRef = useRef<HTMLDivElement>(null)

  // Function to handle tab selection and scrolling
  const handleTabSelect = (index: number) => {
    setSelectedService(index)

    // On mobile, scroll to the content card with proper offset
    if (window.innerWidth < 768 && contentCardRef.current) {
      setTimeout(() => {
        const navbarHeight = 80 // Height of the navbar
        const extraPadding = 20 // Additional padding for better visibility
        const yOffset = -(navbarHeight + extraPadding)

        const y = contentCardRef.current!.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({
          top: y,
          behavior: "smooth",
        })
      }, 50)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              For Science-Backed Brands
            </Link>
            <Link
              href="/contributors"
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              Join Our Network
            </Link>
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-colors duration-200"
          >
            <a href="#cta">Book a Call</a>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/investors"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  For Investors
                </Link>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                >
                  For Science-Backed Brands
                </Link>
                <Link
                  href="/contributors"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Our Network
                </Link>
                <Button
                  asChild
                  className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-colors duration-200 mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href="#cta">Book a Call</a>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-16">
        {/* Hero section - Replicated from investors page */}
        <AnimatedSection className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-6 max-w-[900px]">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
                  Evidence that builds trust.
                </h1>
                <div className="min-h-[70px] sm:min-h-[80px] md:min-h-[90px] flex items-center justify-center">
                  <TypewriterHeading
                    prefix=""
                    words={[
                      "Engage your audience.",
                      "Establish authority.",
                      "Educate customers.",
                      "Boost conversions.",
                      "Improve SEO.",
                      "Build credibility.",
                      "Simplify complexity.",
                      "Showcase expertise.",
                      "Drive organic traffic.",
                      "Support your claims.",
                      "Differentiate your brand.",
                    ]}
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl text-arcova-teal"
                    suffix=""
                  />
                </div>
              </div>
              <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed">
                We translate peer-reviewed data into language your customers — and Google — understand.
              </p>

              {/* New scroll-down button using anchor link */}
              <motion.div
                className="mt-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="#service-section" className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-teal-50 border border-teal-200 rounded-full p-3 text-arcova-teal group-hover:bg-teal-100 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Arcova? Section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Why Arcova?
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Evidence-based credibility</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl font-medium text-arcova-darkblue text-center mb-10">
                You're building something that makes a scientific claim — but your audience doesn't just want promises.
                They want proof. And regulators are paying attention too.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <p>
                    In a world where AI can generate content in seconds, true credibility is harder to earn — and easier
                    to lose. The difference lies in the details: Does your messaging hold up to scrutiny? Have you
                    interpreted the evidence correctly? Are your claims aligned with current research?
                  </p>
                </div>

                <div>
                  <p>
                    Arcova connects you with scientific experts who can help you navigate the nuance — not to slow you
                    down, but to sharpen what you say and how you say it.
                  </p>

                  <p className="mt-6">
                    Whether it's evidence-based content, product claims, or white papers that build trust, we help you
                    speak science fluently.
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-2xl font-bold text-arcova-darkblue">Move fast. Think rigorously.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Selector Section - Adapted from investors page but with teal background */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-mint/20" id="service-section">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-arcova-darkblue">
                Evidence-based content
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">for brands that value scientific integrity</p>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Left column: Modern pill tabs - square buttons on mobile */}
              <div className="md:col-span-4 flex flex-col justify-center md:py-12">
                <div className="flex md:flex-col gap-2 md:gap-3 justify-center md:justify-start">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      onClick={() => handleTabSelect(index)}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`
                        relative flex items-center justify-center transition-all duration-300
                        overflow-hidden group
                        flex-1 aspect-square md:aspect-auto md:w-full p-3 md:p-5 rounded-xl md:rounded-2xl
                        ${
                          selectedService === index
                            ? "bg-teal-50 border border-teal-200 text-arcova-teal"
                            : "bg-white hover:bg-gray-50 border border-transparent"
                        }
                      `}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {/* Icon container */}
                      <div className="flex flex-col items-center md:flex-row md:gap-4">
                        <motion.div
                          className={`
                            flex items-center justify-center w-10 h-10 rounded-full mb-1 md:mb-0
                            ${selectedService === index ? "bg-arcova-teal text-white" : "bg-gray-100 text-gray-500"}
                          `}
                          animate={{
                            scale: hoveredService === index || selectedService === index ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.icon}
                        </motion.div>

                        <div className="flex-1 hidden md:block">
                          <div
                            className={`
                              font-medium text-lg transition-colors duration-300
                              ${selectedService === index ? "text-arcova-teal" : "text-gray-700"}
                            `}
                          >
                            {service.name}
                          </div>
                        </div>

                        {/* Show name below icon on mobile */}
                        <div className="text-xs font-medium mt-1 md:hidden">{service.name.split(" ")[0]}</div>

                        {/* Subtle arrow that appears on hover or when selected - desktop only */}
                        <motion.div
                          className="text-arcova-teal hidden md:block"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: hoveredService === index || selectedService === index ? 1 : 0,
                            x: hoveredService === index || selectedService === index ? 0 : -10,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right column: Beautiful content box */}
              <div className="md:col-span-8" ref={contentCardRef}>
                {/* Removed AnimatePresence and exit animations for instant tab switching */}
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border-0"
                >
                  <div className="p-6 md:p-10">
                    {/* Top accent bar */}
                    <div className="w-16 h-1.5 bg-arcova-teal rounded-full mb-6 md:mb-8"></div>

                    <h3 className="text-2xl md:text-3xl font-bold text-arcova-darkblue mb-2 md:mb-3">
                      {services[selectedService].name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                      {services[selectedService].description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-10">
                      <div>
                        <h4 className="text-base md:text-lg font-medium text-arcova-darkblue mb-3 md:mb-4">
                          Key Benefits
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          {services[selectedService].features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <div className="rounded-full bg-green-500 p-1 mr-3 mt-0.5 flex-shrink-0">
                                <Check className="h-3.5 w-3.5 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-medium text-arcova-darkblue mb-3 md:mb-4">
                          What You Get
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          <motion.li
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <div className="rounded-full bg-green-500 p-1 mr-3 mt-0.5 flex-shrink-0">
                              <Check className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">Expert scientific analysis</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <div className="rounded-full bg-green-500 p-1 mr-3 mt-0.5 flex-shrink-0">
                              <Check className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">Clear, actionable insights</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <div className="rounded-full bg-green-500 p-1 mr-3 mt-0.5 flex-shrink-0">
                              <Check className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">SEO-optimized content</span>
                          </motion.li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-6 md:pt-8 border-t border-gray-100">
                      <div className="mb-4 md:mb-0">
                        <div className="text-xs md:text-sm text-gray-500 mb-1">Tailored to your needs</div>
                        <div className="text-2xl md:text-3xl font-bold text-arcova-darkblue">Custom Solutions</div>
                      </div>
                      <motion.button
                        className="bg-teal-50 hover:bg-teal-100 text-arcova-teal border border-teal-200 px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 transition-all duration-300 group text-sm md:text-base"
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
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Examples of our evidence-based content</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="absolute inset-0 bg-arcova-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="TL;DR Sample"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-bold text-white text-xl mb-2">TL;DR Sample</h3>
                  <p className="text-white/80 text-sm">
                    Concise summary of complex research paper with key findings highlighted
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="absolute inset-0 bg-arcova-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Infographic Snippet"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-bold text-white text-xl mb-2">Infographic Snippet</h3>
                  <p className="text-white/80 text-sm">Visual representation of complex data for easy comprehension</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="absolute inset-0 bg-arcova-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Article Introduction"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-bold text-white text-xl mb-2">Article Introduction</h3>
                  <p className="text-white/80 text-sm">
                    Engaging introduction that establishes authority while remaining accessible
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                asChild
                variant="outline"
                className="group rounded-full border-arcova-teal/30 hover:bg-arcova-teal/10 transition-all duration-300"
              >
                <a href="#" className="flex items-center gap-2 text-arcova-teal">
                  View full portfolio
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How we deliver scientific content with precision
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                Our systematic approach ensures high-quality, reliable results every time
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep
                number="01"
                title="Discovery"
                description="We identify your content goals and target audience"
                delay={0.1}
                color="arcova-teal"
              />
              <ProcessStep
                number="02"
                title="Analysis"
                description="Our PhD team reviews primary literature and extracts key insights"
                delay={0.2}
                color="arcova-teal"
              />
              <ProcessStep
                number="03"
                title="Synthesis"
                description="We craft compelling narratives backed by solid evidence"
                delay={0.3}
                color="arcova-teal"
              />
              <ProcessStep
                number="04"
                title="Delivery"
                description="SEO-optimized content that educates and converts"
                delay={0.4}
                color="arcova-teal"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Reviews section - Transformed from case snapshot */}
        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Client Success
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What our clients say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-arcova-darkblue to-arcova-blue opacity-85 z-10"></div>
                  <Image
                    src="/abstract-finance.png"
                    alt="Abstract visualization"
                    width={1000}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex mb-4">
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige" />
                  </div>

                  <p className="text-white/90 text-base mb-6 leading-relaxed flex-grow">
                    "The article series doubled organic traffic and slashed rebuttals in sales calls. Their scientific
                    expertise is unmatched."
                  </p>
                  <p className="text-white/70 text-sm font-medium">CMO, BioSense Diagnostics</p>
                </div>
              </motion.div>

              {/* Review 2 */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-arcova-darkblue to-arcova-blue opacity-85 z-10"></div>
                  <Image
                    src="/abstract-finance.png"
                    alt="Abstract visualization"
                    width={1000}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex mb-4">
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige" />
                  </div>

                  <p className="text-white/90 text-base mb-6 leading-relaxed flex-grow">
                    "Arcova transformed our complex research into engaging content that resonates with both clinicians
                    and patients. A game-changer for our brand."
                  </p>
                  <p className="text-white/70 text-sm font-medium">Director of Marketing, NeuraTech Solutions</p>
                </div>
              </motion.div>

              {/* Review 3 */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-arcova-darkblue to-arcova-blue opacity-85 z-10"></div>
                  <Image
                    src="/abstract-finance.png"
                    alt="Abstract visualization"
                    width={1000}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex mb-4">
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige" />
                  </div>

                  <p className="text-white/90 text-base mb-6 leading-relaxed flex-grow">
                    "Their evidence-based approach helped us establish credibility in a crowded market. Our content now
                    ranks on page one for key terms in our industry."
                  </p>
                  <p className="text-white/70 text-sm font-medium">CEO, GenomicWellness</p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-teal transition-colors duration-200">
                    Do you handle referencing styles?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    Yes, we can accommodate any referencing style your organization requires, including AMA, APA,
                    Chicago, Vancouver, and custom house styles. All references are meticulously formatted and can be
                    provided as endnotes, footnotes, or in-text citations according to your preference.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-teal transition-colors duration-200">
                    Regulatory compliance?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    Our team is well-versed in regulatory requirements for medical communications. We can create content
                    that adheres to FDA, EMA, and other regulatory guidelines while still being engaging and effective.
                    We maintain detailed documentation of all sources to support compliance reviews.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-teal transition-colors duration-200">
                    Can we white-label content?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    Absolutely. All content we create is delivered to you with full ownership rights. You can publish it
                    under your brand name with no attribution to our company required. We can also work directly with
                    your design team to ensure seamless integration with your existing materials.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-teal transition-colors duration-200">
                    Revision policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    We include two rounds of revisions with every project to ensure the final deliverable meets your
                    exact specifications. Our collaborative approach means we work closely with your team throughout the
                    process to minimize the need for extensive revisions. Additional revision rounds can be arranged if
                    needed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="cta" className="w-full py-24 md:py-32 bg-arcova-darkblue text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to elevate your content strategy?</h2>
              <p className="text-xl text-gray-400 max-w-[600px]">
                Schedule a content strategy chat to discuss how we can help you create evidence-based content that
                converts.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
              >
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Schedule a Content Strategy Chat
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <footer className="border-t border-gray-100 bg-white">
          <div className="container flex flex-col md:flex-row justify-between py-8 w-full items-center px-4 md:px-6">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <LogoLink className="mb-2" />
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Arcova. All rights reserved.</p>
              <p className="text-sm font-medium text-arcova-teal mt-2">Move fast. Think rigorously.</p>
            </div>
            <nav className="flex gap-8">
              <Link href="#" className="text-sm text-gray-600 hover:text-arcova-teal transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-arcova-teal transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-arcova-teal transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </footer>

        {/* Scroll to top button */}
        <ScrollToTop />
      </main>
    </div>
  )
}
