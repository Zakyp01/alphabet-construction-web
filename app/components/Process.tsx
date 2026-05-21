const steps = [
  {
    number: '01',
    title: 'Free On-Site Estimate',
    body: 'We visit your home, listen to your vision, and assess the space. You get a real scope and a real number — no obligations, no pressure.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    body: 'We finalize materials, timeline, and budget together. Everything is documented clearly before a single tool is picked up.',
  },
  {
    number: '03',
    title: 'Construction',
    body: 'Our team gets to work with consistent communication throughout. You\'ll always know what\'s happening and what\'s next.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    body: 'We walk through the completed project with you, address any details, and make sure you\'re 100% satisfied before we leave.',
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="section-title">Simple. Transparent. Done Right.</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            From first call to final walkthrough — here's exactly what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-border z-0 -translate-y-px" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber rounded-sm flex items-center justify-center mb-5">
                  <span className="font-heading font-bold text-white text-xl">{step.number}</span>
                </div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-3">{step.title}</h3>
                <p className="text-gray-mid text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary">
            Start With a Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
