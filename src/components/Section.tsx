import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="relative py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-ink-700 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              <span className="text-mist-500">{index}</span>
              <span aria-hidden="true" className="h-3 w-px bg-ink-600" />
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="text-fade mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl"
            >
              {title}
            </h2>
            {intro && <p className="mt-4 text-lg leading-relaxed text-mist-400">{intro}</p>}
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
