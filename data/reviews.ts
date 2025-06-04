import { Users, Zap, BarChart, GraduationCap, FileText, LucideIcon } from "lucide-react"

type ServiceType = {
  name: string
  icon: LucideIcon
  color: string
  lightColor: string
}

const serviceTypes = {
  strategy: {
    name: "Strategy",
    icon: Users,
    color: "#f55f96", // pink
    lightColor: "#fbcede"
  },
  content: {
    name: "Content",
    icon: Zap,
    color: "#ffb996", // orange
    lightColor: "#ffede4"
  },
  diligence: {
    name: "Diligence",
    icon: BarChart,
    color: "#8d7dc7", // purple
    lightColor: "#e7e0f5"
  },
  academic: {
    name: "Academic",
    icon: GraduationCap,
    color: "#00a4b4", // teal
    lightColor: "#daeff1"
  },
  report: {
    name: "Report",
    icon: FileText,
    color: "#216680", // blue
    lightColor: "#ccecfe"
  }
} as const

export interface Testimonial {
  quote: string
  author: {
    title?: string
    company?: string
  }
  serviceType: keyof typeof serviceTypes
}

export const testimonials: Testimonial[] = [
  {
    quote: "Great quality of work, quick to respond and pro-active communication.",
    author: { 
      title: "Project Manager",
      company: "Consulting Firm"
    },
    serviceType: "strategy"
  },
  {
    quote: "Open to feedback and motivated to work together to get the best results for both parties.",
    author: { 
      title: "Research Director",
      company: "Academic Institution"
    },
    serviceType: "academic"
  },
  {
    quote: "Able to translate scientific publications into blog post that are engaging and fun to read.",
    author: { 
      title: "Content Manager",
      company: "Research Institute"
    },
    serviceType: "content"
  },
  {
    quote: "People with no background in research will understand the subject matter when reading Emma's blogs.",
    author: { 
      title: "Principal Investigator",
      company: "University Lab"
    },
    serviceType: "content"
  },
  {
    quote: "Profound knowledge and in-depth understanding of the neuroscience research field makes it easy to work and communicate with Emma.",
    author: { 
      title: "Lab Director",
      company: "Neuroscience Institute"
    },
    serviceType: "academic"
  },
  {
    quote: "If you're searching for a talented writer who has the prowess to unpack the complexities of the biopharma and medical device industries, look no further.",
    author: { 
      title: "Communications Director",
      company: "Pharmaceutical Company"
    },
    serviceType: "report"
  },
  {
    quote: "Her writing style is informative, easy to understand, and engaging.",
    author: { 
      title: "Marketing Manager",
      company: "Biotech Startup"
    },
    serviceType: "content"
  },
  {
    quote: "Her ability to break down complex scientific concepts into accessible content is exceptional.",
    author: { 
      title: "Research Lead",
      company: "Research Organization"
    },
    serviceType: "content"
  },
  {
    quote: "Not only does she explain the current science, but she also offers valuable industry insights, giving readers a well-rounded understanding of the business side of biotech.",
    author: { 
      title: "CEO",
      company: "Biotech Company"
    },
    serviceType: "diligence"
  },
  {
    quote: "Emma's dedication is evident in her work, making her an excellent choice for anyone seeking an informative and insightful blog writer.",
    author: { 
      title: "Content Director",
      company: "Digital Agency"
    },
    serviceType: "content"
  },
  {
    quote: "Excellent summaries provided by Emma at short notice on a complicated scientific topic.",
    author: { 
      title: "Research Coordinator",
      company: "Research Center"
    },
    serviceType: "academic"
  },
  {
    quote: "Emma was fantastic!",
    author: { 
      title: "Project Lead",
      company: "Innovation Lab"
    },
    serviceType: "content"
  },
  {
    quote: "She proved to be very knowledgeable in her field.",
    author: { 
      title: "Director",
      company: "Industry Association"
    },
    serviceType: "diligence"
  },
  {
    quote: "She was organized, detailed and thorough.",
    author: { 
      title: "Program Manager",
      company: "Research Institute"
    },
    serviceType: "academic"
  },
  {
    quote: "She helped out both strategically and in a hands-on capacity.",
    author: { 
      title: "Strategy Director",
      company: "Consulting Firm"
    },
    serviceType: "strategy"
  },
  {
    quote: "In addition to driving a great result, a variety of stakeholders LOVED Emma, and couldn't stop telling me how amazing she was.",
    author: { 
      title: "Senior Manager",
      company: "Biotech Company"
    },
    serviceType: "strategy"
  },
  {
    quote: "Get her on your team as soon as you have a chance!",
    author: { 
      title: "Team Lead",
      company: "Research Lab"
    },
    serviceType: "academic"
  },
  {
    quote: "Building upon our previous collaboration, Emma once again demonstrated her exceptional skill set, dedication, and passion for delivering the highest quality of work.",
    author: { 
      title: "Director",
      company: "Pharmaceutical Research"
    },
    serviceType: "report"
  },
  {
    quote: "Her relentless effort, attention to detail, and deep commitment to the project were evident in every interaction and work she delivered.",
    author: { 
      title: "Project Director",
      company: "Genomics Lab"
    },
    serviceType: "diligence"
  },
  {
    quote: "Her ability to consistently deliver exceptional work, especially under the constraints of challenging timelines and juggling other clients, speaks volumes of her commitment and skill.",
    author: { 
      title: "Research Manager",
      company: "Neuroscience Center"
    },
    serviceType: "academic"
  },
  {
    quote: "Emma's proactive approach in incorporating feedback and suggesting innovative solutions has been invaluable.",
    author: { 
      title: "Innovation Lead",
      company: "Tech Company"
    },
    serviceType: "strategy"
  },
  {
    quote: "Her enthusiasm, combined with her prompt and clear communication, made the entire process seamless and incredibly productive.",
    author: { 
      title: "Communications Manager",
      company: "Research Institute"
    },
    serviceType: "academic"
  },
  {
    quote: "I am deeply grateful for Emma's dedication and hard work, it was crucial in achieving the desired outcome for my project.",
    author: { 
      title: "Project Lead",
      company: "Biotech Startup"
    },
    serviceType: "diligence"
  },
  {
    quote: "It's rare to find someone who not only meets but exceeds expectations with such consistency, I cannot thank her enough.",
    author: { 
      title: "Director",
      company: "Pharmaceutical Company"
    },
    serviceType: "report"
  },
  {
    quote: "I eagerly anticipate future opportunities to work together and highly recommend these services to anyone seeking excellence, satisfaction and reliability in their projects.",
    author: { 
      title: "Research Director",
      company: "Academic Institution"
    },
    serviceType: "academic"
  },
  {
    quote: "I had the pleasure of working with Emma, who is incredibly skilled and knowledgable.",
    author: { 
      title: "Senior Researcher",
      company: "Research Center"
    },
    serviceType: "academic"
  },
  {
    quote: "Faced with a tight deadline, she was able to perform exceptionally well under pressure, being a fast worker but also diligent, providing high-quality work, incorporating excellent data analysis skills & contributing with valuable new ideas and insights for this project.",
    author: { 
      title: "Data Science Lead",
      company: "Genomics Company"
    },
    serviceType: "diligence"
  },
  {
    quote: "The work ethic, enthusiasm & commitment to this project were delightful, combined with quick response times, made working together a wonderful experience.",
    author: { 
      title: "Project Manager",
      company: "Research Institute"
    },
    serviceType: "academic"
  },
  {
    quote: "I really appreciate your care to seek out my feedback and incorporate my suggestions.",
    author: { 
      title: "Content Director",
      company: "Medical Communications"
    },
    serviceType: "report"
  },
  {
    quote: "I cannot recommend Emma enough and will look forward to collaborating on future projects.",
    author: { 
      title: "Research Lead",
      company: "Neuroscience Institute"
    },
    serviceType: "academic"
  },
  {
    quote: "Thank you Emma!",
    author: { 
      title: "Program Director",
      company: "Innovation Center"
    },
    serviceType: "content"
  },
  {
    quote: "Five stars!",
    author: { 
      title: "Investment Director",
      company: "Family Investment Office"
    },
    serviceType: "strategy"
  }
]

export { serviceTypes } 