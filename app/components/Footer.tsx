import Image from 'next/image'
import Link from 'next/link'

const services = [
  'Kitchen Remodeling',
  'Bathroom Modernization',
  'Whole-Home Renovation',
  'ADU Construction',
  'Deck Construction',
  'Exterior Restoration',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Alphabet Construction and Remodeling"
              width={160}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Bay Area's trusted remodeling contractor. Licensed, insured, and built on honest craftsmanship.
            </p>
            <div className="flex gap-3 mb-5">
              <span className="text-amber text-sm">★★★★★</span>
              <span className="text-white/50 text-sm">5.0 · 18 Google Reviews</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Alphabet-Construction-and-Remodeling/61573579337536/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-amber/20 border border-white/10 hover:border-amber/30 rounded-sm flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white/50 group-hover:text-amber transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/alphabet-construction-and-remodeling-sunnyvale-4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-amber/20 border border-white/10 hover:border-amber/30 rounded-sm flex items-center justify-center transition-colors group"
                aria-label="Yelp"
              >
                <svg className="w-4 h-4 text-white/50 group-hover:text-amber transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.73l-4.703 1.16a1.56 1.56 0 01-1.916-1.099 1.56 1.56 0 01.411-1.524l3.604-3.173a8.34 8.34 0 012.604 4.636zM12.99 8.52a1.56 1.56 0 01-1.925.985L6.49 7.641A8.373 8.373 0 0112 3.662c.347 0 .688.022 1.024.063L12.99 8.52zM10.79 14.4a1.56 1.56 0 01-.028 1.955l-3.17 3.56A8.332 8.332 0 014.5 14.55a8.38 8.38 0 01.302-2.24l4.93.986a1.56 1.56 0 011.058 1.104zm1.434 1.96a1.56 1.56 0 011.822-1.132l4.695 1.14a8.354 8.354 0 01-5.21 4.27l-1.307-4.278zm-3.3-6.892a1.56 1.56 0 01-1.06 1.928l-4.554 1.28a8.34 8.34 0 01.495-5.37l5.12 2.162z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-amber text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-amber text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:4085394747" className="text-white/50 hover:text-amber text-sm transition-colors">
                  (408) 539-4747
                </a>
              </li>
              <li>
                <a href="mailto:constructionbayarea123@gmail.com" className="text-white/50 hover:text-amber text-sm transition-colors">
                  constructionbayarea123@gmail.com
                </a>
              </li>
              <li className="text-white/50 text-sm">
                950 S McGlincy Ln<br />Campbell, CA 95008
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Alphabet Construction & Remodeling. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            CA CSLB Licensed & Insured · Campbell, CA
          </p>
        </div>
      </div>
    </footer>
  )
}
