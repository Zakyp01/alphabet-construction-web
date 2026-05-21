const reviews = [
  {
    name: 'Nick Dawes',
    badge: null,
    date: '7 weeks ago',
    stars: 5,
    text: 'Zack\'s team got the entire job done in about a week. They worked independently, coming into the house and working through the day. On the last day, they touched up the paint job and made sure everything was polished, and we did a walkthrough before they left. My wife and I are really happy with their work product and how efficiently and independently they got things done.',
    service: 'Ceiling, Texturing & Lighting',
  },
  {
    name: 'Cara Li',
    badge: null,
    date: 'May 2025',
    stars: 5,
    text: 'Alphabet Construction did an amazing job with our kitchen remodel! Zack and his team are very skilled and got the job done in a timely manner. Zack is very honest and knowledgeable — he would often suggest improvements I didn\'t even think of. It was a pleasure working with Alphabet from start to finish, and I will definitely call them again!',
    service: 'Kitchen Remodel',
  },
  {
    name: 'Jason Whetstone',
    badge: 'Local Guide',
    date: '27 weeks ago',
    stars: 5,
    text: 'Super responsive, fair pricing, hard working and on-time. Wall repair looks flawless and went above and beyond to ensure no structural or plumbing was damaged. Zack was able to fit in additional work between coats of paint at an additionally fair price. Will be using Alphabet in the future for sure.',
    service: 'Interior & Exterior Repair',
  },
  {
    name: 'Sonic Bodyboarder',
    badge: null,
    date: 'May 2025',
    stars: 5,
    text: 'Alphabet Construction came in after I had heavy water damage in my master bedroom and bathroom. Their company was very professional, and they got the job done sooner than I expected. I was very impressed with their carpentry, and everything turned out wonderfully.',
    service: 'Water Damage Restoration',
  },
  {
    name: 'Debbie Rosenberg',
    badge: 'Local Guide',
    date: 'November 2024',
    stars: 5,
    text: 'My experience was exceptionally good. Zak was on time and I was impressed with his professionalism and care in his work. Communication both before and during service was easy.',
    service: 'Home Services',
  },
  {
    name: 'jon campbell',
    badge: null,
    date: 'September 2024',
    stars: 5,
    text: 'Uzak installed 2 ceiling fans for us, involving opening up the sheetrock, installing new switches and wiring, then closing back up, retexturing, and repainting. The job looks great — he went back and got new paint when the first bucket didn\'t quite match. Great to work with and considerate of our tenants. Would definitely recommend.',
    service: 'Electrical & Drywall',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-3">Reviews</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            What Bay Area Homeowners Say
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
            <a
              href="https://g.co/kgs/alphabet-construction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              {/* Google G icon */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <span key={i} className="text-amber text-lg">★</span>)}
              </div>
              <span className="text-white font-heading font-bold text-xl">5.0</span>
              <span className="text-white/50 text-sm">· 18 Reviews</span>
            </a>
            <div className="w-px h-5 bg-white/20 hidden sm:block" />
            <a
              href="https://www.yelp.com/biz/alphabet-construction-and-remodeling-sunnyvale-4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              {/* Yelp icon */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF1A1A">
                <path d="M20.16 12.73l-4.703 1.16a1.56 1.56 0 01-1.916-1.099 1.56 1.56 0 01.411-1.524l3.604-3.173a8.34 8.34 0 012.604 4.636zM12.99 8.52a1.56 1.56 0 01-1.925.985L6.49 7.641A8.373 8.373 0 0112 3.662c.347 0 .688.022 1.024.063L12.99 8.52zM10.79 14.4a1.56 1.56 0 01-.028 1.955l-3.17 3.56A8.332 8.332 0 014.5 14.55a8.38 8.38 0 01.302-2.24l4.93.986a1.56 1.56 0 011.058 1.104zm1.434 1.96a1.56 1.56 0 011.822-1.132l4.695 1.14a8.354 8.354 0 01-5.21 4.27l-1.307-4.278zm-3.3-6.892a1.56 1.56 0 01-1.06 1.928l-4.554 1.28a8.34 8.34 0 01.495-5.37l5.12 2.162z"/>
              </svg>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <span key={i} className="text-red-400 text-lg">★</span>)}
              </div>
              <span className="text-white font-heading font-bold text-xl">5.0</span>
              <span className="text-white/50 text-sm">· 54 Reviews</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/8 transition-colors duration-200"
            >
              <Stars count={r.stars} />
              <p className="text-white/80 text-sm leading-relaxed mt-4 mb-6 italic">
                "{r.text}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{r.name}</p>
                  {r.badge && (
                    <p className="text-amber text-xs mt-0.5">{r.badge}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs">{r.date}</p>
                  <p className="text-white/40 text-xs mt-0.5">{r.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/alphabet-construction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors font-body"
          >
            View all reviews on Google
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
