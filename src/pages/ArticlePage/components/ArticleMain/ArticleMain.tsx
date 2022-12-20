import { useGetAllPostsQuery } from '../../../../../redux'
import { SearchPart } from '../../../OurBlogPage/components/SearchPart/SearchPart'
import styles from './ArticleMain.module.css'

export function ArticleMain() {
  const { data, isLoading, isError } = useGetAllPostsQuery()
  if (isLoading) {
    return <h1>isLoading</h1>
  }
  if (isError) {
    return <h1>isLoading</h1>
  }
  return (
    <div className={styles['article-main']}>
      <SearchPart />
    </div>
  )
}
