import styles from './HomeHeader.module.css'
import digiencyMainLogo from '../../../../assets/icons/digiency-main-logo.svg'
import themeIcon from '../../../../assets/icons/theme-icon.svg'
import burgerMenu from '../../../../assets/icons/burger-menu.svg'

export function HomeHeader() {
  return (
    <>
      <img
        className={styles['digiency-main-logo']}
        src={digiencyMainLogo}
        alt=""
      />
      <button className={styles['theme-button']}>
        <img className={styles['theme-icon']} src={themeIcon} alt="" />
      </button>
      <button className={styles['burger-menu-button']}>
        <img className={styles['burger-menu-icon']} src={burgerMenu} alt="" />
      </button>
    </>
  )
}
