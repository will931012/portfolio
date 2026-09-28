import type { Project } from '../types'

interface ScreenshotFrameProps {
  project: Pick<Project, 'title' | 'platform' | 'image'>
  className?: string
}

/**
 * Shows the project's screenshot, or a neutral wireframe placeholder until one is added.
 * Web projects get a browser window; mobile projects get a phone.
 */
export function ScreenshotFrame({ project, className = '' }: ScreenshotFrameProps) {
  const { image, platform } = project

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-ink-700/80 bg-ink-850 ${className}`}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : platform === 'mobile' ? (
        <PhonePlaceholder />
      ) : platform === 'code' ? (
        <TerminalPlaceholder />
      ) : (
        <BrowserPlaceholder />
      )}
    </div>
  )
}

function PlaceholderLabel({ text = 'Screenshot coming soon' }: { text?: string }) {
  return (
    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-ink-700 bg-ink-900/90 px-3 py-1 font-mono text-[11px] whitespace-nowrap text-mist-400">
      {text}
    </span>
  )
}

function BrowserPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
      <div
        aria-hidden="true"
        className="flex flex-1 flex-col overflow-hidden rounded-lg border border-ink-700 bg-ink-900 transition-transform duration-500 group-hover:-translate-y-1"
      >
        <div className="flex items-center gap-1.5 border-b border-ink-700 px-3 py-2.5">
          <span className="size-2 rounded-full bg-ink-600" />
          <span className="size-2 rounded-full bg-ink-600" />
          <span className="size-2 rounded-full bg-ink-600" />
          <span className="ml-3 h-2 w-1/3 rounded-full bg-ink-800" />
        </div>
        <div className="flex flex-1 gap-3 p-3">
          <div className="hidden w-1/5 flex-col gap-2 sm:flex">
            <span className="h-2 w-3/4 rounded-full bg-ink-700" />
            <span className="h-2 w-1/2 rounded-full bg-ink-800" />
            <span className="h-2 w-2/3 rounded-full bg-ink-800" />
            <span className="h-2 w-1/2 rounded-full bg-ink-800" />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <span className="h-2.5 w-2/5 rounded-full bg-ink-700" />
            <div className="grid grid-cols-3 gap-2">
              <span className="h-10 rounded-md bg-ink-800" />
              <span className="h-10 rounded-md bg-ink-800" />
              <span className="h-10 rounded-md border border-accent/25 bg-accent/10" />
            </div>
            <span className="flex-1 rounded-md bg-ink-800/70" />
          </div>
        </div>
      </div>
      <PlaceholderLabel />
    </div>
  )
}

function PhonePlaceholder() {
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-5 sm:pt-7">
      <div
        aria-hidden="true"
        className="flex h-[118%] w-[34%] max-w-44 flex-col gap-2 rounded-[1.4rem] border border-ink-700 bg-ink-900 p-2.5 transition-transform duration-500 group-hover:-translate-y-1"
      >
        <span className="mx-auto h-1.5 w-1/3 rounded-full bg-ink-700" />
        <span className="mt-2 h-2 w-1/2 rounded-full bg-ink-700" />
        <span className="h-12 rounded-lg border border-accent/25 bg-accent/10" />
        <span className="h-7 rounded-lg bg-ink-800" />
        <span className="h-7 rounded-lg bg-ink-800" />
        <span className="h-7 rounded-lg bg-ink-800" />
      </div>
      <PlaceholderLabel />
    </div>
  )
}

function TerminalPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
      <div
        aria-hidden="true"
        className="flex flex-1 flex-col overflow-hidden rounded-lg border border-ink-700 bg-ink-950 font-mono text-[11px] transition-transform duration-500 group-hover:-translate-y-1 sm:text-xs"
      >
        <div className="flex items-center gap-1.5 border-b border-ink-700 px-3 py-2.5">
          <span className="size-2 rounded-full bg-ink-600" />
          <span className="size-2 rounded-full bg-ink-600" />
          <span className="size-2 rounded-full bg-ink-600" />
        </div>
        <div className="flex flex-col gap-2 p-4 text-mist-500">
          <span>
            <span className="text-accent">$</span> node normalizer.js
          </span>
          <span className="h-2 w-2/3 rounded-full bg-ink-800" />
          <span className="h-2 w-1/2 rounded-full bg-ink-800" />
          <span className="h-2 w-3/5 rounded-full bg-ink-800" />
        </div>
      </div>
      <PlaceholderLabel text="Command-line tool" />
    </div>
  )
}
