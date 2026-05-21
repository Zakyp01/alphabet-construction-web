import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'ADU Construction in the Bay Area | Alphabet Construction',
  description:
    'ADU construction, garage conversions, and junior ADUs in Campbell and across Santa Clara County. Fully permitted, CA CSLB licensed. Free ADU consultations.',
  keywords:
    'ADU construction Bay Area, accessory dwelling unit San Jose, garage conversion Campbell CA, JADU construction, ADU contractor Santa Clara County',
}

const aduTypes = [
  {
    title: 'Detached ADU',
    description: 'A fully independent structure built in your backyard — separate entrance, full kitchen and bath, complete living space.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Garage Conversion',
    description: 'Transform an underused garage into a permitted, livable unit — the most cost-effective ADU path for most Bay Area homeowners.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Junior ADU (JADU)',
    description: 'Convert an existing bedroom or interior space into a self-contained unit — ideal for in-law living or rental income with minimal disruption.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: 'In-Law Suite',
    description: 'Add a comfortable, private space for family members — attached or detached, built for long-term multi-generational living.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

const benefits = [
  {
    title: 'Rental Income',
    description: 'Bay Area rental rates make an ADU one of the highest-returning home investments you can make.',
  },
  {
    title: 'Property Value',
    description: 'A permitted, finished ADU adds measurable equity — typically more than the build cost in most Bay Area markets.',
  },
  {
    title: 'Family Flexibility',
    description: 'House aging parents, adult children, or guests without sacrificing privacy for either side.',
  },
  {
    title: 'Permitted & Legal',
    description: 'We handle permitting from start to finish. Every ADU we build is fully code-compliant and city-approved.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We assess your lot, discuss your goals, and walk through the best ADU option for your property and budget.',
  },
  {
    number: '02',
    title: 'Permits',
    description: 'We prepare and submit all permit applications to your city or county. California ADU law has streamlined approvals significantly.',
  },
  {
    number: '03',
    title: 'Foundation',
    description: 'Site prep, grading, and foundation work completed to engineering specifications.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Framing, MEP rough-in, insulation, drywall, finishes, fixtures — full construction managed by Zack.',
  },
  {
    number: '05',
    title: 'Final Inspection',
    description: 'We schedule all city inspections and walk through the completed unit with you before calling it done.',
  },
]

export default function AduConstructionPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end pb-20 pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/adu-finished.jpg"
              alt="Finished ADU construction by Alphabet Construction"
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
              ADU Construction in the Bay Area
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              California's ADU laws make now the best time to add rental income or family space to your property. We handle permits, build, and final inspection.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:4085394747" className="btn-outline">Call (408) 539-4747</a>
              <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            </div>
          </div>
        </section>

        {/* ADU types */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                ADU Options
              </p>
              <h2 className="section-title">Which ADU Is Right for You?</h2>
              <p className="section-subtitle mx-auto">
                Every property is different. We help you choose the ADU type that maximizes your lot, budget, and goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aduTypes.map((type) => (
                <div key={type.title} className="border border-gray-border rounded-sm p-8 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-11 h-11 bg-amber/10 rounded-sm flex items-center justify-center text-amber mb-5">
                    {type.icon}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-xl mb-3">{type.title}</h3>
                  <p className="text-gray-mid leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-soft py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                Why Build an ADU
              </p>
              <h2 className="section-title">The Smart Investment for Bay Area Homeowners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white border border-gray-border rounded-sm p-7 shadow-card text-center">
                  <div className="w-10 h-10 bg-amber rounded-sm mx-auto mb-5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Construction progress gallery */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-8 text-center">
              Build Progress
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: '/images/adu-foundation.jpg', alt: 'ADU foundation work' },
                { src: '/images/adu-construction.jpg', alt: 'ADU framing and construction' },
                { src: '/images/adu-finished.jpg', alt: 'Completed ADU unit' },
              ].map((img) => (
                <div key={img.src} className="relative h-64 rounded-sm overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-soft py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                How It Works
              </p>
              <h2 className="section-title">Our 5-Step ADU Process</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-14 h-14 bg-amber rounded-sm flex items-center justify-center font-heading font-bold text-white text-lg mx-auto mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-base mb-2">{step.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Build Your ADU?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Get a free consultation to see what's possible on your property — including permit timeline and estimated costs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4085394747" className="btn-outline">Call (408) 539-4747</a>
              <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
