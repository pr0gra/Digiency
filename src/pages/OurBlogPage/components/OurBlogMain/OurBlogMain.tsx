import { useGetOurBlogsQuery } from '../../../../../redux'
import { Picture } from '../../../../components/Picture/Picture'
import styles from './OurBlogMain.module.css'
import timerIcon from '../../../../assets/icons/our-blog-timer.svg'
import personIcon from '../../../../assets/icons/our-blog-person.svg'
import messageIcon from '../../../../assets/icons/our-blog-message.svg'
import { Button } from '../../../../components/Button/Button'
import { useState } from 'react'
import { SearchPart } from '../SearchPart/SearchPart'
import cx from 'classnames'
import { Link } from 'react-router-dom'

export function OurBlogMain() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeButton, setActiveButton] = useState(0)
  const [searchText, setSearchText] = useState('')

  const { data, isLoading, isError } = useGetOurBlogsQuery({
    currentPage,
    searchText,
  })
  if (isLoading) return <h1>loading</h1>
  if (isError) return <h1>Error</h1>
  console.log(data)
  return (
    <div className={styles['our-blog-main']}>
      <div className={styles['articles-part']}>
        {data?.map((article, index) => {
          return (
            <div key={index} className={styles['article']}>
              <Picture style={styles['main-img']} imgName={article.img} />
              <ul className={styles['article-info']}>
                <li className={styles['article-info-item']}>
                  <img
                    className={styles['article-img']}
                    src={timerIcon}
                    alt=""
                  />
                  <p className={styles['article-info-text']}>
                    {article.created_at}
                  </p>
                </li>
                <li className={styles['article-info-item']}>
                  <img
                    className={styles['article-img']}
                    src={personIcon}
                    alt=""
                  />
                  <p className={styles['article-info-text']}>
                    {article.author}
                  </p>
                </li>
                <li className={styles['article-info-item']}>
                  <img
                    className={styles['article-img']}
                    src={messageIcon}
                    alt=""
                  />
                  <p className={styles['article-info-text']}>10 Comment</p>
                </li>
              </ul>
              <h2 className={styles['title']}>{article.title}</h2>
              <p className={styles['text']}>{article.content}</p>
              <Link to={`/blog/${article.id}`} className={styles['link']}>
                Read More
              </Link>
            </div>
          )
        })}{' '}
        <div className={styles['pagination']}></div>
      </div>
      <SearchPart setSearchText={setSearchText} />
    </div>
  )
}
