import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'

const footerLinks = {
  Services: [
    { label: 'Web Development', to: '/#services' },
    { label: 'Web Design', to: '/#services' },
    { label: 'UI/UX Design', to: '/#services' },
    { label: 'Mobile App Development', to: '/#services' },
    { label: 'No-Code Solutions', to: '/#services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/about' },
    { label: 'Contact Us', to: '/#contact' },
    { label: 'Privacy Policy', to: '/about' },
  ],
  Work: [
    { label: 'Case Studies', to: '/#work' },
    { label: 'Portfolio', to: '/#work' },
    { label: 'Testimonials', to: '/#work' },
  ],
  Resources: [
    { label: 'Blog', to: '/about' },
    { label: 'Design Tips', to: '/about' },
    { label: 'No-Code Guides', to: '/about' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-page">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-center">
          <Logo />
          <p className="text-xs font-medium uppercase tracking-widest text-gray-muted">
            Digital experiences. Built to perform.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:gap-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
