import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Alphabet Construction & Remodeling — Bay Area Contractor',
  description:
    'Learn about Alphabet Construction and Remodeling — a Bay Area remodeling contractor built on honest craftsmanship, transparent pricing, and on-time delivery. Based in Campbell, CA.',
  keywords:
    'about Alphabet Construction, Bay Area contractor, Campbell CA remodeling, Zack contractor, licensed remodeling contractor',
}

const values = [
  {
    title: 'Licensed & Insured',
    description:
      "CA CSLB licensed and fully insured on every job. You never have to wonder if you're covered.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description:
      'Detailed written estimates before work begins. No surprise invoices, no hidden line items.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'On-Time Delivery',
    description:
      'We set realistic timelines and stick to them. Your home disruption ends on the date we promised.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '4+', label: 'Years in Business' },
  { value: '18', label: 'Google Reviews' },
  { value: '54', label: 'Yelp Reviews' },
  { value: '5.0', label: 'Star Rating' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              About Alphabet Construction
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-2xl leading-relaxed">
              A Bay Area remodeling contractor built on honest craftsmanship, clear communication, and a genuine commitment to getting the job done right.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                  Our Story
                </p>
                <h2 className="section-title mb-6">
                  Built on Trust, Grown by Results
                </h2>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Founded by Zack, Alphabet Construction started as a small team with a simple belief: Bay Area homeowners deserve a contractor who shows up, communicates clearly, and does the work right.
                </p>
                <p className="text-gray-mid leading-relaxed mb-5">
                  We've grown to a trusted name across Santa Clara County, backed by 5-star reviews on Google and Yelp. From a single kitchen remodel in Campbell to full whole-home renovations across the South Bay, our reputation has been earned one project at a time.
                </p>
                <p className="text-gray-mid leading-relaxed">
                  We don't subcontract the work and disappear — Zack remains your single point of contact from the first estimate to the final walkthrough. That accountability is what sets us apart.
                </p>
              </div>
              <div className="bg-gray-soft rounded-sm p-10 border border-gray-border">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-heading font-bold text-4xl text-amber mb-2">{stat.value}</p>
                      <p className="text-gray-mid text-sm font-body">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-gray-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-heading font-bold text-charcoal text-sm">5.0 Average Rating</span>
                  </div>
                  <p className="text-gray-mid text-sm">Across Google and Yelp — verified by real homeowners across the Bay Area.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-soft py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                Our Commitments
              </p>
              <h2 className="section-title">What We Stand For</h2>
              <p className="section-subtitle mx-auto">
                Three principles guide every project we take on, regardless of size or scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-white border border-gray-border rounded-sm p-8 shadow-card">
                  <div className="w-12 h-12 bg-amber/10 rounded-sm flex items-center justify-center text-amber mb-6">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team intro */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                Leadership
              </p>
              <h2 className="section-title mb-6">Meet Zack</h2>
              <p className="text-gray-mid text-lg leading-relaxed mb-6">
                Zack is the founder and lead contractor behind every Alphabet Construction project. He handles your estimate personally, oversees the build crew, and is your single point of contact from day one to final walkthrough.
              </p>
              <p className="text-gray-mid leading-relaxed">
                No project managers playing telephone, no subcontractor hand-offs you didn't agree to. When you work with Alphabet Construction, you work with Zack — and that's exactly the point.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 bg-gray-soft border border-gray-border rounded-sm px-6 py-4">
                <svg className="w-5 h-5 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="font-heading font-semibold text-charcoal text-sm">Reach Zack directly: </span>
                <a href="tel:4085394747" className="text-amber font-heading font-bold text-sm hover:text-amber-dark transition-colors">
                  (408) 539-4747
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Get a free, detailed estimate with no pressure and no obligation. We'll meet at your home and walk through every detail together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4085394747" className="btn-outline">
                Call (408) 539-4747
              </a>
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
