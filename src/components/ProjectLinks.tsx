import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { GitHubIcon } from './BrandIcons'

/**
 * Small "Live site" / "Code" links for cards. They sit above the card's stretched
 * details button (relative z-10) so they stay independently clickable.
 */
export function CardLinks({ project }: { project: Project }) {
  const { demo, github, demoNote } = project.links
  if (!demo && !github) return null

  const linkClass =
    'relative z-10 inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-3 py-1.5 text-xs text-mist-300 transition-colors hover:border-mist-500 hover:text-paper [&_svg]:size-3.5'

  return (
    <div className="flex flex-wrap gap-2">
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
          Live site
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only">
            for {project.title}
            {demoNote ? ` (${demoNote.toLowerCase()})` : ''}, opens in a new tab
          </span>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className={linkClass}>
          <GitHubIcon />
          Code
          <span className="sr-only">for {project.title} on GitHub, opens in a new tab</span>
        </a>
      )}
    </div>
  )
}

export function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-accent">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      Live
    </span>
  )
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full border border-ink-600 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist-400">
      {status}
    </span>
  )
}
