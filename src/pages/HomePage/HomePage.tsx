import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Hero } from './components/Hero/Hero'
import { OurCaseStudy } from './components/OurCaseStudy/OurCaseStudy'
import { OurServices } from './components/OurServices/OurServices'
import { OurTestimonial } from './components/OurTestimonial/OurTestimonial'

export function HomePage() {
  return (
    <>
      <Header
        HomeVisibleButton={true}
        style={{ background: 'var(--orange-background)' }}
      />
      <Hero />
      <Layout>
        <OurServices />
      </Layout>
      <AboutUs />
      <Layout>
        <OurCaseStudy />
      </Layout>
      <OurTestimonial />
    </>
  )
}
