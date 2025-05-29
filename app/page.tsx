"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X, ChevronDown, FileText, Zap, Users, Star, Lightbulb, LineChart, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { TypewriterHeading } from "@/components/typewriter-heading"
import { GlowingNetworkMolecule } from "@/components/network-molecule"
import { LogoLink } from "@/components/logo"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useState } from "react"
import AutoRotatingCards from "@/components/auto-rotating-cards"
import { ExpandableContent } from "@/components/expandable-content"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface Service {
  id: number
  name: string
  description: string
  features: string[]
  features2: string[]
  insight: string
  price: string
  cta: string
  icon: React.ReactNode
  column1Header: string
  column2Header: string
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services: Service[] = [
    {
      id: 1,
      name: "Blogs & Articles",
      description: "Make the science tell your story. Perfect for marketing teams, content leads, and founders looking to establish thought leadership and credibility.",
      features: [
        "Engaging, human-crafted articles",
        "Narrative-driven storytelling",
        "Up to 3 papers synthesized",
        "SEO keywords included",
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
      insight: "Turn complex research into stories that build trust",
      price: "Ready to get started?",
      cta: "Talk to us",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      name: "Whitepapers & Deep Dives",
      description: "Scientific insight when decisions matter. Perfect for leaders advancing product, strategy, or technical innovation.",
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
        "Builds leadership credibility",
        "Fast, reliable delivery",
        "Full source documentation"
      ],
      column1Header: "Deliverables",
      column2Header: "Key Benefits",
      insight: "Authoritative long-form content to drive confident decisions and credibility.",
      price: "Let's explore your project needs.",
      cta: "Let's Talk",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 3,
      name: "Scientific Validation & Advisory",
      description: "For technical review, regulatory compliance, or scientific due diligence.",
      features: [
        "Objective evaluation of scientific claims",
        "Risk/opportunity assessment",
        "Ongoing or one-off advisory",
        "Competitor analysis"
      ],
      features2: [
        "Patent analysis",
        "Regulatory scope",
        "Detailed validation report",
        "Actionable recommendations"
      ],
      column1Header: "Services",
      column2Header: "Our Expertise",
      insight: "Confidential, unbiased, and fully referenced.\nTrusted by VCs, boards, and brand leaders.",
      price: "Discuss your validation or advisory needs.",
      cta: "Request a Consultation",
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 4,
      name: "Research & Market Analysis",
      description: "Comprehensive market research and competitive landscape analysis.",
      features: [
        "Scientific market trends analysis",
        "Competitor technology assessment",
        "Growth opportunity mapping",
        "Scientific landscape overview"
      ],
      features2: [
        "Market size estimation",
        "Competitive positioning",
        "Technology roadmapping",
        "Strategic recommendations"
      ],
      column1Header: "Analysis",
      column2Header: "Deliverables",
      insight: "Data-driven market insights to inform strategic decisions.",
      price: "Let's discuss your research needs.",
      cta: "Schedule Analysis",
      icon: <LineChart className="h-5 w-5" />
    },
    {
      id: 5,
      name: "Clinical Content & Training",
      description: "Educational content and training materials for clinical audiences.",
      features: [
        "Clinical education materials",
        "Healthcare provider training",
        "Medical writing & editing",
        "Protocol development"
      ],
      features2: [
        "Evidence-based guidelines",
        "CME program development",
        "Clinical case studies",
        "Regulatory compliance"
      ],
      column1Header: "Materials",
      column2Header: "Standards & Compliance",
      insight: "Expert clinical content that meets regulatory standards.",
      price: "Custom solutions available.",
      cta: "Discuss Training",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ]

  const handleTabSelect = (index: number) => {
    setSelectedService(index)
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
        <AnimatedSection className="w-full min-h-[45vh] flex items-center pt-24 pb-12">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-8 max-w-[900px]">
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl text-center">
                    <span className="block sm:inline">From data to</span>{" "}
                    <span className="hidden sm:inline">
                      <TypewriterHeading
                        prefix=""
                        words={[
                          "decision",
                          "insight",
                          "conviction",
                          "content",
                          "clarity",
                          "growth",
                          "action",
                          "credibility",
                        ]}
                        className="inline"
                        suffix=""
                      />
                    </span>
                  </h1>
                  <div className="block sm:hidden mt-2 mb-4 min-h-[60px]">
                    <TypewriterHeading
                      prefix=""
                      words={[
                        "decision",
                        "insight",
                        "conviction",
                        "content",
                        "clarity",
                        "growth",
                        "action",
                        "credibility",
                      ]}
                      className="text-3xl font-bold tracking-tight text-arcova-teal"
                      suffix=""
                    />
                  </div>
                </div>
                <h2 className="text-2xl md:text-[2rem] font-medium tracking-tight sm:text-3xl md:text-3xl text-arcova-darkblue mt-6">
                  Move fast. Think rigorously.
                </h2>
              </div>
              <p className="mx-auto max-w-[800px] text-lg font-medium text-grey leading-relaxed mt-2">
                We turn complex science into decision-ready insight.
              </p>

              {/* Added scroll-down button */}
              <motion.div
                className="mt-6 group"
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

        <AnimatedSection id="who-we-work-with" className="w-full py-16 bg-arcova-mint/20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-4">
                  Who We Work With
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-4">Make Science Work for You</h2>
                <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                  Whether you're investing, building, or storytelling, we translate the science so you don't have to.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                {/* Investors & Venture Capital Panel */}
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-arcova-blue"
                    whileHover={{ height: "4px" }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Investors & Venture Capital
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      Make confident calls on your biotech ventures.
                    </motion.p>
                    <div className="flex flex-col gap-2 mb-6">
                      <motion.div
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-blue"></div>
                        <span>Due-diligence reports</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-blue"></div>
                        <span>Scientific risk assessment</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-blue"></div>
                        <span>Technical validation</span>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="group rounded-full border-arcova-blue/30 hover:bg-arcova-blue/10 transition-all duration-300"
                      >
                        <a 
                          href="https://calendly.com/emma-arcova/30min"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-arcova-blue"
                        >
                          Book a Call
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Science-Backed Brands Panel */}
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-arcova-teal"
                    whileHover={{ height: "4px" }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      Science-Backed Brands
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      Communicate your science with clarity and credibility.
                    </motion.p>
                    <div className="flex flex-col gap-2 mb-6">
                      <motion.div
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-teal"></div>
                        <span>Evidence-backed writing</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-teal"></div>
                        <span>Research summaries</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-teal"></div>
                        <span>Strategy support</span>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="group rounded-full border-arcova-teal/30 hover:bg-arcova-teal/10 transition-all duration-300"
                      >
                        <a 
                          href="https://calendly.com/emma-arcova/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-arcova-teal"
                        >
                          Book a Call
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Network Section - Now a standalone section */}
        <AnimatedSection id="about" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-[300px] md:h-[400px] shadow-xl rounded-2xl overflow-hidden order-1 lg:order-1">
                <GlowingNetworkMolecule />
              </div>
              <div className="space-y-6 order-2 lg:order-2">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                  Our Network
                </div>
                <h2 className="text-3xl font-bold tracking-tight leading-loose md:text-3xl">
                  A network of scientists. Matched to your needs.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Arcova draws on a rapidly expanding network of PhD researchers from world-leading institutions. We
                  assemble a curated team, matching PhD expertise to your brief.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 self-start rounded-full border-arcova-teal/30 hover:bg-arcova-teal/10 transition-all duration-300"
                >
                  <Link href="/network" className="flex items-center gap-2 text-arcova-teal">
                    Join Our Network
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
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

        {/* Emma Bardsley Section - Now a standalone section with background tint */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-mint/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
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
              <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
                <div className="w-full lg:w-2/3 aspect-square relative overflow-hidden rounded-2xl shadow-xl">
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

        <AnimatedSection id="process" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl">
                How we transform complex data into actionable insights
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
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
                gradient="bg-gradient-to-br from-[#d4f2de]/30 via-transparent to-[#d4f2de]/50"
                insightIcon="search"
              />
              <ProcessStep
                number="02"
                title="Analyze"
                subtitle="Separate signal from noise"
                description="Critical evaluation of evidence quality and relevance"
                delay={0.2}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-[#ccecfe]/30 via-transparent to-[#ccecfe]/50"
                insightIcon="filter"
              />
              <ProcessStep
                number="03"
                title="Synthesize"
                subtitle="Connect the dots for clarity"
                description="Transforming complex science into clear, actionable insight"
                delay={0.3}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-[#d4f2de]/30 via-transparent to-[#d4f2de]/50"
                insightIcon="connect"
              />
              <ProcessStep
                number="04"
                title="Deliver"
                subtitle="From research to impact"
                description="Content, reports, or advice. Science delivered your way"
                delay={0.4}
                color="arcova-teal"
                gradient="bg-gradient-to-br from-[#ccecfe]/30 via-transparent to-[#ccecfe]/50"
                insightIcon="rocket"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Service Selector Section */}
        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-blue/10" id="service-section">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-arcova-darkblue">
                Explore Our Science Services
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                From rapid content to deep-dive validation, Arcova delivers the right science expertise for your business. Choose a service below, or let's build a custom solution together.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Left column: Modern pill tabs - square buttons on mobile */}
              <div className="md:col-span-4 flex flex-col md:justify-start md:py-12 md:sticky md:top-24 md:h-fit">
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
                          ? "bg-arcova-blue/20 border border-arcova-blue/30 text-arcova-blue"
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
                            selectedService === index ? "bg-arcova-blue text-white" : "bg-gray-100 text-gray-500",
                          )}
                          animate={{
                            scale: hoveredService === index || selectedService === index ? 1.05 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          {service.icon}
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
                      <h3 className="text-2xl md:text-3xl font-bold text-arcova-darkblue mb-2 md:mb-3">
                        {services[selectedService].name}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
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
                                <div className="rounded-full bg-green-500 p-1 mr-3 mt-0.5 flex-shrink-0">
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
                      <div className="mb-4 md:mb-0">
                        <p className="text-sm text-black italic flex items-start gap-2">
                          <Lightbulb className="h-[16px] w-[16px] flex-shrink-0 text-arcova-teal mt-1" />
                          <span className="whitespace-pre-line">{services[selectedService].insight}</span>
                        </p>
                      </div>
                      <Button
                        asChild
                        className="bg-arcova-teal hover:bg-arcova-teal/90 text-white border-none px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 transition-all duration-300 group text-sm md:text-base"
                      >
                        <a
                          href="https://calendly.com/emma-arcova/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {services[selectedService].cta}
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
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Reviews section - Client Success */}
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
                    src="/images/abstract-finance.png"
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
                    src="/images/abstract-finance.png"
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
                    src="/images/abstract-finance.png"
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

        <AnimatedSection id="footer-cta" className="w-full py-24 md:py-32 bg-arcova-darkblue text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Not sure which lane you're in?</h2>
              <p className="text-xl text-gray-400 max-w-[600px]">
                Book a 15-min fit call to discuss your specific needs and how we can help.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
              >
                <a
                  href="https://calendly.com/emma-arcova/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Book a Fit Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
