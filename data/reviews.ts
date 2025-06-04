import { LineChart, GraduationCap, Zap, FileText, Users, LucideIcon } from "lucide-react"

type ServiceType = {
  name: string
  icon: LucideIcon
  color: string
  lightColor: string
}

const serviceTypes = {
  businessStrategy: {
    name: "Business Strategy",
    icon: Users,
    color: "#f55f96", // pink
    lightColor: "#fbcede"
  },
  researchAcademic: {
    name: "Research & Academic",
    icon: GraduationCap,
    color: "#00a4b4", // teal
    lightColor: "#daeff1"
  },
  articles: {
    name: "Articles & Content",
    icon: Zap,
    color: "#ffb996", // orange
    lightColor: "#ffede4"
  },
  scientificValidation: {
    name: "Scientific Validation",
    icon: LineChart,
    color: "#8d7dc7", // purple
    lightColor: "#e7e0f5"
  },
  whitepapers: {
    name: "Whitepapers & Reports",
    icon: FileText,
    color: "#216680", // blue
    lightColor: "#ccecfe"
  }
} as const

export interface Testimonial {
  quote: string
  author: {
    name: string
    title?: string
    company?: string
  }
  serviceType: keyof typeof serviceTypes
}

export const testimonials: Testimonial[] = [
  {
    quote: "Great quality of work, quick to respond and pro-active communication.",
    author: { 
      name: "Client Review",
      title: "Project Manager",
      company: "Consulting Firm"
    },
    serviceType: "businessStrategy"
  },
  {
    quote: "Open to feedback and motivated to work together to get the best results for both parties.",
    author: { 
      name: "Client Review",
      title: "Research Director",
      company: "Academic Institution"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "Able to translate scientific publications into blog post that are engaging and fun to read.",
    author: { 
      name: "Research Client",
      title: "Content Manager",
      company: "Research Institute"
    },
    serviceType: "articles"
  },
  {
    quote: "People with no background in research will understand the subject matter when reading Emma's blogs.",
    author: { 
      name: "Research Client",
      title: "Principal Investigator",
      company: "University Lab"
    },
    serviceType: "articles"
  },
  {
    quote: "Profound knowledge and in-depth understanding of the neuroscience research field makes it easy to work and communicate with Emma.",
    author: { 
      name: "Neuroscience Client",
      title: "Lab Director",
      company: "Neuroscience Institute"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "If you're searching for a talented writer who has the prowess to unpack the complexities of the biopharma and medical device industries, look no further.",
    author: { 
      name: "Biopharma Client",
      title: "Communications Director",
      company: "Pharmaceutical Company"
    },
    serviceType: "whitepapers"
  },
  {
    quote: "Her writing style is informative, easy to understand, and engaging.",
    author: { 
      name: "Content Client",
      title: "Marketing Manager",
      company: "Biotech Startup"
    },
    serviceType: "articles"
  },
  {
    quote: "Her ability to break down complex scientific concepts into accessible content is exceptional.",
    author: { 
      name: "Scientific Writing Client",
      title: "Research Lead",
      company: "Research Organization"
    },
    serviceType: "articles"
  },
  {
    quote: "Not only does she explain the current science, but she also offers valuable industry insights, giving readers a well-rounded understanding of the business side of biotech.",
    author: { 
      name: "Biotech Client",
      title: "CEO",
      company: "Biotech Company"
    },
    serviceType: "scientificValidation"
  },
  {
    quote: "Emma's dedication is evident in her work, making her an excellent choice for anyone seeking an informative and insightful blog writer.",
    author: { 
      name: "Blog Client",
      title: "Content Director",
      company: "Digital Agency"
    },
    serviceType: "articles"
  },
  {
    quote: "Excellent summaries provided by Emma at short notice on a complicated scientific topic.",
    author: { 
      name: "Scientific Client",
      title: "Research Coordinator",
      company: "Research Center"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "Emma was fantastic!",
    author: { 
      name: "Happy Client",
      title: "Project Lead",
      company: "Innovation Lab"
    },
    serviceType: "articles"
  },
  {
    quote: "She proved to be very knowledgeable in her field.",
    author: { 
      name: "Industry Client",
      title: "Director",
      company: "Industry Association"
    },
    serviceType: "scientificValidation"
  },
  {
    quote: "She was organized, detailed and thorough.",
    author: { 
      name: "Project Client",
      title: "Program Manager",
      company: "Research Institute"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "She helped out both strategically and in a hands-on capacity.",
    author: { 
      name: "Strategy Client",
      title: "Strategy Director",
      company: "Consulting Firm"
    },
    serviceType: "businessStrategy"
  },
  {
    quote: "In addition to driving a great result, a variety of stakeholders LOVED Emma, and couldn't stop telling me how amazing she was.",
    author: { 
      name: "Project Manager",
      title: "Senior Manager",
      company: "Biotech Company"
    },
    serviceType: "businessStrategy"
  },
  {
    quote: "Get her on your team as soon as you have a chance!",
    author: { 
      name: "Enthusiastic Client",
      title: "Team Lead",
      company: "Research Lab"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "Building upon our previous collaboration, Emma once again demonstrated her exceptional skill set, dedication, and passion for delivering the highest quality of work.",
    author: { 
      name: "Returning Client",
      title: "Director",
      company: "Pharmaceutical Research"
    },
    serviceType: "whitepapers"
  },
  {
    quote: "Her relentless effort, attention to detail, and deep commitment to the project were evident in every interaction and work she delivered.",
    author: { 
      name: "Detail-Oriented Client",
      title: "Project Director",
      company: "Genomics Lab"
    },
    serviceType: "scientificValidation"
  },
  {
    quote: "Her ability to consistently deliver exceptional work, especially under the constraints of challenging timelines and juggling other clients, speaks volumes of her commitment and skill.",
    author: { 
      name: "Time-Sensitive Project Client",
      title: "Research Manager",
      company: "Neuroscience Center"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "Emma's proactive approach in incorporating feedback and suggesting innovative solutions has been invaluable.",
    author: { 
      name: "Innovation Client",
      title: "Innovation Lead",
      company: "Tech Company"
    },
    serviceType: "businessStrategy"
  },
  {
    quote: "Her enthusiasm, combined with her prompt and clear communication, made the entire process seamless and incredibly productive.",
    author: { 
      name: "Communication-Focused Client",
      title: "Communications Manager",
      company: "Research Institute"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "I am deeply grateful for Emma's dedication and hard work, it was crucial in achieving the desired outcome for my project.",
    author: { 
      name: "Grateful Client",
      title: "Project Lead",
      company: "Biotech Startup"
    },
    serviceType: "scientificValidation"
  },
  {
    quote: "It's rare to find someone who not only meets but exceeds expectations with such consistency, I cannot thank her enough.",
    author: { 
      name: "Satisfied Client",
      title: "Director",
      company: "Pharmaceutical Company"
    },
    serviceType: "whitepapers"
  },
  {
    quote: "I eagerly anticipate future opportunities to work together and highly recommend these services to anyone seeking excellence, satisfaction and reliability in their projects.",
    author: { 
      name: "Long-Term Client",
      title: "Research Director",
      company: "Academic Institution"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "I had the pleasure of working with Emma, who is incredibly skilled and knowledgable.",
    author: { 
      name: "Professional Client",
      title: "Senior Researcher",
      company: "Research Center"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "Faced with a tight deadline, she was able to perform exceptionally well under pressure, being a fast worker but also diligent, providing high-quality work, incorporating excellent data analysis skills & contributing with valuable new ideas and insights for this project.",
    author: { 
      name: "Data Analysis Client",
      title: "Data Science Lead",
      company: "Genomics Company"
    },
    serviceType: "scientificValidation"
  },
  {
    quote: "The work ethic, enthusiasm & commitment to this project were delightful, combined with quick response times, made working together a wonderful experience.",
    author: { 
      name: "Project Collaborator",
      title: "Project Manager",
      company: "Research Institute"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "I really appreciate your care to seek out my feedback and incorporate my suggestions.",
    author: { 
      name: "Feedback-Oriented Client",
      title: "Content Director",
      company: "Medical Communications"
    },
    serviceType: "whitepapers"
  },
  {
    quote: "I cannot recommend Emma enough and will look forward to collaborating on future projects.",
    author: { 
      name: "Collaborative Client",
      title: "Research Lead",
      company: "Neuroscience Institute"
    },
    serviceType: "researchAcademic"
  },
  {
    quote: "Thank you Emma!",
    author: { 
      name: "Appreciative Client",
      title: "Program Director",
      company: "Innovation Center"
    },
    serviceType: "articles"
  },
  {
    quote: "Five stars!",
    author: { 
      name: "Investment Client",
      title: "Investment Director",
      company: "Family Investment Office"
    },
    serviceType: "businessStrategy"
  }
]

export { serviceTypes } 