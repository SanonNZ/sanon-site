"use client";

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

// Arcova color palette
const arcovaColors = {
  deepNavy: "#16253B",
  tealDark: "#00a4b4",
}

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-8 md:py-12">
        <Button
          variant="ghost"
          asChild
          className="mb-1 hover:bg-transparent hover:text-teal-600"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="space-y-8 mb-8">
            <p className="text-xl text-muted-foreground">
              Have questions or want to talk due diligence?<br />
              We'd love to hear from you.
            </p>

            <p className="text-lg text-muted-foreground">
              Schedule a call with our team using the calendar below.
            </p>

            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a 
                href="mailto:emma@arcova.bio"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                emma@arcova.bio
              </a>
            </p>

            <div className="pt-2">
              <Button 
                size="lg"
                asChild
                style={{ backgroundColor: arcovaColors.tealDark }}
                className="transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              >
                <a href="https://calendly.com/emma-arcova/30min" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Calendar widget in separate container */}
        <div className="calendly-inline-widget" 
             data-url="https://calendly.com/emma-arcova/30min" 
             style={{ width: '100%', height: '800px' }}>
        </div>
      </div>
    </div>
  )
} 