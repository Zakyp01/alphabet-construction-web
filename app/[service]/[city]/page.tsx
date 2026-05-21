import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const serviceMap: Record<string, string> = {
  'kitchen-remodeling': 'Kitchen Remodeling',
  'bathroom-modernization': 'Bathroom Remodeling',
  'adu-construction': 'ADU Construction',
  'deck-construction': 'Deck Construction',
  'exterior-restoration': 'Exterior Restoration',
  'whole-home-renovation': 'Whole-Home Renovation',
}

const cityMap: Record<string, string> = {
  'campbell': 'Campbell',
  'san-jose': 'San Jose',
  'sunnyvale': 'Sunnyvale',
  'cupertino': 'Cupertino',
  'santa-clara': 'Santa Clara',
  'los-gatos': 'Los Gatos',
  'saratoga': 'Saratoga',
  'los-altos': 'Los Altos',
  'mountain-view': 'Mountain View',
  'palo-alto': 'Palo Alto',
  'milpitas': 'Milpitas',
  'morgan-hill': 'Morgan Hill',
  'gilroy': 'Gilroy',
  'los-altos-hills': 'Los Altos Hills',
  'fremont': 'Fremont',
}

const allCitySlugs = Object.keys(cityMap)

const testimonials = [
  {
    quote: "Zack's team got the entire job done in about a week... My wife and I are really happy with their work product.",
    author: 'Nick Dawes',
  },
  {
    quote: 'Alphabet Construction did an amazing job with our kitchen remodel! Zack and his team are very skilled and got the job done in a timely manner.',
    author: 'Cara Li',
  },
  {
    quote: 'Super responsive, fair pricing, hard working and on-time. Wall repair looks flawless.',
    author: 'Jason Whetstone',
  },
  {
    quote: 'Very professional, and they got the job done sooner than I expected.',
    author: 'Sonic Bodyboarder',
  },
]

const serviceIncludes: Record<string, string[]> = {
  'kitchen-remodeling': [
    'Custom cabinet design and installation',
    'Countertop replacement (quartz, granite, marble)',
    'Kitchen island additions and reconfigurations',
    'Tile backsplash installation',
    'Lighting upgrades and under-cabinet lighting',
    'Plumbing and fixture upgrades',
    'Flooring replacement',
    'Pantry and storage optimization',
  ],
  'bathroom-modernization': [
    'Walk-in shower and tub conversions',
    'Vanity and sink replacement',
    'Tile flooring and wall installation',
    'Toilet and fixture upgrades',
    'Custom lighting and exhaust fan installation',
    'Heated floor systems',
    'Mirror and medicine cabinet installation',
    'Accessibility modifications (grab bars, curbless showers)',
  ],
  'adu-construction': [
    'Permit application and plan submission',
    'Foundation and framing',
    'Electrical, plumbing, and HVAC rough-in',
    'Insulation and drywall',
    'Kitchen and bathroom finish work',
    'Flooring, painting, and trim',
    'Separate utility connections',
    'Final inspections and certificate of occupancy',
  ],
  'deck-construction': [
    'Custom deck design and layout planning',
    'Pressure-treated lumber or composite decking',
    'Railing system installation (wood, metal, cable)',
    'Built-in seating and planters',
    'Pergola and shade structure addition',
    'Stair construction and landing pads',
    'Deck lighting integration',
    'Weatherproofing and sealant application',
  ],
  'exterior-restoration': [
    'Siding repair and full replacement',
    'Exterior painting and power washing',
    'Window and door replacement',
    'Trim and fascia repair',
    'Stucco patching and refinishing',
    'Gutter replacement and guard installation',
    'Foundation crack sealing',
    'Driveway and walkway resurfacing',
  ],
  'whole-home-renovation': [
    'Full floor plan redesign and open-concept conversions',
    'Kitchen and bathroom remodels',
    'Flooring replacement throughout',
    'Electrical panel upgrades and rewiring',
    'Plumbing system updates',
    'Interior and exterior painting',
    'Window and door replacement',
    'HVAC system modernization',
  ],
}

function getNearbyCity(currentSlug: string): string[] {
  const idx = allCitySlugs.indexOf(currentSlug)
  const nearby: string[] = []
  const candidates = [
    ...allCitySlugs.slice(Math.max(0, idx - 3), idx),
    ...allCitySlugs.slice(idx + 1, idx + 4),
  ]
  for (const c of candidates) {
    if (c !== currentSlug) nearby.push(c)
    if (nearby.length >= 5) break
  }
  if (nearby.length < 5) {
    for (const c of allCitySlugs) {
      if (c !== currentSlug && !nearby.includes(c)) {
        nearby.push(c)
        if (nearby.length >= 5) break
      }
    }
  }
  return nearby
}

type Props = {
  params: { service: string; city: string }
}

export function generateStaticParams() {
  const params: { service: string; city: string }[] = []
  for (const service of Object.keys(serviceMap)) {
    for (const city of Object.keys(cityMap)) {
      params.push({ service, city })
    }
  }
  return params
}

export function generateMetadata({ params }: Props): Metadata {
  const serviceName = serviceMap[params.service]
  const cityName = cityMap[params.city]

  if (!serviceName || !cityName) {
    return { title: 'Not Found' }
  }

  return {
    title: `${serviceName} in ${cityName}, CA | Alphabet Construction`,
    description: `Looking for professional ${serviceName.toLowerCase()} in ${cityName}, CA? Alphabet Construction and Remodeling is a CA CSLB licensed contractor serving ${cityName} and the greater South Bay. Free on-site estimates — call (408) 539-4747.`,
    alternates: {
      canonical: `https://alphabetconstruction.us/${params.service}/${params.city}`,
    },
  }
}

export default function LocationServicePage({ params }: Props) {
  const serviceName = serviceMap[params.service]
  const cityName = cityMap[params.city]

  if (!serviceName || !cityName) {
    notFound()
  }

  const serviceSlugIndex = Object.keys(serviceMap).indexOf(params.service)
  const testimonial = testimonials[serviceSlugIndex % testimonials.length]
  const includes = serviceIncludes[params.service]
  const nearbySlugs = getNearbyCity(params.city)

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-charcoal pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Serving {cityName}, CA
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            {serviceName} in {cityName}, CA
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Alphabet Construction and Remodeling brings expert {serviceName.toLowerCase()} services
            to homeowners in {cityName} and the surrounding South Bay. CA CSLB Licensed &amp; Insured.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14085394747" className="btn-primary">
              Call (408) 539-4747
            </a>
            <a href="/contact" className="btn-outline">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-title text-center">
            Why Choose Us in {cityName}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Homeowners across {cityName} trust Alphabet Construction for quality craftsmanship and
            transparent communication on every project.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-soft rounded-sm p-8 text-center shadow-card">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="4" fill="#E8922A" fillOpacity="0.12"/>
                  <path d="M20 8L24.5 13H31V19.5L35 20L31 20.5V27H24.5L20 32L15.5 27H9V20.5L5 20L9 19.5V13H15.5L20 8Z" stroke="#E8922A" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                  <circle cx="20" cy="20" r="4" stroke="#E8922A" strokeWidth="1.8" fill="none"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Licensed &amp; Local</h3>
              <p className="text-gray-mid text-sm leading-relaxed">
                CA CSLB Licensed and fully insured. We operate locally throughout {cityName} and the
                South Bay — no subcontracting to unknown crews.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-soft rounded-sm p-8 text-center shadow-card">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="4" fill="#E8922A" fillOpacity="0.12"/>
                  <rect x="10" y="12" width="20" height="16" rx="2" stroke="#E8922A" strokeWidth="1.8" fill="none"/>
                  <path d="M15 20L18.5 23.5L25 16.5" stroke="#E8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Free On-Site Estimates</h3>
              <p className="text-gray-mid text-sm leading-relaxed">
                We visit your {cityName} home, assess the scope, and provide a detailed written
                estimate — no vague quotes, no pressure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-soft rounded-sm p-8 text-center shadow-card">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="4" fill="#E8922A" fillOpacity="0.12"/>
                  <path d="M20 11L22.6 16.4L28.6 17.3L24.3 21.5L25.2 27.5L20 24.7L14.8 27.5L15.7 21.5L11.4 17.3L17.4 16.4L20 11Z" stroke="#E8922A" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">5-Star Rated</h3>
              <p className="text-gray-mid text-sm leading-relaxed">
                Consistently rated 5 stars on Google and Yelp by {cityName} homeowners. Our
                reputation is built one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-soft py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                What&apos;s Included in Our {serviceName} Service
              </h2>
              <p className="text-gray-mid mt-4 leading-relaxed">
                Every {serviceName.toLowerCase()} project in {cityName} is handled with the same
                attention to detail. Here is what you can expect from our team:
              </p>
              <ul className="mt-8 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="#E8922A" strokeWidth="1.5" fill="none"/>
                      <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#E8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-charcoal text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-sm shadow-card p-8 border border-gray-border">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                Ready to start your project?
              </h3>
              <p className="text-gray-mid text-sm mb-6">
                We serve {cityName} and all surrounding South Bay cities. Contact us for a free
                on-site consultation.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Request a Free Quote
              </a>
              <p className="mt-4 text-sm text-gray-mid">
                Or call us directly:{' '}
                <a href="tel:+14085394747" className="text-amber font-semibold hover:underline">
                  (408) 539-4747
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <svg className="mx-auto mb-6" width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 28V17.6C0 12.533 1.067 8.4 3.2 5.2C5.333 1.733 8.8 0 13.6 0L15.2 3.2C12.533 3.467 10.4 4.667 8.8 6.8C7.2 8.933 6.4 11.467 6.4 14.4H12.8V28H0ZM22.4 28V17.6C22.4 12.533 23.467 8.4 25.6 5.2C27.733 1.733 31.2 0 36 0L37.6 3.2C34.933 3.467 32.8 4.667 31.2 6.8C29.6 8.933 28.8 11.467 28.8 14.4H35.2V28H22.4Z" fill="#E8922A" fillOpacity="0.3"/>
          </svg>
          <blockquote className="text-charcoal text-xl font-heading font-medium leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-gray-mid font-semibold">— {testimonial.author}</p>
          <div className="flex justify-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.5L11.09 6.26L16.27 6.77L12.55 10.04L13.64 15.13L9 12.27L4.36 15.13L5.45 10.04L1.73 6.77L6.91 6.26L9 1.5Z" fill="#E8922A"/>
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-soft py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="section-title">
            We Also Serve These Areas Near {cityName}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Alphabet Construction provides {serviceName.toLowerCase()} services throughout the South Bay.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {nearbySlugs.map((slug) => (
              <a
                key={slug}
                href={`/${params.service}/${slug}`}
                className="inline-block bg-white border border-gray-border text-charcoal text-sm font-heading font-semibold px-5 py-2.5 rounded-sm hover:border-amber hover:text-amber transition-colors duration-200"
              >
                {serviceName} in {cityMap[slug]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Get a Free Estimate in {cityName}
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Our team is ready to visit your {cityName} home and provide a detailed, no-obligation
            estimate for your {serviceName.toLowerCase()} project.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14085394747" className="btn-primary">
              Call (408) 539-4747
            </a>
            <a href="/contact" className="btn-outline">
              Get Quote Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
