import Link from 'next/link'

const cities = [
  { name: 'San Jose', slug: 'san-jose' },
  { name: 'Santa Clara', slug: 'santa-clara' },
  { name: 'Sunnyvale', slug: 'sunnyvale' },
  { name: 'Cupertino', slug: 'cupertino' },
  { name: 'Mountain View', slug: 'mountain-view' },
  { name: 'Los Altos', slug: 'los-altos' },
  { name: 'Los Gatos', slug: 'los-gatos' },
  { name: 'Campbell', slug: 'campbell' },
  { name: 'Saratoga', slug: 'saratoga' },
  { name: 'Milpitas', slug: 'milpitas' },
  { name: 'Morgan Hill', slug: 'morgan-hill' },
  { name: 'Gilroy', slug: 'gilroy' },
  { name: 'Palo Alto', slug: 'palo-alto' },
  { name: 'Los Altos Hills', slug: 'los-altos-hills' },
  { name: 'Fremont', slug: 'fremont' },
]

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-gray-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-3">Service Area</p>
          <h2 className="section-title">Serving the Entire Bay Area</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Based in Campbell, CA — we serve homeowners across Santa Clara County and the greater Bay Area.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="bg-white border border-gray-border text-charcoal font-body text-sm px-4 py-2 rounded-sm hover:border-amber hover:text-amber transition-colors duration-200"
            >
              {city.name}
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-mid text-sm mt-8">
          Don't see your city listed? <a href="tel:4085394747" className="text-amber hover:underline font-medium">Call us at (408) 539-4747</a> — we likely serve your area.
        </p>
      </div>
    </section>
  )
}
