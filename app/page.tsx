import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FadeInSection from './components/FadeInSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeInSection direction="none">
          <TrustBar />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <WhyUs />
        </FadeInSection>
        <FadeInSection>
          <Process />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <ServiceAreas />
        </FadeInSection>
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
    </>
  )
}
