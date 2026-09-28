import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { buttonStyles } from './buttonStyles'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Contact() {
  const mailto = `mailto:${profile.email}`

  return (
    <Section
      id="contact"
      index="05"
      eyebrow="Contact"
      title="Let’s talk"
      intro={`I’m looking for ${profile.lookingFor}. Email is the fastest way to reach me.`}
    >
      <div className="relative isolate overflow-hidden rounded-3xl border border-ink-700/80 bg-ink-900/70 p-6 shadow-2xl shadow-black/40 sm:p-10 lg:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent/[0.14] blur-[100px] motion-safe:animate-aurora" />
          <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#3a64d8]/[0.12] blur-[110px]" />
          <div className="bg-grid absolute inset-0 opacity-60" />
        </div>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist-500">Email</p>
          <a
            href={mailto}
            className="group mt-3 inline-flex max-w-full items-center gap-3 rounded text-2xl font-semibold tracking-tight break-all text-paper transition-colors hover:text-accent sm:text-3xl"
          >
            <span className="text-gradient">{profile.email}</span>
            <ArrowUpRight
              className="size-6 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto} className={buttonStyles.primary}>
              <Mail aria-hidden="true" />
              Send an email
            </a>
            <a href={profile.resume} download className={buttonStyles.secondary}>
              <FileText aria-hidden="true" />
              Download Résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="divide-y divide-ink-800 border-y border-ink-800">
            <ContactRow
              icon={<Mail className="size-5" aria-hidden="true" />}
              label="Email"
              value="Send a message"
              href={mailto}
            />
            <ContactRow
              icon={<LinkedInIcon className="size-5" />}
              label="LinkedIn"
              value="View profile"
              href={profile.linkedin}
              external
            />
            <ContactRow
              icon={<GitHubIcon className="size-5" />}
              label="GitHub"
              value="View repositories"
              href={profile.github}
              external
            />
            <ContactRow
              icon={<FileText className="size-5" aria-hidden="true" />}
              label="Résumé"
              value="Download PDF"
              href={profile.resume}
              download
            />
          </ul>
        </Reveal>
      </div>
      </div>
    </Section>
  )
}

interface ContactRowProps {
  icon: ReactNode
  label: string
  value: string
  href: string | null
  external?: boolean
  download?: boolean
}

function ContactRow({ icon, label, value, href, external, download }: ContactRowProps) {
  if (!href) {
    return (
      <li className="flex items-center gap-4 px-1 py-5 text-mist-500">
        <span>{icon}</span>
        <span className="flex-1">{label}</span>
        <span className="font-mono text-xs uppercase tracking-[0.14em]">Coming soon</span>
      </li>
    )
  }

  return (
    <li>
      <a
        href={href}
        download={download || undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className="group flex items-center gap-4 px-1 py-5 text-paper transition-colors hover:text-accent"
      >
        <span className="text-mist-400 transition-colors group-hover:text-accent">{icon}</span>
        <span className="flex-1">{label}</span>
        <span className="text-sm text-mist-400 transition-colors group-hover:text-paper">{value}</span>
        <ArrowUpRight
          className="size-4 shrink-0 text-mist-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </li>
  )
}
