import { useGetAllPostsQuery } from '../../../redux'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { ArticleHero } from './components/ArticleHero/ArticleHero'
import { ArticleMain } from './components/ArticleMain/ArticleMain'

export function ArticlePage() {
  const { data, isLoading, isError } = useGetAllPostsQuery()
  if (isLoading) {
    return <h1>isLoading</h1>
  }
  if (isError) {
    return <h1>isLoading</h1>
  }

  return (
    <>
      <Header />
      <ArticleHero data={data} />
      <ArticleMain data={data} />
      <Footer />
    </>
  )
}
