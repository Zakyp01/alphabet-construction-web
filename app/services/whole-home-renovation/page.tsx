import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Whole-Home Renovation in the Bay Area | Alphabet Construction',
  description:
    'Complete whole-home renovation in Campbell and throughout the Bay Area. Kitchen, bathrooms, flooring, electrical, plumbing, and paint — one contractor, zero coordination headaches.',
  keywords:
    'whole home renovation Bay Area, full house remodel San Jose, complete home remodeling Campbell CA, home renovation contractor Santa Clara County',
}

const included = [
  {
    title: 'Kitchen & Bathrooms',
    description: 'Full remodels of every kitchen and bathroom — cabinets, countertops, tile, fixtures, and finishes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Flooring Throughout',
    description: 'Consistent flooring installed across all rooms — hardwood, LVP, tile, or a mix matched to each space.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'Electrical & Plumbing',
    description: 'Panel upgrades, circuit additions, fixture relocation, repipes, and water heater replacement.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Interior & Exterior Paint',
    description: 'Full interior repaint plus exterior paint and prep — fresh color, clean lines, lasting finish.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Windows & Doors',
    description: 'Energy-efficient window replacement, new interior doors, entry door upgrades, and hardware throughout.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
]

export default function WholeHomeRenovationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end pb-20 pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home-renovation.jpg"
              alt="Whole-home renovation by Alphabet Construction"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-charcoal/72" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Service
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              Whole-Home Renovation
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              One team, one point of contact, zero coordination headaches. We transform your entire home from top to bottom while you stay informed every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:4085394747" className="btn-outline">Call (408) 539-4747</a>
              <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        {/* One contractor pitch */}
        <section className="bg-amber py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-heading font-bold text-white text-xl md:text-2xl">
              One team, one point of contact, zero coordination headaches.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                Scope of Work
              </p>
              <h2 className="section-title">Everything Under One Roof</h2>
              <p className="section-subtitle mx-auto">
                We handle every trade so you don't have to manage five different contractors and five different schedules.
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

        {/* Why us */}
        <section className="bg-gray-soft py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-80 lg:h-96 rounded-sm overflow-hidden">
                <Image
                  src="/images/exterior-room.jpg"
                  alt="Completed home renovation exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                  Why Choose Us
                </p>
                <h2 className="section-title mb-6">
                  No Subcontractor Shuffle
                </h2>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Whole-home renovations go wrong when too many cooks are in the kitchen — a plumber who doesn't know what the electrician planned, a tile installer who shows up before the waterproofing is done. We eliminate that problem entirely.
                </p>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Alphabet Construction handles every trade with our own crew. Zack coordinates internally so you don't have to. You get one call, one timeline, and one person accountable for every inch of work.
                </p>
                <p className="text-gray-mid leading-relaxed">
                  We're CA CSLB licensed and insured. Every whole-home renovation is fully permitted and inspected.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: '4+', label: 'Years in Business' },
                    { value: '5.0', label: 'Star Rating' },
                    { value: '72+', label: 'Total Reviews' },
                    { value: '100%', label: 'Permitted Work' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-gray-border rounded-sm p-4 text-center">
                      <p className="font-heading font-bold text-amber text-2xl mb-1">{stat.value}</p>
                      <p className="text-gray-mid text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Entire Home?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Let's talk about your vision, your timeline, and your budget — no pressure, just clarity.
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
