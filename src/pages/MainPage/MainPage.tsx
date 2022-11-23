import { AboutUs } from './components/AboutUs/AboutUs'
import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import { MainHero } from './components/MainHero/MainHero'
import { OurExperience } from './components/OurExperience/OurExperience'
import { TeamMember } from './components/TeamMember/TeamMember'
import { ContactUs } from './components/ContactUs/ContactUs'
import { OurWork } from './components/OurWork/OurWork'
import { ClientsFeedback } from './components/ClientsFeedback/ClientsFeedback'
import { Footer } from '../../components/Footer/Footer'
import { FooterBottom } from '../../components/FooterBottom/FooterBottom'

export function MainPage() {
  return (
    <>
      <Header />
      <MainHero />
      <Layout>
        <AboutUs />
      </Layout>
      <OurExperience />
      <Layout>
        <TeamMember />
        <OurWork />
      </Layout>
      <ClientsFeedback />
      <Layout>
        <ContactUs />
      </Layout>
      <Footer />
      <FooterBottom />
    </>
  )
}
