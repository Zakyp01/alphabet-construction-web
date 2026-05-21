export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Fallback image if video fails */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/kitchen-hero.jpg')" }}
        />
      </video>
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32 pt-40">
        <div className="inline-flex flex-wrap justify-center items-center gap-3 mb-8">
          <a href="https://g.co/kgs/alphabet-construction" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 hover:bg-white/15 transition-colors">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-amber text-sm">★★★★★</span>
            <span className="text-white text-sm font-medium">5.0 · 18 Google Reviews</span>
          </a>
          <a href="https://www.yelp.com/biz/alphabet-construction-and-remodeling-sunnyvale-4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 hover:bg-white/15 transition-colors">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF1A1A">
              <path d="M20.16 12.73l-4.703 1.16a1.56 1.56 0 01-1.916-1.099 1.56 1.56 0 01.411-1.524l3.604-3.173a8.34 8.34 0 012.604 4.636zM12.99 8.52a1.56 1.56 0 01-1.925.985L6.49 7.641A8.373 8.373 0 0112 3.662c.347 0 .688.022 1.024.063L12.99 8.52zM10.79 14.4a1.56 1.56 0 01-.028 1.955l-3.17 3.56A8.332 8.332 0 014.5 14.55a8.38 8.38 0 01.302-2.24l4.93.986a1.56 1.56 0 011.058 1.104zm1.434 1.96a1.56 1.56 0 011.822-1.132l4.695 1.14a8.354 8.354 0 01-5.21 4.27l-1.307-4.278zm-3.3-6.892a1.56 1.56 0 01-1.06 1.928l-4.554 1.28a8.34 8.34 0 01.495-5.37l5.12 2.162z"/>
            </svg>
            <span className="text-red-400 text-sm">★★★★★</span>
            <span className="text-white text-sm font-medium">5.0 · 54 Yelp Reviews</span>
          </a>
        </div>

        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
          The Remodeling Contractor<br />
          <span className="text-amber">Your Neighbors Actually Recommend</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Licensed, insured, and backed by hundreds of satisfied Bay Area homeowners.
          We show up, communicate clearly, and deliver work you'll be proud of for years.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-sm">
            Book My Free On-Site Estimate
          </a>
          <a href="/portfolio" className="btn-outline text-sm">
            See Our Work
          </a>
        </div>

        <p className="text-white/50 text-sm mt-8 font-body">
          Serving all of Santa Clara County & the Bay Area · Campbell, CA
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
