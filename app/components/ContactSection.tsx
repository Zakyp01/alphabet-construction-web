'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">Free Estimates</p>

          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
            Get Your Free Remodeling<br className="hidden sm:block" /> Quote Today
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No pressure, no obligation. We'll visit your home, assess your project, share honest timelines and pricing, and answer every question you have.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="tel:4085394747"
              className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-white font-heading font-bold text-base px-8 py-4 rounded-sm transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              Call (408) 539-4747
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 font-heading font-bold text-base px-8 py-4 rounded-sm transition-all duration-200"
            >
              Request a Quote Online
              <span>→</span>
            </button>
          </div>

          {/* Service areas */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-white/40 text-xs font-heading tracking-widest uppercase mb-5">Serving the South Bay Area</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                'Campbell', 'San Jose', 'Sunnyvale', 'Cupertino',
                'Santa Clara', 'Los Gatos', 'Saratoga', 'Los Altos',
                'Mountain View', 'Palo Alto', 'Milpitas', 'Morgan Hill',
              ].map((city) => (
                <span key={city} className="text-white/50 text-sm hover:text-amber transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quote modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-border flex-shrink-0">
              <div>
                <h2 className="font-heading font-bold text-charcoal text-lg">Get Your Free On-Site Estimate</h2>
                <p className="text-gray-mid text-sm mt-0.5">We'll visit your home and give you a real quote — no obligation.</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-sm text-gray-mid hover:text-charcoal hover:bg-gray-soft transition-colors ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/hVm7coL6n2VIR0HKU3OI"
                width="100%"
                height="680"
                style={{ border: 'none', display: 'block' }}
                title="Request a Free Estimate"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
