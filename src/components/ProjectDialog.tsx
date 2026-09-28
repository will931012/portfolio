import { ArrowUpRight, Check, X } from 'lucide-react'
import { useEffect, useRef, type ReactNode } from 'react'
import { categoryLabels } from '../data/projects'
import type { Project } from '../types'
import { GitHubIcon } from './BrandIcons'
import { LiveBadge, StatusBadge } from './ProjectLinks'
import { ScreenshotFrame } from './ScreenshotFrame'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

/**
 * Uses the native <dialog> element: showModal() makes the rest of the page inert,
 * traps focus, and closes on Escape.
 */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        // Clicks on the dialog element itself land outside the panel.
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
      className="project-dialog fixed inset-0 m-0 size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-transparent p-3 text-paper sm:p-8"
    >
      {project && (
        <div className="mx-auto max-w-3xl animate-dialog-in rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl shadow-black/50 sm:my-8">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-2xl border-b border-ink-800 bg-ink-900/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-5">
            <div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-500">
                {project.links.demo && (
                  <>
                    <LiveBadge />
                    <span aria-hidden="true">·</span>
                  </>
                )}
                <span>{project.categories.map((c) => categoryLabels[c]).join(' · ')}</span>
                {project.status && <StatusBadge status={project.status} />}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl"
              >
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="-mr-2 inline-flex size-10 shrink-0 items-center justify-center rounded-full text-mist-300 transition-colors hover:bg-ink-800 hover:text-paper"
            >
              <span className="sr-only">Close project details</span>
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 pt-6 pb-8 sm:px-8">
            <p className="text-lg leading-relaxed text-mist-300">{project.tagline}</p>

            <ScreenshotFrame project={project} className="mt-6" />

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <DetailBlock title="Goal">
                <p className="leading-relaxed text-mist-400">{project.goal}</p>
              </DetailBlock>
              <DetailBlock title="Problem it solves">
                <p className="leading-relaxed text-mist-400">{project.problem}</p>
              </DetailBlock>
            </div>

            <DetailBlock title="Core features" className="mt-10">
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-relaxed text-mist-300">
                    <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            {project.planned && project.planned.length > 0 && (
              <DetailBlock title="In progress" className="mt-10">
                <ul className="space-y-3">
                  {project.planned.map((item) => (
                    <li key={item} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 leading-relaxed text-mist-400">
                      <span className="rounded-full border border-ink-600 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist-400">
                        Planned
                      </span>
                      <span className="min-w-0 flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            )}

            <DetailBlock title="Tech stack" className="mt-10">
              {project.stack.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-ink-700 bg-ink-850 px-3 py-1.5 text-sm text-mist-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-mist-500">Stack details coming soon.</p>
              )}
            </DetailBlock>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-ink-800 pt-6">
              <ProjectLink
                href={project.links.github}
                label="View source on GitHub"
                pendingLabel="Source code coming soon"
                icon={<GitHubIcon className="size-4" />}
              />
              <ProjectLink
                href={project.links.demo}
                label={project.links.demoNote ? `Visit live site · ${project.links.demoNote}` : 'Visit live site'}
                pendingLabel="Live demo coming soon"
                icon={<ArrowUpRight className="size-4" aria-hidden="true" />}
              />
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

function DetailBlock({
  title,
  className = '',
  children,
}: {
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <section className={className}>
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">{title}</h3>
      {children}
    </section>
  )
}

function ProjectLink({
  href,
  label,
  pendingLabel,
  icon,
}: {
  href: string | null
  label: string
  pendingLabel: string
  icon: ReactNode
}) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-ink-700 px-4 py-2.5 text-sm text-mist-500">
        {icon}
        {pendingLabel}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-4 py-2.5 text-sm text-paper transition-colors hover:border-mist-500 hover:bg-ink-850"
    >
      {icon}
      {label}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
