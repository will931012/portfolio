import { ArrowUpRight } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { categoryLabels, projects } from '../data/projects'
import type { Project, ProjectCategory } from '../types'
import { GitHubIcon } from './BrandIcons'
import { CompactProjectCard, ProjectCard } from './ProjectCard'
import { ProjectDialog } from './ProjectDialog'
import { Reveal } from './Reveal'
import { Section } from './Section'

type Filter = 'all' | 'live' | ProjectCategory

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'live', label: 'Live sites' },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((value) => ({
    value,
    label: categoryLabels[value],
  })),
]

function matches(project: Project, filter: Filter) {
  if (filter === 'all') return true
  if (filter === 'live') return project.links.demo !== null
  return project.categories.includes(filter)
}

const countFor = (filter: Filter) => projects.filter((p) => matches(p, filter)).length

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const visible = projects.filter((p) => matches(p, filter))
  const main = visible.filter((p) => !p.compact)
  const more = visible.filter((p) => p.compact)

  const openProject = useCallback((project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelected(project)
  }, [])

  const closeProject = useCallback(() => {
    setSelected(null)
    // Return focus to the card that opened the dialog.
    triggerRef.current?.focus()
  }, [])

  return (
    <Section
      id="projects"
      index="01"
      eyebrow="Projects"
      title="Software built for real problems"
      intro="Live sites for local businesses and organizations, store tools I use every day, and the repositories behind them. Select a project to see the goal, the problem it solves, and how it’s built."
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter projects"
          className="flex flex-wrap gap-1.5 rounded-3xl border border-ink-800 bg-ink-900/60 p-1.5 backdrop-blur sm:rounded-full"
        >
          {FILTERS.map((option) => {
            const active = filter === option.value
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(option.value)}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  active
                    ? 'bg-ink-800 text-paper shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]'
                    : 'text-mist-400 hover:text-paper'
                }`}
              >
                {option.label}
                <span className={`font-mono text-xs ${active ? 'text-accent' : 'text-mist-500'}`}>
                  {countFor(option.value)}
                </span>
              </button>
            )
          })}
        </div>
        <p aria-live="polite" className="shrink-0 font-mono text-xs text-mist-500">
          Showing {visible.length} of {projects.length} projects
        </p>
      </div>

      {main.length > 0 && (
        <ul className="mt-8 grid gap-5 lg:grid-cols-2">
          {main.map((project, i) => (
            <li key={project.slug} className={project.featured ? 'lg:col-span-2' : undefined}>
              <Reveal className="h-full" delay={Math.min(i, 3) * 60}>
                <ProjectCard project={project} onOpen={openProject} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}

      {more.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-mist-400">
              More repositories
            </h3>
          </Reveal>
          <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {more.map((project, i) => (
              <li key={project.slug}>
                <Reveal className="h-full" delay={i * 60}>
                  <CompactProjectCard project={project} onOpen={openProject} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      {profile.github && (
        <Reveal>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group mt-12 inline-flex items-center gap-2.5 rounded-full text-sm text-mist-300 transition-colors hover:text-paper"
          >
            <GitHubIcon className="size-4" />
            See everything on GitHub
            <ArrowUpRight
              className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      )}

      <ProjectDialog project={selected} onClose={closeProject} />
    </Section>
  )
}
