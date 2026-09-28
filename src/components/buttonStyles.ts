const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 [&_svg]:size-4 [&_svg]:shrink-0'

export const buttonStyles = {
  primary: `${base} bg-accent text-accent-ink shadow-[0_0_0_1px_rgb(138_219_227/0.4),0_8px_30px_-6px_rgb(92_203_214/0.55)] hover:bg-accent-soft hover:shadow-[0_0_0_1px_rgb(138_219_227/0.6),0_10px_40px_-6px_rgb(92_203_214/0.7)]`,
  secondary: `${base} border border-ink-600 bg-ink-900/60 text-paper backdrop-blur hover:border-mist-500 hover:bg-ink-850`,
  ghost: `${base} text-mist-300 hover:text-paper hover:bg-ink-850`,
} as const
