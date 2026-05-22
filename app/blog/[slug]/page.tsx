import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-posts'

const BASE_URL = 'https://alphabetconstruction.us'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Alphabet Construction and Remodeling`,
    description: post.excerpt,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'Alphabet Construction and Remodeling',
      type: 'article',
      publishedTime: post.date,
    },
  }
}

const categoryColors: Record<string, string> = {
  'Kitchen Remodeling': 'bg-amber/10 text-amber border-amber/20',
  'ADU Construction': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Bathroom Remodeling': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Tips & Advice': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const badgeClass = categoryColors[post.category] ?? 'bg-amber/10 text-amber border-amber/20'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'Alphabet Construction and Remodeling',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alphabet Construction and Remodeling',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header spacer */}
      <div className="bg-charcoal h-24" />

      <div className="bg-gray-soft min-h-screen py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12 items-start">

            {/* Main content */}
            <article className="max-w-3xl">
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-mid hover:text-amber font-body text-sm mb-8 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Blog
              </Link>

              {/* Post header */}
              <div className="bg-white border border-gray-border rounded-sm p-8 md:p-12 mb-8">
                <span className={`inline-block text-xs font-heading font-semibold tracking-wider uppercase border rounded-sm px-3 py-1 mb-5 ${badgeClass}`}>
                  {post.category}
                </span>

                <h1 className="font-heading font-bold text-charcoal text-3xl md:text-4xl leading-tight mb-5">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-mid font-body pb-6 border-b border-gray-border mb-8">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Campbell, CA</span>
                  </div>
                </div>

                {/* Article content */}
                <div
                  className="
                    font-body text-charcoal leading-relaxed
                    [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-charcoal [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug
                    [&_p]:mb-5 [&_p]:text-gray-700 [&_p]:leading-7
                    [&_ul]:mb-6 [&_ul]:pl-6 [&_ul]:space-y-2
                    [&_li]:text-gray-700 [&_li]:leading-7 [&_li]:list-disc
                    [&_strong]:font-semibold [&_strong]:text-charcoal
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden bg-charcoal rounded-sm p-7 text-center">
                <h3 className="font-heading font-bold text-white text-xl mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="font-body text-white/60 text-sm mb-5">
                  Free on-site estimates throughout San Jose and Santa Clara County.
                </p>
                <a
                  href="tel:4085394747"
                  className="block w-full text-center bg-amber text-charcoal font-heading font-bold text-sm py-3 rounded-sm mb-3 hover:bg-amber/90 transition-colors"
                >
                  (408) 539-4747
                </a>
                <Link
                  href="/#contact"
                  className="block w-full text-center border border-white/20 text-white font-heading font-semibold text-sm py-3 rounded-sm hover:border-amber hover:text-amber transition-colors"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block sticky top-28 space-y-6">
              {/* CTA card */}
              <div className="bg-charcoal rounded-sm p-7">
                <h3 className="font-heading font-bold text-white text-xl mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="font-body text-white/60 text-sm mb-6 leading-relaxed">
                  Get a free on-site estimate. We serve San Jose, Campbell, Sunnyvale, and all of Santa Clara County.
                </p>
                <a
                  href="tel:4085394747"
                  className="flex items-center justify-center gap-2 w-full bg-amber text-charcoal font-heading font-bold text-sm py-3.5 rounded-sm mb-3 hover:bg-amber/90 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (408) 539-4747
                </a>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center w-full border border-white/20 text-white font-heading font-semibold text-sm py-3.5 rounded-sm hover:border-amber hover:text-amber transition-colors"
                >
                  Free Estimate Online
                </Link>
              </div>

              {/* Trust signals */}
              <div className="bg-white border border-gray-border rounded-sm p-6 space-y-4">
                <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider">
                  Why Alphabet Construction
                </h4>
                {[
                  { icon: '✓', text: 'CA CSLB Licensed #1074290' },
                  { icon: '✓', text: 'Fully insured (GL + Workers Comp)' },
                  { icon: '✓', text: '5.0 stars on Google &amp; Yelp' },
                  { icon: '✓', text: 'Free on-site estimates' },
                  { icon: '✓', text: 'Serving Bay Area since 2016' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-amber font-bold text-sm mt-0.5 flex-shrink-0">{item.icon}</span>
                    <span
                      className="font-body text-gray-mid text-sm"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                ))}
              </div>

              {/* More posts */}
              <div className="bg-white border border-gray-border rounded-sm p-6">
                <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider mb-4">
                  More Articles
                </h4>
                <div className="space-y-4">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <p className="font-body text-charcoal text-sm leading-snug group-hover:text-amber transition-colors duration-200 mb-1">
                          {related.title}
                        </p>
                        <p className="font-body text-gray-mid text-xs">{related.readTime}</p>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  )
}
