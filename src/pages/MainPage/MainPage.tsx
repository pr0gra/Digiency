import { AboutUs } from './components/AboutUs/AboutUs'
import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import { MainHero } from './components/MainHero/MainHero'
import { OurExperience } from './components/OurExperience/OurExperience'
import { TeamMember } from './components/TeamMember/TeamMember'
import { ContactUs } from './components/ContactUs/ContactUs'

export function MainPage() {
  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <MainHero />
      <Layout>
        <AboutUs />
      </Layout>
      <OurExperience />
      <Layout>
        <TeamMember />
        <ContactUs />
      </Layout>
    </>
  )
}
