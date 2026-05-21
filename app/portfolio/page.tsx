'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Category = 'All' | 'Kitchens' | 'Bathrooms' | 'ADU' | 'Exterior'

const photos: { src: string; alt: string; category: Exclude<Category, 'All'> }[] = [
  { src: '/images/kitchen-sage.jpg', alt: 'Sage green kitchen remodel with custom cabinetry', category: 'Kitchens' },
  { src: '/images/kitchen-hero.jpg', alt: 'Modern kitchen renovation with quartz countertops', category: 'Kitchens' },
  { src: '/images/bathroom-luxury.jpg', alt: 'Luxury master bathroom remodel', category: 'Bathrooms' },
  { src: '/images/bathroom-spa.jpg', alt: 'Spa-inspired bathroom with walk-in shower', category: 'Bathrooms' },
  { src: '/images/bathroom-classic.jpg', alt: 'Classic bathroom renovation with tile work', category: 'Bathrooms' },
  { src: '/images/bathroom-modern.jpg', alt: 'Contemporary bathroom modernization', category: 'Bathrooms' },
  { src: '/images/bathroom-tub.jpg', alt: 'Soaking tub bathroom remodel', category: 'Bathrooms' },
  { src: '/images/bathroom-freestanding.jpg', alt: 'Freestanding tub bathroom renovation', category: 'Bathrooms' },
  { src: '/images/bathroom-progress.jpg', alt: 'Bathroom remodel in progress', category: 'Bathrooms' },
  { src: '/images/adu-finished.jpg', alt: 'Finished detached ADU unit', category: 'ADU' },
  { src: '/images/adu-foundation.jpg', alt: 'ADU foundation and framing stage', category: 'ADU' },
  { src: '/images/adu-construction.jpg', alt: 'ADU construction progress', category: 'ADU' },
  { src: '/images/exterior-room.jpg', alt: 'Exterior restoration and curb appeal upgrade', category: 'Exterior' },
  { src: '/images/deck-construction.jpg', alt: 'Custom deck construction project', category: 'Exterior' },
]

const tabs: Category[] = ['All', 'Kitchens', 'Bathrooms', 'ADU', 'Exterior']

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('All')

  const visible = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Project Gallery
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
              Our Work Speaks for Itself
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-2xl leading-relaxed">
              Browse completed projects across the Bay Area — from full kitchen overhauls to ADU builds and everything in between.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`px-5 py-2.5 font-heading font-semibold text-sm tracking-wide rounded-sm transition-all duration-200 ${
                    active === tab
                      ? 'bg-amber text-white'
                      : 'bg-gray-soft border border-gray-border text-gray-mid hover:border-amber/40 hover:text-amber'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {visible.map((photo) => (
                <div
                  key={photo.src}
                  className="break-inside-avoid overflow-hidden rounded-sm border border-gray-border shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                    <span className="absolute top-3 left-3 bg-amber text-white font-heading font-semibold text-xs px-2.5 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {visible.length === 0 && (
              <div className="text-center py-20 text-gray-mid">No photos in this category yet.</div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Add Your Home to the Gallery?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Get a free, no-pressure estimate and see what's possible for your space.
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
