import styles from './ClientsFeedback.module.css'
import {
  IClientsFeedback,
  useGetClientsFeedbackQuery,
} from '../../../../../redux'
import { useState } from 'react'
import cx from 'classnames'

export function ClientsFeedback() {
  const { data, isLoading, isError } = useGetClientsFeedbackQuery()
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
    <div className={styles['clients-feedback']}>
      <div className={styles['clients-feedback-text-part']}>
        <p className={styles['clients-feedback-text-part-subtitle']}>
          Clients Feedback
        </p>
        <h2 className={styles['clients-feedback-text-part-title']}>
          Some <span>Great Words</span> From Our Clients
        </h2>
      </div>
      <div className={styles['clients-feedback-scroll-part']}>
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
      <div className={styles['clients-feedback-scroll-part-mobile']}>
        {data!.map(client => {
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
      <div className={styles['pagination']}>
        {chunkify(data!).map((_, i) => {
          return (
            <button
              onClick={() => {
                setVisibleComments(i)
                setActiveButton(i)
              }}
              key={i}
              className={cx(
                activeButton == i
                  ? styles['active-pagination-dot']
                  : styles['pagination-dot'],
              )}
            ></button>
          )
        })}{' '}
      </div>
    </div>
  )
}
