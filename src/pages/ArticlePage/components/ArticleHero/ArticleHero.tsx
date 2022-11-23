import { useParams } from 'react-router-dom'
import { useGetAllPostsQuery } from '../../../../../redux'
import { BlogHero } from '../../../../components/BlogHero/BlogHero'
import styles from './ArticleHero.module.css'

export function ArticleHero() {
  const { data, isLoading, isError } = useGetAllPostsQuery()
  if (isLoading) {
    return <h1>isLoading</h1>
  }
  if (isError) {
    return <h1>isLoading</h1>
  }

  const { id } = useParams()

  const currentArticle = data!.filter(post => {
    return post.id === parseInt(id!)
  })[0]

  return (
    <BlogHero>
      {' '}
      <h1 className={styles['title']}>{currentArticle.title}</h1>{' '}
      <h4 className={styles['subtitle']}>
        Home - Blog Page - {currentArticle.type}
      </h4>
    </BlogHero>
  )
}
