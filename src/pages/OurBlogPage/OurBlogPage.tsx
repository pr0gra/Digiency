import { Footer } from '../../components/Footer/Footer'
import { FooterBottom } from '../../components/FooterBottom/FooterBottom'
import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import { OurBlogHero } from './components/OurBlogHero/OurBlogHero'
import { OurBlogMain } from './components/OurBlogMain/OurBlogMain'

export function OurBlogPage() {
  return (
    <>
      <Header />
      <OurBlogHero />
      <Layout>
        <OurBlogMain />
      </Layout>
      <Footer />
      <FooterBottom />
    </>
  )
}
