    "use client"

    import type React from "react"

    import Link from "next/link"
    import { useState, useEffect } from "react"
    import {
    Users,
    Check,
    Zap,
    LineChart,        
    BookOpen,
    BarChart3,
    ClipboardCheck,
    Search,
    FileText,
    GraduationCap,
    X,
    ChevronDown,
    ChevronUp,
    Brain,
    Lightbulb,
    Microscope,
    Menu,
    Heart,
    PlusCircle,
    Star,
    Atom,
    Binary,
    ScrollText,
    Shield,
    Scale,
    Clock,
    DollarSign,
    Target,
    Database,
    FileSearch,
    Sparkles
    } from "lucide-react"
    import { Button } from "@/components/ui/button"
    import { AnimatedSection } from "@/components/animated-section"
    import { LogoLink } from "@/components/logo"
    import { motion, AnimatePresence } from "framer-motion"
    import { TypewriterHeading } from "@/components/typewriter-heading"
    import { ScrollToTop } from "@/components/scroll-to-top"
    import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card"
    import { ProcessStep } from "@/components/process-step"

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

    // Tab interface for the Core Skills section
    interface SkillTab {
    id: string
    title: string
    content: string
    backgroundImage: string
    backgroundPosition: string
    icon: React.ReactNode
    microInsight: string
    bulletPoints: string[]
    }

    // Add a new component for the horizontal cards
    const HorizontalFeatureCard = ({ title, content, icon, delay, microInsight, bulletPoints }: {
    title: string
    content: string
    icon: React.ReactNode
    delay: number
    microInsight: string
    bulletPoints: string[]
    }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div
        className="relative overflow-hidden rounded-2xl bg-white p-6 md:p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 group h-full hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay }}
        >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            <div className="text-arcova-teal">
            {icon}
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-arcova-teal">{microInsight}</p>
            </div>
            
            {/* Desktop view - always visible */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-4">
                <ul className="space-y-2 mx-auto md:mx-0 inline-block text-left">
                {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-arcova-teal mt-1.5"></div>
                    <span>{point}</span>
                    </li>
                ))}
                </ul>
                <div className="text-sm text-gray-600 border-l border-gray-100 pl-4 text-center md:text-left">
                {content}
                </div>
            </div>

            {/* Mobile view - expandable */}
            <div className="md:hidden">
                <ul className="space-y-2 mx-auto inline-block text-left mb-3">
                {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-arcova-teal mt-1.5"></div>
                    <span>{point}</span>
                    </li>
                ))}
                </ul>
                <div className="relative overflow-hidden" style={{ height: isExpanded ? 'auto' : '0' }}>
                <AnimatePresence>
                    {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center mt-3 text-sm text-gray-600"
                    >
                        {content}
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>
                <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 transition-transform duration-300 hover:bg-gray-100 mx-auto mt-2"
                >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
            </div>
            </div>
        </div>
        </motion.div>
    )
    }

    // Network testimonials data
    const networkTestimonials = [
    {
        title: "Biomedical Scientists",
        quote: "Deep knowledge in human biology, preclinical or clinical domains",
        icon: <Microscope className="h-5 w-5" />
    },
    {
        title: "Research Specialists",
        quote: "PhDs or postdocs with strong methodology and synthesis skills",
        icon: <BookOpen className="h-5 w-5" />
    },
    {
        title: "Data Scientists",
        quote: "Expertise in bioinformatics, ML workflows, or statistical analysis",
        icon: <Database className="h-5 w-5" />
    },
    {
        title: "Regulatory Experts",
        quote: "Familiar with FDA, EMA, or global approval frameworks",
        icon: <ScrollText className="h-5 w-5" />
    },
    {
        title: "Due Diligence Analysts",
        quote: "Experience surfacing red flags or technical risks",
        icon: <FileSearch className="h-5 w-5" />
    },
    {
        title: "Patent & IP Analysts",
        quote: "Skilled in IP landscaping, prior art, or patent strategy",
        icon: <Scale className="h-5 w-5" />
    }
    ]

    const NetworkTestimonials = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkTestimonials.map((testimonial, i) => (
            <motion.figure
                key={testimonial.quote + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            >
                <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-600 font-bold">
                    <div className="text-arcova-teal">
                    {testimonial.icon}
                    </div>
                    {testimonial.title}
                </div>
                </div>
                <blockquote className="text-gray-900">
                <p>{testimonial.quote}</p>
                </blockquote>
            </motion.figure>
            ))}
        </div>
        </div>
    )
    }

    export default function NetworkPageClient() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        expertise: "",
        institution: "",
        education: "",
        message: "",
        projectInterests: "",
        submitted: false,
        loading: false,
    })

    const [showNotification, setShowNotification] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // State for the expanded tabs
    const [expandedTabs, setExpandedTabs] = useState<string[]>(["scientific-rigor"])

    // Toggle tab expansion
    const toggleTab = (tabId: string) => {
        if (expandedTabs.includes(tabId)) {
        setExpandedTabs(expandedTabs.filter((id) => id !== tabId))
        } else {
        setExpandedTabs([...expandedTabs, tabId])
        }
    }

    // Close mobile menu when clicking a link
    const handleMobileNavClick = () => {
        setMobileMenuOpen(false)
    }

    // Core skills tabs data
    const skillTabs: SkillTab[] = [
        {
        id: "scientific-rigor",
        title: "Scientific Rigor",
        content:
            "Our network members excel in applying methodical approaches to research and analysis, and understand the importance of evidence quality, statistical significance, and reproducibility.",
        backgroundImage: "/images/neural-network-bg.png",
        backgroundPosition: "center 80%",
        icon: <Microscope className="h-6 w-6" />,
        microInsight: "Excellence through methodical precision",
        bulletPoints: [
            "Evidence-based methodology",
            "Statistical significance focus",
            "Reproducible research practices"
        ]
        },
        {
        id: "clarity-of-thought",
        title: "Clarity of Thought",
        content:
            "The ability to distill complex scientific concepts into clear, actionable insights is a hallmark of our network. Members excel at identifying the most relevant information, organizing it logically, and communicating it effectively to diverse audiences. This skill is crucial for translating technical findings into business-relevant recommendations.",
        backgroundImage: "/images/neural-network-bg.png",
        backgroundPosition: "center 45%",
        icon: <Brain className="h-6 w-6" />,
        microInsight: "Complex science, crystal clear insights",
        bulletPoints: [
            "Clear communication skills",
            "Logical organization",
            "Business-focused translation"
        ]
        },
        {
        id: "deep-knowledge",
        title: "Deep Knowledge",
        content:
            "Our contributors bring specialized expertise in their respective fields, backed by advanced degrees and practical experience. This depth of knowledge allows them to quickly identify critical issues, evaluate claims against the current state of research, and provide nuanced perspectives that generalists might miss.",
        backgroundImage: "/images/molecular-structure-bg.png",
        backgroundPosition: "center 80%",
        icon: <Lightbulb className="h-6 w-6" />,
        microInsight: "Specialized expertise, broader impact",
        bulletPoints: [
            "Advanced degree expertise",
            "Rapid issue identification",
            "Nuanced evaluation skills"
        ]
        },
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState({ ...formState, loading: true })

        // Enforce required fields
        if (!formState.name.trim() || !formState.email.trim() || !formState.expertise.trim() || !formState.education.trim()) {
            alert("Please fill out all required fields: Name, Email, Area of Expertise, and Level of Education.")
            setFormState({ ...formState, loading: false })
            return
        }

        // Submit to Airtable API route
        const response = await fetch('/api/airtable', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formState,
                education: formState.education,
                projectInterests: formState.projectInterests,
            }),
        })

        if (!response.ok) {
            setFormState({ ...formState, loading: false })
            alert('There was an error submitting your application. Please try again or contact us.');
            return
        }

        setFormState({
            ...formState,
            submitted: true,
            loading: false,
            name: "",
            email: "",
            expertise: "",
            institution: "",
            education: "",
            message: "",
            projectInterests: "",
        })

        // Trigger confetti and notification
        setShowConfetti(true)
        setShowNotification(true)

        // Hide notification after 5 seconds
        setTimeout(() => {
            setShowNotification(false)
        }, 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
        ...formState,
        [e.target.name]: e.target.value,
        })
    }

    const NetworkCard = ({ title, content, icon, delay, microInsight, bulletPoints, isExpandable = false }: {
        title: string
        content: string
        icon: React.ReactNode
        delay: number
        microInsight: string
        bulletPoints: string[]
        isExpandable?: boolean
    }) => {
        const [isExpanded, setIsExpanded] = useState(false)

        return (
        <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d4f2de]/30 via-transparent to-[#d4f2de]/50 p-4 md:p-6 hover:shadow-lg transition-all duration-300 group flex flex-col"
            style={{ minHeight: isExpandable ? (isExpanded ? '400px' : '300px') : '250px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay }}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-arcova-teal/40" />
            <div className="flex-1">
            <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-arcova-teal/10 flex items-center justify-center text-arcova-teal">
                    {icon}
                </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-arcova-darkblue mb-3">{title}</h3>
                <p className="text-xs md:text-sm font-medium text-arcova-blue italic mb-4">{microInsight}</p>
                <div>
                <ul className="space-y-1.5 md:space-y-2 inline-block text-left">
                    {bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-arcova-teal mt-1.5"></div>
                        <span>{point}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            {isExpandable && (
                <div className="relative overflow-hidden" style={{ height: isExpanded ? 'auto' : '0' }}>
                <AnimatePresence>
                    {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center mt-4 text-sm text-gray-600"
                    >
                        {content}
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>
            )}
            </div>
            <div className="flex justify-center mt-2">
            {isExpandable ? (
                <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-arcova-teal/10 flex items-center justify-center text-arcova-teal transition-transform duration-300 hover:bg-arcova-teal/20"
                >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
            ) : (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-arcova-teal/10 flex items-center justify-center">
                {icon}
                </div>
            )}
            </div>
        </motion.div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
        {/* Confetti effect when form is submitted */}
        <Confetti isActive={showConfetti} />

        {/* Notification banner */}
        <AnimatePresence>
            {showNotification && (
            <motion.div
                className="fixed top-24 right-4 z-50 bg-arcova-teal text-white p-4 rounded-lg shadow-lg max-w-md"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-start">
                <div className="flex-1">
                    <h4 className="font-bold mb-1">Thanks for joining our network!</h4>
                    <p className="text-sm">
                    We've received your details and can't wait to connect with you about upcoming opportunities.
                    </p>
                </div>
                <button onClick={() => setShowNotification(false)} className="ml-4 text-white hover:text-gray-200">
                    <X className="h-5 w-5" />
                </button>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

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
            
            .skill-tab-header {
            height: 100px;
            background-size: cover;
            background-position: center;
            position: relative;
            }
            
            .skill-tab-content {
            background-size: cover;
            background-position: center;
            position: relative;
            }
            
            body.menu-open {
            overflow: hidden;
            }
        `}</style>

        <main className="flex-1">
            {/* Hero Section */}
            <AnimatedSection className="w-full min-h-[60vh] flex items-center pt-28 pb-16">
            <div className="container px-2 md:px-6 max-w-5xl">
                <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-8 max-w-[900px]">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-center">
                    Join our network of <span className="text-arcova-teal">experts</span>
                    </h1>
                    <h2 className="text-2xl md:text-2xl font-medium tracking-tight sm:text-2xl md:text-2xl text-arcova-darkblue mt-6">
                    For scientists, analysts, researchers, and strategists with ambition</h2>
                </div>
                <p className="mx-auto max-w-[800px] text-lg font-medium text-grey leading-relaxed">
                We match you with real-world projects from biotechs, health brands, and research-led teams
                </p>

                {/* Added scroll-down button */}
                <motion.div
                    className="mt-8 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a href="#who-we-want" className="flex flex-col items-center gap-2 cursor-pointer">
                    <div className="bg-teal-50 border border-teal-200 rounded-full p-3 text-arcova-teal group-hover:bg-teal-100 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform">
                        <ChevronDown className="h-5 w-5" />
                    </div>
                    </a>
                </motion.div>
                </div>
            </div>
            </AnimatedSection>

            {/* Network Testimonials */}
            <AnimatedSection id="who-we-want" className="w-full py-24 md:py-32 bg-gray-50">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="mx-auto max-w-3xl text-center mb-16">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                    Expert Network
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                Who we're looking for
                </h2>
                <p className="text-lg text-gray-600">
                We work with scientists, analysts, and specialists from world-leading institutions. If you bring deep expertise in your field we'd love to hear from you.
                </p>
                </div>
                <NetworkTestimonials />
            </div>
            </AnimatedSection>

        

            {/* Who We Work With Section */}
            <AnimatedSection id="who-we-work-with" className="w-full py-24 md:py-32  bg-arcova-mint/10">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                    Get Paid To Think
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">Work that values you, and what you know              </h2>
                <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                Bring your research skills, analytical mind, and scientific training to real-world projects, without stepping away from the work you already care about.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
                {/* Owners & Founders */}
                <motion.div
  className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
>
  <div className="flex items-start gap-4">
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-[#f55f96]" />
        <h3 className="font-bold text-lg text-arcova-darkblue">Work, On Your Terms</h3>
      </div>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Consult on high-impact projects</li>
        <li>Fits flexibly around existing commitments</li>
        <li>Work from home</li>
      </ul>
    </div>
  </div>
</motion.div>


                {/* Marketing & Comms Leads */}
                <motion.div
                    className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
                >
                    <div className="flex items-start gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-[#ffb996]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Your Expertise, Valued</h3>
                        </div>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            <li>Project-based fees</li>
                            <li>Short-term or ongoing contracts</li>
                            <li>Transparent compensation</li>
                        </ul>
                    </div>
                    </div>
                </motion.div>

                {/* Investors & Advisors */}
                <motion.div
                    className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 164, 180, 0.1)" }}
                >
                    <div className="flex items-start gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                        <LineChart className="h-5 w-5 text-[#8d7dc7]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Extend your Impact</h3>
                        </div>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            <li>Apply your skills to new fields</li>
                            <li>Shape business decisions</li>
                            <li>Drive innovation</li>
                        </ul>
                    </div>
                    </div>
                </motion.div>

                {/* Researchers & Academics */}
                <motion.div
                    className="bg-white backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 102, 128, 0.1)" }}
                >
                    <div className="flex items-start gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-5 w-5 text-[#00a4b4]" />
                        <h3 className="font-bold text-lg text-arcova-darkblue">Grow with Us</h3>
                        </div>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            <li>Access new types of projects</li>
                            <li>Join a network of peers</li>
                            <li>Expand your commercial skill set</li>
                        </ul>
                    </div>
                    </div>
                </motion.div>
                </div>
            </div>
            </AnimatedSection>

    {/* Featured Network Member */}
    <AnimatedSection className="w-full py-14 md:py-14 bg-white">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="flex flex-col items-center">
                <div className="max-w-3xl text-center">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star
                        key={i}
                        className="h-6 w-6 fill-current text-amber-400 mr-1"
                        />
                    ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl md:text-2xl font-medium italic text-gray-900 mb-8 leading-relaxed">
                    "They performed exceptionally well under pressure, and were fast, diligent, and thoughtful. Their work was high-quality, grounded in strong data analysis, and enriched by their valuable ideas and insights."
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center">
                    <div className="text-center">
                        <div className="font-semibold text-gray-900 mb-1">Academic | Research Group</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </AnimatedSection>
            {/* How it works Section */}
            <AnimatedSection id="process" className="w-full py-24 md:py-32 bg-gray-100">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium mb-6">
                    How it works
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl mb-3">
                    Steps for joining our Expert Network
                </h2>
                <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
                    A simple, collaborative onboarding designed to get you doing great work—fast.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <ProcessStep
                    title={`👋 Say Hi`}
                    subtitle="Start the conversation"
                    description="Fill out a short form or book a quick call to tell us about your background, expertise, and what you're looking for."
                    delay={0.1}
                    color="arcova-teal"
                />
                <ProcessStep
                    title={`❤️ Your Strengths`}
                    subtitle="Tell us what you're great at."
                    description="We'll send you a follow-up form to better understand your skills, interests, availability, and the kind of work you enjoy."
                    delay={0.2}
                    color="arcova-teal"
                />
                <ProcessStep
                    title={`📝 Try A Brief`}
                    subtitle="Get a sense of the work."
                    description="We'll invite you to complete a small, paid project,  to get a feel for your strengths—and so you can get a feel for us."
                    delay={0.3}
                    color="arcova-teal"
                />
                <ProcessStep
                    title={`🎉 Get Projects`}
                    subtitle={
                        <a href="#contact-form" className="text-sm font-medium text-arcova-teal hover:underline">
                            Get Started→
                        </a>
                    }
                    description="You'll start receiving tailored project briefs that align with your expertise and interests."
                    delay={0.4}
                    color="arcova-teal"
                />
                </div>
            </div>
            </AnimatedSection>

            {/* Core Skills Section
            <AnimatedSection className="w-full py-24 md:py-32 bg-gray-50">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="flex flex-col items-center space-y-4 text-center mb-16">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                    Core Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-3xl">
                    What makes our network unique
                </h2>
                <p className="text-lg text-gray-600 max-w-[700px]">
                    Our contributors bring a powerful combination of scientific expertise and practical skills
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillTabs.map((tab, index) => (
                    <NetworkCard
                    key={tab.id}
                    title={tab.title}
                    content={tab.content}
                    icon={tab.icon}
                    delay={index * 0.1}
                    microInsight={tab.microInsight}
                    bulletPoints={tab.bulletPoints}
                    isExpandable={true}
                    />
                ))}
                </div>
            </div>
            </AnimatedSection> */}

        

            {/* Contact Form Section */}
            <AnimatedSection id="contact-form" className="w-full py-24 md:py-32 bg-arcova-blue/10">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="flex flex-col items-center space-y-8 text-center mb-16">
                <div className="inline-block px-3 py-1 bg-arcova-mint/30 text-arcova-teal rounded-full text-sm font-medium">
                    Join Our Network
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tell us about you</h2>
                <p className="text-lg text-gray-600 max-w-[700px]">
                    If you think you'd be a good fit for our network, we'd love to hear from you. Share your details below
                    and we'll get in touch.
                </p>
                </div>

                <div className="max-w-[800px] mx-auto">
                {formState.submitted ? (
                    <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                        <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank's for reaching out! 🤝</h3>
                    <p className="text-gray-600 mb-6">
                        We'll be in touch soon 🎉.
                    </p>
                    <Button
                        onClick={() => setFormState({ ...formState, submitted: false })}
                        className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full transition-all duration-300"
                    >
                        Send Another Submission
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
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
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
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
                                placeholder="youremail@example.com"
                            />
                            </div>
                        </div>

                        {/* Expertise and Education row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">
                                Area of Expertise
                            </label>
                            <input
                                type="text"
                                id="expertise"
                                name="expertise"
                                value={formState.expertise}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
                                placeholder="Neuroscience, Bioinformatics"
                            />
                            </div>
                            <div className="space-y-2">
                            <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                                Level of Education
                            </label>
                            <input
                                type="text"
                                id="education"
                                name="education"
                                value={formState.education}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
                                placeholder="Masters, PhD, Postdoc"
                            />
                            </div>
                        </div>

                        {/* Institution and Project Interests row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                                Your Workplace (optional)
                            </label>
                            <input
                                type="text"
                                id="institution"
                                name="institution"
                                value={formState.institution}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
                                placeholder="University or Company"
                            />
                            </div>
                            <div className="space-y-2">
                            <label htmlFor="projectInterests" className="block text-sm font-medium text-gray-700">
                                Project Interests (Optional)
                            </label>
                            <input
                                type="text"
                                id="projectInterests"
                                name="projectInterests"
                                value={formState.projectInterests}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
                                placeholder="Data analysis, Literature review"
                            />
                            </div>
                        </div>

                        {/* Message field */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Additional Information (Optional)
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arcova-teal/50 focus:border-arcova-teal transition-colors duration-200"
                            placeholder="Feel free to tell us more about your availability and what you're looking for. Don't worry if you're not sure right now, we'll follow up with a few questions."
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-center pt-4">
                            <Button
                            type="submit"
                            disabled={formState.loading}
                            className="bg-arcova-teal hover:bg-arcova-blue text-white rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105 transform disabled:opacity-70 disabled:hover:bg-arcova-teal disabled:cursor-not-allowed min-w-[200px] group"
                            >
                            {formState.loading ? (
                                <div className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Submitting...</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    Let's Do This
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
                                        →
                                    </motion.div>
                                </div>
                            )}
                            </Button>
                        </div>
                        </div>
                    </form>
                    </div>
                )}
                </div>
            </div>
            </AnimatedSection>
        </main>

        <ScrollToTop />
        </div>
    )
    }
