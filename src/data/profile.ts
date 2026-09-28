import type {
  Certification,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  SkillGroup,
} from '../types'

/**
 * Personal details and links. Anything set to null renders as "coming soon"
 * instead of a broken link.
 */
export const profile = {
  name: 'Wilian Pinero Gonzalez',
  shortName: 'Wilian Pinero',
  location: 'Miami, Florida',
  headline: 'I build practical software for real people and businesses.',
  intro:
    'I’m a Computer Science student at Florida International University who builds web applications, business tools, mobile products, and data-driven software — often starting from problems I’ve seen firsthand.',
  email: 'wilianpg93@gmail.com',
  linkedin: 'https://www.linkedin.com/in/willpinero/' as string | null,
  github: 'https://github.com/will931012' as string | null,
  /** Generated from resume/resume.html — see the README to regenerate it. */
  resume: '/resume.pdf',
  resumePreview: '/resume-preview.webp',
  lookingFor: 'software engineering, full-stack, and AI/ML internships and entry-level roles',
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces built from reusable components.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'Remix'],
  },
  {
    title: 'Backend & Data',
    description: 'APIs, authentication, and the databases behind them.',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'SQLite', 'SQL', 'Prisma', 'JWT'],
  },
  {
    title: 'Mobile & ML',
    description: 'Native iOS apps and models that turn data into decisions.',
    skills: ['Swift', 'SwiftUI', 'Python', 'XGBoost', 'Data visualization', 'ML fundamentals'],
  },
  {
    title: 'Platforms & Tools',
    description: 'Shipping, hosting, and keeping projects maintainable.',
    skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'Cloudinary', 'Shopify (Liquid, Polaris)', 'Linux'],
  },
  {
    title: 'IT & Systems',
    description: 'Hands-on support experience from the help desk to the mainframe.',
    skills: [
      'Technical support',
      'Hardware troubleshooting',
      'Network configuration',
      'Software installation',
      'z/OS system programming',
    ],
  },
  {
    title: 'Working with People',
    description: 'Years of running a store and working directly with clients.',
    skills: [
      'Client communication',
      'Requirements gathering',
      'Team leadership',
      'Customer service',
      'E-commerce operations',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'React Web Developer',
    organization: 'Independent Contractor / Freelance',
    period: 'Present',
    summary:
      'Design, build, and deploy responsive websites and web applications for small businesses and organizations, owning each project from requirements through launch.',
    highlights: [
      'Built and launched a bilingual (English/Spanish) website for a Miami-Dade plumbing company, deployed on Vercel with a custom domain',
      'Built a bilingual church website with sermon, event, and service-time pages, language-specific routes, and per-page SEO metadata',
      'Developed ProMag, a construction project-management platform for MG3 Group with RFI and submittal tracking, using React, TypeScript, Express, and PostgreSQL',
      'Work directly with clients to turn business requirements into features, integrate third-party services and APIs, and maintain live applications',
    ],
  },
  {
    role: 'IT Technician Intern',
    organization: 'Miami Dade College',
    period: 'Sep 2024 – Feb 2025',
    summary:
      'Provided technical support to students, faculty, and staff across hardware, software, and connectivity issues.',
    highlights: [
      'Diagnosed and resolved hardware, software, and connectivity problems, guiding users through troubleshooting',
      'Coordinated service tickets across technicians and support teams to improve response times and reduce duplicate work',
      'Repaired desktop hardware and peripherals; installed, configured, and maintained software and equipment',
      'Supported network connectivity and workstation configuration, and recommended hardware and software upgrades',
    ],
  },
  {
    role: 'Store Manager / Web Developer',
    organization: 'Compassion and Love',
    period: 'Mar 2021 – Sep 2024',
    summary:
      'Ran daily store operations while developing the store’s website and online sales presence.',
    highlights: [
      'Managed inventory control, cash management, staff supervision, and opening and closing procedures',
      'Developed and maintained the store’s website and managed e-commerce sales across multiple online platforms',
      'Implemented website improvements to increase product visibility and improve the customer experience',
      'Improved inventory procedures and customer service practices to support sales growth and reduce product loss',
    ],
  },
  {
    role: 'Web Developer Volunteer',
    organization: 'VOUS Church',
    summary: 'Supported web development and digital initiatives for church-related projects.',
    highlights: ['Assisted with website content, functionality, and the online user experience'],
  },
]

export const education: EducationItem[] = [
  {
    school: 'Florida International University',
    credential: 'Bachelor of Science in Computer Science',
    location: 'Miami, FL',
    period: 'Expected Summer 2027',
    detail: 'Coursework in data structures, algorithms, computer architecture, and software development.',
    current: true,
  },
  {
    school: 'Miami Dade College',
    credential: 'Associate of Arts in Computer Science',
    location: 'Miami, FL',
    detail: 'Foundations in programming, mathematics, computer systems, and networking.',
  },
  {
    school: 'University of Miami',
    credential: 'Full Stack Web Development Bootcamp',
    location: 'Miami, FL',
    period: 'Jan 2022',
    detail: 'Six-month intensive program covering front-end and back-end development, JavaScript, databases, and APIs.',
  },
  {
    school: 'IBM Pre-Apprenticeship Program',
    credential: 'z/OS System Programming Certificate',
    location: 'Online',
    period: 'Jan 2023',
    detail: 'About 500 hours of technical training in IBM mainframe technologies and z/OS system programming.',
  },
  {
    school: 'Universidad Politécnica de La Habana',
    credential: 'Civil Engineering Studies',
    location: 'Havana, Cuba',
    period: 'Through Jan 2018',
    detail: 'About three years of undergraduate civil engineering coursework.',
  },
]

export const certifications: Certification[] = [
  { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', date: 'Jun 2020' },
  { name: 'Scientific Computing with Python', issuer: 'freeCodeCamp', date: 'Feb 2020' },
  { name: 'z/OS System Programming', issuer: 'IBM Pre-Apprenticeship', date: 'Jan 2023' },
]

export const languages: LanguageItem[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional proficiency' },
]
