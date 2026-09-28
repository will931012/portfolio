import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile, skillGroups } from '../data/profile'
import { projects } from '../data/projects'
import { buttonStyles } from './buttonStyles'
import { Reveal } from './Reveal'

const facts = [
  { label: 'Studying', value: 'B.S. Computer Science, FIU' },
  { label: 'Graduating', value: 'Summer 2027' },
  { label: 'Building', value: 'Full-stack web, iOS, and applied ML' },
  { label: 'Based in', value: profile.location },
]

const liveCount = projects.filter((p) => p.links.demo).length
const showcase = ['imparables-plumbing', 'jue-church', 'compassion-and-love-pos']
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p) => p?.image != null)

// Technical groups only; the people-skills group doesn't belong in a tech strip.
const allSkills = skillGroups.slice(0, 4).flatMap((group) => group.skills)

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44"
    >
      {/* Atmosphere */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-[-12%] h-[38rem] w-[38rem] rounded-full bg-accent/[0.13] blur-[110px] motion-safe:animate-aurora" />
        <div className="absolute top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#3a64d8]/[0.12] blur-[120px] motion-safe:animate-aurora [animation-delay:-9s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-ink-700 bg-ink-900/60 px-3.5 py-1.5 font-mono text-xs text-mist-300 backdrop-blur">
                <span aria-hidden="true" className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Open to internships &amp; entry-level roles
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 id="hero-heading" className="mt-8 text-lg font-medium text-mist-300 sm:text-xl">
                Hi, I’m {profile.name}
              </h1>
              <p className="mt-4 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4.1rem]">
                <span className="text-fade">I build practical software for </span>
                <span className="text-gradient">real people and businesses.</span>
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist-400">{profile.intro}</p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projects" className={buttonStyles.primary}>
                  View Projects
                  <ArrowRight aria-hidden="true" />
                </a>
                <a href={profile.resume} download className={buttonStyles.secondary}>
                  <Download aria-hidden="true" />
                  Download Résumé
                </a>
                <a href="#contact" className={buttonStyles.ghost}>
                  <Mail aria-hidden="true" />
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <Showcase />
          </Reveal>
        </div>

        <Reveal delay={240}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 lg:mt-24 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-ink-950/90 px-5 py-5 backdrop-blur sm:px-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[15px] text-mist-300">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Tech marquee — decorative; the full list lives in the Skills section. */}
      <div aria-hidden="true" className="fade-x mt-14 overflow-hidden">
        <ul className="flex w-max gap-3 motion-safe:animate-marquee hover:[animation-play-state:paused]">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <li
              key={`${skill}-${i}`}
              className="rounded-full border border-ink-800 bg-ink-900/60 px-4 py-2 font-mono text-xs whitespace-nowrap text-mist-400"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Fanned stack of real project screenshots. Decorative; the Projects section describes each one. */
function Showcase() {
  const positions = [
    'left-0 top-10 w-[78%] -rotate-[5deg] opacity-80',
    'right-0 top-0 w-[78%] rotate-[4deg] opacity-90',
    'left-[11%] top-[5.5rem] w-[80%] rotate-0 sm:top-28',
  ]

  return (
    <div aria-hidden="true" className="relative mx-auto h-[19rem] max-w-xl [perspective:1400px] sm:h-[25rem]">
      {showcase.map((project, i) => (
        <div
          key={project!.slug}
          className={`absolute ${positions[i]} motion-safe:animate-float`}
          style={{ animationDelay: `${i * -3}s` }}
        >
          <div className="overflow-hidden rounded-xl border border-ink-700 bg-ink-900 shadow-2xl shadow-black/60 transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-1.5 border-b border-ink-800 px-3 py-2">
              <span className="size-2 rounded-full bg-ink-600" />
              <span className="size-2 rounded-full bg-ink-600" />
              <span className="size-2 rounded-full bg-ink-600" />
              <span className="ml-2 truncate font-mono text-[10px] text-mist-500">
                {project!.links.demo?.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </div>
            <img
              src={project!.image!.src}
              alt=""
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </div>
      ))}

      <p className="absolute -bottom-2 left-2 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/80 px-3.5 py-2 font-mono text-xs text-mist-300 shadow-lg shadow-black/40 backdrop-blur sm:bottom-0">
        <span className="size-1.5 rounded-full bg-accent" />
        {liveCount} projects live online
      </p>
    </div>
  )
}
