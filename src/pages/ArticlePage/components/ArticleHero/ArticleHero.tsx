import { useParams } from 'react-router-dom'
import { IOurBlog } from '../../../../../redux'

import { BlogHero } from '../../../../components/BlogHero/BlogHero'
import styles from './ArticleHero.module.css'

interface Props {
  data?: IOurBlog[]
}

export function ArticleHero({ data }: Props) {
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
