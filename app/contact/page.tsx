"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Check, X, Mail } from "lucide-react"

// Confetti component
const Confetti = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (!isActive) return

    const createConfetti = () => {
      const confettiCount = 150
      const colors = ["#00A4B4", "#006680", "#8CD9C9", "#E8D6A0", "#003344"]

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti"
        confetti.style.setProperty("--confetti-x", Math.random() * 100 + "vw")
        confetti.style.setProperty("--confetti-y", Math.random() * 100 + "vh")
        confetti.style.setProperty("--confetti-size", Math.random() * 10 + 5 + "px")
        confetti.style.setProperty("--confetti-rotation", Math.random() * 360 + "deg")
        confetti.style.setProperty("--confetti-color", colors[Math.floor(Math.random() * colors.length)])
        confetti.style.setProperty("--confetti-speed", Math.random() * 3 + 2 + "s")

        document.body.appendChild(confetti)

        setTimeout(() => {
          confetti.remove()
        }, 5000)
      }
    }

    createConfetti()
  }, [isActive])

  return null
}

// Arcova color palette
const arcovaColors = {
  deepNavy: "#16253B",
  tealDark: "#00a4b4",
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const [showNotification, setShowNotification] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })

    // Enforce required fields
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      alert("Please fill out all required fields: Name, Email, and Message.")
      setFormState({ ...formState, loading: false })
      return
    }

    // Submit to Contact API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })

    if (!response.ok) {
      setFormState({ ...formState, loading: false })
      alert('There was an error submitting your message. Please try again or email us directly.');
      return
    }

    setFormState({
      ...formState,
      submitted: true,
      loading: false,
      name: "",
      email: "",
      company: "",
      message: "",
    })

    // Trigger confetti and notification
    setShowConfetti(true)
    setShowNotification(true)

    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

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
      {/* Confetti effect */}
      <Confetti isActive={showConfetti} />

      <style jsx global>{`
        .confetti {
          position: fixed;
          width: var(--confetti-size);
          height: var(--confetti-size);
          background-color: var(--confetti-color);
          top: -100px;
          left: var(--confetti-x);
          opacity: 0;
          transform: rotate(var(--confetti-rotation));
          animation: fall var(--confetti-speed) ease-in forwards;
          z-index: 1000;
        }

        @keyframes fall {
          0% {
            top: -100px;
            opacity: 1;
            transform: rotate(var(--confetti-rotation));
          }
          100% {
            top: var(--confetti-y);
            opacity: 0;
            transform: rotate(calc(var(--confetti-rotation) + 360deg));
          }
        }
      `}</style>

      {/* Notification banner */}
      {showNotification && (
        <div className="fixed top-24 right-4 z-50 bg-sanon-purpleDark text-white p-4 rounded-lg shadow-lg max-w-md">
          <div className="flex items-start">
            <div className="flex-1">
              <h4 className="font-bold mb-1">Message sent successfully!</h4>
              <p className="text-sm">
                We'll get back to you as soon as possible.
              </p>
            </div>
            <button onClick={() => setShowNotification(false)} className="ml-4 text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 text-sanon-deepNavy">Contact Us</h1>
              <p className="text-xl text-gray-600">
                Have questions?<br />
                We'd love to hear from you.
              </p>
            </div>

            {formState.submitted ? (
              <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sanon-purpleLight mb-6">
                  <Check className="h-8 w-8 text-sanon-purpleDark" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sanon-deepNavy">Thanks for reaching out! 🤝</h3>
                <p className="text-gray-600 mb-6">
                  We'll be in touch soon.
                </p>
                <Button
                  onClick={() => setFormState({ ...formState, submitted: false })}
                  className="bg-sanon-purpleDark hover:bg-sanon-purpleDark/90 text-white rounded-full transition-all duration-300"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <form onSubmit={handleSubmit} className="p-6 md:p-12">
                  <div className="space-y-6">
                    {/* Name and Email row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sanon-purpleDark/50 focus:border-sanon-purpleDark transition-colors duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sanon-purpleDark/50 focus:border-sanon-purpleDark transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Company field */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company Name (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sanon-purpleDark/50 focus:border-sanon-purpleDark transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sanon-purpleDark/50 focus:border-sanon-purpleDark transition-colors duration-200"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={formState.loading}
                        className="w-full bg-sanon-purpleDark hover:bg-sanon-purpleDark/90 text-white rounded-full py-3 transition-all duration-300"
                      >
                        {formState.loading ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 