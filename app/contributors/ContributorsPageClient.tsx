"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Check, Send, BookOpen, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { LogoLink } from "@/components/logo"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { GlowingNetworkMolecule } from "@/components/network-molecule"
import { TypewriterHeading } from "@/components/typewriter-heading"

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
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
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
              href="/teams"
              className="text-sm font-medium text-gray-600 hover:text-arcova-teal transition-colors duration-200"
            >
              For Science-Backed Brands
            </Link>
          </nav>
          <Button
            asChild
            variant="ghost"
            className="hidden md:inline-flex hover:bg-gray-100 transition-colors duration-200"
          >
            <a href="#contact-form" className="scroll-smooth">
              Join Our Network
            </a>
          </Button>
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
                <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed">
                  Lend your expertise to high-stakes research and due diligence projects.
                </p>
                <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed font-medium">
                  On your terms.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
              >
                <a href="#contact-form" className="flex items-center gap-2">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Our Network
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-4">Who we're looking for</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
                We draw on a distributed network of scientists, technical specialists, and domain experts from
                world-leading institutions. Whether your background is in research, data science, regulatory affairs, or
                IP — if you bring deep domain expertise, we'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Biomedical Scientists</h3>
                <p className="text-gray-600">Deep knowledge in human biology, preclinical or clinical domains</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Data Scientists</h3>
                <p className="text-gray-600">Expertise in model validation, ML workflows, or statistical analysis</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Regulatory Experts</h3>
                <p className="text-gray-600">Familiar with FDA, EMA, or global approval frameworks</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Due Diligence Analysts</h3>
                <p className="text-gray-600">Experience surfacing red flags or technical risks</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Patent & IP Analysts</h3>
                <p className="text-gray-600">Skilled in IP landscaping, prior art, or patent strategy</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-arcova-darkblue mb-1">Research Specialists</h3>
                <p className="text-gray-600">PhDs or postdocs with strong methodology and synthesis skills</p>
              </div>
            </div>

            <div className="mt-16 max-w-5xl mx-auto">
              <div className="relative h-[300px] md:h-[400px] shadow-xl rounded-2xl overflow-hidden">
                <GlowingNetworkMolecule />
                <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-arcova-darkblue/70 to-transparent">
                  <div className="space-y-6 text-white max-w-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-arcova-mint/30 p-2 rounded-full mt-1">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Advanced Degree</h3>
                        <p className="text-white/80">PhD or equivalent in a relevant scientific field</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-arcova-mint/30 p-2 rounded-full mt-1">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Communication Skills</h3>
                        <p className="text-white/80">
                          Ability to translate complex concepts for non-specialist audiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-arcova-mint/30 p-2 rounded-full mt-1">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Research Experience</h3>
                        <p className="text-white/80">Strong background in research methodology and critical analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why join our network?</h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                Collaborate with us to make an impact while maintaining flexibility
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-arcova-mint/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-arcova-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Remote Work</h3>
                <p className="text-gray-600">
                  Work on projects remotely, on your own schedule. Perfect for academics and researchers looking for
                  flexible consulting opportunities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-arcova-mint/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-arcova-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Competitive Compensation</h3>
                <p className="text-gray-600">
                  Receive fair compensation for your expertise and time. Project-based fees that recognize the value of
                  your specialized knowledge.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-arcova-mint/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-arcova-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Impactful Work</h3>
                <p className="text-gray-600">
                  Help shape investment decisions and business strategies with your scientific expertise. See your
                  knowledge make a real-world difference.
                </p>
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Apply to join our network</h2>
              <p className="text-lg text-gray-600 max-w-[700px]">
                If you think you'd be a good fit for our team, we'd love to hear from you. Fill out the form below and
                we'll be in touch.
              </p>
            </div>

            <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              {formState.submitted ? (
                <div className="p-8 md:p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank you for your interest!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your application and will review it shortly. We'll be in touch if there's a good
                    match for your expertise.
                  </p>
                  <Button
                    onClick={() => setFormState({ ...formState, submitted: false })}
                    className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-all duration-300"
                  >
                    Submit Another Application
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
                        placeholder="e.g., Neuroscience, Oncology, Genomics"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="institution" className="text-sm font-medium text-gray-700">
                        Institution/University
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formState.institution}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                        placeholder="Your current or most recent institution"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-8">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Tell us about yourself and your experience
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal focus:border-transparent"
                      placeholder="Please share your relevant experience, including your research background, any industry experience, and why you're interested in joining our network."
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={formState.loading}
                      className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-3 transition-all duration-300 flex items-center gap-2"
                    >
                      {formState.loading ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-darkblue text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Have questions?</h2>
              <p className="text-xl text-gray-400 max-w-[600px]">
                If you have any questions about joining our network, please don't hesitate to reach out.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
              >
                <a href="mailto:network@arcova.com" className="flex items-center gap-2">
                  Email Us
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
