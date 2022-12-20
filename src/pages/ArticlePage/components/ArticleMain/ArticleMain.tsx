import { IOurBlog } from '../../../../../redux'
import { SearchPart } from '../../../OurBlogPage/components/SearchPart/SearchPart'
import styles from './ArticleMain.module.css'

interface Props {
  data?: IOurBlog[]
}

export function ArticleMain({ data }: Props) {
  return (
    <div className={styles['article-main']}>
      <SearchPart />
    </div>
  )
}
