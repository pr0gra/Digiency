import styles from './BackToTopButton.module.css'
import arrowUp from '../../assets/icons/arrow-up-fill.svg'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement>

export function BackToTopButton({ ...rest }: Props) {
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={styles['back-to-top-button']}
      onClick={scrollUp}
      {...rest}
    >
      <img className={styles['img']} src={arrowUp} alt="" />
    </button>
  )
}
