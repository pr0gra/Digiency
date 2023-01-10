import { useInView } from 'react-intersection-observer'
import mainHeroImg from '../../../../assets/images/main-hero-img.svg'
import { Button } from '../../../../components/Button/Button'
import { MediaLinks } from '../../../../components/MediaLinks/MediaLinks'
import styles from './MainHero.module.css'
import cx from 'classnames'

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
      <img className={cx(styles['hero-img'])} src={mainHeroImg} alt="" />{' '}
      <div className={cx(styles['main-hero-text-part'])}>
        <h1 className={styles['main-hero-text-part-title']}>
          We Are The Best
          <span> Digital Agency </span> for business
        </h1>
        <p className={styles['main-hero-text-part-subtitle']}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. .
        </p>
        <Button
          onClick={e => (window.location.href = '#contact-us')}
          buttonType="button-primary"
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}
