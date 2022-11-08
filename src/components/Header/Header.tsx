import styles from './Header.module.css'
import digiencyMainLogo from '../../assets/icons/digiency-main-logo.svg'
import themeIcon from '../../assets/icons/theme-icon.svg'
import burgerMenu from '../../assets/icons/burger-menu.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'

export function Header() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={styles['header']}>
      <Link to="/">
        <img
          className={styles['digiency-main-logo']}
          src={digiencyMainLogo}
          alt=""
        />
      </Link>
      <button className={styles['']}>
        {' '}
        <img className={styles['burger-menu']} src={burgerMenu} alt="" />
      </button>
      <nav className={styles['navigation']}>
        <ul className={styles['list']}>
          <li className={styles['item']}>
            <Link to="/home" className={styles['item-link']}>
              <h4 className={styles['item-text']}>Home</h4>
            </Link>
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
