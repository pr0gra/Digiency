import { useGetOurBlogsQuery } from '../../../../../redux'
import { Picture } from '../../../../components/Picture/Picture'
import styles from './OurBlogMain.module.css'

import { Button } from '../../../../components/Button/Button'
import { useState, useEffect } from 'react'
import { SearchPart } from '../SearchPart/SearchPart'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks'
import { fetchArticles } from '../../../../../redux/articleSlice'
import { useSelector } from 'react-redux'
import { ArticlePage } from '../../../ArticlePage/ArticlePage'

export function OurBlogMain() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeButton, setActiveButton] = useState(0)
  const [searchText, setSearchText] = useState('')
  const dispatch = useAppDispatch()
  const { list, pagination, loading, error } = useAppSelector(
    state => state.articles,
  )

  // const { data, isLoading, isError } = useGetOurBlogsQuery({
  //   currentPage,
  //   searchText,
  // })
  // if (isLoading) return <h1>loading</h1>
  // if (isError) return <h1>Error</h1>

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <div className={styles['our-blog-main']}>
      <div className={styles['articles-part']}>
        {list.map(article => {
          console.log(article.img)
          return (
            <div key={article.id} className={styles['article']}>
              <img
                src={`https://picsum.photos/id/${article.id}/200/300`}
                alt=""
              />
              <Link to={`blog/${article.id}`}>
                <Button buttonType="button-primary">Read More</Button>
              </Link>
            </div>
          )
        })}
        <div className={styles['pagination']}></div>
      </div>
      <SearchPart setSearchText={setSearchText} />
    </div>
  )
}
