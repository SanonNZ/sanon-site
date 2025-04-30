import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessStep } from "@/components/process-step"
import { TypewriterHeading } from "@/components/typewriter-heading"
import { GlowingNetworkMolecule } from "@/components/network-molecule"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-medium text-xl">
            <span>Arcova</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/investors"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              For Investors
            </Link>
            <Link
              href="/teams"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              For Life Science Teams
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              Our Process
            </Link>
          </nav>
          <Button
            asChild
            variant="ghost"
            className="hidden md:inline-flex hover:bg-gray-100 transition-colors duration-200"
          >
            <Link href="#footer-cta">Book a Call</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 pt-16">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <TypewriterHeading
                prefix="From data to"
                words={["decision", "insight", "conviction", "content", "clarity", "growth", "action"]}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                suffix=""
              />
              <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed">
                We turn complex biomedical literature into clear, actionable decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
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
                  className="border-gray-300 text-gray-800 rounded-full px-8 py-6 h-auto hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <Link href="/teams" className="flex items-center gap-2">
                    I need evidence-based content
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="w-full py-16 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="flex items-center w-full justify-center">
                <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
                <h2 className="text-lg font-medium text-gray-500 uppercase tracking-widest px-4">Who We Work With</h2>
                <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Investors & Venture Capital Panel */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">Investors & Venture Capital</h3>
                    <p className="text-gray-600 mb-4">Make confident calls on biotech, med-tech and health ventures.</p>
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Due-diligence reports</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Scientific risk assessment</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Technical validation</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="group rounded-full border-blue-200 hover:bg-blue-50 transition-all duration-300"
                    >
                      <Link href="/investors" className="flex items-center gap-2 text-blue-600">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Life Science Teams Panel */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal-600"></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">Life Science Teams</h3>
                    <p className="text-gray-600 mb-4">Communicate your science with clarity and credibility.</p>
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                        <span>Evidence-backed writing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                        <span>Research summaries</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                        <span>Strategy support</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="group rounded-full border-teal-200 hover:bg-teal-50 transition-all duration-300"
                    >
                      <Link href="/teams" className="flex items-center gap-2 text-teal-600">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Expert Insight. Evidence-backed Decisions
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Arcova draws on a distributed network of PhD researchers from world-leading institutions including
                  Oxford, Cambridge, and other top universities. This allows us to match your project with the perfect
                  scientific expertise, ensuring the highest quality insights for your specific needs.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] shadow-xl rounded-2xl overflow-hidden">
                <GlowingNetworkMolecule />
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="grid gap-8 md:grid-cols-3 items-center">
                <div className="col-span-1 md:col-span-1">
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Emma Bardsley"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                </div>

                <div className="col-span-2 md:col-span-2 space-y-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold">Emma Bardsley, PhD</h3>
                  <p className="text-blue-600 font-medium">Founder & Principal Consultant</p>
                  <p className="text-gray-600">
                    Emma is a neuroscientist (Oxford PhD, postdoc) with experience in academic research, pharmaceutical
                    R&D, and consulting. She leads scientific direction at Arcova and works closely with clients to
                    deliver clear, decision-ready insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="process" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
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
              />
              <ProcessStep
                number="02"
                title="Analysis"
                description="Critical evaluation of evidence quality and relevance"
                delay={0.2}
              />
              <ProcessStep
                number="03"
                title="Synthesis"
                description="Distillation into business-relevant insights"
                delay={0.3}
              />
              <ProcessStep
                number="04"
                title="Delivery"
                description="Clear, actionable reports with expert consultation"
                delay={0.4}
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="footer-cta" className="w-full py-24 md:py-32 bg-black text-white">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Not sure which lane you're in?</h2>
              <p className="text-xl text-gray-400 max-w-[600px]">
                Book a 15-min fit call to discuss your specific needs and how we can help.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg"
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
            <Link href="/" className="font-medium text-lg mb-2">
              Arcova
            </Link>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Arcova. All rights reserved.</p>
          </div>
          <nav className="flex gap-8">
            <Link href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
