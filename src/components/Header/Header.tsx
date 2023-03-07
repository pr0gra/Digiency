import styles from './Header.module.css'
import digiencyMainLogo from '../../assets/icons/digiency-main-logo.svg'
import darkBurgerMenu from '../../assets/icons/burger-menu-dark-theme.png'
import burgerMenu from '../../assets/icons/burger-menu.svg'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HTMLAttributes } from 'react'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { ButtonTheme } from '../ButtonTheme/ButtonTheme'
import { useInView } from 'react-intersection-observer'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux'

interface HeaderProps {
  HomeVisibleButton?: boolean
}

type Props = HeaderProps & HTMLAttributes<HTMLDivElement>

export function Header({ HomeVisibleButton, ...rest }: Props) {
  const [menuVisible, setMenuVisible] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const isDarkTheme = useSelector((state: RootState) => state.theme.darkTheme)

  return (
    <header ref={ref} {...rest} className={styles['header']}>
      <Link to="/">
        <h2>
          <span>Digi</span>ency
        </h2>
      </Link>
      <button
        onClick={e => {
          setMenuVisible(!menuVisible)
        }}
        className={styles['burger-menu-button']}
      >
        <img
          className={cx(
            styles['burger-menu-img'],
            inView ? styles['in-view-burger'] : styles['out-view-burger'],
          )}
          src={isDarkTheme ? darkBurgerMenu : burgerMenu}
          alt=""
        />
      </button>

      <ul
        className={cx(
          menuVisible
            ? styles['animated-navigation-mobile']
            : styles['visible-navigation-mobile'],
          styles['navigation-mobile'],
        )}
      >
        <li className={styles['item-mobile']}>
          <Link
            onClick={e => {
              setMenuVisible(!menuVisible)
            }}
            to="/home"
            className={styles['item-link-mobile']}
          >
            <h4 className={styles['item-text-mobile']}>Home</h4>
          </Link>
        </li>
        <li className={styles['item-mobile']}>
          <a className={styles['item-link-mobile']}>
            <h4 className={styles['item-text-mobile']}>About Us</h4>
          </a>
        </li>
        <li className={styles['item-mobile']}>
          <a className={styles['item-link-mobile']}>
            <h4 className={styles['item-text-mobile']}>Our Work</h4>
          </a>
        </li>
        <li className={styles['item-mobile']}>
          <a className={styles['item-link-mobile']}>
            <h4 className={styles['item-text-mobile']}>Clients</h4>
          </a>
        </li>
        <li className={styles['item-mobile']}>
          <Link to="/blog" className={styles['item-link-mobile']}>
            <h4 className={styles['item-text-mobile']}>Our Blog</h4>
          </Link>
        </li>
        <li className={styles['item-mobile']}>
          <a className={styles['item-link-mobile']}>
            <h4 className={styles['item-text-mobile']}>Contact Us</h4>
          </a>
        </li>
      </ul>

      <nav className={styles['navigation']}>
        <ul
          className={cx(
            styles['list'],
            inView ? styles['in-view-menu'] : styles['out-view-menu'],
          )}
        >
          <li className={styles['item']}>
            <Link to="/home" className={styles['item-link']}>
              <h4
                className={cx(
                  styles['item-text'],
                  window.location.pathname === '/home' &&
                    styles['active-item-text'],
                )}
              >
                Home
              </h4>
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
            <Link
              onClick={e => {
                console.log(window.location.pathname)
              }}
              to="/blog"
              className={styles['item-link']}
            >
              <h4
                className={cx(
                  styles['item-text'],
                  window.location.pathname === '/blog' &&
                    styles['active-item-text'],
                )}
              >
                Our Blog
              </h4>
            </Link>
          </li>
          <li className={styles['item']}>
            <a className={styles['item-link']}>
              <h4 className={styles['item-text']}>Contact Us</h4>
            </a>
          </li>
        </ul>
      </nav>

      {!HomeVisibleButton ? (
        <div className={styles['theme-icon-container']}>
          <ButtonTheme />
        </div>
      ) : (
        <button className={styles['button']}>
          <h4 className={styles['button-text']}> Let’s Talk</h4>
        </button>
      )}
    </header>
  )
}
