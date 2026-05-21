'use client'

import { useState, useEffect } from 'react'

export default function QuoteButton() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show button after slight delay so it slides in nicely on page load
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Sticky bottom button */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2.5 bg-amber hover:bg-amber-dark text-white font-heading font-bold text-sm tracking-wide px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
          </svg>
          Get a Free Quote
        </button>
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

          {/* Modal panel */}
          <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl flex flex-col max-h-[90vh]">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-border flex-shrink-0">
              <div>
                <h2 className="font-heading font-bold text-charcoal text-lg">Get Your Free On-Site Estimate</h2>
                <p className="text-gray-mid text-sm mt-0.5">We'll visit your home and give you a real quote — no obligation.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-sm text-gray-mid hover:text-charcoal hover:bg-gray-soft transition-colors ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* GHL Form */}
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
