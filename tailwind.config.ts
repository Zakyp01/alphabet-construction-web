import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1E1E1E',
        'charcoal-light': '#2D2D2D',
        amber: '#E8922A',
        'amber-dark': '#C97A1F',
        'amber-light': '#F5A94A',
        'gray-soft': '#F8F8F8',
        'gray-mid': '#6B6B6B',
        'gray-border': '#E0E0E0',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
export default config
