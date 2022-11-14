import styles from './HomeFooter.module.css'
import mainLogo from '../../../../assets/icons/digiency-footer.svg'
import { MediaLinks } from '../../../../components/MediaLinks/MediaLinks'
import copyrightIcon from '../../../../assets/icons/copyright-icon.svg'
import { BackToTopButton } from '../../../../components/BackToTopButton/BackToTopButton'
import circleIcon from '../../../../assets/icons/blank-circle-home-footer.svg'

export function HomeFooter() {
  return (
    <footer className={styles['home-footer']}>
      <div className={styles['top-part']}>
        <div className={styles['content-column']}>
          {' '}
          <img className={styles['logo-img']} src={mainLogo} alt="" />{' '}
          <p className={styles['text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            facilisi quis risus egestas ipsum.
          </p>{' '}
        </div>
        <div className={styles['content-column']}>
          {' '}
          <h2 className={styles['title']}>Location</h2>{' '}
          <h4 className={styles['content']}>
            3517 W. Gray St. Utica, Pennsylvania 57867
          </h4>
        </div>
        <div className={styles['content-column']}>
          <h2 className={styles['title']}>Call Us</h2>
          <p className={styles['content']}>(252) 555-0126</p>
          <p className={styles['content']}>info@youremai.com</p>
        </div>
        <div className={styles['content-column']}>
          {' '}
          <h2 className={styles['title']}>Follow Us</h2>{' '}
          <MediaLinks
            facebookLink="/"
            instLink="/"
            twitterLink="/"
            skypeLink="/"
          />
        </div>
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['copyright-part']}>
          <img
            className={styles['copyright-icom']}
            src={copyrightIcon}
            alt=""
          />
          <p className={styles['copyright-text']}>
            {' '}
            Copyright 2021. All Right Reserved By Ojjomedia
          </p>
        </div>
        <div className={styles['footer-info']}>
          <div className={styles['footer-info-item']}>
            <img
              className={styles['footer-info-item-img']}
              src={circleIcon}
              alt=""
            />
            <h4 className={styles['footer-info-item-text']}>Privacy Plicy</h4>
          </div>
          <div className={styles['footer-info-item']}>
            <img
              className={styles['footer-info-item-img']}
              src={circleIcon}
              alt=""
            />
            <h4 className={styles['footer-info-item-text']}>Therms of Us</h4>
          </div>
        </div>
        <BackToTopButton className={styles['back-to-top-button']} />
      </div>
    </footer>
  )
}
