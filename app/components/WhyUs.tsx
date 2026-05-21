const reasons = [
  {
    icon: (
      <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    title: 'Licensed & Insured, Always',
    body: 'CA CSLB certified. Every project is fully covered — so you\'re never left exposed if something unexpected happens.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
      </svg>
    ),
    title: 'No Surprises on Price or Timeline',
    body: 'You get a clear scope, a real number, and a schedule we stick to. No hidden fees, no vague "it depends."',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
      </svg>
    ),
    title: 'Free On-Site Estimate — We Come to You',
    body: 'One of our project leads visits your home, walks through your vision, and gives you a real assessment — free, no pressure.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
      </svg>
    ),
    title: 'Hundreds of Bay Area Homes Transformed',
    body: 'From San Jose to Sunnyvale, Campbell to Cupertino — we\'ve earned trust one project at a time, and the reviews show it.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-gray-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="section-title mb-6">
              Why Homeowners Choose<br />
              <span className="text-amber">Alphabet Construction</span>
            </h2>
            <p className="text-gray-mid text-lg leading-relaxed mb-10">
              We built this company on a simple belief: homeowners deserve a contractor who communicates clearly,
              shows up when they say they will, and stands behind their work.
            </p>

            <div className="space-y-8">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber/10 rounded-sm flex items-center justify-center text-2xl">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal text-base mb-1">{r.title}</h3>
                    <p className="text-gray-mid text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/bathroom-spa.jpg"
              alt="Alphabet Construction remodeling project"
              className="w-full rounded-sm shadow-card-hover object-cover h-[560px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 rounded-sm shadow-card">
              <p className="font-heading font-bold text-3xl text-amber">5.0★</p>
              <p className="font-heading font-semibold text-sm mt-1">Google Rating</p>
              <p className="text-white/60 text-xs">18 verified reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
