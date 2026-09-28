import {
  BrainCircuit,
  Cloud,
  Cpu,
  LayoutTemplate,
  Server,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '../data/profile'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { trackSpotlight } from './spotlight'

const icons: Record<string, LucideIcon> = {
  Frontend: LayoutTemplate,
  'Backend & Data': Server,
  'Mobile & ML': BrainCircuit,
  'Platforms & Tools': Cloud,
  'IT & Systems': Cpu,
  'Working with People': Users,
}

const TOP_N = 10

/** Counts how many projects list each technology in their stack. */
const usage = (() => {
  const byTech = new Map<string, string[]>()
  for (const project of projects) {
    for (const tech of project.stack) {
      byTech.set(tech, [...(byTech.get(tech) ?? []), project.title])
    }
  }
  return [...byTech.entries()]
    .map(([tech, usedIn]) => ({ tech, usedIn }))
    .sort((a, b) => b.usedIn.length - a.usedIn.length || a.tech.localeCompare(b.tech))
    .slice(0, TOP_N)
})()

const maxCount = Math.max(...usage.map((u) => u.usedIn.length))

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The tools I reach for"
      intro="The languages, frameworks, and services I use to take a project from the first commit to a deployed product — plus the support and people skills that come from years of working with customers and clients."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-3 lg:row-start-1">
          <UsageChart />
        </Reveal>

        {skillGroups.map((group, i) => {
          const Icon = icons[group.title] ?? Wrench
          return (
            <Reveal key={group.title} delay={(i % 2) * 60}>
              <article
                onPointerMove={trackSpotlight}
                className="spotlight relative flex h-full flex-col rounded-2xl border border-ink-800 bg-ink-900/70 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-ink-700 bg-gradient-to-b from-ink-800 to-ink-900 text-accent">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist-500">{group.description}</p>
                <ul aria-label={`${group.title} skills`} className="mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-ink-700 bg-ink-850 px-2.5 py-1 text-[13px] text-mist-300 transition-colors hover:border-accent/50 hover:text-paper"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/**
 * Ranked horizontal bars: one series, so one color and no legend. Each row shows
 * its value; hovering or focusing a row lists the projects behind the number.
 */
function UsageChart() {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink-800 bg-gradient-to-b from-ink-900 to-ink-950 p-6">
      <figcaption>
        <h3 className="text-base font-semibold tracking-tight">Most used in my projects</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mist-500">
          How many of the {projects.length} projects on this page use each technology.
        </p>
      </figcaption>

      <ol className="mt-6 flex flex-col gap-4">
        {usage.map(({ tech, usedIn }) => {
          const count = usedIn.length
          return (
            <li
              key={tech}
              tabIndex={0}
              className="group relative rounded-md outline-offset-4"
            >
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-mist-300">{tech}</span>
                <span className="font-mono text-xs text-mist-400 tabular-nums">
                  {count}
                  <span className="sr-only"> projects: {usedIn.join(', ')}</span>
                </span>
              </div>
              <div aria-hidden="true" className="mt-1.5 h-2 rounded-r-[4px] bg-ink-800">
                <div
                  className="h-full rounded-r-[4px] bg-accent transition-[filter] group-hover:brightness-110"
                  style={{ width: `${(count / maxCount) * 100}%` }}
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none invisible absolute top-full right-0 z-20 mt-2 w-64 rounded-xl border border-ink-700 bg-ink-850 p-3 text-xs opacity-0 shadow-xl shadow-black/50 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100"
              >
                <p className="font-medium text-paper">
                  {tech} · {count} {count === 1 ? 'project' : 'projects'}
                </p>
                <ul className="mt-1.5 space-y-0.5 text-mist-400">
                  {usedIn.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="mt-auto pt-6 text-xs leading-relaxed text-mist-500">
        Hover or focus a bar to see which projects use it.
      </p>
    </figure>
  )
}
