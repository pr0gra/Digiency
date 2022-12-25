import { useGetOurTestimonialQuery } from '../../../../../redux'
import styles from './OurTestimonial.module.css'
import arrowButton from '../../../../assets/icons/our-testimonial-arrow.svg'
import cx from 'classnames'
import StarRatings from 'react-star-ratings'
import { useState } from 'react'
import doubleQuotes from '../../../../assets/icons/double-quotes.svg'

export function OurTestimonial() {
  const { data, isError, isLoading } = useGetOurTestimonialQuery()
  const [currentComments, setCurrentComments] = useState(3)

  if (isLoading) {
    return <h2>Loading</h2>
  }
  if (isError) {
    return <h2>Error</h2>
  }

  return (
    <div className={styles['our-testimonial']}>
      <div className={styles['text-part']}>
        <p className={styles['subtitle']}>____ Our Testimonial ____</p>
        <h2 className={styles['title']}>What Our Client Saying</h2>
      </div>
      <div className={styles['comments-part']}>
        <button
          onClick={e => {
            setCurrentComments(currentComments - 3)
          }}
          className={cx(
            styles['arrow-button'],
            styles['left-button'],
            currentComments - 3 <= 0 && styles['button-disabled'],
          )}
        >
          <img
            className={styles['arrow-button-img']}
            src={arrowButton}
            alt=""
          />
        </button>
        <div className={styles['slider-part']}>
          {data?.slice(currentComments - 3, currentComments).map(comment => {
            return (
              <div key={comment.id} className={styles['comment-item']}>
                <StarRatings
                  rating={comment.rating}
                  starRatedColor="#ff5300"
                  numberOfStars={6}
                  starDimension="26px"
                  name="rating"
                />
                <p className={styles['comment-text']}>{comment.comment}</p>
                <div className={styles['bottom-part']}>
                  {' '}
                  <div className={styles['user-info']}>
                    <img
                      className={styles['user-info-avatar-image']}
                      src={`/src/assets/icons/${comment.avatar}`}
                      alt=""
                    />
                    <div className={styles['user-info-text-part']}>
                      {' '}
                      <h3 className={styles['user-name']}>{comment.name}</h3>
                      <p className={styles['user-position']}>
                        {comment.position}
                      </p>{' '}
                    </div>
                  </div>
                  <img src={doubleQuotes} alt="" />
                </div>
              </div>
            )
          })}
        </div>
        <button
          onClick={e => {
            setCurrentComments(currentComments + 3)
          }}
          className={cx(
            styles['arrow-button'],
            styles['right-button'],
            currentComments + 3 > data?.length && styles['button-disabled'],
          )}
        >
          <img
            className={styles['arrow-button-img']}
            src={arrowButton}
            alt=""
          />
        </button>
      </div>
    </div>
  )
}
