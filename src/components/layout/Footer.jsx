import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'
import { BOOKING_URL } from '../../data/booking'

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', href: BOOKING_URL },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const linkClass = 'text-sm text-gray-muted transition-colors hover:text-foreground'

export default function Footer() {
  return (
    <footer className="bg-page">
      <div className="section-container pb-12 pt-8 md:pb-16 md:pt-10">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-center">
          <Logo />
          <p className="text-xs font-medium uppercase tracking-widest text-gray-muted">
            Digital experiences. Built to perform.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 py-8">
          {companyLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-gray-muted">
            © {new Date().getFullYear()} Atahastra. All Rights Reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
