import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Kitchen Remodeling in the Bay Area | Alphabet Construction',
  description:
    'Custom kitchen remodeling in Campbell, San Jose, and throughout the Bay Area. Cabinets, countertops, flooring, electrical, and layout redesign. Licensed & insured. Free estimates.',
  keywords:
    'kitchen remodeling Bay Area, kitchen renovation San Jose, custom cabinets Campbell CA, countertop installation Santa Clara, kitchen remodel contractor',
}

const included = [
  {
    title: 'Custom Cabinets',
    description: 'Semi-custom and fully custom cabinetry in your choice of style, finish, and hardware.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Countertops & Backsplash',
    description: 'Quartz, granite, marble, or butcher block countertops paired with tile or stone backsplash.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Flooring',
    description: 'Hardwood, LVP, tile, or stone flooring installed with precision and proper subfloor prep.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'Lighting & Electrical',
    description: 'Under-cabinet lighting, pendant fixtures, recessed lighting, and panel updates.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Layout Redesign',
    description: 'Open up your kitchen with a structural layout change — island additions, wall removals, and flow improvements.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Plumbing Updates',
    description: 'Sink relocation, faucet installation, garbage disposal, and dishwasher plumbing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

const steps = [
  {
    number: '01',
    title: 'Free Estimate',
    description: 'Zack visits your home, walks the space, and delivers a detailed written quote — no cost, no commitment.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We finalize materials, layouts, and finishes. You approve everything before a single tool is picked up.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our crew executes the project on schedule. Zack is on-site and available throughout the entire build.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: "We walk through every detail together. We don't consider the job done until you're completely satisfied.",
  },
]

export default function KitchenRemodelingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end pb-20 pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kitchen-sage.jpg"
              alt="Kitchen remodel by Alphabet Construction"
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
              Kitchen Remodeling in the Bay Area
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              From a quick cabinet refresh to a full gut remodel — we design and build kitchens Bay Area homeowners love to cook in.
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
              <h2 className="section-title">Everything Your Kitchen Needs</h2>
              <p className="section-subtitle mx-auto">
                We handle every trade in-house — no subcontractor coordination, no dropped balls.
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

        {/* Why choose us */}
        <section className="bg-gray-soft py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                  Why Alphabet Construction
                </p>
                <h2 className="section-title mb-6">
                  The Bay Area Contractor That Shows Up
                </h2>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Kitchen remodels have a reputation for running over budget and over schedule. At Alphabet Construction, we've built our reputation on doing exactly the opposite. We provide a detailed written quote before work begins, set realistic timelines, and stick to them.
                </p>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Zack oversees every kitchen remodel personally. You're not handed off to a project manager you've never met — your single point of contact from estimate to completion is the same person.
                </p>
                <p className="text-gray-mid leading-relaxed">
                  We're CA CSLB licensed and fully insured. Every kitchen we build is permitted and inspected to code.
                </p>
              </div>
              <div className="relative h-80 lg:h-full min-h-64 rounded-sm overflow-hidden">
                <Image
                  src="/images/kitchen-hero.jpg"
                  alt="Completed kitchen remodel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                How It Works
              </p>
              <h2 className="section-title">Our 4-Step Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-14 h-14 bg-amber rounded-sm flex items-center justify-center font-heading font-bold text-white text-lg mx-auto mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-gray-soft py-20">
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
              "Alphabet Construction did an amazing job with our kitchen remodel! Zack and his team are very skilled, professional, and communicated with us throughout the entire process. The finished product exceeded our expectations and our kitchen looks completely transformed. We would highly recommend them to anyone looking for quality remodeling work."
            </blockquote>
            <cite className="not-italic">
              <p className="font-heading font-bold text-charcoal">Cara Li</p>
              <p className="text-gray-mid text-sm">Verified Google Review</p>
            </cite>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Schedule a free in-home estimate with Zack and get a detailed quote within 48 hours.
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
