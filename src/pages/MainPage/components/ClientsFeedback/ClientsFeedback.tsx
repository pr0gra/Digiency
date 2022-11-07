import styles from './ClientsFeedback.module.css'
import { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useGetClientsFeedbackQuery } from '../../../../../redux'

export function ClientsFeedback() {
  const { data, isLoading, isError } = useGetClientsFeedbackQuery()
  if (isLoading) {
    return <h2>Loading</h2>
  }
  if (isError) {
    return <h2>Error</h2>
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
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={100}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data!.map(client => {
            return (
              <SwiperSlide key={client.id}>
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
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
