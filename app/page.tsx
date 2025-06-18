"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, FileText, Zap, Users, Star, Lightbulb, LineChart, GraduationCap, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
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

const sanonColors = {
  deepNavy: "#1c2f70",
  steelGrey: "#8895b3",
  aubergine: "#2d2850",
  purpleDark: "#e94f1",
  purpleMid: "#bcacff",
  purpleLight: "#d6d6fa",
  pinkLight: "#fce1fe",
  pinkMid: "#facffd",
  pinkDark: "#d8bbe7"
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
        "Biotech commercialization strategy",
        "Market access consulting",
        "Biotech business development mapping",
      ],
      features2: [
        "Digital strategy consulting",
        "Competitive landscape analysis",
        "Clear, decision-ready insights",
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
      description: "For marketing teams, content leads, and founders building authority.",
      subheader: "Turn deep research into magnetic stories that build trust.",
      personas: ["Marketing Leads", "Content Managers", "Founders"],
      features: [
        "Life science content marketing roadmap",
        "Scientific blogs and articles crafted by experts",
        "Stronger biotech branding & life science web design",
      ],
      features2: [
        "Biotech SEO & healthcare SEO services",
        "Stories that build lasting authority & trust",
        "Higher search visibility in science niches",
      ],
      column1Header: "What You Get",
      column2Header: "How We Do It",
      insight: "Turn deep research into stories that build authority and trust.",
      price: "Ready to get started?",
      cta: "Elevate your marketing",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 3,
      name: "Technical Due Diligence",
      description: "For investors and founders seeking scientific validity.",
      subheader: "Go deeper than the pitch - invest in rigor not hype.",
      personas: ["Investors", "Venture Capital", "angel Investors"],
      features: [
        "Independent & referenced due diligence report",
        "Feasibility review of product",
        "Competitive landscape & market access analysis",
      ],
      features2: [
        "Strengths-vs-risks & evidence-gap mapping",
        "Expert literature & data synthesis",
        "Regulatory risk assessment & IP due diligence",
      ],
      column1Header: "What You Get",
      column2Header: "How We Do It",
      insight: "Prove the science before you build, pitch, or invest.",
      price: "Discuss your validation needs.",
      cta: "Book a Validation Call",
      icon: <LineChart className="h-5 w-5" />
    },
    {
      id: 4,
      name: "Scientific Writing & Research Services​ ",
      description: "For PIs, postdocs, and research teams writing, editing or publishing.",
      subheader: "Transform your research into impactful publications.",
      personas: ["PIs", "Postdocs", "Research Teams"],
      features: [
        "Publication-ready manuscripts and academic editing",
        "Systematic literature review and scientific writing",
        "Grant writing and proposal writing",
      ],
      features2: [
        "Journal submission and peer-review guidance",
        "Statistical analysis and data visualisation",
        "Experimental and pilot design",
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
                  You are <span className="text-[#8e94f1]">not</span> <span className="text-sanon-deepNavy">alone</span>
                </h1>
                <h2 className="text-xl md:text-xl font-medium tracking-tight sm:text-xl md:text-xl text-sanon-deepNavy mt-6">
                S-Anon is a fellowship of people who have been affected by someone else's sexual behavior
                </h2>
              </div>
              <p className="mx-auto max-w-[800px] text-lg font-medium text-grey leading-relaxed">
              Scroll down to find a meeting in New Zealand.
              </p>

              {/* Added scroll-down button */}
              <motion.div
                className="mt-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a href="#who-we-work-with" className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-sanon-purpleLight border border-sanon-purpleDark/20 rounded-full p-3 text-sanon-purpleDark group-hover:bg-sanon-purpleDark/10 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Who is it for */}
        <AnimatedSection id="who-we-work-with" className="w-full py-24 md:py-32 bg-sanon-purpleDark/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-sanon-purpleDark/30 text-sanon-purpleDark rounded-full text-sm font-medium mb-6">
                Who is it for?
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">Does life feel unmanageable?</h2>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
              Have you been hurt by
              another person's compulsive sexual behavior?
              </p>
              <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
              Feeling betrayed? Embarrased?
              Doubting yourself or your sanity?
              </p>
            </div>

            <div className="grid place-items-center w-full mt-8">
              {isMobile ? (
                <div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl w-full text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Users className="h-6 w-6 text-sanon-purpleExtraDark" />
                        <h2 className="font-bold text-3xl text-sanon-deepNavy">We understand.</h2>
                      </div>
                      <h4 className="text-lg font-medium text-sanon-purpleExtraDark mb-3">The S-Anon program helps you connect with others who have felt the painful effects of someone else's sex addiction and have found a way forward.</h4>                 
                         </div>
                    <Button
                      asChild
                      className="bg-sanon-purpleExtraDark hover:bg-sanon-purpleExtraDark/90 text-white border-none px-6 py-2.5 rounded-full inline-flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 text-sm font-bold "
                    >
                      <Link href="#meetings">Find a Meeting</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Users className="h-6 w-6 text-sanon-purpleExtraDark" />
                        <h2 className="font-bold text-3xl text-sanon-deepNavy">We understand.</h2>
                      </div>
                      <p className="text-lg font-medium text-sanon-purpleExtraDark mb-6">The S-Anon program helps you connect with others who have felt the painful effects of someone else's sex addiction and have found a way forward.</p>
                      <Button
                        asChild
                        className="bg-sanon-purpleExtraDark hover:bg-sanon-purpleExtraDark/90 text-white border-none px-6 py-2.5 rounded-full inline-flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 text-sm font-bold"
                      >
                        <Link href="#meetings">Join Our Meeting</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Our Experience Section */}
        <AnimatedSection id="about" className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-sanon-purpleDark/30 text-sanon-purpleDark rounded-full text-sm font-medium mb-6">
                  Our Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                Our members know the painful effects of someone else's sex addiction.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                We have all been impacted by the effects of another person's sexual behavior. We are here to tell you that peace and serenity are possible.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 self-start rounded-full border-sanon-purpleDark/30 hover:bg-sanon-purpleDark/10 hover:scale-105 transform transition-all duration-300"
                >
                  <Link href="/network" className="flex items-center gap-2 text-sanon-purpleDark">
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
              {/* Image container */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-sanon-purpleDark/0 to-transparent"></div>
                <Image
                  src="/images/experience.png"
                  alt="S-Anon experience and support"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Strength Section - Flipped */}
        <AnimatedSection id="about-flipped" className="w-full py-24 md:py-32 bg-sanon-pinkLight/20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image container - Now on the left */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-sanon-purpleDark/0 to-transparent"></div>
                <Image
                  src="/images/strength.png"
                  alt="S-Anon strength and support"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Text content - Now on the right */}
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-sanon-pinkLight/50 text-sanon-pinkExtraDark rounded-full text-sm font-medium mb-6">
                  Our Strength
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                We walk this path together.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                In our shared experience, we find understanding, compassion, and the strength to find serenity
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 self-start rounded-full border-sanon-purpleDark/30 hover:bg-sanon-purpleDark/10 hover:scale-105 transform transition-all duration-300"
                >
                  <Link href="/network" className="flex items-center gap-2 text-sanon-purpleDark">
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

        {/* Our Hope Section */}
        <AnimatedSection id="about" className="w-full py-24 md:py-32 bg-sanon-purpleDark/20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-sanon-purpleDark/30 text-sanon-purpleExtraDark rounded-full text-sm font-medium mb-6">
                  Our Hope
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                A new way of living is possible.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                We believe that with support, honesty, and a power greater than ourselves, we can find hope and experience a new way of living.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 self-start rounded-full border-sanon-purpleDark/30 hover:bg-sanon-purpleDark/10 hover:scale-105 transform transition-all duration-300"
                >
                  <Link href="/network" className="flex items-center gap-2 text-sanon-purpleDark">
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
              {/* Image container */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-sanon-purpleDark/0 to-transparent"></div>
                <Image
                  src="/images/hope.png"
                  alt="S-Anon hope and recovery"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection id="process" className="w-full py-24 md:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-sanon-purpleDark/30 text-sanon-purpleDark rounded-full text-sm font-medium mb-6">
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
                    <div className="text-sm font-semibold text-sanon-purpleDark mb-1">Go deep on the evidence</div>
                    <div className="text-gray-600 text-sm">Comprehensive literature search and data collection</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Analyze</div>
                    <div className="text-sm font-semibold text-sanon-purpleDark mb-1">Separate signal from noise</div>
                    <div className="text-gray-600 text-sm">Critical evaluation of evidence, source quality, and relevance</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Synthesize</div>
                    <div className="text-sm font-semibold text-sanon-purpleDark mb-1">Connect the dots for clarity</div>
                    <div className="text-gray-600 text-sm">Transform complex science into clear, actionable insights</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 mb-4">
                    <div className="font-bold text-lg mb-1">Deliver</div>
                    <div className="text-sm font-semibold text-sanon-purpleDark mb-1">From research to impact</div>
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
                    color="sanon-purpleDark"
                  />
                  <ProcessStep
                    title="Analyze"
                    subtitle="Separate signal from noise"
                    description="Critical evaluation of evidence, source quality, and relevance to your goals."
                    delay={0.2}
                    color="sanon-purpleDark"
                  />
                  <ProcessStep
                    title="Synthesize"
                    subtitle="Connect the dots for clarity"
                    description="Transform complex science into clear, actionable insights and recommendations."
                    delay={0.3}
                    color="sanon-purpleDark"
                  />
                  <ProcessStep
                    title="Deliver"
                    subtitle="From research to impact"
                    description="Content, pitch decks, reports, or insights. Science delivered your way."
                    delay={0.4}
                    color="sanon-purpleDark"
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
              <div className="inline-block px-3 py-1 bg-sanon-purpleDark/30 text-sanon-purpleDark rounded-full text-sm font-medium mb-6">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
             Our stories in our words
              </h2>
              {/* <p className="text-lg text-gray-600">
                In our words
              </p> */}
            </div>
            <TestimonialCarousel />
          </div>
        </AnimatedSection>

         {/* Who we're looking */}
       <AnimatedSection className="w-full py-14 md:py-14 bg-sanon-purpleDark/15">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="max-w-3xl text-center">
                {/* Quote */}
                <blockquote className="text-2xl md:text-2xl font-medium italic text-gray-900 mb-8 leading-relaxed">
                  "Hearing others share so openly gave me strength I didn't know I had — and hope I thought I'd lost."
                </blockquote>
              </div>
            </div>
          </div>
        </AnimatedSection>

    

        {/* Network recruitment banner */}
        <AnimatedSection className="w-full py-12 bg-sanon-purpleDark/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <Link 
              href="/network"
              className="flex flex-col items-center justify-center gap-2 text-sanon-purpleDark hover:text-sanon-purpleDark/80 transition-colors duration-200 text-lg md:text-xl"
            >
              <span>We're always looking for curious scientific minds.</span>
              <span className="font-bold flex items-center gap-2">
                Join our global network
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </AnimatedSection>

     

        {/* Featured Testimonial */}
        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="max-w-3xl text-center">
                {/* Quote */}
                <blockquote className="text-xl md:text-xl font-medium italic text-gray-900 mb-8 leading-relaxed">
                "When I first came, I felt completely alone and overwhelmed. But hearing others share their experiences gave me the strength to keep going. Today, I have hope again — for myself, for my family, and for a future I couldn't imagine before. This community changed everything."
                </blockquote>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer CTA */}
        <AnimatedSection id="footer-cta" className="w-full py-24 md:py-32 bg-sanon-deepNavy text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-3xl max-w-[700px]">Tell us what you need and we'll make it happen.</h2>
              <Button
                asChild
                size="default"
                className="mt-4 bg-sanon-purpleDark hover:bg-sanon-purpleDark/90 text-white font-bold rounded-full px-8 py-4 h-auto transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <Link
                  href="/contact"
                  className="flex items-center font-semibold text-lg gap-2"
                >
                  Contact Us
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
              <div className="flex items-center justify-center">
                <span className="text-sm text-white font-medium">
                  💬 Not ready for a call? We&apos;d still love to hear from you.{" "}
                </span>
              </div>
              <Link 
                href="/contact" 
                className="text-sanon-purpleDark hover:text-sanon-purpleDark/90 inline-flex items-center text-sm font-medium"
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
