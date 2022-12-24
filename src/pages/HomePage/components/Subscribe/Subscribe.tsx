import { Button } from '../../../../components/Button/Button'
import styles from './Subscribe.module.css'

export function Subscribe() {
  return (
    <div className={styles['subscribe-container']}>
      <div className={styles['subscribe']}>
        <div className={styles['text-part']}>
          {' '}
          <p className={styles['subtitle']}>Subscribe Newsletter ____</p>{' '}
          <h2 className={styles['title']}>Lets Stay In Touch</h2>{' '}
        </div>
        <div className={styles['input-part']}>
          <input
            placeholder="Enter your email"
            className={styles['input']}
            type="text"
          />
          <Button buttonType="button-primary">Subscribe Now</Button>
        </div>
      </div>
    </div>
  )
}
