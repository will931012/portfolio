export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'commerce'

/** Controls which placeholder frame is drawn until a real screenshot is added. */
export type ProjectPlatform = 'web' | 'mobile' | 'code'

export interface ProjectImage {
  /** Path relative to /public, e.g. "/projects/mlb.png". */
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  /** One-sentence summary shown on the project card. */
  tagline: string
  goal: string
  problem: string
  features: string[]
  /** Features that are designed but not built yet. Shown with a "Planned" label. */
  planned?: string[]
  /** Leave empty to show "Stack details coming soon". */
  stack: string[]
  categories: ProjectCategory[]
  platform: ProjectPlatform
  /** Short status badge, e.g. "Early stage". */
  status?: string
  /** Spans the full grid width on large screens. */
  featured?: boolean
  /** Listed under "More repositories" as a smaller card without a screenshot. */
  compact?: boolean
  /** Use null until a public URL exists — the UI shows a "coming soon" state. */
  links: {
    github: string | null
    demo: string | null
    /** Shown next to the live link, e.g. "Sign-in required". */
    demoNote?: string
  }
  /** Use null to show the placeholder frame. */
  image: ProjectImage | null
}

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  organization: string
  /** Optional, e.g. "2024 – Present". Hidden when omitted. */
  period?: string
  summary: string
  highlights: string[]
}

export interface EducationItem {
  school: string
  credential: string
  location?: string
  period?: string
  detail: string
  /** Highlights the degree currently in progress. */
  current?: boolean
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface LanguageItem {
  name: string
  level: string
}
