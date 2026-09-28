import { experience } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { trackSpotlight } from './spotlight'

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title="Where I’ve been working"
      intro="Freelance web development for local businesses, IT support at a college, and three and a half years running a store and its online sales."
    >
      <div className="relative pl-8 sm:pl-12">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent via-ink-700 to-transparent sm:left-[11px]"
        />
        <ol className="space-y-5">
        {experience.map((item, i) => (
          <li key={`${item.role}-${item.organization}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-8 -left-8 grid size-[15px] place-items-center rounded-full border border-accent/60 bg-ink-950 sm:-left-12 sm:size-[23px]"
            >
              <span className="size-[5px] rounded-full bg-accent sm:size-[7px]" />
            </span>
            <Reveal delay={i * 60}>
              <div
                onPointerMove={trackSpotlight}
                className="spotlight relative grid gap-4 rounded-2xl border border-ink-800 bg-ink-900/70 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                  <p className="mt-1.5 text-mist-400">
                    {item.organization}
                    {item.period && (
                      <span className="font-mono text-sm text-mist-500"> · {item.period}</span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed text-mist-300">{item.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-relaxed text-mist-400">
                        <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  )
}
