import styles from './FooterBottom.module.css'
import copyrightIcon from '../../assets/icons/copyright-icon.svg'
import { BackToTopButton } from '../BackToTopButton/BackToTopButton'

export function FooterBottom() {
  return (
    <div className={styles['footer-bottom']}>
      <img className={styles['img']} src={copyrightIcon} alt="" />

      <p className={styles['text']}>
        Copyright 2021. All Right Reserved By Ojjomedia
      </p>

      <BackToTopButton />
    </div>
  )
}
