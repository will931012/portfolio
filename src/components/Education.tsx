import type { ReactNode } from 'react'
import { Award, Download, ExternalLink, GraduationCap, Languages } from 'lucide-react'
import { certifications, education, languages, profile } from '../data/profile'
import { buttonStyles } from './buttonStyles'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { trackSpotlight } from './spotlight'

export function Education() {
  return (
    <Section
      id="education"
      index="04"
      eyebrow="Education & Résumé"
      title="Always learning, formally and on the job"
      intro="A Computer Science degree in progress at FIU, built on an associate degree, a full-stack bootcamp, mainframe training with IBM, and three years of engineering studies in Havana."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <Reveal>
          <ol className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/70">
            {education.map((item) => (
              <li
                key={item.school}
                className="flex gap-4 border-b border-ink-800 p-5 last:border-b-0 sm:gap-5 sm:p-6"
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl border ${
                    item.current
                      ? 'border-accent/40 bg-accent/10 text-accent'
                      : 'border-ink-700 bg-ink-850 text-mist-400'
                  }`}
                >
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-semibold tracking-tight text-paper">{item.school}</h3>
                    {item.period && (
                      <p
                        className={`shrink-0 font-mono text-xs ${
                          item.current ? 'text-accent' : 'text-mist-500'
                        }`}
                      >
                        {item.period}
                      </p>
                    )}
                  </div>
                  <p className="mt-0.5 text-[15px] text-mist-300">
                    {item.credential}
                    {item.location && <span className="text-mist-500"> · {item.location}</span>}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={60}>
            <ResumeCard />
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard icon={<Award className="size-[18px]" aria-hidden="true" />} title="Certifications">
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert.name}>
                      <p className="text-sm text-mist-300">{cert.name}</p>
                      <p className="font-mono text-xs text-mist-500">
                        {cert.issuer} · {cert.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={<Languages className="size-[18px]" aria-hidden="true" />} title="Languages">
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-mist-300">{lang.name}</span>
                      <span className="font-mono text-xs text-mist-500">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function ResumeCard() {
  return (
    <article
      onPointerMove={trackSpotlight}
      className="spotlight group relative flex gap-5 overflow-hidden rounded-2xl border border-ink-700 bg-gradient-to-br from-ink-850 to-ink-900 p-5 sm:p-6"
    >
      <a
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative hidden w-28 shrink-0 overflow-hidden rounded-md border border-ink-600 bg-white shadow-lg shadow-black/40 sm:block"
      >
        <img
          src={profile.resumePreview}
          alt=""
          loading="lazy"
          className="aspect-[8.5/11] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </a>
      <div className="flex min-w-0 flex-col">
        <h3 className="font-semibold tracking-tight text-paper">Résumé</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mist-400">
          Experience, projects, education, and skills on two pages.
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <a href={profile.resume} download className={`${buttonStyles.primary} px-4 py-2.5`}>
            <Download aria-hidden="true" />
            Download PDF
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className={`${buttonStyles.secondary} px-4 py-2.5`}
          >
            <ExternalLink aria-hidden="true" />
            View
            <span className="sr-only">résumé (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <article className="h-full rounded-2xl border border-ink-800 bg-ink-900/70 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2.5 text-accent">
        {icon}
        <h3 className="font-semibold tracking-tight text-paper">{title}</h3>
      </div>
      {children}
    </article>
  )
}
