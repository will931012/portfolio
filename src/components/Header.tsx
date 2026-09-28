import { Download, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Header() {
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      // Written directly to the DOM so scrolling doesn't re-render the header.
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
      setScrolled(window.scrollY > 8)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const onBreakpoint = () => desktop.matches && setMenuOpen(false)
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        aria-hidden="true"
        ref={progressRef}
        className="fixed inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent/40 via-accent to-accent-soft"
      />

      <div
        className={`mx-auto max-w-6xl rounded-[1.75rem] border transition-[background-color,border-color,box-shadow] duration-300 ${
          solid
            ? 'border-ink-700/70 bg-ink-900/70 shadow-xl shadow-black/30 backdrop-blur-xl'
            : 'border-transparent'
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-4 pr-2 pl-5">
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-full text-[15px] font-semibold tracking-tight text-paper"
            onClick={() => setMenuOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-accent-soft to-accent font-mono text-[11px] font-semibold text-accent-ink"
            >
              WP
            </span>
            {profile.shortName}
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-0.5 rounded-full border border-ink-800 bg-ink-950/40 p-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                        isActive
                          ? 'bg-ink-800 text-paper shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]'
                          : 'text-mist-400 hover:text-paper'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-white md:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Résumé
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-paper hover:bg-ink-800 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Primary"
          hidden={!menuOpen}
          className="px-5 pt-1 pb-5 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-ink-800 py-3.5 text-lg ${
                    active === item.id ? 'text-paper' : 'text-mist-300'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  )}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink-950"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Résumé
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
