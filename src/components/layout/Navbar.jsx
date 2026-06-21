import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import { BOOKING_URL } from '../../data/booking'
import { products } from '../../data/products'

const navLinks = [
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#process' },
  { label: 'About Us', to: '/about' },
]

function ChevronDown({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [productsVisible, setProductsVisible] = useState(false)
  const [productsClosing, setProductsClosing] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const { pathname } = useLocation()

  const closeProductsDropdown = () => {
    if (!productsOpen && !productsVisible) return
    setProductsOpen(false)
    setProductsClosing(true)
  }

  const toggleProductsDropdown = () => {
    if (productsOpen) {
      closeProductsDropdown()
      return
    }
    setProductsClosing(false)
    setProductsVisible(true)
    setProductsOpen(true)
  }

  const linkClass = (to) => {
    const isAbout = to === '/about' && pathname === '/about'
    return `cursor-pointer text-sm transition-colors ${
      isAbout ? 'text-foreground' : 'text-gray-muted hover:text-foreground'
    }`
  }

  useEffect(() => {
    closeProductsDropdown()
    setMobileProductsOpen(false)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!productsClosing) return
    const timer = setTimeout(() => {
      setProductsVisible(false)
      setProductsClosing(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [productsClosing])

  useEffect(() => {
    if (!productsOpen) return

    const handleClickOutside = (event) => {
      const target = event.target
      if (toggleRef.current?.contains(target) || panelRef.current?.contains(target)) return
      closeProductsDropdown()
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeProductsDropdown()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [productsOpen])

  return (
    <header className="relative sticky top-0 z-50 bg-page/95 backdrop-blur-sm">
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <Logo size="lg" />

        <nav className="hidden items-center gap-8 md:flex">
          <div ref={toggleRef}>
            <button
              type="button"
              onClick={toggleProductsDropdown}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className={`flex cursor-pointer items-center gap-1.5 text-sm transition-colors ${
                productsOpen ? 'text-foreground' : 'text-gray-muted hover:text-foreground'
              }`}
            >
              Our Products
              <ChevronDown open={productsOpen} />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(link.to)}
              onClick={closeProductsDropdown}
            >
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
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {productsVisible && (
        <div
          ref={panelRef}
          className={`absolute inset-x-0 top-full overflow-hidden bg-page ${
            productsClosing ? 'products-dropdown-closing' : 'products-dropdown'
          }`}
        >
          <div className="section-container">
            <div className="border-b border-accent/35 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="py-8 md:py-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-muted">Our Products</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <a
                      key={product.href}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeProductsDropdown}
                      className="group relative block overflow-hidden rounded-2xl border border-white/5"
                    >
                      <img
                        src="/hero.png"
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover brightness-[0.35] saturate-75 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/80" />
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-black/60 to-black/90" />

                      <div className="relative z-10 p-6">
                        <h3 className="text-base font-bold text-foreground group-hover:text-accent">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-muted">{product.description}</p>
                        <span className="mt-4 inline-block text-sm text-accent">mysimpleresume.com</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t border-border bg-page px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((current) => !current)}
                aria-expanded={mobileProductsOpen}
                className="flex w-full cursor-pointer items-center justify-between text-sm text-gray-muted transition-colors hover:text-foreground"
              >
                Our Products
                <ChevronDown open={mobileProductsOpen} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-3 space-y-3 border-l border-border pl-4">
                  {products.map((product) => (
                    <a
                      key={product.href}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMenuOpen(false)
                        setMobileProductsOpen(false)
                      }}
                      className="block cursor-pointer"
                    >
                      <span className="text-sm font-medium text-foreground">{product.name}</span>
                      <span className="mt-1 block text-xs text-gray-muted">mysimpleresume.com</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(link.to)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-foreground px-5 py-2.5 text-center text-sm font-medium text-page"
              onClick={() => setMenuOpen(false)}
            >
              Schedule a Call
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
