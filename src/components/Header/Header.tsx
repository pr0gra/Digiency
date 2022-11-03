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
      <img className={styles['burger-menu']} src={burgerMenu} alt="" />
      <nav className={styles['navigation']}>
        <ul className={styles['list']}>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>Home</h4>
            </a>
          </li>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>About Us</h4>
            </a>
          </li>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>Our Work</h4>
            </a>
          </li>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>Clients</h4>
            </a>
          </li>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>Our Blog</h4>
            </a>
          </li>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>Contact Us</h4>
            </a>
          </li>
        </ul>
      </nav>
      <img className={styles['theme-icon']} src={themeIcon} alt="" />
    </div>
  )
}
