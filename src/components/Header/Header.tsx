import styles from './Header.module.css'
import digiencyMainLogo from '../../assets/icons/digiency-main-logo.svg'
import themeIcon from '../../assets/icons/theme-icon.svg'
import burgerMenu from '../../assets/icons/burger-menu.svg'

export function Header() {
  return (
    <div className={styles['header']}>
      <img
        className={styles['digiency-main-logo']}
        src={digiencyMainLogo}
        alt=""
      />
      <img className={styles['theme-icon']} src={themeIcon} alt="" />
      <img className={styles['burger-menu']} src={burgerMenu} alt="" />
    </div>
  )
}
