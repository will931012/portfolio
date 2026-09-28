import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-mist-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {profile.name}. Built with React, TypeScript, and Tailwind
          CSS.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 self-start rounded text-mist-400 hover:text-paper sm:self-auto"
        >
          Back to top
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
