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

export function OurBlogMain() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeButton, setActiveButton] = useState(0)

  const { data, isLoading, isError } = useGetOurBlogsQuery(currentPage)
  if (isLoading) return <h1>loading</h1>
  if (isError) return <h1>Error</h1>
  function getPaginationNumberArray() {
    let paginationButtons = []
    let articleBlockNumber = 0
    while (articleBlockNumber < Math.ceil(10 / 5)) {
      articleBlockNumber += 1
      paginationButtons.push(articleBlockNumber)
    }
    return paginationButtons
  }

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
              <Button buttonType="button-primary">Read More</Button>
            </div>
          )
        })}{' '}
        <div className={styles['pagination']}>
          {getPaginationNumberArray().map((number, index) => {
            return (
              <button
                key={index}
                className={cx(
                  styles['pagination-number-button'],
                  index === activeButton && styles['active-button'],
                )}
                onClick={e => {
                  setCurrentPage(number)
                  setActiveButton(index)
                }}
              >
                <h2
                  className={cx(
                    styles['pagination-number'],
                    index === activeButton && styles['active-text'],
                  )}
                >
                  {number < 10 ? `0${number}` : number}
                </h2>
              </button>
            )
          })}
        </div>
      </div>
      <SearchPart />
    </div>
  )
}
