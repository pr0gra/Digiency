import { useState } from 'react'
import { IOurBlog, useGetOurBlogsQuery } from '../../../../../redux'
import styles from './OurBlog.module.css'
import cx from 'classnames'

export function OurBlog() {
  const { data, isLoading, isError } = useGetOurBlogsQuery()
  const [visibleComments, setVisibleComments] = useState(0)
  const [activeButton, setActiveButton] = useState(0)

  if (isLoading) {
    return <h2>Loading</h2>
  }
  if (isError) {
    return <h2>Error</h2>
  }

  function chunkify(array: IOurBlog[], chunkSize = 2) {
    const chunks = Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, i) => {
        const start = chunkSize * i
        return array.slice(start, start + chunkSize)
      },
    )
    return chunks
  }

  return (
    <div className={styles['our-blog']}>
      <div className={styles['text-part']}>
        <p className={styles['subtitle']}>Our Blog</p>
        <h2 className={styles['title']}>
          {' '}
          Our Latest <span>Blogs Will Keep</span> Everyone Updated
        </h2>
      </div>
      <div className={styles['mobile-main-part']}>
        {data.map(blog => {
          return (
            <div className={styles['blog-container']}>
              <div className={styles['top-part']}>
                <div className={styles['container-text-part']}>
                  <p className={styles['type']}>{blog.type}</p>
                  <p className={styles['title']}>{blog.title}</p>
                </div>
                <img
                  className={styles['article-img']}
                  src={`/src/assets/images/${blog.img}.jpg`}
                  alt=""
                />
              </div>
              <div className={styles['author-part']}>
                <img
                  className={styles['avatar-img']}
                  src={`/src/assets/images/${blog.author.avatar}`}
                  alt=""
                />
                <div className={styles['author-info']}>
                  <h3 className={styles['name']}>{blog.author.name}</h3>
                  <p className={styles['date']}>
                    {blog.created_at}•{blog.author.time_to_read}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles['main-part']}>
        <div className={styles['main-top-part-container']}>
          <div className={styles['main-top-part']}>
            {chunkify(data!)
              .filter((test, i) => {
                if (i === visibleComments) {
                  return true
                }
              })[0]
              .map(blog => {
                return (
                  <div className={styles['blog-container']}>
                    <div className={styles['top-part']}>
                      <div className={styles['container-text-part']}>
                        <p className={styles['type']}>{blog.type}</p>
                        <h3 className={styles['title']}>{blog.title}</h3>
                      </div>
                      <img
                        className={styles['article-img']}
                        src={`/src/assets/images/${blog.img}.jpg`}
                        alt=""
                      />
                    </div>
                    <div className={styles['author-part']}>
                      <img
                        className={styles['avatar-img']}
                        src={`/src/assets/images/${blog.author.avatar}`}
                        alt=""
                      />
                      <div className={styles['author-info']}>
                        <h3 className={styles['name']}>{blog.author.name}</h3>
                        <p className={styles['date']}>
                          {blog.created_at}•{blog.author.time_to_read}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className={styles['pagination']}>
          {chunkify(data!).map((_, i) => {
            return (
              <button
                style={{
                  width: activeButton === i && '49px',
                  background: activeButton === i && ' #373737',
                }}
                onClick={() => {
                  setVisibleComments(i)
                  setActiveButton(i)
                }}
                key={i}
                className={cx(styles['pagination-dot'])}
              ></button>
            )
          })}{' '}
        </div>{' '}
      </div>
    </div>
  )
}
