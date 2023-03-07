import { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './MediaLinks.module.css'
import facebookLogo from '../../assets/icons/facebook-fill.svg'
import instLogo from '../../assets/icons/instagram-fill.svg'
import twitterLogo from '../../assets/icons/twitter-fill.svg'
import skypeLogo from '../../assets/icons/skype-fill.svg'
import { RootState } from '../../../redux'
import cx from 'classnames'
import { useSelector } from 'react-redux'

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
  const theme = useSelector((state: RootState) => state.theme.darkTheme)

  return (
    <div className={styles['media-links']} {...rest}>
      <a
        className={cx(styles['link'], theme && styles['dark-link'])}
        href="https://www.google.ru/"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={theme ? styles['dark-mode'] : ''}
        >
          <g clip-path="url(#clip0_332_4181)">
            <path
              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
              fill="#FF5300"
            />
          </g>
          <defs>
            <clipPath id="clip0_332_4181">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        className={cx(styles['link'], theme && styles['dark-link'])}
        href={instLink}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={theme ? styles['dark-mode'] : ''}
        >
          <path
            d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
            fill="#FF5300"
          />
        </svg>
      </a>
      <a
        className={cx(styles['link'], theme && styles['dark-link'])}
        href={twitterLink}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={theme ? styles['dark-mode'] : ''}
        >
          <g clipPath="url(#clip0_3129_139)">
            <path
              d="M22.162 5.656a8.383 8.383 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.395 8.395 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 0 0 2.087-2.165l-.001-.001z"
              fill="#ff5300"
            />
          </g>
          <defs>
            <clipPath id="clip0_3129_139">
              <path fill="#ff5300" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        className={cx(styles['link'], theme && styles['dark-link'])}
        href={skypeLink}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={theme ? styles['dark-mode'] : ''}
        >
          <path
            d="M13.31 20.4a8.5 8.5 0 0 1-9.71-9.71 5.25 5.25 0 0 1 7.09-7.09 8.5 8.5 0 0 1 9.71 9.71 5.25 5.25 0 0 1-7.09 7.09zm-1.258-3.244h-.04c2.872 0 4.303-1.386 4.303-3.243 0-1.198-.551-2.471-2.726-2.958l-1.983-.44c-.755-.172-1.622-.4-1.622-1.115s.62-1.213 1.724-1.213c2.23 0 2.027 1.528 3.131 1.528.576 0 1.093-.342 1.093-.93 0-1.37-2.197-2.4-4.056-2.4-2.021 0-4.173.859-4.173 3.144 0 1.098.394 2.27 2.56 2.813l2.689.671c.816.202 1.018.659 1.018 1.072 0 .687-.684 1.358-1.918 1.358-2.417 0-2.078-1.857-3.374-1.857-.58 0-1.003.398-1.003.971 0 1.114 1.352 2.598 4.377 2.598v.001z"
            fill="#ff5300"
          />
        </svg>
      </a>
    </div>
  )
}
