import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import { BOOKING_URL } from '../../data/booking'

const navLinks = [
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#process' },
  { label: 'About Us', to: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const linkClass = (to) => {
    const isAbout = to === '/about' && pathname === '/about'
    return `cursor-pointer text-sm transition-colors ${
      isAbout ? 'text-foreground' : 'text-gray-muted hover:text-foreground'
    }`
  }

  return (
    <header className="sticky top-0 z-50 bg-page/95 backdrop-blur-sm">
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <Logo size="lg" />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-page transition-opacity hover:opacity-90"
          >
            Schedule a Call
          </a>
        </nav>

        <button
          type="button"
          className="flex cursor-pointer flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="bg-page px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(link.to)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-foreground px-5 py-2.5 text-center text-sm font-medium text-page"
              onClick={() => setOpen(false)}
            >
              Schedule a Call
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
