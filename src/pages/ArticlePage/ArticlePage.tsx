import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { ArticleHero } from './components/ArticleHero/ArticleHero'
import { ArticleMain } from './components/ArticleMain/ArticleMain'

export function ArticlePage() {
  return (
    <>
      <Header />
      <ArticleHero />
      <ArticleMain />
      <Footer />
    </>
  )
}
