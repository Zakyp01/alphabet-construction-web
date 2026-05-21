import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Alphabet Construction & Remodeling — Bay Area',
  description:
    'Get in touch with Alphabet Construction and Remodeling. Request a free estimate for your kitchen, bathroom, ADU, or whole-home remodel in the Bay Area. Call (408) 539-4747.',
  keywords:
    'contact Alphabet Construction, free remodeling estimate Bay Area, Campbell CA contractor, kitchen bathroom remodel quote',
}

const serviceAreas = [
  'Campbell', 'San Jose', 'Santa Clara', 'Sunnyvale', 'Cupertino',
  'Los Gatos', 'Los Altos', 'Mountain View', 'Palo Alto', 'Saratoga',
  'Milpitas', 'Morgan Hill', 'Gilroy', 'Willow Glen', 'Almaden Valley',
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-charcoal pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Free Estimates
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white max-w-2xl leading-tight mb-5">
              Let's Talk About Your Project
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-10">
              Free on-site estimates, honest timelines, clear pricing. No pressure, no obligation.
            </p>
            {/* Quick contact row */}
            <div className="flex flex-wrap gap-6">
              <a href="tel:4085394747" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-amber/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide font-heading">Call Us</p>
                  <p className="text-white font-heading font-bold group-hover:text-amber transition-colors">(408) 539-4747</p>
                </div>
              </a>
              <div className="w-px bg-white/10 hidden sm:block" />
              <a href="mailto:constructionbayarea123@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-amber/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide font-heading">Email</p>
                  <p className="text-white font-heading font-semibold text-sm group-hover:text-amber transition-colors">constructionbayarea123@gmail.com</p>
                </div>
              </a>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide font-heading">Office</p>
                  <p className="text-white font-heading font-semibold text-sm">Campbell, CA 95008</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="bg-gray-soft py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* GHL Form — takes 2/3 width */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-border rounded-sm shadow-card overflow-hidden">
                  <div className="px-8 pt-8 pb-4 border-b border-gray-border">
                    <h2 className="font-heading font-bold text-charcoal text-2xl">Request a Free On-Site Estimate</h2>
                    <p className="text-gray-mid text-sm mt-1">Fill out the form and we'll be in touch within a few hours to schedule your visit.</p>
                  </div>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/hVm7coL6n2VIR0HKU3OI"
                    width="100%"
                    height="720"
                    style={{ border: 'none', display: 'block' }}
                    title="Free Estimate Form"
                  />
                </div>
              </div>

              {/* Sidebar — 1/3 width */}
              <div className="flex flex-col gap-6">

                {/* Hours */}
                <div className="bg-white border border-gray-border rounded-sm shadow-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-amber/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-charcoal">Hours</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-mid">Monday – Friday</span>
                      <span className="text-charcoal font-medium">8am – 6pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-mid">Saturday</span>
                      <span className="text-charcoal font-medium">9am – 4pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-mid">Sunday</span>
                      <span className="text-charcoal font-medium">Closed</span>
                    </li>
                  </ul>
                </div>

                {/* License badge */}
                <div className="bg-white border border-gray-border rounded-sm shadow-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-amber/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-charcoal">License & Insurance</h3>
                  </div>
                  <p className="text-sm text-gray-mid leading-relaxed">CA CSLB Licensed and fully insured on every project. You can verify our license on the CSLB website.</p>
                </div>

                {/* Service areas */}
                <div className="bg-white border border-gray-border rounded-sm shadow-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-amber/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-charcoal">Service Areas</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceAreas.map((area) => (
                      <span key={area} className="bg-gray-soft border border-gray-border text-charcoal text-xs px-2.5 py-1 rounded-sm font-body">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white border border-gray-border rounded-sm shadow-card p-6">
                  <h3 className="font-heading font-bold text-charcoal mb-4">Follow Us</h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://www.facebook.com/people/Alphabet-Construction-and-Remodeling/61573579337536/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-soft border border-gray-border rounded-sm hover:border-amber/40 hover:bg-amber/5 transition-colors group">
                      <svg className="w-4 h-4 text-gray-mid group-hover:text-amber transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-charcoal text-sm font-body group-hover:text-amber transition-colors">Facebook</span>
                    </a>
                    <a href="https://www.yelp.com/biz/alphabet-construction-and-remodeling-sunnyvale-4" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-soft border border-gray-border rounded-sm hover:border-amber/40 hover:bg-amber/5 transition-colors group">
                      <svg className="w-4 h-4 text-gray-mid group-hover:text-amber transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.16 12.73l-4.703 1.16a1.56 1.56 0 01-1.916-1.099 1.56 1.56 0 01.411-1.524l3.604-3.173a8.34 8.34 0 012.604 4.636zM12.99 8.52a1.56 1.56 0 01-1.925.985L6.49 7.641A8.373 8.373 0 0112 3.662c.347 0 .688.022 1.024.063L12.99 8.52zM10.79 14.4a1.56 1.56 0 01-.028 1.955l-3.17 3.56A8.332 8.332 0 014.5 14.55a8.38 8.38 0 01.302-2.24l4.93.986a1.56 1.56 0 011.058 1.104zm1.434 1.96a1.56 1.56 0 011.822-1.132l4.695 1.14a8.354 8.354 0 01-5.21 4.27l-1.307-4.278zm-3.3-6.892a1.56 1.56 0 01-1.06 1.928l-4.554 1.28a8.34 8.34 0 01.495-5.37l5.12 2.162z"/>
                      </svg>
                      <span className="text-charcoal text-sm font-body group-hover:text-amber transition-colors">Yelp — 54 Reviews</span>
                    </a>
                    <a href="https://g.co/kgs/alphabet-construction" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-soft border border-gray-border rounded-sm hover:border-amber/40 hover:bg-amber/5 transition-colors group">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-charcoal text-sm font-body group-hover:text-amber transition-colors">Google — 18 Reviews</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-white py-0">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-border rounded-sm overflow-hidden shadow-card">
              {/* Address card */}
              <div className="bg-charcoal p-10 flex flex-col justify-center">
                <p className="text-amber font-heading font-semibold text-xs tracking-widest uppercase mb-4">Our Office</p>
                <h3 className="font-heading font-bold text-white text-xl mb-3">950 S McGlincy Ln</h3>
                <p className="text-white/60 mb-6">Campbell, CA 95008</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                    <a href="tel:4085394747" className="text-white/80 hover:text-amber text-sm transition-colors">(408) 539-4747</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                    <span className="text-white/80 text-sm">constructionbayarea123@gmail.com</span>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=950+S+McGlincy+Ln+Campbell+CA+95008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-amber font-heading font-semibold text-sm hover:text-amber-dark transition-colors"
                >
                  Get Directions
                  <span>→</span>
                </a>
              </div>
              {/* Map */}
              <div className="lg:col-span-2 h-80 lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3326213798!2d-121.9518!3d37.2802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4b0c47d4e47%3A0xd29ff0d8a4cdd6f6!2s950%20S%20McGlincy%20Ln%2C%20Campbell%2C%20CA%2095008!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alphabet Construction Office Location"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
