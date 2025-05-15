"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { ArrowRight, Check, FileText, Users, Zap, ChevronDown, Star, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { TypewriterHeading } from "@/components/typewriter-heading"
import { LogoLink } from "@/components/logo"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollToTop } from "@/components/scroll-to-top"

// Service selector data
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

export default function InvestorsPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const contentCardRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)

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
              className="text-sm font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-sm font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
            >
              For Investors
            </Link>
            <Link
              href="/teams"
              className="text-sm font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
            >
              For Science-Backed Brands
            </Link>
            <Link
              href="/contributors"
              className="text-sm font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
            >
              Join Our Network
            </Link>
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex bg-arcova-blue hover:bg-arcova-teal text-white rounded-full transition-colors duration-200"
          >
            <a href="#cta">Book a Call</a>
          </Button>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-md bg-arcova-blue/10 text-arcova-blue hover:bg-arcova-blue/20 transition-colors"
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
                  className="text-base font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                  className="text-base font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
                >
                  For Investors
                </Link>
                <Link
                  href="/teams"
                  className="text-base font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  For Science-Backed Brands
                </Link>
                <Link
                  href="/contributors"
                  className="text-base font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Our Network
                </Link>
                <Button
                  asChild
                  className="bg-arcova-blue hover:bg-arcova-teal text-white rounded-full transition-colors duration-200 mt-4"
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
        <AnimatedSection className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-6 max-w-[900px]">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
                  Go deeper than the pitch.
                </h1>
                <div className="min-h-[70px] sm:min-h-[80px] md:min-h-[90px] flex items-center justify-center">
                  <TypewriterHeading
                    prefix=""
                    words={[
                      "Invest with conviction.",
                      "Surface scientific risk.",
                      "Challenge assumptions.",
                      "Assess technical claims.",
                      "Validate the science.",
                      "Inform partner memos.",
                      "Spot red flags.",
                      "Brief the IC.",
                      "Understand the detail.",
                      "Commit with confidence.",
                      "Cut through the science.",
                      "Know when to walk away.",
                    ]}
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl text-arcova-blue"
                    suffix=""
                  />
                </div>
              </div>
              <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed">
                We interrogate the science, so you don't have to.
              </p>

              {/* Updated scroll-down button to point to why-arcova */}
              <motion.div
                className="mt-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="#why-arcova" className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-blue-50 border border-blue-200 rounded-full p-3 text-arcova-blue group-hover:bg-blue-100 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="why-arcova" className="w-full py-16 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-12">
              <div className="inline-block px-3 py-1 bg-arcova-blue/20 text-arcova-blue rounded-full text-sm font-medium">
                Why Arcova?
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl"> Hype is loud. Rigor is quiet.</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl font-medium text-arcova-darkblue text-center mb-10">
                Investing in biotech means betting on complexity — biology, chemistry, AI models, regulatory nuance. But
                most due diligence processes barely scratch the scientific surface.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <p>
                    Founders pitch confidently. Decks look sharp. But who's pressure-testing the assumptions behind the
                    science? Who's asking the second-order questions?
                  </p>

                  <p className="mt-6">
                    The expertise is out there — sitting in universities, research institutes, and labs — but there's no
                    structured way to access it. Until now.
                  </p>
                </div>

                <div>
                  <p>
                    Arcova brings scientific minds into your due diligence flow — fast, discreetly, and with zero
                    friction. Whether you need a 48-hour gut check or a deep dive on a mechanism of action, we match you
                    with people who've actually done the work.
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-2xl font-bold text-arcova-darkblue">Move fast. Think rigorously.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Selector Section - Replacing the "What We Offer" section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-mint/20" id="service-section">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-arcova-darkblue">
                Scientific due diligence
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">for informed investment decisions</p>
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
                      className={cn(
                        "relative flex items-center justify-center transition-all duration-300",
                        "overflow-hidden group",
                        // Mobile: Square buttons in a row with rounded corners
                        "flex-1 aspect-square md:aspect-auto md:w-full p-3 md:p-5 rounded-xl md:rounded-2xl",
                        // Desktop: Pill style
                        selectedService === index
                          ? "bg-arcova-blue/20 border border-arcova-blue/30 text-arcova-blue" // More distinct blue button style
                          : "bg-white hover:bg-arcova-blue/5 border border-transparent",
                      )}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {/* Icon container */}
                      <div className="flex flex-col items-center md:flex-row md:gap-4">
                        <motion.div
                          className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full mb-1 md:mb-0",
                            selectedService === index ? "bg-arcova-blue text-white" : "bg-gray-100 text-gray-500",
                          )}
                          animate={{
                            scale: hoveredService === index || selectedService === index ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.icon}
                        </motion.div>

                        <div className="flex-1 hidden md:block">
                          <div
                            className={cn(
                              "font-medium text-lg transition-colors duration-300",
                              selectedService === index ? "text-arcova-blue" : "text-gray-700",
                            )}
                          >
                            {service.name}
                          </div>
                        </div>

                        {/* Show name below icon on mobile */}
                        <div className="text-xs font-medium mt-1 md:hidden">{service.name.split(" ")[0]}</div>

                        {/* Subtle arrow that appears on hover or when selected - desktop only */}
                        <motion.div
                          className="text-arcova-blue hidden md:block"
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
                    <div className="w-16 h-1.5 bg-arcova-blue rounded-full mb-6 md:mb-8"></div>

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
                            <span className="text-gray-700 text-sm md:text-base">Confidential reporting</span>
                          </motion.li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-6 md:pt-8 border-t border-gray-100">
                      <div className="mb-4 md:mb-0">
                        <div className="text-xs md:text-sm text-gray-500 mb-1">Starting from</div>
                        <div className="text-2xl md:text-3xl font-bold text-arcova-darkblue">
                          {services[selectedService].price}
                        </div>
                      </div>
                      <motion.button
                        className="bg-arcova-blue/20 hover:bg-arcova-blue/30 text-arcova-blue border border-arcova-blue/30 px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 transition-all duration-300 group text-sm md:text-base"
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
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-blue/20 text-arcova-blue rounded-full text-sm font-medium">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How we deliver scientific due-diligence with precision
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                Our systematic approach ensures high-quality, reliable results every time
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep
                number="01"
                title="Discovery"
                description="We identify key claims and evidence gaps in the target's materials"
                delay={0.1}
                color="arcova-blue"
              />
              <ProcessStep
                number="02"
                title="Analysis"
                description="Our PhD team evaluates primary literature and competitive landscape"
                delay={0.2}
                color="arcova-blue"
              />
              <ProcessStep
                number="03"
                title="Synthesis"
                description="We identify red flags and validate key scientific claims"
                delay={0.3}
                color="arcova-blue"
              />
              <ProcessStep
                number="04"
                title="Delivery"
                description="Clear, actionable reports with investment-focused recommendations"
                delay={0.4}
                color="arcova-blue"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg max-w-[900px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Background with gradient overlay - no image dependency */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-arcova-darkblue to-arcova-blue opacity-90 z-10"></div>
                {/* Solid color background as fallback */}
                <div className="absolute inset-0 bg-arcova-darkblue"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 text-white">
                  {/* Star rating */}
                  <div className="flex mb-4">
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige mr-1" />
                    <Star className="h-4 w-4 fill-current text-arcova-beige" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Case Snapshot</h3>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    We helped unpack a billion-dollar publishing model, assess AI and technology-related risks, and
                    surface red flags ahead of a key investment decision.
                  </p>
                  <p className="text-white/70 text-sm font-medium">Investment Firm | Confidential engagement</p>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-blue/20 text-arcova-blue rounded-full text-sm font-medium">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-blue transition-colors duration-200">
                    How are sources graded?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    We use a proprietary 5-tier evidence grading system that evaluates study design, sample size,
                    statistical power, replicability, and relevance to the specific claim. Each source is assigned a
                    confidence score that helps you understand the strength of the underlying evidence.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-blue transition-colors duration-200">
                    Do you sign NDAs?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    Yes, we routinely work under confidentiality agreements. We have standard NDAs ready for immediate
                    execution, or we can work with your legal team to use your preferred templates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-blue transition-colors duration-200">
                    Can you work under tight deal timelines?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    Absolutely. While our standard delivery times are 14-21 days, we offer expedited services for
                    time-sensitive deals. Please contact us directly to discuss your specific timeline requirements and
                    we'll do our best to accommodate your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-lg font-medium hover:text-arcova-blue transition-colors duration-200">
                    What fields do you cover?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    Our team has expertise across biotech, med-tech, and deep-tech fields, including but not limited to
                    cardiovascular disease, neurology, metabolic disorders, medical devices, diagnostics, digital
                    therapeutics, and computational biology. If you're unsure whether we cover your specific area of
                    interest, please reach out for a consultation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="cta" className="w-full py-24 md:py-32 bg-arcova-darkblue text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to de-risk your next investment?</h2>
              <p className="text-xl text-gray-400 max-w-[600px]">
                Book a partner intro call to discuss your specific needs and how we can help.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-arcova-blue hover:bg-arcova-teal text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
              >
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Book a Partner Intro Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>

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
    </div>
  )
}
