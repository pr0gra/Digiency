import { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './MediaLinks.module.css'
import facebookLogo from '../../assets/icons/facebook-fill.svg'
import instLogo from '../../assets/icons/instagram-fill.svg'
import twitterLogo from '../../assets/icons/twitter-fill.svg'
import skypeLogo from '../../assets/icons/skype-fill.svg'

interface MediaLinksProps {
  facebookLink: string
  instLink: string
  twitterLink: string
  skypeLink: string
}

type Props = MediaLinksProps & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function MediaLinks({
  facebookLink,
  instLink,
  twitterLink,
  skypeLink,
  ...rest
}: Props) {
  return (
    <div className={styles['media-links']} {...rest}>
      {/* <a className={styles['link']} href="https://www.google.ru/">
        <img className={styles['img']} src={facebookLogo} alt="" />
      </a> */}
      <a className={styles['link']} href={instLink}>
        <img className={styles['img']} src={instLogo} alt="" />
      </a>
      <a className={styles['link']} href={twitterLink}>
        <img className={styles['img']} src={twitterLogo} alt="" />
      </a>
      <a className={styles['link']} href={skypeLink}>
        <img className={styles['img']} src={skypeLogo} alt="" />
      </a>
    </div>
  )
}
