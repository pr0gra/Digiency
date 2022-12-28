import { Button } from '../../../../components/Button/Button'
import styles from './OurExperience.module.css'

export function OurExperience() {
  return (
    <div className={styles['our-experience']}>
      <div className={styles['our-experience-text-part']}>
        <p className={styles['our-experience-text-part-subtitle']}>
          Our Expereince
        </p>
        <h2 className={styles['our-experience-text-part-title']}>
          We Have Completed
          <span> 150+ Projects </span>
          Succesfully
        </h2>
        <p className={styles['our-experience-text-part-text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          imperdiet at a augue ullamcorper.
        </p>
        <p className={styles['our-experience-text-part-text']}>
          Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
          faucibus est, dui interdum ut amet.
        </p>

        <Button
          onClick={e => (window.location.href = '#contact-us')}
          buttonType="button-primary"
        >
          Contact Us
        </Button>
      </div>
      <div className={styles['our-experience-array-part']}>
        <div className={styles['our-experience-array-item']}>
          <h3 className={styles['our-experience-array-item-title']}>250+</h3>
          <p className={styles['our-experience-array-item-subtitle']}>
            Global Customer
          </p>
        </div>
        <div className={styles['our-experience-array-item']}>
          <h3 className={styles['our-experience-array-item-title']}>156+</h3>
          <p className={styles['our-experience-array-item-subtitle']}>
            Project Completed
          </p>
        </div>
        <div className={styles['our-experience-array-item']}>
          <h3 className={styles['our-experience-array-item-title']}>50+</h3>
          <p className={styles['our-experience-array-item-subtitle']}>
            Team Member
          </p>
        </div>
        <div className={styles['our-experience-array-item']}>
          <h3 className={styles['our-experience-array-item-title']}>15+</h3>
          <p className={styles['our-experience-array-item-subtitle']}>
            Our Company
          </p>
        </div>
      </div>
    </div>
  )
}
