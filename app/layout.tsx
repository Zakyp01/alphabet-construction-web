import type { Metadata } from 'next'
import './globals.css'
import EstimatePopup from './components/EstimatePopup'
import QuoteButton from './components/QuoteButton'

export const metadata: Metadata = {
  title: 'Alphabet Construction & Remodeling | Bay Area Contractor',
  description: 'Licensed & insured Bay Area remodeling contractor. Kitchen remodels, bathroom renovations, whole-home remodels. Serving Santa Clara County. Free on-site estimates.',
  keywords: 'remodeling contractor Bay Area, kitchen remodeling Santa Clara, bathroom renovation San Jose, home remodel Campbell CA',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Alphabet Construction and Remodeling",
  "url": "https://alphabetconstruction.us",
  "telephone": "+14085394747",
  "email": "constructionbayarea123@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "950 S McGlincy Ln",
    "addressLocality": "Campbell",
    "addressRegion": "CA",
    "postalCode": "95008",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.2802,
    "longitude": -121.9518
  },
  "areaServed": ["Campbell", "San Jose", "Sunnyvale", "Cupertino", "Santa Clara", "Los Gatos", "Saratoga", "Los Altos", "Mountain View", "Palo Alto", "Milpitas", "Morgan Hill", "Gilroy", "Los Altos Hills", "Fremont"],
  "license": "CA CSLB #1074290",
  "priceRange": "$$",
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  "sameAs": [
    "https://www.facebook.com/people/Alphabet-Construction-and-Remodeling/61573579337536/",
    "https://www.yelp.com/biz/alphabet-construction-and-remodeling-sunnyvale-4"
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <EstimatePopup />
        <QuoteButton />
      </body>
    </html>
  )
}
