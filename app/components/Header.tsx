'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
  { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
  { label: 'Bathroom Modernization', href: '/services/bathroom-modernization' },
  { label: 'Whole-Home Renovation', href: '/services/whole-home-renovation' },
  { label: 'ADU Construction', href: '/services/adu-construction' },
  { label: 'Deck Construction', href: '/services/deck-construction' },
  { label: 'Exterior Restoration', href: '/services/exterior-restoration' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal shadow-lg py-3' : 'bg-charcoal/90 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Alphabet Construction and Remodeling"
            width={180}
            height={60}
            className="h-12 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-white/80 hover:text-amber font-body text-sm font-medium transition-colors duration-200 tracking-wide"
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1.5 text-white/80 hover:text-amber font-body text-sm font-medium transition-colors duration-200 tracking-wide"
              aria-haspopup="true"
            >
              Services
              <svg
                className="w-3.5 h-3.5 text-white/50 group-hover:text-amber transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <div className="bg-charcoal border border-white/10 shadow-card-hover rounded-sm min-w-[240px] py-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 text-white/70 hover:text-amber hover:bg-white/5 font-body text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="text-white/80 hover:text-amber font-body text-sm font-medium transition-colors duration-200 tracking-wide"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-white/80 hover:text-amber font-body text-sm font-medium transition-colors duration-200 tracking-wide"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-amber font-body text-sm font-medium transition-colors duration-200 tracking-wide"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:4085394747"
            className="text-white font-heading font-semibold text-sm tracking-wide hover:text-amber transition-colors"
          >
            (408) 539-4747
          </a>
          <Link href="/contact" className="btn-primary text-xs py-3 px-5">
            Free Estimate
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 px-6 py-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-white/80 hover:text-amber font-body text-sm border-b border-white/10"
          >
            Home
          </Link>

          <div className="border-b border-white/10">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-3 text-white/80 hover:text-amber font-body text-sm"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 text-white/50 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pb-2 pl-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-white/60 hover:text-amber font-body text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-amber font-body text-sm border-b border-white/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:4085394747"
            className="block mt-4 text-white font-heading font-semibold text-sm"
          >
            (408) 539-4747
          </a>
          <Link href="/contact" className="btn-primary block text-center mt-4 text-xs" onClick={() => setMenuOpen(false)}>
            Free Estimate
          </Link>
        </div>
      )}
    </header>
  )
}
