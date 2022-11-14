import styles from './ClientsFeedback.module.css'
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
        {data!.map(client => {
          return (
            <div className={styles['client']}>
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
