import { useState } from 'react'
import { IClientsFeedback, useGetOurBlogsQuery } from '../../../../../redux'
import styles from './OurBlog.module.css'

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

  function chunkify(array: IClientsFeedback[], chunkSize = 2) {
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
        <p className={styles['subtitle']}></p>
        <h2 className={styles['title']}></h2>
      </div>
      <div className={styles['main-part']}>
        {chunkify(data!)
          .filter((test, i) => {
            if (i === visibleComments) {
              return true
            }
          })[0]
          .map(client => {
            return (
              <div key={client.id} className={styles['client']}>
                <img
                  className={styles['feedback-img']}
                  src={`/src/assets/images/${client.avatar}`}
                  alt=""
                />
                <div className={styles['feedback-container']}>
                  <div className={styles['feedback-container-text-part']}>
                    <p className={styles['clients-feedback-text-name']}>
                      {client.name}
                    </p>
                    <p className={styles['clients-feedback-text-positon']}>
                      {client.position}
                    </p>

                    <p className={styles['clients-feedback-text']}>
                      {client.comment}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
