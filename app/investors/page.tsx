import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"
import { ProductCard } from "@/components/product-card"
import { ProcessStep } from "@/components/process-step"
import { InvestorTypewriter } from "@/components/investor-typewriter"
import { LogoLink } from "@/components/logo"

export const metadata = {
  title: "Scientific Due-Diligence | Arcova",
  description: "Know what the pitch doesn't tell you.",
}

export default function InvestorsPage() {
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
              href="/teams"
              className="text-sm font-medium text-gray-600 hover:text-arcova-blue transition-colors duration-200"
            >
              For Life Science Teams
            </Link>
          </nav>
          <Button
            asChild
            variant="ghost"
            className="hidden md:inline-flex hover:bg-gray-100 transition-colors duration-200"
          >
            <a href="#cta" className="scroll-smooth">
              Book a Call
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <AnimatedSection className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <InvestorTypewriter
                prefix="Know what the pitch doesn't tell you."
                phrases={[
                  "Invest with conviction.",
                  "Challenge assumptions.",
                  "Answer technical questions.",
                  "Validate the science.",
                  "Inform partner discussions.",
                  "Spot red flags.",
                  "Brief the IC.",
                  "Understand the detail.",
                  "Commit with confidence.",
                  "Know when to walk away.",
                ]}
                className="mb-4"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-blue/10">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-arcova-darkblue">
                Pitch decks hide weak data. We surface it in &lt; 3 weeks.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="Rapid Evidence Scan"
                features={["10-slide red-flag deck", "3 key questions answered", "14-day delivery"]}
                price="US $3,995"
                popular={false}
                delay={0.1}
                color="arcova-blue"
              />

              <ProductCard
                title="Investor Deep-Dive"
                features={[
                  "25-page risk report + 60-min partner call",
                  "Includes replicability checklist & follow-up queries",
                  "21-day delivery",
                ]}
                price="US $12,000"
                popular={true}
                delay={0.2}
                color="arcova-blue"
              />

              <ProductCard
                title="Scientific Deal Desk"
                features={["On-call PhD insight during term-sheet negotiation (10h block)", "Response < 24h"]}
                price="US $1,500"
                popular={false}
                delay={0.3}
                color="arcova-blue"
              />
            </div>

            <div className="mt-16 flex justify-center">
              <Button
                asChild
                variant="outline"
                className="group rounded-full border-arcova-blue/30 hover:bg-arcova-blue/10 transition-all duration-300"
              >
                <a href="#" className="flex items-center gap-2 text-arcova-blue">
                  See a sample red-flag page (anonymised)
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
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
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-block px-3 py-1 bg-arcova-blue/20 text-arcova-blue rounded-full text-sm font-medium">
                What We've Done
              </div>
              <div className="max-w-[800px] mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Scientific due diligence for a private investor</h3>
                <div className="space-y-4 text-left">
                  <p className="text-lg text-gray-700">
                    Evaluated a stake in major publishing firm specializing in scientific content.
                  </p>
                  <p className="text-lg text-gray-700">
                    Reviewed the company's publishing portfolio, key scientific impact areas, and competitive
                    positioning.
                  </p>
                  <p className="text-lg text-gray-700">Delivered an annotated report within 5 days.</p>
                </div>
              </div>
            </div>
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
          </div>
          <nav className="flex gap-8">
            <Link href="#" className="text-sm text-gray-600 hover:text-arcova-blue transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-arcova-blue transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-arcova-blue transition-colors duration-200">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
