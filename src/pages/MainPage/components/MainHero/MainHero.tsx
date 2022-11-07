import mainHeroImg from '../../../../assets/images/main-hero-img.svg'
import { Button } from '../../../../components/Button/Button'
import { MediaLinks } from '../../../../components/MediaLinks/MediaLinks'
import styles from './MainHero.module.css'

export function MainHero() {
  return (
    <div className={styles['main-hero']}>
      <MediaLinks
        className={styles['media-links']}
        facebookLink="/"
        instLink="/"
        twitterLink="/"
        skypeLink="/"
      />
      <img className={styles['hero-img']} src={mainHeroImg} alt="" />{' '}
      <div className={styles['main-hero-text-part']}>
        <h1 className={styles['main-hero-text-part-title']}>
          We Are The Best
          <span> Digital Agency </span> for business
        </h1>
        <p className={styles['main-hero-text-part-subtitle']}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. .
        </p>
        <Button buttonType="button-primary">Contact Us</Button>
      </div>
    </div>
  )
}
