"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Testimonial {
  rating: number
  text: string
  author: string
  title: string
  company: string
  tag: {
    label: string
    color: string
  }
  header: string
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    header: "Doubled Organic Traffic",
    text: "The article series doubled organic traffic and slashed rebuttals in sales calls. Their scientific expertise is unmatched.",
    author: "Sarah Chen",
    title: "CMO",
    company: "BioSense Diagnostics",
    tag: {
      label: "Content Strategy",
      color: "bg-emerald-50 text-emerald-700"
    }
  },
  {
    rating: 4,
    header: "Clinician & Patient Engagement",
    text: "Arcova transformed our complex research into engaging content that resonates with both clinicians and patients. A game-changer for our brand.",
    author: "Michael Roberts",
    title: "Director of Marketing",
    company: "NeuraTech Solutions",
    tag: {
      label: "Healthcare Communications",
      color: "bg-blue-50 text-blue-700"
    }
  },
  {
    rating: 5,
    header: "Market Credibility",
    text: "Their evidence-based approach helped us establish credibility in a crowded market. Our content now ranks on page one for key terms in our industry.",
    author: "Dr. James Wilson",
    title: "CEO",
    company: "GenomicWellness",
    tag: {
      label: "Market Positioning",
      color: "bg-purple-50 text-purple-700"
    }
  },
  {
    rating: 5,
    header: "Product Launch Success",
    text: "The depth of scientific understanding combined with clear communication made all the difference in our product launch.",
    author: "Lisa Thompson",
    title: "Head of Product",
    company: "BioInnovate Labs",
    tag: {
      label: "Product Strategy",
      color: "bg-indigo-50 text-indigo-700"
    }
  },
  {
    rating: 5,
    header: "Series A Funding",
    text: "Working with Arcova helped us secure our Series A. Their diligence reports gave investors the confidence they needed.",
    author: "Alex Patel",
    title: "Founder",
    company: "TherapeuticAI",
    tag: {
      label: "Investment Support",
      color: "bg-rose-50 text-rose-700"
    }
  }
]

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 p-1">
            <motion.div
              className="bg-white rounded-xl border border-gray-200 h-full flex flex-col relative mx-2 group hover:border-gray-300 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Main Content */}
              <div className="p-6 flex-grow">
                {/* Theme Tag */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit ${testimonial.tag.color}`}>
                  {testimonial.tag.label}
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-amber-400 mr-1"
                    />
                  ))}
                </div>

                {/* Header */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {testimonial.header}
                </h3>

                {/* Quote */}
                <p className="text-gray-600 text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Fixed Height Footer */}
              <div className="h-[72px] px-6 py-4 border-t border-gray-100 flex flex-col justify-center bg-gray-50/50">
                <p className="font-medium text-gray-900 leading-snug">{testimonial.author}</p>
                <p className="text-sm text-gray-500 leading-snug">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-end gap-2 mt-6">
        <CarouselPrevious className="relative bg-white hover:bg-gray-50 border border-gray-200" />
        <CarouselNext className="relative bg-white hover:bg-gray-50 border border-gray-200" />
      </div>
    </Carousel>
  )
} 