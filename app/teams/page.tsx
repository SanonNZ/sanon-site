import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"
import { ProductCard } from "@/components/product-card"
import { ProcessStep } from "@/components/process-step"
import { LogoLink } from "@/components/logo"

export const metadata = {
  title: "Evidence-Based Medical Writing for Biotech & Health Brands | Arcova",
  description:
    "Peer-reviewed research translated into SEO articles, TL;DR briefs and launch-ready evidence packs by an Oxford-led PhD team.",
}

export default function TeamsPage() {
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
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Evidence-based writing that <span className="text-arcova-teal">wins trust</span>.
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-gray-600 leading-relaxed">
                We translate peer-reviewed data into language your customers — and Google — understand.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 md:py-32 bg-arcova-mint/20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-arcova-darkblue">
                Google rewards authority; clinicians demand rigour. We provide both.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="Paper TL;DR"
                features={["1-page summary + 1 slide", "24-hr turnaround"]}
                price="US $595"
                popular={false}
                delay={0.1}
                color="arcova-teal"
              />

              <ProductCard
                title="Authority Article"
                features={["1,200-word, peer-reviewed source list", "Edited for SEO & plain-English clarity"]}
                price="US $1,950"
                popular={true}
                delay={0.2}
                color="arcova-teal"
              />

              <ProductCard
                title="Evidence Series"
                features={["4 articles + 1 infographic", "Strategy call + outline + revisions"]}
                price="US $6,800"
                popular={false}
                delay={0.3}
                color="arcova-teal"
              />
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
                How we transform complex research into compelling content
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

        <AnimatedSection className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                Client Success
              </div>
              <div className="max-w-[800px] mx-auto relative">
                <div className="absolute -top-8 -left-8 text-arcova-mint text-8xl font-serif">"</div>
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed relative z-10">
                  The article series doubled organic traffic and slashed rebuttals in sales calls.
                </blockquote>
                <div className="absolute -bottom-8 -right-8 text-arcova-mint text-8xl font-serif">"</div>
                <p className="mt-8 text-gray-600">– CMO, BioSense Diagnostics</p>
              </div>
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
    </div>
  )
}
