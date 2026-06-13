import { useTheme } from '../../context/ThemeContext'

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative h-9 w-[5.25rem] shrink-0 rounded-full border border-border bg-elevated p-1 transition-colors hover:border-foreground/30"
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5">
        <SunIcon
          className={`h-4 w-4 transition-colors ${
            isDark ? 'text-gray-muted' : 'text-transparent'
          }`}
        />
        <MoonIcon
          className={`h-4 w-4 transition-colors ${
            isDark ? 'text-transparent' : 'text-gray-muted'
          }`}
        />
      </span>

      <span
        className={`absolute top-1 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-page shadow-md transition-[left] duration-200 ease-out ${
          isDark ? 'left-[calc(100%-2rem)]' : 'left-1'
        }`}
      >
        {isDark ? (
          <MoonIcon className="h-3.5 w-3.5" />
        ) : (
          <SunIcon className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  )
}
