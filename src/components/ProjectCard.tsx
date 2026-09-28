import { ArrowUpRight } from 'lucide-react'
import { categoryLabels } from '../data/projects'
import type { Project } from '../types'
import { CardLinks, LiveBadge, StatusBadge } from './ProjectLinks'
import { ScreenshotFrame } from './ScreenshotFrame'
import { trackSpotlight } from './spotlight'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project, trigger: HTMLButtonElement) => void
}

const MAX_STACK_ON_CARD = 5

const cardFocusRing =
  'has-[.card-trigger:focus-visible]:outline-2 has-[.card-trigger:focus-visible]:outline-offset-4 has-[.card-trigger:focus-visible]:outline-accent'

const triggerClass =
  "card-trigger text-left after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none"

function CardMeta({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-500">
      {featured && <span className="text-accent">Featured ·</span>}
      {project.links.demo && (
        <>
          <LiveBadge />
          <span aria-hidden="true">·</span>
        </>
      )}
      <span>{project.categories.map((c) => categoryLabels[c]).join(' · ')}</span>
      {project.status && <StatusBadge status={project.status} />}
    </p>
  )
}

function StackChips({ stack, max }: { stack: string[]; max: number }) {
  const visible = stack.slice(0, max)
  const hidden = stack.length - visible.length

  return (
    <ul aria-label="Technology stack" className="flex flex-wrap gap-1.5">
      {visible.length === 0 ? (
        <li className="rounded-full border border-dashed border-ink-700 px-2.5 py-1 text-xs text-mist-500">
          Stack details coming soon
        </li>
      ) : (
        visible.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-ink-700 bg-ink-850 px-2.5 py-1 text-xs text-mist-300"
          >
            {tech}
          </li>
        ))
      )}
      {hidden > 0 && <li className="rounded-full px-1.5 py-1 text-xs text-mist-500">+{hidden} more</li>}
    </ul>
  )
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const featured = project.featured === true

  return (
    <article
      onPointerMove={trackSpotlight}
      className={`spotlight group relative flex h-full flex-col gap-2 rounded-2xl border border-ink-800 bg-ink-900/80 p-2.5 transition-[background-color,border-color,translate] duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:border-ink-600 hover:bg-ink-850 ${cardFocusRing} ${
        featured ? 'lg:flex-row lg:items-stretch lg:gap-0' : ''
      }`}
    >
      <ScreenshotFrame
        project={project}
        className={featured ? 'lg:aspect-auto lg:min-h-80 lg:w-[58%] lg:shrink-0' : ''}
      />

      <div className={`flex flex-1 flex-col px-3 pt-4 pb-3 ${featured ? 'lg:px-8 lg:py-7' : ''}`}>
        <CardMeta project={project} featured={featured} />

        <h3 className={`mt-3 font-semibold tracking-tight ${featured ? 'text-2xl' : 'text-xl'}`}>
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={(event) => onOpen(project, event.currentTarget)}
            className={triggerClass}
          >
            {project.title}
          </button>
        </h3>

        <p className="mt-3 leading-relaxed text-mist-400">{project.tagline}</p>

        <div className="mt-5">
          <StackChips stack={project.stack} max={MAX_STACK_ON_CARD} />
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-7">
          <p aria-hidden="true" className="flex items-center gap-1.5 text-sm font-medium text-accent">
            View project details
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
          <CardLinks project={project} />
        </div>
      </div>
    </article>
  )
}

/** Smaller card without a screenshot, used in the "More repositories" list. */
export function CompactProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      onPointerMove={trackSpotlight}
      className={`spotlight group relative flex h-full flex-col rounded-2xl border border-ink-800 bg-ink-900/80 p-5 transition-colors duration-300 hover:border-ink-600 hover:bg-ink-850 ${cardFocusRing}`}
    >
      <CardMeta project={project} />
      <h4 className="mt-3 text-lg font-semibold tracking-tight">
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={(event) => onOpen(project, event.currentTarget)}
          className={triggerClass}
        >
          {project.title}
        </button>
      </h4>
      <p className="mt-2 text-[15px] leading-relaxed text-mist-400">{project.tagline}</p>
      <div className="mt-4">
        <StackChips stack={project.stack} max={3} />
      </div>
      <div className="mt-auto pt-5">
        <CardLinks project={project} />
      </div>
    </article>
  )
}
