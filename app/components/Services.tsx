const services = [
  {
    title: 'Kitchen Remodeling',
    headline: 'Kitchens Worth Cooking In',
    description: 'Full kitchen transformations — from custom cabinets and countertops to flooring, lighting, and layout redesign. Projects built to last.',
    image: '/images/kitchen-sage.jpg',
    bg: null,
    href: '#contact',
  },
  {
    title: 'Bathroom Modernization',
    headline: 'Bathrooms That Feel Like a Retreat',
    description: 'Walk-in showers, tile work, vanities, and full bathroom remodels that combine function with style.',
    image: '/images/bathroom-luxury.jpg',
    bg: null,
    href: '#contact',
  },
  {
    title: 'Whole-Home Renovation',
    headline: 'Every Room, Done Right',
    description: 'Complete home transformations managed from start to finish. One contractor, one point of contact, zero headaches.',
    image: '/images/exterior-room.jpg',
    bg: null,
    href: '#contact',
  },
  {
    title: 'Deck Construction',
    headline: 'Outdoor Spaces Built to Last',
    description: 'Custom deck builds and remodels designed for Bay Area living. Quality materials, clean craftsmanship.',
    image: '/images/deck-construction.jpg',
    bg: null,
    href: '#contact',
  },
  {
    title: 'Exterior Restoration',
    headline: 'First Impressions That Hold Up',
    description: 'Siding, paint, trim, and exterior repairs that protect your home and boost curb appeal.',
    image: '/images/bathroom-freestanding.jpg',
    bg: null,
    href: '#contact',
  },
  {
    title: 'ADU Construction',
    headline: 'Add a Unit. Add Real Value.',
    description: 'We build Accessory Dwelling Units from the ground up — garage conversions, detached backyard cottages, and in-law suites. Fully permitted and South Bay compliant.',
    image: '/images/adu-finished.jpg',
    bg: null,
    href: '#contact',
    badge: 'High Demand in Bay Area',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            From kitchens to full home renovations — every project gets the same attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-border rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div
                className="h-52 overflow-hidden bg-gray-soft"
                style={service.bg ? { background: service.bg } : undefined}
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {!service.image && (
                  <div className="w-full h-full bg-charcoal flex flex-col items-center justify-center gap-3">
                    <svg className="w-12 h-12 text-amber/40" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                    <p className="text-white/20 font-heading font-bold text-xs tracking-widest uppercase">Photo Coming Soon</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-amber font-heading font-semibold text-xs tracking-widest uppercase">
                    {service.title}
                  </p>
                  {'badge' in service && service.badge && (
                    <span className="bg-amber/10 text-amber font-heading font-semibold text-xs px-2 py-0.5 rounded-full border border-amber/20">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                  {service.headline}
                </h3>
                <p className="text-gray-mid text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="text-amber font-heading font-semibold text-sm tracking-wide hover:text-amber-dark transition-colors inline-flex items-center gap-2"
                >
                  Get a Free Estimate
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
