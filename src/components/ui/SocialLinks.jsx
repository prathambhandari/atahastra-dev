import { socialLinks } from '../../data/socialLinks'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="cursor-pointer text-gray-muted transition-colors hover:text-foreground"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d={link.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
