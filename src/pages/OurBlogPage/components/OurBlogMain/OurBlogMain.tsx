import styles from './OurBlogMain.module.css'
import { Button } from '../../../../components/Button/Button'
import { useState, useEffect } from 'react'
import { SearchPart } from '../SearchPart/SearchPart'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks'
import { fetchArticles } from '../../../../../redux/articleSlice'
import dateIcon from '../../../../assets/icons/our-blog-timer.svg'
import authorIcon from '../../../../assets/icons/our-blog-person.svg'
import commentsIcon from '../../../../assets/icons/our-blog-message.svg'
import { Picture } from '../../../../components/Picture/Picture'
import cx from 'classnames'

export function OurBlogMain() {
  function Pagination() {
    const latestPaginationNum = Number(
      new URL(pagination.last).searchParams.get('_page'),
    )

    const paginationArr = []
    for (let i = 0; i < latestPaginationNum; i++) {
      paginationArr.push(i)
    }
    return paginationArr
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [activeButton, setActiveButton] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [state, setState] = useState('')

  useEffect(() => {
    dispatch(fetchArticles({ currentPage, searchText }))
  }, [currentPage, searchText])

  const dispatch = useAppDispatch()
  const { list, pagination, loading, error } = useAppSelector(
    state => state.articles,
  )
  console.log(pagination)

  return (
    <div className={styles['our-blog-main']}>
      <div className={styles['articles-part']}>
        {list?.map(article => {
          return (
            <div key={article.id} className={styles['article']}>
              <Picture
                className={styles['article-img']}
                imgName={article.img}
                alt="img"
              />
              <div className={styles['bottom-part']}>
                <div className={styles['article-info']}>
                  <div className={styles['info-item']}>
                    <img className={styles['info-img']} src={dateIcon} alt="" />
                    <p className={styles['info-text']}>
                      {article.created_at}
                    </p>{' '}
                  </div>
                  <div className={styles['info-item']}>
                    <img
                      className={styles['info-img']}
                      src={authorIcon}
                      alt=""
                    />{' '}
                    <p className={styles['info-text']}>{article.author}</p>{' '}
                  </div>
                  <div className={styles['info-item']}>
                    <img
                      className={styles['info-img']}
                      src={commentsIcon}
                      alt=""
                    />{' '}
                    <p className={styles['info-text']}>10 Comments</p>{' '}
                  </div>
                </div>
                <h2 className={styles['title']}>{article.title}</h2>
                <p className={styles['text']}>{article.content}</p>
                <Link to={`/blog/${article.id}`}>
                  <Button buttonType="button-primary">Read More</Button>
                </Link>
              </div>
            </div>
          )
        })}
        <div className={styles['pagination']}>
          {list.length &&
            pagination.last != undefined &&
            Pagination().map((paginationNum, index) => {
              const realPaginationNum = paginationNum + 1
              return (
                <button
                  key={index}
                  onClick={e => {
                    setCurrentPage(realPaginationNum)
                    setActiveButton(index)
                  }}
                  className={cx(
                    styles['button'],
                    activeButton == index && styles['active-button'],
                  )}
                >
                  {paginationNum < 10
                    ? '0' + realPaginationNum
                    : realPaginationNum}
                </button>
              )
            })}
        </div>
      </div>

      <SearchPart setSearchText={setSearchText} />
    </div>
  )
}
