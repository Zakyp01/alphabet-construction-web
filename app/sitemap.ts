import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const BASE_URL = 'https://alphabetconstruction.us'

const services = [
  'kitchen-remodeling',
  'bathroom-modernization',
  'adu-construction',
  'deck-construction',
  'exterior-restoration',
  'whole-home-renovation',
]

const cities = [
  'campbell',
  'san-jose',
  'sunnyvale',
  'cupertino',
  'santa-clara',
  'los-gatos',
  'saratoga',
  'los-altos',
  'mountain-view',
  'palo-alto',
  'milpitas',
  'morgan-hill',
  'gilroy',
  'los-altos-hills',
  'fremont',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-22')

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const locationPages: MetadataRoute.Sitemap = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${BASE_URL}/${service}/${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  const blogListPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...locationPages, ...blogListPage, ...blogPostPages]
}
