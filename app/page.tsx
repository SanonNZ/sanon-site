"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { TypewriterHeading } from "@/components/typewriter-heading"
import { GlowingNetworkMolecule } from "@/components/network-molecule"
import { LogoLink } from "@/components/logo"
import { motion, AnimatePresence } from "framer-motion"
// Import the ScrollToTop component at the top of the file
import { ScrollToTop } from "@/components/scroll-to-top"
import { useState } from "react"
import AutoRotatingCards from "@/components/auto-rotating-cards"
import { ExpandableContent } from "@/components/expandable-content"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              href="/teams"
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
                  href="/teams"
                  className="text-base font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
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
                  <a href="#footer-cta">Book a Call</a>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <AnimatedSection className="w-full py-24 md:py-32 lg:py-40 pt-32 md:pt-40">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-6 max-w-[900px]">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">From data to</h1>
                <div className="min-h-[70px] sm:min-h-[80px] md:min-h-[90px] flex items-center justify-center">
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
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl text-arcova-teal"
                    suffix=""
                  />
                </div>
              </div>
              <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed">
                We turn complex biomedical research into clear, actionable insight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-arcova-darkblue hover:bg-arcova-blue text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="/investors" className="flex items-center gap-2">
                    I need due diligence
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-arcova-mint text-arcova-darkblue rounded-full px-8 py-6 h-auto hover:bg-arcova-mint/10 transition-all duration-300 hover:shadow-md"
                >
                  <Link href="/teams" className="flex items-center gap-2">
                    I need evidence-based content
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Why Arcova?
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Find clarity in complexity</h2>
              <div className="text-lg text-gray-600 max-w-[800px] flex flex-col gap-4">
                <p>Scientific claims are everywhere, but not all of them hold up.</p>
                <p>We help you ask the right questions, so you don't get lost in the noise.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center justify-items-center">
              <div className="space-y-6 w-full max-w-md">
                {/* Replace the existing content with the ExpandableContent component */}
                <ExpandableContent />
              </div>

              <div className="flex items-center justify-center rounded-2xl p-8 w-full max-w-md">
                <AutoRotatingCards />
              </div>
            </div>

            {/* Removed the "Move fast. Think rigorously." text */}
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-16 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-4">
                  Who We Work With
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Make Science Work for You</h2>
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
                        <Link href="/investors" className="flex items-center gap-2 text-arcova-blue">
                          Learn more
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Link>
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
                        <Link href="/teams" className="flex items-center gap-2 text-arcova-teal">
                          Learn more
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

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
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Complex science. Decoded by experts.</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Arcova draws on a rapidly expanding network of PhD researchers from world-leading institutions
                  including Oxford, Cambridge, and other top universities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  We assemble a curated team, matching PhD expertise to your brief.
                </p>
              </div>
            </div>

            <div className="mt-24 pt-16 border-t border-gray-200">
              <div className="grid gap-8 md:grid-cols-3 items-center">
                <div className="col-span-2 md:col-span-2 space-y-4 flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                    Led by
                  </div>
                  <h3 className="text-2xl font-bold">Emma Bardsley, PhD</h3>
                  <p className="text-arcova-teal font-medium">Founder & Principal Consultant</p>
                  <p className="text-gray-600">
                    Emma is a neuroscientist (Oxford PhD, postdoc) with experience in academic research, pharmaceutical
                    R&D, and consulting. She leads scientific direction at Arcova and works closely with clients to
                    deliver clear, decision-ready insights.
                  </p>
                </div>

                <div className="col-span-1 md:col-span-1 order-1 md:order-2">
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src="/emma-bardsley-portrait.png"
                      alt="Emma Bardsley"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How we transform complex data into actionable insights
              </h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                Our systematic approach ensures high-quality, reliable results every time
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep
                number="01"
                title="Discovery"
                description="Comprehensive literature search and data collection"
                delay={0.1}
                color="arcova-teal"
              />
              <ProcessStep
                number="02"
                title="Analysis"
                description="Critical evaluation of evidence quality and relevance"
                delay={0.2}
                color="arcova-teal"
              />
              <ProcessStep
                number="03"
                title="Synthesis"
                description="Distillation into business-relevant insights"
                delay={0.3}
                color="arcova-teal"
              />
              <ProcessStep
                number="04"
                title="Delivery"
                description="Clear, actionable reports with expert consultation"
                delay={0.4}
                color="arcova-teal"
              />
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
                  href="https://calendly.com"
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
