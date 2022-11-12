import styles from './Hero.module.css'
import homeHero from '../../../../assets/images/home-hero.svg'
import { Button } from '../../../../components/Button/Button'

export function Hero() {
  return (
    <div className={styles['hero']}>
      <img className={styles['img']} src={homeHero} alt="" />
      <div className={styles['text-part']}>
        <h1 className={styles['title']}>
          Choose What Matters To Your Business & Your Customers.
        </h1>
        <p className={styles['subtitle']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          digni ssim euismod purus donec mus vulputate habitant iaculis. Com odo
          enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
        </p>
        <Button buttonType="button-primary">Get Start Now</Button>
      </div>
    </div>
  )
}
