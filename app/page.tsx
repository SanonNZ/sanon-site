"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X, ChevronDown, FileText, Zap, Users, Star, Lightbulb, LineChart, GraduationCap, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { GlowingNetworkMolecule } from "@/components/network-molecule"
import { LogoLink } from "@/components/logo"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useState } from "react"
import AutoRotatingCards from "@/components/auto-rotating-cards"
import { ExpandableContent } from "@/components/expandable-content"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonials"

interface Service {
  id: number
  name: string
  description: React.ReactNode
  subheader: string
  personas: string[]
  features: string[]
  features2: string[]
  insight: string
  price: string
  cta: string
  icon: React.ReactNode
  column1Header: string
  column2Header: string
}

const arcovaColors = {
  deepNavy: "#16253B",
  softGrey: "#F5F7FB",
  steelGrey: "#5F6C7B",

  // New color palette
  tealDark: "#00a4b4",
  tealLight: "#daeff1",
  greenDark: "#8cd9c9",
  greenLight: "#d4f2de",
  pinkDark: "#f55f96",
  pinkLight: "#fbcede",
  purpleDark: "#8d7dc7",
  purpleLight: "#e7e0f5",
  orangeDark: "#ffb996",
  orangeLight: "#ffede4",
  plumDark: "#7d4c79",
  plumLight: "#f3e4f0",
  blueDark: "#216680",
  blueLight: "#ccecfe",
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services: Service[] = [
    {
      id: 1,
      name: "Business Strategy & Advisory",
      description: (
        <span className="flex items-start gap-2">
          <Users className="h-5 w-5 flex-shrink-0 text-[#f55f96] mt-1" />
          <span>For science, health, and wellness businesses planning, launching, or growing.</span>
        </span>
      ),
      subheader: "Shape your vision into a market-ready plan.",
      personas: ["Founders", "Science ventures", "Health & Wellness businesses"],
      features: [
        "Business plan development",
        "Market sizing (TAM / SAM / SOM)",
        "Competitive landscape analysis",
        "Revenue model design",
        "Risk & mitigation plan"
      ],
      features2: [
        "Clear, decision-ready outputs",
        "Key opportunities & risks",
        "Defined market edge",
        "Scientific & commercial positioning",
        "Actionable recommendations"
      ],
      column1Header: "Deliverables",
      column2Header: "What You Get",
      insight: "Shape your vision into a market-ready plan.",
      price: "Let's discuss your strategic needs.",
      cta: "Plan Your Strategy",
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 2,
      name: "Whitepapers & Reports",
      description: (
        <span className="flex items-start gap-2">
          <FileText className="h-5 w-5 flex-shrink-0 text-[#216680] mt-1" />
          <span>For strategy leaders, product owners, and founders presenting complex ideas to stakeholders.</span>
        </span>
      ),
      subheader: "Authoritative insight that drives confident decisions and elevates thought-leadership.",
      personas: ["Strategy Leaders", "Product Owners", "Founders"],
      features: [
        "Business-ready whitepapers or executive summaries",
        "Market or technology analysis",
        "Competitive benchmarking",
        "Data-driven feature insights",
        "Literature reviews"
      ],
      features2: [
        "Decision-focused actionable recommendations",
        "Synthesized by scientific experts",
        "Establishes thought leadership",
        "Fast, reliable delivery",
        "Full source documentation"
      ],
      column1Header: "Deliverables",
      column2Header: "Key Benefits",
      insight: "Lead the conversation with authoritative insight.",
      price: "Let's explore your project needs.",
      cta: "Let's Talk",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 3,
      name: "Articles & Content",
      description: (
        <span className="flex items-start gap-2">
          <Zap className="h-5 w-5 flex-shrink-0 text-[#ffb996] mt-1" />
          <span>For marketing teams, content leads, and founders building authority and credibility.</span>
        </span>
      ),
      subheader: "Turn deep research into magnetic stories that build authority and trust.",
      personas: ["Marketing Leads", "Content Managers", "Founders"],
      features: [
        "Engaging, human-crafted articles",
        "Narrative-driven storytelling",
        "Up to 3 papers synthesized",
        "Optimised for discoverability",
        "Evidence-based, fact-checked, and referenced",
      ],
      features2: [
        "Tailored for your audience",
        "Written by scientific experts",
        "Aligned to your brand voice",
        "Accessible and jargon-free",
        "Fast, reliable turnaround",
      ],
      column1Header: "What You Get",
      column2Header: "How We Do It",
      insight: "Turn deep research into stories that build authority and trust.",
      price: "Ready to get started?",
      cta: "Let's Go",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 4,
      name: "Scientific Validation & Diligence",
      description: (
        <span className="flex items-start gap-2">
          <LineChart className="h-5 w-5 flex-shrink-0 text-[#8d7dc7] mt-1" />
          <span>For biotech founders and investors seeking validation to support key investment decisions.</span>
        </span>
      ),
      subheader: "Prove the science before you build, pitch, or invest.",
      personas: ["Founders", "Biotech companies", "Health Investors"],
      features: [
        "Independent, fully referenced report",
        "Feasibility review of product / mechanism",
        "Scientific diligence question list",
        "Actionable recommendations",
        "Confidence to build, partner, invest"
      ],
      features2: [
        "Strengths-vs-risks evaluation",
        "Expert literature & data synthesis",
        "Evidence-gap & regulatory research",
        "Team & advisor insights",
        "Patent & IP landscape overview",
        "Scientific competitor benchmarking"
      ],
      column1Header: "What You Get",
      column2Header: "How We Do It",
      insight: "Prove the science before you build, pitch, or invest.",
      price: "Discuss your validation needs.",
      cta: "Validate Your Science",
      icon: <LineChart className="h-5 w-5" />
    },
    {
      id: 5,
      name: "Research & Academic",
      description: (
        <span className="flex items-start gap-2">
          <GraduationCap className="h-5 w-5 flex-shrink-0 text-[#00a4b4] mt-1" />
          <span>For PIs, postdocs, and research teams submitting grants, manuscripts, or systematic reviews.</span>
        </span>
      ),
      subheader: "Transform your research into impactful publications.",
      personas: ["PIs", "Postdocs", "Research Teams"],
      features: [
        "Publication-ready manuscripts",
        "Literature reviews & research summaries",
        "Grant and funding proposals",
        "Peer-review response support",
        "Data figures & publication-ready visuals"
      ],
      features2: [
        "Submission guidance",
        "Statistical analysis & data visualisation",
        "Experimental & pilot design",
        "Citation checking & formatting",
        "Collaborative revisions"
      ],
      column1Header: "Research Outputs",
      column2Header: "How We Do It",
      insight: "Transform your data into research that resonates.",
      price: "Let's discuss your research needs.",
      cta: "Advance Your Research",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ]

  const handleTabSelect = (index: number) => {
    setSelectedService(index)
  }

  const scrollToServiceAndSelect = (serviceIndex: number) => {
    setSelectedService(serviceIndex)
    // Get header height dynamically
    const header = document.querySelector('header')
    const headerHeight = header ? header.offsetHeight : 80 // fallback to 80px if header not found
    
    const servicesSection = document.getElementById('services-tabs')
    if (servicesSection) {
      const y = servicesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20 // 20px extra padding
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <LogoLink />
          <nav className="hidden md:flex gap-8">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
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
            <a href="#footer-cta">Book a Call</a>
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
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
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
                  href="/sciencebrands"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  For Science-Backed Brands
                </Link>
                <Link
                  href="/network"
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
                  <a href="#footer-cta">Book a Call</a>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="w-full min-h-[60vh] flex items-center pt-28 pb-16">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-8 max-w-[900px]">
                <h1 className="text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-center">
                  We make science make sense
                </h1>
                <h2 className="text-2xl md:text-2xl font-medium tracking-tight sm:text-2xl md:text-2xl text-arcova-darkblue mt-6">
                For the founders, investors, marketers, and researchers building what’s next.
                </h2>
              </div>
              <p className="mx-auto max-w-[800px] text-lg font-medium text-grey leading-relaxed">
                We help turn research into strategy, products, and progress
              </p>

              {/* Added scroll-down button */}
              <motion.div
                className="mt-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="#who-we-work-with" className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-teal-50 border border-teal-200 rounded-full p-3 text-arcova-teal group-hover:bg-teal-100 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Who We Work With Section */}
        <AnimatedSection id="who-we-work-with" className="w-full py-24 md:py-32 bg-arcova-mint/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                Who We Work With
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">Builders. Explainers. Investors. </h2>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                Complex science is hard to explain. We make it easier to fund, grow, and communicate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
              {/* Owners & Founders */}
              <motion.div
                className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
                onClick={() => scrollToServiceAndSelect(0)}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-[#f55f96]" />
                      <h3 className="font-bold text-lg text-arcova-darkblue">Owners & Founders</h3>
                    </div>
                    <p className="text-gray-600">Shape your vision into a market-ready plan with clarity, content, and direction.</p>
                  </div>
                </div>
              </motion.div>

              {/* Marketing & Comms Leads */}
              <motion.div
                className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
                onClick={() => scrollToServiceAndSelect(2)}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-[#ffb996]" />
                      <h3 className="font-bold text-lg text-arcova-darkblue">Marketing & Comms Leads</h3>
                    </div>
                    <p className="text-gray-600">Turn deep research into stories that build authority and trust.</p>
                  </div>
                </div>
              </motion.div>

              {/* Investors & Advisors */}
              <motion.div
                className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
                onClick={() => scrollToServiceAndSelect(3)}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <LineChart className="h-5 w-5 text-[#8d7dc7]" />
                      <h3 className="font-bold text-lg text-arcova-darkblue">Investors & Advisors</h3>
                    </div>
                    <p className="text-gray-600">Scientific diligence before you build, pitch, or invest.</p>
                  </div>
                </div>
              </motion.div>

              {/* Researchers & Academics */}
              <motion.div
                className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
                onClick={() => scrollToServiceAndSelect(4)}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-[#00a4b4]" />
                      <h3 className="font-bold text-lg text-arcova-darkblue">Researchers & Academics</h3>
                    </div>
                    <p className="text-gray-600">Transform your data into publications and funding.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Selector Section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50" id="services-section">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">
                Scientific solutions for every stage
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                From rapid content to deep-dive validation, Arcova delivers the right science expertise for your business. Choose a service below, or let's build a custom solution together.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Left column: Modern pill tabs - square buttons on mobile */}
              <div className="md:col-span-4 flex flex-col md:justify-start md:py-12 md:sticky md:top-24 md:h-fit" id="services-tabs">
                <div className="flex md:flex-col gap-2 md:gap-3 justify-center md:justify-start">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      onClick={() => handleTabSelect(index)}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={cn(
                        "relative flex items-center transition-all duration-300",
                        "overflow-hidden group",
                        "flex-1 aspect-square md:aspect-auto md:w-full p-3 md:p-5 rounded-xl md:rounded-2xl",
                        selectedService === index
                          ? "bg-arcova-blue/20 border border-arcova-blue/30"
                          : "bg-white hover:bg-arcova-blue/5 border border-transparent",
                      )}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {/* Icon container */}
                      <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4 w-full">
                        <motion.div
                          className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full mb-1 md:mb-0 flex-shrink-0",
                            selectedService === index ? "bg-white shadow-sm" : "bg-gray-100",
                          )}
                          animate={{
                            scale: hoveredService === index || selectedService === index ? 1.05 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <div className={cn(
                            "transition-colors duration-300",
                            selectedService === index && index === 0 ? "text-[#f55f96]" : // Business Strategy
                            selectedService === index && index === 1 ? "text-[#216680]" : // Whitepapers - changed to blue
                            selectedService === index && index === 2 ? "text-[#ffb996]" : // Articles
                            selectedService === index && index === 3 ? "text-[#8d7dc7]" : // Scientific Validation
                            selectedService === index && index === 4 ? "text-[#00a4b4]" : // Academic
                            "text-gray-500"
                          )}>
                            {service.icon}
                          </div>
                        </motion.div>

                        <div className="flex-1 hidden md:block">
                          <div
                            className={cn(
                              "font-medium text-lg transition-colors duration-300 text-left",
                              selectedService === index ? "text-arcova-blue" : "text-gray-700",
                            )}
                          >
                            {service.name}
                          </div>
                        </div>

                        {/* Show name below icon on mobile */}
                        <div className="text-xs font-medium mt-1 md:hidden">
                          {index === 0 ? "Essentials" : 
                           index === 1 ? "Deep Dives" : 
                           index === 2 ? "Validation" :
                           index === 3 ? "Research" :
                           "Training"}
                        </div>

                        {/* Subtle arrow that appears on hover or when selected - desktop only */}
                        <motion.div
                          className="text-arcova-blue hidden md:block flex-shrink-0"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredService === index || selectedService === index ? 1 : 0,
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
              <div className="md:col-span-8 md:relative">
                {/* Removed AnimatePresence and exit animations for instant tab switching */}
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border-0"
                >
                  <div className="p-6 md:p-10 min-h-[600px] flex flex-col">
                    {/* Top accent bar */}
                    <div className="w-16 h-1.5 bg-arcova-blue rounded-full mb-6 md:mb-8"></div>

                    <div className="flex-1">
                      {/* Main header */}
                      <h3 className="text-2xl md:text-3xl font-bold text-arcova-darkblue mb-3">
                        {services[selectedService].name}
                      </h3>

                      {/* For statement in teal */}
                      <p className="text-lg font-semibold text-arcova-teal mb-8">
                        {services[selectedService].description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                          <h4 className="text-base md:text-lg font-medium text-arcova-darkblue mb-3 md:mb-4">
                            {services[selectedService].column1Header}
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
                                <div className="rounded-full bg-[#00a4b4] p-1 mr-3 mt-0.5 flex-shrink-0">
                                  <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-medium text-arcova-darkblue mb-3 md:mb-4">
                            {services[selectedService].column2Header}
                          </h4>
                          <ul className="space-y-3 md:space-y-4">
                            {services[selectedService].features2.map((feature, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <div className="rounded-full bg-[#00a4b4] p-1 mr-3 mt-0.5 flex-shrink-0">
                                  <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between mt-auto pt-8">
                      {/* Microinsight with lightbulb */}
                      <div className="mb-4 md:mb-0 md:max-w-[60%]">
                        <p className="text-sm font-bold text-gray-600 italic flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-[#f55f96] flex-shrink-0 mt-0.5" />
                          <span className="flex-1">{services[selectedService].insight}</span>
                        </p>
                      </div>

                      <Button
                        asChild
                        className="bg-arcova-teal hover:bg-arcova-teal/90 text-white border-none px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 hover:scale-105 transform transition-all duration-300 group text-sm md:text-base w-full md:w-auto"
                      >
                        <a
                          href="https://calendly.com/emma-arcova/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 justify-center"
                        >
                          {services[selectedService].cta}
                          <motion.div
                            whileHover={{ x: 5 }}
                            whileTap={{ x: 2 }}
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
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection id="process" className="w-full py-24 md:py-32 bg-arcova-blue/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                How we transform complex data into actionable insights
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                A systematic approach that delivers reliable results, every time
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-bold">
              <ProcessStep
                number="01"
                title="Discover"
                subtitle="Go deep on the evidence"
                description="Comprehensive literature search and data collection"
                delay={0.1}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-white to-[#d4f2de]/30"
              />
              <ProcessStep
                number="02"
                title="Analyze"
                subtitle="Separate signal from noise"
                description="Critical evaluation of evidence quality and relevance"
                delay={0.2}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-white to-[#ccecfe]/30"
              />
              <ProcessStep
                number="03"
                title="Synthesize"
                subtitle="Connect the dots for clarity"
                description="Transforming complex science into clear, actionable insight"
                delay={0.3}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-white to-[#d4f2de]/30"
              />
              <ProcessStep
                number="04"
                title="Deliver"
                subtitle="From research to impact"
                description="Content, reports, or advice. Science delivered your way"
                delay={0.4}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-white to-[#ccecfe]/30"
              />
            </div>
          </div>
        </AnimatedSection>


        {/* Client Success Section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="mx-auto max-w-xl text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
              Client stories we love
              </h2>
              <p className="text-lg text-gray-600">
                What it's like to work with us, in their words
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </AnimatedSection>


         {/* Featured Testimonial */}
       <AnimatedSection className="w-full py-14 md:py-14 bg-arcova-mint/15">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="max-w-3xl text-center">
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-current text-amber-400 mr-1"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-2xl font-medium italic text-gray-900 mb-8 leading-relaxed">
                  "Her ability to break down complex scientific concepts into accessible content is exceptional."
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 mb-1">Owner and Director | Biotech Training Firm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Network Section */}
        <AnimatedSection id="about" className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-[300px] md:h-[400px] shadow-xl rounded-2xl overflow-hidden order-1 lg:order-1">
                <GlowingNetworkMolecule />
              </div>
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                  Our Network
                </div>
                <h2 className="text-3xl font-bold tracking-tight leading-loose md:text-3xl mb-3">
                  Experts and specialists curated for your brief.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Arcova draws on a trusted network of scientists and subject matter experts from across academia and industry. We work with researchers and experts from world-leading institutions, assembling a curated team for each project, matching expertise to your brief.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 self-start rounded-full border-arcova-teal/30 hover:bg-arcova-teal/10 hover:scale-105 transform transition-all duration-300"
                >
                  <Link href="/network" className="flex items-center gap-2 text-arcova-teal">
                    Join Our Network
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 2 }}
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
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Network recruitment banner */}
        <AnimatedSection className="w-full py-12 bg-arcova-blue/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <Link 
              href="/network"
              className="flex flex-col items-center justify-center gap-2 text-arcova-blue hover:text-arcova-blue/80 transition-colors duration-200 text-lg md:text-xl"
            >
              <span>We're always looking for curious scientific minds.</span>
              <span className="font-bold flex items-center gap-2">
                Join our global network
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </AnimatedSection>

        {/* Emma Bardsley Section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-mint/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 sm:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 order-2 sm:order-1">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                  Led by
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-2xl">Emma Bardsley, PhD</h2>
                <p className="text-arcova-teal font-medium">Founder and Scientific Director</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Scientific direction is led by Emma Bardsley, PhD — a neuroscientist with experience in research,
                  pharma, and consulting. Emma oversees project quality and insight synthesis, ensuring that all
                  deliverables meet Arcova's standards of scientific clarity.
                </p>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/emmabardsley/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="#475569"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:emma@arcova.bio"
                    className="hover:opacity-80 transition-opacity duration-200"
                    aria-label="Email"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-[25px]"
                      aria-hidden="true"
                      fill="#475569"
                    >
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end items-center order-1 sm:order-2">
                <div className="w-full sm:w-[280px] md:w-[320px] aspect-square relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/emma-bardsley-portrait.png"
                    alt="Emma Bardsley"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Testimonial */}
        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="max-w-3xl text-center">
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-current text-amber-400 mr-1"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-2xl font-medium italic text-gray-900 mb-8 leading-relaxed">
                  "She helped out both strategically and in a hands-on capacity. In addition to driving a great result, a variety of stakeholders LOVED Emma, and couldn't stop telling me how amazing she was. Get her on your team as soon as you have a chance!"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 mb-1">Founder | Digital Health Startup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer CTA */}
        <AnimatedSection id="footer-cta" className="w-full py-24 md:py-32 bg-arcova-darkblue text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl max-w-[700px]">Tell us what you need and we'll make it happen.</h2>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-6 h-auto transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <a
                  href="https://calendly.com/emma-arcova/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Let's Go
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 2 }}
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
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <ScrollToTop />
    </div>
  )
}
