import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

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

const services = [
  {
    name: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    description: 'Custom kitchen renovations from cabinet replacement to full gut remodels.',
  },
  {
    name: 'Bathroom Modernization',
    slug: 'bathroom-modernization',
    description: 'Luxury bathroom upgrades, walk-in showers, tile work, and full renovations.',
  },
  {
    name: 'ADU Construction',
    slug: 'adu-construction',
    description: 'Detached and attached ADU builds, garage conversions, and JADUs.',
  },
  {
    name: 'Deck Construction',
    slug: 'deck-construction',
    description: 'Custom wood and composite decks designed for Bay Area outdoor living.',
  },
  {
    name: 'Exterior Restoration',
    slug: 'exterior-restoration',
    description: 'Siding, stucco, painting, and full exterior facelifts for your home.',
  },
  {
    name: 'Whole-Home Renovation',
    slug: 'whole-home-renovation',
    description: 'Complete home remodels coordinated under one contractor, start to finish.',
  },
]

type Props = {
  params: { city: string }
}

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find((c) => c.slug === params.city)

  if (!city) {
    return { title: 'Not Found' }
  }

  return {
    title: `Remodeling Contractor in ${city.name}, CA | Alphabet Construction`,
    description: `Alphabet Construction offers kitchen remodeling, bathroom renovations, ADU construction, deck building, exterior restoration, and whole-home renovation in ${city.name}, CA. CA CSLB licensed. Call (408) 539-4747.`,
    alternates: {
      canonical: `https://alphabetconstruction.us/service-areas/${city.slug}`,
    },
  }
}

export default function CityServiceAreaPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.city)

  if (!city) {
    notFound()
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-charcoal pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Service Area
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            Remodeling Services in {city.name}, CA
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Kitchen remodels, bathroom renovations, ADU construction, and more — serving {city.name} homeowners since 2016.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14085394747" className="btn-primary">
              Call (408) 539-4747
            </a>
            <a href="/#contact" className="btn-outline">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-soft py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-title">All Services in {city.name}</h2>
            <p className="section-subtitle mx-auto mt-4">
              We handle every aspect of your home improvement project — from a single room to a full renovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white border border-gray-border rounded-sm p-8 hover:shadow-card transition-shadow duration-200 flex flex-col"
              >
                <h2 className="font-heading font-bold text-xl text-charcoal mb-3">
                  {service.name}
                </h2>
                <p className="text-gray-mid text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/${service.slug}/${city.slug}`}
                    className="text-amber font-heading font-semibold text-sm hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Ready to Start Your Project in {city.name}?
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Our team serves {city.name} and the entire South Bay. Contact us for a free on-site estimate — no obligation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14085394747" className="btn-primary">
              Call (408) 539-4747
            </a>
            <a href="/#contact" className="btn-outline">
              Free Estimate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
