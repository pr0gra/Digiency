import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Hero } from './components/Hero/Hero'
import { HomeFooter } from './components/HomeFooter/HomeFooter'
import { OurCapabilities } from './components/OurCapabilities/OurCapabilities'
import { OurCaseStudy } from './components/OurCaseStudy/OurCaseStudy'
import { OurServices } from './components/OurServices/OurServices'
import { OurTestimonial } from './components/OurTestimonial/OurTestimonial'
import { Subscribe } from './components/Subscribe/Subscribe'

export function HomePage() {
  return (
    <>
      <Header
        HomeVisibleButton={true}
        style={{ background: 'var(--background-colorful-component)' }}
      />
      <Hero />

      <OurServices />

      <AboutUs />

      <OurCaseStudy />

      <OurTestimonial />

      <OurCapabilities />
      <Subscribe />

      <HomeFooter />
    </>
  )
}
