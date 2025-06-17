"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, FileText, Zap, Users, Star, Lightbulb, LineChart, GraduationCap, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { GlowingNetworkMolecule } from "@/components/network-molecule"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const isMobile = useIsMobile()

  const services: Service[] = [
    {
      id: 1,
      name: "Life Science Strategy Consulting & Planning",
      description: "For science, health, and biotech businesses planning, launching or growing.",
      subheader: "Shape your vision into a market-ready plan.",
      personas: ["Founders", "Science ventures", "Health & Wellness businesses"],
      features: [
        "Market access consulting",
        "Biotech commercialization strategy",
        "Biotech business-development road-mapping",
      ],
      features2: [
        "Clear, decision-ready insights",
        "Competitive landscape analysis",
        "Defined market edge",
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
      name: "Life Science Content Marketing Services",
      description: "For marketing teams, content leads, and founders building authority and credibility.",
      subheader: "Turn deep research into magnetic stories that build authority and trust.",
      personas: ["Marketing Leads", "Content Managers", "Founders"],
      features: [
        "Engaging, human-crafted articles",
        "Narrative-driven storytelling",
        "Up to 3 papers synthesized",
      ],
      features2: [
        "Tailored for your audience",
        "Written by scientific experts",
        "Aligned to your brand voice",
      ],
      column1Header: "What You Get",
      column2Header: "How We Do It",
      insight: "Turn deep research into stories that build authority and trust.",
      price: "Ready to get started?",
      cta: "Let's Go",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 3,
      name: "Technical Due Diligence",
      description: "For biotech founders and investors seeking validation to support key investment decisions.",
      subheader: "Prove the science before you build, pitch, or invest.",
      personas: ["Founders", "Biotech companies", "Health Investors"],
      features: [
        "Independent, fully referenced report",
        "Feasibility review of product / mechanism",
        "Scientific diligence question list",
      ],
      features2: [
        "Strengths-vs-risks evaluation",
        "Expert literature & data synthesis",
        "Evidence-gap & regulatory research",
      ],
      column1Header: "What You Get",
      column2Header: "How We Do It",
      insight: "Prove the science before you build, pitch, or invest.",
      price: "Discuss your validation needs.",
      cta: "Validate Your Science",
      icon: <LineChart className="h-5 w-5" />
    },
    {
      id: 4,
      name: "Scientific Writing & Research Services​ ",
      description: "For PIs, postdocs, and research teams submitting grants, manuscripts, or systematic reviews.",
      subheader: "Transform your research into impactful publications.",
      personas: ["PIs", "Postdocs", "Research Teams"],
      features: [
        "Publication-ready manuscripts",
        "Literature reviews & research summaries",
        "Grant and funding proposals",
      ],
      features2: [
        "Submission guidance",
        "Statistical analysis & data visualisation",
        "Experimental & pilot design",
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
    if (index >= 0 && index < services.length) {
      setSelectedService(index)
    }
  }

  const scrollToServiceAndSelect = (serviceIndex: number) => {
    if (serviceIndex >= 0 && serviceIndex < services.length) {
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
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="w-full min-h-[60vh] flex items-center pt-28 pb-16">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-8 max-w-[900px]">
                <h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-center">
                We make science make <span className="text-arcova-teal">sense</span>
                </h1>
                <h2 className="text-xl md:text-xl font-medium tracking-tight sm:text-xl md:text-xl text-arcova-darkblue mt-6">
                Biotech marketing · Life science consulting · Tech due diligence · Scientific writing
                </h2>
              </div>
              <p className="mx-auto max-w-[800px] text-lg font-medium text-grey leading-relaxed">
              We help turn your complex research into growth.
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
                Complex science is hard to explain. We make it easier to fund, communicate, and grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
              {/* Owners & Founders */}
              {isMobile ? (
                <div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToServiceAndSelect(0)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-[#f55f96]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Owners & Founders</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Life Science Consulting · Biotech consulting</h4>
                      <p className="text-gray-600">Shape your vision into a market-ready plan with biotech consulting and biotech business development.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer md:hover:translate-y-[-5px] md:hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => scrollToServiceAndSelect(0)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-[#f55f96]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Owners & Founders</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Life Science Consulting · Biotech consulting</h4>
                      <p className="text-gray-600">Shape your vision into a market-ready plan with biotech consulting and biotech business development.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Marketing & Comms Leads */}
              {isMobile ? (
                <div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToServiceAndSelect(1)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-[#ffb996]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Marketing & Comms Leads</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Biotech marketing · Healthcare SEO</h4>
                      <p className="text-gray-600">Turn research into engaging science blogs and elevate your biotech branding to build authority and trust.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer md:hover:translate-y-[-5px] md:hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={() => scrollToServiceAndSelect(1)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-[#ffb996]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Marketing & Comms Leads</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Biotech marketing · Healthcare SEO</h4>
                      <p className="text-gray-600">Turn research into engaging science blogs and elevate your biotech branding to build authority and trust.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Investors & Advisors */}
              {isMobile ? (
                <div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToServiceAndSelect(2)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <LineChart className="h-5 w-5 text-[#8d7dc7]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Investors & Advisors</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Tech due diligence · Commercial due diligence</h4>
                      <p className="text-gray-600">De-risk investments with technical due diligence before you build, pitch, or invest.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer md:hover:translate-y-[-5px] md:hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onClick={() => scrollToServiceAndSelect(2)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <LineChart className="h-5 w-5 text-[#8d7dc7]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Investors & Advisors</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Tech due diligence · Commercial due diligence</h4>
                      <p className="text-gray-600">De-risk investments with technical due diligence before you build, pitch, or invest.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Researchers & Academics */}
              {isMobile ? (
                <div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToServiceAndSelect(3)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-[#00a4b4]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Researchers & Academics</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Scientific writing · Academic editing</h4>
                      <p className="text-gray-600">Transform your data into publications and funding with our scientific writing and editing services.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer md:hover:translate-y-[-5px] md:hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={() => scrollToServiceAndSelect(3)}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-[#00a4b4]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Researchers & Academics</h3>
                      </div>
                      <h4 className="text-base font-medium text-arcova-teal mb-2">Scientific writing · Academic editing</h4>
                      <p className="text-gray-600">Transform your data into publications and funding with our scientific writing and editing services.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Selector Section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50" id="services-section">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                What we offer
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                Scientific solutions for every stage
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                From content to deep-dive validation, we deliver scientific expertise for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Left column: Modern pill tabs - square buttons on mobile */}
              <div className="md:col-span-4 flex flex-col items-center md:items-center md:justify-center md:py-12" id="services-tabs">
                <div className="flex md:flex-col gap-2 md:gap-3 justify-center md:justify-center items-center md:items-center overflow-x-auto md:overflow-visible">
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
                        "min-w-[80px] md:min-w-0", // Add minimum width for mobile
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
                            selectedService === index && index === 1 ? "text-[#216680]" : // Articles
                            selectedService === index && index === 2 ? "text-[#ffb996]" : // Scientific Validation
                            selectedService === index && index === 3 ? "text-[#8d7dc7]" : // Academic
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
                        <div className="text-xs font-medium mt-1 md:hidden text-center">
                          {index === 0 ? "Business" : 
                           index === 1 ? "Content" :
                           index === 2 ? "Diligence" :
                           "Research"}
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
                  <div className="p-6 md:p-8 min-h-[450px] flex flex-col">
                    {/* Top accent bar */}
                    <div className="w-16 h-1.5 bg-arcova-blue rounded-full mb-3 md:mb-4"></div>

                    <div className="flex-1">
                      {/* Main header */}
                      <h3 className="text-xl md:text-2xl font-bold text-arcova-darkblue mb-2">
                        {services[selectedService]?.name || ''}
                      </h3>

                      {/* For statement in teal */}
                      <p className="text-lg font-medium text-arcova-teal mb-8 ">
                        {services[selectedService]?.description || ''}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <h4 className="text-base md:text-lg font-medium text-arcova-darkblue mb-4">
                            {services[selectedService]?.column1Header || ''}
                          </h4>
                          <ul className="space-y-2">
                            {services[selectedService]?.features.map((feature, index) => (
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
                          <h4 className="text-base md:text-lg font-medium text-arcova-darkblue mb-4">
                            {services[selectedService]?.column2Header || ''}
                          </h4>
                          <ul className="space-y-2">
                            {services[selectedService]?.features2.map((feature, index) => (
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

                    <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                      {/* Microinsight with lightbulb */}
                      <div className="mb-4 md:mb-0 md:max-w-[60%]">
                        <p className="text-sm font-bold text-gray-600 italic flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-[#f55f96] flex-shrink-0 mt-0.5" />
                          <span className="flex-1">{services[selectedService]?.insight || ''}</span>
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
                          {services[selectedService]?.cta || ''}
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
        <AnimatedSection id="process" className="w-full py-24 md:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
              Our method for turning research into results
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
              A clear, repeatable approach for turning evidence into impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {isMobile ? (
                <>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Discover</div>
                    <div className="text-sm font-semibold text-arcova-teal mb-1">Go deep on the evidence</div>
                    <div className="text-gray-600 text-sm">Comprehensive literature search and data collection</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Analyze</div>
                    <div className="text-sm font-semibold text-arcova-teal mb-1">Separate signal from noise</div>
                    <div className="text-gray-600 text-sm">Critical evaluation of evidence, source quality, and relevance</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Synthesize</div>
                    <div className="text-sm font-semibold text-arcova-teal mb-1">Connect the dots for clarity</div>
                    <div className="text-gray-600 text-sm">Transform complex science into clear, actionable insights</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Deliver</div>
                    <div className="text-sm font-semibold text-arcova-teal mb-1">From research to impact</div>
                    <div className="text-gray-600 text-sm">Content, reports, or advice. Science delivered your way</div>
                  </div>
                </>
              ) : (
                <>
                  <ProcessStep
                    title="Discover"
                    subtitle="Go deep on the evidence"
                    description="Comprehensive literature search and data collection to build a strong foundation."
                    delay={0.1}
                    color="arcova-teal"
                  />
                  <ProcessStep
                    title="Analyze"
                    subtitle="Separate signal from noise"
                    description="Critical evaluation of evidence, source quality, and relevance to your goals."
                    delay={0.2}
                    color="arcova-teal"
                  />
                  <ProcessStep
                    title="Synthesize"
                    subtitle="Connect the dots for clarity"
                    description="Transform complex science into clear, actionable insights and recommendations."
                    delay={0.3}
                    color="arcova-teal"
                  />
                  <ProcessStep
                    title="Deliver"
                    subtitle="From research to impact"
                    description="Content, pitch decks, reports, or insights. Science delivered your way."
                    delay={0.4}
                    color="arcova-teal"
                  />
                </>
              )}
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
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
              Client stories we love
              </h2>
              <p className="text-lg text-gray-600">
                What it's like to work with us, in our clients' words
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </AnimatedSection>


         {/* Who we're looking */}
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
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
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
              <h2 className="text-3xl font-semibold tracking-tight md:text-3xl max-w-[700px]">Tell us what you need and we'll make it happen.</h2>
              <Button
                asChild
                size="default"
                className="mt-4 bg-arcova-teal hover:bg-arcova-blue text-white font-bold rounded-full px-8 py-4 h-auto transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <a
                  href="https://calendly.com/emma-arcova/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-semibold text-lg gap-2"
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
              <div className="flex items-center justify-center">
                <span className="text-sm text-white font-medium">
                  💬 Not ready for a call? We&apos;d still love to hear from you.{" "}
                </span>
              </div>
              <Link 
                href="/contact" 
                className="text-arcova-teal hover:text-arcova-teal/90 inline-flex items-center text-sm font-medium"
              >
                Send us a message
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <ScrollToTop />
    </div>
  )
}
