import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Remodeling Blog & Guides | Alphabet Construction and Remodeling',
  description: 'Practical guides, cost breakdowns, and tips for Bay Area homeowners planning kitchen remodels, bathroom renovations, and ADU construction in San Jose and Santa Clara County.',
  keywords: 'kitchen remodel cost San Jose, ADU construction Bay Area, bathroom remodel cost, remodeling tips Santa Clara County',
  alternates: {
    canonical: 'https://alphabetconstruction.us/blog',
  },
  openGraph: {
    title: 'Remodeling Blog & Guides | Alphabet Construction and Remodeling',
    description: 'Practical guides and cost breakdowns for Bay Area homeowners planning kitchen remodels, bathroom renovations, and ADU construction.',
    url: 'https://alphabetconstruction.us/blog',
    siteName: 'Alphabet Construction and Remodeling',
    type: 'website',
  },
}

const categoryColors: Record<string, string> = {
  'Kitchen Remodeling': 'bg-amber/10 text-amber border-amber/20',
  'ADU Construction': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Bathroom Remodeling': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Tips & Advice': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function BlogPage() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-amber font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Insights &amp; Guides
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Remodeling Insights &amp; Guides
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Practical advice, real cost breakdowns, and expert tips for Bay Area homeowners planning their next remodeling project.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-soft py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const badgeClass = categoryColors[post.category] ?? 'bg-amber/10 text-amber border-amber/20'
              return (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-border rounded-sm flex flex-col hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="p-7 flex flex-col flex-1">
                    {/* Category badge */}
                    <span className={`inline-block self-start text-xs font-heading font-semibold tracking-wider uppercase border rounded-sm px-3 py-1 mb-4 ${badgeClass}`}>
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-heading font-bold text-charcoal text-xl leading-snug mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-amber transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="font-body text-gray-mid text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-border">
                      <div className="flex items-center gap-3 text-xs text-gray-mid font-body">
                        <span>{post.date}</span>
                        <span className="text-gray-border">|</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-amber font-heading font-semibold text-xs tracking-wide hover:underline flex items-center gap-1"
                      >
                        Read Article
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-body text-white/60 mb-8">
            Get a free on-site estimate from Alphabet Construction and Remodeling. Serving San Jose, Campbell, Sunnyvale, and all of Santa Clara County.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4085394747" className="btn-secondary text-sm px-7 py-3">
              (408) 539-4747
            </a>
            <Link href="/#contact" className="btn-primary text-sm px-7 py-3">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
