import { useParams } from 'react-router-dom'
import { IOurBlog } from '../../../../../redux'
import { Picture } from '../../../../components/Picture/Picture'
import { SearchPart } from '../../../OurBlogPage/components/SearchPart/SearchPart'
import styles from './ArticleMain.module.css'
import timerIcon from '../../../../assets/icons/our-blog-timer.svg'
import personIcon from '../../../../assets/icons/our-blog-person.svg'
import messageIcon from '../../../../assets/icons/our-blog-message.svg'
import { useState } from 'react'

interface Props {
  data?: IOurBlog[]
}

export function ArticleMain({ data }: Props) {
  const { id } = useParams()
  const [state, setState] = useState('')

  const currentArticle = data!.find(post => post.id == parseInt(id!))

  return (
    <div className={styles['article-main']}>
      <div className={styles['content-part']}>
        <Picture className={styles['main-img']} imgName={currentArticle!.img} />
        <ul className={styles['article-info']}>
          <li className={styles['article-info-item']}>
            <img className={styles['article-img']} src={timerIcon} alt="" />
            <p className={styles['article-info-text']}>
              {currentArticle?.created_at}
            </p>
          </li>
          <li className={styles['article-info-item']}>
            <img className={styles['article-img']} src={personIcon} alt="" />
            <p className={styles['article-info-text']}>
              {currentArticle?.author}
            </p>
          </li>
          <li className={styles['article-info-item']}>
            <img className={styles['article-img']} src={messageIcon} alt="" />
            <p className={styles['article-info-text']}>10 Comment</p>
          </li>
        </ul>
        <div
          className={styles['content']}
          dangerouslySetInnerHTML={{
            __html: `${currentArticle?.full_content}`,
          }}
        />
      </div>
      <SearchPart setSearchText={setState} />
    </div>
  )
}
