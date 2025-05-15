"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { NetworkMolecule } from "@/components/network-molecule"

export default function AboutPageClient() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="text-center pt-24 pb-28 bg-white w-full">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight text-arcova-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Scientific thinking.
            <br className="hidden lg:block" />
            Commercial impact.
          </motion.h1>

          <motion.p
            className="mt-4 text-xl font-semibold text-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Move fast. Think rigorously.
          </motion.p>

          <motion.p
            className="mt-3 md:mt-4 text-lg text-neutral-700 mx-auto max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We distil complex biomedical research into decision-ready insight for <strong>investors</strong> and{" "}
            <strong>science-backed brands</strong>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://calendly.com/arcova/discovery"
              className="mt-8 inline-block rounded bg-primary-600 px-10 py-4 text-lg font-semibold 
           text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-4 
           focus:ring-primary-300 transition"
            >
              Book a 15-min discovery call
            </a>

            <div className="mt-3 md:mt-4 space-x-6 text-sm text-primary-600 underline underline-offset-4">
              <a href="#investors" className="hover:text-primary-700 transition-colors duration-300">
                I'm an investor ↓
              </a>
              <a href="#brands" className="hover:text-primary-700 transition-colors duration-300">
                I'm a brand ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for additional content */}
      <section className="w-full py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-arcova-navy">Why Arcova?</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                <strong>We bridge the gap between scientific complexity and commercial clarity.</strong> Our team of
                PhD-trained scientists and commercial strategists work together to provide clear, actionable insights.
              </p>
              <p className="text-lg mb-6">
                <strong>We focus on what matters.</strong> We cut through the noise to identify the key scientific
                factors that will impact your business decisions.
              </p>
              <p className="text-lg">
                <strong>We deliver on time, every time.</strong> Whether you're an investor evaluating a biotech
                opportunity or a brand looking to strengthen your scientific positioning, we provide the expertise you
                need to make confident decisions.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <NetworkMolecule />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-arcova-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Arcova</h3>
              <p className="mb-4">Scientific expertise for commercial decision-making.</p>
              <p className="text-sm text-gray-300">© {new Date().getFullYear()} Arcova Ltd. All rights reserved.</p>
              <p className="text-sm text-arcova-teal font-medium mt-2">Move fast. Think rigorously.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/investors" className="hover:text-arcova-teal transition-colors">
                    For Investors
                  </Link>
                </li>
                <li>
                  <Link href="/teams" className="hover:text-arcova-teal transition-colors">
                    For Science-Backed Brands
                  </Link>
                </li>
                <li>
                  <Link href="/contributors" className="hover:text-arcova-teal transition-colors">
                    For Contributors
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="mb-2">Email: info@arcova.co</p>
              <a
                href="https://calendly.com/arcova/discovery"
                className="inline-block bg-arcova-teal hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md mt-2 transition-colors duration-300"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}
