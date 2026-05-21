import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Bathroom Remodeling in the Bay Area | Alphabet Construction',
  description:
    'Full bathroom remodeling and modernization in Campbell, San Jose, and throughout the Bay Area. Walk-in showers, tile, vanities, and complete gut remodels. Licensed & insured. Free estimates.',
  keywords:
    'bathroom remodeling Bay Area, bathroom renovation San Jose, walk-in shower installation, tile work Campbell CA, master bath remodel contractor',
}

const included = [
  {
    title: 'Walk-in Showers',
    description: 'Custom tiled showers with frameless glass doors, built-in niches, and bench seating.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Tile & Stone',
    description: 'Porcelain, ceramic, natural stone, and large-format tile installation on floors, walls, and surrounds.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Vanities & Fixtures',
    description: 'New vanity installation, mirror and medicine cabinet upgrades, faucets, and hardware throughout.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Flooring',
    description: 'Heated radiant floor systems, porcelain tile, and luxury vinyl plank flooring options.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'Lighting',
    description: 'Recessed lighting, vanity sconces, dimmer switches, and exhaust fan upgrades.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Full Gut Remodels',
    description: 'Complete demolition and rebuild — waterproofing, framing, plumbing, and all finishes from scratch.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

export default function BathroomModernizationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end pb-20 pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bathroom-luxury.jpg"
              alt="Luxury bathroom remodel by Alphabet Construction"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-charcoal/70" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Service
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              Bathroom Remodeling in the Bay Area
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              Outdated bathrooms become functional, beautiful spaces your family actually enjoys — on time and on budget.
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
              <h2 className="section-title">What We Handle</h2>
              <p className="section-subtitle mx-auto">
                Full-service bathroom remodeling — every trade, every finish, one contractor.
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

        {/* Gallery strip */}
        <section className="bg-gray-soft py-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-8 text-center">
              Recent Work
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/bathroom-spa.jpg', alt: 'Spa bathroom remodel' },
                { src: '/images/bathroom-classic.jpg', alt: 'Classic tile bathroom' },
                { src: '/images/bathroom-modern.jpg', alt: 'Modern bathroom renovation' },
                { src: '/images/bathroom-freestanding.jpg', alt: 'Freestanding tub bathroom' },
              ].map((img) => (
                <div key={img.src} className="relative h-48 rounded-sm overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-8">
              What Clients Say
            </p>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-charcoal text-xl leading-relaxed mb-6 font-body italic">
              "Zack and his crew did an outstanding job on our master bathroom after we had water damage. They handled the entire project from demo to final tile work and the result is better than we ever imagined. Communication was great throughout, timelines were respected, and the quality of workmanship is excellent. Highly recommend Alphabet Construction."
            </blockquote>
            <cite className="not-italic">
              <p className="font-heading font-bold text-charcoal">Sonic Bodyboarder</p>
              <p className="text-gray-mid text-sm">Verified Yelp Review</p>
            </cite>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Upgrade Your Bathroom?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Schedule a free in-home estimate with Zack and see what your bathroom can become.
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
