import { Button } from "@/components/ui/button"
import { Layers } from "lucide-react"
import Link from "next/link"
import AutoRotatingCards from "@/components/auto-rotating-cards"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Layers className="h-6 w-6 text-primary" />
            <span>Interact</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#examples" className="text-sm font-medium transition-colors hover:text-primary">
                Examples
              </Link>
              <Link href="#playground" className="text-sm font-medium transition-colors hover:text-primary">
                Playground
              </Link>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Design Interactive Components with Ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create, customize, and export beautiful interactive UI components without writing a single line of
                    code.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Start Creating</Button>
                  <Button variant="outline" size="lg">
                    View Examples
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Section with Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column - Placeholder Text */}
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Discover the Power of Clear Communication</h2>
                <p className="text-lg text-muted-foreground">
                  In a world of information overload, clarity is your competitive advantage. Our interactive cards help
                  you communicate complex ideas with precision and impact.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you're a science-backed brand looking to build trust or an investor seeking to separate signal
                  from noise, our approach helps you ask better questions and craft more compelling messages.
                </p>
                <p className="text-lg text-muted-foreground">
                  Explore our rotating deck of examples to see how we transform complex claims into clear, credible
                  communication that resonates with your audience.
                </p>
                <div className="pt-4">
                  <Button size="lg">Learn More</Button>
                </div>
              </div>

              {/* Right Column - Auto-rotating Cards */}
              <div className="flex items-center justify-center">
                <AutoRotatingCards />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-bold">
            <Layers className="h-5 w-5 text-primary" />
            <span>Interact</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Interact. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
