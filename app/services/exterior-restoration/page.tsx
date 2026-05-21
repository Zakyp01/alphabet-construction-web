import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Exterior Restoration & Repair | Alphabet Construction',
  description:
    'Exterior restoration, siding repair, painting, trim work, and water damage repair in Campbell and across the Bay Area. Licensed & insured. Free estimates.',
  keywords:
    'exterior restoration Bay Area, siding repair San Jose, exterior painting Campbell CA, water damage repair contractor, curb appeal upgrade Santa Clara County',
}

const included = [
  {
    title: 'Siding Repair & Replacement',
    description: 'Hardie board, fiber cement, wood, and vinyl siding repair, partial replacement, or full re-siding of your home.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Exterior Paint',
    description: 'Full exterior repaints including thorough prep, priming, and premium paint application on all surfaces.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Trim & Fascia',
    description: 'Rotted or damaged trim boards, fascia, and soffit replaced with moisture-resistant materials and properly painted.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Water Damage Repair',
    description: 'Assessment and full repair of moisture intrusion damage — dry rot, structural repairs, and weatherproofing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
  },
  {
    title: 'Curb Appeal Upgrades',
    description: 'Front entry improvements, porch updates, shutters, window trim, and landscaping-adjacent hardscape.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ExteriorRestorationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end pb-20 pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/exterior-room.jpg"
              alt="Exterior restoration by Alphabet Construction"
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
              Exterior Restoration &amp; Repair
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              From faded paint and damaged siding to full water damage restoration — we protect and beautify the outside of your home.
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
              <h2 className="section-title">What We Handle</h2>
              <p className="section-subtitle mx-auto">
                Comprehensive exterior work from cosmetic upgrades to structural damage repair — all permitted and warranted.
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
              "Super responsive, fair pricing, hard working and on-time. Zack and the crew did a fantastic job on the exterior of our home — the siding repair and paint job came out looking incredible. I've already recommended them to two neighbors. If you need a contractor in the Bay Area who actually shows up and does what they say, this is your team."
            </blockquote>
            <cite className="not-italic">
              <p className="font-heading font-bold text-charcoal">Jason Whetstone</p>
              <p className="text-gray-mid text-sm">Verified Google Review</p>
            </cite>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
                  Our Approach
                </p>
                <h2 className="section-title mb-6">
                  Diagnose First, Fix Right
                </h2>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Many exterior problems are symptoms of a deeper issue — paint that keeps failing often means there's moisture intrusion behind the wall. Siding that's cracking in one spot may be settling or structural. We don't just patch the visible problem and call it done.
                </p>
                <p className="text-gray-mid leading-relaxed mb-5">
                  Alphabet Construction inspects the full scope of exterior damage before providing a quote. We identify the root cause, explain what's needed and why, and deliver a fix that lasts — not a cosmetic band-aid.
                </p>
                <p className="text-gray-mid leading-relaxed">
                  All exterior restoration work is permitted where required and backed by our workmanship warranty.
                </p>
              </div>
              <div className="bg-gray-soft border border-gray-border rounded-sm p-8">
                <h3 className="font-heading font-bold text-charcoal text-xl mb-6">Signs Your Exterior Needs Attention</h3>
                <ul className="space-y-3">
                  {[
                    'Paint bubbling, peeling, or chalking — moisture behind the surface',
                    'Soft or spongy wood around windows, doors, or corners — rot damage',
                    'Visible cracks or gaps in siding — water and pest entry points',
                    'Rust streaks or staining on stucco or siding — metal flashing failure',
                    'Mold or mildew on exterior walls — moisture retention problem',
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-amber/20 border border-amber/30 rounded-sm flex-shrink-0 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                      </div>
                      <p className="text-gray-mid text-sm leading-relaxed">{sign}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Restore Your Home's Exterior?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Get a free on-site assessment and written estimate — no commitment required.
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
