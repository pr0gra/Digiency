import styles from './Header.module.css'
import digiencyMainLogo from '../../assets/icons/digiency-main-logo.svg'

import burgerMenu from '../../assets/icons/burger-menu.svg'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HTMLAttributes } from 'react'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { ButtonTheme } from '../ButtonTheme/ButtonTheme'
import { useInView } from 'react-intersection-observer'

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
          src={burgerMenu}
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
                style={{
                  color:
                    window.location.pathname === '/home' &&
                    'var(--orange-permanent)',
                }}
                className={styles['item-text']}
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
                style={{
                  color:
                    window.location.pathname === '/blog' &&
                    'var(--orange-permanent)',
                }}
                className={styles['item-text']}
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

      <button
        className={styles['button']}
        style={{ display: HomeVisibleButton ? 'flex' : 'none' }}
      >
        <h4 className={styles['button-text']}> Let’s Talk</h4>
      </button>

      {!HomeVisibleButton && (
        <div className={styles['theme-icon']}>
          <ButtonTheme />
        </div>
      )}
    </header>
  )
}
