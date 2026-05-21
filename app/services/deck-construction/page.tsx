import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Deck Construction & Outdoor Living | Alphabet Construction',
  description:
    'Custom deck construction in Campbell and across the Bay Area. Composite and wood decking, railings, pergolas, and outdoor lighting. Licensed & insured. Free estimates.',
  keywords:
    'deck construction Bay Area, custom deck San Jose, composite decking Campbell CA, pergola installation, outdoor living contractor Santa Clara County',
}

const included = [
  {
    title: 'Custom Deck Design',
    description: "We design decks that complement your home's architecture and maximize your outdoor living space.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Composite & Wood Decking',
    description: 'Trex, TimberTech, and premium composite options alongside pressure-treated, cedar, and redwood lumber.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'Railings & Stairs',
    description: 'Cable, glass, wood, and aluminum railing systems built to code — paired with safe, attractive staircase design.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
  },
  {
    title: 'Pergolas & Shade Structures',
    description: 'Freestanding and attached pergolas that define outdoor living areas and provide year-round shade and shelter.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Lighting',
    description: 'Post cap lights, recessed deck lighting, string light integration, and low-voltage landscape lighting.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
]

export default function DeckConstructionPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end pb-20 pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/deck-construction.jpg"
              alt="Custom deck construction by Alphabet Construction"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-charcoal/68" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Service
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              Deck Construction &amp; Outdoor Living
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              Extend your living space outdoors with a custom-built deck that's designed for Bay Area weather and your family's lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:4085394747" className="btn-outline">Call (408) 539-4747</a>
              <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                Scope of Work
              </p>
              <h2 className="section-title">What We Build</h2>
              <p className="section-subtitle mx-auto">
                From simple ground-level decks to multi-level outdoor living spaces — fully permitted and built to last.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((item) => (
                <div key={item.title} className="border border-gray-border rounded-sm p-7 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-11 h-11 bg-amber/10 rounded-sm flex items-center justify-center text-amber mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials note */}
        <section className="bg-gray-soft py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                  Material Selection
                </p>
                <h2 className="section-title mb-6">
                  The Right Deck for Bay Area Living
                </h2>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Bay Area weather is generally mild, but it varies — morning fog, summer heat, and occasional heavy rain all take a toll on outdoor wood. We help you choose materials that hold up beautifully over time without constant maintenance.
                </p>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Composite decking offers a low-maintenance, long-lasting alternative to natural wood. If you prefer the look and feel of real wood, we recommend cedar or redwood — both naturally resistant to rot and insects, and ideal for California's climate.
                </p>
                <p className="text-gray-mid leading-relaxed">
                  Every deck we build is fully permitted and engineered to local code. We handle structural plans, city permits, and all inspections.
                </p>
              </div>
              <div className="bg-charcoal rounded-sm p-8">
                <h3 className="font-heading font-bold text-white text-xl mb-6">Why Permit Your Deck?</h3>
                <ul className="space-y-4">
                  {[
                    'Unpermitted decks must be disclosed at sale and can kill a deal',
                    "Insurance won't cover incidents on unpermitted structures",
                    'Permitted decks add verifiable value to your property',
                    'Code compliance ensures structural safety for your family',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-amber rounded-sm flex-shrink-0 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Build Your Outdoor Space?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Get a free estimate and see exactly what your budget can build — materials, timeline, and permit costs included.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4085394747" className="btn-outline">Call (408) 539-4747</a>
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
